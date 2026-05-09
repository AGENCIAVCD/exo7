import Image from "next/image";
import { MessageCircle } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";

const navItems = [
  ["Quem somos", "#quem-somos"],
  ["Vantagens", "#vantagens"],
  ["Tecnologias", "#tecnologias"],
  ["Portfólio", "#portfolio"],
  ["Contato", "#contato"]
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/50 bg-white/78 backdrop-blur-2xl">
      <nav className="section-shell flex h-20 items-center justify-between gap-6">
        <a className="focus-ring flex items-center gap-3 rounded-full" href="#top" aria-label="Ir para o início">
          <Image
            src="/assets/logo/logo-horizontal.png"
            width={180}
            height={60}
            alt="Logo EXO7 Engenharia Integrada"
            priority
            className="h-10 w-auto object-contain"
          />
        </a>
        <div className="hidden items-center gap-7 text-sm font-bold text-slate-600 lg:flex">
          {navItems.map(([label, href]) => (
            <a key={href} className="focus-ring rounded-full transition hover:text-exo-blue-900" href={href}>
              {label}
            </a>
          ))}
        </div>
        <ButtonLink
          href="https://wa.me/5500000000000?text=Ol%C3%A1%2C%20quero%20conhecer%20as%20solu%C3%A7%C3%B5es%20da%20EXO7."
          variant="whatsapp"
          target="_blank"
          rel="noreferrer"
          className="hidden gap-2 sm:inline-flex"
        >
          <MessageCircle size={18} />
          WhatsApp
        </ButtonLink>
      </nav>
    </header>
  );
}
