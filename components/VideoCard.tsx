"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Pause, Play } from "lucide-react";
import { VideoShowcaseItem } from "../lib/data";

interface VideoCardProps {
  video: VideoShowcaseItem;
  isActive: boolean;
  onActivate: () => void;
}

export default function VideoCard({ video, isActive, onActivate }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showNotice, setShowNotice] = useState(false);

  // Whenever another card becomes active, pause this one so only a single
  // video ever plays at the same time.
  useEffect(() => {
    if (!isActive) {
      videoRef.current?.pause();
    }
  }, [isActive]);

  const handlePlayClick = () => {
    if (!video.src) {
      // No source configured yet -- surface a brief, friendly notice
      // instead of trying to play an empty/placeholder video.
      setShowNotice(true);
      window.setTimeout(() => setShowNotice(false), 1800);
      return;
    }

    onActivate();
    // Wait a tick so the <video> element (only rendered once active) exists.
    requestAnimationFrame(() => {
      videoRef.current?.play();
    });
  };

  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-[#E5E5E5] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-video w-full overflow-hidden bg-[#F8F4ED]">
        {isActive && video.src ? (
          <video
            ref={videoRef}
            src={video.src}
            poster={video.poster}
            controls
            autoPlay
            playsInline
            preload="none"
            className="h-full w-full object-contain"
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
          >
            Your browser does not support embedded videos.
          </video>
        ) : (
          <>
            <Image
              src={video.poster}
              alt={video.title}
              fill
              loading="lazy"
              className="object-contain transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/25 transition-colors duration-300 group-hover:bg-black/35" />
            <button
              type="button"
              onClick={handlePlayClick}
              aria-label={`Play video: ${video.title}`}
              className="absolute inset-0 flex items-center justify-center focus:outline-none"
            >
              <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-[#606C38] shadow-lg transition-transform duration-300 group-hover:scale-110 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2">
                <Play className="h-6 w-6 fill-current" />
              </span>
            </button>

            {showNotice && (
              <div className="absolute inset-x-0 bottom-0 bg-[#222222]/85 px-4 py-2 text-center text-xs font-medium text-white">
                Video coming soon
              </div>
            )}
          </>
        )}

        {isActive && isPlaying && (
          <span className="pointer-events-none absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-full bg-black/50 text-white">
            <Pause className="h-3.5 w-3.5 fill-current" />
          </span>
        )}
      </div>

      {(video.title || video.description) && (
        <div className="flex flex-1 flex-col p-5">
          {video.title && (
            <h3 className="mb-1 text-base font-bold text-[#222222]">{video.title}</h3>
          )}
          {video.description && (
            <p className="text-sm font-light leading-relaxed text-neutral-500">
              {video.description}
            </p>
          )}
        </div>
      )}
    </div>
  );
}
