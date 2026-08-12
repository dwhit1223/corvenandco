import styles from "./Callout.module.css";

export default function Callout() {
  return (
    <div className={styles.wrap}>
      <div className="container">
        <aside className={styles.callout}>
          <h3 className={styles.heading}>Starting a new business?</h3>
          <p className={styles.body}>
            Corven may also assist qualifying new businesses with a
            straightforward initial QuickBooks Online setup when historical
            activity is limited and well documented. New-file setup is
            evaluated separately and is not part of a catch-up or cleanup
            engagement.
          </p>
        </aside>
      </div>
    </div>
  );
}
