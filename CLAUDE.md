# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm start          # Dev server with hot reload (localhost)
npm run build      # Build static site to _site/
npm run debug      # Dev server with Eleventy debug logging
npm run format     # Format all files with Prettier
npm run format:check  # Check formatting without writing
```

Set `LOCAL=1` in the environment to serve images locally instead of via ImageKit CDN.

## Architecture

This is an [Eleventy](https://www.11ty.dev/) (11ty v3) static blog. The main config is [eleventy.config.js](eleventy.config.js), written as an ES module.

**Content:** All blog posts live in [_posts/](_posts/) as Markdown files with YAML frontmatter. Filename convention: `YYYY-MM-DD-slug.md`. The `posts` collection is built from `_posts/**/*.md`.

**Templates:** Nunjucks (`.njk`) is the template engine for both Markdown and HTML files. Layouts are in [_includes/](_includes/). The main layout chain is `default.njk` → `post.njk` for blog posts.

**Frontmatter fields** used by posts: `title`, `date`, `permalink`, `tags`, `layout`, `lang`. Tags are normalized to lowercase at build time. `lang` sets `<html lang>` (default `site.lang`, `en`); Italian posts must have `lang: it`.

**Filters available in templates:**
- `postDate` — formats a Date as "Month day, year"
- `toISODate` — formats a Date as "yyyy/MM/dd" (used in permalinks)
- `fileName` — extracts filename without extension from `inputPath`
- `imagePath(width = 720)` — rewrites an image path to an ImageKit CDN URL (`https://ik.imagekit.io/xthvogziier/tr:w-<width>/`) unless `LOCAL` env is set. Used for og/twitter meta images.
- `sortObjectByKey` — sorts an object by its keys

**Shortcodes:**
- `responsiveImage src, attrs, options` — outputs a `<picture>` for an image via ImageKit: srcset at `IMAGE_WIDTHS`, AVIF sources (`f-avif`, because automatic AVIF is disabled on the ImageKit account), and lower quality (`MOBILE_QUALITY`, q-65) only for `MOBILE_MEDIA` (≤800px); desktop keeps ImageKit's default quality. `attrs` go on the `<img>`; `options` can override `widths`, `sizes`, `fallbackWidth`. With `LOCAL` set it outputs a plain `<img>`. Use it for every content image; the first/LCP image gets `fetchpriority: "high"` and no `loading: "lazy"`.
- `inlineStyles` — inlines `simple-v1.min.css`, `prism-okaidia.css` and `custom.scss` (compressed via sass) into a `<style>` in `<head>`, cached per build. Add new site-wide stylesheets to `INLINE_STYLES` in the config instead of a `<link>`.

**Images in Markdown:** a custom markdown-it image renderer routes local images (paths starting with `/`, not SVG) through `responsiveImage`, with lazy loading. External images are left as-is.

**Icons:** inline SVGs in [_includes/icons/](_includes/icons/) (from Font Awesome Free, CC BY 4.0), included with `{% include "icons/<name>.svg" %}` and styled by the `.icon` class. Don't reintroduce the Font Awesome kit or web fonts.

**Styling:** SCSS files are compiled to CSS via a custom Eleventy extension (using the `sass` package). No PostCSS or webpack involved. The pages don't link the CSS files: it is inlined by the `inlineStyles` shortcode (see below). Text uses system fonts only.

**Plugins:** RSS feed (`@11ty/eleventy-plugin-rss`) and syntax highlighting (`@11ty/eleventy-plugin-syntaxhighlight`). Markdown uses `markdown-it` with footnote support.

**Static assets** (images, uploads, css, scripts, archives, admin, favicon.ico) are passthrough-copied as-is to `_site/`.

**Global data** (`_data/site.json`): `title`, `email`, `description`, `url`, `lang`. Additional globals set in config: `base` (canonical URL), `sitename`, `twitterName`.

**Collections:**
- `posts` — all markdown files in `_posts/`
- `tagsList` — sorted array of all unique lowercase tags across all content
