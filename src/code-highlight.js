/**
 * Code Highlight
 *
 * Syntax-highlights <pre><code class="language-*"> blocks.
 * No markup changes needed — just use standard fenced code blocks in markdown:
 *
 *   ```javascript
 *   const x = 42;
 *   ```
 *
 * Canvas preserves the <pre><code class="language-javascript"> that markdown
 * processors produce. This component finds those elements and highlights them.
 *
 * Bundled languages (offline-safe, no CDN):
 *   javascript, jsx, typescript, css, markup (html/xml),
 *   python, bash, json, markdown
 */
import Prism from 'prismjs';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-markup';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-markdown';
import { injectOnce, watchForNew } from './utils.js';

// ── Theme ──────────────────────────────────────────────────────────────────
// Custom Trillian theme — clean, light, readable.

function injectStyles() {
  injectOnce('trl-code-styles', `
    pre[class*="language-"],
    code[class*="language-"] {
      font-family: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', Consolas, monospace;
      font-size: 13px;
      line-height: 1.6;
      direction: ltr;
      text-align: left;
      white-space: pre;
      word-spacing: normal;
      word-break: normal;
      tab-size: 2;
      hyphens: none;
    }
    pre[class*="language-"] {
      background: #f6f8fa;
      border: 1px solid #e8eaed;
      border-radius: 8px;
      padding: 16px 18px;
      overflow: auto;
      margin: 0 0 16px;
    }
    :not(pre) > code[class*="language-"] {
      background: #f0f3f6;
      border-radius: 4px;
      padding: 2px 5px;
    }
    .trl-code-label {
      display: block;
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: #aaa;
      margin-bottom: 8px;
    }

    /* Tokens */
    .token.comment,
    .token.prolog,
    .token.doctype,
    .token.cdata          { color: #6e7781; }
    .token.punctuation    { color: #555; }
    .token.property,
    .token.tag,
    .token.boolean,
    .token.number,
    .token.constant,
    .token.symbol,
    .token.deleted        { color: #cf222e; }
    .token.selector,
    .token.attr-name,
    .token.string,
    .token.char,
    .token.builtin,
    .token.inserted       { color: #0a3069; }
    .token.operator,
    .token.entity,
    .token.url,
    .language-css .token.string,
    .style .token.string  { color: #953800; }
    .token.atrule,
    .token.attr-value,
    .token.keyword        { color: #8250df; }
    .token.function,
    .token.class-name     { color: #1a7f37; }
    .token.regex,
    .token.important,
    .token.variable       { color: #e16209; }
    .token.important,
    .token.bold           { font-weight: 600; }
    .token.italic         { font-style: italic; }
  `);
}

// ── Language label map ────────────────────────────────────────────────────

const LANG_LABELS = {
  javascript: 'JS', js: 'JS',
  jsx: 'JSX',
  typescript: 'TS', ts: 'TS',
  css: 'CSS',
  markup: 'HTML', html: 'HTML', xml: 'XML',
  python: 'Python', py: 'Python',
  bash: 'Bash', shell: 'Bash', sh: 'Bash',
  json: 'JSON',
  markdown: 'Markdown', md: 'Markdown',
};

// ── Identify + init ───────────────────────────────────────────────────────

function isCode(code) {
  return !!getLang(code) && !code.dataset.trlCode;
}

function getLang(code) {
  for (const cls of code.classList) {
    const m = cls.match(/^language-(.+)$/);
    if (m) return m[1].toLowerCase();
  }
  return null;
}

function initOne(code) {
  injectStyles();
  code.dataset.trlCode = '1';
  const lang  = getLang(code);
  const label = LANG_LABELS[lang] || lang;

  // Add label above the pre block
  const pre = code.parentElement;
  if (pre && pre.tagName === 'PRE') {
    const span = document.createElement('span');
    span.className = 'trl-code-label';
    span.textContent = label;
    pre.insertBefore(span, code);

    // Ensure pre has the language class for theme selector
    if (!pre.classList.contains(`language-${lang}`)) {
      pre.classList.add(`language-${lang}`);
    }
  }

  // Map aliases to Prism grammar names
  const grammarMap = { js: 'javascript', ts: 'typescript', py: 'python',
                       html: 'markup', sh: 'bash', shell: 'bash', md: 'markdown' };
  const grammarKey = grammarMap[lang] || lang;
  const grammar    = Prism.languages[grammarKey];

  if (grammar) {
    code.innerHTML = Prism.highlight(code.textContent, grammar, grammarKey);
  }
}

function initAll() {
  document.querySelectorAll('pre > code[class*="language-"]').forEach(code => {
    if (isCode(code)) initOne(code);
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initAll);
} else {
  initAll();
}

watchForNew('code', isCode, initOne);
