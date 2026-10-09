"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import type { ContactMethod } from "@/types";
import { EnrollmentForm } from "@/components/contact/EnrollmentForm";

export type EnrollIntent = "enroll" | "mentor" | "whatsapp" | "contact";

type OpenOptions = {
  intent?: EnrollIntent;
  method?: ContactMethod;
};

type EnrollmentContextValue = {
  open: (options?: OpenOptions) => void;
  close: () => void;
};

const EnrollmentContext = createContext<EnrollmentContextValue | null>(null);

export function useEnrollment() {
  const value = useContext(EnrollmentContext);
  if (!value) throw new Error("useEnrollment must be used within EnrollmentProvider");
  return value;
}

export function EnrollmentProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [intent, setIntent] = useState<EnrollIntent>("enroll");
  const [method, setMethod] = useState<ContactMethod | undefined>(undefined);

  const close = useCallback(() => setIsOpen(false), []);
  const open = useCallback((options?: OpenOptions) => {
    setIntent(options?.intent ?? "enroll");
    setMethod(options?.method);
    setIsOpen(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      window.removeEventListener("keydown", onKey);
    };
  }, [close, isOpen]);

  const value = useMemo(() => ({ open, close }), [open, close]);

  return (
    <EnrollmentContext.Provider value={value}>
      {children}
      {isOpen ? (
        <div className="fixed inset-0 z-[60] flex items-end justify-center sm:items-center">
          <button
            type="button"
            className="absolute inset-0 bg-black/75"
            aria-label="Close enrollment form"
            onClick={close}
          />
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="enroll-title"
            className="panel relative max-h-[92svh] w-full overflow-y-auto p-5 sm:max-w-2xl sm:p-8"
          >
            <div className="mb-6 flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow">MARKEX enrollment</p>
                <h2 id="enroll-title" className="mt-3 text-3xl font-semibold tracking-tight uppercase">
                  Start your journey
                </h2>
              </div>
              <button type="button" onClick={close} className="min-h-11 px-3 text-sm text-muted">
                Close
              </button>
            </div>
            <EnrollmentForm intent={intent} defaultMethod={method} />
          </div>
        </div>
      ) : null}
    </EnrollmentContext.Provider>
  );
}
