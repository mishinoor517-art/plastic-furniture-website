"use client";

import React, { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ShoppingBag,
  Star,
  Plus,
  Minus,
  Heart,
  ShieldCheck,
  Truck,
  RotateCcw,
  Wallet,
  PackageCheck,
  BadgeCheck,
  MessageSquare,
  Check,
  X,
} from "lucide-react";

import { featuredProducts, productDetails } from "@/lib/data";
import { addItemToCart, formatCurrency } from "@/lib/cart";
import ChairIllustration from "@/components/ChairIllustration";

interface ReviewEntry {
  id: number;
  name: string;
  email: string;
  title: string;
  message: string;
  rating: number;
  date: string;
  verified: boolean;
}

const defaultReviews: ReviewEntry[] = [
  {
    id: 1,
    name: "Ayesha Khan",
    email: "ayesha@example.com",
    title: "Excellent comfort",
    message:
      "The chair feels durable and stylish. I used it for my reading corner and it instantly upgraded the space.",
    rating: 5,
    date: "2026-06-11",
    verified: true,
  },
  {
    id: 2,
    name: "Usman Ali",
    email: "usman@example.com",
    title: "Strong build quality",
    message:
      "Very stable and easy to clean. The finish looks premium and is perfect for a modern room setup.",
    rating: 4,
    date: "2026-06-18",
    verified: true,
  },
];

/* =========================================================
   COLOR IMAGE HELPER
========================================================= */

function resolveProductColorImage(
  product: (typeof featuredProducts)[number] | undefined,
  colorName: string | undefined
) {
  if (!product) {
    return "";
  }

  const fallbackImage = product.image || "";

  if (!colorName) {
    return fallbackImage;
  }

  const colorImages = product.colorImages;

  if (!colorImages) {
    return fallbackImage;
  }

  const normalizedColor = colorName.trim().toLowerCase();

  const matchingKey = Object.keys(colorImages).find(
    (key) => key.trim().toLowerCase() === normalizedColor
  );

  if (!matchingKey) {
    console.warn(
      `[Product Color] No image mapping found for "${colorName}" on "${product.name}".`,
      colorImages
    );

    return fallbackImage;
  }

  const imagePath = colorImages[matchingKey];

  if (!imagePath) {
    console.warn(
      `[Product Color] Empty image path for "${colorName}" on "${product.name}".`
    );

    return fallbackImage;
  }

  return imagePath;
}

/* =========================================================
   MAIN PRODUCT PAGE
========================================================= */

export default function ProductDetailsPage() {
  const params = useParams<{ slug: string }>();
  const router = useRouter();

  const product = featuredProducts.find(
    (item) => item.slug === params.slug
  );

  const detailMeta = productDetails.find(
    (item) => item.slug === params.slug
  );

  /* =========================================================
     SELECTED COLOR
  ========================================================= */

  const [selectedColor, setSelectedColor] = useState("");

  useEffect(() => {
    if (product?.colors?.length) {
      setSelectedColor(product.colors[0].name);
    } else {
      setSelectedColor("");
    }
  }, [product?.slug]);

  /* =========================================================
     OTHER STATES
  ========================================================= */

  const [quantity, setQuantity] = useState(1);

  const [feedback, setFeedback] = useState("");

  const [activeTab, setActiveTab] = useState<
    "description" | "specifications" | "reviews"
  >("description");

  const [isReviewOpen, setIsReviewOpen] = useState(false);

  const [wishlist, setWishlist] = useState(false);

  /* =========================================================
     REVIEWS
  ========================================================= */

  const [reviews, setReviews] = useState<ReviewEntry[]>(() => {
    if (typeof window === "undefined" || !product) {
      return defaultReviews;
    }

    const storageKey =
      `sigma-product-reviews-${product.slug}`;

    const savedReviews =
      window.localStorage.getItem(storageKey);

    if (!savedReviews) {
      return defaultReviews;
    }

    try {
      return JSON.parse(savedReviews) as ReviewEntry[];
    } catch {
      return defaultReviews;
    }
  });

  /* =========================================================
     REVIEW FORM
  ========================================================= */

  const [reviewForm, setReviewForm] = useState({
    name: "",
    email: "",
    rating: 5,
    title: "",
    message: "",
  });

  const [formErrors, setFormErrors] =
    useState<Record<string, string>>({});

  /* =========================================================
     SELECTED COLOR VALUE
  ========================================================= */

  const selectedColorValue = useMemo(() => {
    if (!product?.colors?.length) {
      return "#111111";
    }

    const selected = product.colors.find(
      (option) =>
        option.name.toLowerCase() ===
        selectedColor.toLowerCase()
    );

    return (
      selected?.value ||
      product.colors[0]?.value ||
      "#111111"
    );
  }, [product, selectedColor]);

  /* =========================================================
     SELECTED PRODUCT IMAGE
  ========================================================= */

  const selectedImage = useMemo(() => {
    return resolveProductColorImage(
      product,
      selectedColor
    );
  }, [product, selectedColor]);

  /* =========================================================
     DEBUG
  ========================================================= */

  useEffect(() => {
    if (!product) return;

    console.log(
      "[Product Color] Product:",
      product.name
    );

    console.log(
      "[Product Color] Selected Color:",
      selectedColor
    );

    console.log(
      "[Product Color] Color Images:",
      product.colorImages
    );

    console.log(
      "[Product Color] Selected Image:",
      selectedImage
    );
  }, [
    product,
    selectedColor,
    selectedImage,
  ]);

  /* =========================================================
     RATING
  ========================================================= */

  const averageRating = useMemo(() => {
    if (reviews.length === 0) {
      return 0;
    }

    const total = reviews.reduce(
      (sum, review) => sum + review.rating,
      0
    );

    return total / reviews.length;
  }, [reviews]);

  /* =========================================================
     RATING BREAKDOWN
  ========================================================= */

  const ratingBreakdown = useMemo(() => {
    return [5, 4, 3, 2, 1].map((rating) => {
      const count = reviews.filter(
        (review) => review.rating === rating
      ).length;

      const percentage = reviews.length
        ? (count / reviews.length) * 100
        : 0;

      return {
        rating,
        count,
        percentage,
      };
    });
  }, [reviews]);

  /* =========================================================
     RELATED PRODUCTS
  ========================================================= */

  const relatedProducts = useMemo(() => {
    return featuredProducts
      .filter(
        (item) => item.slug !== product?.slug
      )
      .slice(0, 4);
  }, [product]);

  /* =========================================================
     PRODUCT NOT FOUND
  ========================================================= */

  if (!product) {
    return (
      <div className="mx-auto flex min-h-screen max-w-4xl items-center justify-center px-4 py-12 text-center">
        <div>
          <p className="text-lg font-semibold text-[#222222]">
            Product not found.
          </p>

          <Link
            href="/"
            className="mt-4 inline-flex rounded-md bg-[#606C38] px-5 py-3 text-sm font-bold text-white"
          >
            Back to home
          </Link>
        </div>
      </div>
    );
  }

  /* =========================================================
     ADD TO CART
  ========================================================= */

  const handleAddToCart = () => {
    addItemToCart(
      product,
      quantity,
      selectedColor
    );

    setFeedback(
      "Product added to cart successfully!"
    );

    window.setTimeout(
      () => setFeedback(""),
      1800
    );
  };

  /* =========================================================
     BUY NOW
  ========================================================= */

  const handleBuyNow = () => {
    addItemToCart(
      product,
      quantity,
      selectedColor
    );

    router.push("/cart");
  };

  /* =========================================================
     COLOR CHANGE
  ========================================================= */

  const handleColorChange = (
    colorName: string
  ) => {
    const nextColor = colorName.trim();

    console.log(
      "[Product Color] Clicked:",
      nextColor
    );

    console.log(
      "[Product Color] Image:",
      resolveProductColorImage(
        product,
        nextColor
      )
    );

    setSelectedColor(nextColor);
  };

  /* =========================================================
     REVIEW SUBMIT
  ========================================================= */

  const handleReviewSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const errors: Record<string, string> = {};

    if (!reviewForm.name.trim()) {
      errors.name = "Name is required";
    }

    if (!reviewForm.email.trim()) {
      errors.email = "Email is required";
    }

    if (!reviewForm.rating) {
      errors.rating = "Rating is required";
    }

    if (!reviewForm.message.trim()) {
      errors.message =
        "Review message is required";
    }

    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      return;
    }

    const newReview: ReviewEntry = {
      id: Date.now(),
      name: reviewForm.name.trim(),
      email: reviewForm.email.trim(),
      title:
        reviewForm.title.trim() ||
        "General Review",
      message:
        reviewForm.message.trim(),
      rating: reviewForm.rating,
      date: new Date()
        .toISOString()
        .slice(0, 10),
      verified: true,
    };

    const updatedReviews = [
      newReview,
      ...reviews,
    ];

    const storageKey =
      `sigma-product-reviews-${product.slug}`;

    window.localStorage.setItem(
      storageKey,
      JSON.stringify(updatedReviews)
    );

    setReviews(updatedReviews);

    setIsReviewOpen(false);

    setReviewForm({
      name: "",
      email: "",
      rating: 5,
      title: "",
      message: "",
    });

    setFormErrors({});

    setFeedback(
      "Thank you! Your review has been submitted successfully."
    );

    window.setTimeout(
      () => setFeedback(""),
      2200
    );
  };

  /* =========================================================
     DETAIL SPECS
  ========================================================= */

  const detailSpecs = [
    {
      label: "Material",
      value:
        detailMeta?.material ??
        "Premium virgin plastic",
    },
    {
      label: "Chair Type",
      value:
        detailMeta?.chairType ??
        "Moulded seating",
    },
    {
      label: "Dimensions",
      value:
        detailMeta?.dimensions ??
        "45 x 43 x 82 cm",
    },
    {
      label: "Weight",
      value:
        detailMeta?.weight ??
        "5.5 kg",
    },
    {
      label: "Max Capacity",
      value:
        detailMeta?.maxWeightCapacity ??
        "120 kg",
    },
    {
      label: "Suitable Usage",
      value:
        detailMeta?.suitableUsage ??
        "Home, studio, office",
    },
    {
      label: "Indoor / Outdoor",
      value:
        detailMeta?.indoorOutdoor ??
        "Indoor & covered outdoor use",
    },
    {
      label: "Care Instructions",
      value:
        detailMeta?.careInstructions ??
        "Wipe with a soft cloth and mild soap.",
    },
  ];

  /* =========================================================
     RETURN
  ========================================================= */

  return (
    <div className="min-h-screen bg-white">

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        {/* BACK BUTTON */}

        <button
          onClick={() => router.push("/")}
          className="mb-6 inline-flex items-center gap-2 rounded-md border border-[#E5E5E5] px-4 py-2 text-sm font-semibold text-[#222222] transition-colors hover:border-[#C5A880] hover:text-[#606C38]"
        >
          <ArrowLeft className="h-4 w-4" />
          Continue Shopping
        </button>

        {/* =====================================================
            PRODUCT SECTION
        ===================================================== */}

        <section className="grid gap-8 rounded-[24px] border border-[#E5E5E5] bg-white p-4 shadow-sm lg:grid-cols-[1.1fr_0.9fr] lg:p-6">

          {/* ===================================================
              IMAGE
          =================================================== */}

          <div className="rounded-[20px] border border-[#E5E5E5] bg-[#F8F4ED] p-4 shadow-sm">

            <div className="relative aspect-[4/3] overflow-hidden rounded-[18px] bg-white">

              <img
                key={`${product.slug}-${selectedColor}-${selectedImage}`}
                src={selectedImage}
                alt={`${product.name} - ${selectedColor}`}
                className="h-full w-full object-contain"
                loading="eager"
                onError={(event) => {
                  console.error(
                    `[Product Image] Failed to load: ${selectedImage}`
                  );

                  if (
                    product.image &&
                    event.currentTarget.src !==
                      product.image
                  ) {
                    event.currentTarget.src =
                      product.image;
                  }
                }}
              />

            </div>

            {/* =================================================
                IMAGE THUMBNAILS — actual product color images
            ================================================= */}

            <div className="mt-4 grid grid-cols-4 gap-2">

              {product.colors?.map((option) => {

                const isSelected =
                  option.name.toLowerCase() ===
                  selectedColor.toLowerCase();

                // Resolve the actual image for this color variant
                const thumbImage = resolveProductColorImage(product, option.name);

                return (
                  <button
                    type="button"
                    key={`${option.name}-thumb`}
                    onClick={() => handleColorChange(option.name)}
                    title={option.name}
                    aria-label={`View ${option.name}`}
                    className={`group relative flex flex-col items-center overflow-hidden rounded-xl border-2 transition-all duration-200 ${
                      isSelected
                        ? "border-[#606C38] shadow-md scale-[1.04]"
                        : "border-[#E5E5E5] hover:border-[#C5A880] hover:shadow-sm"
                    }`}
                  >
                    {/* Product image for this color */}
                    <span className="relative block aspect-square w-full overflow-hidden bg-[#F8F4ED]">
                      <img
                        src={thumbImage}
                        alt={`${product.name} - ${option.name}`}
                        className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-105"
                        onError={(e) => {
                          // Fallback: show color swatch if image fails
                          (e.currentTarget as HTMLImageElement).style.display = "none";
                          const sibling = e.currentTarget.nextElementSibling as HTMLElement;
                          if (sibling) sibling.style.display = "block";
                        }}
                      />
                      {/* Fallback color circle (hidden by default) */}
                      <span
                        className="absolute inset-0 hidden items-center justify-center"
                        style={{ backgroundColor: option.value }}
                      />
                    </span>
                    {/* Color name label */}
                    <span
                      className={`w-full py-1 text-center text-[10px] font-semibold capitalize leading-none ${
                        isSelected
                          ? "bg-[#606C38]/10 text-[#606C38]"
                          : "bg-white text-[#444444]"
                      }`}
                    >
                      {option.name}
                    </span>
                    {/* Selected tick */}
                    {isSelected && (
                      <span className="absolute right-1 top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[#606C38]">
                        <svg viewBox="0 0 10 10" className="h-2.5 w-2.5 fill-white">
                          <path d="M1.5 5l2.5 2.5 4.5-4" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </span>
                    )}
                  </button>
                );
              })}

            </div>
          </div>

          {/* ===================================================
              PRODUCT INFORMATION
          =================================================== */}

          <div className="rounded-[20px] border border-[#E5E5E5] bg-white p-5 shadow-sm sm:p-6">

            <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#C5A880]">
              {product.category}
            </span>

            <h1 className="mt-2 text-3xl font-extrabold text-[#222222]">
              {product.name}
            </h1>

            {/* RATING */}

            <div className="mt-3 flex items-center gap-2 text-amber-500">

              {Array.from({
                length: 5,
              }).map((_, index) => (
                <Star
                  key={index}
                  className="h-4 w-4 fill-current"
                />
              ))}

              <span className="text-sm font-semibold text-[#222222]">
                {averageRating.toFixed(1)}
              </span>

              <span className="text-sm text-neutral-500">
                ({reviews.length} reviews)
              </span>

            </div>

            {/* PRICE */}

       

            {/* PRODUCT CODE */}

            <div className="mt-5 grid gap-3 text-sm text-[#222222] sm:grid-cols-2">

              <div className="rounded-lg bg-neutral-50 p-3">
                <strong>
                  Product Code:
                </strong>{" "}
                {product.code}
              </div>

              <div className="rounded-lg bg-neutral-50 p-3">
                <strong>
                  Availability:
                </strong>{" "}
                {product.stock}
              </div>

            </div>

            {/* =================================================
                COLOR SELECTOR
            ================================================= */}

            <div className="mt-6">

              <div className="mb-3 flex items-center justify-between gap-2">

                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#222222]">
                  Select Color
                </p>

                <span className="text-xs font-semibold text-[#606C38]">
                  Selected Color:{" "}
                  {selectedColor}
                </span>

              </div>

              <div className="flex flex-wrap gap-3">

                {product.colors?.map(
                  (option) => {

                    const isSelected =
                      option.name.toLowerCase() ===
                      selectedColor.toLowerCase();

                    return (
                      <button
                        type="button"
                        key={option.name}
                        onClick={() =>
                          handleColorChange(
                            option.name
                          )
                        }
                        className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all ${
                          isSelected
                            ? "scale-110 border-[#606C38] ring-2 ring-[#606C38]/20"
                            : "border-white"
                        }`}
                        style={{
                          backgroundColor:
                            option.value,
                        }}
                        aria-label={`Select ${option.name}`}
                        title={option.name}
                      >

                        {isSelected ? (
                          <Check
                            className={`h-4 w-4 ${
                              option.name.toLowerCase() ===
                              "white"
                                ? "text-black"
                                : "text-white"
                            }`}
                          />
                        ) : null}

                      </button>
                    );
                  }
                )}

              </div>

            </div>

            {/* =================================================
                QUANTITY
            ================================================= */}

            <div className="mt-6 flex flex-wrap items-center gap-3">

              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#222222]">
                Quantity
              </span>

              <div className="flex items-center rounded-md border border-[#E5E5E5] bg-white">

                <button
                  type="button"
                  onClick={() =>
                    setQuantity(
                      (current) =>
                        Math.max(
                          1,
                          current - 1
                        )
                    )
                  }
                  className="p-3 text-[#222222] transition-colors hover:text-[#606C38]"
                  aria-label="Decrease quantity"
                >
                  <Minus className="h-4 w-4" />
                </button>

                <span className="min-w-10 text-center text-sm font-semibold text-[#222222]">
                  {quantity}
                </span>

                <button
                  type="button"
                  onClick={() =>
                    setQuantity(
                      (current) =>
                        current + 1
                    )
                  }
                  className="p-3 text-[#222222] transition-colors hover:text-[#606C38]"
                  aria-label="Increase quantity"
                >
                  <Plus className="h-4 w-4" />
                </button>

              </div>

              {/* WISHLIST */}

              <button
                type="button"
                onClick={() =>
                  setWishlist(
                    (value) => !value
                  )
                }
                className={`inline-flex items-center gap-2 rounded-md border px-4 py-2 text-sm font-semibold transition-colors ${
                  wishlist
                    ? "border-[#C5A880] bg-[#C5A880]/10 text-[#606C38]"
                    : "border-[#E5E5E5] text-[#222222] hover:border-[#C5A880] hover:text-[#606C38]"
                }`}
              >

                <Heart
                  className={`h-4 w-4 ${
                    wishlist
                      ? "fill-current"
                      : ""
                  }`}
                />

                Wishlist

              </button>

            </div>

            {/* BUTTONS */}

            <div className="mt-8 grid gap-3 sm:grid-cols-2">

              <button
                type="button"
                onClick={handleAddToCart}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-[#606C38] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#505a2f]"
              >
                <ShoppingBag className="h-4 w-4" />
                Add to Cart
              </button>

              <button
                type="button"
                onClick={handleBuyNow}
                className="inline-flex items-center justify-center rounded-md border border-[#606C38] px-5 py-3 text-sm font-bold text-[#606C38] transition-colors hover:bg-[#606C38] hover:text-white"
              >
                Buy Now
              </button>

            </div>

            {feedback ? (
              <p className="mt-3 text-sm font-medium text-[#606C38]">
                {feedback}
              </p>
            ) : null}

          </div>
        </section>

        {/* =====================================================
            BENEFITS
        ===================================================== */}

        <section className="mt-8 grid gap-4 rounded-[20px] border border-[#E5E5E5] bg-[#F8F4ED] p-4 shadow-sm md:grid-cols-3">

          {[
            {
              icon: ShieldCheck,
              title: "Warranty",
              text: "Built with premium quality assurance.",
            },
            {
              icon: RotateCcw,
              title: "Easy Returns",
              text: "Simple and convenient return support.",
            },
            {
              icon: Wallet,
              title: "Secure Payment",
              text: "Protected checkout for every order.",
            },
            {
              icon: Truck,
              title: "Shipping Information",
              text: "Fast delivery across Pakistan.",
            },
            {
              icon: PackageCheck,
              title: "Product Specifications",
              text: "Detailed dimensions and care guidance.",
            },
            {
              icon: BadgeCheck,
              title: "Available Information",
              text: "Clear product and delivery information.",
            },
          ].map(
            ({
              icon: Icon,
              title,
              text,
            }) => (
              <div
                key={title}
                className="rounded-[16px] bg-white p-4"
              >

                <Icon className="h-5 w-5 text-[#606C38]" />

                <p className="mt-2 text-sm font-bold text-[#222222]">
                  {title}
                </p>

                <p className="mt-1 text-sm text-neutral-500">
                  {text}
                </p>

              </div>
            )
          )}

        </section>

        {/* =====================================================
            TABS
        ===================================================== */}

        <section className="mt-8 rounded-[20px] border border-[#E5E5E5] bg-white p-5 shadow-sm sm:p-6">

          <div className="flex flex-wrap gap-2 border-b border-[#E5E5E5] pb-3">

            {[
              {
                key: "description",
                label: "Description",
              },
              {
                key: "specifications",
                label: "Specifications",
              },
              {
                key: "reviews",
                label: "Reviews",
              },
            ].map((tab) => (
              <button
                type="button"
                key={tab.key}
                onClick={() =>
                  setActiveTab(
                    tab.key as
                      | "description"
                      | "specifications"
                      | "reviews"
                  )
                }
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  activeTab === tab.key
                    ? "bg-[#606C38] text-white"
                    : "bg-[#F8F4ED] text-[#222222] hover:bg-[#EAE2D2]"
                }`}
              >
                {tab.label}
              </button>
            ))}

          </div>

          {/* DESCRIPTION */}

          {activeTab === "description" ? (
            <div className="mt-6 space-y-6">

              <div>

                <h2 className="text-2xl font-bold text-[#222222]">
                  Product Information
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                  {detailMeta?.longDescription ??
                    product.description}
                </p>

              </div>

              <div className="grid gap-6 lg:grid-cols-2">

                <div className="rounded-[16px] bg-neutral-50 p-4">

                  <h3 className="text-lg font-bold text-[#222222]">
                    Key Features
                  </h3>

                  <ul className="mt-3 space-y-2 text-sm text-neutral-600">

                    {(detailMeta?.keyFeatures ??
                      product.features).map(
                      (feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-2"
                        >

                          <Check className="mt-0.5 h-4 w-4 text-[#606C38]" />

                          <span>
                            {feature}
                          </span>

                        </li>
                      )
                    )}

                  </ul>

                </div>

                <div className="rounded-[16px] bg-neutral-50 p-4">

                  <h3 className="text-lg font-bold text-[#222222]">
                    Daily Usability and Versatile Applications
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-neutral-500">
                    Designed for modern homes,
                    executive workspaces,
                    customer-facing areas,
                    and stylish outdoor corners.
                    The lightweight moulded profile
                    keeps it practical while the
                    premium finish adds an elegant
                    touch to every setting.
                  </p>

                </div>

              </div>

            </div>
          ) : null}

          {/* SPECIFICATIONS */}

          {activeTab === "specifications" ? (
            <div className="mt-6 grid gap-4 md:grid-cols-2">

              {detailSpecs.map(
                (item) => (
                  <div
                    key={item.label}
                    className="rounded-[16px] border border-[#E5E5E5] bg-[#F8F4ED] p-4"
                  >

                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#C5A880]">
                      {item.label}
                    </p>

                    <p className="mt-2 text-sm font-semibold text-[#222222]">
                      {item.value}
                    </p>

                  </div>
                )
              )}

            </div>
          ) : null}

          {/* REVIEWS */}

          {activeTab === "reviews" ? (
            <div className="mt-6 space-y-6">

              <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">

                <div>

                  <h2 className="text-2xl font-bold text-[#222222]">
                    Reviews
                  </h2>

                  <div className="mt-3 flex items-center gap-2 text-amber-500">

                    <Star className="h-5 w-5 fill-current" />

                    <span className="text-lg font-bold text-[#222222]">
                      {averageRating.toFixed(1)}
                    </span>

                    <span className="text-sm text-neutral-500">
                      ({reviews.length} total reviews)
                    </span>

                  </div>

                </div>

                <button
                  type="button"
                  onClick={() =>
                    setIsReviewOpen(true)
                  }
                  className="inline-flex items-center gap-2 rounded-md bg-[#606C38] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#505a2f]"
                >
                  <MessageSquare className="h-4 w-4" />
                  Write a Review
                </button>

              </div>

              <div className="grid gap-4 lg:grid-cols-[0.8fr_1.2fr]">

                <div className="rounded-[16px] bg-[#F8F4ED] p-4">

                  {ratingBreakdown.map(
                    (item) => (
                      <div
                        key={item.rating}
                        className="mb-3 last:mb-0"
                      >

                        <div className="flex items-center justify-between text-sm text-[#222222]">

                          <span>
                            {item.rating} stars
                          </span>

                          <span>
                            {item.count}
                          </span>

                        </div>

                        <div className="mt-1 h-2 overflow-hidden rounded-full bg-white">

                          <div
                            className="h-full rounded-full bg-[#C5A880]"
                            style={{
                              width: `${item.percentage}%`,
                            }}
                          />

                        </div>

                      </div>
                    )
                  )}

                </div>

                <div className="space-y-4">

                  {reviews.map(
                    (review) => (
                      <article
                        key={review.id}
                        className="rounded-[16px] border border-[#E5E5E5] p-4 shadow-sm"
                      >

                        <div className="flex flex-wrap items-center justify-between gap-2">

                          <div>

                            <h3 className="text-base font-bold text-[#222222]">
                              {review.name}
                            </h3>

                            <div className="mt-1 flex items-center gap-1 text-amber-500">

                              {Array.from({
                                length:
                                  review.rating,
                              }).map(
                                (_, index) => (
                                  <Star
                                    key={index}
                                    className="h-4 w-4 fill-current"
                                  />
                                )
                              )}

                            </div>

                          </div>

                          <span className="rounded-full bg-[#606C38]/10 px-3 py-1 text-[11px] font-semibold text-[#606C38]">
                            {review.verified
                              ? "Verified Purchase"
                              : "Review"}
                          </span>

                        </div>

                        <p className="mt-3 text-sm font-bold text-[#222222]">
                          {review.title}
                        </p>

                        <p className="mt-2 text-sm leading-relaxed text-neutral-500">
                          {review.message}
                        </p>

                        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 text-xs text-neutral-500">

                          <span>
                            {review.date}
                          </span>

                          <div className="flex gap-2">

                            <button
                              type="button"
                              className="rounded-full border border-[#E5E5E5] px-3 py-1 hover:border-[#C5A880] hover:text-[#606C38]"
                            >
                              Helpful
                            </button>

                            <button
                              type="button"
                              className="rounded-full border border-[#E5E5E5] px-3 py-1 hover:border-[#C5A880] hover:text-[#606C38]"
                            >
                              Not Helpful
                            </button>

                          </div>

                        </div>

                      </article>
                    )
                  )}

                </div>

              </div>

            </div>
          ) : null}

        </section>

        {/* =====================================================
            RELATED PRODUCTS
        ===================================================== */}

        <section className="mt-8 rounded-[20px] border border-[#E5E5E5] bg-white p-5 shadow-sm sm:p-6">

          <h2 className="text-2xl font-bold text-[#222222]">
            Related Products
          </h2>

          <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-4">

            {relatedProducts.map(
              (item) => (
                <div
                  key={item.id}
                  className="rounded-[18px] border border-[#E5E5E5] bg-[#F8F4ED] p-3"
                >

                  <div className="relative aspect-[4/3] overflow-hidden rounded-[14px] bg-white">

                    <ChairIllustration
                      color={
                        item.colors[0].value
                      }
                      className="h-full w-full"
                    />

                  </div>

                  <h3 className="mt-3 text-base font-bold text-[#222222]">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-sm font-semibold text-[#222222]">
                    {formatCurrency(
                      item.price
                    )}
                  </p>

                  <div className="mt-2 flex items-center gap-1 text-amber-500">

                    <Star className="h-4 w-4 fill-current" />

                    <span className="text-sm text-[#222222]">
                      {item.rating.toFixed(1)}
                    </span>

                  </div>

                  <Link
                    href={`/products/${item.slug}`}
                    className="mt-4 inline-flex w-full items-center justify-center rounded-md border border-[#606C38] px-4 py-2 text-sm font-bold text-[#606C38] transition-colors hover:bg-[#606C38] hover:text-white"
                  >
                    View Product
                  </Link>

                </div>
              )
            )}

          </div>

        </section>

      </div>

      {/* =====================================================
          REVIEW MODAL
      ===================================================== */}

      <AnimatePresence>

        {isReviewOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4"
          >

            <motion.div
              initial={{
                opacity: 0,
                y: 16,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: 16,
              }}
              className="w-full max-w-xl rounded-[20px] bg-white p-5 shadow-2xl"
            >

              <div className="flex items-center justify-between">

                <h3 className="text-xl font-bold text-[#222222]">
                  Write a Review
                </h3>

                <button
                  type="button"
                  onClick={() =>
                    setIsReviewOpen(false)
                  }
                  className="rounded-full p-2 hover:bg-neutral-100"
                >
                  <X className="h-4 w-4 text-[#222222]" />
                </button>

              </div>

              <form
                onSubmit={
                  handleReviewSubmit
                }
                className="mt-4 space-y-4"
              >

                <div className="grid gap-4 sm:grid-cols-2">

                  <div>

                    <label className="mb-1 block text-sm font-semibold text-[#222222]">
                      Customer Name
                    </label>

                    <input
                      value={
                        reviewForm.name
                      }
                      onChange={(event) =>
                        setReviewForm(
                          (value) => ({
                            ...value,
                            name: event.target.value,
                          })
                        )
                      }
                      className="w-full rounded-md border border-[#E5E5E5] px-3 py-2 text-sm outline-none focus:border-[#606C38]"
                    />

                    {formErrors.name ? (
                      <p className="mt-1 text-xs text-red-500">
                        {formErrors.name}
                      </p>
                    ) : null}

                  </div>

                  <div>

                    <label className="mb-1 block text-sm font-semibold text-[#222222]">
                      Email Address
                    </label>

                    <input
                      type="email"
                      value={
                        reviewForm.email
                      }
                      onChange={(event) =>
                        setReviewForm(
                          (value) => ({
                            ...value,
                            email: event.target.value,
                          })
                        )
                      }
                      className="w-full rounded-md border border-[#E5E5E5] px-3 py-2 text-sm outline-none focus:border-[#606C38]"
                    />

                    {formErrors.email ? (
                      <p className="mt-1 text-xs text-red-500">
                        {formErrors.email}
                      </p>
                    ) : null}

                  </div>

                </div>

                <div>

                  <label className="mb-1 block text-sm font-semibold text-[#222222]">
                    Star Rating
                  </label>

                  <select
                    value={
                      reviewForm.rating
                    }
                    onChange={(event) =>
                      setReviewForm(
                        (value) => ({
                          ...value,
                          rating: Number(
                            event.target.value
                          ),
                        })
                      )
                    }
                    className="w-full rounded-md border border-[#E5E5E5] px-3 py-2 text-sm outline-none focus:border-[#606C38]"
                  >

                    <option value={5}>
                      5 Stars
                    </option>

                    <option value={4}>
                      4 Stars
                    </option>

                    <option value={3}>
                      3 Stars
                    </option>

                    <option value={2}>
                      2 Stars
                    </option>

                    <option value={1}>
                      1 Star
                    </option>

                  </select>

                  {formErrors.rating ? (
                    <p className="mt-1 text-xs text-red-500">
                      {formErrors.rating}
                    </p>
                  ) : null}

                </div>

                <div>

                  <label className="mb-1 block text-sm font-semibold text-[#222222]">
                    Review Title
                  </label>

                  <input
                    value={
                      reviewForm.title
                    }
                    onChange={(event) =>
                      setReviewForm(
                        (value) => ({
                          ...value,
                          title: event.target.value,
                        })
                      )
                    }
                    className="w-full rounded-md border border-[#E5E5E5] px-3 py-2 text-sm outline-none focus:border-[#606C38]"
                  />

                </div>

                <div>

                  <label className="mb-1 block text-sm font-semibold text-[#222222]">
                    Review Message
                  </label>

                  <textarea
                    rows={4}
                    value={
                      reviewForm.message
                    }
                    onChange={(event) =>
                      setReviewForm(
                        (value) => ({
                          ...value,
                          message:
                            event.target.value,
                        })
                      )
                    }
                    className="w-full rounded-md border border-[#E5E5E5] px-3 py-2 text-sm outline-none focus:border-[#606C38]"
                  />

                  {formErrors.message ? (
                    <p className="mt-1 text-xs text-red-500">
                      {formErrors.message}
                    </p>
                  ) : null}

                </div>

                <div className="flex flex-wrap gap-3">

                  <button
                    type="submit"
                    className="rounded-md bg-[#606C38] px-5 py-3 text-sm font-bold text-white transition-colors hover:bg-[#505a2f]"
                  >
                    Submit Review
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      setIsReviewOpen(false)
                    }
                    className="rounded-md border border-[#E5E5E5] px-5 py-3 text-sm font-bold text-[#222222] transition-colors hover:border-[#C5A880] hover:text-[#606C38]"
                  >
                    Cancel
                  </button>

                </div>

              </form>

            </motion.div>

          </motion.div>
        ) : null}

      </AnimatePresence>

    </div>
  );
}