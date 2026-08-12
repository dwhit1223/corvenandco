import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import App from "./App.jsx";
import MonthlyBookkeepingPage from "./pages/monthly-bookkeeping/MonthlyBookkeepingPage.jsx";

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
