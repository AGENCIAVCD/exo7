"use client";

import { ArrowUp, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { buildWhatsAppUrl } from "@/lib/contact";

export function FloatingWhatsApp() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    function onScroll() {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = maxScroll > 0 ? window.scrollY / maxScroll : 0;
      setShowTop(progress >= 0.3);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
    <div className="fixed bottom-5 left-5 z-50">
      <a
        href={buildWhatsAppUrl("Olá, quero um orçamento com a EXO7.")}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar com a EXO7 pelo WhatsApp"
        className="focus-ring grid size-14 place-items-center rounded-full bg-exo-green-500 text-white shadow-[0_8px_32px_rgba(0,168,107,.35)] transition hover:-translate-y-1"
      >
        <MessageCircle size={26} />
      </a>
    </div>
    <button
      type="button"
      aria-label="Voltar ao topo"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={`focus-ring fixed bottom-5 right-5 z-50 grid size-12 place-items-center rounded-full bg-exo-blue-900 text-white shadow-[0_8px_32px_rgba(0,48,135,.28)] transition duration-300 hover:-translate-y-1 ${
        showTop ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <ArrowUp size={22} />
    </button>
    </>
  );
}
