"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Product } from "../lib/data";
import { ShoppingBag, Eye, Star } from "lucide-react";
import { addItemToCart, formatCurrency } from "../lib/cart";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const router = useRouter();
  const [feedback, setFeedback] = useState("");

  const handleViewProduct = () => {
    router.push(`/products/${product.slug}`);
  };

  const handleAddToCart = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    addItemToCart(product, 1, product.colors[0].name);
    setFeedback("Product added to cart successfully!");
    window.setTimeout(() => setFeedback(""), 1800);
  };

  return (
    <div
      onClick={handleViewProduct}
      className="group flex h-full cursor-pointer flex-col overflow-hidden rounded-xl border border-[#E5E5E5] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden border-b border-[#E5E5E5] bg-[#F8F4ED]">
        <Image src={product.image} alt={product.name} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <span className="mb-1.5 block text-[10px] font-bold uppercase tracking-[0.15em] text-[#C5A880]">
          {product.category}
        </span>

        <h3 className="mb-1 text-lg font-bold text-[#222222] transition-colors group-hover:text-[#606C38]">
          {product.name}
        </h3>

        <p className="mb-4 flex-1 text-sm font-light leading-relaxed text-neutral-500">
          {product.description}
        </p>

        <div className="mb-4 flex items-center gap-1 text-amber-500">
          {Array.from({ length: 5 }).map((_, index) => (
            <Star key={index} className="h-4 w-4 fill-current" />
          ))}
          <span className="ml-1 text-sm font-semibold text-[#222222]">{product.rating.toFixed(1)}</span>
        </div>

        <div className="mb-5 flex items-end justify-between gap-3">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400">Price</p>
            <p className="text-xl font-bold text-[#222222]">{formatCurrency(product.price)}</p>
          </div>
          <span className="rounded-full border border-[#606C38]/15 bg-[#606C38]/5 px-3 py-1 text-[11px] font-semibold text-[#606C38]">
            {product.stock}
          </span>
        </div>

        <div className="mt-auto flex items-center gap-3 border-t border-neutral-100 pt-4">
          <button
            onClick={(event) => {
              event.stopPropagation();
              handleViewProduct();
            }}
            className="flex flex-1 items-center justify-center gap-2 rounded-md border border-[#606C38] px-4 py-2.5 text-xs font-bold text-[#606C38] transition-all duration-200 hover:bg-[#606C38] hover:text-white"
          >
            <Eye className="h-3.5 w-3.5" />
            View Product
          </button>
          <button
            onClick={handleAddToCart}
            className="flex h-10 w-10 items-center justify-center rounded-md border border-[#E5E5E5] bg-white text-neutral-600 transition-all duration-200 hover:border-[#C5A880] hover:bg-[#C5A880] hover:text-white"
            aria-label="Add to cart"
          >
            <ShoppingBag className="h-4 w-4" />
          </button>
        </div>

        {feedback ? <p className="mt-3 text-sm font-medium text-[#606C38]">{feedback}</p> : null}
      </div>
    </div>
  );
}
