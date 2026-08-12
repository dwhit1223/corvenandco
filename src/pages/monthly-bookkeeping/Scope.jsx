import styles from "./Scope.module.css";

const ADD_ONS = [
  "Accounts payable",
  "Accounts receivable",
  "Customer invoicing",
  "Bill payment",
  "Payroll reconciliation",
  "Sales-tax reconciliation",
  "Catch-up or cleanup bookkeeping",
];

export default function Scope() {
  return (
    <section className={`section ${styles.scope}`}>
      <div className="container">
        <div className="section-intro">
          <span className="eyebrow">Clear scope</span>
          <h2 className="section-heading">Additional needs are evaluated separately</h2>
          <p className={styles.body}>
            Some bookkeeping and back-office activities require separate
            scoping and are not included automatically with monthly
            bookkeeping.
          </p>
        </div>

        <ul className={styles.tagList}>
          {ADD_ONS.map((item) => (
            <li key={item} className={styles.tag}>
              {item}
            </li>
          ))}
        </ul>

        <p className={styles.note}>
          Corven does not currently provide payroll processing, sales-tax
          return preparation or filing, income-tax preparation or filing, or
          legal, tax, or investment advice.
        </p>
      </div>
    </section>
  );
}
