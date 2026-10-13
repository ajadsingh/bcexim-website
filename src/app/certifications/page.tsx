import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";

const certificates = [
  {
    id: "iec",
    name: "IEC Certificate",
    fullName: "Import Export Code (IEC)",
    description:
      "Issued by the Directorate General of Foreign Trade (DGFT), Government of India. IEC is a mandatory business identification number for all export and import operations from India.",
    file: "/certificates/IEC.pdf",
    icon: "🏛️",
    issuer: "DGFT, Government of India",
  },
  {
    id: "apeda",
    name: "APEDA Registration",
    fullName: "Agricultural & Processed Food Products Export Development Authority",
    description:
      "APEDA registration certifies us as an authorized exporter of agricultural and processed food products under the Agricultural and Processed Food Products Export Development Authority, Ministry of Commerce & Industry, Government of India.",
    file: "/certificates/APEDA.pdf",
    icon: "🌾",
    issuer: "Ministry of Commerce & Industry, Govt. of India",
  },
  {
    id: "fssai",
    name: "FSSAI License",
    fullName: "Food Safety and Standards Authority of India",
    description:
      "FSSAI license confirms compliance with all food safety and hygiene standards mandated by the Food Safety and Standards Authority of India. This ensures our products meet the highest quality benchmarks for safe food handling and processing.",
    file: "/certificates/FSSAI.pdf",
    icon: "✅",
    issuer: "Food Safety and Standards Authority of India",
  },
];

export default function CertificationsPage() {
  return (
    <>
      {/* Page Hero */}
      <section className="bg-gradient-to-r from-dark to-primary-dark py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Certifications
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg">
            Internationally recognized licenses and registrations that validate
            our commitment to quality, compliance, and trustworthy trade.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Galaxy Lotus International holds all required government-mandated
            registrations and licenses for the export of food and agricultural
            products from India. Our certifications ensure our buyers worldwide
            can trade with full confidence in our legal compliance and product
            safety standards.
          </p>
        </div>
      </section>

      {/* Certificates */}
      <section className="py-16 md:py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            title="Valid Certificates"
            subtitle="Click to view or download any certificate"
            center
          />

          <div className="grid md:grid-cols-3 gap-8 mt-8">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-all duration-300 group"
              >
                {/* Card Header */}
                <div className="bg-gradient-to-br from-primary to-primary-dark p-6 text-white text-center">
                  <span className="text-5xl block mb-3">{cert.icon}</span>
                  <h2 className="text-xl font-bold">{cert.name}</h2>
                  <p className="text-white/80 text-xs mt-1">{cert.issuer}</p>
                </div>

                {/* PDF Preview */}
                <div className="p-4 bg-gray-50 border-b border-gray-100">
                  <div className="relative w-full rounded-lg overflow-hidden border border-gray-200 bg-white">
                    <iframe
                      src={`${cert.file}#page=1&toolbar=0&navpanes=0&scrollbar=0`}
                      className="w-full h-72"
                      title={cert.name}
                    />
                    {/* Overlay to prevent interaction, show only first page view */}
                    <div className="absolute inset-0 cursor-default" />
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6">
                  <h3 className="font-bold text-dark text-sm mb-1">
                    {cert.fullName}
                  </h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-4">
                    {cert.description}
                  </p>

                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-primary text-white rounded-lg font-semibold text-sm hover:bg-primary-dark transition-colors shadow-md"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                    View Certificate
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            title="Why Our Certifications Matter"
            subtitle="Trade with confidence and compliance"
            center
          />
          <div className="grid sm:grid-cols-3 gap-6 mt-8">
            {[
              {
                icon: "🔒",
                title: "Legal Compliance",
                desc: "All our export operations are fully compliant with Indian and international trade laws and food safety regulations.",
              },
              {
                icon: "🌍",
                title: "Global Market Access",
                desc: "Our APEDA registration and FSSAI license open doors to regulated markets in the EU, USA, Gulf, and beyond.",
              },
              {
                icon: "📋",
                title: "Documentation Support",
                desc: "We provide complete export documentation including CoA, phytosanitary certificates, and shipping documents with every shipment.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="text-center p-6 rounded-xl border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all"
              >
                <span className="text-4xl block mb-3">{item.icon}</span>
                <h3 className="text-lg font-bold text-dark mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Need More Information or Additional Certificates?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Contact us for specific quality certificates, lab reports, or any
            compliance documentation required for your import country.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Contact Us
            <svg
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}

