"use client";

import { useEffect, useState } from "react";

export function HeroVideo() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;

    function update() {
      const viewport = window.innerHeight || 1;
      const next = Math.min(Math.max(window.scrollY / viewport, 0), 1);
      setProgress(next);
      raf = 0;
    }

    function onScroll() {
      if (!raf) {
        raf = requestAnimationFrame(update);
      }
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const scale = 1 + progress * 0.08;
  const translateY = progress * 28;
  const radius = 1.75 - progress * 0.55;

  return (
    <div className="relative overflow-hidden rounded-[1.75rem] bg-[#edf4fb] shadow-[0_24px_70px_rgba(0,48,135,.12)]">
      <video
        className="aspect-[16/10] h-full w-full object-cover"
        src="/assets/exo7-hero.mp4"
        poster="/assets/hero.png"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        style={{
          transform: `translate3d(0, ${translateY}px, 0) scale(${scale})`,
          borderRadius: `${radius}rem`
        }}
      />
      <div className="pointer-events-none absolute inset-0 rounded-[inherit] ring-1 ring-inset ring-exo-blue-900/10" />
    </div>
  );
}
