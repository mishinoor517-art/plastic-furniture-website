import React from "react";
import Navbar from "../components/Navbar";
import HeroSlider from "../components/HeroSlider";
import CategorySection from "../components/CategorySection";
import FeaturedProducts from "../components/FeaturedProducts";
import InteractiveProductWheel from "../components/InteractiveProductWheel";
import VideoShowcase from "../components/VideoShowcase";
import CompanyLogoMarquee from "../components/CompanyLogoMarquee";

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

        {/* 4. FEATURED PRODUCTS (EXISTING 15 PRODUCTS -- DO NOT DUPLICATE) */}
        <FeaturedProducts />

        {/* 5. INTERACTIVE 4-PRODUCT WHEEL (new) */}
        <InteractiveProductWheel />

        {/* 6. THREE VIDEO SHOWCASE (new) */}
        <VideoShowcase />

        {/* 7. COMPANY LOGO SCROLLING STRIP (new) */}
        <CompanyLogoMarquee />
      </main>
      {/* Footer is rendered globally in app/layout.tsx */}
    </div>
  );
}
export const metadata = {
  title: "Sigma Furniture | Premium Furniture Showroom",
  description: "Discover modern, stylish, and durable furniture designed for every space. Explore our Moulded Range, Outdoor, Indoor, Office, and Kids furniture.",
};
