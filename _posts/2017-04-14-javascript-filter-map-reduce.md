---
paginate: true
comments: true
author: musikele
title: 'Diventare Senior™ con Javascript: le funzioni filter, map, reduce'
category: Italiano
layout: post
date: '2017-04-14 10:09:00'
tags:
  - post
- javascript
- filter
- map
- reduce
---
Si può lavorare per anni con javascript senza mai arrivare a conoscere tre funzioni fantastiche (e standard) che permettono di scrivere codice veloce e testabile.  

E' vero che si diventa senior principalmente con l'esperienza, ma se dite di aver lavorato per 3+ anni con JS dovete anche mostrare che avete un'_esperienza di un certo livello_.

**Aprite la console del browser e provate gli esempi!**

### A partire da un array, come filtriamo solo gli elementi pari senza usare il ciclo for?

```javascript
let arr = [1, 2, 3, 4, 5, 7, 8];

let filtered = arr.filter((elem) => { return elem % 2 === 0 });
console.log(filtered);
```

`filter()` prende in input una funzione di _test_ che viene eseguita su ogni elemento dell'input: se la funzione restituisce `true`, `elem` viene aggiunto all'array in output. 

### Come raddoppiamo tutti gli element di un array senza usare il ciclo for? 

```javascript
let mapped = arr.map((elem) => { return elem * 2 });
console.log(mapped);
```

Anche qui la funzione `map()` prende in input una funzione che viene eseguita su ogni elemento dell'input. Per ogni elemento, questo viene _trasformato_ in un altro valore in base al risultato della funzione. 

### Come sommiamo tutti gli elementi di un array senza usare il ciclo for? 

```javascript
let reduced = arr.reduce((prev, elem) => { return prev + elem }, 0);
console.log(reduced);
```

`reduce()` è più complessa da spiegare, ma poi sarà facilissima da usare: permette di applicare una funzione _N-a-1_ dove da un array tiriamo fuori un unico risultato. Nel nostro esempio abbiamo applicato la somma (voi come esercizio potreste provare a tirare fuori la media!). 

`reduce()` prende in input due elementi: una funzione e un elemento di partenza (Sarebbe lo `0` specificato in fondo). Per capire cosa accade, facciamo un esempio sull'array `[8, 7]`. 

Alla prima iterazione viene chiamata la funzione con `prev = 0` e `elem = 8`: siccome stiamo iterando sul primo elemento e non c'è nessun elemento precedente, viene usato il secondo argomento di `reduce` come valore di inizio (ricordate quello `0` lì in fondo?). A questo punto viene eseguita la somma, che è `8`. 

Alla seconda iterazione, la funzione viene chiamata con `prev = 8` (risultato dell'iterazione precedente!) e `elem = 7`:  Anche in questo caso verrà eseguita la somma che è `15`, che sarà anche l'output di `reduce`. 

### (Domanda implicita del lettore: Perchè tutto st'accanimento contro il ciclo for?)
Il ciclo for è un ottimo costrutto per iterare gli array, tuttavia non fa capire a chi legge cosa sta accadendo, oltre al fatto di non essere manutenibile. e componibile. 

Supponiamo di voler filtrare tutti i numeri pari da un array; successivamente raddoppiarli e poi sommarli (ossia, la composizione delle tre domande precedenti). 

Con le funzioni presentate prima, ecco la soluzione: 

```javascript
let result = arr
	.filter((elem) => elem % 2 === 0)
	.map((elem) => elem * 2)
	.reduce((prev, elem) => prev + elem, 0);

console.log(result);
```

E' ovvio che si può scrivere anche con un bel (paio di) for. Ma quante righe ci vogliono? e rileggendolo dopo sei mesi, si capisce? 

Per concludere, con la svolta funzionale di altri linguaggi (chi ha detto Java?!) questi concetti sono stati applicati anche altrove, proprio per la loro semplicità e componibilità. Magari hanno altri nomi, ma il funzionamento è lo stesso. Cercateli e ...usateli!