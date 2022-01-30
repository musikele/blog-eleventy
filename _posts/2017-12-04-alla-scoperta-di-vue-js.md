---
paginate: true
comments: true
author: musikele
title: Alla scoperta di VueJS
category: Italiano
layout: post
date: 2017-12-03 00:00:00 +0000
header-img: "/images/vuejs.png"
tags:
- vuejs
- javascript
- frontend
- angular
- react
- vue
description: 'VueJS è uno dei front-end framework che sta provando a guadagnarsi uno
  po'' di spazio: dalla sua ha la velocità e la semplicità. '
---
E' domenica, il Napoli non gioca, che fare? Dopo aver acceso il camino ho iniziato a guardarmi un po' di VueJS.

![]({{ site.baseurl }}/images/vuejs.png)

## VueJS, Un framework minore?

In questo mondo dominato da Angular e React, c'è ancora spazio per altri framework frontend?

Ti faccio un'altra domanda: quando ai suoi tempi c'era _solo_ JQuery, riuscivi a pensare che sarebbe mai nata un'altra libreria per il frontend?

Penso di aver sentito parlare la prima volta di Vue che c'era _solo_ Angular 1 in giro, e tutti gli altri framework sgomitavano per diventare famosi. C'è chi ce l'ha fatta, tipo React, e chi invece ci prova ancora e non ci riesce, tipo Ember.

**La differenza, molto spesso, la fa l'azienda che sponsorizza**: Google per Angular, e Facebook per React.

Nel caso di Vue, le aziende sponsorizzatrici non sono proprio dei nomi di primo piano: [StLib](https://stdlib.com/ "StdLib"), un'azienda che realizza un framework per codice serverless, **non la conoscevo prima di oggi**. Quindi, già su questo, partiamo svantaggiati. 

## Cosa mi ha colpito di VueJS

L'approccio di VueJS è molto semplice, e questo è uno dei principali punti di forza: 

* **non c'è bisogno di partire da un boilerplate**, ma basta un file html linkato a uno script js; 
* **non c'è bisogno di conoscere la programmazione super avanzata**, ma bastano le conoscenze di un normale programmatore; 
* **Somiglia in tutto e per tutto al primo angular**, quello che ho imparato a conoscere dannatamente e bene, e che funzionava alla grande; 
* **la documentazione è chiarissima** e sin dall'inizio si entra nel vivo di VueJS.

Non mi sono ancora addentrato molto, ma ho notato che il sistema dei componenti è semplicissimo e soprattutto **si può iniziare a lavorare senza mettere in mezzo i vari webpack**, systemjs, browserify e compagnia cantando. 

A questo punto una domanda me la sono fatta anch'io: 

## VueJS è un framework moderno? 

Nel senso, ha quelle caratteristiche di un **framework post-angular1** (utilizzo di un virtual dom, utilizzo di paradigmi reactive, server-side rendering...)  ?

Il team di Vue ha scritto un'analisi tecnica molto profonda di Vue vs ogni-altra libreria-frontend sul mercato, soffermandosi specialmente su React perchè è quella cui somiglia di più. La velocità non deve essere presa in considerazione come fattore determinante, perchè Vue e React hanno numeri molto simili; quello che cambia è in dettagli come la curva di apprendimento, cosa accade all'intera applicazione un componente si aggiorna, etc. 

Questo vuol dire che si, **Vue è una libreria frontend che si occupa solo della view**, lasciando ad altre librerie il compito del routing o di altre cose belle (autenticazione, autorizzazione, chiamate http...). 

## Sono solo all'inizio

A parte il primo tutorial, che mi ha lasciato un'ottima impressione, c'è ancora tanto da guardare. Vorrei provare a sviluppare qualcosa di meno semplice così da farmi un'idea di come funziona quando le linee di codice aumentano. Resisterà VueJS alla prova della complessità? 

Nei prossimi articoli proverò ad entrare più nel dettaglio di come funziona Vue. Keep reading! 