import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Galaxy Lotus International - Premium Indian Spices, FoxNuts & Pulses Exporter",
  description:
    "Galaxy Lotus International exports premium quality Indian spices, dehydrated products, FoxNuts, pulses, and natural food ingredients globally. Based in Ahmedabad, Gujarat, India.",
  keywords:
    "spices exporter, Indian spices, dehydrated products, FoxNuts, pulses exporter, turmeric powder, red chilli, moringa powder, ginger garlic paste, Galaxy Lotus International, Ahmedabad exporter",
  authors: [{ name: "Galaxy Lotus International" }],
  openGraph: {
    title: "Galaxy Lotus International - Premium Indian Spices Exporter",
    description:
      "Premium quality Indian spices, dehydrated products, FoxNuts, pulses, and natural food ingredients exported globally.",
    type: "website",
    locale: "en_IN",
    siteName: "Galaxy Lotus International",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
