"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { heroSlides } from "../lib/data";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const slideVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.4 },
    },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
    transition: {
      x: { type: "spring", stiffness: 300, damping: 30 },
      opacity: { duration: 0.4 },
    },
  }),
};

export default function HeroSlider() {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isHovered, setIsHovered] = useState(false);
  const slideIndex = Math.abs(page % heroSlides.length);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const paginate = useCallback((newDirection: number) => {
    setPage(([prevPage]) => [prevPage + newDirection, newDirection]);
  }, []);

  const handleNext = useCallback(() => paginate(1), [paginate]);
  const handlePrev = useCallback(() => paginate(-1), [paginate]);

  // Handle auto-slide every 3 seconds, pause on hover
  useEffect(() => {
    if (isHovered) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      handleNext();
    }, 3000); // 3 seconds transition time requested by user

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered, handleNext]);

  return (
    <section
      className="relative w-full overflow-hidden bg-[#FAF9F6] border-b border-[#E5E5E5] h-[450px] sm:h-[550px] md:h-[550px] lg:h-[650px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slider Carousel */}
      <div className="relative w-full h-full">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full flex items-center"
          >
            {/* Visual Part */}
            <div className="relative w-full h-full">
              {/* Main Image */}
              <Image
                src={heroSlides[slideIndex].image}
                alt={heroSlides[slideIndex].title}
                fill
                priority
                sizes="100vw"
                className="object-cover object-center select-none"
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Navigation Arrows */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 sm:w-12 h-10 sm:h-12 bg-white/80 hover:bg-white border border-[#E5E5E5] text-[#222222] hover:text-[#606C38] rounded-full flex items-center justify-center transition-all duration-200 shadow-md hover:shadow-lg z-20 group focus:outline-none"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 transition-transform duration-200 group-hover:-translate-x-0.5" />
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 sm:w-12 h-10 sm:h-12 bg-white/80 hover:bg-white border border-[#E5E5E5] text-[#222222] hover:text-[#606C38] rounded-full flex items-center justify-center transition-all duration-200 shadow-md hover:shadow-lg z-20 group focus:outline-none"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-0.5" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2.5 z-20">
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              const currentIdx = Math.abs(page % heroSlides.length);
              const dir = idx > currentIdx ? 1 : -1;
              setPage([page + (idx - currentIdx), dir]);
            }}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              slideIndex === idx ? "w-8 bg-[#606C38]" : "w-2.5 bg-neutral-300 hover:bg-neutral-400"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
