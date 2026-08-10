"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { CmsSlide } from "@/lib/cms/types";

const AUTO_ADVANCE_MS = 5000;

export default function VerticalFeaturedSlider({ slides }: { slides: CmsSlide[] }) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const touchStartY = useRef<number | null>(null);
  const reduceMotion = useReducedMotion();
  const n = slides.length;

  const goTo = useCallback(
    (next: number, dir: number) => {
      setDirection(dir);
      setIndex(((next % n) + n) % n);
    },
    [n]
  );

  useEffect(() => {
    if (paused || reduceMotion || n <= 1) return;
    const timer = setInterval(() => goTo(index + 1, 1), AUTO_ADVANCE_MS);
    return () => clearInterval(timer);
  }, [index, paused, goTo, reduceMotion, n]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartY.current = e.touches[0].clientY;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartY.current === null) return;
    const delta = e.changedTouches[0].clientY - touchStartY.current;
    if (Math.abs(delta) > 40) {
      if (delta < 0) {
        goTo(index + 1, 1);
      } else {
        goTo(index - 1, -1);
      }
    }
    touchStartY.current = null;
  };

  const slide = slides[index];
  if (!slide) return null;

  return (
    <div
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative flex h-full min-h-[420px] flex-col overflow-hidden rounded-3xl border border-white/60 bg-[#222222] shadow-xl"
    >
      <div className="relative flex-1 overflow-hidden">
        <AnimatePresence custom={direction} mode="wait">
          <motion.div
            key={slide.id}
            custom={direction}
            initial={{ y: reduceMotion ? 0 : direction * 32, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: reduceMotion ? 0 : -direction * 32, opacity: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 flex flex-col"
          >
            <div className="relative h-1/2 w-full shrink-0">
              <Image
                src={slide.image}
                alt=""
                fill
                sizes="380px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#222222] via-[#222222]/10 to-transparent" />
            </div>
            <div className="flex flex-1 flex-col justify-between p-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#C5A880]">
                  {slide.category}
                </span>
                <h3 className="mt-2 text-xl font-bold text-white">{slide.title}</h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-white/70">
                  {slide.description}
                </p>
              </div>
              <Link
                href={slide.buttonUrl}
                className="mt-4 inline-flex w-fit items-center gap-1.5 rounded-full border border-white/30 px-4 py-2 text-xs font-semibold text-white transition hover:border-[#C5A880] hover:text-[#C5A880]"
              >
                {slide.buttonText}
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* controls */}
      <div className="absolute right-4 top-4 flex flex-col items-center gap-2">
        <button
          type="button"
          onClick={() => goTo(index - 1, -1)}
          aria-label="Previous slide"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition hover:bg-white/30"
        >
          <ChevronUp className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => goTo(index + 1, 1)}
          aria-label="Next slide"
          className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-sm transition hover:bg-white/30"
        >
          <ChevronDown className="h-4 w-4" />
        </button>
      </div>

      <div className="absolute left-4 top-4 flex flex-col gap-1.5" aria-hidden="true">
        {slides.map((s, i) => (
          <span
            key={s.id}
            className={`w-1.5 rounded-full transition-all duration-300 ${
              i === index ? "h-5 bg-[#C5A880]" : "h-1.5 bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
