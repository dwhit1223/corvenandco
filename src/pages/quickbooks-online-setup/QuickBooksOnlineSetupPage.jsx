import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import ProseSection from "../../components/ProseSection.jsx";
import { buildContactMailto } from "../../config/site";
import Hero from "./Hero.jsx";
import IncludedSetup from "./IncludedSetup.jsx";
import Eligibility from "./Eligibility.jsx";
import Responsibilities from "./Responsibilities.jsx";
import Exclusions from "./Exclusions.jsx";
import NextSteps from "./NextSteps.jsx";
import Process from "./Process.jsx";
import ClosingCta from "./ClosingCta.jsx";

const CONTACT_URL = buildContactMailto(
  "QuickBooks Online setup inquiry — Corven & Company"
);

export default function QuickBooksOnlineSetupPage() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main-content">
        <Hero ctaHref={CONTACT_URL} />

        <ProseSection
          eyebrow="Set up with purpose"
          heading="A bookkeeping system should reflect how the business operates"
          paragraphs={[
            "A new QuickBooks Online file needs more than a subscription and a connected bank account. The account structure, opening information, financial connections, and routine workflow should provide a reliable foundation for future bookkeeping.",
            "Corven configures straightforward new-business files within a defined scope and then explains the completed setup to the owner.",
          ]}
        />

        <IncludedSetup />
        <Eligibility />
        <Responsibilities />

        <ProseSection
          eyebrow="Handoff"
          heading="Understand the setup you receive"
          altBg
          paragraphs={[
            "The completed project includes one 30-minute handoff session covering the configuration and routine workflow established by Corven.",
            "The client may submit setup-related clarification questions for seven calendar days after the handoff. This period is intended to clarify the delivered setup and does not include additional bookkeeping, ongoing training, or general QuickBooks technical support.",
          ]}
        />

        <Exclusions />
        <NextSteps />
        <Process />

        <ProseSection
          eyebrow="Individually priced"
          heading="A fixed project fee based on the setup required"
          altBg
          paragraphs={[
            "QuickBooks Online setup is priced individually based on the business structure, number of financial accounts, amount of existing activity, opening-balance requirements, account complexity, and requested workflow.",
            "Once the scope is defined, the client receives a fixed project fee for the agreed setup.",
          ]}
        />

        <ClosingCta ctaHref={CONTACT_URL} />
      </main>
      <Footer />
    </>
  );
}
