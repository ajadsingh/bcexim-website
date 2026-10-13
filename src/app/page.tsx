import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";
import { products } from "@/data/products";
import HeroProductSlider from "@/components/HeroProductSlider";

export default function Home() {
  const featuredProducts = products.slice(0, 6);

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[600px] md:min-h-[700px] flex items-center bg-gradient-to-br from-dark via-dark/95 to-primary-dark overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent rounded-full blur-3xl" />
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(26,138,63,0.1)_0%,_transparent_70%)]" />

        <div className="max-w-7xl mx-auto px-4 py-16 md:py-20 relative z-10 w-full">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div className="animate-fade-in-up">
              <span className="inline-block text-primary-light text-sm font-semibold tracking-widest uppercase mb-4 bg-primary/10 px-4 py-1.5 rounded-full">
                Delivering Quality Beyond Borders
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                Premium Indian{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-light to-green-300">
                  Spices & Dehydrated
                </span>{" "}
                Products
              </h1>
              <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                Based in Ahmedabad, the vibrant commercial hub of Gujarat, we export
                the finest quality dehydrated vegetables, psyllium husk, guar gum powder,
                and other premium agricultural ingredients to clients worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/products"
                  className="px-8 py-3.5 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors text-center shadow-lg shadow-primary/25"
                >
                  Explore Products
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-3.5 border-2 border-white/30 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors text-center"
                >
                  Get In Touch
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 md:gap-6 mt-10 md:mt-14">
                {[
                  { value: "50+", label: "Countries Served" },
                  { value: "500+", label: "Happy Clients" },
                  { value: "100%", label: "Quality Assured" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-primary-light">
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm text-gray-400 mt-1">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Product Slider */}
            <HeroProductSlider />
          </div>
        </div>

        {/* Bottom wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 60C240 120 480 0 720 30C960 60 1200 0 1440 40V120H0V60Z"
              fill="white"
            />
          </svg>
        </div>
      </section>

      {/* About Intro */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <SectionHeading
                title="About Galaxy Lotus International"
                subtitle="Your Trusted Partner for Premium Indian Exports"
              />
              <p className="text-gray-600 leading-relaxed mb-4">
                Based in Ahmedabad, Gujarat — the vibrant commercial capital of the state — Galaxy Lotus
                International is a premier exporter of high-quality dehydrated
                vegetables (onion, garlic), psyllium husk & powder, guar gum powder,
                and natural food ingredients. With deep-rooted
                connections to local farmers and state-of-the-art processing
                facilities, we ensure every shipment meets international
                quality standards.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We take pride in our commitment to purity, freshness, and
                timely delivery. Our products are carefully sourced, processed,
                and packed to preserve their natural goodness and meet the
                diverse needs of our global clientele.
              </p>
              <div className="flex flex-wrap gap-3 mb-6">
                {[
                  "APEDA Registered",
                  "FSSAI Licensed",
                  "IEC Holder",
                ].map((cert) => (
                  <span
                    key={cert}
                    className="text-xs font-medium bg-primary/10 text-primary px-3 py-1.5 rounded-full"
                  >
                    ✓ {cert}
                  </span>
                ))}
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-dark transition-colors"
              >
                Learn More About Us
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 md:p-10">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { title: "Premium Sourcing", desc: "Direct from trusted Indian farms", icon: "🌿" },
                    { title: "Quality Processing", desc: "State-of-the-art facilities", icon: "⚙️" },
                    { title: "Global Shipping", desc: "Reliable logistics worldwide", icon: "🚢" },
                    { title: "Customer Focus", desc: "Tailored solutions for you", icon: "🤝" },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="bg-white rounded-xl p-5 shadow-sm border border-gray-100"
                    >
                      <span className="text-2xl">{item.icon}</span>
                      <h4 className="font-semibold text-dark mt-2 text-sm">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-500 mt-1">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Overview */}
      <section className="py-16 md:py-24 bg-light" id="products">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            title="Our Products"
            subtitle="Explore Our Premium Range"
            center
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors shadow-md"
            >
              View All Products
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            title="Why Choose Us"
            subtitle="What Makes Galaxy Lotus International Different"
            center
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                icon: "🌍",
                title: "Global Reach",
                desc: "Serving clients in over 50 countries with reliable export logistics and documentation support.",
              },
              {
                icon: "✅",
                title: "Quality Assurance",
                desc: "Rigorous quality checks at every stage — from farm sourcing to final packaging.",
              },
              {
                icon: "💰",
                title: "Competitive Pricing",
                desc: "Direct farmer connections eliminate middlemen, offering you the best value.",
              },
              {
                icon: "📦",
                title: "Custom Packaging",
                desc: "Flexible packaging solutions including private labeling for your brand requirements.",
              },
              {
                icon: "⏱️",
                title: "Timely Delivery",
                desc: "Efficient supply chain management ensures on-time shipments, every time.",
              },
              {
                icon: "🌱",
                title: "Sustainable Sourcing",
                desc: "Ethically sourced products supporting local farming communities.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group p-6 rounded-xl border border-gray-100 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
              >
                <span className="text-3xl">{item.icon}</span>
                <h3 className="text-lg font-bold text-dark mt-4 mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            Looking for Premium Indian Spices and Dehydrated Products?
          </h2>
          <p className="text-white/80 text-base md:text-lg mb-8 max-w-2xl mx-auto">
            Let&apos;s discuss your requirements. Our team is ready to provide you
            with the best quality products at competitive prices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-white text-primary rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Contact Us Now
            </Link>
            <a
              href="https://wa.me/918780010843?text=Hello!%20I%20am%20interested%20in%20your%20products."
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

      {/* Testimonials - Hidden as requested */}
      {/* Certifications - Hidden as requested, will have separate page later */}
    </>
  );
}
