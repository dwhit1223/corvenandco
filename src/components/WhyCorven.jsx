import styles from "./WhyCorven.module.css";

const POINTS = [
  {
    heading: "Direct communication",
    body: "Work with one accountable point of contact.",
  },
  {
    heading: "Consistent process",
    body: "Know what is needed, when it is due, and what you will receive.",
  },
  {
    heading: "Useful reporting",
    body: "Receive organized financial statements and clear answers to bookkeeping questions.",
  },
];

export default function WhyCorven() {
  return (
    <section className={`section ${styles.whyCorven}`}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.intro}>
          <span className="eyebrow">Why Corven</span>
          <h2 className="section-heading">Direct, accountable bookkeeping support</h2>
          <p className={styles.body}>
            Corven &amp; Company is owner-operated. You work directly with the
            person responsible for understanding your books, completing the work,
            and answering your questions. The result is a more consistent process
            and fewer handoffs.
          </p>
        </div>

        <ul className={styles.points}>
          {POINTS.map((point) => (
            <li key={point.heading} className={styles.point}>
              <h3 className={styles.pointHeading}>{point.heading}</h3>
              <p className={styles.pointBody}>{point.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
