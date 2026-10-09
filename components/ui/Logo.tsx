import Image from "next/image";
import { cn } from "@/lib/utils";

type LogoProps = {
  variant?: "full" | "mark";
  className?: string;
  priority?: boolean;
};

export function Logo({ variant = "full", className, priority = false }: LogoProps) {
  const mark = variant === "mark";

  return (
    <span className={cn("logo-slot", mark ? "logo-slot-mark" : "logo-slot-full", className)}>
      <Image
        src={mark ? "/brand/markex-mark.png" : "/brand/markex-logo.png"}
        alt={mark ? "MARKEX" : "MARKEX Forex Trading Academy. Trade with Knowledge."}
        width={mark ? 512 : 633}
        height={mark ? 512 : 559}
        priority={priority}
        className="logo-img"
      />
    </span>
  );
}
