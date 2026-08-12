import styles from "./Fit.module.css";

const GOOD_FIT = [
  "QuickBooks Online users",
  "Service-based small businesses",
  "Straightforward bank and credit-card activity",
  "Owners seeking consistent monthly records",
  "Businesses willing to provide timely statements and supporting documents",
];

export default function Fit() {
  return (
    <section className={`section ${styles.fit}`}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.intro}>
          <span className="eyebrow">Who it&rsquo;s for</span>
          <h2 className="section-heading">
            Designed for straightforward small-business bookkeeping
          </h2>
          <p className={styles.body}>
            Corven is best suited for small businesses using QuickBooks
            Online with straightforward operations and a manageable number of
            bank and credit-card accounts.
          </p>
          <p className={styles.body}>
            Additional accounts can be accommodated when the overall
            bookkeeping structure remains within scope. Transaction volume,
            account count, current record condition, and operational
            complexity are considered before an engagement is proposed.
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
    </section>
  );
}
