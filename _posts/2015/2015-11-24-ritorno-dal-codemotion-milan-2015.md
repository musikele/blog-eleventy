---
id: 452
title: di ritorno dal Codemotion Milan 2015
date: 2015-11-24T19:30:36+00:00
author: musikele
layout: post
guid: http://michelenasti.com/?p=452
permalink: /2015/11/ritorno-dal-codemotion-milan-2015/
dsq_thread_id:
  - "4347640331"
image: /wp-content/uploads/2015/11/wpid-wp-14482992317411.jpg
categories:
  - Italiano
tags:
  - actors
  - angular
  - codemotion
  - codemotion 2015
  - programmazione funzionale
  - react
  - React native
  - ringpop
---
Ed eccomi di ritorno dal [secondo Codemotion](http://milan2015.codemotionworld.com/) dell'anno! Questa volta sono stato a Milano, dove ho seguito talk interessanti purtroppo solo per il giorno di sabato. Qui potete trovare altri articoli sul [Codemotion di Roma](http://michelenasti.com/2015/01/codemotion-2015/).

Tralasciamo il disclaimer che do sempre, ossia che é importante andare alle conferenze perché si &#8220;annusano&#8221; i trend di oggi e di domani, e che comunque se non volete andare alle conferenze almeno aggiornatevi, perché tra 3-5 anni tutto sarà cambiato e voi... Meglio che non siate sempre gli stessi.

Parliamo del talk che mi é piaciuto di più : [**Ringpop**](https://github.com/uber/ringpop-node), un modulo lato server scritto in Node e Go da quei pazzi di Uber. Fondamentalmente é un sistema distribuito per scrivere codice lato server, in modo che sia scalabile, fault tolerant e sempre aggiornato. Ringpop si preoccupa di replicare i vari moduli del server e fa in modo che se uno di questi casca, gli altri sono capaci di accorgersene e possono anche riattivarlo. _Fiiigo_.

Un altro talk degno di nota é quello di [**Mario Fusco**](https://it.linkedin.com/in/mario-fusco-3467213) sui **paradigmi di programmazione concorrente per la JVM**: secondo Mario l'unico paradigma che conosciamo tutti é quello basato sui thread, perché lo abbiamo studiato all'Università, ma é anche quello più inadeguato perché é così di basso livello che é facile che tutto vada in lock. E allora Mario proponeva una serie di paradigmi, che non cito tutti perché non ce li ho qui a portata di mano, ma comunque ne esistono almeno 5. Io ricordo il modello ad [Attori](http://doc.akka.io/docs/akka/snapshot/scala/actors.html), oppure [RxJava](https://github.com/ReactiveX/RxJava), oppure i parallel streams con l'approccio funzionale introdotto in Java 8.

Il mio amico [Gianluca Esposito](http://esposi.to) ha poi presentato un talk su [**React Native**](https://facebook.github.io/react-native/), un framework che sta ottenendo un discreto successo di questi tempi. React di per sé é una libreria per creare la view di una webapp, e le sue prestazioni e il modello concettuale sono stati di sicuro l'innovazione frontend dell'anno, così come questo è stato l'anno della consacrazione per Angular.

Due parole su React Native, e del perché é meglio di Ionic/Phonegap/you-name-it : una volta imparato React si utilizzano gli stessi concetti (non si deve imparare nulla di nuovo) per creare **webapp native** che non girano in una webview, anzi i vari blocchi vengono renderizzati come componenti nativi veri dunque massima performance. E anche lo sviluppo é facilitato dal live reload che la piattaforma offre.

Altro talk degni di nota: &#8220;da Angular a React&#8221; (da cui ho preso l'immagine che vedete allegata), in cui lo speaker parlava principalmente delle difficoltà concettuali che ha avuto lui nel capire React, soprattutto quando vieni da un framework all-inclusive come Angular.

E ora? Aspettiamo con ansia Codemotion Rome 2016!