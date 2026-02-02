---
id: 362
title: 'loggare il tempo di esecuzione di un JS : console.time e console.timeEnd'
date: 2015-07-28T20:30:09+00:00
author: musikele
layout: post
guid: http://michelenasti.com/?p=362
permalink: /2015/07/loggare-il-tempo-di-esecuzione-di-un-js-console-time-e-console-timeend/
dsq_thread_id:
  - "3980783175"
categories:
  - Italiano
tags:
  - console.time
  - javascript
  - performance
---
Ogni browser moderno dispone di avanzatissimi strumenti di sviluppo, Firefox è stato il primo con Firebug (ora integra un suo strumento interno) mentre Chrome ha dettato lo standard con Chrome Developer Tools. A seguire tutti i browser che volevano definirsi moderni hanno dovuto creare delle conosole di sviluppo "serie", e supportare tutta una serie di costrutti Javascript per facilitare lo sviluppo e il debugging di queste applicazioni.

Se leggete questo blog significa che sapete aprire una di queste console e probabilmente lo fate ogni giorno per lavoro. Ma come misurare che il codice JS che stiamo scrivendo sia effettivamente veloce? O meglio, come valutarlo in relazione ad altre soluzioni alternative?

un tool estremamente utile è `console.time()` . Tutto il codice racchiuso tra `console.time()`  e `console.timeEnd()`  viene misurato in console. Per identificare il blocco di codice valutato possiamo (e secondo me dobbiamo) dare una stringa come label. Vediamo un esempio:

```javascript
console.time("test del for"); 

var i, arr = []; 
for(i=0; i&lt;100000; i++) { 
   arr.unshift(i); 
} 
arr.sort(); 

console.timeEnd("test del for");
```

Nel caso precedente creiamo un array di 100.000 posizioni, e inseriamo ogni nuovo elemento all'inizio. Dunque gli elementi sono disposti in odine decrescente. Poi lo ordiniamo con sort(). In console leggiamo: `test del for: 1041.271ms` .

Vediamo una variante che ci aspettiamo più semplice:

```javascript
console.time("test del for"); 

var i, arr = []; 
for(i=0; i&lt;100000; i++) { 
    arr[i]=i 
} 
arr.sort(); 

console.timeEnd("test del for");
```

In questo altro caso invece creiamo l'array inserendo gli elementi nell'ordine naturale. Dopo l'operazione di ordinamento viene loggato `test del for: 187.685ms` .

Cosa abbiamo dunque scoperto? che conviene ordinare array già ordinati 🙂 e che console.time(LABEL) e console.timeEnd(LABEL) sono una comoda funzione per verificare quanto tempo viene impiegato dal nostro codice javascript.

Esercizio per casa: conviene usare `document.getElementById("body").**createElement()` o `document.getElementById("body").innerHtml()`? A voi la scoperta!
