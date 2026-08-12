import { StrictMode } from "react";
import { createRoot, hydrateRoot } from "react-dom/client";

// Production builds run a prerender step that injects static markup into
// #root before the entry script loads; hydrate that instead of
// re-rendering from scratch. In dev (and if prerendering hasn't run),
// #root is empty, so fall back to a normal client render. Shared by every
// page's entry file so this logic only lives in one place.
export function mount(Component) {
  const container = document.getElementById("root");
  const app = (
    <StrictMode>
      <Component />
    </StrictMode>
  );

  if (container.hasChildNodes()) {
    hydrateRoot(container, app);
  } else {
    createRoot(container).render(app);
  }
}
