import styles from "./Exclusions.module.css";

const EXCLUDED = [
  "Login, subscription, billing, browser, or synchronization problems",
  "QuickBooks software defects",
  "QuickBooks Online Payroll setup or troubleshooting",
  "Inventory setup",
  "Construction or project-based job costing",
  "Multi-entity accounting",
  "QuickBooks Desktop migration",
  "Conversion of an established spreadsheet-based system",
  "Ecommerce or complex third-party integrations",
  "Tax configuration requiring professional tax judgment",
  "Ongoing training or unlimited support",
  "Ongoing monthly bookkeeping unless separately engaged",
];

export default function Exclusions() {
  return (
    <section className={`section ${styles.exclusions}`}>
      <div className="container">
        <div className="section-intro">
          <span className="eyebrow">Clear boundaries</span>
          <h2 className="section-heading">
            This is a bookkeeping setup service—not software technical support
          </h2>
          <p className={styles.body}>
            Corven configures QuickBooks Online for straightforward
            bookkeeping use. Technical software problems and specialized
            accounting configurations fall outside this service.
          </p>
        </div>

        <ul className={styles.tagList}>
          {EXCLUDED.map((item) => (
            <li key={item} className={styles.tag}>
              {item}
            </li>
          ))}
        </ul>

        <p className={styles.note}>
          Technical software issues may need to be addressed through Intuit
          Support. Historical bookkeeping problems may require a separately
          scoped{" "}
          <a href="/bookkeeping-cleanup/" className={styles.inlineLink}>
            catch-up or cleanup project
          </a>
          .
        </p>
      </div>
    </section>
  );
}
