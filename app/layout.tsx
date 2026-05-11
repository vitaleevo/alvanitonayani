import type { Metadata } from "next";
import { Geist_Mono, Inter, Playfair_Display, Poppins } from "next/font/google";
import { FloatingWhatsApp } from "@/components/site/floating-whatsapp";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { site } from "@/lib/site-data";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Consultoria Jurídica e Contratação Pública`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name }],
  keywords: [
    "consultoria jurídica",
    "contratação pública",
    "licitações",
    "assessoria legal",
    "compliance",
    "consultoria empresarial",
    "Luanda",
    "Angola",
  ],
  openGraph: {
    title: `${site.name} | Consultoria Jurídica e Contratação Pública`,
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "pt_AO",
    type: "website",
    images: [
      {
        url: "/images/hero-consultoria-juridica.jpg",
        width: 1200,
        height: 630,
        alt: "Consultores jurídicos em reunião empresarial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Consultoria Jurídica e Contratação Pública`,
    description: site.description,
    images: ["/images/hero-consultoria-juridica.jpg"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LegalService",
    name: site.legalName,
    url: site.url,
    description: site.description,
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address,
      addressLocality: "Luanda",
      addressCountry: "AO",
    },
    areaServed: "Angola",
    serviceType: [
      "Consultoria Jurídica",
      "Contratação Pública",
      "Assessoria Legal",
      "Compliance",
      "Gestão Contratual",
    ],
  };

  return (
    <html
      lang="pt-AO"
      className={`${inter.variable} ${playfair.variable} ${poppins.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
        <FloatingWhatsApp />
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </body>
    </html>
  );
}
