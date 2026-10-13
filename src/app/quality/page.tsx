import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";

export default function QualityPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-gradient-to-r from-dark to-primary-dark py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Quality Assurance
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg">
            Our uncompromising commitment to quality ensures that every product
            we export meets the highest international standards.
          </p>
        </div>
      </section>

      {/* Quality Philosophy */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div>
              <SectionHeading
                title="Our Philosophy"
                subtitle="Quality is Not an Option, It&apos;s Our Promise"
              />
              <p className="text-gray-600 leading-relaxed mb-4">
                At Galaxy Lotus International, quality is at the core of everything we do. From the
                moment raw materials are sourced from farms to the final
                dispatch of packed products, every step is monitored and
                controlled to ensure the highest standards of purity, freshness,
                and safety.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our quality control team comprises experienced food technologists
                and quality analysts who rigorously test every batch for
                parameters including moisture content, purity, microbial load,
                pesticide residues, aflatoxins, and heavy metals.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                We understand that our clients depend on us for consistent
                quality that meets the regulatory requirements of their
                respective countries. Whether it&apos;s FDA standards for the USA,
                EU regulations for Europe, or specific requirements for the
                Middle East, we ensure full compliance.
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "ISO 22000:2018",
                  "HACCP Certified",
                  "GMP Compliant",
                  "APEDA Registered",
                  "FSSAI Licensed",
                  "IEC Holder",
                ].map((cert) => (
                  <span
                    key={cert}
                    className="text-xs font-semibold bg-primary/10 text-primary px-3 py-1.5 rounded-full"
                  >
                    ✓ {cert}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div className="bg-light rounded-2xl p-8 md:p-10 border border-gray-100">
                <h3 className="text-xl font-bold text-dark mb-6">
                  Quality Parameters We Test
                </h3>
                <div className="space-y-4">
                  {[
                    { param: "Moisture Content", standard: "As per product spec (max 5-12%)" },
                    { param: "Purity Level", standard: "99% minimum for all products" },
                    { param: "Microbial Load", standard: "Within international permissible limits" },
                    { param: "Pesticide Residues", standard: "EU/US FDA compliant levels" },
                    { param: "Aflatoxins", standard: "Below 10 ppb (EU standard)" },
                    { param: "Heavy Metals", standard: "Within WHO/FAO specified limits" },
                    { param: "Color Value", standard: "ASTA / ICUMSA standards" },
                    { param: "Foreign Matter", standard: "Maximum 0.5-1% depending on product" },
                  ].map((item) => (
                    <div
                      key={item.param}
                      className="flex items-start gap-3 bg-white rounded-lg p-4 shadow-sm"
                    >
                      <svg
                        className="w-5 h-5 text-primary flex-shrink-0 mt-0.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <p className="font-semibold text-dark text-sm">
                          {item.param}
                        </p>
                        <p className="text-xs text-gray-500">{item.standard}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Process Steps */}
      <section className="py-16 md:py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            title="Quality Process"
            subtitle="How We Ensure Quality at Every Step"
            center
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6 md:gap-4">
            {[
              {
                step: "1",
                title: "Supplier Audit",
                desc: "We thoroughly audit and approve all our farm and supplier partners before sourcing.",
                icon: "🔍",
              },
              {
                step: "2",
                title: "Incoming Inspection",
                desc: "Every raw material batch is inspected and tested before entering our processing facility.",
                icon: "📋",
              },
              {
                step: "3",
                title: "Processing Control",
                desc: "Processing is done under strict GMP and HACCP guidelines with regular monitoring.",
                icon: "⚙️",
              },
              {
                step: "4",
                title: "Lab Testing",
                desc: "Finished products undergo comprehensive lab testing for all quality parameters.",
                icon: "🔬",
              },
              {
                step: "5",
                title: "Final Dispatch",
                desc: "Only products that pass all quality gates are packed and dispatched to clients.",
                icon: "🚢",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-md transition-all relative"
              >
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                  {item.step}
                </div>
                <span className="text-3xl block mt-3 mb-3">{item.icon}</span>
                <h3 className="font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packaging Standards */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <div className="order-2 md:order-1">
              <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-2xl p-8 md:p-10">
                <h3 className="text-xl font-bold text-dark mb-6">
                  Packaging Standards
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      title: "Food Grade Materials",
                      desc: "All packaging materials are food-grade and meet international safety standards.",
                    },
                    {
                      title: "Moisture Protection",
                      desc: "Multi-layer packaging with moisture barriers to maintain product freshness.",
                    },
                    {
                      title: "Tamper-Proof",
                      desc: "Secure packaging with tamper-evident seals for complete supply chain integrity.",
                    },
                    {
                      title: "Custom Branding",
                      desc: "Private labeling and custom packaging design available for bulk orders.",
                    },
                  ].map((item) => (
                    <div
                      key={item.title}
                      className="bg-white rounded-lg p-4 shadow-sm border border-gray-100"
                    >
                      <h4 className="font-semibold text-dark text-sm mb-1">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-500">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <SectionHeading
                title="Packaging"
                subtitle="Safe & Compliant Packaging"
              />
              <p className="text-gray-600 leading-relaxed mb-4">
                We understand that proper packaging is critical for maintaining
                product quality during international transit. Our packaging
                solutions are designed to protect products from moisture,
                contamination, and physical damage.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                We offer multiple packaging options to suit different market
                requirements:
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "PP Woven Bags (25 kg, 50 kg)",
                  "Kraft Paper Bags with Inner Liner",
                  "Jute Bags for traditional markets",
                  "Corrugated Cartons (10 kg, 20 kg)",
                  "Consumer Retail Pouches and Jars",
                  "Aseptic Bulk Packaging for pastes",
                ].map((pack) => (
                  <li
                    key={pack}
                    className="flex items-center gap-2 text-sm text-gray-600"
                  >
                    <svg
                      className="w-4 h-4 text-primary flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {pack}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 md:py-20 bg-dark">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            title="Certifications"
            subtitle="Internationally Recognized Standards"
            center
            light
          />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {[
              { name: "ISO 22000", desc: "Food Safety Management" },
              { name: "HACCP", desc: "Hazard Analysis" },
              { name: "GMP", desc: "Good Manufacturing" },
              { name: "APEDA", desc: "Govt. of India Export Auth." },
              { name: "FSSAI", desc: "Food Safety Authority" },
              { name: "IEC", desc: "Import Export Code" },
            ].map((cert) => (
              <div
                key={cert.name}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all"
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3">
                  <svg
                    className="w-6 h-6 text-primary-light"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-white font-bold text-sm mb-1">{cert.name}</h3>
                <p className="text-gray-400 text-xs">{cert.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Need Product Samples or Quality Reports?
          </h2>
          <p className="text-white/80 mb-8">
            Contact us today to request product samples, quality certificates,
            or a detailed specification sheet for any product.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Request Samples
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
