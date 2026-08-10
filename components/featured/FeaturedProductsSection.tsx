"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { getFeaturedProducts, getFeaturedSlides } from "@/lib/cms/service";
import { useCmsData } from "@/lib/cms/useCmsData";
import ProductWheel from "./ProductWheel";
import ProductDetails from "./ProductDetails";
import VerticalFeaturedSlider from "./VerticalFeaturedSlider";
import { EmptyState, ErrorState, LoadingSkeleton } from "./StateViews";

export default function FeaturedProductsSection() {
  const products = useCmsData(getFeaturedProducts);
  const slides = useCmsData(getFeaturedSlides);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section
      id="products"
      className="relative overflow-hidden border-b border-[#E5E5E5] py-20 sm:py-28"
    >
      {/* premium background */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-[#FBF8F2] via-[#F8F4ED] to-white" />
      <div className="pointer-events-none absolute -left-40 top-10 -z-10 h-[420px] w-[420px] rounded-full bg-[#C5A880]/25 blur-[110px]" />
      <div className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-[380px] w-[380px] rounded-full bg-[#606C38]/15 blur-[110px]" />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(34,34,34,0.06) 1px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-14 max-w-xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-extrabold tracking-tight text-[#222222] sm:text-4xl"
          >
            Featured Products
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-base font-light text-neutral-500"
          >
            Explore our latest products and discover the details behind each one.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_360px]">
          {/* LEFT: wheel + details */}
          <div>
            {products.status === "loading" && (
              <div className="space-y-8">
                <LoadingSkeleton className="mx-auto aspect-square w-full max-w-[480px]" />
                <LoadingSkeleton className="h-44 w-full" />
              </div>
            )}

            {products.status === "error" && (
              <ErrorState message={products.message} onRetry={products.retry} />
            )}

            {products.status === "success" && products.data.length === 0 && (
              <EmptyState message="No featured products available." />
            )}

            {products.status === "success" && products.data.length > 0 && (
              <>
                <ProductWheel
                  products={products.data}
                  activeIndex={Math.min(activeIndex, products.data.length - 1)}
                  onSelect={setActiveIndex}
                />
                <ProductDetails
                  product={products.data[Math.min(activeIndex, products.data.length - 1)]}
                />
              </>
            )}
          </div>

          {/* RIGHT: vertical slider */}
          <div>
            {slides.status === "loading" && (
              <LoadingSkeleton className="h-full min-h-[420px] w-full" />
            )}
            {slides.status === "error" && (
              <ErrorState message={slides.message} onRetry={slides.retry} />
            )}
            {slides.status === "success" && slides.data.length === 0 && (
              <EmptyState message="No featured content available." />
            )}
            {slides.status === "success" && slides.data.length > 0 && (
              <VerticalFeaturedSlider slides={slides.data} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
