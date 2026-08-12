import styles from "./Comparison.module.css";

const CATEGORIES = [
  {
    heading: "Catch-up bookkeeping",
    body: "Catch-up bookkeeping is intended for businesses whose books have fallen behind and need missing work completed.",
    items: [
      "Unreviewed bank-feed activity",
      "Transactions awaiting categorization",
      "Months that have not been reconciled",
      "Incomplete month-end bookkeeping",
      "Financial statements that have not been brought current",
    ],
  },
  {
    heading: "Cleanup bookkeeping",
    body: "Cleanup bookkeeping is intended for businesses whose records contain identifiable bookkeeping problems that need correction.",
    items: [
      "Duplicate or incorrectly classified transactions",
      "Incorrectly recorded transfers or credit-card payments",
      "Uncategorized income or expenses",
      "Unreconciled accounts or reconciliation discrepancies",
      "Implausible account balances",
      "Owner activity recorded incorrectly",
      "An unnecessarily complicated chart of accounts",
    ],
  },
];

export default function Comparison() {
  return (
    <section className={`section ${styles.comparison}`}>
      <div className={`container ${styles.grid}`}>
        {CATEGORIES.map((category) => (
          <div key={category.heading} className={styles.card}>
            <h3 className={styles.cardHeading}>{category.heading}</h3>
            <p className={styles.cardBody}>{category.body}</p>
            <ul className={styles.list}>
              {category.items.map((item) => (
                <li key={item} className={styles.listItem}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
