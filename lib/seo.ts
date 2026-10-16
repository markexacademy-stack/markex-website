import { faqs } from "@/data/faq";
import { site } from "@/data/site";

export const defaultDescription =
  "MARKEX Trading Academy provides structured educational programs on forex fundamentals, technical analysis, trading strategies, psychology and risk management.";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.fullName,
    url: site.domain,
    logo: `${site.domain}/brand/markex-logo.jpg`,
    slogan: site.tagline,
    description: site.positioning,
    email: site.email,
    telephone: site.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Mittathanickal House, Prakash P.O., Udayagiri",
      addressLocality: "Idukki",
      addressRegion: "Kerala",
      postalCode: "685609",
      addressCountry: "IN",
    },
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
    name: "MARKEX Trading Academy Educational Program",
    description:
      "A two-week intensive educational program. Total advertised fee ₹15,000. Initial ₹5,000 covers the intensive enrollment. ₹10,000 is a separate advanced membership payment.",
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
