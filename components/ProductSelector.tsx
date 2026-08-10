"use client";

import React from "react";
import Image from "next/image";
import { WheelProduct } from "../lib/data";

interface ProductSelectorProps {
  product: WheelProduct;
  isActive: boolean;
  onSelect: () => void;
}

export default function ProductSelector({ product, isActive, onSelect }: ProductSelectorProps) {
  return (
    <button
      type="button"
      onClick={onSelect}
      aria-pressed={isActive}
      aria-label={`Show ${product.name}`}
      className={`group flex flex-shrink-0 flex-col items-center gap-2 rounded-xl p-2 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#606C38] focus-visible:ring-offset-2 ${
        isActive ? "bg-[#606C38]/5" : "hover:bg-[#F8F4ED]"
      }`}
    >
      <span
        className={`relative block h-14 w-14 overflow-hidden rounded-full border-2 bg-[#F8F4ED] transition-all duration-300 sm:h-16 sm:w-16 ${
          isActive
            ? "border-[#606C38] shadow-md ring-2 ring-[#606C38]/25"
            : "border-[#E5E5E5] opacity-70 group-hover:opacity-100 group-hover:border-[#C5A880]"
        }`}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
          sizes="64px"
        />
      </span>
      <span
        className={`max-w-[80px] truncate text-[11px] font-semibold transition-colors duration-300 sm:max-w-[96px] ${
          isActive ? "text-[#606C38]" : "text-neutral-400 group-hover:text-[#222222]"
        }`}
      >
        {product.name.replace("SIGMA ", "")}
      </span>
    </button>
  );
}
