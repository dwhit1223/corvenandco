import styles from "./HowItWorks.module.css";

const STEPS = [
  {
    number: "01",
    heading: "Start with a conversation",
    body: "We discuss your business, current bookkeeping process, software, accounts, and the problems you want to solve.",
  },
  {
    number: "02",
    heading: "Review the books",
    body: "Corven evaluates the condition and scope of the file before recommending ongoing service or a cleanup engagement.",
  },
  {
    number: "03",
    heading: "Build a consistent process",
    body: "Once the scope is agreed, we establish the monthly workflow, document responsibilities, and set a regular reporting schedule.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className={`section ${styles.howItWorks}`}>
      <div className="container">
        <div className="section-intro">
          <span className="eyebrow">How it works</span>
          <h2 className="section-heading">A straightforward path to reliable books</h2>
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
