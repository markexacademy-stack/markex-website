"use client";

import { ArrowRight } from "lucide-react";
import type { EnrollIntent } from "@/components/contact/EnrollmentProvider";
import type { ContactMethod } from "@/types";
import { cn, whatsappHref } from "@/lib/utils";

type EnrollButtonProps = {
  children: React.ReactNode;
  intent?: EnrollIntent;
  method?: ContactMethod;
  variant?: "primary" | "secondary";
  className?: string;
};

const messages: Record<EnrollIntent, string> = {
  enroll: "Hello MARKEX, I want to start learning.",
  mentor: "Hello MARKEX, I would like to talk to a mentor.",
  whatsapp: "Hello MARKEX, I want to start learning.",
  contact: "Hello MARKEX, I would like to ask about the academy.",
};

export function EnrollButton({
  children,
  intent = "enroll",
  variant = "primary",
  className,
}: EnrollButtonProps) {
  const href = whatsappHref(messages[intent]);

  return (
    <a
      href={href ?? "/contact"}
      target={href ? "_blank" : undefined}
      rel={href ? "noopener noreferrer" : undefined}
      className={cn(
        "group inline-flex min-h-12 items-center justify-center gap-3 px-6 text-center text-[11px] font-semibold tracking-[0.2em] uppercase transition duration-300",
        variant === "primary"
          ? "bg-accent text-ink shadow-[0_10px_30px_rgba(27,201,138,0.16)] hover:bg-white"
          : "border border-white/15 bg-white/[0.03] text-paper backdrop-blur-sm hover:border-accent hover:text-accent",
        className,
      )}
    >
      {children}
      <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
    </a>
  );
}
