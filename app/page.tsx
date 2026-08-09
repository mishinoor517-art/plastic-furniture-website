import React from "react";
import Navbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider";
import CategorySection from "../components/CategorySection";
import FeaturedProducts from "../components/FeaturedProducts";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* 1. STICKY NAVBAR */}
      <Navbar />

      {/* Main Container */}
      <main className="flex-grow">
        {/* 2. HERO SLIDER */}
        <HeroSlider />

        {/* 3. FURNITURE CATEGORIES (HORIZONTAL CAROUSEL SLIDER) */}
        <CategorySection />

        {/* 4. FEATURED PRODUCTS (3 PRODUCTS GRID) */}
        <FeaturedProducts />
      </main>
    </div>
  );
}
export const metadata = {
  title: "Sigma Furniture | Premium Furniture Showroom",
  description: "Discover modern, stylish, and durable furniture designed for every space. Explore our Moulded Range, Outdoor, Indoor, Office, and Kids furniture.",
};
