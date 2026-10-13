"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import { products, productCategories } from "@/data/products";

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProducts = useMemo(() => {
    let filtered = products;

    if (activeCategory !== "All") {
      filtered = filtered.filter((p) => p.category === activeCategory);
    }

    if (searchTerm.trim()) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (p) =>
          p.name.toLowerCase().includes(term) ||
          p.category.toLowerCase().includes(term) ||
          p.description.toLowerCase().includes(term)
      );
    }

    return filtered;
  }, [activeCategory, searchTerm]);

  return (
    <>
      {/* Page Hero */}
      <section className="bg-gradient-to-r from-dark to-primary-dark py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Products
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg">
            Discover our premium range of dehydrated vegetables (onion, garlic),
            psyllium husk & powder, guar gum powder — sourced from the finest
            Indian farms and processed to international export standards.
          </p>
        </div>
      </section>

      {/* Products Listing */}
      <section className="py-16 md:py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            title="Product Range"
            subtitle="Browse Our Full Catalog"
            center
          />

          {/* Count */}
          <p className="text-center text-sm text-gray-400 mb-6">
            Showing {filteredProducts.length} of {products.length} products
          </p>

          {/* Search & Filter */}
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-10">
            {/* Category Pills */}
            <div className="flex flex-wrap gap-2 justify-center">
              {productCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === cat
                      ? "bg-primary text-white shadow-md"
                      : "bg-white text-gray-600 hover:bg-primary/10 hover:text-primary border border-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full md:w-64">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <input
                type="text"
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
              />
            </div>
          </div>

          {/* Products Grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {filteredProducts.map((product) => (
                <Link
                  key={product.id}
                  href={`/products/${product.id}`}
                  className="group bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col"
                >
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
                          Flakes &amp; Powder
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
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary group-hover:text-primary-dark transition-colors mt-auto">
                      View Full Details
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <span className="text-5xl mb-4 block">🔍</span>
              <h3 className="text-xl font-bold text-dark mb-2">No products found</h3>
              <p className="text-gray-500">
                Try adjusting your search or category filter.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Need Help Section */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            Can&apos;t Find What You&apos;re Looking For?
          </h2>
          <p className="text-white/80 text-base md:text-lg mb-8 max-w-2xl mx-auto">
            We source a wide range of Indian spices and agricultural products.
            Contact us with your specific requirements and we&apos;ll find the
            right product for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-white text-primary rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Contact Us
            </Link>
            <a
              href="https://wa.me/918780010843?text=Hello!%20I%20am%20looking%20for%20a%20specific%20product."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-[#25D366] text-white rounded-lg font-bold hover:bg-[#1fb954] transition-colors shadow-lg inline-flex items-center justify-center gap-2"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
              </svg>
              WhatsApp Enquiry
            </a>
          </div>
        </div>
      </section>

      {/* Category Overview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            title="Categories"
            subtitle="Our Product Categories"
            center
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "Dehydrated Products",
                desc: "Premium dehydrated onion (Red, White, Pink) and garlic in powder and flakes form — processed to retain maximum flavor and aroma.",
                count: products.filter((p) => p.category === "Dehydrated Products").length,
                icon: "🧅",
              },
              {
                name: "Health & Wellness",
                desc: "Psyllium Husk & Powder in multiple purity grades — pharma, food, and organic certified, meeting global USP/BP/FCC standards.",
                count: products.filter((p) => p.category === "Health & Wellness").length,
                icon: "🌾",
              },
              {
                name: "Industrial & Food Ingredients",
                desc: "Guar Gum Powder in food, industrial, oil & gas, pharmaceutical, and cosmetic grades — India's #1 export ingredient.",
                count: products.filter((p) => p.category === "Industrial & Food Ingredients").length,
                icon: "🪴",
              },
            ].map((cat) => (
              <button
                key={cat.name}
                onClick={() => {
                  setActiveCategory(cat.name);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="bg-light rounded-xl p-6 border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all text-left"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-3xl">{cat.icon}</span>
                  <span className="text-xs font-semibold bg-primary/10 text-primary px-2.5 py-1 rounded-full">
                    {cat.count} Products
                  </span>
                </div>
                <h3 className="text-lg font-bold text-dark mb-2">{cat.name}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{cat.desc}</p>
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
