import Link from "next/link";
import type { Product } from "@/data/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col">
      {/* Image area with gradient */}
      <div
        className="h-48 relative overflow-hidden"
        style={{ background: product.image }}
      >
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors" />
        <div className="absolute top-3 left-3">
          <span className="text-xs font-medium bg-white/90 text-dark px-2.5 py-1 rounded-full">
            {product.category}
          </span>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-5xl opacity-30 group-hover:opacity-40 transition-opacity">
            🌿
          </span>
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

        {/* Specs preview */}
        <div className="mb-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-1.5">Specifications</p>
          <div className="flex flex-wrap gap-1.5">
            {product.specifications.slice(0, 3).map((spec, idx) => (
              <span
                key={idx}
                className="text-[11px] bg-light text-primary-dark px-2 py-0.5 rounded-full"
              >
                {spec}
              </span>
            ))}
          </div>
        </div>

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
