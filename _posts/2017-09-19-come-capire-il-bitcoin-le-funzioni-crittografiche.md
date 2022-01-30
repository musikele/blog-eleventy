---
paginate: true
comments: true
author: musikele
title: 'Come capire il bitcoin: le funzioni crittografiche'
layout: post
date: 2017-09-19 00:00:00 +0000
tags:
- bitcoin
- crittografia
- hash
categories: Italiano
category: Italiano
---


Ormai sono un paio di mesi che mi sono appassionato all'anarchico mondo del bitcoin, ossia questa moneta virtuale che esiste su internet che gode di un'infinita serie di proprietà positive: è anonima, decentralizzata, incontrollabile, incopiabile, incraccabile...

Finchè si trattava di scimmiottare gli agenti di borsa era anche divertente, ma da quando abbiamo tenuto il [primo meetup a Salerno sul Bitcoin](https://www.meetup.com/it-IT/preview/devday-salerno/events/242583299) ho capito che bisognava assolutamente provare a capirne di più.

E allora mi sono iscritto a [questo corso on line](https://www.coursera.org/learn/cryptocurrency/) che frequento al mattino presto e che sta rispolverando concetti che avevo "quasi" dimenticato - anni fa ho sostenuto l'esame di sicurezza su reti e da allora ho promesso a me stesso che non avrei mai più fatto sicurezza, com'è bello quando la vita ti contraddice (e mi è capitato già un'altra decina di volte, pensate voi...)

In questo articolo vi parlo di un concetto chiave alla base di bitcoin, blockchain e tutto il resto appresso: le funzioni Hash.

### le funzioni Hash

Hash in italiano significa *carne tritata*, ma onestamente non ho mai visto un inglese fare le polpette quindi dobbiamo fidarci di google. Tuttavia carne tritata gli si addice: in effetti quello che fa una funzione hash è proprio di prendere un messaggio (pensate a una stringa, ma in realtà può essere qualunque oggetto), e calcolarne un valore di lunghezza fissa. Vediamone un esempio, mi appoggio a NodeJS per comodità e perchè è uno dei più immediati, ma volendo potete giocare con qualsiasi linguaggio perchè le funzioni di crittografia sono native in ogni ambiente.

Creiamo una directory di esempio e installiamo il modulo `crypto-js`:

```
$ mkdir esempi-crypto
$ cd esempi-crypto
$ npm i -S crypto-js 

```

Forse l'environment vi darà degli errori che manca il file `package.json`, ma noi freghiamocene.

Ora siamo pronti a sbizzarrirci. Da console apriamo l'environment invocando il comando `node`:

```
$ node 
> let CryptoJS = require('crypto-js')
undefined

```

Abbiamo appena importato la libreria che contiene le funzioni crittografiche più diffuse. Non preoccupatevi per quell'undefined.

E' il momento di provare a fare l'hash di un messaggio. L'algoritmo più usato e considerato più sicuro è SHA256, ossia prende qualunque messaggio e lo trasforma in una stringa di 256 bits. Proviamolo:

```
> let message = "This is my password" 
> let sha = CryptoJS.SHA256(message)

> console.log(sha)
{ words:
   [ -355107296,
     1827616648,
     440617958,
     157501257,
     219431749,
     -1604612205,
     -2070175323,
     1954178935 ],
  sigBytes: 32 }
undefined

> console.log(sha.toString())
ead57e206cef37881a434be6096347490d144345a05b8f93849ba1a5747a6777

```

Cosa è accaduto nel primo caso? `sha` è un oggetto contenente dei byte (tutta sta roba, a livello crittografico, opera su byte e non vorrei sconvolgervi ma SI, si può fare anche in nodejs e javascript in generale)

Però dei byte non ce ne facciamo niente, siamo pur sempre esseri umani e se vogliamo vedere `sha` come stringa basta chiamare il metodo `toString()` che ci restituisce lo stringone che vedete in fondo.

### "A me sembra solo una stringa randomica..."

Hai ragione a pensarlo, caro lettore, però non è così. Le funzioni hash (e quindi anche SHA256 che abbiamo usato, che è una delle tante funzioni hash) garantiscono le seguenti proprietà:

* Una funzione hash prende ogni possibile stringa come input, e restituisce una stringa di dimensioni fisse.

* la funzione deve essere computata efficientemente: nell'esempio precedente accade tutto in pochissimi microsecondi.

* la funzione è [collision-resistant](https://en.wikipedia.org/wiki/Collision_resistance): è impossibile (per essere precisi, è difficile farlo in tempi ragionevoli) per chiunque trovare due stringhe diverse `x`e `y` che restituiscano lo stesso hash (matematicamente: `H(x) = H(y)`).

* la funzione hash *nasconde* il messaggio originario: se vi do l'hash di un messaggio H(x), è impossibile risalire al messaggio. Ciò è particolarmente vero se concateniamo una stringa casuale prima del messaggio (chiamata *salt*), che noi potremmo definire come una "chiave" , per intenderci.

* la funzione hash è *puzzle-friendly*: per ogni possibile hash, se il salt è scelto davvero a caso, è infattibile risalire al messaggio se non cercando nell'insieme di tutte le chiavi possibili. L'idea quindi è di fornire un *puzzle* di questo tipo: dato un salt (casuale) e un insieme finito di soluzioni Y, trovare un messaggio tale che la chiave, concatenata al messaggio, appartenga all'insieme delle soluzioni. Per risolvere questo puzzle bisognerà scorrere tutti i possibili messaggi.

Bel casino! Scommetto che la terza proprietà vi ha complicato la comprensione.

Ma internet è pieno di risorse e ho trovato questa immagine che spiega molte cose. Il bitcoin si affida proprio a questo genere di puzzle per il mining. Nel primo esempio, data una chiave `Cheescake`, trovare un hash che inizi con la lettera `A`.

Nel secondo esempio, si parte con la stringa `Ice ice baby - too cold!`​ e bisogna trovare un hash che inizi con `Hi`.

Nel terzo esempio, si parte con la stringa `Who let them out?`​ e si cerca un hash che inizi con `Dog`​.

<img src="{{ site.baseurl }}/images/solvingahashpuzzle.png" alt="" class="">

Questa immagine l'ho presa dal sito [3583 bytes free, ready?](https://3583bytesready.net/2016/09/06/hash-puzzes-proofs-work-bitcoin/) che ha fatto il lavoro sporco per me.

Come possiamo vedere, per risolvere il primo puzzle ci sono voluti 15 tentativi, per il secondo 1797 e per risovlere il terzo ben 773177.

Questo gioco non è altro che il **mining**: a partire dall'hash del blocco precedente, trovare un numero che restituisca un hash che inizia con ... qualcosa, poi vedremo cosa. Questo problema non è facile e richiede milioni di milioni di calcoli, motivo per cui si ricevono dei bitcoin come premio.

Non mi resta  che salutarvi con l'hash di `Buona giornata`:

```
9b1ec4ffe99ed6f9c898e91d79d197a7399519c53b3b0671d4e34664d6dcae21
```

Alla prossima!