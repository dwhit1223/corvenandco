import styles from "./ProjectWork.module.css";

const ITEMS = [
  {
    heading: "Diagnostic review",
    body: "Review the existing QuickBooks Online file, recent account activity, reconciliation history, and apparent bookkeeping issues.",
  },
  {
    heading: "Transaction corrections",
    body: "Categorize missing activity and correct duplicate, misclassified, or improperly recorded transactions included in the project.",
  },
  {
    heading: "Account reconciliations",
    body: "Reconcile the agreed bank and credit-card accounts using the statements and records provided.",
  },
  {
    heading: "Balance review",
    body: "Review common balance-sheet accounts and identify balances or activity that require correction, documentation, or referral to a tax professional.",
  },
  {
    heading: "Chart-of-accounts cleanup",
    body: "Consolidate or reorganize reasonable chart-of-accounts issues when doing so improves consistency and reporting.",
  },
  {
    heading: "Updated financial statements",
    body: "Provide updated profit and loss statements and balance sheets for the periods completed, subject to the records available.",
  },
  {
    heading: "Project summary",
    body: "Document completed work, unresolved questions, missing information, and matters that may require attention from the client or tax professional.",
  },
];

export default function ProjectWork() {
  return (
    <section className={`section ${styles.projectWork}`}>
      <div className="container">
        <div className="section-intro">
          <span className="eyebrow">What a project may include</span>
          <h2 className="section-heading">Focused work within a defined scope</h2>
          <p className={styles.intro}>
            The exact work depends on the condition of the QuickBooks Online
            file, the records available, and the issues identified during
            review.
          </p>
        </div>

        <div className={styles.grid}>
          {ITEMS.map((item) => (
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
