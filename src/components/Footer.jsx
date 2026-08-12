import { CURRENT_YEAR, PRIVACY_URL, SOCIAL_LINKS } from "../config/site";
import styles from "./Footer.module.css";

const SOCIAL_LABELS = {
  linkedin: "LinkedIn",
  facebook: "Facebook",
  instagram: "Instagram",
};

export default function Footer() {
  const socialEntries = Object.entries(SOCIAL_LINKS).filter(([, url]) => Boolean(url));
  const hasLinks = Boolean(PRIVACY_URL) || socialEntries.length > 0;

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.meta}>
          <p className={styles.copyright}>
            © {CURRENT_YEAR} Corven &amp; Company LLC. All rights reserved.
          </p>

          {hasLinks && (
            <ul className={styles.links}>
              {PRIVACY_URL && (
                <li>
                  <a href={PRIVACY_URL}>Privacy</a>
                </li>
              )}
              {socialEntries.map(([key, url]) => (
                <li key={key}>
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    {SOCIAL_LABELS[key]}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        <p className={styles.disclaimer}>
          Corven &amp; Company provides bookkeeping services and does not provide
          legal, tax, or investment advice.
        </p>
      </div>
    </footer>
  );
}
