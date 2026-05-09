import { MessageCircle } from "lucide-react";

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/5500000000000?text=Ol%C3%A1%2C%20quero%20um%20or%C3%A7amento%20com%20a%20EXO7."
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com a EXO7 pelo WhatsApp"
      className="focus-ring fixed bottom-5 right-5 z-50 grid size-14 place-items-center rounded-full bg-exo-green-500 text-white shadow-[0_18px_60px_rgba(0,168,107,.35)] transition hover:-translate-y-1 hover:brightness-95"
    >
      <MessageCircle size={26} />
    </a>
  );
}
