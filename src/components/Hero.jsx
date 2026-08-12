import { CONTACT_MAILTO_URL } from "../config/site";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.content}>
          <span className="eyebrow">Bookkeeping for small businesses</span>
          <h1 className={styles.heading}>Clear books. Better business decisions.</h1>
          <p className={styles.body}>
            Corven &amp; Company provides dependable bookkeeping and QuickBooks Online
            support for small businesses that need accurate books and a clearer
            view of where the business stands.
          </p>
          <div className={styles.actions}>
            <a href={CONTACT_MAILTO_URL} className="btn btn-primary">
              Start a conversation
            </a>
            <a href="#services" className="link-arrow">
              Explore services <span aria-hidden="true">→</span>
            </a>
          </div>
          <p className={styles.supporting}>
            Monthly bookkeeping <span aria-hidden="true">•</span> Catch-up and cleanup{" "}
            <span aria-hidden="true">•</span> QuickBooks Online support
          </p>
        </div>

        <div className={styles.visual} aria-hidden="true">
          <svg viewBox="0 0 420 350" className={styles.ledger} focusable="false">
            <rect x="0.5" y="0.5" width="419" height="349" rx="6" className={styles.ledgerFrame} />
            <line x1="40" y1="0" x2="40" y2="350" className={styles.ledgerRule} />
            {Array.from({ length: 8 }).map((_, i) => (
              <line
                key={i}
                x1="0"
                y1={60 + i * 36}
                x2="420"
                y2={60 + i * 36}
                className={styles.ledgerRule}
              />
            ))}
            <line x1="330" y1="0" x2="330" y2="350" className={styles.ledgerRule} />
            <rect x="72" y="73" width="120" height="10" rx="2" className={styles.ledgerMark} />
            <rect x="72" y="109" width="90" height="10" rx="2" className={styles.ledgerMark} />
            <rect x="72" y="145" width="140" height="10" rx="2" className={styles.ledgerMark} />
            <rect x="72" y="181" width="70" height="10" rx="2" className={styles.ledgerMark} />
            <rect x="72" y="217" width="110" height="10" rx="2" className={styles.ledgerMark} />
            <rect x="72" y="253" width="130" height="10" rx="2" className={styles.ledgerMark} />
            <rect x="72" y="289" width="95" height="10" rx="2" className={styles.ledgerMark} />
            <rect x="356" y="73" width="40" height="10" rx="2" className={styles.ledgerMarkAccent} />
            <rect x="356" y="145" width="40" height="10" rx="2" className={styles.ledgerMarkAccent} />
            <rect x="356" y="217" width="40" height="10" rx="2" className={styles.ledgerMarkAccent} />
            <circle cx="20" cy="30" r="3" className={styles.ledgerDot} />
          </svg>
        </div>
      </div>
    </section>
  );
}
