import type { Metadata } from "next";
import { EnrollmentForm } from "@/components/contact/EnrollmentForm";
import { Logo } from "@/components/ui/Logo";
import { pricing } from "@/data/site";
import { formatInr } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Enroll",
  description: "Start a MARKEX enrollment enquiry. The initial step is ₹5,000. The total program fee is ₹15,000.",
  alternates: { canonical: "/enroll" },
};

export default function EnrollPage() {
  return (
    <section className="mx-auto grid w-full max-w-6xl gap-12 px-5 pt-32 pb-20 md:px-8 lg:grid-cols-[0.8fr_1.2fr]">
      <div>
        <Logo priority className="logo-float" />
        <h1 className="mt-8 text-4xl font-semibold tracking-tight uppercase">MARKEX enrollment form</h1>
        <p className="mt-4 text-muted">
          Initial enrollment {formatInr(pricing.initial)}. Advanced membership {formatInr(pricing.membership)}. Total {formatInr(pricing.total)}.
        </p>
      </div>
      <EnrollmentForm intent="enroll" />
    </section>
  );
}
