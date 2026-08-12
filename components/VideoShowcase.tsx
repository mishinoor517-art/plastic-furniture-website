"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { videoShowcaseItems } from "../lib/data";
import VideoCard from "./VideoCard";

export default function VideoShowcase() {
  // Only one video across the whole section is ever "active" (playing) at a
  // time -- clicking another card's play button pauses this one and starts
  // that one instead.
  const [activeId, setActiveId] = useState<number | null>(null);

  return (
    <section id="videos" className="scroll-mt-20 border-b border-[#E5E5E5] bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-extrabold tracking-tight text-[#222222] sm:text-4xl"
          >
            See It In Motion
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-base font-light text-neutral-500"
          >
            A closer look at our craftsmanship, in the showroom and beyond.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {videoShowcaseItems.map((video, idx) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <VideoCard
                video={video}
                isActive={activeId === video.id}
                onActivate={() => setActiveId(video.id)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
