import styles from "./Hero.module.css";

export default function Hero({ ctaHref }) {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.content}`}>
        <span className="eyebrow">Catch-up &amp; cleanup bookkeeping</span>
        <h1 className={styles.heading}>Bring your QuickBooks records back under control</h1>
        <p className={styles.body}>
          Corven &amp; Company helps small businesses complete overdue
          bookkeeping, correct identifiable problems, and establish a more
          reliable starting point for the months ahead.
        </p>
        <a href={ctaHref} className="btn btn-primary">
          Start a conversation
        </a>
      </div>
    </section>
  );
}
