"use client";

import React from "react";
import { categories } from "../lib/data";
import CategoryCard from "./CategoryCard";
import { motion } from "framer-motion";

export default function CategorySection() {
  // Duplicate the list so the marquee loop is seamless
  const loopItems = [...categories, ...categories];

  return (
    <section id="categories" className="py-20 bg-white border-b border-[#E5E5E5] scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Block */}
        <div className="text-left mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-extrabold tracking-tight text-[#222222] sm:text-4xl"
          >
            Explore Our Categories
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mt-3 text-base text-neutral-500 font-light"
          >
            Find stylish and durable furniture designed for every space.
          </motion.p>
        </div>
      </div>

      {/* Auto-moving Marquee Strip */}
      <div className="relative w-full overflow-hidden">
        {/* Left & Right fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-24 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-24 bg-gradient-to-l from-white to-transparent z-10" />

        <motion.div
          className="flex gap-6 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 28,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {loopItems.map((category, idx) => (
            <div key={`${category.id}-${idx}`} className="flex-shrink-0">
              <CategoryCard category={category} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
