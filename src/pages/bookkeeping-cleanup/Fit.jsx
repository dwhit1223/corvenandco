import styles from "./Fit.module.css";

const GOOD_FIT = [
  "An existing QuickBooks Online file",
  "Up to 12 months of historical work",
  "Available bank and credit-card statements",
  "Straightforward business operations",
  "A responsive owner who can answer transaction questions",
  "Records sufficient to support the requested corrections",
];

export default function Fit() {
  return (
    <section className={`section ${styles.fit}`}>
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.intro}>
            <span className="eyebrow">Current project fit</span>
            <h2 className="section-heading">
              Designed for manageable QuickBooks Online projects
            </h2>
            <p className={styles.body}>
              Corven currently accepts qualifying catch-up and cleanup
              projects involving an existing QuickBooks Online file and up to
              12 months of historical bookkeeping.
            </p>
            <p className={styles.body}>
              Projects may be completed as standalone engagements or as
              preparation for ongoing monthly bookkeeping. Continuing into
              monthly service is not required.
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

        <p className={styles.boundary}>
          Projects involving inventory-heavy operations, complex payroll,
          construction or project-based job costing, multiple entities,
          foreign-currency activity, extensive ecommerce or
          payment-processor reconciliation, or substantial tax-accounting
          judgments may fall outside Corven&rsquo;s current scope.
        </p>
      </div>
    </section>
  );
}
