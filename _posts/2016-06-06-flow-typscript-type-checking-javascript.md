---
id: 690
title: 'Flow e Typscript:  Type checking per Javascript'
date: 2016-06-06T18:00:46+00:00
author: musikele
layout: post
guid: http://michelenasti.com/?p=690
permalink: /2016/06/flow-typscript-type-checking-javascript/
dsq_thread_id:
  - "4887589828"
categories:
  - Italiano
tags:
  - post
  - flow
  - typescript
---
ho trovato questo [interessantissimo link](http://djcordhose.github.io/flow-vs-typescript/2016_hhjs.html#/) sulla differenza tra **Flow** (di Facebook) e **Typescript** (di Microsoft). Vi consiglio di dargli uno sguardo perché sono slide che si capiscono (rarità!).

Entrambi sono ottimi tool che permettono di portare il vostro codice JS a un altro livello.

[<img class="aligncenter size-medium wp-image-691" src="https://i0.wp.com/michelenasti.com/wp-content/uploads/2016/06/flow-hero-logo-300x123.png?fit=300%2C123" alt="flow-hero-logo" srcset="https://i0.wp.com/michelenasti.com/wp-content/uploads/2016/06/flow-hero-logo.png?resize=300%2C123 300w, https://i0.wp.com/michelenasti.com/wp-content/uploads/2016/06/flow-hero-logo.png?resize=720%2C294 720w, https://i0.wp.com/michelenasti.com/wp-content/uploads/2016/06/flow-hero-logo.png?w=734 734w" sizes="(max-width: 300px) 100vw, 300px" data-recalc-dims="1" />](https://i0.wp.com/michelenasti.com/wp-content/uploads/2016/06/flow-hero-logo.png)

_Flow_ è un type checker &#8220;offline&#8221;, nel senso che è un tool da linea di comando che controlla se avete commesso errori di tipo (es. assegnare un numero a una stringa). Ovviamente esistono plugin per i migliori editor, e tante altre facilities (babel,, webpack...)

_Typescript_ invece è un vero e proprio linguaggio, superset di JS; questo codice viene poi compilato in JS con tutti i crismi e i carismi.  Anche qui c'è tanto supporto da parte dei tool.

La differenza più importante però ve la dico io. **Flow non è (ancora) supportato su Windows**. Esistono port non ufficiali, ma ci vuole ancora un po' per un supporto completo.

Avrei voluto utilizzare / provare Flow, proprio perchè posso integrarlo man mano che ne ho bisogno nel codice già scritto, piuttosto che Typescript che invece richiede proprio di ridisegnare il proprio build set. E qui a lavoro ho solo una macchina Windows.

In ogni caso, _sono entrambi grandissimi pezzi di software_ che _semplificano la manutenzione di codice complesso_, quindi vi consiglio di usare il migliore dei due per i vostri compiti, soprattutto se avete una webapp complessa da cui dipende la vostra vita lavorativa.