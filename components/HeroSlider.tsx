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
      x: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
      opacity: {
        duration: 0.4,
      },
    },
  },

  exit: (direction: number) => ({
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0,
    transition: {
      x: {
        type: "spring",
        stiffness: 300,
        damping: 30,
      },
      opacity: {
        duration: 0.4,
      },
    },
  }),
};

export default function HeroSlider() {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isHovered, setIsHovered] = useState(false);

  const slideIndex = Math.abs(page % heroSlides.length);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const paginate = useCallback((newDirection: number) => {
    setPage(([prevPage]) => [
      prevPage + newDirection,
      newDirection,
    ]);
  }, []);

  const handleNext = useCallback(() => {
    paginate(1);
  }, [paginate]);

  const handlePrev = useCallback(() => {
    paginate(-1);
  }, [paginate]);

  // Auto slide every 3 seconds
  useEffect(() => {
    if (isHovered) {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }

      return;
    }

    timerRef.current = setInterval(() => {
      handleNext();
    }, 3000);

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isHovered, handleNext]);

  return (
    <section
      className="
        relative
        w-full
        overflow-hidden
        bg-[#FAF9F6]
        border-b
        border-[#E5E5E5]

        /* Mobile */
        min-h-[220px]

        /* Small screens */
        sm:min-h-[350px]

        /* Tablet */
        md:min-h-[500px]

        /* Desktop */
        lg:min-h-[650px]
      "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slider */}
      <div className="relative w-full">
        <AnimatePresence
          initial={false}
          custom={direction}
        >
          <motion.div
            key={page}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="
              relative
              w-full
              flex
              items-center
              justify-center
            "
          >
            {/* IMAGE CONTAINER */}
            <div className="relative w-full flex justify-center">
              <Image
                src={heroSlides[slideIndex].image}
                alt={heroSlides[slideIndex].title}
                width={1920}
                height={650}
                priority
                sizes="100vw"
                className="
                  block
                  w-full
                  h-auto
                  object-contain
                  object-center
                  select-none
                "
              />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Previous Button */}
      <button
        onClick={handlePrev}
        className="
          absolute
          left-2
          sm:left-4
          top-1/2
          -translate-y-1/2

          w-9
          sm:w-12

          h-9
          sm:h-12

          bg-white/80
          hover:bg-white

          border
          border-[#E5E5E5]

          text-[#222222]
          hover:text-[#606C38]

          rounded-full

          flex
          items-center
          justify-center

          transition-all
          duration-200

          shadow-md
          hover:shadow-lg

          z-20
          group
          focus:outline-none
        "
        aria-label="Previous slide"
      >
        <ChevronLeft
          className="
            w-5
            h-5
            transition-transform
            duration-200
            group-hover:-translate-x-0.5
          "
        />
      </button>

      {/* Next Button */}
      <button
        onClick={handleNext}
        className="
          absolute
          right-2
          sm:right-4
          top-1/2
          -translate-y-1/2

          w-9
          sm:w-12

          h-9
          sm:h-12

          bg-white/80
          hover:bg-white

          border
          border-[#E5E5E5]

          text-[#222222]
          hover:text-[#606C38]

          rounded-full

          flex
          items-center
          justify-center

          transition-all
          duration-200

          shadow-md
          hover:shadow-lg

          z-20
          group
          focus:outline-none
        "
        aria-label="Next slide"
      >
        <ChevronRight
          className="
            w-5
            h-5
            transition-transform
            duration-200
            group-hover:translate-x-0.5
          "
        />
      </button>

      {/* Pagination Dots */}
      <div
        className="
          absolute
          bottom-3
          sm:bottom-6
          left-1/2
          -translate-x-1/2

          flex
          items-center
          gap-2.5

          z-20
        "
      >
        {heroSlides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              const currentIdx = Math.abs(
                page % heroSlides.length
              );

              const dir =
                idx > currentIdx ? 1 : -1;

              setPage([
                page + (idx - currentIdx),
                dir,
              ]);
            }}
            className={`
              h-2.5
              rounded-full
              transition-all
              duration-300

              ${
                slideIndex === idx
                  ? "w-8 bg-[#606C38]"
                  : "w-2.5 bg-neutral-300 hover:bg-neutral-400"
              }
            `}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}