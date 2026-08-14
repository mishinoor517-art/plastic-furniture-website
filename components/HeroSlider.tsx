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
        h-[700px]

        /* Small screens */
        sm:h-[750px]

        /* Tablet */
        md:h-[600px]

        /* Desktop */
        lg:h-[650px]
      "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Slider */}
      <div className="relative w-full h-full">
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
              absolute
              inset-0
              w-full
              h-full
              flex
              items-center
              justify-center
            "
          >
            {/* IMAGE CONTAINER */}
            <div className="relative w-full h-full">
              {/*
                Soft blurred backdrop (mobile / tablet / small-laptop only).
                Our hero photos are landscape-ish (~1.5:1) while the mobile
                hero box is short (~350-400px), so a full-bleed object-contain
                image always ends up touching the left/right edges with
                empty space above and below it. Instead of leaving that gap
                plain, we fill it with a blurred, tinted copy of the same
                image so the section reads as one cohesive "banner" rather
                than a photo floating on bare background.
                Hidden on lg+ so the existing desktop look is untouched.
              */}
              <div
                className="absolute inset-0 overflow-hidden lg:hidden"
                aria-hidden="true"
              >
                <Image
                  src={heroSlides[slideIndex].image}
                  alt=""
                  fill
                  sizes="100vw"
                  className="object-cover scale-125 blur-2xl opacity-40 select-none"
                />
                <div className="absolute inset-0 bg-[#FAF9F6]/70" />
              </div>

              {/*
                Foreground: the COMPLETE, un-cropped hero image.
                Inset padding below lg keeps the photo from touching the
                screen edges edge-to-edge, so on phones it reads as a
                framed, balanced banner image instead of one long thin
                strip - without ever cropping any part of the picture
                (object-contain never crops, only letterboxes).
                lg+ keeps the original edge-to-edge layout untouched.
              */}
             <div 
 className="
   relative w-full h-full 
   flex items-center justify-center
   px-0
   py-0
 "
>
                <div className="relative w-full h-full drop-shadow-lg lg:drop-shadow-none">
                  <Image
                    src={heroSlides[slideIndex].image}
                    alt={heroSlides[slideIndex].title}
                    fill
                    priority
                    sizes="100vw"
                    className="
                      object-contain
                      object-center
                      select-none
                    "
                  />
                </div>
              </div>
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