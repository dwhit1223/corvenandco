import styles from "./Responsibilities.module.css";

const ITEMS = [
  "Business formation and ownership information",
  "Bank and credit-card statements",
  "Details for the accounts being connected",
  "Documentation supporting opening balances",
  "Timely answers about prior activity",
  "Decisions or guidance from a tax professional when tax judgment is required",
];

export default function Responsibilities() {
  return (
    <section className={`section ${styles.responsibilities}`}>
      <div className="container">
        <div className="section-intro">
          <span className="eyebrow">What Corven needs from you</span>
          <h2 className="section-heading">Accurate setup depends on accurate information</h2>
          <p className={styles.body}>
            The client purchases and owns the QuickBooks Online subscription
            and grants Corven accountant access for the project.
          </p>
        </div>

        <ul className={styles.list}>
          {ITEMS.map((item) => (
            <li key={item} className={styles.listItem}>
              {item}
            </li>
          ))}
        </ul>

        <p className={styles.note}>
          Corven does not purchase, resell, or retain ownership of the
          client&rsquo;s QuickBooks Online subscription.
        </p>
      </div>
    </section>
  );
}
