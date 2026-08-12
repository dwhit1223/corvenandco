// Site-wide configuration and constants.
// Values still set to null are unresolved owner choices. Do not render a
// placeholder to visitors — the components that use them already check for
// null and omit the corresponding UI until a real value is supplied here.

export const SITE_URL = "https://corvenandco.com/";
export const SITE_NAME = "Corven & Company";
export const SITE_TITLE = "Small Business Bookkeeping & QuickBooks Support | Corven & Company";
export const SITE_DESCRIPTION =
  "Corven & Company provides monthly bookkeeping, catch-up and cleanup services, and QuickBooks Online support for small businesses.";

export const CONTACT_EMAIL = "hello@corvenandco.com";
export const CONTACT_EMAIL_SUBJECT = "Bookkeeping inquiry — Corven & Company";

// Single source of truth for every contact CTA's mailto: destination.
// Built with encodeURIComponent rather than a hand-escaped literal so the
// subject line is always correctly percent-encoded.
export const CONTACT_MAILTO_URL = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  CONTACT_EMAIL_SUBJECT
)}`;

// No scheduling URL or contact form endpoint has been supplied yet.
// When one exists, set it here and update the Contact CTA to use it.
export const SCHEDULING_URL = null;
export const CONTACT_FORM_ENDPOINT = null;

// Social links: only rendered if a URL is present. Do not fabricate.
export const SOCIAL_LINKS = {
  linkedin: null,
  facebook: null,
  instagram: null,
};

// Set to a real path (e.g. "/privacy") only once a privacy page exists.
export const PRIVACY_URL = null;

export const CURRENT_YEAR = new Date().getFullYear();

// --- Search engine verification & analytics -------------------------------
// Not yet configured. Populate with real values only, then wire the
// corresponding <meta name="..." content="..."> tag (verification) or
// analytics snippet (measurement ID) into index.html. Do not fabricate an
// ID or add a tracking script without an approved, real value here.
export const GOOGLE_SITE_VERIFICATION = null; // Google Search Console HTML-tag content value
export const ANALYTICS_MEASUREMENT_ID = null; // e.g. GA4 "G-XXXXXXX", only once analytics is approved

// Bing verification is handled via the static public/BingSiteAuth.xml file
// (Bing's XML-file verification method), not a meta tag, so there's no
// corresponding constant here.
