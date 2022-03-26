---
id: 17
title: Un breve riassunto sulla storia di Javascript
date: 2015-01-07T23:01:17+00:00
author: musikele
layout: post
guid: http://michelenasti.com/?p=17
permalink: /2015/01/un-breve-riassunto-sulla-storia-di-javascript/
dsq_thread_id:
    - '3958633921'
image: /wp-content/uploads/2015/01/ecma.gif
categories:
    - Italiano
tags:
    - javascript
---

Javascript è un linguaggio ideato da [Brendan Eich](http://en.wikipedia.org/wiki/Brendan_Eich 'Brendan Eich'), che all’epoca lavorava in Netscape. Il principale utilizzo di Javascript doveva essere quello di evitare rimbalzi di richeste / risposte da client a server solo per delle banali validazioni nei form. All’epoca, nel 1995, caricare una pagina poteva costare tantissimo e vedersela ritornare indietro con la scritta “devi accettare questa clausola per continuare” poteva essere moooolto costoso.

All’epoca di Javascript, la connessione più diffusa nel mondo era a 28.8kbps . Diciamo che adesso navighiamo a 1Mbit con le ADSL più sfigate, il ché vuol dire almeno 40 volte più veloce di allora.

Il primo nome di Javascript doveva essere Mocha, poi cambiato in LiveScript. Per accordi commerciali con la Sun, che spingeva per diffondere il linguaggio Java, si arrivò a Javascript, con cui non condivide praticamente nulla.

All’epoca in cui Netscape propose Javascript non vi erano altri browser concorrenti. Chi voleva andare sul web doveva per forza procurarsi (da floppy!) una copia di Netscape Navigator. Fu in questo frangente che Microsoft decise di sviluppare il primo browser, Internet Explorer, e per non farlo sentire inferiore al rivale lo fece iniziare direttamente dalla versione 3.

Tuttavia Microsoft implementò lo standard a modo proprio, e anzi uno standard non c’era neanche, infatti Microsoft per non incorrere in problemi legali chiamò il linguaggio JScript. Per gli sviluppatori ciò voleva dire solo una cosa: dovevano scrivere e testare due codici probabilmente incompatibili, uno per IE, uno per NN.

## EcmaScript

Nel 1997 era chiaro a tutti che bisognava standardizzare il linguaggio per evitare di impazzire. Fu proposta una bozza alla European Computer Manufacturers Association, che se ne uscì con Ecma-262.

Quello che pochi sanno è che EcmaScript e Javascript non sono _proprio_ la stessa cosa: Javascript è molto di più. Un’implementazione Javascript è composta dal **Core (EcmaScript),** un **Document Object Model (DOM)** e un **Browser Object Model (BOM).**

EcmaScript infatti non è legato ai Browser. EcmaScript definisce solo la **sintassi del linguaggio** ed infatti non è specificato nessun metodo per l’input o per l’output del linguaggio. I Browser sono solo un ambiente su cui il linguaggio gira, ma altri sistemi possono usare EcmaScript e tararlo sulle loro necessità, come Adobe Flash e il suo ActionScript, o più recentemente NodeJS.

Un cenno sulle versioni di EcmaScript bisogna farlo. La **prima versione** era la stessa del Netscape 1.1 con l’unico cambiamento del supporto a Unicode. Già Javascript 1.2 che Netscape effettivamente distribuì non era conforme a questa prima edizione.

La **seconda versione** fu solo un aggiustamento editoriale, curando omissioni, aggiunte, cambiamenti.

La **terza edizione** di EcmaScript è stata la prima edizione ad aggiornare lo standard. Con questa versione abbiamo Javascript così come lo conosciamo oggi, quindi stringhe, errori, output numerici, espressioni regolari, try-catch, e così via. Questa versione è considerata come quella che ha fatto fare a Javascript il salto di qualità come linguaggio.

La **quarta edizione** è un cambiamento radicale rispetto alla terza: per citarne alcuni, abbiamo variabili fortemente tipizzate, nuove strutture dati, classi vere e ereditarietà. Per molti era un salto generazionale troppo grande e in effetti un _branch_ della terza edizione, chiamato EcmaScript 3.1, fu sviluppato introducendo solo alcune piccole cose. La quarta edizione fu presto abbandonata dopo essere stata rilasciata, in favore della 3.1.

Per concludere, la **quinta edizione** dello standard è stata pubblicata nel 2009 e chiarisce una serie di ambiguità della versione 3 oltre ad aggiungere funzionalità, tra cui JSON, strict mode, e tanto altro che ha effetti su come EcmaScript interpreta ed esegue il codice.

## Come i browser hanno implementato gli standard

Come già scritto, Javascript 1.1 ebbe una tale popolarità che fu subito richiesto di standardizzarlo in EcmaScript, tuttavia i processi di standardizzazione richiedono tempo e la versione di Javascript 1.2, uscita con Netscape Navigator 4, non era compatibile neanche con lo standard da loro proposto. Internet Explorer invece aveva implementato in un altro modo una serie di feature mal-specificate che di fatto rendevano Jscript un linguaggio diverso da Javascript 1.1.

Insomma, per un po’ si andò avanti dicendo sia in Netscape che in Microsoft che i loro browser implementavano EcmaScript, _peccato_ che questo non era ancora uscito.

Soltanto con Netscape Navigator 4.06 si ebbe la prima implementazione di Javascript 1.3, che era finalmente compatibile con lo standard ECMA da poco finalizzato. Dopodiché Netscape donò il suo codice sorgente a Mozilla, e iniziò una lunga riscrittura del browser per migliorarne le prestazioni (e la manutenibilità). Questa operazione è stata un po’ la fine della storia di Netscape, ma questa è un’altra storia.

Nel 2008 tutti i principali browser (Internet Explorer, Firefox, Safari, Chrome e Opera) implementavano EcmaScript terza edizione. Da allora possiamo dire che la vita degli sviluppatori si è semplificata di molto.

## Conclusioni

Spero di avere fatto un po’ di chiarezza sulla storia di Javascript! Nei prossimi articoli vi parlerò del BOM e del DOM, e di come sono stati standardizzati e/o implementati dai vari browser.
