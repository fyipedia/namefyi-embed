/* namefyi-embed v1.0.0 | MIT | https://widget.namefyi.com */

// src/styles/modern.ts
function getModernCSS() {
  return `
/* Modern: gradient accent header */
.utilityfyi-header {
  background: linear-gradient(135deg, var(--accent), color-mix(in srgb, var(--accent) 70%, #000));
  border-radius: 12px 12px 0 0;
  padding: 16px 20px;
  display: flex;
  align-items: flex-start;
  gap: 14px;
}

.utilityfyi-header-title {
  font-size: 15px;
  font-weight: 700;
  color: #fff;
  margin: 0 0 4px 0;
  line-height: 1.3;
}

.utilityfyi-header-subtitle {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
}

/* Icon area \u2014 for unit symbol, clock, calendar, character */
.utilityfyi-img {
  width: 56px;
  height: 56px;
  border-radius: 8px;
  object-fit: cover;
  background: rgba(255, 255, 255, 0.15);
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  font-size: 24px;
  color: #fff;
  font-weight: 700;
}

.utilityfyi-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

/* Body area */
.utilityfyi-body {
  padding: 16px 20px;
}

/* Key-value rows \u2014 spacious */
.utilityfyi-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
  padding: 8px 0;
  border-bottom: 1px solid var(--border);
}

.utilityfyi-row:last-child {
  border-bottom: none;
}

.utilityfyi-label {
  font-size: 12px;
  font-weight: 500;
  color: var(--muted);
  white-space: nowrap;
  flex-shrink: 0;
  min-width: 30%;
}

.utilityfyi-value {
  font-size: 13px;
  color: var(--text);
  text-align: right;
  word-break: break-word;
}

/* Section title */
.utilityfyi-section-title {
  font-size: 11px;
  font-weight: 600;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin: 0 0 10px 0;
}

/* Tags \u2014 colored rounded badges */
.utilityfyi-tag {
  display: inline-block;
  font-size: 11px;
  font-weight: 600;
  padding: 3px 10px;
  border-radius: 12px;
  background: color-mix(in srgb, var(--accent) 12%, transparent);
  color: var(--accent);
  margin: 2px 3px 2px 0;
  letter-spacing: 0.02em;
}

/* Link */
.utilityfyi-link {
  font-size: 13px;
  font-weight: 500;
  color: var(--link);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.utilityfyi-link:hover {
  opacity: 0.8;
  text-decoration: underline;
}

.utilityfyi-link svg {
  width: 12px;
  height: 12px;
  flex-shrink: 0;
}

/* Footer link row */
.utilityfyi-footer-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 20px;
  border-top: 1px solid var(--border);
  gap: 8px;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Card shared: stats row (horizontal flex)
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.utilityfyi-stats-row { display:flex; gap:12px; padding:10px 18px; border-bottom:1px solid var(--border); }
.utilityfyi-stat { text-align:center; flex:1; }
.utilityfyi-stat-value { font-size:18px; font-weight:700; color:var(--accent); }
.utilityfyi-stat-label { font-size:9px; color:var(--muted); text-transform:uppercase; letter-spacing:0.03em; }

/* Card shared: stats grid (2x2 boxes) */
.utilityfyi-stats-grid { display:grid; grid-template-columns:1fr 1fr; gap:8px; padding:10px 18px; border-bottom:1px solid var(--border); }
.utilityfyi-stat-box { padding:6px 8px; background:color-mix(in srgb, var(--accent) 8%, var(--bg)); border-radius:8px; }
.utilityfyi-stat-box-label { font-size:9px; color:color-mix(in srgb, var(--accent) 80%, var(--text)); text-transform:uppercase; }
.utilityfyi-stat-box-value { font-size:13px; font-weight:700; color:var(--text); margin-top:1px; }

/* Card shared: key-value dotted rows */
.utilityfyi-kv-rows { padding:10px 18px; border-bottom:1px solid var(--border); }
.utilityfyi-kv-row { display:flex; justify-content:space-between; align-items:baseline; padding:4px 0; border-bottom:1px dotted var(--border); }
.utilityfyi-kv-row:last-child { border-bottom:none; }
.utilityfyi-kv-label { font-size:11px; color:var(--muted); }
.utilityfyi-kv-value { font-size:11px; font-weight:600; color:var(--text); }

/* Card shared: pill tags */
.utilityfyi-pills { display:flex; flex-wrap:wrap; gap:4px; padding:10px 18px; border-bottom:1px solid var(--border); }
.utilityfyi-pill { padding:2px 8px; border-radius:10px; font-size:11px; font-weight:500; background:color-mix(in srgb, var(--accent) 10%, var(--bg)); color:var(--accent); }

/* Card shared: section label */
.utilityfyi-section-label { font-size:10px; text-transform:uppercase; letter-spacing:0.05em; color:var(--accent); font-weight:600; margin-bottom:3px; }

/* Card shared: description */
.utilityfyi-desc { padding:10px 18px; font-size:14px; color:var(--muted); line-height:1.5; border-bottom:1px solid var(--border); }

/* Card shared: view link */
.utilityfyi-view-link { display:block; text-align:center; padding:10px 18px; border-bottom:1px solid var(--border); }
.utilityfyi-view-link a { color:var(--link); text-decoration:none; font-size:12px; font-weight:500; display:inline-flex; align-items:center; gap:4px; }
.utilityfyi-view-link a:hover { text-decoration:underline; }
.utilityfyi-view-link svg { width:12px; height:12px; }

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Domain: conversion result display
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.utilityfyi-result-display { padding:14px 18px; text-align:center; border-bottom:1px solid var(--border); }
.utilityfyi-result-big { font-size:28px; font-weight:800; color:var(--accent); line-height:1; font-family:ui-monospace, 'SF Mono', monospace; }
.utilityfyi-result-unit { font-size:12px; color:var(--muted); margin-top:4px; }

/* Domain: countdown display */
.utilityfyi-countdown { display:flex; gap:8px; justify-content:center; padding:14px 18px; border-bottom:1px solid var(--border); }
.utilityfyi-countdown-seg { text-align:center; }
.utilityfyi-countdown-num { font-size:24px; font-weight:800; color:var(--accent); font-family:ui-monospace, 'SF Mono', monospace; }
.utilityfyi-countdown-label { font-size:9px; color:var(--muted); text-transform:uppercase; letter-spacing:0.03em; }

/* Domain: live clock */
.utilityfyi-clock { padding:14px 18px; text-align:center; border-bottom:1px solid var(--border); }
.utilityfyi-clock-time { font-size:32px; font-weight:800; color:var(--accent); font-family:ui-monospace, 'SF Mono', monospace; letter-spacing:0.05em; }
.utilityfyi-clock-zone { font-size:11px; color:var(--muted); margin-top:2px; }

/* Domain: Five Elements (NameFYI) */
.utilityfyi-elements { display:flex; gap:6px; padding:10px 18px; border-bottom:1px solid var(--border); }
.utilityfyi-element { width:28px; height:28px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:14px; font-weight:700; }

/* Domain: conversion form */
.utilityfyi-convert-form { padding:12px 18px; border-bottom:1px solid var(--border); }
.utilityfyi-convert-row { display:flex; gap:6px; align-items:center; margin-bottom:6px; }
.utilityfyi-convert-row:last-child { margin-bottom:0; }
.utilityfyi-convert-input { flex:1; padding:6px 10px; border:1px solid var(--input-border); border-radius:6px; background:var(--input-bg); color:var(--text); font-size:13px; font-family:ui-monospace, 'SF Mono', monospace; outline:none; }
.utilityfyi-convert-input:focus { border-color:var(--input-focus); box-shadow:0 0 0 2px color-mix(in srgb, var(--input-focus) 20%, transparent); }
.utilityfyi-convert-label { font-size:11px; color:var(--muted); min-width:32px; text-align:right; }

/* Inline widget host */
:host([data-inline]) {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}
  `;
}

// src/styles/clean.ts
function getCleanCSS() {
  return `
/* Clean: subtle top accent border instead of gradient header */
.utilityfyi-header {
  border-top: 3px solid var(--accent);
  border-radius: 8px 8px 0 0;
  padding: 14px 18px;
  display: flex;
  align-items: flex-start;
  gap: 12px;
  background: color-mix(in srgb, var(--accent) 5%, var(--surface));
}

.utilityfyi-header-title {
  font-size: 15px;
  font-weight: 700;
  color: var(--text);
  margin: 0 0 4px 0;
  line-height: 1.3;
}

.utilityfyi-header-subtitle {
  font-size: 12px;
  color: var(--muted);
  margin: 0;
}

/* Icon area \u2014 smaller, muted */
.utilityfyi-img {
  width: 44px;
  height: 44px;
  border-radius: 8px;
  background: color-mix(in srgb, var(--accent) 12%, var(--bg));
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  font-size: 20px;
  color: var(--accent);
  font-weight: 700;
}

.utilityfyi-img img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 8px;
}

/* Body area */
.utilityfyi-body {
  padding: 14px 18px;
}

/* Key-value rows */
.utilityfyi-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 12px;
  padding: 6px 0;
  border-bottom: 1px solid var(--border);
}

.utilityfyi-row:last-child {
  border-bottom: none;
}

.utilityfyi-label {
  font-size: 12px;
  font-weight: 500;
  color: var(--muted);
  white-space: nowrap;
  flex-shrink: 0;
  min-width: 30%;
}

.utilityfyi-value {
  font-size: 13px;
  color: var(--text);
  text-align: right;
  word-break: break-word;
}

/* Section title */
.utilityfyi-section-title {
  font-size: 11px;
  font-weight: 600;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.06em;
  margin: 0 0 8px 0;
}

/* Tags \u2014 subtle pill badges */
.utilityfyi-tag {
  display: inline-block;
  font-size: 11px;
  font-weight: 500;
  padding: 2px 8px;
  border-radius: 4px;
  background: var(--badge-bg);
  color: var(--badge-text);
  margin: 2px 3px 2px 0;
}

/* Link */
.utilityfyi-link {
  font-size: 13px;
  font-weight: 500;
  color: var(--link);
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 4px;
}

.utilityfyi-link:hover {
  text-decoration: underline;
}

.utilityfyi-link svg {
  width: 12px;
  height: 12px;
  flex-shrink: 0;
}

/* Footer link row */
.utilityfyi-footer-link {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 18px;
  border-top: 1px solid var(--border);
  gap: 8px;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Card shared: stats row (horizontal flex)
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.utilityfyi-stats-row { display:flex; gap:10px; padding:8px 16px; border-bottom:1px solid var(--border); }
.utilityfyi-stat { text-align:center; flex:1; }
.utilityfyi-stat-value { font-size:16px; font-weight:700; color:var(--accent); }
.utilityfyi-stat-label { font-size:9px; color:var(--muted); text-transform:uppercase; letter-spacing:0.03em; }

/* Card shared: stats grid (2x2 boxes) */
.utilityfyi-stats-grid { display:grid; grid-template-columns:1fr 1fr; gap:6px; padding:8px 16px; border-bottom:1px solid var(--border); }
.utilityfyi-stat-box { padding:5px 7px; background:var(--surface); border-radius:6px; }
.utilityfyi-stat-box-label { font-size:9px; color:var(--muted); text-transform:uppercase; }
.utilityfyi-stat-box-value { font-size:12px; font-weight:700; color:var(--text); margin-top:1px; }

/* Card shared: key-value dotted rows */
.utilityfyi-kv-rows { padding:8px 16px; border-bottom:1px solid var(--border); }
.utilityfyi-kv-row { display:flex; justify-content:space-between; align-items:baseline; padding:3px 0; border-bottom:1px dotted var(--border); }
.utilityfyi-kv-row:last-child { border-bottom:none; }
.utilityfyi-kv-label { font-size:11px; color:var(--muted); }
.utilityfyi-kv-value { font-size:11px; font-weight:600; color:var(--text); }

/* Card shared: pill tags */
.utilityfyi-pills { display:flex; flex-wrap:wrap; gap:4px; padding:8px 16px; border-bottom:1px solid var(--border); }
.utilityfyi-pill { padding:2px 7px; border-radius:4px; font-size:11px; font-weight:500; background:var(--badge-bg); color:var(--badge-text); }

/* Card shared: section label */
.utilityfyi-section-label { font-size:10px; text-transform:uppercase; letter-spacing:0.05em; color:var(--accent); font-weight:600; margin-bottom:3px; }

/* Card shared: description */
.utilityfyi-desc { padding:8px 16px; font-size:13px; color:var(--muted); line-height:1.5; border-bottom:1px solid var(--border); }

/* Card shared: view link */
.utilityfyi-view-link { display:block; text-align:center; padding:8px 16px; border-bottom:1px solid var(--border); }
.utilityfyi-view-link a { color:var(--link); text-decoration:none; font-size:12px; font-weight:500; display:inline-flex; align-items:center; gap:4px; }
.utilityfyi-view-link a:hover { text-decoration:underline; }
.utilityfyi-view-link svg { width:12px; height:12px; }

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Domain: conversion result display
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.utilityfyi-result-display { padding:12px 16px; text-align:center; border-bottom:1px solid var(--border); }
.utilityfyi-result-big { font-size:24px; font-weight:700; color:var(--accent); line-height:1; font-family:ui-monospace, 'SF Mono', monospace; }
.utilityfyi-result-unit { font-size:11px; color:var(--muted); margin-top:3px; }

/* Domain: countdown display */
.utilityfyi-countdown { display:flex; gap:6px; justify-content:center; padding:12px 16px; border-bottom:1px solid var(--border); }
.utilityfyi-countdown-seg { text-align:center; }
.utilityfyi-countdown-num { font-size:20px; font-weight:700; color:var(--accent); font-family:ui-monospace, 'SF Mono', monospace; }
.utilityfyi-countdown-label { font-size:9px; color:var(--muted); text-transform:uppercase; letter-spacing:0.03em; }

/* Domain: live clock */
.utilityfyi-clock { padding:12px 16px; text-align:center; border-bottom:1px solid var(--border); }
.utilityfyi-clock-time { font-size:28px; font-weight:700; color:var(--accent); font-family:ui-monospace, 'SF Mono', monospace; letter-spacing:0.04em; }
.utilityfyi-clock-zone { font-size:11px; color:var(--muted); margin-top:2px; }

/* Domain: Five Elements (NameFYI) */
.utilityfyi-elements { display:flex; gap:5px; padding:8px 16px; border-bottom:1px solid var(--border); }
.utilityfyi-element { width:24px; height:24px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:12px; font-weight:700; }

/* Domain: conversion form */
.utilityfyi-convert-form { padding:10px 16px; border-bottom:1px solid var(--border); }
.utilityfyi-convert-row { display:flex; gap:6px; align-items:center; margin-bottom:5px; }
.utilityfyi-convert-row:last-child { margin-bottom:0; }
.utilityfyi-convert-input { flex:1; padding:5px 8px; border:1px solid var(--input-border); border-radius:4px; background:var(--input-bg); color:var(--text); font-size:12px; font-family:ui-monospace, 'SF Mono', monospace; outline:none; }
.utilityfyi-convert-input:focus { border-color:var(--input-focus); box-shadow:0 0 0 2px color-mix(in srgb, var(--input-focus) 20%, transparent); }
.utilityfyi-convert-label { font-size:10px; color:var(--muted); min-width:28px; text-align:right; }

/* Clean: copy button \u2014 minimal style */
.utilityfyi-copy-btn {
  background: var(--surface);
  color: var(--muted);
  border: 1px solid var(--border);
  border-radius: 4px;
  padding: 3px 8px;
  font-size: 11px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 3px;
  transition: all 0.15s;
  font-family: inherit;
}

.utilityfyi-copy-btn:hover {
  background: var(--copy-bg);
  border-color: var(--input-focus);
  color: var(--text);
}

.utilityfyi-copy-btn svg {
  width: 10px;
  height: 10px;
}

/* Inline widget host */
:host([data-inline]) {
  display: inline-flex;
  align-items: center;
  gap: 4px;
}
  `;
}

// src/themes.ts
function getStyleCSS(style) {
  switch (style) {
    case "clean":
      return getCleanCSS();
    case "modern":
    default:
      return getModernCSS();
  }
}
function getThemeCSS(accent, style = "modern") {
  return `
:host {
  display: block;
  --site-accent: ${accent};
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Size variants
   compact=280px, default=420px, large=720px
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.utilityfyi-widget {
  box-sizing: border-box;
  min-width: 240px;
  max-width: 420px;
  border-radius: 8px;
  overflow: hidden;
  border: 1px solid var(--border);
  background: var(--bg);
  color: var(--text);
  font-size: 14px;
  line-height: 1.6;
  transition: border-color 0.2s;
  font-family: system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif;
}

.utilityfyi-widget:hover {
  border-color: color-mix(in srgb, var(--accent) 40%, var(--border));
}

.utilityfyi-widget[data-size="compact"] {
  max-width: 280px;
  font-size: 13px;
}

.utilityfyi-widget[data-size="default"] {
  max-width: 420px;
}

.utilityfyi-widget[data-size="large"] {
  max-width: 720px;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Light theme (default)
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.utilityfyi-widget[data-theme="light"] {
  --bg: #fff;
  --text: #1e293b;
  --border: #e2e8f0;
  --accent: var(--site-accent);
  --muted: #64748b;
  --surface: #f8fafc;
  --badge-bg: #f1f5f9;
  --badge-text: #374151;
  --link: var(--site-accent);
  --copy-bg: #f3f4f6;
  --copy-hover: #e5e7eb;
  --input-bg: #ffffff;
  --input-border: #d1d5db;
  --input-focus: var(--site-accent);
  --shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Dark theme
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.utilityfyi-widget[data-theme="dark"] {
  --bg: #1a1a1a;
  --text: #f3f4f6;
  --border: #374151;
  --accent: var(--site-accent);
  --muted: #9ca3af;
  --surface: #111827;
  --badge-bg: #374151;
  --badge-text: #d1d5db;
  --link: color-mix(in srgb, var(--site-accent) 80%, #fff);
  --copy-bg: #374151;
  --copy-hover: #4b5563;
  --input-bg: #111111;
  --input-border: #4b5563;
  --input-focus: var(--site-accent);
  --shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Sepia theme
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.utilityfyi-widget[data-theme="sepia"] {
  --bg: #f5f0e8;
  --text: #3d3529;
  --border: #d4c5a9;
  --accent: var(--site-accent);
  --muted: #8b7d6b;
  --surface: #ede8df;
  --badge-bg: #e8e0d0;
  --badge-text: #5c4f3d;
  --link: color-mix(in srgb, var(--site-accent) 70%, #3d3529);
  --copy-bg: #e8e0d0;
  --copy-hover: #ddd4c0;
  --input-bg: #f5f0e8;
  --input-border: #c4b49a;
  --input-focus: var(--site-accent);
  --shadow: 0 1px 3px rgba(61, 53, 41, 0.12);
}

.utilityfyi-widget *, .utilityfyi-widget *::before, .utilityfyi-widget *::after {
  box-sizing: border-box;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Loading state
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.utilityfyi-loading {
  padding: 20px 16px;
  text-align: center;
  color: var(--muted);
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.utilityfyi-spinner {
  width: 16px;
  height: 16px;
  border: 2px solid var(--border);
  border-top-color: var(--accent);
  border-radius: 50%;
  animation: utilityfyi-spin 0.7s linear infinite;
  display: inline-block;
  flex-shrink: 0;
}

@keyframes utilityfyi-spin {
  to { transform: rotate(360deg); }
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Error state
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.utilityfyi-error {
  padding: 16px;
  color: var(--muted);
  font-size: 13px;
  text-align: center;
}

.utilityfyi-error p {
  margin: 0 0 8px 0;
}

.utilityfyi-error a {
  color: var(--link);
  text-decoration: none;
}

.utilityfyi-error a:hover {
  text-decoration: underline;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Badge (generic)
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.utilityfyi-badge {
  display: inline-block;
  font-size: 10px;
  font-weight: 600;
  padding: 2px 7px;
  border-radius: 4px;
  background: var(--badge-bg);
  color: var(--badge-text);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Search inputs
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.utilityfyi-search-wrap {
  padding: 12px 16px;
}

.utilityfyi-search-form {
  display: flex;
  gap: 8px;
}

.utilityfyi-search-input {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid var(--input-border);
  border-radius: 6px;
  background: var(--input-bg);
  color: var(--text);
  font-size: 13px;
  font-family: inherit;
  outline: none;
  transition: border-color 0.15s;
}

.utilityfyi-search-input:focus {
  border-color: var(--input-focus);
  box-shadow: 0 0 0 2px color-mix(in srgb, var(--input-focus) 20%, transparent);
}

.utilityfyi-search-input::placeholder {
  color: var(--muted);
}

.utilityfyi-search-btn {
  background: var(--accent);
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 8px 14px;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  font-family: inherit;
  transition: opacity 0.15s;
  white-space: nowrap;
}

.utilityfyi-search-btn:hover {
  opacity: 0.9;
}

/* Search results list */
.utilityfyi-search-results {
  padding: 0 16px 12px;
}

.utilityfyi-result-item {
  padding: 8px 0;
  border-bottom: 1px solid var(--border);
}

.utilityfyi-result-item:last-child {
  border-bottom: none;
}

.utilityfyi-result-title {
  font-size: 13px;
  font-weight: 600;
  color: var(--text);
  margin: 0 0 3px 0;
}

.utilityfyi-result-meta {
  font-size: 11px;
  color: var(--muted);
  display: flex;
  align-items: center;
  gap: 6px;
  flex-wrap: wrap;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Powered by footer
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.utilityfyi-powered {
  display: block;
  text-align: center;
  padding: 8px 16px;
  font-size: 11px;
  color: var(--muted);
  border-top: 1px solid var(--border);
}

.utilityfyi-powered a {
  color: var(--link);
  text-decoration: none;
  font-weight: 500;
}

.utilityfyi-powered a:hover {
  text-decoration: underline;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Copy button (base \u2014 overridden in clean)
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.utilityfyi-copy-btn {
  background: var(--copy-bg);
  color: var(--text);
  border: none;
  border-radius: 5px;
  padding: 4px 9px;
  font-size: 11px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 4px;
  transition: background 0.15s;
  font-family: inherit;
}

.utilityfyi-copy-btn:hover {
  background: var(--copy-hover);
}

.utilityfyi-copy-btn svg {
  width: 11px;
  height: 11px;
}

/* \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500
   Monospace (for values, conversions)
   \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */
.utilityfyi-mono {
  font-family: ui-monospace, 'SF Mono', 'Cascadia Code', 'Consolas', monospace;
  font-size: 13px;
}

${getStyleCSS(style)}
  `;
}

// src/shadow.ts
function createShadow(el, config) {
  const widgetStyle = el.dataset.styleVariant || "modern";
  const shadow = el.attachShadow({ mode: "open" });
  const style = document.createElement("style");
  style.textContent = getThemeCSS(config.accent, widgetStyle);
  shadow.appendChild(style);
  return shadow;
}
function resolveTheme(el) {
  const raw = el.dataset.theme || "light";
  if (raw === "auto") {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  return raw;
}
function createWidgetRoot(shadow, el, extraClass) {
  const theme = resolveTheme(el);
  const size = el.dataset.size || "default";
  const div = document.createElement("div");
  div.className = ["utilityfyi-widget", extraClass].filter(Boolean).join(" ");
  div.setAttribute("data-theme", theme);
  div.setAttribute("data-size", size);
  shadow.appendChild(div);
  if (el.dataset.theme === "auto") {
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
      div.setAttribute("data-theme", e.matches ? "dark" : "light");
    });
  }
  return div;
}
function renderLoading(container) {
  container.innerHTML = `
    <div class="utilityfyi-loading">
      <span class="utilityfyi-spinner"></span>
      Loading\u2026
    </div>
  `;
}
function renderError(container, message, config) {
  container.innerHTML = `
    <div class="utilityfyi-error">
      <p>${message}</p>
      <a href="https://${config.domain}" target="_blank" rel="noopener">
        Visit ${config.name}
      </a>
    </div>
  `;
}
var externalLinkIcon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>`;
function poweredByHTML(config) {
  return `<span class="utilityfyi-powered">Powered by <a href="https://${config.domain}" target="_blank" rel="noopener">${config.name}</a></span>`;
}

// src/api.ts
var CACHE_TTL_MS = 5 * 60 * 1e3;
function cacheKey(url) {
  return `utilityfyi_embed_${url}`;
}
function getFromCache(url) {
  try {
    const raw = sessionStorage.getItem(cacheKey(url));
    if (!raw) return null;
    const entry = JSON.parse(raw);
    if (Date.now() - entry.ts > CACHE_TTL_MS) {
      sessionStorage.removeItem(cacheKey(url));
      return null;
    }
    return entry.data;
  } catch (e) {
    return null;
  }
}
function setInCache(url, data) {
  try {
    const entry = { data, ts: Date.now() };
    sessionStorage.setItem(cacheKey(url), JSON.stringify(entry));
  } catch (e) {
  }
}
async function fetchAPI(baseUrl, path, params) {
  const base = baseUrl.endsWith("/") ? baseUrl : baseUrl + "/";
  const relativePath = path.startsWith("/") ? path.slice(1) : path;
  const url = new URL(relativePath, base);
  if (params) {
    Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
  }
  const urlStr = url.toString();
  const cached = getFromCache(urlStr);
  if (cached !== null) return cached;
  const response = await fetch(urlStr, {
    headers: { Accept: "application/json" }
  });
  if (!response.ok) {
    throw new Error(`API error ${response.status}: ${urlStr}`);
  }
  const data = await response.json();
  setInCache(urlStr, data);
  return data;
}

// src/cards/shared.ts
function esc(s) {
  if (!s) return "";
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function kvRow(label, value) {
  if (value === null || value === void 0 || value === "") return "";
  return `<div class="utilityfyi-kv-row"><span class="utilityfyi-kv-label">${esc(label)}</span><span class="utilityfyi-kv-value">${esc(String(value))}</span></div>`;
}
function badge(text, bg, fg = "#fff") {
  return `<span class="utilityfyi-badge" style="background:${bg};color:${fg}">${esc(text)}</span>`;
}
function viewLink(url, label, config) {
  return `<div class="utilityfyi-view-link"><a href="${esc(url)}" target="_blank" rel="noopener">${esc(label)} ${externalLinkIcon}</a></div>`;
}
function cardFooter(url, label, config) {
  return `${viewLink(url, label, config)}${poweredByHTML(config)}`;
}
function renderGlossaryCard(data, config) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i;
  const name = String((_c = (_b = (_a = data.name) != null ? _a : data.term) != null ? _b : data.slug) != null ? _c : "");
  const definition = String((_d = data.definition) != null ? _d : "");
  const extended = String((_f = (_e = data.extended_definition) != null ? _e : data.extended_description) != null ? _f : "");
  const categoryLabel = String((_h = (_g = data.category_name) != null ? _g : data.category) != null ? _h : "");
  const slug = String((_i = data.slug) != null ? _i : "");
  const termUrl = `https://${config.domain}/glossary/${esc(slug)}/`;
  const glossaryUrl = `https://${config.domain}/glossary/`;
  const relatedTerms = data.related_terms;
  const relatedPills = relatedTerms && relatedTerms.length > 0 ? `<div class="utilityfyi-pills">${relatedTerms.map(
    (rt) => `<a class="utilityfyi-pill" href="https://${config.domain}/glossary/${esc(rt.slug)}/" target="_blank" rel="noopener" style="text-decoration:none;color:inherit;">${esc(rt.name)}</a>`
  ).join("")}</div>` : "";
  return `
    <div class="utilityfyi-header">
      <div>
        <div class="utilityfyi-header-title">${esc(name)}</div>
        ${categoryLabel ? `<span class="utilityfyi-badge" style="background:${config.accent};color:#fff;margin-top:4px;display:inline-block;">${esc(categoryLabel)}</span>` : ""}
      </div>
    </div>
    <div class="utilityfyi-body" style="font-size:0.9rem;line-height:1.5;">
      ${esc(definition)}
    </div>
    ${extended ? `<div style="padding:0 18px 10px;font-size:0.85rem;color:var(--muted);line-height:1.5;">${esc(extended)}</div>` : ""}
    ${relatedPills}
    <div class="utilityfyi-view-link"><a href="${termUrl}" target="_blank" rel="noopener">${esc(name)} ${externalLinkIcon}</a></div>
    <div class="utilityfyi-view-link"><a href="${glossaryUrl}" target="_blank" rel="noopener">Full glossary on ${esc(config.name)} ${externalLinkIcon}</a></div>
    ${poweredByHTML(config)}
  `;
}
function renderGuideCard(data, config) {
  var _a, _b, _c, _d, _e, _f, _g;
  const title = String((_c = (_b = (_a = data.title) != null ? _a : data.name) != null ? _b : data.slug) != null ? _c : "");
  const excerpt = String((_f = (_e = (_d = data.excerpt) != null ? _d : data.description) != null ? _e : data.summary) != null ? _f : "");
  const slug = String((_g = data.slug) != null ? _g : "");
  const guideUrl = `https://${config.domain}/guides/${esc(slug)}/`;
  return `
    <div class="utilityfyi-header">
      <div>
        <div class="utilityfyi-header-title">${esc(title)}</div>
        <div class="utilityfyi-header-subtitle">Guide</div>
      </div>
    </div>
    ${excerpt ? `<div class="utilityfyi-desc">${esc(excerpt)}</div>` : ""}
    ${cardFooter(guideUrl, `Read on ${config.name}`, config)}
  `;
}
function renderFAQCard(faqs, config) {
  if (!faqs || !faqs.length) return `<div class="utilityfyi-body">No FAQs available.</div>${poweredByHTML(config)}`;
  const items = faqs.map(
    (faq) => `
    <details class="utilityfyi-faq-item" style="border-bottom:1px solid var(--border);padding:10px 18px;">
      <summary style="cursor:pointer;font-size:0.9rem;font-weight:600;color:var(--text);list-style:none;display:flex;justify-content:space-between;align-items:center;">
        ${esc(faq.question)}
        <span style="flex-shrink:0;margin-left:8px;font-size:0.75rem;color:var(--muted);">+</span>
      </summary>
      <div style="margin-top:8px;font-size:0.85rem;color:var(--muted);line-height:1.5;">
        ${esc(faq.answer)}
      </div>
    </details>
  `
  ).join("");
  return `
    <div class="utilityfyi-header">
      <div>
        <div class="utilityfyi-header-title">Frequently Asked Questions</div>
        <div class="utilityfyi-header-subtitle">${faqs.length} questions</div>
      </div>
    </div>
    ${items}
    ${poweredByHTML(config)}
  `;
}

// src/compute/units.ts
var UNITS = {
  // LENGTH (base: meter)
  "meter": ["m", "length", 1],
  "kilometer": ["km", "length", 1e3],
  "centimeter": ["cm", "length", 0.01],
  "millimeter": ["mm", "length", 1e-3],
  "micrometer": ["\xB5m", "length", 1e-6],
  "nanometer": ["nm", "length", 1e-9],
  "mile": ["mi", "length", 1609.344],
  "yard": ["yd", "length", 0.9144],
  "foot": ["ft", "length", 0.3048],
  "inch": ["in", "length", 0.0254],
  "nautical-mile": ["nmi", "length", 1852],
  "light-year": ["ly", "length", 9460730472580800],
  "fathom": ["ftm", "length", 1.8288],
  "furlong": ["fur", "length", 201.168],
  "chain": ["ch", "length", 20.1168],
  "rod": ["rd", "length", 5.0292],
  "league": ["lea", "length", 4828.032],
  "thou": ["th", "length", 254e-7],
  "parsec": ["pc", "length", 30856775814671900],
  "astronomical-unit": ["au", "length", 149597870700],
  // WEIGHT (base: kilogram)
  "kilogram": ["kg", "weight", 1],
  "gram": ["g", "weight", 1e-3],
  "milligram": ["mg", "weight", 1e-6],
  "microgram": ["\xB5g", "weight", 1e-9],
  "metric-ton": ["t", "weight", 1e3],
  "pound": ["lb", "weight", 0.45359237],
  "ounce": ["oz", "weight", 0.028349523125],
  "stone": ["st", "weight", 6.35029318],
  "short-ton": ["ton", "weight", 907.18474],
  "long-ton": ["long tn", "weight", 1016.0469088],
  "carat": ["ct", "weight", 2e-4],
  "grain": ["gr", "weight", 6479891e-11],
  "troy-ounce": ["oz t", "weight", 0.0311034768],
  "slug": ["slug", "weight", 14.593903],
  // TEMPERATURE (base: kelvin) — toBase=0, handled by temperature.ts
  "celsius": ["\xB0C", "temperature", 0],
  "fahrenheit": ["\xB0F", "temperature", 0],
  "kelvin": ["K", "temperature", 0],
  "rankine": ["\xB0R", "temperature", 0],
  // VOLUME (base: liter)
  "liter": ["L", "volume", 1],
  "milliliter": ["mL", "volume", 1e-3],
  "cubic-meter": ["m\xB3", "volume", 1e3],
  "cubic-centimeter": ["cm\xB3", "volume", 1e-3],
  "gallon-us": ["gal", "volume", 3.785411784],
  "gallon-uk": ["gal", "volume", 4.54609],
  "quart-us": ["qt", "volume", 0.946352946],
  "pint-us": ["pt", "volume", 0.473176473],
  "cup-us": ["cup", "volume", 0.2365882365],
  "fluid-ounce-us": ["fl oz", "volume", 0.0295735295625],
  "tablespoon-us": ["tbsp", "volume", 0.01478676478125],
  "teaspoon-us": ["tsp", "volume", 0.00492892159375],
  "quart-uk": ["qt", "volume", 1.1365225],
  "pint-uk": ["pt", "volume", 0.56826125],
  "fluid-ounce-uk": ["fl oz", "volume", 0.0284130625],
  "cubic-inch": ["in\xB3", "volume", 0.016387064],
  "cubic-foot": ["ft\xB3", "volume", 28.316846592],
  "cubic-yard": ["yd\xB3", "volume", 764.554857984],
  "barrel-oil": ["bbl", "volume", 158.987294928],
  // AREA (base: square meter)
  "square-meter": ["m\xB2", "area", 1],
  "square-kilometer": ["km\xB2", "area", 1e6],
  "square-centimeter": ["cm\xB2", "area", 1e-4],
  "square-millimeter": ["mm\xB2", "area", 1e-6],
  "hectare": ["ha", "area", 1e4],
  "acre": ["ac", "area", 4046.8564224],
  "square-mile": ["mi\xB2", "area", 2589988110336e-6],
  "square-yard": ["yd\xB2", "area", 0.83612736],
  "square-foot": ["ft\xB2", "area", 0.09290304],
  "square-inch": ["in\xB2", "area", 64516e-8],
  "pyeong": ["\uD3C9", "area", 3.305785],
  "tsubo": ["\u5764", "area", 3.305785],
  // SPEED (base: meter per second)
  "meter-per-second": ["m/s", "speed", 1],
  "kilometer-per-hour": ["km/h", "speed", 0.2777777777777778],
  "mile-per-hour": ["mph", "speed", 0.44704],
  "knot": ["kn", "speed", 0.5144444444444444],
  "foot-per-second": ["ft/s", "speed", 0.3048],
  "mach": ["Ma", "speed", 343],
  "speed-of-light": ["c", "speed", 299792458],
  // TIME (base: second)
  "second": ["s", "time", 1],
  "millisecond": ["ms", "time", 1e-3],
  "microsecond": ["\xB5s", "time", 1e-6],
  "nanosecond": ["ns", "time", 1e-9],
  "minute": ["min", "time", 60],
  "hour": ["h", "time", 3600],
  "day": ["d", "time", 86400],
  "week": ["wk", "time", 604800],
  "month": ["mo", "time", 2629746],
  "year": ["yr", "time", 31556952],
  "decade": ["dec", "time", 315569520],
  "century": ["c", "time", 3155695200],
  "millennium": ["ky", "time", 31556952e3],
  // DATA STORAGE (base: byte)
  "byte": ["B", "data-storage", 1],
  "kilobyte": ["KB", "data-storage", 1e3],
  "megabyte": ["MB", "data-storage", 1e6],
  "gigabyte": ["GB", "data-storage", 1e9],
  "terabyte": ["TB", "data-storage", 1e12],
  "petabyte": ["PB", "data-storage", 1e15],
  "exabyte": ["EB", "data-storage", 1e18],
  "kibibyte": ["KiB", "data-storage", 1024],
  "mebibyte": ["MiB", "data-storage", 1048576],
  "gibibyte": ["GiB", "data-storage", 1073741824],
  "tebibyte": ["TiB", "data-storage", 1099511627776],
  "pebibyte": ["PiB", "data-storage", 1125899906842624],
  "bit": ["b", "data-storage", 0.125],
  "kilobit": ["kb", "data-storage", 125],
  "megabit": ["Mb", "data-storage", 125e3],
  "gigabit": ["Gb", "data-storage", 125e6],
  // PRESSURE (base: pascal)
  "pascal": ["Pa", "pressure", 1],
  "kilopascal": ["kPa", "pressure", 1e3],
  "megapascal": ["MPa", "pressure", 1e6],
  "bar": ["bar", "pressure", 1e5],
  "millibar": ["mbar", "pressure", 100],
  "atmosphere": ["atm", "pressure", 101325],
  "torr": ["Torr", "pressure", 133.3223684211],
  "psi": ["psi", "pressure", 6894.757293168],
  "mmhg": ["mmHg", "pressure", 133.322387415],
  // ENERGY (base: joule)
  "joule": ["J", "energy", 1],
  "kilojoule": ["kJ", "energy", 1e3],
  "megajoule": ["MJ", "energy", 1e6],
  "calorie": ["cal", "energy", 4.184],
  "kilocalorie": ["kcal", "energy", 4184],
  "watt-hour": ["Wh", "energy", 3600],
  "kilowatt-hour": ["kWh", "energy", 36e5],
  "btu": ["BTU", "energy", 1055.05585262],
  "electronvolt": ["eV", "energy", 1602176634e-28],
  "therm": ["thm", "energy", 105505585262e-3],
  "foot-pound": ["ft\xB7lbf", "energy", 1.3558179483314],
  // FREQUENCY (base: hertz)
  "hertz": ["Hz", "frequency", 1],
  "kilohertz": ["kHz", "frequency", 1e3],
  "megahertz": ["MHz", "frequency", 1e6],
  "gigahertz": ["GHz", "frequency", 1e9],
  "terahertz": ["THz", "frequency", 1e12],
  "rpm": ["rpm", "frequency", 0.0166666666666667],
  // FORCE (base: newton)
  "newton": ["N", "force", 1],
  "kilonewton": ["kN", "force", 1e3],
  "meganewton": ["MN", "force", 1e6],
  "dyne": ["dyn", "force", 1e-5],
  "pound-force": ["lbf", "force", 4.4482216152605],
  "kilogram-force": ["kgf", "force", 9.80665],
  "kip": ["kip", "force", 4448.2216152605],
  // POWER (base: watt)
  "watt": ["W", "power", 1],
  "kilowatt": ["kW", "power", 1e3],
  "megawatt": ["MW", "power", 1e6],
  "gigawatt": ["GW", "power", 1e9],
  "horsepower": ["hp", "power", 745.69987158227],
  "horsepower-metric": ["PS", "power", 735.49875],
  "btu-per-hour": ["BTU/h", "power", 0.29307107017222],
  "foot-pound-per-second": ["ft\xB7lbf/s", "power", 1.3558179483314],
  "ton-of-refrigeration": ["TR", "power", 3516.8528420667],
  // ANGLE (base: radian)
  "radian": ["rad", "angle", 1],
  "degree": ["\xB0", "angle", 0.0174532925199433],
  "gradian": ["gon", "angle", 0.015707963267949],
  "arcminute": ["\u2032", "angle", 290888208665722e-18],
  "arcsecond": ["\u2033", "angle", 484813681109536e-20],
  "milliradian": ["mrad", "angle", 1e-3],
  "turn": ["tr", "angle", 6.28318530717959],
  "revolution": ["rev", "angle", 6.28318530717959],
  // FUEL ECONOMY (base: km per liter)
  "km-per-liter": ["km/L", "fuel-economy", 1],
  "mile-per-gallon-us": ["mpg", "fuel-economy", 0.425143707],
  "mile-per-gallon-uk": ["mpg", "fuel-economy", 0.354006044],
  "liter-per-100km": ["L/100km", "fuel-economy", 0],
  // inverse — special handling
  // DATA TRANSFER (base: bit per second)
  "bit-per-second": ["bps", "data-transfer", 1],
  "kilobit-per-second": ["kbps", "data-transfer", 1e3],
  "megabit-per-second": ["Mbps", "data-transfer", 1e6],
  "gigabit-per-second": ["Gbps", "data-transfer", 1e9],
  "terabit-per-second": ["Tbps", "data-transfer", 1e12],
  "byte-per-second": ["B/s", "data-transfer", 8],
  "kilobyte-per-second": ["KB/s", "data-transfer", 8e3],
  "megabyte-per-second": ["MB/s", "data-transfer", 8e6],
  "gigabyte-per-second": ["GB/s", "data-transfer", 8e9],
  // DENSITY (base: kg per cubic meter)
  "kg-per-cubic-meter": ["kg/m\xB3", "density", 1],
  "g-per-cubic-centimeter": ["g/cm\xB3", "density", 1e3],
  "kg-per-liter": ["kg/L", "density", 1e3],
  "lb-per-cubic-foot": ["lb/ft\xB3", "density", 16.018463374],
  "lb-per-cubic-inch": ["lb/in\xB3", "density", 27679.904710191],
  "lb-per-gallon-us": ["lb/gal", "density", 119.826427317],
  // TORQUE (base: newton meter)
  "newton-meter": ["N\xB7m", "torque", 1],
  "kilonewton-meter": ["kN\xB7m", "torque", 1e3],
  "foot-pound-force": ["ft\xB7lbf", "torque", 1.3558179483314],
  "inch-pound-force": ["in\xB7lbf", "torque", 0.1129848290276167],
  "kilogram-force-meter": ["kgf\xB7m", "torque", 9.80665],
  "dyne-centimeter": ["dyn\xB7cm", "torque", 1e-7],
  // COOKING (base: milliliter)
  "cooking-milliliter": ["mL", "cooking", 1],
  "cooking-liter": ["L", "cooking", 1e3],
  "cooking-teaspoon": ["tsp", "cooking", 4.92892],
  "cooking-tablespoon": ["tbsp", "cooking", 14.7868],
  "cooking-fluid-ounce": ["fl oz", "cooking", 29.5735],
  "cooking-cup": ["cup", "cooking", 236.588],
  "cooking-pint": ["pt", "cooking", 473.176],
  "cooking-quart": ["qt", "cooking", 946.353],
  "cooking-gallon": ["gal", "cooking", 3785.41],
  "cooking-drop": ["drop", "cooking", 0.05],
  "cooking-dash": ["dash", "cooking", 0.616115],
  "cooking-pinch": ["pinch", "cooking", 0.308058],
  // TYPOGRAPHY (base: pixel at 96 DPI)
  "pixel": ["px", "typography", 1],
  "point": ["pt", "typography", 1.333333333333333],
  "pica": ["pc", "typography", 16],
  "em": ["em", "typography", 16],
  "rem": ["rem", "typography", 16],
  "inch-type": ["in", "typography", 96],
  "centimeter-type": ["cm", "typography", 37.7952755905512],
  "millimeter-type": ["mm", "typography", 3.77952755905512]
};
var CATEGORIES = {};
(function buildCategories() {
  for (const [slug, [, cat]] of Object.entries(UNITS)) {
    if (!CATEGORIES[cat]) {
      CATEGORIES[cat] = { name: cat.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()), units: [] };
    }
    CATEGORIES[cat].units.push(slug);
  }
  const names = {
    "length": "Length",
    "weight": "Weight / Mass",
    "temperature": "Temperature",
    "volume": "Volume",
    "area": "Area",
    "speed": "Speed",
    "time": "Time",
    "data-storage": "Data Storage",
    "pressure": "Pressure",
    "energy": "Energy",
    "frequency": "Frequency",
    "force": "Force",
    "power": "Power",
    "angle": "Angle",
    "fuel-economy": "Fuel Economy",
    "data-transfer": "Data Transfer Rate",
    "density": "Density",
    "torque": "Torque",
    "cooking": "Cooking",
    "typography": "Typography"
  };
  for (const [k, v] of Object.entries(names)) {
    if (CATEGORIES[k]) CATEGORIES[k].name = v;
  }
})();
function convert(value, from, to) {
  const fromUnit = UNITS[from];
  const toUnit = UNITS[to];
  if (!fromUnit || !toUnit) return null;
  if (fromUnit[1] !== toUnit[1]) return null;
  const category = fromUnit[1];
  if (category === "temperature") {
    return convertTemperature(value, from, to);
  }
  if (category === "fuel-economy") {
    return convertFuelEconomy(value, from, to);
  }
  const fromFactor = fromUnit[2];
  const toFactor = toUnit[2];
  if (fromFactor === 0 || toFactor === 0) return null;
  return value * fromFactor / toFactor;
}
function convertTemperature(value, from, to) {
  let kelvin;
  switch (from) {
    case "celsius":
      kelvin = value + 273.15;
      break;
    case "fahrenheit":
      kelvin = (value - 32) * 5 / 9 + 273.15;
      break;
    case "kelvin":
      kelvin = value;
      break;
    case "rankine":
      kelvin = value * 5 / 9;
      break;
    default:
      return value;
  }
  switch (to) {
    case "celsius":
      return kelvin - 273.15;
    case "fahrenheit":
      return (kelvin - 273.15) * 9 / 5 + 32;
    case "kelvin":
      return kelvin;
    case "rankine":
      return kelvin * 9 / 5;
    default:
      return value;
  }
}
function convertFuelEconomy(value, from, to) {
  var _a, _b;
  let kmPerL;
  if (from === "liter-per-100km") {
    kmPerL = value === 0 ? 0 : 100 / value;
  } else {
    const factor = ((_a = UNITS[from]) == null ? void 0 : _a[2]) || 1;
    kmPerL = value * factor;
  }
  if (to === "liter-per-100km") {
    return kmPerL === 0 ? 0 : 100 / kmPerL;
  }
  const toFactor = ((_b = UNITS[to]) == null ? void 0 : _b[2]) || 1;
  return toFactor === 0 ? 0 : kmPerL / toFactor;
}
function smartRound(value) {
  if (Number.isNaN(value) || !Number.isFinite(value)) return "0";
  const abs = Math.abs(value);
  if (abs === 0) return "0";
  if (abs >= 1e6) return value.toExponential(4);
  if (abs >= 100) return value.toFixed(2);
  if (abs >= 1) return value.toFixed(4);
  if (abs >= 1e-3) return value.toFixed(6);
  return value.toExponential(4);
}
function getSymbol(slug) {
  var _a;
  return ((_a = UNITS[slug]) == null ? void 0 : _a[0]) || slug;
}
function getCategory(slug) {
  var _a;
  return ((_a = UNITS[slug]) == null ? void 0 : _a[1]) || "";
}

// src/cards/unit.ts
function renderUnitCard(data, config) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
  const name = String((_b = (_a = data.name) != null ? _a : data.slug) != null ? _b : "");
  const slug = String((_c = data.slug) != null ? _c : "");
  const symbol = String((_e = (_d = data.symbol) != null ? _d : getSymbol(slug)) != null ? _e : "");
  const categorySlug = String((_h = (_g = (_f = data.category_slug) != null ? _f : data.category) != null ? _g : getCategory(slug)) != null ? _h : "");
  const categoryName = String((_i = data.category_name) != null ? _i : categorySlug.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()));
  const description = String((_k = (_j = data.description) != null ? _j : data.definition) != null ? _k : "");
  let conversionPreview = "";
  const unitEntry = UNITS[slug];
  if (unitEntry) {
    const cat = unitEntry[1];
    const baseSlug = (_l = Object.entries(UNITS).find(
      ([, [, c, factor]]) => c === cat && factor === 1
    )) == null ? void 0 : _l[0];
    if (baseSlug && baseSlug !== slug) {
      const result = convert(1, slug, baseSlug);
      if (result !== null) {
        conversionPreview = `1 ${symbol} = ${smartRound(result)} ${getSymbol(baseSlug)}`;
      }
    }
  }
  const unitUrl = `https://${config.domain}/${esc(categorySlug)}/unit/${esc(slug)}/`;
  return `
    <div class="utilityfyi-header">
      <div class="utilityfyi-img">${esc(symbol)}</div>
      <div>
        <div class="utilityfyi-header-title">${esc(name)}</div>
        <div class="utilityfyi-header-subtitle">${esc(categoryName)}</div>
      </div>
    </div>
    ${description ? `<div class="utilityfyi-desc">${esc(description)}</div>` : ""}
    <div class="utilityfyi-kv-rows">
      ${kvRow("Symbol", symbol)}
      ${kvRow("Category", categoryName)}
      ${conversionPreview ? kvRow("Conversion", conversionPreview) : ""}
    </div>
    <div class="utilityfyi-view-link"><a href="${unitUrl}" target="_blank" rel="noopener">View on ${esc(config.name)} ${externalLinkIcon}</a></div>
    ${poweredByHTML(config)}
  `;
}

// src/compute/timezone.ts
function formatOffset(hours) {
  if (hours === 0) return "UTC";
  const sign = hours >= 0 ? "+" : "-";
  const abs = Math.abs(hours);
  const h = Math.floor(abs);
  const m = Math.round((abs - h) * 60);
  return `UTC${sign}${String(h).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}
function cityTime(utcOffset) {
  const now = /* @__PURE__ */ new Date();
  const utcMs = now.getTime() + now.getTimezoneOffset() * 6e4;
  return new Date(utcMs + utcOffset * 36e5);
}
function formatTime(date, use24h = true, showSecs = true) {
  let h = date.getHours();
  const m = String(date.getMinutes()).padStart(2, "0");
  const s = String(date.getSeconds()).padStart(2, "0");
  if (use24h) {
    const hStr2 = String(h).padStart(2, "0");
    return showSecs ? `${hStr2}:${m}:${s}` : `${hStr2}:${m}`;
  }
  const ampm = h >= 12 ? "PM" : "AM";
  h = h % 12 || 12;
  const hStr = String(h);
  return showSecs ? `${hStr}:${m}:${s} ${ampm}` : `${hStr}:${m} ${ampm}`;
}
function formatDate(date) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
}
function formatDayOfWeek(date) {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  return days[date.getDay()];
}
function isDaytime(date) {
  const h = date.getHours();
  return h >= 6 && h < 18;
}

// src/cards/city.ts
function renderCityCard(data, config) {
  var _a, _b, _c, _d, _e, _f;
  const name = String((_b = (_a = data.name) != null ? _a : data.slug) != null ? _b : "");
  const slug = String((_c = data.slug) != null ? _c : "");
  const countryName = String((_d = data.country_name) != null ? _d : "");
  const utcOffset = Number((_e = data.utc_offset) != null ? _e : 0);
  const isDst = Boolean(data.is_dst);
  const timezone = String((_f = data.timezone) != null ? _f : "");
  const sunrise = data.sunrise ? String(data.sunrise) : "";
  const sunset = data.sunset ? String(data.sunset) : "";
  const now = cityTime(utcOffset);
  const timeStr = formatTime(now, false, true);
  const dateStr = formatDate(now);
  const dayStr = formatDayOfWeek(now);
  const offsetStr = formatOffset(utcOffset);
  const daytime = isDaytime(now);
  const cityUrl = `https://${config.domain}/time/${esc(slug)}/`;
  return `
    <div class="utilityfyi-header">
      <div class="utilityfyi-img">${daytime ? "\u2600\uFE0F" : "\u{1F319}"}</div>
      <div>
        <div class="utilityfyi-header-title">${esc(name)}</div>
        <div class="utilityfyi-header-subtitle">${esc(countryName)}</div>
      </div>
    </div>
    <div class="utilityfyi-clock">
      <div class="utilityfyi-clock-time">${esc(timeStr)}</div>
      <div class="utilityfyi-clock-zone">${esc(dayStr)}, ${esc(dateStr)}</div>
    </div>
    <div class="utilityfyi-kv-rows">
      ${kvRow("Timezone", timezone || offsetStr)}
      ${kvRow("UTC Offset", offsetStr)}
      ${isDst ? kvRow("DST", "Active") : ""}
      ${sunrise ? kvRow("Sunrise", sunrise) : ""}
      ${sunset ? kvRow("Sunset", sunset) : ""}
    </div>
    <div class="utilityfyi-view-link"><a href="${cityUrl}" target="_blank" rel="noopener">View on ${esc(config.name)} ${externalLinkIcon}</a></div>
    ${poweredByHTML(config)}
  `;
}

// src/compute/countdown.ts
function daysUntil(month, day) {
  const now = /* @__PURE__ */ new Date();
  const thisYear = now.getFullYear();
  let target = new Date(thisYear, month - 1, day, 0, 0, 0, 0);
  if (target.getTime() <= now.getTime()) {
    target = new Date(thisYear + 1, month - 1, day, 0, 0, 0, 0);
  }
  const totalMs = target.getTime() - now.getTime();
  return msToCountdown(totalMs);
}
function msToCountdown(totalMs) {
  const isPast = totalMs <= 0;
  const absMs = Math.abs(totalMs);
  const days = Math.floor(absMs / (1e3 * 60 * 60 * 24));
  const hours = Math.floor(absMs % (1e3 * 60 * 60 * 24) / (1e3 * 60 * 60));
  const minutes = Math.floor(absMs % (1e3 * 60 * 60) / (1e3 * 60));
  const seconds = Math.floor(absMs % (1e3 * 60) / 1e3);
  return { days, hours, minutes, seconds, totalMs: absMs, isPast };
}

// src/cards/holiday.ts
var TYPE_COLORS = {
  national: { bg: "#DBEAFE", fg: "#1E40AF" },
  religious: { bg: "#F3E8FF", fg: "#7C3AED" },
  cultural: { bg: "#FEF3C7", fg: "#B45309" },
  observance: { bg: "#D1FAE5", fg: "#065F46" },
  international: { bg: "#E0E7FF", fg: "#3730A3" },
  seasonal: { bg: "#FFEDD5", fg: "#C2410C" }
};
function renderHolidayCard(data, config) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p;
  const name = String((_b = (_a = data.name) != null ? _a : data.slug) != null ? _b : "");
  const slug = String((_c = data.slug) != null ? _c : "");
  const emoji = String((_d = data.emoji) != null ? _d : "\u{1F389}");
  const type = String((_f = (_e = data.type) != null ? _e : data.holiday_type) != null ? _f : "").toLowerCase();
  const typeName = type ? type.charAt(0).toUpperCase() + type.slice(1) : "";
  const nextDate = String((_h = (_g = data.next_date) != null ? _g : data.date) != null ? _h : "");
  const description = String((_j = (_i = data.description) != null ? _i : data.excerpt) != null ? _j : "");
  const greetings = (_l = (_k = data.greetings) != null ? _k : data.greeting_phrases) != null ? _l : [];
  const colors = (_m = data.colors) != null ? _m : [];
  const country = String((_o = (_n = data.country_name) != null ? _n : data.country) != null ? _o : "");
  let countdownStr = "";
  if (nextDate) {
    const parts = nextDate.split("-");
    if (parts.length === 3) {
      const month = parseInt(parts[1], 10);
      const day = parseInt(parts[2], 10);
      const cd = daysUntil(month, day);
      countdownStr = cd.isPast ? "Today!" : `${cd.days} day${cd.days !== 1 ? "s" : ""} away`;
    }
  }
  const typeColors = (_p = TYPE_COLORS[type]) != null ? _p : { bg: "#F1F5F9", fg: "#374151" };
  const holidayUrl = `https://${config.domain}/holiday/${esc(slug)}/`;
  const colorSwatches = colors.length > 0 ? `<div style="display:flex;gap:4px;padding:8px 18px;border-bottom:1px solid var(--border);">${colors.slice(0, 6).map((c) => `<span style="width:18px;height:18px;border-radius:50%;background:${esc(c)};border:1px solid var(--border);display:inline-block;"></span>`).join("")}</div>` : "";
  const greetingHtml = greetings.length > 0 ? `<div style="padding:8px 18px;border-bottom:1px solid var(--border);font-size:0.85rem;color:var(--muted);font-style:italic;">${greetings.slice(0, 2).map((g) => esc(g)).join(" \xB7 ")}</div>` : "";
  return `
    <div class="utilityfyi-header">
      <div class="utilityfyi-img" style="font-size:32px;">${emoji}</div>
      <div>
        <div class="utilityfyi-header-title">${esc(name)}</div>
        <div class="utilityfyi-header-subtitle">
          ${typeName ? badge(typeName, typeColors.bg, typeColors.fg) : ""}
          ${country ? `<span style="margin-left:4px;">${esc(country)}</span>` : ""}
        </div>
      </div>
    </div>
    ${description ? `<div class="utilityfyi-desc">${esc(description)}</div>` : ""}
    <div class="utilityfyi-kv-rows">
      ${nextDate ? kvRow("Next Date", nextDate) : ""}
      ${countdownStr ? kvRow("Countdown", countdownStr) : ""}
    </div>
    ${greetingHtml}
    ${colorSwatches}
    <div class="utilityfyi-view-link"><a href="${holidayUrl}" target="_blank" rel="noopener">View on ${esc(config.name)} ${externalLinkIcon}</a></div>
    ${poweredByHTML(config)}
  `;
}

// src/cards/name.ts
var GENDER_SYMBOLS = {
  male: "\u2642",
  female: "\u2640",
  unisex: "\u26A5"
};
var GENDER_COLORS = {
  male: { bg: "#DBEAFE", fg: "#1E40AF" },
  female: { bg: "#FCE7F3", fg: "#BE185D" },
  unisex: { bg: "#F3E8FF", fg: "#7C3AED" }
};
function renderNameCard(data, config) {
  var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q;
  const name = String((_c = (_b = (_a = data.name) != null ? _a : data.romanized) != null ? _b : data.slug) != null ? _c : "");
  const slug = String((_d = data.slug) != null ? _d : "");
  const nativeScript = String((_g = (_f = (_e = data.native_script) != null ? _e : data.hangul) != null ? _f : data.hanja_name) != null ? _g : "");
  const meaning = String((_i = (_h = data.meaning) != null ? _h : data.description) != null ? _i : "");
  const culture = String((_k = (_j = data.culture) != null ? _j : data.origin) != null ? _k : "");
  const gender = String((_l = data.gender) != null ? _l : "").toLowerCase();
  const popularity = (_o = (_n = (_m = data.popularity_score) != null ? _m : data.popularity) != null ? _n : data.rank) != null ? _o : null;
  const genderSymbol = (_p = GENDER_SYMBOLS[gender]) != null ? _p : "";
  const genderColors = (_q = GENDER_COLORS[gender]) != null ? _q : { bg: "#F1F5F9", fg: "#374151" };
  const nameUrl = `https://${config.domain}/given-name/${esc(slug)}/`;
  return `
    <div class="utilityfyi-header">
      ${nativeScript ? `<div class="utilityfyi-img" style="font-size:20px;">${esc(nativeScript)}</div>` : `<div class="utilityfyi-img">${esc(name.charAt(0).toUpperCase())}</div>`}
      <div>
        <div class="utilityfyi-header-title">${esc(name)}</div>
        <div class="utilityfyi-header-subtitle" style="display:flex;gap:4px;flex-wrap:wrap;margin-top:4px;">
          ${gender ? badge(`${genderSymbol} ${gender.charAt(0).toUpperCase() + gender.slice(1)}`, genderColors.bg, genderColors.fg) : ""}
          ${culture ? badge(culture, config.accent, "#fff") : ""}
        </div>
      </div>
    </div>
    ${meaning ? `<div class="utilityfyi-desc">${esc(meaning)}</div>` : ""}
    <div class="utilityfyi-kv-rows">
      ${kvRow("Gender", gender ? gender.charAt(0).toUpperCase() + gender.slice(1) : null)}
      ${kvRow("Culture", culture)}
      ${popularity !== null && popularity !== void 0 ? kvRow("Popularity", String(popularity)) : ""}
      ${nativeScript ? kvRow("Native Script", nativeScript) : ""}
    </div>
    <div class="utilityfyi-view-link"><a href="${nameUrl}" target="_blank" rel="noopener">View on ${esc(config.name)} ${externalLinkIcon}</a></div>
    ${poweredByHTML(config)}
  `;
}

// src/widgets/entity.ts
function getEntityPath(config, slug) {
  switch (config.site) {
    case "unitfyi":
      return `unit/${slug}/`;
    case "timefyi":
      return `city/${slug}/`;
    case "holidayfyi":
      return `holidays/${slug}/`;
    case "namefyi":
      return `given-name/${slug}/`;
    default:
      return `${config.entitySlug}/${slug}/`;
  }
}
function initEntityWidget(el, config) {
  var _a;
  const dataset = el.dataset;
  const slug = (_a = dataset.slug) != null ? _a : "";
  if (!slug) {
    const shadow2 = createShadow(el, config);
    const container2 = createWidgetRoot(shadow2, el, "utilityfyi-entity-widget");
    renderError(container2, "Missing data-slug attribute.", config);
    return;
  }
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "utilityfyi-entity-widget");
  renderLoading(container);
  const path = getEntityPath(config, slug);
  fetchAPI(config.apiBase, path).then((data) => {
    var _a2;
    let html;
    switch (config.site) {
      case "unitfyi":
        html = renderUnitCard(data, config);
        break;
      case "timefyi":
        html = renderCityCard(data, config);
        break;
      case "holidayfyi":
        html = renderHolidayCard(data, config);
        break;
      case "namefyi":
        html = renderNameCard(data, config);
        break;
      default: {
        const name = String((_a2 = data.name) != null ? _a2 : slug);
        const entityUrl = `https://${config.domain}/${config.entitySlug}/${esc(slug)}/`;
        html = `
            <div style="padding:16px;">
              <div style="font-size:1rem;font-weight:600;margin-bottom:8px;">${esc(name)}</div>
              <a href="${esc(entityUrl)}" target="_blank" rel="noopener"
                 style="color:${config.accent};text-decoration:none;font-size:0.85rem;">
                View on ${esc(config.name)} ${externalLinkIcon}
              </a>
            </div>
          `;
        break;
      }
    }
    container.innerHTML = html;
  }).catch(() => {
    renderError(container, `Unable to load "${esc(slug)}". Please try again later.`, config);
  });
}

// src/widgets/compare.ts
function renderUnitCompare(dataA, dataB, config) {
  var _a, _b, _c, _d, _e, _f, _g, _h;
  const nameA = String((_b = (_a = dataA.name) != null ? _a : dataA.slug) != null ? _b : "");
  const nameB = String((_d = (_c = dataB.name) != null ? _c : dataB.slug) != null ? _d : "");
  const slugA = String((_e = dataA.slug) != null ? _e : "");
  const slugB = String((_f = dataB.slug) != null ? _f : "");
  const symA = String((_g = dataA.symbol) != null ? _g : getSymbol(slugA));
  const symB = String((_h = dataB.symbol) != null ? _h : getSymbol(slugB));
  const result = convert(1, slugA, slugB);
  const resultStr = result !== null ? smartRound(result) : "N/A";
  const catA = getCategory(slugA);
  const compareUrl = `https://${config.domain}/${catA}/compare/${slugA}-vs-${slugB}/`;
  return `
    <div class="utilityfyi-header">
      <div>
        <div class="utilityfyi-header-title">${esc(nameA)} vs ${esc(nameB)}</div>
        <div class="utilityfyi-header-subtitle">Unit Comparison</div>
      </div>
    </div>
    <div class="utilityfyi-result-display">
      <div class="utilityfyi-result-big">1 ${esc(symA)} = ${esc(resultStr)} ${esc(symB)}</div>
    </div>
    <div class="utilityfyi-kv-rows">
      ${kvRow(nameA, symA)}
      ${kvRow(nameB, symB)}
    </div>
    <div class="utilityfyi-view-link"><a href="${esc(compareUrl)}" target="_blank" rel="noopener">Compare on ${esc(config.name)} ${externalLinkIcon}</a></div>
    ${poweredByHTML(config)}
  `;
}
function renderCityCompare(dataA, dataB, config) {
  var _a, _b, _c, _d, _e, _f;
  const nameA = String((_a = dataA.name) != null ? _a : "");
  const nameB = String((_b = dataB.name) != null ? _b : "");
  const slugA = String((_c = dataA.slug) != null ? _c : "");
  const slugB = String((_d = dataB.slug) != null ? _d : "");
  const offsetA = Number((_e = dataA.utc_offset) != null ? _e : 0);
  const offsetB = Number((_f = dataB.utc_offset) != null ? _f : 0);
  const diff = offsetB - offsetA;
  const nowA = cityTime(offsetA);
  const nowB = cityTime(offsetB);
  const timeA = formatTime(nowA, false, false);
  const timeB = formatTime(nowB, false, false);
  const diffLabel = diff === 0 ? "Same time" : diff > 0 ? `${nameB} is ${Math.abs(diff)}h ahead` : `${nameB} is ${Math.abs(diff)}h behind`;
  const compareUrl = `https://${config.domain}/compare/${slugA}-vs-${slugB}/`;
  return `
    <div class="utilityfyi-header">
      <div>
        <div class="utilityfyi-header-title">${esc(nameA)} vs ${esc(nameB)}</div>
        <div class="utilityfyi-header-subtitle">Time Comparison</div>
      </div>
    </div>
    <div class="utilityfyi-stats-row">
      <div class="utilityfyi-stat">
        <div class="utilityfyi-stat-value">${esc(timeA)}</div>
        <div class="utilityfyi-stat-label">${esc(nameA)}</div>
      </div>
      <div class="utilityfyi-stat">
        <div class="utilityfyi-stat-value">${esc(timeB)}</div>
        <div class="utilityfyi-stat-label">${esc(nameB)}</div>
      </div>
    </div>
    <div class="utilityfyi-kv-rows">
      ${kvRow(nameA, formatOffset(offsetA))}
      ${kvRow(nameB, formatOffset(offsetB))}
      ${kvRow("Difference", diffLabel)}
    </div>
    <div class="utilityfyi-view-link"><a href="${esc(compareUrl)}" target="_blank" rel="noopener">Compare on ${esc(config.name)} ${externalLinkIcon}</a></div>
    ${poweredByHTML(config)}
  `;
}
function initCompareWidget(el, config) {
  var _a, _b;
  const dataset = el.dataset;
  const slugA = (_a = dataset.slugA) != null ? _a : "";
  const slugB = (_b = dataset.slugB) != null ? _b : "";
  if (!slugA || !slugB) {
    const shadow2 = createShadow(el, config);
    const container2 = createWidgetRoot(shadow2, el, "utilityfyi-compare-widget");
    renderError(container2, "Missing data-slug-a and data-slug-b attributes.", config);
    return;
  }
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "utilityfyi-compare-widget");
  if (config.site === "unitfyi" && UNITS[slugA] && UNITS[slugB]) {
    container.innerHTML = renderUnitCompare(
      { name: slugA.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()), slug: slugA },
      { name: slugB.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()), slug: slugB },
      config
    );
    return;
  }
  renderLoading(container);
  const pathA = config.site === "timefyi" ? `city/${slugA}/` : `${config.entitySlug}/${slugA}/`;
  const pathB = config.site === "timefyi" ? `city/${slugB}/` : `${config.entitySlug}/${slugB}/`;
  Promise.all([
    fetchAPI(config.apiBase, pathA),
    fetchAPI(config.apiBase, pathB)
  ]).then(([dataA, dataB]) => {
    if (config.site === "timefyi") {
      container.innerHTML = renderCityCompare(dataA, dataB, config);
    } else if (config.site === "unitfyi") {
      container.innerHTML = renderUnitCompare(dataA, dataB, config);
    } else {
      renderError(container, "Compare is only available for UnitFYI and TimeFYI.", config);
    }
  }).catch(() => {
    renderError(container, "Unable to load comparison data.", config);
  });
}

// src/rich-snippets.ts
function injectDefinedTerm(data, domain, siteName) {
  if (document.querySelector('script[data-utilityfyi-snippet="term"]')) return;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "DefinedTerm",
    name: data.name,
    description: data.definition,
    inDefinedTermSet: {
      "@type": "DefinedTermSet",
      name: `${siteName} Glossary`,
      url: `https://${domain}/glossary/`
    }
  };
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.setAttribute("data-utilityfyi-snippet", "term");
  script.textContent = JSON.stringify(jsonLd);
  document.head.appendChild(script);
}
function injectFAQPage(faqs, domain, _siteName) {
  if (document.querySelector('script[data-utilityfyi-snippet="faq"]')) return;
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer
      }
    })),
    url: `https://${domain}/`
  };
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.setAttribute("data-utilityfyi-snippet", "faq");
  script.textContent = JSON.stringify(jsonLd);
  document.head.appendChild(script);
}

// src/widgets/glossary.ts
function initGlossaryWidget(el, config) {
  var _a;
  const dataset = el.dataset;
  const slug = (_a = dataset.slug) != null ? _a : "";
  if (!slug) {
    const shadow2 = createShadow(el, config);
    const container2 = createWidgetRoot(shadow2, el, "utilityfyi-glossary-widget");
    renderError(container2, "Missing data-slug attribute.", config);
    return;
  }
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "utilityfyi-glossary-widget");
  renderLoading(container);
  const glossaryPath = config.site === "holidayfyi" ? `glossary/${slug}/` : `v1/glossary/${slug}/`;
  fetchAPI(config.apiBase, glossaryPath).then((data) => {
    var _a2, _b, _c;
    container.innerHTML = renderGlossaryCard(data, config);
    if (el.dataset.noSnippet !== "true") {
      const name = String((_b = (_a2 = data.name) != null ? _a2 : data.term) != null ? _b : slug);
      const definition = String((_c = data.definition) != null ? _c : "");
      injectDefinedTerm({ name, definition }, config.domain, config.name);
    }
  }).catch(() => {
    renderError(
      container,
      `Unable to load glossary term "${esc(slug)}".`,
      config
    );
  });
}

// src/widgets/guide.ts
function initGuideWidget(el, config) {
  var _a;
  const dataset = el.dataset;
  const slug = (_a = dataset.slug) != null ? _a : "";
  if (!slug) {
    const shadow2 = createShadow(el, config);
    const container2 = createWidgetRoot(shadow2, el, "utilityfyi-guide-widget");
    renderError(container2, "Missing data-slug attribute.", config);
    return;
  }
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "utilityfyi-guide-widget");
  renderLoading(container);
  const guidePath = config.site === "holidayfyi" ? `guides/${slug}/` : `v1/guides/${slug}/`;
  fetchAPI(config.apiBase, guidePath).then((data) => {
    container.innerHTML = renderGuideCard(data, config);
  }).catch(() => {
    renderError(container, `Unable to load guide "${esc(slug)}".`, config);
  });
}

// src/widgets/search.ts
var TYPE_LABELS = {
  unit: "Unit",
  city: "City",
  holiday: "Holiday",
  "given-name": "Name",
  surname: "Surname",
  character: "Character",
  glossary: "Glossary",
  guide: "Guide",
  faq: "FAQ"
};
var SEARCH_ICON = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" width="14" height="14"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`;
function initSearchWidget(el, config) {
  var _a;
  const dataset = el.dataset;
  const placeholder = (_a = dataset.placeholder) != null ? _a : `Search ${config.entityName}...`;
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "utilityfyi-search-widget");
  let isOpen = false;
  let query = "";
  let results = [];
  let selectedIndex = -1;
  let debounceTimer = null;
  container.innerHTML = `
    <div class="utilityfyi-search-wrap">
      <div class="utilityfyi-search-form" style="position:relative;display:flex;align-items:center;">
        <span style="position:absolute;left:10px;color:var(--muted);pointer-events:none;">${SEARCH_ICON}</span>
        <input
          class="utilityfyi-search-input"
          type="search"
          autocomplete="off"
          spellcheck="false"
          placeholder="${esc(placeholder)}"
          aria-label="Search ${esc(config.name)}"
          aria-autocomplete="list"
          aria-expanded="false"
          role="combobox"
          style="padding-left:32px;"
        >
      </div>
      <div class="utilityfyi-search-dropdown" role="listbox" hidden
           style="margin-top:4px;border:1px solid var(--border);border-radius:6px;background:var(--bg);box-shadow:var(--shadow);max-height:280px;overflow-y:auto;"></div>
    </div>
    ${poweredByHTML(config)}
  `;
  const input = container.querySelector(".utilityfyi-search-input");
  const dropdown = container.querySelector(".utilityfyi-search-dropdown");
  function getAllItems() {
    return Array.from(dropdown.querySelectorAll(".utilityfyi-result-item"));
  }
  function setSelected(idx) {
    const items = getAllItems();
    items.forEach((item, i) => {
      if (i === idx) {
        item.style.background = `color-mix(in srgb, ${config.accent} 10%, var(--bg))`;
      } else {
        item.style.background = "";
      }
    });
    selectedIndex = idx;
  }
  function openDropdown() {
    isOpen = true;
    dropdown.hidden = false;
    input.setAttribute("aria-expanded", "true");
  }
  function closeDropdown() {
    isOpen = false;
    dropdown.hidden = true;
    input.setAttribute("aria-expanded", "false");
    selectedIndex = -1;
  }
  function renderDropdown() {
    var _a2, _b, _c, _d;
    if (results.length === 0) {
      dropdown.innerHTML = `<div style="padding:12px 14px;font-size:0.85rem;color:var(--muted);">No results for <strong>${esc(query)}</strong></div>`;
      return;
    }
    let html = "";
    for (const item of results) {
      const typeLabel = item.type ? (_a2 = TYPE_LABELS[item.type]) != null ? _a2 : item.type : null;
      const desc = (_d = (_c = (_b = item.description) != null ? _b : item.excerpt) != null ? _c : item.subtitle) != null ? _d : "";
      const href = item.url ? item.url.startsWith("http") ? item.url : `https://${config.domain}${item.url}` : `https://${config.domain}/${config.entitySlug}/${esc(item.slug)}/`;
      html += `
        <a class="utilityfyi-result-item"
           href="${esc(href)}" target="_blank" rel="noopener" role="option" tabindex="-1"
           style="display:block;padding:8px 14px;text-decoration:none;color:var(--text);border-bottom:1px solid var(--border);transition:background 0.1s;">
          <div style="display:flex;align-items:center;justify-content:space-between;gap:8px;">
            <span style="font-size:0.875rem;font-weight:500;">${esc(item.name)}</span>
            ${typeLabel ? `<span class="utilityfyi-badge" style="flex-shrink:0;">${esc(typeLabel)}</span>` : ""}
          </div>
          ${desc ? `<div style="font-size:0.75rem;color:var(--muted);margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${esc(desc)}</div>` : ""}
        </a>
      `;
    }
    dropdown.innerHTML = html;
  }
  async function doSearch(q) {
    var _a2;
    if (!q.trim()) {
      closeDropdown();
      return;
    }
    const searchUrl = `https://${config.domain}/api/v1/search/?q=${encodeURIComponent(q)}&limit=10`;
    try {
      const response = await fetch(searchUrl, { headers: { Accept: "application/json" } });
      if (!response.ok) throw new Error(`Search failed: ${response.status}`);
      const data = await response.json();
      results = (_a2 = data.results) != null ? _a2 : [];
    } catch (e) {
      results = [];
    }
    renderDropdown();
    openDropdown();
    setSelected(-1);
  }
  input.addEventListener("input", () => {
    query = input.value;
    if (debounceTimer !== null) clearTimeout(debounceTimer);
    if (!query.trim()) {
      closeDropdown();
      return;
    }
    debounceTimer = setTimeout(() => {
      void doSearch(query);
    }, 300);
  });
  input.addEventListener("keydown", (e) => {
    if (!isOpen) return;
    const items = getAllItems();
    const total = items.length;
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelected(selectedIndex < total - 1 ? selectedIndex + 1 : 0);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelected(selectedIndex > 0 ? selectedIndex - 1 : total - 1);
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (selectedIndex >= 0 && items[selectedIndex]) {
        items[selectedIndex].click();
      } else {
        window.open(`https://${config.domain}${config.searchPath}?q=${encodeURIComponent(query)}`, "_blank", "noopener");
      }
    } else if (e.key === "Escape") {
      closeDropdown();
      input.blur();
    }
  });
  document.addEventListener("click", (e) => {
    if (isOpen && !el.contains(e.target)) closeDropdown();
  });
  input.addEventListener("focus", () => {
    input.style.borderColor = config.accent;
    input.style.boxShadow = `0 0 0 2px color-mix(in srgb, ${config.accent} 20%, transparent)`;
  });
  input.addEventListener("blur", () => {
    input.style.borderColor = "";
    input.style.boxShadow = "";
  });
}

// src/widgets/faq.ts
function initFAQWidget(el, config) {
  var _a;
  const dataset = el.dataset;
  const slug = (_a = dataset.slug) != null ? _a : "";
  if (!slug) {
    const shadow2 = createShadow(el, config);
    const container2 = createWidgetRoot(shadow2, el, "utilityfyi-faq-widget");
    renderError(container2, "Missing data-slug attribute.", config);
    return;
  }
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "utilityfyi-faq-widget");
  renderLoading(container);
  const faqPath = config.site === "holidayfyi" ? `faqs/?topic=${encodeURIComponent(slug)}` : `v1/faqs/?topic=${encodeURIComponent(slug)}`;
  fetchAPI(config.apiBase, faqPath).then((data) => {
    let faqs;
    if (data.faqs && Array.isArray(data.faqs)) {
      faqs = data.faqs;
    } else if (data.results && Array.isArray(data.results)) {
      faqs = data.results;
    } else if (data.question && data.answer) {
      faqs = [{ question: String(data.question), answer: String(data.answer) }];
    } else {
      faqs = [];
    }
    container.innerHTML = renderFAQCard(faqs, config);
    if (el.dataset.noSnippet !== "true" && faqs.length > 0) {
      injectFAQPage(faqs, config.domain, config.name);
    }
  }).catch(() => {
    renderError(container, `Unable to load FAQs for "${esc(slug)}".`, config);
  });
}

// src/tools/random-name.ts
var GENDER_COLORS2 = {
  male: { bg: "#DBEAFE", fg: "#1E40AF" },
  female: { bg: "#FCE7F3", fg: "#BE185D" },
  unisex: { bg: "#F3E8FF", fg: "#7C3AED" }
};
function initRandomNameTool(el, config) {
  var _a, _b;
  const dataset = el.dataset;
  const culture = (_a = dataset.culture) != null ? _a : "";
  const gender = (_b = dataset.gender) != null ? _b : "";
  const shadow = createShadow(el, config);
  const container = createWidgetRoot(shadow, el, "utilityfyi-random-name-widget");
  let isLoading = false;
  function renderInitial() {
    container.innerHTML = `
      <div class="utilityfyi-header">
        <div>
          <div class="utilityfyi-header-title">Random Name Generator</div>
          <div class="utilityfyi-header-subtitle">${esc(config.name)}</div>
        </div>
      </div>
      <div style="padding:20px 18px;text-align:center;">
        <button class="utilityfyi-generate-btn" style="background:${config.accent};color:#fff;border:none;border-radius:8px;padding:10px 24px;font-size:0.9rem;font-weight:600;cursor:pointer;font-family:inherit;transition:opacity 0.15s;">
          \u{1F3B2} Generate
        </button>
      </div>
      ${poweredByHTML(config)}
    `;
    bindGenerateBtn();
  }
  function renderResult(data) {
    var _a2, _b2, _c, _d, _e, _f, _g;
    const name = String((_a2 = data.name) != null ? _a2 : "");
    const slug = String((_b2 = data.slug) != null ? _b2 : "");
    const meaning = String((_c = data.meaning) != null ? _c : "");
    const gen = String((_d = data.gender) != null ? _d : "").toLowerCase();
    const cult = String((_e = data.culture) != null ? _e : "");
    const native = String((_f = data.native_script) != null ? _f : "");
    const genColors = (_g = GENDER_COLORS2[gen]) != null ? _g : { bg: "#F1F5F9", fg: "#374151" };
    const nameUrl = slug ? `https://${config.domain}/given-name/${esc(slug)}/` : "";
    container.innerHTML = `
      <div class="utilityfyi-header">
        <div>
          <div class="utilityfyi-header-title">Random Name Generator</div>
          <div class="utilityfyi-header-subtitle">${esc(config.name)}</div>
        </div>
      </div>
      <div class="utilityfyi-result-display">
        ${native ? `<div style="font-size:0.85rem;color:var(--muted);margin-bottom:4px;">${esc(native)}</div>` : ""}
        <div class="utilityfyi-result-big" style="font-size:1.8rem;">${esc(name)}</div>
        <div style="margin-top:6px;display:flex;gap:4px;justify-content:center;flex-wrap:wrap;">
          ${gen ? badge(gen.charAt(0).toUpperCase() + gen.slice(1), genColors.bg, genColors.fg) : ""}
          ${cult ? badge(cult, config.accent, "#fff") : ""}
        </div>
      </div>
      ${meaning ? `<div class="utilityfyi-desc">${esc(meaning)}</div>` : ""}
      <div style="padding:12px 18px;text-align:center;border-bottom:1px solid var(--border);display:flex;gap:8px;justify-content:center;">
        <button class="utilityfyi-generate-btn" style="background:${config.accent};color:#fff;border:none;border-radius:8px;padding:8px 20px;font-size:0.85rem;font-weight:600;cursor:pointer;font-family:inherit;transition:opacity 0.15s;">
          \u{1F3B2} Generate Another
        </button>
      </div>
      ${nameUrl ? `<div class="utilityfyi-view-link"><a href="${nameUrl}" target="_blank" rel="noopener">View on ${esc(config.name)} ${externalLinkIcon}</a></div>` : ""}
      ${poweredByHTML(config)}
    `;
    bindGenerateBtn();
  }
  function renderLoading2() {
    container.innerHTML = `
      <div class="utilityfyi-header">
        <div>
          <div class="utilityfyi-header-title">Random Name Generator</div>
          <div class="utilityfyi-header-subtitle">${esc(config.name)}</div>
        </div>
      </div>
      <div class="utilityfyi-loading">
        <span class="utilityfyi-spinner"></span>
        Generating...
      </div>
      ${poweredByHTML(config)}
    `;
  }
  async function generateName() {
    if (isLoading) return;
    isLoading = true;
    renderLoading2();
    const params = new URLSearchParams();
    if (culture) params.set("culture", culture);
    if (gender) params.set("gender", gender);
    const queryStr = params.toString() ? `?${params.toString()}` : "";
    try {
      const url = `https://${config.domain}/api/random-name/${queryStr}`;
      const response = await fetch(url, { headers: { Accept: "application/json" } });
      if (!response.ok) throw new Error(`API error ${response.status}`);
      const data = await response.json();
      renderResult(data);
    } catch (e) {
      container.innerHTML = `
        <div class="utilityfyi-header">
          <div><div class="utilityfyi-header-title">Random Name Generator</div></div>
        </div>
        <div class="utilityfyi-error"><p>Unable to generate name. Try again.</p></div>
        <div style="padding:12px 18px;text-align:center;">
          <button class="utilityfyi-generate-btn" style="background:${config.accent};color:#fff;border:none;border-radius:8px;padding:8px 20px;font-size:0.85rem;font-weight:600;cursor:pointer;font-family:inherit;">
            \u{1F3B2} Try Again
          </button>
        </div>
        ${poweredByHTML(config)}
      `;
      bindGenerateBtn();
    } finally {
      isLoading = false;
    }
  }
  function bindGenerateBtn() {
    const btn = container.querySelector(".utilityfyi-generate-btn");
    btn == null ? void 0 : btn.addEventListener("click", () => {
      void generateName();
    });
  }
  renderInitial();
}

// src/compute/elements.ts
var FIVE_ELEMENTS = [
  {
    slug: "wood",
    name: "Wood",
    nameKo: "\uBAA9",
    hanja: "\u6728",
    color: "#16A34A",
    bgColor: "#DCFCE7",
    textColor: "#166534"
  },
  {
    slug: "fire",
    name: "Fire",
    nameKo: "\uD654",
    hanja: "\u706B",
    color: "#DC2626",
    bgColor: "#FEE2E2",
    textColor: "#991B1B"
  },
  {
    slug: "earth",
    name: "Earth",
    nameKo: "\uD1A0",
    hanja: "\u571F",
    color: "#CA8A04",
    bgColor: "#FEF9C3",
    textColor: "#854D0E"
  },
  {
    slug: "metal",
    name: "Metal",
    nameKo: "\uAE08",
    hanja: "\u91D1",
    color: "#6B7280",
    bgColor: "#F3F4F6",
    textColor: "#374151"
  },
  {
    slug: "water",
    name: "Water",
    nameKo: "\uC218",
    hanja: "\u6C34",
    color: "#2563EB",
    bgColor: "#DBEAFE",
    textColor: "#1E40AF"
  }
];
function getElement(slug) {
  return FIVE_ELEMENTS.find((e) => e.slug === slug);
}

// src/inline/elements.ts
function escapeHTML(str) {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
function initElementsInline(el, config) {
  var _a;
  const dataset = el.dataset;
  const elementSlug = ((_a = dataset.element) != null ? _a : "").toLowerCase();
  const shadow = createShadow(el, config);
  const hostStyle = document.createElement("style");
  hostStyle.textContent = `:host { display: inline-flex; vertical-align: baseline; }`;
  shadow.appendChild(hostStyle);
  const wrapper = document.createElement("span");
  const elementData = getElement(elementSlug);
  if (!elementData) {
    wrapper.textContent = "[?]";
    shadow.appendChild(wrapper);
    return;
  }
  wrapper.innerHTML = `<span style="display:inline-flex;align-items:center;gap:3px;padding:1px 6px;border-radius:10px;background:${elementData.bgColor};color:${elementData.textColor};font-size:0.75rem;font-weight:600;line-height:1.4;white-space:nowrap;">${escapeHTML(elementData.hanja)} ${escapeHTML(elementData.name)}</span>`;
  shadow.appendChild(wrapper);
}

// src/inline/stroke.ts
function initStrokeInline(el, config) {
  var _a;
  const dataset = el.dataset;
  const count = parseInt((_a = dataset.count) != null ? _a : "0", 10);
  const shadow = createShadow(el, config);
  const hostStyle = document.createElement("style");
  hostStyle.textContent = `:host { display: inline-flex; vertical-align: baseline; }`;
  shadow.appendChild(hostStyle);
  const wrapper = document.createElement("span");
  const label = `${count} stroke${count !== 1 ? "s" : ""}`;
  wrapper.innerHTML = `<span style="display:inline-flex;align-items:center;gap:3px;padding:1px 6px;border-radius:10px;background:color-mix(in srgb, ${config.accent} 10%, transparent);color:${config.accent};font-size:0.75rem;font-weight:600;line-height:1.4;white-space:nowrap;">\u270D ${label}</span>`;
  shadow.appendChild(wrapper);
}

// src/_entry_namefyi.ts
function initWidget(el, type, config) {
  const widgetStyle = el.dataset.style || "modern";
  void widgetStyle;
  switch (type) {
    case "entity":
      initEntityWidget(el, config);
      break;
    case "compare":
      initCompareWidget(el, config);
      break;
    case "glossary":
      initGlossaryWidget(el, config);
      break;
    case "guide":
      initGuideWidget(el, config);
      break;
    case "search":
      initSearchWidget(el, config);
      break;
    case "faq":
      initFAQWidget(el, config);
      break;
    case "random":
      initRandomNameTool(el, config);
      break;
    case "elements":
      initElementsInline(el, config);
      break;
    case "stroke":
      initStrokeInline(el, config);
      break;
    default:
      break;
  }
}
function lazyInit(el, callback) {
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          observer.unobserve(el);
          callback();
        }
      });
    }, { rootMargin: "200px" });
    observer.observe(el);
  } else {
    callback();
  }
}
function processElement(el, config) {
  if (el.shadowRoot) return;
  const dataKey = config.attribute.replace("data-", "");
  const camelKey = dataKey.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
  const widgetType = el.dataset[camelKey];
  if (!widgetType) return;
  lazyInit(el, () => {
    if (!el.shadowRoot) initWidget(el, widgetType, config);
  });
}
function initAll(config) {
  document.querySelectorAll(`[${config.attribute}]`).forEach((el) => processElement(el, config));
}
(function bootstrap() {
  const config = '{"site":"namefyi","name":"NameFYI","domain":"namefyi.com","accent":"#6366F1","attribute":"data-namefyi","apiBase":"https://namefyi.com/api/","searchPath":"/search/","entityName":"Names","entitySlug":"names"}';
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => initAll(config));
  } else {
    initAll(config);
  }
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        var _a;
        if (node.nodeType !== Node.ELEMENT_NODE) return;
        const el = node;
        if (el.hasAttribute(config.attribute)) processElement(el, config);
        (_a = el.querySelectorAll) == null ? void 0 : _a.call(el, `[${config.attribute}]`).forEach((child) => processElement(child, config));
      });
    });
  });
  observer.observe(document.body || document.documentElement, { childList: true, subtree: true });
})();
function makeWidgetElement(widgetType, initFn, domainAttrs) {
  const observed = [...domainAttrs, "theme", "style-variant", "size"];
  return class extends HTMLElement {
    static get observedAttributes() {
      return observed;
    }
    connectedCallback() {
      if (this.shadowRoot) return;
      this._syncDataAttrs();
      initFn(this, '{"site":"namefyi","name":"NameFYI","domain":"namefyi.com","accent":"#6366F1","attribute":"data-namefyi","apiBase":"https://namefyi.com/api/","searchPath":"/search/","entityName":"Names","entitySlug":"names"}');
    }
    attributeChangedCallback(_name, oldVal, newVal) {
      if (oldVal === newVal || !this.shadowRoot) return;
      const shadow = this.shadowRoot;
      while (shadow.firstChild) shadow.firstChild.remove();
      this._syncDataAttrs();
      initFn(this, '{"site":"namefyi","name":"NameFYI","domain":"namefyi.com","accent":"#6366F1","attribute":"data-namefyi","apiBase":"https://namefyi.com/api/","searchPath":"/search/","entityName":"Names","entitySlug":"names"}');
    }
    _syncDataAttrs() {
      const attrKey = '{"site":"namefyi","name":"NameFYI","domain":"namefyi.com","accent":"#6366F1","attribute":"data-namefyi","apiBase":"https://namefyi.com/api/","searchPath":"/search/","entityName":"Names","entitySlug":"names"}'.attribute.replace("data-", "");
      this.dataset[attrKey] = widgetType;
      for (const a of domainAttrs) {
        const val = this.getAttribute(a);
        if (val !== null) this.dataset[a] = val;
      }
      const theme = this.getAttribute("theme");
      if (theme !== null) this.dataset.theme = theme;
      const styleVariant = this.getAttribute("style-variant");
      if (styleVariant !== null) this.dataset.style = styleVariant;
      const size = this.getAttribute("size");
      if (size !== null) this.dataset.size = size;
    }
  };
}
(function registerElements() {
  if (typeof customElements === "undefined") return;
  const site = '{"site":"namefyi","name":"NameFYI","domain":"namefyi.com","accent":"#6366F1","attribute":"data-namefyi","apiBase":"https://namefyi.com/api/","searchPath":"/search/","entityName":"Names","entitySlug":"names"}'.site;
  const defs = [
    [`${site}-entity`, initEntityWidget, ["slug"]],
    [`${site}-compare`, initCompareWidget, ["slugs"]],
    [`${site}-glossary`, initGlossaryWidget, ["slug", "letter"]],
    [`${site}-guide`, initGuideWidget, ["slug"]],
    [`${site}-search`, initSearchWidget, ["placeholder", "query"]],
    [`${site}-faq`, initFAQWidget, ["slug", "category"]],
    [`${site}-random`, initRandomNameTool, ["culture", "gender"]]
  ];
  for (const [tagName, initFn, attrs] of defs) {
    if (!customElements.get(tagName)) {
      const widgetType = tagName.slice(site.length + 1);
      customElements.define(tagName, makeWidgetElement(widgetType, initFn, attrs));
    }
  }
})();
