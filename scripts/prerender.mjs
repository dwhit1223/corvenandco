// Injects statically-rendered markup into dist/index.html's #root, so the
// homepage has real content in the initial HTML response instead of
// relying entirely on client-side JavaScript. Run after the client and
// SSR builds (see package.json "build" script).
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const ssrEntryPath = path.resolve(root, "dist-ssr/entry-server.js");
const templatePath = path.resolve(root, "dist/index.html");

const { render } = await import(`file://${ssrEntryPath.replace(/\\/g, "/")}`);

const template = fs.readFileSync(templatePath, "utf-8");
const appHtml = render();

if (!appHtml || !appHtml.includes("Clear books")) {
  throw new Error(
    "Prerender produced unexpected output (missing expected hero content). Aborting so a broken build is not shipped."
  );
}

if (!template.includes('<div id="root"></div>')) {
  throw new Error('Could not find <div id="root"></div> placeholder in dist/index.html.');
}

const finalHtml = template.replace(
  '<div id="root"></div>',
  `<div id="root">${appHtml}</div>`
);

fs.writeFileSync(templatePath, finalHtml);
fs.rmSync(path.resolve(root, "dist-ssr"), { recursive: true, force: true });

console.log("Prerendered static HTML injected into dist/index.html");
