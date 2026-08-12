import styles from "./Process.module.css";

const STEPS = [
  {
    number: "01",
    heading: "Review",
    body: "Corven reviews the existing QuickBooks Online file, affected periods, financial accounts, and available records.",
  },
  {
    number: "02",
    heading: "Define",
    body: "The required work, project assumptions, client responsibilities, exclusions, and expected deliverables are documented.",
  },
  {
    number: "03",
    heading: "Propose",
    body: "You receive a fixed-fee proposal for the defined project scope before work begins.",
  },
  {
    number: "04",
    heading: "Correct",
    body: "Corven completes the agreed catch-up and cleanup work and requests clarification or documentation when needed.",
  },
  {
    number: "05",
    heading: "Close",
    body: "You receive the updated records, applicable financial statements, and a summary of completed and unresolved items.",
  },
  {
    number: "06",
    heading: "Continue if useful",
    body: "The engagement may end with the completed project or transition into separately proposed monthly bookkeeping.",
  },
];

export default function Process() {
  return (
    <section className={`section ${styles.process}`}>
      <div className="container">
        <div className="section-intro">
          <span className="eyebrow">How it works</span>
          <h2 className="section-heading">A defined path from review to completion</h2>
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
