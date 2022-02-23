---
title: Jekyll & Github in pratica
date: 2016-12-22
author: musikele
layout: post
categories:
  - Italiano
tags:
  - post
  - github
  - blogging
  - jekyll
  - markdown

permalink: /2016/12/22/jekyll-e-github-in-pratica.html
---
In questo articolo spiegheremo rapidamente come installare un blog jekyll su github.

![]({{ site.baseurl }}/images/jekyll_logo.png)

> **Nerd Alert**: dovete saper usare il **terminale** e **git** ! Se volete, facciamo un tutorial anche su questi due argomenti.

> Ho [parlato ampiamente](/2016/12/18/le-tecnologie-che-compongono-un-blog-jekyll.html) del perchè Jekyll sia una buona soluzione di blogging, adatta agli sviluppatori.

## Inizializzare Github

Per prima cosa, [aprite un account su Github](https://github.com/join?source=login). Una volta registrati avrete un indirizzo col vostro nome utente. Ad esempio, il mio account è `http://github.com/musikele`.

La funzione di github che vi permette di pubblicare siti statici si chiama **Github Pages**. Potete scegliere se attivare le github pages per:

*   **un progetto** - ad esempio, se avete un repository git chiamato `blog` all'indirizzo `http://github.com/musikele/blog`), potreste servire i file contenuti all'indirizzo `http://musikele.github.io/blog`.
*   **il vostro nome utente (o organizzazione)** - se create un repository chiamato `musikele.github.io` (quindi `http://github.com/musikele/musikele.github.io`), i file html saranno serviti direttamente da `http://musikele.github.com`.

Quale sia la vostra scelta dipende da voi; per un blog personale è meglio un sito che non contiene sottopath, mentre per documentare un progetto è meglio il primo sistema.

Qualunque scelta abbiate fatto, siete già pronti per servire i vostri file. Facciamo subito una prova. Per non ripetere gli esempi due volte immaginiamo di stare creando un blog e quindi facciamo gli esempi sul _secondo caso_.

1.  Create e scaricate il repository col vostro username in locale

```bash
$ git clone https://github.com/<username>/<username>.github.io.git
$ cd <username>.github.io 
```

1.  in questa directory potrete creare un simpatico file html e committarlo: sarà automaticamente servito :)

```bash
$ echo <h1>Hello World</h1> >> index.html
$ git commit -am "first commit"
$ git push 
```

1.  puntate il browser a `http://<username>.github.io` e gustatevi il risultato.

> Se c'è qualche step non chiaro, o troppo "magico", non esitare a scriverlo nei commenti. Rispondo a tutto.

## Ma questo non è Jekyll: installiamolo

Per prima cosa [installate Ruby](https://www.ruby-lang.org/it/), un linguggio di programmazione utilizzatissimo in USA e pochissimo in EU: le istruzioni variano da sistema a sistema, e forse sarà questo il passo più complesso del tutorial.

Una volta installato ruby, dovrete installare jekyll. Questo passo sarà facile grazie a un comando (`gem`) incluso in ruby che permette di installare script:

```bash
$ gem install jekyll bundler
```

> `jekyll` sappiamo cos'è, `budler` è un tool consigliato per evitare che futuri aggiornamenti rompano tutto.

Ora jekyll è installato sul vostro sistema come applicativo utilizzabile da console.

Assumendo di trovarci nella cartella del bog (`<username>.github.io/`), cancelliamo tutti i file precedentemente creati e creiamo la struttura di jekyll:

```bash
$ rm ./* # cancelliamo ogni file precedentemente creato... 
$ jekyll new . # crea la struttura base di jekyll nella directory corrente 
```

Verifichiamo che funziona tutto, lanciamo jekyll:

```bash
$ bundle exec jekyll serve 
  # => Now browse to http://localhost:4000 
  # Ctrl+C per interrompere 
```

Questo è un buon momento per committare...

```bash
$ git commit -am "jekyll new ."
$ git push
```

## Com'è fatto jekyll

La directory structure di Jekyll la trovate [qui](https://jekyllrb.com/docs/structure/). La cosa importante da sapere è che `_site/` conterrà il vostro sito generato in html, quello che github compilerà e servirà via http.

Nella directory `_posts/` scriveremo i nostri post.

Non voglio ripetere altro, visto che nella [doc ufficiale](https://jekyllrb.com/docs/home/) di Jekyll c'è praticamente tutto quello che dovreste sapere. Solo una cosa mi preme dirvi...

Se avete committato, il vostro blog è già visibile a `http://<username>.github.io` - provare per credere !