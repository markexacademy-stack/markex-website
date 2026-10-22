import type { Metadata } from "next";
import Link from "next/link";
import { EnrollmentForm } from "@/components/contact/EnrollmentForm";
import { PageHero } from "@/components/layout/PageHero";
import { site } from "@/data/site";
import { whatsappHref } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact MARKEX Trading Academy, owned by MARKEX Academy, about enrollment, course access, payments, refunds and customer grievances.",
  alternates: { canonical: "/contact" },
};

const topics = [
  "Course enrollment",
  "Course information",
  "Course access",
  "Payment questions",
  "Refund requests",
  "Cancellation requests",
  "Educational services",
  "Complaints and grievances",
];

export default function ContactPage() {
  const whatsapp = whatsappHref("Hello MARKEX, I would like to ask about the academy.");

  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Talk with MARKEX Trading Academy."
        text="MARKEX Trading Academy provides structured educational programs on financial markets and trading concepts."
      />
      <section className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-16 md:px-8 lg:grid-cols-[0.85fr_1.15fr]">
        <div className="space-y-10">
          <div>
            <h2 className="text-xl uppercase">Business</h2>
            <p className="mt-4 text-lg text-paper">{site.fullName}</p>
            <p className="mt-3 text-sm leading-relaxed text-muted">{site.operatorStatement}</p>
            <p className="mt-3 text-sm text-paper">Owner / Proprietor: {site.legalOperator}</p>
          </div>
          <div>
            <h2 className="text-xl uppercase">Business address</h2>
            <address className="mt-4 text-sm leading-relaxed text-muted not-italic">
              {site.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </div>
          <div>
            <h2 className="text-xl uppercase">Direct contact</h2>
            <div className="mt-4 flex flex-col gap-3">
              <a href={`mailto:${site.email}`} className="inline-flex min-h-12 items-center border border-line px-4 text-sm">
                {site.email}
              </a>
              <a href={`tel:${site.phone}`} className="inline-flex min-h-12 items-center border border-line px-4 text-sm">
                {site.phoneLabel}
              </a>
              {whatsapp ? (
                <a href={whatsapp} className="inline-flex min-h-12 items-center border border-line px-4 text-sm" target="_blank" rel="noreferrer">
                  WhatsApp {site.whatsappLabel}
                </a>
              ) : null}
            </div>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Support and grievance messages are acknowledged {site.supportResponseTarget}.
            </p>
          </div>
          <div>
            <h2 className="text-xl uppercase">Customer grievances</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Use the form on this page, or email and phone above, to report a payment problem, course-access issue, cancellation request or refund request.
            </p>
            <ul className="mt-4 grid gap-2 text-sm text-muted">
              <li>Your full name as used at enrollment</li>
              <li>Registered email address and phone number</li>
              <li>Payment reference or transaction details</li>
              <li>A clear description of the issue and the outcome you are requesting</li>
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-muted">
              What you can contact us about:
            </p>
            <ul className="mt-2 grid gap-2 text-sm text-muted">
              {topics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-relaxed text-muted">
              Policies are public. Read the{" "}
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
        </div>
        <EnrollmentForm intent="contact" />
      </section>
    </>
  );
}
