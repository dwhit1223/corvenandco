import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={`section ${styles.about}`}>
      <div className="container">
        <div className={styles.wrapper}>
          <div className="section-intro">
            <span className="eyebrow">About</span>
            <h2 className={`section-heading ${styles.heading}`}>
              Built for owners who want to understand their numbers
            </h2>
          </div>

          <div className={styles.content}>
            <p className={styles.paragraph}>
              Corven &amp; Company was founded by Derek Whitford to help
              small-business owners maintain accurate books and make better use of
              their financial information.
            </p>
            <p className={styles.paragraph}>
              Derek brings a systems-oriented approach shaped by firsthand
              small-business ownership and years of technical process work. That
              perspective informs a bookkeeping practice centered on accuracy,
              organization, clear communication, and repeatable workflows.
            </p>
            <p className={styles.paragraph}>
              The goal is not simply to categorize transactions. It is to create
              books the owner can rely on when evaluating performance, managing
              cash, and planning what comes next.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
