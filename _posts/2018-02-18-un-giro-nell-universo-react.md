---
paginate: true
comments: true
author: musikele
title: Un giro nell'universo React
category: Italiano
layout: post
date: 2018-02-18 00:00:00 +0000
tags:
- react
- frontend
- javascript
header-img: "/images/1024px-React-icon.svg.png"
description: 'Impressioni su React dopo un mese di lavoro. '
---
Da quando **React** è stato rilasciato da Facebook è diventato rapidamente una delle librerie più usate per la realizzazione di interfacce web. Come mai?

![]({{ site.baseurl }}/images/1024px-React-icon.svg.png "React Logo")

## Perchè React piace ai millenials

Abbiamo iniziato a sentir parlare di React in un momento storico in cui AngularJS 1.x era al massimo del suo hype, e si iniziava a progettare Angular2. Quei fantastici ragazzotti della Silicon Valley quando generano tanto hype in genere lo fanno perchè c'è un motivo, ossia ci vedono lungo e in effetti React è con noi da ormai tre anni, che è tantissimo per una libreria frontend.

I motivi per cui piace sono:

* **E' una libreria che si occupa solo della view**, quindi tutto il resto è lasciato nelle mani del programmatore. Penso a: comunicazione col server, traduzioni, o più semplicemente gestione dello stato. Per ognuna di queste cose si possono usare librerie esterne (fatte molto bene).
* A parte una curva d'apprendimento "media", tutto sommato **React è abbastanza semplice da imparare e usare**.
* Ma quali sono i vantaggi rispetto a Angular1? (Lo confronto con questo framework perchè, all'epoca in cui fu rilasciato React, c'era solo lui.) Quello che nessun programmatore ammette di amare, ma che invece è un gran vantaggio, è **il _live preview_ dei cambiamenti**, sfruttando le magie di webpack e dell'hot module reloading, per cui i tempi di sviluppo si riducono enormemente.
* Inoltre **React gestisce i cambiamenti di migliaia di componenti su una sola pagina senza appesantire il browser**, anzi è estremamente veloce nel capire cosa è cambiato e cosa deve ri-renderizzare. 
* E' **sponsorizzato da FB, è utilizzato in produzione da tante startup di grande successo** (tra cui AirBnB) e questo ha contribuito all'hype.

La mia paura più grande era di dover imparare un mix di tecnologie che non  conoscevo:  jsx, webpack, es6... Da create-react-app in poi tutto questo è una bestia "addomesticabile".

## L'uso di ES6

**React può essere usato anche con ES5**, ossia la versione precedente di Javascript che non aveva tante feature, e a dirla tutta può addirittura essere usato senza JSX, che sarebbe un modo per scrivere HTML dentro JS. All'atto pratico tutto ciò è infattibile, **i benefici di JSX (e di babel/webpack che compilano/trasformano) sono impagabili.**

Ma è con **ES6** (la versione di js che contiene arrrow functions, destructuring, etc.) che React viene di solito scritto/usato, ed è quindi con ES6 che troverete codice, esempi e documentazione. Da convinto programmatore NodeJS, la sintassi che più detesto è `import Something from './something'` e la  corrispettiva `export const`.  Comunque, ci si abitua in fretta.

## React vs Vue

Ci sarebbe tanto da dire, ma voglio concludere ripetendo che questo post viene da neanche un mese di React quindi le mie opinioni potrebbero cambiare. 

Io conosco abbastanza bene anche VueJS, e sinceramente trovo anche questo framework fatto bene con tante feature e una logica di fondo molto chiara, per cui bisogna fare meno scelte rispetto a React (es. come gestire lo stato, come strutturare i componenti ...) ma React ha uno sponsor più grande e questo garantisce, sulla carta, una vita più lunga. 

E voi che esperienza avete? Se volete scrivete le vostre impressioni nei commenti, saranno sicuramente utili a chi passa per questo blog e cerca informazioni. 