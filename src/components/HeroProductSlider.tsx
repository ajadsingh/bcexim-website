"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const productSlides = [
  {
    image: "/images/products/onion-powder-export.png",
    label: "Onion Powder",
    tag: "Red · White · Pink (80-100 Mesh)",
    color: "from-amber-500/30 to-orange-500/20",
  },
  {
    image: "/images/products/red-onion-flakes-export.png",
    label: "Onion Flakes",
    tag: "Dehydrated Red & White Flakes",
    color: "from-rose-500/30 to-amber-400/20",
  },
  {
    image: "/images/products/glovanta-garlic-flakes.png",
    label: "Garlic Flakes",
    tag: "Dehydrated Slices & Minced",
    color: "from-green-500/20 to-primary/20",
  },
  {
    image: "/images/products/glovanta-garlic-powder.png",
    label: "Garlic Powder",
    tag: "Pure Garlic Powder (High Allicin)",
    color: "from-lime-500/20 to-green-500/20",
  },
  {
    image: "/images/products/psyllium-husk-export.webp",
    label: "Psyllium Husk & Powder",
    tag: "Isabgol Whole Husk 99% & Powder",
    color: "from-teal-500/20 to-cyan-400/20",
  },
  {
    image: "/images/products/altrafine-guar-gum.jpg",
    label: "Guar Gum Powder",
    tag: "Food & Fast Hydration (100-300 Mesh)",
    color: "from-blue-500/20 to-indigo-400/20",
  },
];

export default function HeroProductSlider() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setAnimating(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % productSlides.length);
        setAnimating(false);
      }, 400);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const slide = productSlides[current];

  return (
    <div className="hidden md:flex justify-center">
      <div className="relative w-full max-w-md">
        {/* Glow background */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${slide.color} rounded-full blur-3xl transition-all duration-700`}
        />

        {/* Main card */}
        <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 overflow-hidden shadow-2xl">
          {/* Product image */}
          <div
            className={`w-full h-64 relative overflow-hidden transition-opacity duration-400 ${
              animating ? "opacity-0" : "opacity-100"
            }`}
            style={{ transitionDuration: "400ms" }}
          >
            <img
              src={slide.image}
              alt={slide.label}
              className="w-full h-full object-cover"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            {/* Label on image */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <span className="text-xs font-semibold bg-white/20 text-white px-3 py-1 rounded-full backdrop-blur-sm">
                {slide.tag}
              </span>
              <h3 className="text-white text-xl font-bold mt-2 drop-shadow">
                {slide.label}
              </h3>
            </div>
          </div>

          {/* Bottom product grid thumbnails */}
          <div className="p-4 bg-white/5">
            <div className="flex gap-2 justify-center">
              {productSlides.map((s, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setAnimating(true);
                    setTimeout(() => {
                      setCurrent(i);
                      setAnimating(false);
                    }, 200);
                  }}
                  className={`w-10 h-10 rounded-lg overflow-hidden border-2 transition-all ${
                    i === current
                      ? "border-white scale-110 shadow-lg"
                      : "border-white/20 opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={s.image}
                    alt={s.label}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
            <div className="flex justify-center mt-3 gap-1.5">
              {productSlides.map((_, i) => (
                <span
                  key={i}
                  className={`block rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-5 h-1.5 bg-white"
                      : "w-1.5 h-1.5 bg-white/40"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Explore Products button */}
        <div className="mt-4 text-center">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm text-white/80 hover:text-white transition-colors"
          >
            <span>View all products</span>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}

