import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "whatsapp";
};

const variants = {
  primary:
    "bg-exo-blue-900 text-white shadow-[0_24px_80px_rgba(0,48,135,.22)] hover:bg-exo-blue-700",
  secondary:
    "bg-white text-exo-blue-950 shadow-[0_18px_60px_rgba(15,23,42,.10)] hover:bg-exo-sky-100",
  ghost:
    "bg-white/10 text-white ring-1 ring-white/25 backdrop-blur hover:bg-white/18",
  whatsapp:
    "bg-exo-green-500 text-white shadow-[0_20px_70px_rgba(0,168,107,.22)] hover:brightness-95"
};

export function ButtonLink({
  className,
  children,
  variant = "primary",
  ...props
}: ButtonLinkProps) {
  return (
    <Link
      className={cn(
        "focus-ring inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-extrabold tracking-tight transition duration-300 hover:-translate-y-0.5",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </Link>
  );
}
