---
id: 676
title: Visual Studio Code, l'editor che mancava per JS e Node
date: 2016-05-27T08:28:39+00:00
author: musikele
layout: post
guid: http://michelenasti.com/?p=676
permalink: /2016/05/visual-studio-code-leditor-mancava/
dsq_thread_id:
  - "4861423055"
categories:
  - Italiano
tags:
  - eslint
  - nodejs
  - typings
  - visual studio code
headerImg: /uploads/2016/05/visual-studio-code.png
---
**Visual Studio Code** **è l'editor/IDE Javascript definitivo**. Lo so, mi sto sbilanciando, la concorrenza è tanta, ma ha alcune _feature_ essenziali a costo quasi zero. E pensare che è sviluppato e sponsorizzato da Microsoft ! Chi l'avrebbe mai detto 5 anni fa?

Ecco una guida su come installarlo per le mie esigenze:

### Scaricare Visual Studio Code

Ovviamente [scaricarlo dal sito ufficiale](https://code.visualstudio.com/) (per Windows, Mac, Linux...)

### EsLint

Installare [EsLint](http://eslint.org) e il suo plugin per VS. EsLint è un un syntax checker e inoltre permette di evitare una serie di bad practice riconosciuti dalla community nel corso degli anni. Per installare EsLint globalmente, se non l'avete mai installato:

```shell
npm install eslint --global
 ```

A questo punto recatevi presso la directory del vostro progetto su cui volete eseguire EsLint e lanciate il comando

```shell
eslint --init
```

Ora che abbiamo installato il tool, integriamolo col nostro editor: in VS lo si fa aprendo la finestra dei comandi rapidi (`Cmd + P`) e scrivendo `ext install vscode-eslint`. Riavviate Visual Studio Code se non volete comportamenti strani.

(Ho riscontrato a mie spese che VS non richiede il riavvio dopo l'installazione di plugin, però poi si incarta se non lo fai. Quindi fatelo.)

### La Console

Per aprire il terminale nella directory corrente basta un semplice `Cmd + Shift + C`.

### Typings

[Typings](https://github.com/typings/typings) è un package di Node che permette di avere un aiuto contestuale man mano che scriviamo. Dal sito web non si capisce benissimo, è scritto in maniera piuttosto oscura, ma è un enorme raccoglitore di API per tutte le librerie JS più diffuse. Se siete programmatori Java, VS sta provando a fare quello che faceva Eclipse con i Javadoc.

Fate una prova ora che typings non l'avete ancora installato. Provate a creare un file in VS scrivendo:

```javascript
var fs = require('fs');
fs. // <-- a questo punto si apre una finestra contestuale con ... niente
```

![Senza Typings, Visual Studio prova a dare un aiuto, ma non ci riesce veramente: Infatti tutto quello che viene mostrato in console non serve a nulla.](https://i0.wp.com/michelenasti.com/uploads/2016/05/senza-typings.jpg)

Bene, proviamo ad aggiustare questo comportamento. Facciamo sì che VS ci restituisca suggerimenti utili quando proviamo a usare metodi dei nostri oggetti. Per farlo installeremo Typings:

```shell
npm install typings --global
```

poi dobbiamo installare le definizioni di Node:

```shell
typings install dt~node --global --save
```

Manca un passaggio nascosto, ossia bisogna cliccare sull'icona a forma di lampadina in basso a destra, per creare un file di configurazione dell'IDE, che permette di abilitare la _magia_.

|[cliccando su quest'icona verrà creato un file di configurazione dell'IDE, voi non dovete fare nulla se non salvarlo e riavviare.](https://i0.wp.com/michelenasti.com/uploads/2016/05/visual-studio-magic.jpg)|

Riavviate Visual Studio, che a questo punto è già configurato per funzionare con Typings, _et voilà_!

![un esempio di suggerimento contestuale che è davvero d'aiuto.](https://i0.wp.com/michelenasti.com/uploads/2016/05/con-typings.jpg)

C'è tutto un mondo di altre opzioni e possibilità da esplorare con VS, ad esempio Git, o l'esecuzione in debug di app, ma il tempo è tiranno come al solito quindi ne parleremo in futuro! 🙂
