import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[70svh] w-full max-w-3xl flex-col justify-center px-5 pt-24">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 text-4xl font-semibold uppercase">This page is not on the map.</h1>
      <p className="mt-4 text-muted">The address does not match a MARKEX page.</p>
      <Link href="/" className="mt-8 inline-flex min-h-12 items-center bg-accent px-5 text-xs font-semibold tracking-[0.16em] text-ink uppercase">
        Back to MARKEX
      </Link>
    </section>
  );
}
