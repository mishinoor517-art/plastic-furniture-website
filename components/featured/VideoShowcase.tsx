"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { getShowcaseVideos } from "@/lib/cms/service";
import { useCmsData } from "@/lib/cms/useCmsData";
import VideoCard from "./VideoCard";
import { EmptyState, ErrorState, LoadingSkeleton } from "./StateViews";

export default function VideoShowcase() {
  const videos = useCmsData(getShowcaseVideos);
  const [activeId, setActiveId] = useState<string | null>(null);

  return (
    <section className="border-b border-[#E5E5E5] bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-12 max-w-xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-extrabold tracking-tight text-[#222222] sm:text-4xl"
          >
            Video Showcase
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-base font-light text-neutral-500"
          >
            A closer look at how it&apos;s made, tested, and lived with.
          </motion.p>
        </div>

        {videos.status === "loading" && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <LoadingSkeleton className="aspect-[4/5] w-full" />
            <LoadingSkeleton className="aspect-[4/5] w-full" />
            <LoadingSkeleton className="aspect-[4/5] w-full" />
          </div>
        )}

        {videos.status === "error" && (
          <ErrorState message={videos.message} onRetry={videos.retry} />
        )}

        {videos.status === "success" && videos.data.length === 0 && (
          <EmptyState message="Video content coming soon." />
        )}

        {videos.status === "success" && videos.data.length > 0 && (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {videos.data.slice(0, 3).map((video) => (
              <VideoCard
                key={video.id}
                video={video}
                isActive={activeId === video.id}
                onActivate={() => setActiveId(video.id)}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
