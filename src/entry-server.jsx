import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App.jsx";
import MonthlyBookkeepingPage from "./pages/monthly-bookkeeping/MonthlyBookkeepingPage.jsx";
import BookkeepingCleanupPage from "./pages/bookkeeping-cleanup/BookkeepingCleanupPage.jsx";
import QuickBooksOnlineSetupPage from "./pages/quickbooks-online-setup/QuickBooksOnlineSetupPage.jsx";

export function renderHome() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>
  );
}

export function renderMonthlyBookkeeping() {
  return renderToString(
    <StrictMode>
      <MonthlyBookkeepingPage />
    </StrictMode>
  );
}

export function renderBookkeepingCleanup() {
  return renderToString(
    <StrictMode>
      <BookkeepingCleanupPage />
    </StrictMode>
  );
}

export function renderQuickBooksOnlineSetup() {
  return renderToString(
    <StrictMode>
      <QuickBooksOnlineSetupPage />
    </StrictMode>
  );
}
