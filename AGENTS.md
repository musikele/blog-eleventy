# AGENTS.md - Guida per AI Agents

Questo file contiene informazioni sulla struttura del blog per facilitare il lavoro di agenti AI.

## Stack Tecnologico

- **Static Site Generator**: [Eleventy (11ty)](https://www.11ty.dev/) v2.0.1
- **Templating**: Nunjucks (`.njk`)
- **CMS**: [Sveltia CMS](https://github.com/sveltia/sveltia-cms) (configurazione in `/admin/config.yml`)
- **Hosting**: Netlify (vedi `netlify.toml`)
- **Syntax Highlighting**: Prism (plugin `@11ty/eleventy-plugin-syntaxhighlight`)
- **RSS Feed**: plugin `@11ty/eleventy-plugin-rss`
- **Code Formatter**: Prettier (configurazione in `.prettierrc`)

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

Per editare un articolo: `/admin/#/collections/posts/entries/<fileName>`

Il `fileName` corrisponde al nome del file senza estensione (es. `2026-02-02-mio-articolo`).

**ATTENZIONE**: Non usare `page.fileSlug` perché rimuove il prefisso data! Usare invece `{{ page.inputPath | fileName }}`.

## Comandi NPM

```bash
npm start          # Avvia server di sviluppo (http://localhost:8080)
npm run build      # Build per produzione
npm run debug      # Build con debug Eleventy
npm run format     # Formatta tutti i file con Prettier
npm run format:check  # Verifica formattazione senza modificare
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
- `page.fileSlug` - Slug del file (**ATTENZIONE**: rimuove il prefisso data, es. `2025-01-01-mio-articolo.md` → `mio-articolo`)
- `page.inputPath` - Percorso completo del file sorgente (es. `./_posts/2025-01-01-mio-articolo.md`)
- `site.*` - Dati da `_data/site.json`
- `tags` - Array di tag
- `headerImg` - Immagine header

## Filtri Custom

Definiti in `.eleventy.js` con JSDoc types per autocomplete:

- `postDate` - Formatta date per i post (es. `January 7, 2015`)
- `toISODate` - Converte data in formato ISO (es. `2025/01/07`)
- `imagePath` - Gestisce percorsi immagini (usa ImageKit in produzione)
- `fileName` - Estrae il nome del file senza estensione da `page.inputPath` (es. `./_posts/2025-01-01-mio-articolo.md` → `2025-01-01-mio-articolo`)
- `sortObjectByKey` - Ordina un oggetto per chiave

### Uso del filtro fileName

Per ottenere il nome completo del file (con prefisso data) usa:

```nunjucks
{{ page.inputPath | fileName }}
```

Questo è necessario per i link a Sveltia CMS, dove l'URL richiede il nome file completo senza estensione.

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
