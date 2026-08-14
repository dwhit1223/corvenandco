import { useEffect, useRef, useState } from "react";
import logo from "../assets/logo/corven-logo-horizontal-navy.png";
import { CONTACT_MAILTO_URL } from "../config/site";
import styles from "./Header.module.css";

const SERVICE_LINKS = [
  { label: "Monthly Bookkeeping", href: "/monthly-bookkeeping/" },
  { label: "Catch-up & Cleanup", href: "/bookkeeping-cleanup/" },
  { label: "QuickBooks Online Setup", href: "/quickbooks-online-setup/" },
  { label: "View All Services", href: "/#services" },
];

const NAV_LINKS = [
  { label: "How it works", href: "/#how-it-works" },
  { label: "About", href: "/#about" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef(null);
  const servicesButtonRef = useRef(null);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    if (!servicesOpen) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setServicesOpen(false);
        servicesButtonRef.current?.focus();
      }
    };

    const onPointerDown = (event) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setServicesOpen(false);
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("mousedown", onPointerDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("mousedown", onPointerDown);
    };
  }, [servicesOpen]);

  const closeMenu = () => setMenuOpen(false);
  const closeServicesMenu = () => setServicesOpen(false);

  // Closes the dropdown when focus leaves it entirely (e.g. Tabbing past
  // the last item), without interfering with focus moving between the
  // trigger button and the menu's own links.
  const onServicesBlur = (event) => {
    if (servicesRef.current && !servicesRef.current.contains(event.relatedTarget)) {
      setServicesOpen(false);
    }
  };

  return (
    <header className={styles.header}>
      <div className={`container ${styles.bar}`}>
        <a href="/" className={styles.wordmark}>
          <img
            src={logo}
            alt="Corven & Company"
            width="864"
            height="216"
            loading="eager"
            className={styles.logo}
          />
        </a>

        <nav className={styles.nav} aria-label="Primary">
          <ul className={styles.navList}>
            <li className={styles.servicesItem} ref={servicesRef} onBlur={onServicesBlur}>
              <button
                type="button"
                ref={servicesButtonRef}
                className={`${styles.navLink} ${styles.servicesButton}`}
                aria-expanded={servicesOpen}
                aria-controls="services-menu"
                onClick={() => setServicesOpen((open) => !open)}
              >
                Services
                <span className={styles.chevron} aria-hidden="true" />
              </button>
              <ul
                id="services-menu"
                className={styles.servicesMenu}
                hidden={!servicesOpen}
              >
                {SERVICE_LINKS.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={styles.servicesMenuLink}
                      onClick={closeServicesMenu}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.navLink}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href={CONTACT_MAILTO_URL} className={`btn btn-primary ${styles.headerCta}`}>
          Contact Corven
        </a>

        <button
          type="button"
          className={styles.menuToggle}
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="visually-hidden">
            {menuOpen ? "Close menu" : "Open menu"}
          </span>
          <span className={styles.menuIcon} aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      <div
        id="mobile-nav"
        className={`${styles.mobileNav} ${menuOpen ? styles.mobileNavOpen : ""}`}
        hidden={!menuOpen}
      >
        <nav aria-label="Mobile">
          <ul className={styles.mobileNavList}>
            <li className={styles.mobileGroupLabel}>Services</li>
            {SERVICE_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`${styles.mobileNavLink} ${styles.mobileServiceLink}`}
                  onClick={closeMenu}
                >
                  {link.label}
                </a>
              </li>
            ))}
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.mobileNavLink} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href={CONTACT_MAILTO_URL}
          className={`btn btn-primary ${styles.mobileCta}`}
          onClick={closeMenu}
        >
          Contact Corven
        </a>
      </div>
    </header>
  );
}
