import styles from "./Intro.module.css";

export default function Intro() {
  return (
    <section className={`section ${styles.intro}`}>
      <div className={`container ${styles.grid}`}>
        <h2 className={styles.heading}>
          Bookkeeping should create clarity—not more work.
        </h2>
        <p className={styles.body}>
          When accounts are current and reconciled, financial reports become useful
          instead of merely necessary. Corven builds a consistent bookkeeping process
          so you can spend less time sorting through transactions and more time
          running the business.
        </p>
      </div>
    </section>
  );
}
