---
id: 350
title: Ci ho messo del tempo per capire il passaggio di parametri delle funzioni Javascript
date: 2015-07-21T18:30:10+00:00
author: musikele
layout: post
guid: http://michelenasti.com/?p=350
permalink: /2015/07/ci-ho-messo-del-tempo-per-capire-il-passaggio-dei-parametri-in-javascript/
dsq_thread_id:
  - "3958634138"
categories:
  - Italiano
tags:
  - funzioni
  - javascript
  - parametri
  - sintassi
---
Oggi vi parlo di qualcosa che sin dall'inizio non avevo compreso a fondo: gli argumenti delle funzioni in Javascript (o ECMAScript, che sarebbe il nome completo). Quando un anno fa ho compreso questa storia degli "_arguments_" mi si è aperto un mondo!

Anni fa infatti mi chiedevo com'è possibile che in JS si possa passare un numero arbitrario di parametri alle funzioni, per di più senza specificare il tipo degli argomenti. All'epoca (circa 10 anni fa) Java era il mio linguaggio preferito, e avrei voltuo che tutto somigliasse a Java. Per fortuna così non è!

A una funzione JS non importa quanti parametri vengono passati, nè si interessa del tipo. Ad esempio, potreste definire una funzione con due parametri ma poi potreste passarne tre, o uno, zero, mille - davvero, non è _sintatticamente_ importante.

Questo accade perchè **gli argomenti di una funzione JS vengono rappresentati internamente come un array**. L'array si chiama `arguments` e lo si può utilizzare all'interno di una funzione per ricavare il valore degli elementi passati.

Si può accedere a tutti i parametri di una funzione usando la notazione con le parentesi quadre, dunque, e `arguments[0]` sarà il primo parametro, `arguments[1]` il secondo, e così via. Si può utilizzare `arguments.length` per conoscere il numero di parametri passati.

Dunque potremmo scrivere una funzione nel modo classico di JS (esplicitando i parametri):

```javascript
function sayHi(name, message) {
    alert("ciao " + name + ", " + message);
}
```

oppure usando `arguments`:

```javascript
function sayHi() {
    alert("ciao " + arguments[0] + ", " + arguments[1]);
}
```

Come si può vedere, la funzione sayHi è stata definita senza nessun argomento in input, eppure si comporterà allo stesso modo. Questo mostra anche una delle caratteristiche di Javascript: **i parametri col nome sono una convenienza, non una necessità**.

Ne approfitto anche per dire che, se usate lo _"strict mode"_ di JS, non potrete assegnare valori a `arguments`. Ossia `arguments[0] = "ciao"` restituirà un errore!

Gli argomenti col nome possono anche essere utilizzati con arguments, javascript non si lamenterà.

### L'overloading in Javascript (che non esiste)

L'overloading, così come definito negli altri linguaggi, in JS semplicemente non esiste. Per ottenere un effetto simile, ossia una funzione che si comporta diversamente in base al numero o al tipo degli argomenti in input, dobbiamo fare una sorta di switch su `arguments.length` o sul tipo degli argomenti.  Ciò che realmente conta in JS è il nome della funzione, e se due funzioni hanno lo stesso nome, vale sempre l'ultima analizzata.

Analizziamo il seguente snippet di codice:

```javascript
function aggiungiUnNumero(num) {
   return num+100;
}

function aggiungiUnNumero(num) {
   return num1+200; 
}

var result = aggiungiUnNumero(100) //300
```

la seconda definizione di aggiungiUnNumero ha sovrascritto la prima !

### Conclusioni

Ci sono tante parti di JS che ho capito tardi, altre che non ho ancora capito. Una cosa che mi ha fatto intuire la potenza di JS è il fatto che una funzione può prendere in input altre funzioni, e restituirne una come output. Di questo parlerò in futuro. Adios!