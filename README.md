# namefyi-embed

[![npm](https://img.shields.io/npm/v/namefyi-embed)](https://www.npmjs.com/package/namefyi-embed)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-0-brightgreen)](https://www.npmjs.com/package/namefyi-embed)

Embed **NameFYI** widgets — names, glossary terms, interactive tools, and inline elements — on any website. **10 widget types**, zero dependencies, Shadow DOM style isolation, 4 built-in themes (light, dark, sepia, auto), 2 styles (modern, clean), and live data from the [NameFYI](https://namefyi.com) database.

Every widget includes a "Powered by NameFYI" backlink directing readers to the full reference.

> **Try the interactive widget builder at [widget.namefyi.com](https://widget.namefyi.com)**

## Quick Start

```html
<!-- Place widget div where you want it to appear -->
<div data-namefyi="entity" data-slug="names" data-theme="light"></div>

<!-- Load the embed script once, anywhere on the page -->
<script src="https://cdn.jsdelivr.net/npm/namefyi-embed@1/dist/embed.min.js"></script>
```

That's it. The widget fetches data from the NameFYI API and renders with full style isolation.

## Widget Types

| Type | Usage | Description |
|------|-------|-------------|
| `entity` | `<div data-namefyi="entity" data-slug="..."></div>` | Entity detail card — unit, city, holiday, or name |
| `glossary` | `<div data-namefyi="glossary" data-slug="..."></div>` | Glossary term definition with cross-references |
| `guide` | `<div data-namefyi="guide" data-slug="..."></div>` | Guide summary card with key takeaways |
| `search` | `<div data-namefyi="search" data-slug="..."></div>` | Search box linking to the full database |
| `compare` | `<div data-namefyi="compare" data-slug="..."></div>` | Side-by-side entity comparison |
| `faq` | `<div data-namefyi="faq" data-slug="..."></div>` | FAQ accordion with expand/collapse |
| `random` | `<div data-namefyi="random" data-slug="..."></div>` | Random name generator — filter by culture and gender |
| `character` | `<div data-namefyi="character" data-slug="..."></div>` | Hanja character card with stroke order and meanings |
| `elements` | `<div data-namefyi="elements" data-slug="..."></div>` | Inline Five Elements colored badges (Metal/Wood/Water/Fire/Earth) |
| `stroke` | `<div data-namefyi="stroke" data-slug="..."></div>` | Inline stroke count pill for Hanja characters |

## Widget Options

| Attribute | Values | Default | Description |
|-----------|--------|---------|-------------|
| `data-namefyi` | entity, compare, glossary, guide, search, faq, [tools] | required | Widget type |
| `data-slug` | e.g. "names" | — | Entity slug from the NameFYI database |
| `data-theme` | light, dark, sepia, auto | light | Visual theme (`auto` follows OS preference) |
| `data-style` | modern, clean | modern | Widget design style |
| `data-size` | default, compact, large | default | Widget size |
| `data-placeholder` | any string | "Search Names..." | Search box placeholder |

## Themes

```html
<!-- Light (default) -->
<div data-namefyi="entity" data-slug="names" data-theme="light"></div>

<!-- Dark -->
<div data-namefyi="entity" data-slug="names" data-theme="dark"></div>

<!-- Sepia -->
<div data-namefyi="entity" data-slug="names" data-theme="sepia"></div>

<!-- Auto — follows OS dark/light preference -->
<div data-namefyi="entity" data-slug="names" data-theme="auto"></div>
```

## Styles

```html
<!-- Modern (default) — clean lines, rounded corners, accent gradients -->
<div data-namefyi="entity" data-slug="names" data-style="modern"></div>

<!-- Clean — minimal borders, utility-focused, data-first aesthetic -->
<div data-namefyi="entity" data-slug="names" data-style="clean"></div>
```

## Web Components (Custom Elements)

As an alternative to `data-*` attributes, you can use native HTML custom elements:

```html
<!-- Custom element form -->
<namefyi-entity slug="names" theme="light"></namefyi-entity>
<namefyi-compare slugs="names,other-slug"></namefyi-compare>
<namefyi-search placeholder="Search Names..."></namefyi-search>

<script src="https://cdn.jsdelivr.net/npm/namefyi-embed@1/dist/embed.min.js"></script>
```

Use `style-variant` (not `style`) to avoid conflicts with the HTML reserved `style` attribute.

## Examples

### Entity Card

```html
<div data-namefyi="entity" data-slug="names" data-theme="light"></div>
<script src="https://cdn.jsdelivr.net/npm/namefyi-embed@1/dist/embed.min.js"></script>
```

### Side-by-Side Comparison

```html
<div data-namefyi="compare" data-slugs="names,other-slug"></div>
<script src="https://cdn.jsdelivr.net/npm/namefyi-embed@1/dist/embed.min.js"></script>
```

### Search Box

```html
<div data-namefyi="search" data-placeholder="Search Names..."></div>
<script src="https://cdn.jsdelivr.net/npm/namefyi-embed@1/dist/embed.min.js"></script>
```

### Glossary Term

```html
<div data-namefyi="glossary" data-slug="example-term" data-theme="light"></div>
<script src="https://cdn.jsdelivr.net/npm/namefyi-embed@1/dist/embed.min.js"></script>
```

## CDN Options

### jsDelivr (recommended — global CDN, auto-updates with npm)

```html
<script src="https://cdn.jsdelivr.net/npm/namefyi-embed@1/dist/embed.min.js"></script>
```

### Specific version (production stability)

```html
<script src="https://cdn.jsdelivr.net/npm/namefyi-embed@1.0.0/dist/embed.min.js"></script>
```

### npm (for bundlers)

```bash
npm install namefyi-embed
```

```javascript
import 'namefyi-embed';
```

## Technical Details

- **Shadow DOM**: Complete style isolation — no CSS conflicts with your site
- **Zero dependencies**: No jQuery, React, or any external library
- **2 styles**: Modern (accent gradients) and Clean (minimal, data-first)
- **4 themes**: Light, Dark, Sepia, Auto (OS preference detection)
- **CORS**: NameFYI API has CORS enabled for all origins
- **MutationObserver**: Works with dynamically added elements (SPAs)
- **IntersectionObserver**: Lazy loading — widgets only fetch when entering viewport (200px margin)
- **Rich Snippets**: DefinedTerm JSON-LD injected for glossary widgets
- **Bundle size**: Tree-shaken per site — only includes tools available on NameFYI

## Learn More About Names

Visit [namefyi.com](https://namefyi.com) — NameFYI is a comprehensive names reference with interactive tools, guides, and developer resources.

- **API docs**: [namefyi.com/developers/](https://namefyi.com/developers/)
- **Widget builder**: [widget.namefyi.com](https://widget.namefyi.com)
- **npm package**: [npmjs.com/package/namefyi-embed](https://www.npmjs.com/package/namefyi-embed)
- **GitHub**: [github.com/fyipedia/namefyi-embed](https://github.com/fyipedia/namefyi-embed)

## Utility FYI Family

Part of [FYIPedia](https://fyipedia.com) — open-source developer tools ecosystem. Utility FYI covers unit conversion, timezones, holidays, and names. Hub: [toolfyi.com](https://toolfyi.com).

| Site | Domain | Focus | Package |
|------|--------|-------|---------|
| UnitFYI | [unitfyi.com](https://unitfyi.com) | 220 units, 20 categories, offline converter | [npm](https://www.npmjs.com/package/unitfyi-embed) |
| TimeFYI | [timefyi.com](https://timefyi.com) | 6,040 cities, live world clock, sunrise data | [npm](https://www.npmjs.com/package/timefyi-embed) |
| HolidayFYI | [holidayfyi.com](https://holidayfyi.com) | 626 holidays, 197 countries, live today feed | [npm](https://www.npmjs.com/package/holidayfyi-embed) |
| **NameFYI** | [namefyi.com](https://namefyi.com) | 35,585 names, Hanja characters, Five Elements | **[npm](https://www.npmjs.com/package/namefyi-embed)** |

## FYIPedia Developer Tools

| Package | PyPI | npm | Description |
|---------|------|-----|-------------|
| colorfyi | [PyPI](https://pypi.org/project/colorfyi/) | [npm](https://www.npmjs.com/package/@fyipedia/colorfyi) | Color conversion, WCAG contrast, harmonies — [colorfyi.com](https://colorfyi.com) |
| emojifyi | [PyPI](https://pypi.org/project/emojifyi/) | [npm](https://www.npmjs.com/package/emojifyi) | Emoji encoding & metadata for 3,953 emojis — [emojifyi.com](https://emojifyi.com) |
| unitfyi | [PyPI](https://pypi.org/project/unitfyi/) | [npm](https://www.npmjs.com/package/unitfyi) | Unit conversion, 220 units — [unitfyi.com](https://unitfyi.com) |
| timefyi | [PyPI](https://pypi.org/project/timefyi/) | [npm](https://www.npmjs.com/package/timefyi) | Timezone ops & business hours — [timefyi.com](https://timefyi.com) |
| holidayfyi | [PyPI](https://pypi.org/project/holidayfyi/) | [npm](https://www.npmjs.com/package/holidayfyi) | Holiday dates & Easter calculation — [holidayfyi.com](https://holidayfyi.com) |
| namefyi | [PyPI](https://pypi.org/project/namefyi/) | [npm](https://www.npmjs.com/package/namefyi) | Korean romanization & Five Elements — [namefyi.com](https://namefyi.com) |
| fyipedia | [PyPI](https://pypi.org/project/fyipedia/) | — | Unified CLI for all FYI tools — [fyipedia.com](https://fyipedia.com) |

## Embed Widget

Embed [NameFYI](https://namefyi.com) widgets on any website with [namefyi-embed](https://widget.namefyi.com):

```html
<script src="https://cdn.jsdelivr.net/npm/namefyi-embed@1/dist/embed.min.js"></script>
<div data-namefyi="entity" data-slug="example"></div>
```

Zero dependencies · Shadow DOM · 4 themes (light/dark/sepia/auto) · [Widget docs](https://widget.namefyi.com)

## License

MIT — see [LICENSE](./LICENSE).

Built with care by [FYIPedia](https://fyipedia.com).
