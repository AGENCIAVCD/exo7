import Link from "next/link";
import type { AnchorHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost" | "whatsapp";
};

const variants = {
  primary: "premium-button premium-button-blue text-white",
  secondary:
    "premium-button premium-button-light text-exo-blue-950",
  ghost: "premium-button premium-button-ghost text-white",
  whatsapp: "premium-button premium-button-green text-white"
};

export function ButtonLink({
  className,
  children,
  variant = "primary",
  style,
  ...props
}: ButtonLinkProps) {
  const textColor = variant === "secondary" ? "#001b4d" : "#ffffff";

  return (
    <Link
      className={cn(
        "focus-ring inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-extrabold tracking-tight",
        variants[variant],
        className
      )}
      style={{ color: textColor, ...style }}
      {...props}
    >
      <span className="relative z-10 inline-flex items-center justify-center gap-2">
        {children}
      </span>
    </Link>
  );
}
