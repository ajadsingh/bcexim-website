import Link from "next/link";
import type { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
      {/* Image area */}
      <div className="h-52 relative overflow-hidden bg-gray-100">
        <img
          src={product.image}
          alt={product.name}
          className={`w-full h-full object-cover transition-all duration-500 ${
            product.gallery && product.gallery.length > 1
              ? "group-hover:opacity-0 group-hover:scale-105"
              : "group-hover:scale-105"
          }`}
        />
        {product.gallery && product.gallery.length > 1 && (
          <img
            src={product.gallery[1].image}
            alt={product.gallery[1].label}
            className="w-full h-full object-cover absolute inset-0 opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
          />
        )}
        <div className="absolute top-3 left-3 flex gap-1.5 flex-wrap">
          <span className="text-[11px] font-semibold bg-white/95 text-dark px-2.5 py-1 rounded-full shadow-sm">
            {product.category}
          </span>
          {product.gallery && product.gallery.length > 1 && (
            <span className="text-[10px] font-medium bg-dark/70 text-white px-2 py-0.5 rounded-full backdrop-blur-sm">
              Powder &amp; Flakes
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-bold text-dark mb-2 group-hover:text-primary transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1 line-clamp-3">
          {product.description}
        </p>

        {/* Specifications hidden - will make visible in future */}

        {/* Action */}
        <Link
          href={`/products/${product.id}`}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark transition-colors mt-auto"
        >
          View Details
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
