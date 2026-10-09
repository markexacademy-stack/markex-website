import type { Metadata } from "next";
import { EnrollmentForm } from "@/components/contact/EnrollmentForm";
import { PageHero } from "@/components/layout/PageHero";
import { site } from "@/data/site";
import { whatsappHref } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact",
  description: "Send an enquiry to MARKEX Forex Trading Academy. A representative will contact you.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  const whatsapp = whatsappHref("Hello MARKEX, I would like to ask about the academy.");
  const hasDirect = Boolean(whatsapp || site.phone || site.email);

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Talk with MARKEX."
        text="Send an enquiry and a MARKEX representative will contact you shortly."
      />
      <section className="mx-auto grid w-full max-w-7xl gap-12 px-5 py-16 md:px-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 className="text-xl uppercase">Direct contact</h2>
          {hasDirect ? (
            <div className="mt-6 flex flex-col gap-3">
              {whatsapp ? (
                <a href={whatsapp} className="inline-flex min-h-12 items-center border border-line px-4 text-xs tracking-[0.16em] uppercase" target="_blank" rel="noreferrer">
                  WhatsApp {site.whatsappLabel}
                </a>
              ) : null}
              {site.phone ? (
                <a href={`tel:${site.phone}`} className="inline-flex min-h-12 items-center border border-line px-4 text-xs tracking-[0.16em] uppercase">
                  Call
                </a>
              ) : null}
              {site.email ? (
                <a href={`mailto:${site.email}`} className="inline-flex min-h-12 items-center border border-line px-4 text-xs tracking-[0.16em] uppercase">
                  Email
                </a>
              ) : null}
            </div>
          ) : (
            <p className="mt-4 text-sm leading-relaxed text-muted">
              Phone, WhatsApp and email will appear here when MARKEX publishes them. Use the form and a representative will contact you.
            </p>
          )}
        </div>
        <EnrollmentForm intent="contact" />
      </section>
    </>
  );
}
