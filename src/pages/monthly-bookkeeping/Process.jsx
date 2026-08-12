import styles from "./Process.module.css";

const STEPS = [
  {
    number: "01",
    heading: "Review",
    body: "Corven reviews your QuickBooks Online file, recent account activity, and bookkeeping needs.",
  },
  {
    number: "02",
    heading: "Scope",
    body: "You receive a proposal defining the monthly services, responsibilities, and fixed monthly fee.",
  },
  {
    number: "03",
    heading: "Prepare",
    body: "Any required catch-up or cleanup work is identified and handled separately before recurring service begins.",
  },
  {
    number: "04",
    heading: "Maintain",
    body: "Corven completes the agreed bookkeeping process each month and provides your financial statements.",
  },
];

export default function Process() {
  return (
    <section className={`section ${styles.process}`}>
      <div className="container">
        <div className="section-intro">
          <span className="eyebrow">How it works</span>
          <h2 className="section-heading">A straightforward path to current books</h2>
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
