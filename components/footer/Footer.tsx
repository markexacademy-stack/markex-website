import Link from "next/link";
import { navLinks, site, socialLinks } from "@/data/site";
import { Logo } from "@/components/ui/Logo";
import { whatsappHref } from "@/lib/utils";

const programLinks = [
  { href: "/program", label: "2-week intensive program" },
  { href: "/method", label: "Learn" },
  { href: "/method", label: "Analyze" },
  { href: "/method", label: "Trade" },
  { href: "/method", label: "Grow" },
  { href: "/pricing", label: "Pricing" },
  { href: "/results", label: "Results" },
  { href: "/community", label: "Community" },
];

const legal = [
  { href: "/privacy-policy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/refund-policy", label: "Refund" },
  { href: "/risk-disclosure", label: "Risk" },
  { href: "/disclaimer", label: "Disclaimer" },
];

export function Footer() {
  const social = socialLinks();
  const whatsapp = whatsappHref("Hello MARKEX, I want to start learning.");

  return (
    <>
      <footer className="relative overflow-hidden border-t border-white/10 bg-[#070707]">
        <div className="market-grid pointer-events-none absolute inset-0 opacity-30" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(27,201,138,0.09),transparent_58%)]" />
        <div className="relative mx-auto w-full max-w-7xl px-5 pt-16 pb-12 md:px-8 md:pt-24 md:pb-16">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_auto_1fr]">
            <div className="max-w-xs">
              <Logo />
              <p className="mt-5 text-[11px] tracking-[0.32em] text-muted uppercase">Markex</p>
              <p className="mt-2 text-2xl tracking-tight text-accent">{site.tagline}</p>
            </div>
            <div className="grid h-36 w-36 place-items-center justify-self-center rounded-full border border-white/15">
              <div className="grid h-28 w-28 place-items-center rounded-full border border-accent/40 bg-[#050505]">
                <Logo variant="mark" />
              </div>
            </div>
            <div className="text-center lg:justify-self-end lg:text-right">
              {site.philosophy.map((word) => (
                <p key={word} className="text-4xl leading-[0.95] font-semibold tracking-[-0.045em] text-paper md:text-6xl">
                  {word}.
                </p>
              ))}
            </div>
          </div>

          <div className="mt-16 grid gap-12 md:grid-cols-3 md:gap-8">
            <div>
              <p className="text-[11px] tracking-[0.28em] text-accent uppercase">Site navigation</p>
              <ul className="mt-6 grid gap-3">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.page === "/" ? "/" : link.page} className="group inline-flex items-center gap-2 text-sm text-paper/90 transition hover:text-accent">
                      <span className="text-accent transition group-hover:translate-x-0.5" aria-hidden>
                        ›
                      </span>
                      {link.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link href="/blog" className="group inline-flex items-center gap-2 text-sm text-paper/90 transition hover:text-accent">
                    <span className="text-accent" aria-hidden>
                      ›
                    </span>
                    Market insights
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-[11px] tracking-[0.28em] text-accent uppercase">The academy</p>
              <ul className="mt-6 grid gap-3">
                {programLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="group inline-flex items-center gap-2 text-sm text-paper/90 transition hover:text-accent">
                      <span className="text-accent transition group-hover:translate-x-0.5" aria-hidden>
                        ›
                      </span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[11px] tracking-[0.28em] text-accent uppercase">Contact</p>
              <div className="mt-6 grid gap-3 text-sm leading-relaxed text-paper/90">
                <a
                  href={whatsapp ?? "/contact"}
                  className="transition hover:text-accent"
                  target={whatsapp ? "_blank" : undefined}
                  rel={whatsapp ? "noopener noreferrer" : undefined}
                >
                  WhatsApp {site.whatsappLabel}
                </a>
                {site.phone ? <a href={`tel:${site.phone}`}>{site.phone}</a> : null}
                {site.email ? <a href={`mailto:${site.email}`}>{site.email}</a> : null}
                {social.map((item) => (
                  <a key={item.href} href={item.href} className="transition hover:text-accent" rel="noreferrer">
                    {item.label}
                  </a>
                ))}
              </div>
              <a
                href={whatsapp ?? "/contact"}
                className="mt-8 inline-flex items-center gap-3 rounded-full border border-white/15 bg-black/50 py-1.5 pr-5 pl-1.5 text-[11px] tracking-[0.18em] text-paper uppercase backdrop-blur-sm transition hover:border-accent"
                target={whatsapp ? "_blank" : undefined}
                rel={whatsapp ? "noopener noreferrer" : undefined}
              >
                <span className="grid h-9 w-9 place-items-center rounded-full bg-accent text-ink" aria-hidden>
                  <ChatIcon />
                </span>
                Talk with MARKEX
              </a>
            </div>
          </div>

          <p className="mx-auto mt-16 max-w-2xl text-center text-[11px] leading-6 text-muted">
            Trading financial markets involves substantial risk and may not be suitable for everyone. Past performance does not guarantee future results.
          </p>
          <p className="mt-6 text-center text-[11px] tracking-[0.22em] text-muted uppercase">
            © 2026 MARKEX Forex Trading Academy. All rights reserved.
          </p>
          <nav className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2" aria-label="Legal">
            {legal.map((item) => (
              <Link key={item.href} href={item.href} className="text-[11px] tracking-[0.16em] text-muted uppercase transition hover:text-accent">
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="mt-8 flex justify-center">
            <a
              href="https://bitvion.in/"
              className="inline-flex items-center gap-3 rounded-full bg-[#f4f0e8] px-5 py-2.5 text-[11px] font-medium tracking-[0.2em] text-[#1c1c1c] uppercase transition hover:bg-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              Developed by Bitvion Technologies
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </footer>
      <a
        href={whatsapp ?? "/contact"}
        className="fixed right-5 bottom-[max(1.25rem,env(safe-area-inset-bottom))] z-40 grid h-14 w-14 place-items-center rounded-full bg-accent text-ink shadow-[0_10px_30px_rgba(27,201,138,0.35)] transition hover:bg-white"
        target={whatsapp ? "_blank" : undefined}
        rel={whatsapp ? "noopener noreferrer" : undefined}
        aria-label="Talk with MARKEX on WhatsApp"
      >
        <ChatIcon />
      </a>
    </>
  );
}

function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
      <path
        d="M6.5 17.5 4 20.5V6.8A2.8 2.8 0 0 1 6.8 4h10.4A2.8 2.8 0 0 1 20 6.8v7.4a2.8 2.8 0 0 1-2.8 2.8H6.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  );
}
