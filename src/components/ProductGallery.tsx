"use client";

import { useState } from "react";

interface GalleryItem {
  label: string;
  image: string;
}

interface ProductGalleryProps {
  productName: string;
  category: string;
  mainImage: string;
  gallery?: GalleryItem[];
}

export default function ProductGallery({
  productName,
  category,
  mainImage,
  gallery,
}: ProductGalleryProps) {
  const images: GalleryItem[] = gallery && gallery.length > 0
    ? gallery
    : [{ label: productName, image: mainImage }];

  const [activeIdx, setActiveIdx] = useState(0);
  const activeItem = images[activeIdx] || images[0];

  return (
    <div className="md:sticky md:top-28 space-y-4 mb-6 md:mb-0">
      {/* Main Image View */}
      <div className="w-full aspect-square rounded-2xl overflow-hidden shadow-xl bg-gray-100 relative group">
        <img
          key={activeItem.image}
          src={activeItem.image}
          alt={activeItem.label}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-5 left-5">
          <span className="text-xs font-semibold bg-white/95 text-dark px-3.5 py-1.5 rounded-full shadow-sm">
            {category}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4 bg-dark/75 backdrop-blur-sm text-white px-4 py-2 rounded-xl text-xs flex items-center justify-between">
          <span className="font-medium">{activeItem.label}</span>
          <span className="text-gray-300 text-[11px]">
            {activeIdx + 1} / {images.length}
          </span>
        </div>
      </div>

      {/* Flakes / Powder Thumbnails */}
      {images.length > 1 && (
        <div>
          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Available Physical Forms & Cuts
          </div>
          <div className="grid grid-cols-3 gap-3">
            {images.map((item, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveIdx(idx)}
                className={`relative rounded-xl overflow-hidden border-2 text-left transition-all ${
                  activeIdx === idx
                    ? "border-primary ring-2 ring-primary/20 shadow-md scale-102"
                    : "border-gray-200 hover:border-gray-300 opacity-75 hover:opacity-100"
                }`}
              >
                <div className="h-16 w-full bg-gray-100">
                  <img
                    src={item.image}
                    alt={item.label}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-1.5 bg-white text-[11px] font-medium text-dark truncate">
                  {item.label}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

