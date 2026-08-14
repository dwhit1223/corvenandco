import styles from "./ClosingCta.module.css";

export default function ClosingCta({ ctaHref }) {
  return (
    <section className={`section ${styles.closing}`}>
      <div className={`container ${styles.inner}`}>
        <span className={`eyebrow ${styles.eyebrowOnNavy}`}>Starting a new business?</span>
        <h2 className={styles.heading}>
          Build the bookkeeping foundation before the records become
          complicated
        </h2>
        <p className={styles.body}>
          Start with a conversation about your business, existing activity,
          financial accounts, and what you need QuickBooks Online to
          support.
        </p>

        <a href={ctaHref} className={`btn btn-on-navy ${styles.cta}`}>
          Start a conversation
        </a>
      </div>
    </section>
  );
}
