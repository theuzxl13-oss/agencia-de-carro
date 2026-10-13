"use client";

import { useEffect, useRef } from "react";
import { asset } from "@/lib/paths";

/**
 * Vídeo de fundo do banner principal: mudo, em loop e sempre rodando.
 * Para trocar o vídeo, substitua o arquivo public/hero.mp4.
 */
export function HeroVideo({ src = "/hero.mp4" }: { src?: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  // Garante o início automático: o React não grava o atributo "muted" no HTML inicial e os
  // navegadores só permitem autoplay de vídeo mudo. Força o mudo e tenta de novo quando necessário.
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    v.defaultMuted = true;
    v.setAttribute("muted", "");
    const tryPlay = () => {
      if (v.paused) v.play().catch(() => {});
    };
    tryPlay();
    v.addEventListener("canplay", tryPlay);
    document.addEventListener("visibilitychange", tryPlay);
    window.addEventListener("pointerdown", tryPlay, { once: true });
    window.addEventListener("scroll", tryPlay, { once: true, passive: true });
    return () => {
      v.removeEventListener("canplay", tryPlay);
      document.removeEventListener("visibilitychange", tryPlay);
      window.removeEventListener("pointerdown", tryPlay);
      window.removeEventListener("scroll", tryPlay);
    };
  }, []);

  return (
    <>
      <video
        ref={ref}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
        src={asset(src)}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      />
      {/* Escurece o vídeo para o texto continuar legível */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink-950 to-transparent" />
    </>
  );
}
