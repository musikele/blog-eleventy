---
id: 286
title: convertire label in camelCase o CONSTANT_CASE con IntelliJ e String Manipulation
date: 2015-05-05T18:45:08+00:00
author: musikele
layout: post
guid: http://michelenasti.com/?p=286
permalink: /2015/05/convertire-label-in-camelcase-o-constant_case-con-intellij-e-string-manipulation/
dsq_thread_id:
  - "4096239362"
categories:
  - Italiano
tags:
  -  camel case
  - intellij
  - string manipulation
---
[<img class="alignleft wp-image-291 size-medium" src="https://i0.wp.com/michelenasti.com/wp-content/uploads/2015/05/string-manipulation-300x139.gif?fit=300%2C139" alt="string-manipulation" data-recalc-dims="1" />](https://i1.wp.com/michelenasti.com/wp-content/uploads/2015/05/string-manipulation.gif)

Spesso ci impelaghiamo in task pallosi e manuali (ma purtroppo necessari) per le azioni più disparate; penso a quando bisogna bonificare dei dati per il db (e quindi rimuovere caratteri non accettati) oppure formattarli in un certo modo. Bene, per tutto questo c'è il plugin di IntelliJ String Manipulation!

Premetto che esistono centinaia di migliaia di Tool che fanno quello che sto per descrivere; io tuttavia uso IntelliJ quindi riuscire a risolvere tramite l'IDE gli fa acquistare centinaia di punti stima!

Per chi se lo fosse perso, ecco un articolo su [cosa mi piace di IntelliJ](http://michelenasti.com/2015/04/intellij-idea-alla-fine-e-arrivato-lamore/).

Problema: devo convertire una lista di stringhe come

<pre class="lang:default decode:true">Anagrafica
Sesso
Numero Civico Residenza
Comune Residenza
...</pre>

in quest'altro formato:

<pre class="lang:default decode:true">ANAGRAFICA
SESSO
NUMERO_CIVICO_RESIDENZA
COMUNE_RESIDENZA
</pre>

Questo perchè poi devo tradurre le label tramite [angular-translate](https://angular-translate.github.io/).

Soluzione:

Installando il plugin di IntelliJ String Manipulation (qui il [suo sito web](https://plugins.jetbrains.com/plugin/2162?pr=phpStorm)), è possibile selezionare queste label e cliccare ALT-SHIFT-M e poi J ... et voilà! il gioco è fatto.

Il plugin fa molto altro, permette di trasformare in mille altri modi il testo, oltre ad altre funzioni che per ora non ho esplorato.

E ora... siamo pronti ad affrontare anche i compiti più noiosi!