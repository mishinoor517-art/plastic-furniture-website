"use client";

import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useSyncExternalStore,
} from "react";
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

// Matches Tailwind's default `md` breakpoint (768px). Below this we treat
// the viewport as "mobile" and load the dedicated vertical hero image.
const MOBILE_BREAKPOINT_QUERY = "(max-width: 767px)";

// useSyncExternalStore is the React-recommended way to read a browser-only
// value (like a media query) that can change over time. Unlike doing this
// in a useEffect + setState, it doesn't cause an extra render pass and it
// plays correctly with SSR: the server snapshot is used for the first
// paint, then React reconciles to the real client value right after
// hydration - so there's no "flash of wrong image" and no hydration
// mismatch warning.
function subscribe(callback: () => void) {
  const mediaQuery = window.matchMedia(MOBILE_BREAKPOINT_QUERY);
  mediaQuery.addEventListener("change", callback);
  return () => mediaQuery.removeEventListener("change", callback);
}

function getSnapshot() {
  return window.matchMedia(MOBILE_BREAKPOINT_QUERY).matches;
}

// The server doesn't know the viewport. Default to "desktop" (false) so
// the very first HTML sent to the browser (and to crawlers/no-JS clients)
// contains the wide banner - React then swaps to the mobile image on the
// client if the media query says otherwise.
function getServerSnapshot() {
  return false;
}

export default function HeroSlider() {
  const [[page, direction], setPage] = useState([0, 0]);
  const [isHovered, setIsHovered] = useState(false);

  const isMobile = useSyncExternalStore(
    subscribe,
    getSnapshot,
    getServerSnapshot
  );

  const slideIndex = Math.abs(page % heroSlides.length);

  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const paginate = useCallback((newDirection: number) => {
    setPage(([prevPage]) => [prevPage + newDirection, newDirection]);
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

  const currentSlide = heroSlides[slideIndex];

  return (
    <section
      className="
        relative
        z-0
        w-full
        max-w-[100vw]
        overflow-hidden
        bg-[#FAF9F6]
        border-b
        border-[#E5E5E5]
      "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/*
        IMAGE STAGE
        ------------------------------------------------------------------
        The box itself is sized purely with CSS aspect-ratio utilities, so
        it always has the right shape the instant the page paints - no
        waiting on JS, no layout shift, and no way for it to overflow the
        viewport width (w-full + aspect-ratio derives height from width).

        - Mobile (<768px): tall vertical banner, matches a 1080x1600 /
          1080x1920 image almost exactly, so object-contain shows the full
          banner (heading, product, CTA, features) with no cropping and no
          dead space.
        - md and up (>=768px): wide landscape banner, same footprint as the
          original desktop design.
      */}
      <div
        className="
          relative
          w-full

          aspect-[1080/1600]

          md:aspect-[1920/700]
          lg:aspect-[1920/650]
        "
      >
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={page}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="absolute inset-0 w-full h-full"
          >
            {isMobile ? (
              <div className="relative w-full h-full bg-[#FAF9F6]">
                <Image
                  src={currentSlide.mobileImage}
                  alt={currentSlide.title}
                  fill
                  priority={slideIndex === 0}
                  sizes="100vw"
                  // Never crop the mobile banner - it carries the heading,
                  // description, CTA and product shot baked into the
                  // artwork, so object-contain (not object-cover) keeps
                  // every bit of that content visible.
                  className="object-contain object-center select-none"
                />
              </div>
            ) : (
              <div className="relative w-full h-full">
                <Image
                  src={currentSlide.desktopImage}
                  alt={currentSlide.title}
                  fill
                  priority={slideIndex === 0}
                  sizes="100vw"
                  className="object-cover object-center select-none"
                />
              </div>
            )}
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
              const currentIdx = Math.abs(page % heroSlides.length);
              const dir = idx > currentIdx ? 1 : -1;

              setPage([page + (idx - currentIdx), dir]);
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
