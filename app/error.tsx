"use client";

export default function ErrorPage({ reset }: { error: Error; reset: () => void }) {
  return (
    <section className="mx-auto flex min-h-[70svh] w-full max-w-3xl flex-col justify-center px-5 pt-24">
      <h1 className="text-4xl font-semibold uppercase">Something went wrong.</h1>
      <p className="mt-4 text-muted">The page could not be shown. You can try again.</p>
      <button type="button" onClick={reset} className="mt-8 min-h-12 w-fit bg-accent px-5 text-xs font-semibold tracking-[0.16em] text-ink uppercase">
        Try again
      </button>
    </section>
  );
}
