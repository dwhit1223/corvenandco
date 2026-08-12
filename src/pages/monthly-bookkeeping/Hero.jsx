import { CONTACT_MAILTO_URL } from "../../config/site";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={`container ${styles.content}`}>
        <span className="eyebrow">Monthly bookkeeping</span>
        <h1 className={styles.heading}>Reliable monthly bookkeeping for your small business</h1>
        <p className={styles.body}>
          Corven &amp; Company keeps your books organized, reconciled, and
          current so you can understand where your business stands without
          handling the monthly bookkeeping yourself.
        </p>
        <a href={CONTACT_MAILTO_URL} className="btn btn-primary">
          Start a conversation
        </a>
      </div>
    </section>
  );
}
