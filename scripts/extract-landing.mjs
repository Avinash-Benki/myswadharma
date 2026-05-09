/**
 * Re-imports the marketing HTML from design_systems into this app:
 * - app/landing-page.css (merged <style> blocks)
 * - content/landing-body.html (body markup, no inline script)
 *
 * Run: npm run sync:landing
 */
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const htmlPath = path.join(
  repoRoot,
  "design_systems/claude/MySwadharma_claude/code.html"
);
const cssOut = path.join(repoRoot, "app/landing-page.css");
const fragOut = path.join(repoRoot, "content/landing-body.html");

function stripRootBlocks(css) {
  let out = css;
  while (true) {
    const idx = out.search(/:root\s*\{/);
    if (idx === -1) break;
    let depth = 0;
    let i = idx;
    while (i < out.length && out[i] !== "{") i++;
    if (i >= out.length) break;
    const start = idx;
    for (; i < out.length; i++) {
      if (out[i] === "{") depth++;
      else if (out[i] === "}") {
        depth--;
        if (depth === 0) {
          out = out.slice(0, start) + out.slice(i + 1);
          break;
        }
      }
    }
  }
  return out;
}

function alignMarketingCssToDesignSystem(css) {
  let c = stripRootBlocks(css);
  c = c.replace(
    /"Noto Serif", Georgia,?\s*"Times New Roman", serif/g,
    "var(--font-display)"
  );
  c = c.replace(/"Noto Serif", Georgia, serif/g, "var(--font-display)");
  c = c.replace(/#604942/g, "var(--fg-warm)");
  c = c.replace(/#fff8e8/g, "var(--bg-warm-chip)");
  c = c.replace(/#54372d/g, "var(--fg-warm)");
  c = c.replace(/#59443d/g, "var(--fg-warm)");
  c = c.replace(
    /font-family:\s*"Manrope", Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;/g,
    "font-family: var(--font-body);"
  );
  return c;
}

const html = fs.readFileSync(htmlPath, "utf8");
const styles = [...html.matchAll(/<style[^>]*>([\s\S]*?)<\/style>/g)].map((m) =>
  m[1].trim()
);
fs.writeFileSync(cssOut, alignMarketingCssToDesignSystem(styles.join("\n\n")));

const bodyMatch = html.match(/<body[^>]*>([\s\S]*)/i);
if (!bodyMatch) throw new Error(`No <body> in ${path.relative(repoRoot, htmlPath)}`);
let body = bodyMatch[1];
const scriptIdx = body.indexOf("<script>");
if (scriptIdx >= 0) body = body.slice(0, scriptIdx);
body = body.trim().replace(/<\/body>[\s\S]*$/i, "");

fs.mkdirSync(path.dirname(fragOut), { recursive: true });

body = body.replace(
  "<nav class=\"nav\">",
  '<nav class="nav" aria-label="Primary">'
);
body = body.replace(
  "<button class=\"mobile-menu\" id=\"menuBtn\">Menu</button>",
  '<button type="button" class="mobile-menu" id="menuBtn" aria-expanded="false" aria-controls="navLinks">Menu</button>'
);

fs.writeFileSync(fragOut, body);

console.log(
  "Wrote",
  path.relative(repoRoot, cssOut),
  `(${styles.length} style blocks),`,
  path.relative(repoRoot, fragOut)
);
