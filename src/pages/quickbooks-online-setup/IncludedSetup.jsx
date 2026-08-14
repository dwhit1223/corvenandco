import styles from "./IncludedSetup.module.css";

const ITEMS = [
  {
    heading: "Company configuration",
    body: "Configure basic company information and bookkeeping preferences using the records and decisions provided by the client.",
  },
  {
    heading: "Chart of accounts",
    body: "Create a straightforward account structure appropriate for the business’s current bookkeeping needs.",
  },
  {
    heading: "Financial-account connections",
    body: "Connect the agreed bank and credit-card accounts to QuickBooks Online when supported and authorized by the client.",
  },
  {
    heading: "Bank-feed organization",
    body: "Configure basic bank-feed settings and reasonable rules intended to support consistent transaction processing.",
  },
  {
    heading: "Opening information",
    body: "Enter supportable opening balances and beginning information using documentation provided by the client.",
  },
  {
    heading: "Starting workflow",
    body: "Establish a practical process for reviewing transactions, maintaining supporting records, and reconciling accounts.",
  },
  {
    heading: "Initial reconciliation guidance",
    body: "Complete or demonstrate the initial reconciliation process for the agreed financial accounts, depending on the project scope and available records.",
  },
];

export default function IncludedSetup() {
  return (
    <section className={`section ${styles.included}`}>
      <div className="container">
        <div className="section-intro">
          <span className="eyebrow">What setup may include</span>
          <h2 className="section-heading">The essential pieces of an organized starting file</h2>
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
