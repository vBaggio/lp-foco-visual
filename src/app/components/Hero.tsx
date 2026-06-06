import styles from "./hero.module.css";
import { HeroSlider } from "./HeroSlider";

/**
 * Hero — Industrial Cinematic.
 *
 * Composição em camadas (z-index ascendente):
 *   1. HeroSlider (imagem rotativa full-bleed)
 *   2. heroGrade (gradient bridge + dot grid + grain) — cria zona dark à esquerda
 *   3. heroFlare, heroBlob, heroStreak — atmosfera ambiental
 *   4. heroParticles — pontos esparsos em mix-blend screen
 *  10. heroContent — texto, CTAs, métricas (single source-of-truth de mensagem)
 *  11. heroCorner — label técnico vertical bottom-right
 *
 * Server component — apenas o HeroSlider precisa de client-side state.
 *
 * Referência viva: preview/index.html.
 */
export function Hero() {
  return (
    <section
      className={styles.hero}
      aria-label="Foco Gestão Visual — hero cinematográfico"
    >
      <HeroSlider />

      <div className={styles.heroGrade} aria-hidden="true" />
      <div className={styles.heroFlare} aria-hidden="true" />
      <div className={styles.heroBlob} aria-hidden="true" />
      <div className={`${styles.heroStreak} ${styles.s1}`} aria-hidden="true" />
      <div className={`${styles.heroStreak} ${styles.s2}`} aria-hidden="true" />
      <div className={styles.heroParticles} aria-hidden="true" />

      <div className={styles.heroContent}>
        <div className={styles.heroInner}>
          <p className={`${styles.heroOverline} ${styles.animOverline}`}>
            {/* Non-breaking space antes dos bullets evita quebra antes do "·" */}
            Engenharia{"\u00A0"}· Fabricação{"\u00A0"}· Instalação
          </p>

          <h1 className={`${styles.heroHeadline} ${styles.animHeadline}`}>
            Gestão visual<br />
            que <em>transforma</em><br />
            linhas de produção
          </h1>

          <p className={`${styles.heroSub} ${styles.animSub}`}>
            Soluções sob medida para grandes indústrias. Da engenharia à
            instalação, tudo in-house.
          </p>

          <div className={`${styles.ctaRow} ${styles.animCta}`}>
            <a
              className={styles.btnPrimary}
              href="https://wa.me/5519983347475"
            >
              Solicitar Orçamento
              <svg
                className={styles.btnArrow}
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 8h10M9 4l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a className={styles.btnGhost} href="#portfolio">
              Ver Portfólio
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M2.5 7h9M8 3.5L11.5 7 8 10.5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>

          <div
            className={`${styles.heroMetrics} ${styles.animMetrics}`}
            role="list"
          >
            <div className={styles.metricItem} role="listitem">
              <div className={styles.metricValue}>60+</div>
              <div className={styles.metricLabel}>
                Clientes
                <br />
                Ativos
              </div>
            </div>
            <div className={styles.metricItem} role="listitem">
              <div className={styles.metricValue}>10+</div>
              <div className={styles.metricLabel}>
                Anos de
                <br />
                Mercado
              </div>
            </div>
            <div className={styles.metricItem} role="listitem">
              <div className={styles.metricValue}>100%</div>
              <div className={styles.metricLabel}>In-House</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
