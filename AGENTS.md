# AGENTS.md - Guida per AI Agents

Questo file contiene informazioni sulla struttura del blog per facilitare il lavoro di agenti AI.

## Stack Tecnologico

- **Static Site Generator**: [Eleventy (11ty)](https://www.11ty.dev/) v2.0.1
- **Templating**: Nunjucks (`.njk`)
- **CMS**: [Sveltia CMS](https://github.com/sveltia/sveltia-cms) (configurazione in `/admin/config.yml`)
- **Hosting**: Netlify (vedi `netlify.toml`)
- **Syntax Highlighting**: Prism (plugin `@11ty/eleventy-plugin-syntaxhighlight`)
- **RSS Feed**: plugin `@11ty/eleventy-plugin-rss`

## Struttura delle Cartelle

```graph
/
├── _data/              # Dati globali del sito
│   └── site.json       # Configurazione del sito (url, titolo, etc.)
├── _includes/          # Template parziali e layout
│   ├── default.njk     # Layout base HTML
│   ├── post.njk        # Layout per i singoli post
│   ├── page.njk        # Layout per le pagine statiche
│   ├── footer.html     # Footer con link social (GitHub, LinkedIn, RSS)
│   ├── header.njk      # Header del sito
│   ├── disqus.html     # Commenti Disqus
│   └── ...
├── _posts/             # Articoli del blog (Markdown)
├── _site/              # Output generato (non committare)
├── admin/              # Sveltia CMS
│   ├── config.yml      # Configurazione CMS
│   └── index.html      # Entry point CMS
├── css/                # Fogli di stile
├── images/             # Immagini
├── scripts/            # JavaScript
└── uploads/            # Upload da CMS
```

## Formato dei Post

I post sono in Markdown con frontmatter YAML. Esempio:

```markdown
---
layout: post
title: Titolo dell'articolo
description: Descrizione breve
date: 2026-02-02
tags:
  - javascript
  - tutorial
headerImg: /images/header.jpg
eleventyExcludeFromCollections: false # true = bozza (non pubblicato)
permalink: /custom-url/ # opzionale
---

Contenuto dell'articolo in Markdown...
```

### Campi del Frontmatter

| Campo                            | Tipo     | Obbligatorio | Descrizione                       |
| -------------------------------- | -------- | ------------ | --------------------------------- |
| `layout`                         | string   | Sì           | Sempre `post` per gli articoli    |
| `title`                          | string   | Sì           | Titolo dell'articolo              |
| `date`                           | datetime | Sì           | Data di pubblicazione             |
| `description`                    | string   | No           | Meta description per SEO          |
| `tags`                           | array    | No           | Lista di tag                      |
| `headerImg`                      | string   | No           | Immagine header                   |
| `eleventyExcludeFromCollections` | boolean  | No           | Se `true`, l'articolo è una bozza |
| `permalink`                      | string   | No           | URL personalizzato                |

## Sveltia CMS

### Accesso

- URL: `https://<dominio>/admin/`
- Autenticazione: GitHub OAuth

### Configurazione

Il file `/admin/config.yml` definisce:

- Backend (GitHub repo: `musikele/blog-eleventy`)
- Media folder: `/images`
- Collections (posts)

### URL di editing

Per editare un articolo: `/admin/#/collections/posts/entries/<fileSlug>`

Il `fileSlug` corrisponde al nome del file senza estensione (es. `2026-02-02-mio-articolo`).

## Comandi NPM

```bash
npm start       # Avvia server di sviluppo (http://localhost:8080)
npm run build   # Build per produzione
npm run debug   # Build con debug Eleventy
```

## Layout e Template

### Gerarchia dei Layout

1. `default.njk` - Layout base con `<html>`, `<head>`, `<body>`
2. `post.njk` - Estende `default.njk`, aggiunge struttura articolo
3. `page.njk` - Estende `default.njk`, per pagine statiche

### Variabili Disponibili nei Template

- `title` - Titolo del post/pagina
- `content` - Contenuto renderizzato
- `page.url` - URL della pagina
- `page.date` - Data del post
- `page.fileSlug` - Slug del file (nome senza estensione)
- `site.*` - Dati da `_data/site.json`
- `tags` - Array di tag
- `headerImg` - Immagine header

## Filtri Custom

Verificare in `.eleventy.js` (o `eleventy.config.js`) per filtri custom come:

- `postDate` - Formatta date per i post
- `toISODate` - Converte data in formato ISO
- `imagePath` - Gestisce percorsi immagini

## Note Importanti

1. **Bozze**: Usare `eleventyExcludeFromCollections: true` per nascondere un articolo
2. **Naming dei file**: I post seguono il formato `YYYY-MM-DD-slug.md`
3. **Immagini**: Caricarle in `/images/` o `/uploads/`
4. **Footer social**: Modificare `_includes/footer.html` per aggiungere/rimuovere link social
5. **Bottone Edit**: Ogni post ha un link "Edit this article" che porta a Sveltia CMS

## Problemi Comuni

### macOS: fsevents.node non verificato

```bash
xattr -rd com.apple.quarantine node_modules
```

### Build lenta

Eleventy rigenera tutti i file. Per progetti grandi, considerare incremental builds.
