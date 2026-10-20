"use client";

import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    product: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage("");

    // FormSubmit endpoint using activated token with email fallback
    const formSubmitEndpoint = "https://formsubmit.co/ajax/505010db9491ba0fc413c1c225f96af5";

    try {
      const response = await fetch(formSubmitEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          phone: formState.phone,
          company: formState.company,
          website: formState.website,
          product: formState.product,
          message: formState.message,
          _subject: `New Inquiry: ${formState.product || "General"} - from ${formState.name}`,
          _template: "table",
          _captcha: "false",
        }),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        // Fallback directly to mailto so enquiry is NEVER lost
        window.location.href = `mailto:galaxylotusint@gmail.com?subject=${encodeURIComponent(
          `New Product Enquiry from ${formState.name}`
        )}&body=${encodeURIComponent(
          `Name: ${formState.name}\nEmail: ${formState.email}\nPhone: ${formState.phone}\nCompany: ${formState.company}\nProduct: ${formState.product}\n\nMessage:\n${formState.message}`
        )}`;
        setSubmitted(true);
      }
    } catch {
      // Offline or network block fallback
      window.location.href = `mailto:galaxylotusint@gmail.com?subject=${encodeURIComponent(
        `New Product Enquiry from ${formState.name}`
      )}&body=${encodeURIComponent(
        `Name: ${formState.name}\nEmail: ${formState.email}\nPhone: ${formState.phone}\nCompany: ${formState.company}\nProduct: ${formState.product}\n\nMessage:\n${formState.message}`
      )}`;
      setSubmitted(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Page Hero */}
      <section className="bg-gradient-to-r from-dark to-primary-dark py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg">
            We&apos;d love to hear from you. Reach out for product inquiries,
            pricing, samples, or partnership opportunities.
          </p>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-10 md:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <SectionHeading title="Get In Touch" subtitle="Contact Information" />
              <div className="space-y-6">
                <ContactInfoCard
                  icon={<LocationIcon />}
                  title="Our Location"
                  lines={[
                    "C1-FF, Shri Krishna Park",
                    "Behind Shivaji Complex, Near Smruti Mandir",
                    "Ghodasar, Ahmedabad – 380050",
                    "Gujarat (INDIA)",
                  ]}
                />
                <ContactInfoCard
                  icon={<PhoneIcon />}
                  title="Phone"
                  lines={["+91 8780010843"]}
                  links={["tel:+918780010843"]}
                />
                <ContactInfoCard
                  icon={<MailIcon />}
                  title="Email"
                  lines={["galaxylotusint@gmail.com"]}
                  links={["mailto:galaxylotusint@gmail.com"]}
                />
                <ContactInfoCard
                  icon={<ClockIcon />}
                  title="Business Hours"
                  lines={[
                    "Monday - Saturday",
                    "9:00 AM - 6:00 PM IST",
                    "Sunday: Closed",
                  ]}
                />
              </div>

              {/* WhatsApp CTA Card */}
              <div className="mt-8 bg-[#25D366] rounded-xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
                  </svg>
                  Quick WhatsApp Chat
                </h3>
                <p className="text-sm text-white/90 mb-4">
                  Get instant responses to your queries via WhatsApp. We typically respond within minutes during business hours.
                </p>
                <a
                  href="https://wa.me/918780010843?text=Hello!%20I%20need%20more%20information%20about%20your%20products."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-white text-[#25D366] font-bold py-2.5 rounded-lg hover:bg-gray-50 transition-colors text-sm"
                >
                  Start Chat →
                </a>
              </div>
            </div>

            {/* Contact Form & Map */}
            <div className="lg:col-span-2">
              <SectionHeading title="Send Enquiry" subtitle="Drop Us a Message" />

              {submitted ? (
                <div className="bg-white rounded-xl p-10 shadow-sm border border-gray-100 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-dark mb-2">Thank You!</h3>
                  <p className="text-gray-600 mb-6">
                    Your enquiry has been received. Our team will get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormState({
                        name: "",
                        email: "",
                        phone: "",
                        company: "",
                        website: "",
                        product: "",
                        message: "",
                      });
                    }}
                    className="text-primary font-semibold hover:underline text-sm"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-100"
                >
                  <div className="grid sm:grid-cols-2 gap-4 md:gap-6 mb-6">
                    <FormField
                      label="Full Name *"
                      name="name"
                      type="text"
                      value={formState.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                    />
                    <FormField
                      label="Email Address *"
                      name="email"
                      type="email"
                      value={formState.email}
                      onChange={handleChange}
                      placeholder="john@company.com"
                      required
                    />
                    <FormField
                      label="Phone Number"
                      name="phone"
                      type="tel"
                      value={formState.phone}
                      onChange={handleChange}
                      placeholder="+1 234 567 8900"
                    />
                    <FormField
                      label="Company Name"
                      name="company"
                      type="text"
                      value={formState.company}
                      onChange={handleChange}
                      placeholder="Your Company Ltd."
                    />
                    <FormField
                      label="Website"
                      name="website"
                      type="url"
                      value={formState.website || ""}
                      onChange={handleChange}
                      placeholder="https://www.yourwebsite.com"
                    />
                  </div>

                  {/* Product Interest */}
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-dark mb-2">
                      Product of Interest
                    </label>
                    <select
                      name="product"
                      value={formState.product}
                      onChange={handleChange}
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                    >
                      <option value="">Select a product...</option>
                      <option value="Onion Powder / Flakes">Onion Powder / Flakes</option>
                      <option value="Garlic Powder / Flakes">Garlic Powder / Flakes</option>
                      <option value="Psyllium Husk & Powder">Psyllium Husk &amp; Powder</option>
                      <option value="Guar Gum Powder">Guar Gum Powder</option>
                      <option value="Multiple Products">Multiple Products / Custom Order</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="mb-6">
                    <label className="block text-sm font-semibold text-dark mb-2">
                      Your Message *
                    </label>
                    <textarea
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell us about your requirements, quantity needed, target market, and any specific quality parameters..."
                      className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all resize-y"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto px-8 py-3.5 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-colors shadow-md inline-flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? "Sending..." : "Send Enquiry"}
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </form>
              )}

              {/* Interactive Google Map */}
              <div className="mt-8 bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                <div className="p-3 bg-gray-50 border-b border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-semibold text-gray-700">
                    <LocationIcon />
                    <span>C1-FF, Shri Krishna Park, Behind Shivaji Complex, Ghodasar, Ahmedabad 380050</span>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Shri+Krishna+Park+Ghodasar+Ahmedabad+380050"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-primary font-semibold hover:underline"
                  >
                    Open in Maps →
                  </a>
                </div>
                <div className="h-72 w-full">
                  <iframe
                    title="Office Location Map"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    src="https://maps.google.com/maps?q=Shri+Krishna+Park,+Behind+Shivaji+Complex,+Near+Smruti+Mandir,+Ghodasar,+Ahmedabad,+Gujarat+380050&t=&z=15&ie=UTF8&iwloc=&output=embed"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <SectionHeading
            title="FAQ"
            subtitle="Frequently Asked Questions"
            center
          />
          <div className="space-y-4">
            {[
              {
                q: "Do you provide product samples?",
                a: "Yes, we provide free samples for product evaluation. Shipping costs for samples are borne by the buyer. We can send samples via air courier to reach you within 5-7 business days.",
              },
              {
                q: "What certifications do you have?",
                a: "We are registered with APEDA (Agricultural & Processed Food Products Export Development Authority) and hold a valid FSSAI license and IEC (Import Export Code). Organic certification is also available for select products upon request. You can view all our certificates on our Certifications page.",
              },
              {
                q: "What payment terms do you offer?",
                a: "We offer flexible payment options, including Letter of Credit (L/C), Telegraphic Transfer (T/T), and Escrow Account. For first-time orders, our preferred terms are 50% advance payment, with the remaining 50% payable against shipping documents via L/C or T/T.",
              },
              {
                q: "How long does shipping take?",
                a: "Sea freight typically takes 15-30 days depending on the destination. Air freight is available for urgent orders and takes 3-7 days. Door-to-door delivery can be arranged upon request.",
              },
              {
                q: "Do you offer private labeling?",
                a: "Yes, we offer private labeling and custom packaging solutions. You can provide your own brand design, or our in-house design team can assist you in creating packaging that suits your market.",
              },
            ].map((faq, idx) => (
              <details
                key={idx}
                className="group bg-light rounded-xl border border-gray-100 overflow-hidden"
              >
                <summary className="flex items-center justify-between cursor-pointer p-5 font-semibold text-dark text-sm md:text-base list-none">
                  {faq.q}
                  <svg
                    className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5">
                  <p className="text-sm text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ContactInfoCard({
  icon,
  title,
  lines,
  links,
}: {
  icon: React.ReactNode;
  title: string;
  lines: string[];
  links?: string[];
}) {
  return (
    <div className="flex gap-4 bg-white rounded-xl p-5 shadow-sm border border-gray-100">
      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center text-primary flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="font-semibold text-dark text-sm mb-1">{title}</h3>
        {lines.map((line, idx) =>
          links && links[idx] ? (
            <a
              key={idx}
              href={links[idx]}
              className="block text-sm text-gray-600 hover:text-primary transition-colors"
            >
              {line}
            </a>
          ) : (
            <p key={idx} className="text-sm text-gray-600">
              {line}
            </p>
          )
        )}
      </div>
    </div>
  );
}

function FormField({
  label,
  name,
  type,
  value,
  onChange,
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-dark mb-2">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full px-4 py-2.5 rounded-lg border border-gray-200 bg-white text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all placeholder:text-gray-400"
      />
    </div>
  );
}

function LocationIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  );
}

function ClockIcon() {
  return (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );
}
