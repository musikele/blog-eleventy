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
---
**Visual Studio Code** **è l'editor/IDE Javascript definitivo**. Lo so, mi sto sbilanciando, la concorrenza è tanta, ma ha alcune _feature_ essenziali a costo quasi zero. E pensare che è sviluppato e sponsorizzato da Microsoft ! Chi l'avrebbe mai detto 5 anni fa?[<img class="aligncenter size-full wp-image-681" src="https://i2.wp.com/michelenasti.com/uploads/2016/05/visual-studio-code.png?fit=256%2C256" alt="visual-studio-code" srcset="https://i2.wp.com/michelenasti.com/uploads/2016/05/visual-studio-code.png?w=256 256w, https://i2.wp.com/michelenasti.com/uploads/2016/05/visual-studio-code.png?resize=150%2C150 150w" sizes="(max-width: 256px) 100vw, 256px" data-recalc-dims="1" />](https://i2.wp.com/michelenasti.com/uploads/2016/05/visual-studio-code.png)

Ecco una guida su come installarlo per le mie esigenze:

### Scaricare Visual Studio Code

Ovviamente [scaricarlo dal sito ufficiale](https://code.visualstudio.com/) (per Windows, Mac, Linux...)

### EsLint

Installare [EsLint](http://eslint.org) e il suo plugin per VS. EsLint è un un syntax checker e inoltre permette di evitare una serie di bad practice riconosciuti dalla community nel corso degli anni. Per installare EsLint globalmente, se non l'avete mai installato:

<pre class="lang:default decode:true">npm install eslint --global</pre>

A questo punto recatevi presso la directory del vostro progetto su cui volete eseguire EsLint e lanciate il comando

<pre class="lang:default decode:true">eslint --init</pre>

Ora che abbiamo installato il tool, integriamolo col nostro editor: in VS lo si fa aprendo la finestra dei comandi rapidi (<span class="lang:default decode:true crayon-inline">Cmd + P</span> ) e scrivendo <span class="lang:default decode:true crayon-inline">ext install vscode-eslint</span> . Riavviate Visual Studio Code se non volete comportamenti strani.

(Ho riscontrato a mie spese che VS non richiede il riavvio dopo l'installazione di plugin, però poi si incarta se non lo fai. Quindi fatelo.)

### La Console

Per aprire il terminale nella directory corrente basta un semplice <span class="lang:default decode:true crayon-inline ">Cmd + Shift + C</span> .

### Typings

[Typings](https://github.com/typings/typings) è un package di Node che permette di avere un aiuto contestuale man mano che scriviamo. Dal sito web non si capisce benissimo, è scritto in maniera piuttosto oscura, ma è un enorme raccoglitore di API per tutte le librerie JS più diffuse. Se siete programmatori Java, VS sta provando a fare quello che faceva Eclipse con i Javadoc.

Fate una prova ora che typings non l'avete ancora installato. Provate a creare un file in VS scrivendo:

<pre class="lang:default decode:true ">var fs = require('fs'); 
fs. // &lt;-- a questo punto si apre una finestra contestuale con ... niente</pre>

<div id="attachment_682" style="width: 310px" class="wp-caption aligncenter">
  <a href="https://i0.wp.com/michelenasti.com/uploads/2016/05/senza-typings.jpg"><img class="wp-image-682 size-medium" src="https://i1.wp.com/michelenasti.com/uploads/2016/05/senza-typings-300x264.jpg?fit=300%2C264" alt="Visual Studio senza Typings" srcset="https://i0.wp.com/michelenasti.com/uploads/2016/05/senza-typings.jpg?resize=300%2C264 300w, https://i0.wp.com/michelenasti.com/uploads/2016/05/senza-typings.jpg?w=341 341w" sizes="(max-width: 300px) 100vw, 300px" data-recalc-dims="1" /></a>
  
  <p class="wp-caption-text">
    Senza Typings, Visual Studio prova a dare un aiuto, ma non ci riesce veramente: Infatti tutto quello che viene mostrato in console non serve a nulla.
  </p>
</div>

Bene, proviamo ad aggiustare questo comportamento. Facciamo sì che VS ci restituisca suggerimenti utili quando proviamo a usare metodi dei nostri oggetti. Per farlo installeremo Typings:

<pre class="lang:default decode:true">npm install typings --global</pre>

poi dobbiamo installare le definizioni di Node:

<pre class="lang:default decode:true ">typings install dt~node --global --save</pre>

Manca un passaggio nascosto, ossia bisogna cliccare sull'icona a forma di lampadina in basso a destra, per creare un file di configurazione dell'IDE, che permette di abilitare la _magia_.

<div id="attachment_683" style="width: 255px" class="wp-caption aligncenter">
  <a href="https://i0.wp.com/michelenasti.com/uploads/2016/05/visual-studio-magic.jpg"><img class="wp-image-683 size-full" src="https://i0.wp.com/michelenasti.com/uploads/2016/05/visual-studio-magic.jpg?fit=245%2C80" alt="visual-studio-magic" data-recalc-dims="1" /></a>
  
  <p class="wp-caption-text">
    cliccando su quest'icona verrà creato un file di configurazione dell'IDE, voi non dovete fare nulla se non salvarlo e riavviare.
  </p>
</div>

Riavviate Visual Studio, che a questo punto è già configurato per funzionare con Typings, _et voilà_!

<div id="attachment_677" style="width: 310px" class="wp-caption aligncenter">
  <a href="https://i1.wp.com/michelenasti.com/uploads/2016/05/Schermata-2016-05-26-alle-00.01.42.png"><img class="size-medium wp-image-677" src="https://i0.wp.com/michelenasti.com/uploads/2016/05/Schermata-2016-05-26-alle-00.01.42-300x180.png?fit=300%2C180" alt="un esempio di suggerimento contestuale che è davvero d'aiuto." srcset="https://i1.wp.com/michelenasti.com/uploads/2016/05/Schermata-2016-05-26-alle-00.01.42.png?resize=300%2C180 300w, https://i1.wp.com/michelenasti.com/uploads/2016/05/Schermata-2016-05-26-alle-00.01.42.png?w=391 391w" sizes="(max-width: 300px) 100vw, 300px" data-recalc-dims="1" /></a>
  
  <p class="wp-caption-text">
    un esempio di suggerimento contestuale che è davvero d'aiuto.
  </p>
</div>

C'è tutto un mondo di altre opzioni e possibilità da esplorare con VS, ad esempio Git, o l'esecuzione in debug di app, ma il tempo è tiranno come al solito quindi ne parleremo in futuro! 🙂