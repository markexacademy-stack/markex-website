import { faqs } from "@/data/faq";
import { site } from "@/data/site";

export const defaultDescription =
  "MARKEX Forex Trading Academy helps beginners and developing traders build practical knowledge in forex market analysis, risk management, trading psychology and disciplined trading.";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.fullName,
    url: site.domain,
    logo: `${site.domain}/brand/markex-logo.jpg`,
    slogan: site.tagline,
    description: site.positioning,
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.fullName,
    url: site.domain,
  };
}

export function courseJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Course",
    name: "MARKEX Forex Trading Program",
    description:
      "A two-week intensive forex education program followed by an optional advanced membership covering analysis, risk management, trading psychology and funded-account preparation.",
    provider: {
      "@type": "Organization",
      name: site.fullName,
      url: site.domain,
    },
    offers: {
      "@type": "Offer",
      price: "15000",
      priceCurrency: "INR",
      url: `${site.domain}/pricing`,
      category: "Paid",
    },
    timeRequired: "P14D",
    educationalLevel: "Beginner",
    inLanguage: "en",
  };
}

export function faqJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
