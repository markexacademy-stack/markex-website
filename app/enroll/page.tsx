import type { Metadata } from "next";
import Link from "next/link";
import { EnrollmentForm } from "@/components/contact/EnrollmentForm";
import { Logo } from "@/components/ui/Logo";
import { pricing } from "@/data/site";
import { formatInr } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Enroll",
  description:
    "Start a MARKEX enrollment enquiry. Total advertised fee ₹15,000. Initial ₹5,000 covers the two-week program. ₹10,000 is a separate advanced membership payment.",
  alternates: { canonical: "/enroll" },
};

export default function EnrollPage() {
  return (
    <section className="mx-auto grid w-full max-w-6xl gap-12 px-5 pt-32 pb-20 md:px-8 lg:grid-cols-[0.8fr_1.2fr]">
      <div>
        <Logo priority className="logo-float" />
        <h1 className="mt-8 text-4xl font-semibold tracking-tight uppercase">MARKEX enrollment form</h1>
        <p className="mt-4 text-muted">
          Initial enrollment {formatInr(pricing.initial)} for the two-week intensive program. Advanced membership{" "}
          {formatInr(pricing.membership)} is a separate step. Total advertised fee {formatInr(pricing.total)}.
        </p>
        <p className="mt-4 text-sm leading-relaxed text-muted">
          Before you enroll, read the{" "}
          <Link href="/refund-policy" className="text-paper underline decoration-line underline-offset-4">
            Refund Policy
          </Link>
          ,{" "}
          <Link href="/cancellation-policy" className="text-paper underline decoration-line underline-offset-4">
            Cancellation Policy
          </Link>{" "}
          and{" "}
          <Link href="/terms" className="text-paper underline decoration-line underline-offset-4">
            Terms and Conditions
          </Link>
          .
        </p>
      </div>
      <EnrollmentForm intent="enroll" />
    </section>
  );
}
