"use client";

import { useEffect, useState } from "react";
import styles from "./hero.module.css";

const SLIDES = [
  {
    src: "/images/forvia-uap04.jpg",
    alt: "Totem UAP 04 com dashboard instalado na FORVIA — gestão visual industrial",
    eager: true,
  },
  {
    src: "/images/hyundai-painting.jpg",
    alt: "Painel Painting Shop instalado na Hyundai — sala de gestão",
    eager: false,
  },
  {
    src: "/images/hyundai-focus.jpg",
    alt: "Painel Quality FOCUS — Hyundai, comunicação visual industrial",
    eager: false,
  },
] as const;

const ROTATION_INTERVAL = 8500;

/**
 * HeroSlider — controla a rotação automática das 3 instalações + pips.
 * Renderiza dois grupos em posições diferentes do hero (slides full-bleed e
 * pips bottom-right), unificados pela mesma source-of-truth de estado.
 *
 * Respeita prefers-reduced-motion: pausa rotação automática.
 */
export function HeroSlider() {
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const interval = window.setInterval(() => {
      setActiveIdx((current) => (current + 1) % SLIDES.length);
    }, ROTATION_INTERVAL);

    return () => window.clearInterval(interval);
  }, []);

  return (
    <>
      <div
        className={styles.heroBg}
        aria-label="Galeria de instalações reais"
      >
        {SLIDES.map((slide, i) => (
          <div
            key={slide.src}
            className={`${styles.heroSlide} ${i === activeIdx ? styles.active : ""}`}
            aria-hidden={i !== activeIdx}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={slide.src}
              alt={slide.alt}
              loading={slide.eager ? "eager" : "lazy"}
              fetchPriority={slide.eager ? "high" : "auto"}
            />
          </div>
        ))}
      </div>

      <div
        className={styles.carouselPips}
        role="tablist"
        aria-label="Navegação da galeria"
      >
        {SLIDES.map((slide, i) => (
          <button
            key={slide.src}
            type="button"
            className={`${styles.pip} ${i === activeIdx ? styles.active : ""}`}
            onClick={() => setActiveIdx(i)}
            role="tab"
            aria-selected={i === activeIdx}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </>
  );
}
