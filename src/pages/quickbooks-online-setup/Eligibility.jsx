import styles from "./Eligibility.module.css";

const GOOD_FIT = [
  "A new or recently established business",
  "QuickBooks Online as the intended bookkeeping platform",
  "Up to three months of limited historical activity",
  "Available bank and credit-card statements",
  "Straightforward ownership and operations",
  "A manageable number of financial accounts",
  "An owner prepared to provide requested information",
];

export default function Eligibility() {
  return (
    <section className={`section ${styles.eligibility}`}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.intro}>
            <span className="eyebrow">Who it&rsquo;s for</span>
            <h2 className="section-heading">Designed for straightforward new-business setups</h2>
            <p className={styles.body}>
              This service is intended for qualifying new or recently
              established businesses with straightforward operations and no
              more than three months of limited, well-documented activity.
            </p>
          </div>

          <div className={styles.fitList}>
            <h3 className={styles.fitListHeading}>Good fit</h3>
            <ul className={styles.list}>
              {GOOD_FIT.map((item) => (
                <li key={item} className={styles.listItem}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className={styles.note}>
          The three-month limit does not guarantee that prior activity
          belongs within a setup project. If the existing records require
          substantial transaction entry, correction, or reconciliation,
          Corven may propose a separate{" "}
          <a href="/bookkeeping-cleanup/" className={styles.inlineLink}>
            catch-up or cleanup engagement
          </a>
          .
        </p>
      </div>
    </section>
  );
}
