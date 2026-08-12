"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { CmsProduct } from "@/lib/cms/types";

export default function ProductDetails({ product }: { product: CmsProduct }) {
  return (
    <div className="relative mt-8 overflow-hidden rounded-3xl border border-white/60 bg-white/70 p-6 shadow-[0_20px_60px_-25px_rgba(34,34,34,0.25)] backdrop-blur-sm sm:p-8">
      <AnimatePresence mode="wait">
        <motion.div
          key={product.id}
          initial={{ opacity: 0, y: 14, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -10, scale: 0.98 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-6 sm:flex-row sm:items-center"
        >
          <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-2xl bg-[#F8F4ED] sm:h-44 sm:w-44">
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="176px"
              className="object-contain"
              priority
            />
          </div>

          <div className="min-w-0 flex-1">
            <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#C5A880]">
              {product.category}
            </span>
            <h3 className="mt-1.5 text-2xl font-bold text-[#222222] sm:text-[26px]">
              {product.name}
            </h3>
            <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-neutral-500">
              {product.description}
            </p>

            <div className="mt-5 flex flex-wrap items-center gap-4">
              <span className="text-xl font-bold text-[#222222]">
                ${product.price.toFixed(2)}
              </span>
              <Link
                href={product.ctaUrl}
                className="group inline-flex items-center gap-1.5 rounded-full bg-[#222222] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#606C38]"
              >
                {product.ctaText}
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
