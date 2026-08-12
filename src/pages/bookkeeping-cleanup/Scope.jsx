import styles from "./Scope.module.css";

const ADDITIONAL = [
  "Payroll reconciliation",
  "Sales-tax reconciliation",
  "Accounts-receivable cleanup",
  "Accounts-payable cleanup",
  "Loan reconciliation",
  "Fixed-asset review",
  "Payment-processor or clearing-account reconciliation",
  "Tax-preparer schedules or extended professional coordination",
];

export default function Scope() {
  return (
    <section className={`section ${styles.scope}`}>
      <div className="container">
        <div className="section-intro">
          <span className="eyebrow">Additional complexity</span>
          <h2 className="section-heading">Some issues require separate scoping</h2>
          <p className={styles.body}>
            The following activities are not assumed to be included in a
            standard catch-up or cleanup project. If relevant, they must be
            evaluated and defined separately.
          </p>
        </div>

        <ul className={styles.tagList}>
          {ADDITIONAL.map((item) => (
            <li key={item} className={styles.tag}>
              {item}
            </li>
          ))}
        </ul>

        <p className={styles.note}>
          Corven does not provide payroll processing, sales-tax return
          preparation or filing, income-tax preparation or filing, or legal,
          tax, or investment advice.
        </p>
      </div>
    </section>
  );
}
