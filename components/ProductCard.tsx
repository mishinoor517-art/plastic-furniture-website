"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Product } from "../lib/data";
import { ShoppingBag, Eye, X, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const [detailsOpen, setDetailsOpen] = useState(false);

  return (
    <>
      <div className="group bg-white border border-[#E5E5E5] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col h-full">
        {/* Large Product Image with hover zoom */}
        <div className="relative aspect-[4/3] w-full overflow-hidden bg-neutral-50 border-b border-[#E5E5E5]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Info Block */}
        <div className="p-6 flex flex-col flex-1">
          {/* Category Tag */}
          <span className="text-[10px] font-bold tracking-[0.15em] text-[#C5A880] uppercase mb-1.5 block">
            {product.category}
          </span>

          {/* Title */}
          <h3 className="text-lg font-bold text-[#222222] transition-colors group-hover:text-[#606C38] mb-1">
            {product.name}
          </h3>

          {/* Description */}
          <p className="text-sm text-neutral-500 font-light mb-4 line-clamp-2 leading-relaxed flex-1">
            {product.description}
          </p>

          {/* Compact Feature Bullet Lists */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {product.features.map((feature, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-[#606C38]/5 border border-[#606C38]/10 text-[10px] font-semibold text-[#606C38]"
              >
                <Check className="w-2.5 h-2.5" />
                {feature}
              </span>
            ))}
          </div>

          {/* Action Row */}
          <div className="flex items-center gap-3 mt-auto pt-4 border-t border-neutral-100">
            <button
              onClick={() => setDetailsOpen(true)}
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 border border-[#606C38] text-xs font-bold text-[#606C38] hover:bg-[#606C38] hover:text-white rounded-md transition-all duration-200"
            >
              <Eye className="w-3.5 h-3.5" />
              View Details
            </button>
            <button
              onClick={() => alert(`${product.name} added to cart!`)}
              className="w-10 h-10 rounded-md border border-[#E5E5E5] bg-white text-neutral-600 hover:text-white hover:bg-[#C5A880] hover:border-[#C5A880] flex items-center justify-center transition-all duration-200"
              aria-label="Add to cart"
            >
              <ShoppingBag className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Details Lightbox Modal (For Premium UX) */}
      <AnimatePresence>
        {detailsOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setDetailsOpen(false)}
              className="fixed inset-0 bg-black z-50 flex items-center justify-center"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-x-4 top-[10%] md:top-[15%] max-w-3xl mx-auto bg-white rounded-xl shadow-2xl overflow-hidden z-50 flex flex-col md:flex-row border border-[#E5E5E5]"
            >
              {/* Image Side */}
              <div className="relative aspect-[4/3] md:aspect-auto md:w-1/2 min-h-[250px] bg-neutral-50">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover object-center"
                />
              </div>

              {/* Details Side */}
              <div className="p-6 md:p-8 md:w-1/2 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold tracking-[0.15em] text-[#C5A880] uppercase">
                      {product.category}
                    </span>
                    <button
                      onClick={() => setDetailsOpen(false)}
                      className="p-1 text-neutral-400 hover:text-[#222222] transition-colors rounded-full hover:bg-neutral-100"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>

                  <h2 className="text-xl md:text-2xl font-bold text-[#222222] mb-3">
                    {product.name}
                  </h2>
                  <p className="text-sm text-neutral-500 font-light leading-relaxed mb-6">
                    {product.description}
                  </p>

                  <h4 className="text-xs font-bold text-[#222222] uppercase tracking-wide mb-3">
                    Key Features
                  </h4>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-xs text-neutral-600">
                        <Check className="w-4 h-4 text-[#606C38]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  onClick={() => {
                    alert(`${product.name} added to cart!`);
                    setDetailsOpen(false);
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#606C38] hover:bg-[#505a2f] text-sm font-bold text-white rounded-md transition-all duration-200 shadow-md"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Add to Cart
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
