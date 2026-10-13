import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export default function AboutPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-gradient-to-r from-dark to-primary-dark py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            About Galaxy Lotus International
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg">
            From Ahmedabad, Gujarat to the world — our journey of
            delivering quality, and trust beyond borders.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <SectionHeading
                title="Our Story"
                subtitle="Rooted in Tradition, Driven by Excellence"
              />
              <p className="text-gray-600 leading-relaxed mb-4">
                Galaxy Lotus International was founded with a simple yet powerful vision — to bring
                the finest Indian spices and agricultural products to the
                global market. Based in Ahmedabad, Gujarat, the vibrant commercial
                hub of western India, we are strategically located with excellent
                connectivity to the country&apos;s richest agricultural regions.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Ahmedabad is a thriving center for trade and commerce, with
                world-class infrastructure and logistics facilities. Our deep
                understanding of Indian agricultural markets, combined with strong
                relationships with local farmers and processors, gives us a
                unique advantage in sourcing the finest quality products at
                competitive prices.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Over the years, we have grown from a local trading company to a
                trusted international exporter, serving clients across the
                Middle East, Europe, Southeast Asia, Africa, and the Americas.
                Our commitment to quality, transparency, and customer
                satisfaction remains unchanged.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-primary to-primary-dark rounded-2xl p-8 md:p-10 text-white">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-white/80 leading-relaxed mb-6">
                  To be the most trusted global partner for premium Indian
                  spices and food ingredients, delivering unmatched quality,
                  reliability, and value to every customer.
                </p>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-white/80 leading-relaxed">
                  To put Indian agricultural excellence on the world map by
                  empowering local farmers, embracing sustainable practices,
                  and continuously raising the bar for quality exports.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 md:py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            title="Our Values"
            subtitle="What Drives Us Every Day"
            center
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                icon: "🌟",
                title: "Quality First",
                desc: "We never compromise on quality. Every product undergoes rigorous testing before it reaches our clients.",
              },
              {
                icon: "🤝",
                title: "Integrity",
                desc: "Honest business practices, transparent pricing, and ethical sourcing are the foundation of our company.",
              },
              {
                icon: "🌱",
                title: "Sustainability",
                desc: "We support sustainable farming practices that protect the environment and uplift rural communities.",
              },
              {
                icon: "🚀",
                title: "Innovation",
                desc: "Continuously improving our processes, packaging, and logistics to serve you better.",
              },
            ].map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-md transition-all"
              >
                <span className="text-4xl">{value.icon}</span>
                <h3 className="text-lg font-bold text-dark mt-4 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sourcing Regions - Hidden as requested */}

      {/* Export Process */}
      <section className="py-16 md:py-24 bg-dark">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            title="How We Work"
            subtitle="Our Export Process"
            center
            light
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              {
                step: "01",
                title: "Sourcing",
                desc: "We handpick the finest raw materials directly from trusted farmers and certified suppliers across India.",
              },
              {
                step: "02",
                title: "Processing",
                desc: "Products are cleaned, sorted, and processed in state-of-the-art facilities under strict hygiene standards.",
              },
              {
                step: "03",
                title: "Quality Check",
                desc: "Every batch undergoes rigorous lab testing to ensure it meets international quality and safety standards.",
              },
              {
                step: "04",
                title: "Shipping",
                desc: "Professionally packed and shipped with complete export documentation for timely worldwide delivery.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="relative text-center group"
              >
                <div className="text-5xl font-extrabold text-white/10 mb-4 group-hover:text-primary/20 transition-colors">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team CTA */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Partner with Galaxy Lotus International?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Whether you&apos;re a first-time buyer or a regular importer, our team
            is here to assist you with product selection, pricing, and shipping
            solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Get In Touch
            </Link>
            <Link
              href="/products"
              className="px-8 py-3.5 border-2 border-white/40 text-white font-bold rounded-lg hover:bg-white/10 transition-colors"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
