import type { Metadata } from "next";
import { BlogIndex } from "@/components/blog/BlogIndex";

export const metadata: Metadata = {
  title: "Market Insights",
  description:
    "MARKEX education notes on forex basics, market structure, risk management and trading psychology. Not market predictions.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return <BlogIndex />;
}
