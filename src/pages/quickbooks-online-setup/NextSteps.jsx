import styles from "./NextSteps.module.css";

export default function NextSteps() {
  return (
    <section className={`section ${styles.nextSteps}`}>
      <div className="container">
        <div className="section-intro">
          <span className="eyebrow">What comes next</span>
          <h2 className="section-heading">Use the completed setup in the way that fits your business</h2>
          <p className={styles.body}>
            After handoff, the client may maintain the books independently or
            consider separately proposed monthly bookkeeping from Corven.
          </p>
        </div>

        <div className={styles.grid}>
          <article className={styles.card}>
            <h3 className={styles.cardHeading}>Maintain it yourself</h3>
            <p className={styles.cardBody}>
              Use the configured file and starting workflow to manage
              routine bookkeeping internally.
            </p>
          </article>
          <article className={styles.card}>
            <h3 className={styles.cardHeading}>Continue with Corven</h3>
            <p className={styles.cardBody}>
              Request a separate proposal for recurring{" "}
              <a href="/monthly-bookkeeping/" className={styles.inlineLink}>
                monthly bookkeeping
              </a>{" "}
              when ongoing support is a better fit.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
