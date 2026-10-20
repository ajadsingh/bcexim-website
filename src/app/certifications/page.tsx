"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import Link from "next/link";

interface Certificate {
  id: string;
  name: string;
  fullName: string;
  description: string;
  pdfFile: string;
  previewImage: string;
  icon: string;
  issuer: string;
}

const certificates: Certificate[] = [
  {
    id: "iec",
    name: "IEC Certificate",
    fullName: "Import Export Code (IEC)",
    description:
      "Issued by the Directorate General of Foreign Trade (DGFT), Government of India. Mandatory business identification for export & import operations.",
    pdfFile: "/certificates/IEC_page1.pdf",
    previewImage: "/certificates/IEC_page1.jpg",
    icon: "🏛️",
    issuer: "DGFT, Government of India",
  },
  {
    id: "apeda",
    name: "APEDA Registration",
    fullName: "Agricultural & Processed Food Products Export Development Authority",
    description:
      "APEDA registration certifies Galaxy Lotus International as an authorized exporter of agricultural and processed food products.",
    pdfFile: "/certificates/APEDA_page1.pdf",
    previewImage: "/certificates/APEDA_page1.jpg",
    icon: "🌾",
    issuer: "Ministry of Commerce & Industry, Govt. of India",
  },
  {
    id: "fssai",
    name: "FSSAI License",
    fullName: "Food Safety and Standards Authority of India",
    description:
      "Central FSSAI license confirms compliance with all safety, hygiene and manufacturing benchmarks under Food Safety and Standards Act.",
    pdfFile: "/certificates/FSSAI_page1.pdf",
    previewImage: "/certificates/FSSAI_page1.jpg",
    icon: "✅",
    issuer: "Food Safety and Standards Authority of India",
  },
];

export default function CertificationsPage() {
  const [activeCert, setActiveCert] = useState<Certificate | null>(null);

  return (
    <>
      {/* Page Hero */}
      <section className="bg-gradient-to-r from-dark to-primary-dark py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Our Certifications
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg">
            Internationally recognized licenses and registrations that validate our commitment to quality, compliance, and trustworthy trade.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Galaxy Lotus International holds all required government-mandated registrations and licenses for the export of food and agricultural products from India. Click <span className="font-semibold text-primary">View</span> on any certificate to inspect the verified first-page document.
          </p>
        </div>
      </section>

      {/* Certificates Grid */}
      <section className="py-16 md:py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            title="Valid Certificates"
            subtitle="Click on any certificate to view the verified first page"
            center
          />

          <div className="grid md:grid-cols-3 gap-8 mt-10">
            {certificates.map((cert) => (
              <div
                key={cert.id}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col group"
              >
                {/* Certificate Card Header */}
                <div className="bg-gradient-to-br from-primary to-primary-dark p-5 text-white flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{cert.icon}</span>
                    <div>
                      <h2 className="text-lg font-bold leading-tight">{cert.name}</h2>
                      <p className="text-white/80 text-xs">{cert.issuer}</p>
                    </div>
                  </div>
                  <span className="text-[11px] font-semibold bg-white/20 text-white px-2.5 py-1 rounded-full uppercase tracking-wider">
                    Page 1
                  </span>
                </div>

                {/* Horizon-Style Certificate Image Preview with Overlay */}
                <div
                  onClick={() => setActiveCert(cert)}
                  className="relative overflow-hidden cursor-pointer bg-gray-50 border-b border-gray-100 aspect-[3/4] max-h-96"
                >
                  <img
                    src={cert.previewImage}
                    alt={`${cert.name} First Page`}
                    className="w-full h-full object-contain p-3 group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 text-white">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg">
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <span className="font-semibold text-sm tracking-wide">View Page 1</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-bold text-dark text-base mb-1.5">{cert.fullName}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed mb-5 flex-1">{cert.description}</p>

                  <div className="flex gap-2">
                    <button
                      type="button"
                      onClick={() => setActiveCert(cert)}
                      className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 bg-primary text-white rounded-lg font-semibold text-sm hover:bg-primary-dark transition-colors shadow-sm"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      View
                    </button>
                    <a
                      href={cert.pdfFile}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center px-4 py-2.5 border border-gray-300 text-gray-700 rounded-lg font-medium text-sm hover:bg-gray-50 transition-colors"
                      title="Open Document in New Tab"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox / Modal for ONLY First Page View */}
      {activeCert && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in-up"
          onClick={() => setActiveCert(null)}
        >
          <div
            className="relative bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 bg-dark text-white">
              <div className="flex items-center gap-2">
                <span className="text-xl">{activeCert.icon}</span>
                <div>
                  <h3 className="font-bold text-base leading-tight">{activeCert.name} (Page 1)</h3>
                  <p className="text-xs text-gray-300">{activeCert.fullName}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <a
                  href={activeCert.pdfFile}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs bg-primary hover:bg-primary-dark text-white px-3 py-1.5 rounded-md font-medium transition-colors"
                >
                  Open PDF ↗
                </a>
                <button
                  type="button"
                  onClick={() => setActiveCert(null)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                  aria-label="Close"
                >
                  ✕
                </button>
              </div>
            </div>

            {/* Modal Image Body - Strictly Page 1 */}
            <div className="p-4 overflow-y-auto flex-1 flex items-center justify-center bg-gray-100">
              <img
                src={activeCert.previewImage}
                alt={`${activeCert.name} First Page`}
                className="max-h-[72vh] w-auto max-w-full object-contain rounded-lg shadow-md border border-gray-200 bg-white"
              />
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3 bg-gray-50 border-t border-gray-200 flex items-center justify-between text-xs text-gray-500">
              <span>Verified Government Document · Page 1</span>
              <button
                type="button"
                onClick={() => setActiveCert(null)}
                className="text-primary font-semibold hover:underline"
              >
                Close Window
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Trust Badges */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            title="Why Our Certifications Matter"
            subtitle="Trade with confidence, transparency and compliance"
            center
          />
          <div className="grid sm:grid-cols-3 gap-6 mt-8">
            {[
              {
                icon: "🔒",
                title: "Legal Export Compliance",
                desc: "All our export shipments are fully compliant with Indian DGFT trade regulations and international food safety laws.",
              },
              {
                icon: "🌍",
                title: "Global Export Authorization",
                desc: "Our APEDA registration and FSSAI export license allow smooth clearance into the US, EU, UK, and Middle East markets.",
              },
              {
                icon: "📋",
                title: "Full Documentation Support",
                desc: "We provide Certificate of Analysis (CoA), Phytosanitary certificates, Fumigation, and Bill of Lading with every batch.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="text-center p-6 rounded-xl border border-gray-100 hover:border-primary/30 hover:shadow-md transition-all"
              >
                <span className="text-4xl block mb-3">{item.icon}</span>
                <h3 className="text-lg font-bold text-dark mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Need Quality Certificates or Specification Sheets?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Contact us for specific batch lab reports, Certificates of Analysis (CoA), or customized packaging compliance documents.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-primary font-bold rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
          >
            Contact Our Team
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
