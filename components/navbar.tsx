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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-neutral-200 bg-white">
      <nav className="section-shell flex h-20 items-center justify-between gap-5">
        <a className="focus-ring rounded-full" href="#top" aria-label="Ir para o início" onClick={() => setIsOpen(false)}>
          <Image
            src="/assets/logo/logo-horizontal.png"
            width={180}
            height={60}
            alt="Logo EXO7 Engenharia Integrada"
            priority
            sizes="180px"
            className="h-9 w-auto object-contain"
          />
        </a>

        <div className="hidden items-center gap-6 text-sm font-bold text-exo-muted lg:flex">
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
          <MessageCircle size={17} />
          WhatsApp
        </ButtonLink>

        <button
          type="button"
          className="focus-ring grid size-11 place-items-center rounded-full bg-exo-blue-900 text-white lg:hidden"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isOpen ? (
        <div className="section-shell pb-4 lg:hidden">
          <div className="grid gap-1 rounded-3xl border border-neutral-200 bg-white p-3 shadow-xl">
            {navItems.map(([label, href]) => (
              <a
                key={href}
                className="focus-ring rounded-2xl px-4 py-3 text-sm font-bold text-exo-muted hover:bg-exo-sky-100 hover:text-exo-blue-900"
                href={href}
                onClick={() => setIsOpen(false)}
              >
                {label}
              </a>
            ))}
            <a
              className="focus-ring mt-1 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-exo-green-500 px-5 text-sm font-extrabold text-white"
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
      ) : null}
    </header>
  );
}
