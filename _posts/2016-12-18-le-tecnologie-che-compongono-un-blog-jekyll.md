---
title: Le tecnologie che compongono un blog Jekyll 
author: musikele
layout: post
categories:
- Italiano
tags:
- git
- github
- blogging
- jekyll
- markdown
- web
- curriculum
---

Gli ingredienti segreti di questo magico calderone che é il mio blog sono: **Git**, **github**, **jekyll** (con tanto **html**, **css** & **javascript**), **markdown**. Vediamoli in dettaglio. 

> Per sapere come mai mi sono orientato proprio su Jekyll come piattaforma di blogging, leggete il mio precedente articolo [Le migliori piattaforme di blogging (per un developer) a confronto]({% post_url 2016-12-15-le-piattaforme-di-blogging-a-confronto %}).

## Git

[**Git**](http://rogerdudler.github.io/git-guide/index.it.html) é un tool di versionamento distribuito. Senza essere troppo formali, supponete di lavorare in 15 su un progetto e di non avere internet, né i computer connessi in rete. Per condividere il codice tra membri del progetto usate le penne usb. Questo scenario non è lontano nel tempo, durante i miei primi anni d'università era così che si collaborava ai progetti. 

Che succede se due Developer modificano lo stesso file? Come ce ne accorgiamo? 

Un tool di VCS (version control system) risolve proprio questo problema, ne esistono di diversi tipi (svn, che é centralizzato, Git che é distribuito). Su Git ci sono libri e siti web: una vera rivoluzione da quando é apparso. **Da conoscere OBBLIGATORIAMENTE**. 

## Github

[GitHub](http://www.github.com) é la community di programmatori  di questo decennio, insieme a *Stack Overflow*. Su github ci sono chili e chili di codice open source che le aziende commerciali prendono a piene mani per realizzare i loro prodotti commerciali. Forse non scriverete mai una libreria capace di attirare migliaia di Developers, ma conviene comunque imparare a usare **git** per scaricare codice altrui ;) 

Tramite git é possibile quindi scaricare codice altrui da github, vederne la history, e anche contribuire a progetti esterni. La cosa interessante é che potete caricare anche i VOSTRI progetti online, gratuitamente e illimitatamente, purché i repository siano pubblici (per quelli privati si paga). Ora che lo sapete, non dovreste mai più scrivere codice senza salvarlo su github. 

## Jekyll

[Jekyll](https://jekyllrb.com) é un generatore di siti statici scritto in Ruby (ma non é importante conoscere Ruby) nato principalmente per generare blog, ma sul web si trovano facilmente dei template per creare anche altri tipi di siti: io ad esempio ho realizzato un sito-documentazione per un progetto a cui lavoro. 

Il fatto che il sito generato sia statico (html, js & css) significa che non servono server potenti o software complessi per servire le richieste: il sito così costruito é il più veloce possibile - nessun tempo perso per costruire la pagina (il sito viene "compilato" all'inizio), nessuna richiesta a un database, ma solo latenza di rete (che non potete eliminare comunque). 

Vista la semplicità del sistema, Github ha lanciato *GitHub Pages*: pubblicando il vostro repository "sorgente", github compilerà per voi il repo e lo mostrerà in formato html. Su come funziona tutto il giro, aspettatevi un mio aggiornamento a riguardo. (GitHub ha anche altre modalità di pubblicazione, alcune senza la potenza di Jekyll: provatele). 

### Html, css & javascript 

Visto che Jekyll genera un sito statico, occorre dare una user interface al vostro sito che sia gradevole: con Jekyll non siete limitati nel tipo di soluzioni che potete implementare, anzi tutto ciò che é frontend. Qui potrete sbizzarrirvi con le soluzioni più belle che potete, nessun limite, solo creatività. 

(WordPress, con i temi, ti nasconde questa fase e rende anche "scomoda" la personalizzazione di un tema). 

## Markdown 

Come scrivo gli articoli del mio blog? Jekyll é predisposto per molti sistemi, ma quello più usato é **Markdown**. Esso é un *quasi*-standard, visto che ne esistono diverse implelentazioni e ci sono piccole divergenze, ma non é qualcosa che noterete davvero, almeno finché non dovrete andare "oltre". 

Di base, un documento scritto in markdown non é nient'altro che un file di testo (solitamente con estensione `.md`) che jekyll trasformerà in un `.html`. La sintassi di markdown é molto leggibile, e non dovremo scimunirci per annidare tag nel modo corretto. Inoltre Mardown ha la possibilità di annidare codice sia inline `così`, sia scrivendo blocchi di codice su più righe: 

```javascript
//ad esempio, questo é un commento
var ciao = 'beccatevi questo!' ;
```

Questo post é stato scritto in markdown da un telefonino! 

## ultime considerazioni 

Passare a Jekyll può essere un processo lungo, per il numero di concetti da abbracciare, ma in verità tutto si impara nel giro di 2-3 giorni. 

La cosa positiva (e non mi stancherò mai di ripetere) é che nel realizzare il vostro blog/sito dimostrerete di conoscere tutta questa catena di tecnologie: Git, github, jekyll, markdown, html, css, javascript. Che combo! 
