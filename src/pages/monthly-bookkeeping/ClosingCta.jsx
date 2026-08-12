import { CONTACT_MAILTO_URL } from "../../config/site";
import styles from "./ClosingCta.module.css";

export default function ClosingCta() {
  return (
    <section className={`section ${styles.closing}`}>
      <div className={`container ${styles.inner}`}>
        <span className={`eyebrow ${styles.eyebrowOnNavy}`}>
          Ready for a more consistent process?
        </span>
        <h2 className={styles.heading}>Let&rsquo;s talk about your bookkeeping</h2>
        <p className={styles.body}>
          Start with a conversation about your current books, account
          activity, and the support your business needs.
        </p>

        <a href={CONTACT_MAILTO_URL} className={`btn btn-on-navy ${styles.cta}`}>
          Start a conversation
        </a>
      </div>
    </section>
  );
}
