"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2, ShoppingBag } from "lucide-react";
import { CART_UPDATED_EVENT, formatCurrency, getStoredCart, removeCartItem, updateCartItemQuantity } from "@/lib/cart";

export default function CartPage() {
  const [cartItems, setCartItems] = useState(getStoredCart());

  useEffect(() => {
    const refreshCart = () => setCartItems(getStoredCart());
    refreshCart();
    window.addEventListener(CART_UPDATED_EVENT, refreshCart);
    window.addEventListener("storage", refreshCart);

    return () => {
      window.removeEventListener(CART_UPDATED_EVENT, refreshCart);
      window.removeEventListener("storage", refreshCart);
    };
  }, []);

  const totalPrice = useMemo(() => {
    return cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  }, [cartItems]);

  const updateQuantity = (slug: string, color: string, quantity: number) => {
    updateCartItemQuantity(slug, color, quantity);
    setCartItems(getStoredCart());
  };

  const removeItem = (slug: string, color: string) => {
    removeCartItem(slug, color);
    setCartItems(getStoredCart());
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#C5A880]">Your Bag</p>
            <h1 className="text-3xl font-extrabold text-[#222222]">Cart</h1>
          </div>
          <Link href="/" className="rounded-md border border-[#606C38] px-4 py-2 text-sm font-bold text-[#606C38] transition-colors hover:bg-[#606C38] hover:text-white">
            Continue Shopping
          </Link>
        </div>

        {cartItems.length === 0 ? (
          <div className="rounded-2xl border border-[#E5E5E5] bg-[#F8F4ED] p-8 text-center shadow-sm">
            <ShoppingBag className="mx-auto h-10 w-10 text-[#C5A880]" />
            <p className="mt-3 text-lg font-semibold text-[#222222]">No items in the cart yet.</p>
            <Link href="/" className="mt-4 inline-flex rounded-md bg-[#606C38] px-5 py-3 text-sm font-bold text-white">
              Shop Now
            </Link>
          </div>
        ) : (
          <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={`${item.slug}-${item.color}`} className="flex flex-col gap-4 rounded-2xl border border-[#E5E5E5] bg-white p-4 shadow-sm sm:flex-row">
                  <div className="relative h-32 w-full overflow-hidden rounded-xl bg-[#F8F4ED] sm:w-40">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <h2 className="text-lg font-bold text-[#222222]">{item.name}</h2>
                        <p className="text-sm text-neutral-500">Color: {item.color}</p>
                        <p className="text-sm font-semibold text-[#222222]">{formatCurrency(item.price)}</p>
                      </div>
                      <button
                        onClick={() => removeItem(item.slug, item.color)}
                        className="inline-flex items-center gap-2 self-start rounded-md border border-[#E5E5E5] px-3 py-2 text-xs font-bold text-[#222222] transition-colors hover:border-red-300 hover:text-red-500"
                      >
                        <Trash2 className="h-3.5 w-3.5" />
                        Remove
                      </button>
                    </div>

                    <div className="mt-4 flex flex-wrap items-center gap-3">
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#222222]">Quantity</span>
                      <div className="flex items-center rounded-md border border-[#E5E5E5] bg-white">
                        <button
                          onClick={() => updateQuantity(item.slug, item.color, Math.max(1, item.quantity - 1))}
                          className="p-2 text-[#222222] transition-colors hover:text-[#606C38]"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <span className="min-w-8 text-center text-sm font-semibold text-[#222222]">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.slug, item.color, item.quantity + 1)}
                          className="p-2 text-[#222222] transition-colors hover:text-[#606C38]"
                          aria-label="Increase quantity"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <span className="ml-auto text-sm font-bold text-[#222222]">Subtotal: {formatCurrency(item.price * item.quantity)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="rounded-2xl border border-[#E5E5E5] bg-[#F8F4ED] p-6 shadow-sm">
              <h2 className="text-xl font-bold text-[#222222]">Order Summary</h2>
              <div className="mt-4 space-y-3 text-sm text-[#222222]">
                <div className="flex items-center justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold">{formatCurrency(totalPrice)}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Shipping</span>
                  <span className="font-semibold">Free</span>
                </div>
                <div className="flex items-center justify-between border-t border-[#E5E5E5] pt-3 text-base font-bold text-[#222222]">
                  <span>Total</span>
                  <span>{formatCurrency(totalPrice)}</span>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <button className="w-full rounded-md bg-[#606C38] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#505a2f]">
                  Checkout
                </button>
                <Link href="/" className="block w-full rounded-md border border-[#606C38] px-5 py-3 text-center text-sm font-bold text-[#606C38] transition-colors hover:bg-[#606C38] hover:text-white">
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
