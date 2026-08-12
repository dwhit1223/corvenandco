import { CONTACT_MAILTO_URL } from "../config/site";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section id="contact" className={`section ${styles.contact}`}>
      <div className={`container ${styles.inner}`}>
        <span className={`eyebrow ${styles.eyebrowOnNavy}`}>Contact</span>
        <h2 className={styles.heading}>Ready for clearer books?</h2>
        <p className={styles.body}>
          Tell us a little about your business and what you need help with. We
          will follow up to determine whether Corven is a good fit.
        </p>

        <a href={CONTACT_MAILTO_URL} className={`btn btn-on-navy ${styles.cta}`}>
          Start a conversation
        </a>
      </div>
    </section>
  );
}
