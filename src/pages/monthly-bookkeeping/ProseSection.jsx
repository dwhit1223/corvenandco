import styles from "./ProseSection.module.css";

// Shared layout for the page's simple eyebrow/heading/paragraph sections
// (introductory process, starting-books, and pricing) — identical shape,
// different copy, so one component renders all three.
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
