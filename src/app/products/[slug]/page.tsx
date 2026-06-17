import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products, type Product } from "@/data/products";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.id,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = products.find((p) => p.id === slug);
  if (!product) return { title: "Product Not Found" };

  return {
    title: `${product.name} - Premium Indian Export Quality | BCEXIM`,
    description: product.description,
    keywords: `${product.name}, Indian ${product.category}, export quality, BCEXIM, Gujarat exporter, wholesale`,
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = products.find((p) => p.id === slug);

  if (!product) notFound();

  return (
    <>
      {/* Breadcrumb */}
      <div className="bg-light border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-primary transition-colors">Products</Link>
            <span>/</span>
            <span className="text-dark font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Hero */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 items-start">
            {/* Left - Product Image */}
            <div className="sticky top-28">
              <div
                className="w-full aspect-square rounded-2xl flex items-center justify-center relative overflow-hidden shadow-xl"
                style={{ background: product.image }}
              >
                <span className="text-8xl md:text-9xl opacity-30">🌿</span>
                <div className="absolute top-5 left-5">
                  <span className="text-xs font-semibold bg-white/95 text-dark px-3.5 py-1.5 rounded-full shadow-sm">
                    {product.category}
                  </span>
                </div>
                {/* Decorative ring */}
                <div className="absolute inset-4 border-2 border-white/10 rounded-2xl" />
              </div>
            </div>

            {/* Right - Product Info */}
            <div>
              <span className="text-primary text-sm font-semibold uppercase tracking-wider mb-2 block">
                {product.category}
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-6">
                {product.name}
              </h1>
              <p className="text-gray-600 text-base leading-relaxed mb-8">
                {product.description}
              </p>

              {/* Quick Actions */}
              <div className="flex flex-col sm:flex-row gap-3 mb-10">
                <a
                  href={`https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(
                    `Hello! I am interested in ${product.name}. Please share price, MOQ, and availability.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-6 py-3.5 bg-[#25D366] text-white text-center rounded-lg font-semibold hover:bg-[#1fb954] transition-colors shadow-md inline-flex items-center justify-center gap-2"
                >
                  <WhatsAppIconSM /> Enquire on WhatsApp
                </a>
                <Link
                  href="/contact"
                  className="flex-1 px-6 py-3.5 bg-primary text-white text-center rounded-lg font-semibold hover:bg-primary-dark transition-colors shadow-md"
                >
                  Request Quote
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-16 md:py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-dark mb-8 flex items-center gap-3">
              <span className="w-2 h-8 bg-primary rounded-full" />
              Specifications
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {product.specifications.map((spec, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 bg-white rounded-xl px-5 py-4 shadow-sm border border-gray-100"
                >
                  <svg
                    className="w-5 h-5 text-primary flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-sm font-medium text-dark">{spec}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-dark mb-8 flex items-center gap-3">
              <span className="w-2 h-8 bg-accent rounded-full" />
              Applications & Uses
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {product.applications.map((app, idx) => (
                <div
                  key={idx}
                  className="group bg-light hover:bg-primary/5 rounded-xl px-6 py-5 border border-gray-100 hover:border-primary/30 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                    <span className="text-sm font-medium text-dark group-hover:text-primary transition-colors">
                      {app}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packaging Section */}
      <section className="py-16 md:py-20 bg-light">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-dark mb-8 flex items-center gap-3">
              <span className="w-2 h-8 bg-primary rounded-full" />
              Packaging Options
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {product.packaging.map((pack, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl px-6 py-5 shadow-sm border border-gray-100 flex items-center gap-3"
                >
                  <span className="text-xl">📦</span>
                  <span className="text-sm font-medium text-dark">{pack}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-4xl">
            <h2 className="text-2xl md:text-3xl font-bold text-dark mb-8 flex items-center gap-3">
              <span className="w-2 h-8 bg-accent rounded-full" />
              Quality Assurance
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: "🔬", title: "Lab Tested", desc: "Every batch tested for purity and safety" },
                { icon: "✅", title: "ISO Certified", desc: "ISO 22000:2018 food safety management" },
                { icon: "🛡️", title: "HACCP Compliant", desc: "Hazard analysis and critical control" },
                { icon: "🌱", title: "Fresh & Natural", desc: "No artificial additives or preservatives" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl p-5 text-center border border-gray-100"
                >
                  <span className="text-3xl block mb-3">{item.icon}</span>
                  <h4 className="font-semibold text-dark text-sm mb-1">{item.title}</h4>
                  <p className="text-xs text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
            Interested in {product.name}?
          </h2>
          <p className="text-white/80 text-base md:text-lg mb-8 max-w-2xl mx-auto">
            Get the best quality {product.name} at competitive prices. Contact us for samples, pricing, and bulk order details.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-3.5 bg-white text-primary rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg"
            >
              Request Quote
            </Link>
            <a
              href={`https://wa.me/91XXXXXXXXXX?text=${encodeURIComponent(
                `Hello! I would like to know more about ${product.name} - pricing, MOQ, and availability.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-[#25D366] text-white rounded-lg font-bold hover:bg-[#1fb954] transition-colors shadow-lg inline-flex items-center justify-center gap-2"
            >
              <WhatsAppIconSM /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <RelatedProducts currentSlug={slug} category={product.category} />
    </>
  );
}

function RelatedProducts({ currentSlug, category }: { currentSlug: string; category: string }) {
  const related = products
    .filter((p) => p.category === category && p.id !== currentSlug)
    .slice(0, 4);

  if (related.length === 0) return null;

  return (
    <section className="py-16 md:py-24 bg-light">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-dark mb-8 text-center">
          More in{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary-light">
            {category}
          </span>
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {related.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div
                className="h-36 relative overflow-hidden flex items-center justify-center"
                style={{ background: product.image }}
              >
                <span className="text-4xl opacity-30 group-hover:opacity-40 transition-opacity">🌿</span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-dark text-sm group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <p className="text-xs text-gray-500 mt-1 line-clamp-2">{product.description}</p>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary mt-3 group-hover:gap-2 transition-all">
                  View Details →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhatsAppIconSM() {
  return (
    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" />
    </svg>
  );
}
