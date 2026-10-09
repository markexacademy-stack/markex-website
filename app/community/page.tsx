import type { Metadata } from "next";
import { Community } from "@/components/community/Community";
import { FinalCta } from "@/components/layout/FinalCta";
import { PageHero } from "@/components/layout/PageHero";

export const metadata: Metadata = {
  title: "Community",
  description:
    "MARKEX community support for students: discussion, market education, learning support and continued education.",
  alternates: { canonical: "/community" },
};

export default function CommunityPage() {
  return (
    <>
      <PageHero
        eyebrow="Community"
        title="You don't have to trade alone."
        text="MARKEX describes lifetime community support alongside a student community of 150+ people. The interface on this page is an illustration, not a screenshot of private conversations."
      />
      <Community />
      <FinalCta />
    </>
  );
}
