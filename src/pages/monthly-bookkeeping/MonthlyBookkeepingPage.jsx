import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";
import Hero from "./Hero.jsx";
import ProseSection from "./ProseSection.jsx";
import Included from "./Included.jsx";
import Fit from "./Fit.jsx";
import Scope from "./Scope.jsx";
import Process from "./Process.jsx";
import ClosingCta from "./ClosingCta.jsx";

export default function MonthlyBookkeepingPage() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Header />
      <main id="main-content">
        <Hero />

        <ProseSection
          eyebrow="A consistent monthly process"
          heading="Accurate books begin with dependable routines"
          paragraphs={[
            "Monthly bookkeeping is more than categorizing transactions. Each month, Corven reviews account activity, reconciles financial accounts, addresses bookkeeping issues, and completes a structured month-end close.",
            "The result is an organized QuickBooks Online file and monthly financial statements that give you a clearer view of the business.",
          ]}
        />

        <Included />
        <Fit />
        <Scope />

        <ProseSection
          eyebrow="Before monthly service begins"
          heading="A clean starting point"
          altBg
          paragraphs={[
            "Before recurring service begins, Corven reviews the existing QuickBooks Online file and recent account activity.",
            "If the books are reliable through an agreed starting date, monthly bookkeeping can begin directly. If prior periods contain unreconciled accounts, incorrect balances, duplicate activity, or other material issues, catch-up or cleanup work will be proposed separately before recurring service begins.",
          ]}
        />

        <ProseSection
          eyebrow="Individually priced"
          heading="A fixed monthly fee based on your books"
          paragraphs={[
            "Monthly services are priced individually based on transaction volume, number of accounts, bookkeeping complexity, and the support required.",
            "Before providing a proposal, Corven reviews recent account activity and, when available, the existing QuickBooks Online file. Once the scope is defined, the client receives a fixed monthly fee for the agreed service.",
          ]}
        />

        <Process />
        <ClosingCta />
      </main>
      <Footer />
    </>
  );
}
