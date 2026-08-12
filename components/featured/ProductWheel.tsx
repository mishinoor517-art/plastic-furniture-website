"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { CmsProduct } from "@/lib/cms/types";

interface ProductWheelProps {
  products: CmsProduct[];
  activeIndex: number;
  onSelect: (index: number) => void;
}

const SPRING = { type: "spring" as const, stiffness: 220, damping: 26, mass: 0.9 };

export default function ProductWheel({ products, activeIndex, onSelect }: ProductWheelProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 480, height: 480 });
  const reduceMotion = useReducedMotion();
  const n = products.length;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const ro = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      setSize({ width, height });
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const layout = useMemo(() => {
    const cx = size.width * 0.98;
    const cy = size.height * 0.5;
    const radius = size.width * 0.62;
    const stepRad = (2 * Math.PI) / Math.max(n, 1);

    return products.map((product, i) => {
      let rel = i - activeIndex;
      // shortest angular path so the wheel doesn't spin the long way around
      if (rel > n / 2) rel -= n;
      if (rel < -n / 2) rel += n;

      const angle = Math.PI + rel * stepRad;
      const x = cx + radius * Math.cos(angle);
      const y = cy + radius * Math.sin(angle);
      const distance = Math.abs(rel);
      const isActive = rel === 0;
      const scale = isActive ? 1.18 : Math.max(0.62, 0.98 - distance * 0.16);
      const opacity = isActive ? 1 : Math.max(0.32, 0.9 - distance * 0.22);
      const zIndex = 100 - distance;

      return { product, x, y, scale, opacity, isActive, zIndex };
    });
  }, [products, activeIndex, size, n]);

  const goTo = (delta: number) => {
    const next = (activeIndex + delta + n) % n;
    onSelect(next);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      goTo(1);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      goTo(-1);
    }
  };

  return (
    <div className="relative">
      <div
        ref={containerRef}
        role="listbox"
        aria-label="Featured products"
        tabIndex={0}
        onKeyDown={handleKeyDown}
        className="relative mx-auto aspect-square w-full max-w-[480px] overflow-hidden rounded-[32px] outline-none focus-visible:ring-2 focus-visible:ring-[#C5A880]"
      >
        {/* faint guide circle */}
        <div
          className="pointer-events-none absolute rounded-full border border-[#C5A880]/20"
          style={{
            width: size.width * 1.24,
            height: size.width * 1.24,
            left: size.width * 0.98 - size.width * 0.62,
            top: size.height * 0.5 - size.width * 0.62,
          }}
        />

        {layout.map(({ product, x, y, scale, opacity, isActive, zIndex }, i) => (
          <motion.button
            key={product.id}
            type="button"
            role="option"
            aria-selected={isActive}
            aria-label={`${product.name}${isActive ? " (selected)" : ""}`}
            onClick={() => onSelect(i)}
            animate={
              reduceMotion
                ? { left: x, top: y, opacity }
                : { left: x, top: y, scale, opacity }
            }
            initial={false}
            transition={reduceMotion ? { duration: 0.15 } : SPRING}
            style={{ zIndex, translateX: "-50%", translateY: "-50%" }}
            className="absolute flex items-center justify-center focus-visible:outline-none"
          >
            <span
              className={`relative flex items-center justify-center overflow-hidden rounded-full bg-[#F8F4ED] transition-shadow duration-300 ${
                isActive
                  ? "h-28 w-28 shadow-[0_0_0_4px_rgba(255,255,255,0.9),0_18px_40px_-8px_rgba(197,168,128,0.65)] sm:h-36 sm:w-36"
                  : "h-16 w-16 shadow-md sm:h-20 sm:w-20"
              }`}
            >
              <Image
                src={product.thumbnail}
                alt=""
                fill
                sizes="160px"
                className="object-contain"
              />
            </span>
          </motion.button>
        ))}
      </div>

      <div className="mt-5 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => goTo(-1)}
          aria-label="Previous product"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E5E5E5] bg-white text-[#222222] transition hover:border-[#C5A880] hover:text-[#C5A880]"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <div className="flex items-center gap-1.5" aria-hidden="true">
          {products.map((p, i) => (
            <span
              key={p.id}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === activeIndex ? "w-5 bg-[#C5A880]" : "w-1.5 bg-[#E5E5E5]"
              }`}
            />
          ))}
        </div>
        <button
          type="button"
          onClick={() => goTo(1)}
          aria-label="Next product"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-[#E5E5E5] bg-white text-[#222222] transition hover:border-[#C5A880] hover:text-[#C5A880]"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
