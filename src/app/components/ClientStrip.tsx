import styles from "./hero.module.css";

const CLIENTS = ["Continental", "FORVIA", "Hyundai", "Royal Canin", "MANN+HUMMEL"];

/**
 * ClientStrip — faixa navy logo abaixo do hero, lista textual dos clientes
 * principais. Placeholder até obter os SVGs monocromáticos com o cliente.
 */
export function ClientStrip() {
  return (
    <div className={styles.clientStrip}>
      <div className={styles.clientStripInner}>
        <span className={styles.stripLabel}>Referências</span>
        <div className={styles.stripDivider} aria-hidden="true" />
        <div className={styles.stripNames}>
          {CLIENTS.map((name) => (
            <span key={name} className={styles.stripName}>
              {name}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
