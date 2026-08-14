import styles from "./Hero.module.css";

export default function Hero({ ctaHref }) {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.content}`}>
        <span className="eyebrow">QuickBooks Online setup</span>
        <h1 className={styles.heading}>Start with a practical QuickBooks Online foundation</h1>
        <p className={styles.body}>
          Corven &amp; Company helps qualifying new businesses configure
          QuickBooks Online with an organized account structure, connected
          financial accounts, basic bookkeeping settings, and a workable
          starting process.
        </p>
        <a href={ctaHref} className="btn btn-primary">
          Start a conversation
        </a>
      </div>
    </section>
  );
}
