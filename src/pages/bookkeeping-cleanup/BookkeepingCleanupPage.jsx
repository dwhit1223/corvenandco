import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import ProseSection from "../../components/ProseSection.jsx";
import { buildContactMailto } from "../../config/site";
import Hero from "./Hero.jsx";
import Comparison from "./Comparison.jsx";
import ProjectWork from "./ProjectWork.jsx";
import Fit from "./Fit.jsx";
import Scope from "./Scope.jsx";
import Callout from "./Callout.jsx";
import Process from "./Process.jsx";
import ClosingCta from "./ClosingCta.jsx";

const CONTACT_URL = buildContactMailto(
  "Catch-up or cleanup bookkeeping inquiry — Corven & Company"
);

export default function BookkeepingCleanupPage() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main-content">
        <Hero ctaHref={CONTACT_URL} />

        <ProseSection
          eyebrow="Behind, incorrect, or both"
          heading="Different problems require different corrections"
          paragraphs={[
            "Catch-up bookkeeping addresses work that is missing or incomplete. Cleanup bookkeeping addresses work that has already been entered but contains errors, inconsistencies, or unresolved balances.",
            "Many QuickBooks Online files need a combination of both. Corven begins by reviewing the existing records and defining the periods, accounts, and issues included in the project.",
          ]}
        />

        <Comparison />
        <ProjectWork />
        <Fit />
        <Scope />

        <ProseSection
          eyebrow="Records matter"
          heading="Corrections must be supported"
          paragraphs={[
            "Reliable cleanup work depends on reliable source documents. Clients are expected to provide requested statements, transaction details, and supporting records in a timely manner.",
            "When documentation is missing or a transaction cannot be classified responsibly, Corven will identify the unresolved item rather than make an unsupported assumption. Matters requiring tax judgment may be referred to the client’s tax professional.",
          ]}
        />

        <Callout />
        <Process />

        <ProseSection
          eyebrow="Individually priced"
          heading="A fixed project fee based on the work required"
          altBg
          paragraphs={[
            "Catch-up and cleanup projects are priced individually after Corven reviews the existing QuickBooks Online file, the periods involved, transaction activity, account count, available records, and the condition of the books.",
            "Once the scope is defined, the client receives a fixed project fee based on the agreed work and assumptions. Material issues discovered outside that scope are discussed before additional work is performed.",
          ]}
        />

        <ClosingCta ctaHref={CONTACT_URL} />
      </main>
      <Footer />
    </>
  );
}
