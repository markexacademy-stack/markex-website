import type { Metadata } from "next";
import { FinalCta } from "@/components/layout/FinalCta";
import { PageHero } from "@/components/layout/PageHero";
import { Method } from "@/components/method/Method";
import { Strategy } from "@/components/strategy/Strategy";

export const metadata: Metadata = {
  title: "The MARKEX Method",
  description:
    "Learn, analyze, trade and grow. The MARKEX method is a structured approach to forex education, not a promise of profit.",
  alternates: { canonical: "/method" },
};

export default function MethodPage() {
  return (
    <>
      <PageHero
        eyebrow="Method"
        title="Learn. Analyze. Trade. Grow."
        text="A structured approach to building better trading habits. The method describes how MARKEX teaches. It does not claim a secret indicator or a guaranteed result."
      />
      <Method />
      <Strategy />
      <FinalCta />
    </>
  );
}
