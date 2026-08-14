// Injects statically-rendered markup into each page's built #root, so the
// site has real content in the initial HTML response instead of relying
// entirely on client-side JavaScript. Run after the client and SSR builds
// (see package.json "build" script).
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const ssrEntryPath = path.resolve(root, "dist-ssr/entry-server.js");

const {
  renderHome,
  renderMonthlyBookkeeping,
  renderBookkeepingCleanup,
  renderQuickBooksOnlineSetup,
} = await import(`file://${ssrEntryPath.replace(/\\/g, "/")}`);

const pages = [
  {
    htmlPath: path.resolve(root, "dist/index.html"),
    render: renderHome,
    expectedMarker: "Clear books",
  },
  {
    htmlPath: path.resolve(root, "dist/monthly-bookkeeping/index.html"),
    render: renderMonthlyBookkeeping,
    expectedMarker: "Reliable monthly bookkeeping",
  },
  {
    htmlPath: path.resolve(root, "dist/bookkeeping-cleanup/index.html"),
    render: renderBookkeepingCleanup,
    expectedMarker: "Bring your QuickBooks records back under control",
  },
  {
    htmlPath: path.resolve(root, "dist/quickbooks-online-setup/index.html"),
    render: renderQuickBooksOnlineSetup,
    expectedMarker: "Start with a practical QuickBooks Online foundation",
  },
];

for (const { htmlPath, render, expectedMarker } of pages) {
  const template = fs.readFileSync(htmlPath, "utf-8");
  const appHtml = render();

  if (!appHtml || !appHtml.includes(expectedMarker)) {
    throw new Error(
      `Prerender produced unexpected output for ${htmlPath} (missing "${expectedMarker}"). Aborting so a broken build is not shipped.`
    );
  }

  if (!template.includes('<div id="root"></div>')) {
    throw new Error(`Could not find <div id="root"></div> placeholder in ${htmlPath}.`);
  }

  const finalHtml = template.replace(
    '<div id="root"></div>',
    `<div id="root">${appHtml}</div>`
  );

  fs.writeFileSync(htmlPath, finalHtml);
  console.log(`Prerendered static HTML injected into ${path.relative(root, htmlPath)}`);
}

fs.rmSync(path.resolve(root, "dist-ssr"), { recursive: true, force: true });
