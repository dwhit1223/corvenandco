import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";
import "./styles/global.css";
import App from "./App.jsx";

const container = document.getElementById("root");
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// Production builds run a prerender step that injects static markup into
// #root before this script loads; hydrate that instead of re-rendering
// from scratch. In dev (and if prerendering hasn't run), #root is empty,
// so fall back to a normal client render.
if (container.hasChildNodes()) {
  hydrateRoot(container, app);
} else {
  createRoot(container).render(app);
}
