import type { Metadata } from "next";
import { portalHost, portalModules } from "@/lib/portal";
import { EnrollButton } from "@/components/ui/EnrollButton";

export const metadata: Metadata = {
  title: "Student portal",
  description: "The MARKEX student portal is prepared for app.markex-academy.com and opens after admission is confirmed.",
  alternates: { canonical: "/portal" },
};

export default function PortalPage() {
  return (
    <section className="mx-auto w-full max-w-7xl px-5 pt-32 pb-20 md:px-8">
      <p className="eyebrow">{portalHost}</p>
      <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-tight uppercase md:text-6xl">Student access is being opened.</h1>
      <p className="mt-5 max-w-2xl text-lg text-muted">
        Enrolled students will use these areas after admission is confirmed. This page describes the portal. It is not a live login.
      </p>
      <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {portalModules.map((module) => (
          <li key={module.name} className="border border-line p-5">
            <h2 className="text-lg font-semibold">{module.name}</h2>
            <p className="mt-2 text-sm text-muted">{module.detail}</p>
          </li>
        ))}
      </ul>
      <div className="mt-10">
        <EnrollButton>Start your MARKEX journey</EnrollButton>
      </div>
    </section>
  );
}
