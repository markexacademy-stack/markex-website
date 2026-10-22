export function cn(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function formatInr(value: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);
}

export function cleanText(value: string, max: number) {
  return value
    .replace(/<[^>]*>/g, "")
    .replace(/[\u0000-\u001F\u007F]/g, "")
    .trim()
    .slice(0, max);
}

export function digitsOnly(value: string) {
  return value.replace(/\D/g, "");
}

export function whatsappHref(message: string) {
  let digits = digitsOnly(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "918590861862");
  if (digits.length === 10) digits = `91${digits}`;
  if (!digits) return null;
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export const EASE = [0.16, 1, 0.3, 1] as const;
