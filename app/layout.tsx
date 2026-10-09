import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { CustomCursor } from "@/components/animations/CustomCursor";
import { EnrollmentProvider } from "@/components/contact/EnrollmentProvider";
import { Footer } from "@/components/footer/Footer";
import { Navbar } from "@/components/navigation/Navbar";
import { JsonLd } from "@/components/seo/JsonLd";
import { site } from "@/data/site";
import { defaultDescription, organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import "./globals.css";

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: "MARKEX Forex Trading Academy | Learn. Analyze. Trade. Grow.",
    template: "%s · MARKEX",
  },
  description: defaultDescription,
  applicationName: site.name,
  openGraph: {
    type: "website",
    url: site.domain,
    siteName: site.fullName,
    title: "MARKEX Forex Trading Academy | Learn. Analyze. Trade. Grow.",
    description: defaultDescription,
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "MARKEX Forex Trading Academy | Learn. Analyze. Trade. Grow.",
    description: defaultDescription,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} h-full antialiased`}>
      <body className="min-h-full bg-ink font-sans text-paper">
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        <EnrollmentProvider>
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
          <CustomCursor />
        </EnrollmentProvider>
      </body>
    </html>
  );
}
