import styles from "./Included.module.css";

const INCLUDED = [
  {
    heading: "Transaction review and categorization",
    body: "Review and categorize business transactions using a consistent, organized chart of accounts.",
  },
  {
    heading: "Bank and credit-card reconciliations",
    body: "Reconcile the financial accounts included in your service agreement and investigate differences that need attention.",
  },
  {
    heading: "Month-end review and close",
    body: "Complete a repeatable month-end process designed to keep the books current and identify unresolved bookkeeping issues.",
  },
  {
    heading: "Monthly financial statements",
    body: "Provide a monthly profit and loss statement and balance sheet based on the completed books.",
  },
  {
    heading: "Bookkeeping support",
    body: "Routine bookkeeping questions are welcome by email throughout the engagement. One monthly review call is available upon request.",
  },
  {
    heading: "QuickBooks Online bookkeeping",
    body: "Maintain the agreed bookkeeping records in QuickBooks Online using consistent processes and documentation.",
  },
];

export default function Included() {
  return (
    <section className={`section ${styles.included}`}>
      <div className="container">
        <div className="section-intro">
          <span className="eyebrow">What&rsquo;s included</span>
          <h2 className="section-heading">Core monthly bookkeeping services</h2>
        </div>

        <div className={styles.grid}>
          {INCLUDED.map((item) => (
            <article key={item.heading} className={styles.card}>
              <h3 className={styles.cardHeading}>{item.heading}</h3>
              <p className={styles.cardBody}>{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
