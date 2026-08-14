import styles from "./Process.module.css";

const STEPS = [
  {
    number: "01",
    heading: "Review",
    body: "Corven reviews the business structure, existing activity, financial accounts, records, and intended bookkeeping workflow.",
  },
  {
    number: "02",
    heading: "Define",
    body: "The setup components, client responsibilities, assumptions, exclusions, and deliverables are documented.",
  },
  {
    number: "03",
    heading: "Propose",
    body: "The client receives a fixed-fee proposal for the defined setup project.",
  },
  {
    number: "04",
    heading: "Configure",
    body: "Corven completes the agreed QuickBooks Online configuration using the information and access provided.",
  },
  {
    number: "05",
    heading: "Handoff",
    body: "Corven conducts the 30-minute handoff session and begins the seven-day clarification period.",
  },
];

export default function Process() {
  return (
    <section className={`section ${styles.process}`}>
      <div className="container">
        <div className="section-intro">
          <span className="eyebrow">How it works</span>
          <h2 className="section-heading">A defined path to a working QBO file</h2>
        </div>

        <ol className={styles.steps}>
          {STEPS.map((step) => (
            <li key={step.number} className={styles.step}>
              <span className={styles.stepNumber} aria-hidden="true">
                {step.number}
              </span>
              <h3 className={styles.stepHeading}>{step.heading}</h3>
              <p className={styles.stepBody}>{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
