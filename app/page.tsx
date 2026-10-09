import { LiveTicker } from "@/components/animations/LiveTicker";
import { Hero } from "@/components/hero/Hero";
import { TrustStrip } from "@/components/trust/TrustStrip";
import { Problem } from "@/components/problem/Problem";
import { Method } from "@/components/method/Method";
import { ProgramTimeline } from "@/components/program/ProgramTimeline";
import { Strategy } from "@/components/strategy/Strategy";
import { Risk } from "@/components/risk/Risk";
import { Psychology } from "@/components/psychology/Psychology";
import { PracticalMarket } from "@/components/market/PracticalMarket";
import { Experience } from "@/components/experience/Experience";
import { ResultsGallery } from "@/components/results/ResultsGallery";
import { Community } from "@/components/community/Community";
import { Membership } from "@/components/membership/Membership";
import { FundedPrep } from "@/components/funded/FundedPrep";
import { Journey } from "@/components/journey/Journey";
import { Pricing } from "@/components/pricing/Pricing";
import { Faq } from "@/components/faq/Faq";
import { RiskDisclosure } from "@/components/layout/RiskDisclosure";
import { FinalCta } from "@/components/layout/FinalCta";
import { JsonLd } from "@/components/seo/JsonLd";
import { courseJsonLd, faqJsonLd } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <JsonLd data={[courseJsonLd(), faqJsonLd()]} />
      <Hero />
      <LiveTicker />
      <TrustStrip />
      <Problem />
      <Method />
      <ProgramTimeline />
      <Strategy />
      <Risk />
      <Psychology />
      <PracticalMarket />
      <Experience />
      <ResultsGallery />
      <Community />
      <Membership />
      <FundedPrep />
      <Journey />
      <Pricing />
      <Faq />
      <RiskDisclosure />
      <FinalCta />
    </>
  );
}
