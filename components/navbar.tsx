"use client";

import Image from "next/image";
import { Menu, MessageCircle, X } from "lucide-react";
import { useState } from "react";
import { ButtonLink } from "@/components/ui/button";
import { buildWhatsAppUrl } from "@/lib/contact";

const navItems = [
  ["Quem somos", "#quem-somos"],
  ["Vantagens", "#vantagens"],
  ["Tecnologias", "#tecnologias"],
  ["Portfólio", "#portfolio"],
  ["Contato", "#contato"]
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/50 bg-white/78 backdrop-blur-2xl">
      <nav className="section-shell flex h-20 items-center justify-between gap-6">
        <a className="focus-ring flex items-center gap-3 rounded-full" href="#top" aria-label="Ir para o início" onClick={() => setIsOpen(false)}>
          <Image
            src="/assets/logo/logo-horizontal.png"
            width={180}
            height={60}
            alt="Logo EXO7 Engenharia Integrada"
            priority
            sizes="180px"
            className="h-10 w-auto object-contain"
          />
        </a>
        <div className="hidden items-center gap-7 text-sm font-bold text-exo-slate-600 lg:flex">
          {navItems.map(([label, href]) => (
            <a key={href} className="focus-ring rounded-full transition hover:text-exo-blue-900" href={href}>
              {label}
            </a>
          ))}
        </div>
        <ButtonLink
          href={buildWhatsAppUrl("Olá, quero conhecer as soluções da EXO7.")}
          variant="whatsapp"
          target="_blank"
          rel="noreferrer"
          className="hidden gap-2 sm:inline-flex"
        >
          <MessageCircle size={18} />
          WhatsApp
        </ButtonLink>
        <button
          type="button"
          className="focus-ring grid size-11 place-items-center rounded-full bg-exo-blue-900 text-white shadow-[0_12px_34px_rgba(0,48,135,.22)] lg:hidden"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>
      <div
        className={`section-shell grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 lg:hidden ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0">
          <div className="mb-5 grid gap-2 rounded-[1.5rem] border border-neutral-200 bg-white p-3 shadow-[0_18px_50px_rgba(15,23,42,.10)]">
            {navItems.map(([label, href]) => (
              <a
                key={href}
                className="focus-ring rounded-2xl px-4 py-3 text-sm font-extrabold text-neutral-700 transition hover:bg-exo-sky-100 hover:text-exo-blue-900"
                href={href}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </a>
            ))}
            <a
              className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-exo-green-500 px-5 text-sm font-extrabold text-white"
              href={buildWhatsAppUrl("Olá, quero conhecer as soluções da EXO7.")}
              target="_blank"
              rel="noreferrer"
              onClick={() => setIsOpen(false)}
            >
              <MessageCircle size={18} />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
