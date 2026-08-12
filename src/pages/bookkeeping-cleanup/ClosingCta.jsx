import styles from "./ClosingCta.module.css";

export default function ClosingCta({ ctaHref }) {
  return (
    <section className={`section ${styles.closing}`}>
      <div className={`container ${styles.inner}`}>
        <span className={`eyebrow ${styles.eyebrowOnNavy}`}>
          Ready to address the backlog?
        </span>
        <h2 className={styles.heading}>Start with a review of your current books</h2>
        <p className={styles.body}>
          Tell Corven what periods are behind, what concerns you have, and
          what records are available. The first step is determining whether
          the project fits Corven&rsquo;s current scope.
        </p>

        <a href={ctaHref} className={`btn btn-on-navy ${styles.cta}`}>
          Start a conversation
        </a>
      </div>
    </section>
  );
}
