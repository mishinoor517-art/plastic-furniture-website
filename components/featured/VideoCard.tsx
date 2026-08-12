"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Pause, Play } from "lucide-react";
import { CmsVideo } from "@/lib/cms/types";

interface VideoCardProps {
  video: CmsVideo;
  isActive: boolean;
  onActivate: () => void;
}

export default function VideoCard({ video, isActive, onActivate }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [inView, setInView] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Pausing here triggers the <video onPause> handler, which is the single
    // source of truth for `isPlaying` — no need to setState here directly.
    if (!isActive || !inView) {
      videoRef.current?.pause();
    }
  }, [isActive, inView]);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!isActive) {
      onActivate();
      requestAnimationFrame(() => {
        videoRef.current?.play();
        setIsPlaying(true);
      });
      return;
    }
    if (isPlaying) {
      videoRef.current?.pause();
      setIsPlaying(false);
    } else {
      videoRef.current?.play();
      setIsPlaying(true);
    }
  };

  return (
    <motion.div
      ref={wrapperRef}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      onClick={togglePlay}
      className={`group relative aspect-[4/5] w-full cursor-pointer overflow-hidden rounded-3xl bg-[#222222] shadow-lg transition-all duration-300 ${
        isActive ? "ring-2 ring-[#C5A880] ring-offset-2 ring-offset-white" : ""
      }`}
    >
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-contain"
        src={video.videoUrl}
        poster={video.thumbnail}
        preload="none"
        playsInline
        loop
        muted
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      />

      <div
        className={`absolute inset-0 bg-gradient-to-t from-[#0f0f0f]/85 via-[#0f0f0f]/10 to-transparent transition-opacity duration-300 ${
          isPlaying && isActive ? "opacity-40 group-hover:opacity-70" : "opacity-100"
        }`}
      />

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
        <div className="min-w-0">
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#C5A880]">
            {video.category}
          </span>
          <h3 className="mt-1 truncate text-base font-bold text-white">{video.title}</h3>
          <p className="mt-1 line-clamp-2 text-xs text-white/70">{video.description}</p>
        </div>

        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/90 text-[#222222] shadow-md transition-transform group-hover:scale-105">
          {isPlaying && isActive ? (
            <Pause className="h-4 w-4" fill="currentColor" />
          ) : (
            <Play className="ml-0.5 h-4 w-4" fill="currentColor" />
          )}
        </span>
      </div>
    </motion.div>
  );
}
