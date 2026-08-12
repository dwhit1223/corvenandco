import styles from "./ProseSection.module.css";

// Shared layout for simple eyebrow/heading/paragraph sections used across
// service pages — identical shape, different copy.
export default function ProseSection({ eyebrow, heading, paragraphs, altBg }) {
  return (
    <section className={`section ${styles.section} ${altBg ? styles.altBg : ""}`}>
      <div className={`container ${styles.grid}`}>
        <div className={styles.intro}>
          <span className="eyebrow">{eyebrow}</span>
          <h2 className={styles.heading}>{heading}</h2>
        </div>
        <div className={styles.body}>
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
