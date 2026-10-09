"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks, sectionIds } from "@/data/site";
import { useActiveSection } from "@/hooks/useActiveSection";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/Logo";
import { EnrollButton } from "@/components/ui/EnrollButton";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const active = useActiveSection(sectionIds);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const onHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition duration-300",
        scrolled || open ? "border-b border-white/10 bg-ink/75 shadow-[0_16px_40px_rgba(0,0,0,0.45)] backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 md:px-8">
        <Link href="/#hero" aria-label="MARKEX home" className="flex h-14 w-14 items-center justify-center">
          <Logo variant="mark" priority className="logo-float" />
        </Link>
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
          {navLinks.map((link) => {
            const href = onHome ? link.href : link.page;
            const current = onHome ? active === link.section : pathname === link.page;
            return (
              <Link
                key={link.label}
                href={href}
                aria-current={current ? "true" : undefined}
                className={cn(
                  "relative text-[11px] tracking-[0.18em] uppercase",
                  current ? "text-paper" : "text-muted hover:text-paper",
                )}
              >
                {link.label}
                {current ? <span className="absolute -bottom-2 left-0 h-px w-full bg-accent" /> : null}
              </Link>
            );
          })}
        </nav>
        <div className="hidden lg:block">
          <EnrollButton className="min-h-10 px-4">Start learning</EnrollButton>
        </div>
        <button
          type="button"
          className="grid h-11 w-11 place-items-center border border-line lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((value) => !value)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          {open ? <X aria-hidden /> : <Menu aria-hidden />}
        </button>
      </div>
      {open ? (
        <div id="mobile-nav" className="fixed inset-0 top-20 z-40 flex flex-col bg-ink px-6 py-8 lg:hidden">
          <nav className="grid gap-2" aria-label="Mobile">
            {navLinks.map((link) => (
              <Link key={link.label} href={onHome ? link.href : link.page} className="border-b border-line py-4 text-2xl tracking-tight uppercase">
                {link.label}
              </Link>
            ))}
            <Link href="/contact" className="border-b border-line py-4 text-2xl tracking-tight uppercase">
              Contact
            </Link>
          </nav>
          <div className="mt-8">
            <EnrollButton className="w-full">Start learning</EnrollButton>
          </div>
        </div>
      ) : null}
    </header>
  );
}
