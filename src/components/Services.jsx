import styles from "./Services.module.css";

const SERVICES = [
  {
    heading: "Monthly bookkeeping",
    href: "/monthly-bookkeeping/",
    linkLabel: "Explore monthly bookkeeping",
    body: "Ongoing transaction review, account reconciliation, month-end close, and monthly financial statements tailored to the needs of your business.",
    bullets: [
      "Transaction categorization and review",
      "Bank and credit-card reconciliations",
      "Month-end review and close",
      "Profit and loss and balance-sheet reporting",
    ],
  },
  {
    heading: "Catch-up and cleanup",
    href: "/bookkeeping-cleanup/",
    linkLabel: "Explore catch-up and cleanup",
    body: "Bring overdue, incomplete, or unreliable books up to date and establish a clean foundation for ongoing bookkeeping.",
    bullets: [
      "Historical account reconciliation",
      "Transaction and account review",
      "Correction of bookkeeping inconsistencies",
      "Clear handoff or transition to monthly service",
    ],
  },
  {
    heading: "QuickBooks Online Setup",
    href: "/quickbooks-online-setup/",
    linkLabel: "Explore QuickBooks Online setup",
    body: "A practical QuickBooks Online foundation for qualifying new businesses, including account structure, connected financial accounts, basic settings, and an organized starting workflow.",
    bullets: [
      "New-company file setup",
      "Chart-of-accounts organization",
      "Bank-feed and workflow setup",
      "Initial reconciliation guidance",
    ],
  },
];

export default function Services() {
  return (
    <section id="services" className={`section ${styles.services}`}>
      <div className="container">
        <div className="section-intro">
          <span className="eyebrow">Services</span>
          <h2 className="section-heading">Practical support for healthier books</h2>
        </div>

        <div className={styles.grid}>
          {SERVICES.map((service) => (
            <article key={service.heading} className={styles.card}>
              <h3 className={styles.cardHeading}>{service.heading}</h3>
              <p className={styles.cardBody}>{service.body}</p>
              <ul className={styles.cardList}>
                {service.bullets.map((bullet) => (
                  <li key={bullet} className={styles.cardListItem}>
                    {bullet}
                  </li>
                ))}
              </ul>
              {service.href && (
                <a href={service.href} className={`link-arrow ${styles.cardLink}`}>
                  {service.linkLabel} <span aria-hidden="true">→</span>
                </a>
              )}
            </article>
          ))}
        </div>

        <p className={styles.scopeNote}>
          Services are tailored after an initial review of your accounts,
          transaction volume, and current bookkeeping needs.
        </p>
      </div>
    </section>
  );
}
