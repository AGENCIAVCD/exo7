import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  text?: string;
  light?: boolean;
  className?: string;
};

export function SectionHeader({ eyebrow, title, text, light, className }: SectionHeaderProps) {
  return (
    <div className={cn("max-w-3xl", className)}>
      <p className={cn("mb-4 text-xs font-black uppercase tracking-[0.24em]", light ? "text-sky-200" : "text-exo-blue-700")}>
        {eyebrow}
      </p>
      <h2 className={cn("text-balance font-display text-4xl font-semibold tracking-[-0.06em] md:text-6xl", light ? "text-white" : "text-neutral-950")}>
        {title}
      </h2>
      {text ? (
        <p className={cn("mt-6 text-lg leading-8", light ? "text-blue-100" : "text-exo-slate-600")}>{text}</p>
      ) : null}
    </div>
  );
}
