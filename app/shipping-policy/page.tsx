import type { Metadata } from "next";
import { LegalPage } from "@/components/legal/LegalPage";
import { shippingPolicy } from "@/data/legal";

export const metadata: Metadata = {
  title: "Shipping / Service Delivery Policy",
  description: shippingPolicy.description,
  alternates: { canonical: "/shipping-policy" },
};

export default function ShippingPolicyPage() {
  return <LegalPage doc={shippingPolicy} />;
}
