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

**Frontmatter fields** used by posts: `title`, `date`, `permalink`, `tags`, `layout`. Tags are normalized to lowercase at build time.

**Filters available in templates:**
- `postDate` — formats a Date as "Month day, year"
- `toISODate` — formats a Date as "yyyy/MM/dd" (used in permalinks)
- `fileName` — extracts filename without extension from `inputPath`
- `imagePath` — rewrites image paths to ImageKit CDN (`https://ik.imagekit.io/xthvogziier/tr:w-720/`) unless `LOCAL` env is set
- `sortObjectByKey` — sorts an object by its keys

**Styling:** SCSS files are compiled to CSS via a custom Eleventy extension (using the `sass` package). No PostCSS or webpack involved.

**Plugins:** RSS feed (`@11ty/eleventy-plugin-rss`) and syntax highlighting (`@11ty/eleventy-plugin-syntaxhighlight`). Markdown uses `markdown-it` with footnote support.

**Static assets** (images, uploads, css, scripts, archives, admin, favicon.ico) are passthrough-copied as-is to `_site/`.

**Global data** (`_data/site.json`): `title`, `email`, `description`, `url`. Additional globals set in config: `base` (canonical URL), `sitename`, `twitterName`.

**Collections:**
- `posts` — all markdown files in `_posts/`
- `tagsList` — sorted array of all unique lowercase tags across all content
