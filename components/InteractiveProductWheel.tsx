"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { wheelProducts } from "../lib/data";
import { formatCurrency } from "../lib/cart";
import ProductSelector from "./ProductSelector";

/*
 * InteractiveProductWheel
 * ------------------------
 * Renders the 4 products from `wheelProducts` (lib/data.ts) as a premium
 * orbit-style selector. One product sits large in the center; the other
 * three sit around it. Every product (center + satellites) is rendered
 * once per render, and Framer Motion's `layout` animation smoothly
 * interpolates each item's position/size whenever the active product
 * changes -- this produces the "moves into the center" effect.
 *
 * The wheel also auto-rotates on its own every few seconds. It pauses
 * while the user is hovering/interacting with it and resumes afterward,
 * and a manual click always restarts the auto-rotation timer.
 */
const SATELLITE_SLOT_CLASSES = [
  "top-[2%] right-[0%] h-[27%] w-[27%]",
  "bottom-[16%] right-[6%] h-[25%] w-[25%]",
  "bottom-[0%] left-[2%] h-[25%] w-[25%]",
];

const CENTER_SLOT_CLASSES = "left-[15%] top-[15%] h-[70%] w-[70%]";
const AUTOPLAY_INTERVAL_MS = 4000;

export default function InteractiveProductWheel() {
  const [activeId, setActiveId] = useState(wheelProducts[0].id);
  const activeProduct = wheelProducts.find((p) => p.id === activeId) ?? wheelProducts[0];

  // Preserve the original relative order of the non-active products so the
  // orbit slots feel stable rather than randomly reshuffling.
  const satelliteOrder = wheelProducts.filter((p) => p.id !== activeId);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goToNext = useCallback(() => {
    setActiveId((currentId) => {
      const currentIndex = wheelProducts.findIndex((p) => p.id === currentId);
      const nextIndex = (currentIndex + 1) % wheelProducts.length;
      return wheelProducts[nextIndex].id;
    });
  }, []);

  // Always auto-rotate — starts immediately on mount, no conditions needed
  useEffect(() => {
    timerRef.current = setInterval(goToNext, AUTOPLAY_INTERVAL_MS);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [goToNext]);

  // Manual click: show selected product and reset the timer so it doesn't
  // jump again immediately after the manual selection.
  const handleSelect = useCallback((id: number) => {
    setActiveId(id);
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(goToNext, AUTOPLAY_INTERVAL_MS);
  }, [goToNext]);

  return (
    <section
      id="style-finder"
      className="scroll-mt-20 border-b border-[#E5E5E5] bg-[#F8F4ED] py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="mx-auto mb-14 max-w-xl text-center">

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-extrabold tracking-tight text-[#222222] sm:text-4xl"
          >
            Find Your Perfect Fit
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-base font-light text-neutral-500"
          >
            Tap a product to explore it up close.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* LEFT: Details panel */}
          <div className="order-2 lg:order-1">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeProduct.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <span className="mb-3 inline-block rounded-full border border-[#606C38]/15 bg-[#606C38]/5 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.15em] text-[#606C38]">
                  {activeProduct.eyebrow}
                </span>

                <h3 className="mb-3 text-2xl font-bold text-[#222222] sm:text-3xl">
                  {activeProduct.name}
                </h3>

                <p className="mb-6 max-w-md text-sm font-light leading-relaxed text-neutral-500 sm:text-base">
                  {activeProduct.description}
                </p>

                <dl className="mb-6 grid grid-cols-2 gap-4 sm:max-w-md">
                  {activeProduct.specs.map((spec) => (
                    <div key={spec.label}>
                      <dt className="text-[10px] font-semibold uppercase tracking-[0.15em] text-neutral-400">
                        {spec.label}
                      </dt>
                      <dd className="mt-0.5 text-sm font-semibold text-[#222222]">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <div className="mb-8 flex items-center gap-4">
                  <p className="text-2xl font-bold text-[#222222]">
                    {formatCurrency(activeProduct.price)}
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <Link
                    href={activeProduct.ctaHref}
                    className="flex items-center justify-center gap-2 rounded-md bg-[#606C38] px-6 py-3 text-xs font-bold uppercase tracking-wide text-white transition-all duration-200 hover:bg-[#4E5A2C]"
                  >
                    {activeProduct.ctaLabel}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                  <button
                    type="button"
                    aria-label="Add to cart"
                    className="flex h-11 w-11 items-center justify-center rounded-md border border-[#E5E5E5] bg-white text-neutral-600 transition-all duration-200 hover:border-[#C5A880] hover:bg-[#C5A880] hover:text-white"
                  >
                    <ShoppingBag className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Selector row -- always visible; on mobile this is the primary
                horizontal carousel-style selector described in the spec. */}
            <div className="mt-10 flex gap-2 overflow-x-auto pb-1 scrollbar-none sm:gap-4">
              {wheelProducts.map((product) => (
                <ProductSelector
                  key={product.id}
                  product={product}
                  isActive={product.id === activeProduct.id}
                  onSelect={() => handleSelect(product.id)}
                />
              ))}
            </div>
          </div>

          {/* RIGHT: Orbit visual (desktop/tablet). On small screens this
              collapses to just the large center image; the row above
              becomes the mobile selector, per spec. */}
          <div className="order-1 lg:order-2">
            <div className="relative mx-auto aspect-square w-full max-w-[420px] sm:max-w-[460px]">
              {/* Soft guide ring to reinforce the "wheel" concept */}
              <div className="pointer-events-none absolute inset-[6%] rounded-full border border-dashed border-[#606C38]/20" />

              {/* Every product is one persistent element. Only its slot
                  (center vs. satellite position) changes between renders,
                  so Framer Motion's layout animation makes it fly/scale
                  smoothly between the center and its orbit position. */}
              {wheelProducts.map((product) => {
                const isActive = product.id === activeProduct.id;
                const satelliteIndex = satelliteOrder.findIndex((p) => p.id === product.id);
                const isVisibleSatellite = !isActive && satelliteIndex !== -1;

                return (
                  <motion.button
                    key={product.id}
                    type="button"
                    layout
                    layoutId={`wheel-product-${product.id}`}
                    transition={{ type: "spring", stiffness: 240, damping: 24 }}
                    onClick={() => handleSelect(product.id)}
                    aria-label={isActive ? product.name : `Show ${product.name}`}
                    aria-current={isActive}
                    disabled={isActive}
                    className={[
                      "absolute overflow-hidden rounded-full border-4 border-white bg-white transition-shadow duration-300",
                      isActive
                        ? `${CENTER_SLOT_CLASSES} z-20 shadow-2xl cursor-default`
                        : `z-10 shadow-md hover:shadow-xl focus:outline-none focus-visible:ring-2 focus-visible:ring-[#606C38] focus-visible:ring-offset-2 ${
                            isVisibleSatellite
                              ? `hidden lg:block ${SATELLITE_SLOT_CLASSES[satelliteIndex % SATELLITE_SLOT_CLASSES.length]}`
                              : "hidden"
                          }`,
                    ].join(" ")}
                  >
                    <span
                      className={`relative block h-full w-full transition-opacity duration-300 ${
                        isActive ? "opacity-100" : "opacity-90 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-contain"
                        sizes="(max-width: 1024px) 60vw, 30vw"
                        priority={isActive}
                      />
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
