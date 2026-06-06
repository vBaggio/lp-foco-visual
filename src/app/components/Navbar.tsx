"use client";

import { useEffect, useState } from "react";
import styles from "./hero.module.css";

/**
 * Navbar — transparente sobre o hero, ganha background sólido após scroll.
 * Logo branco via CSS mask sobre /brand/logo.svg.
 *
 * Client component apenas para o scroll detect; o resto é estrutura.
 */
export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.navbarInner}>
        <a
          className={styles.navLogoLink}
          href="#"
          aria-label="Foco Gestão Visual — página inicial"
        >
          <span
            className={styles.navLogo}
            role="img"
            aria-label="Foco Gestão Visual"
          />
        </a>

        <nav className={styles.navLinks} aria-label="Navegação principal">
          <a href="#produtos">Produtos</a>
          <a href="#portfolio">Portfólio</a>
          <a href="#empresa">Empresa</a>
          <a href="#contato">Contato</a>
        </nav>

        <a className={styles.btnNav} href="https://wa.me/5519983347475">
          Orçamento
        </a>
      </div>
    </header>
  );
}
