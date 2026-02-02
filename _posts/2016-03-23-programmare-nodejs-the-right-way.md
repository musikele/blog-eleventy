---
id: 640
title: Come programmare in NodeJS, the right way
date: 2016-03-23T09:46:28+00:00
author: musikele
layout: post
guid: http://michelenasti.com/?p=640
permalink: /2016/03/programmare-nodejs-the-right-way/
dsq_thread_id:
  - "4685869220"
categories:
  - Italiano
tags:
  - javascript
  - node
  - nodejs
headerImg: /uploads/2016/03/nodejs.png
---

Sono stato al workshop tenuto da [Matteo Collina](https://www.linkedin.com/in/matteocollina) a Roma, che è da poco diventato uno dei Node Core Developer (tradotto: contribuisce al linguaggio e al runtime di NodeJS).

Il workshop aveva, come obiettivo, quello di realizzare delle API Rest con [HAPI](http://hapijs.com/) e NodeJS. HAPI è un altro framework concorrente del più noto [Express](http://expressjs.com/it/).

Con Javascript non posso dire di essere l'ultimo arrivato, eppure ho incontrato molte difficoltà principalmente perchè non ho mai approcciato un framework di testing "serio" lato backend e poi perchè Matteo usa VIM ed è velocissimo. Molte volte non riuscivo a stargli dietro 🙂

* E' impossibile programmare in NodeJs senza realizzare **test unitari**. I test garantiscono che possiamo sopravvivere a un refactoring. Come framework di test Matteo ci ha suggerito "[lab](https://github.com/hapijs/lab)", che funziona bene per il backend.
* La **struttura delle directory "standard"** viene presa pari pari dal progetto [node](https://github.com/nodejs/node) quindi creeremo un unico entry point che espone tutte le nostre funzionalità; nella cartella `lib` metteremo tutti i file .js che utilizziamo, mentre in `src` metteremo il codice nativo (C o C++). Ovviamente in `node_modules` ci saranno tutti i package esterni installati tramite `npm install -save`.
* JS è molto libertino con le **code convention**, infatti anche i core developer di Node ne usano di diverse; **non c'è uno standard** _à-la-Java_ da seguire. Ma se volete un tool che aggiusti il codice per voi, potete usare `standard` (`npm install standard -g`). Questo tool eliminerà tutti i punti e virgola, quindi se siete degli amatori del genere installate `semistandard` (da _semicolon_, punto e virgola in inglese).
* Quanto è **veloce programmare** in Node? tantissimo. Non riesco a credere di aver scritto una API Rest con autenticazione, test e altre feature in 8 ore di lavoro. Spiegazioni incluse!
* Oltre alla velocità di programmazione c'è anche **velocità di esecuzione**, infatti il single thread model di JS permette di avere un'elevata concorrenza e un'alta affidabilità.
* Io personalmente penso che Node sia un candidato ideale per un'**architettura a microservices**, perchè se cambia un requisito si fa prima a riscrivere tutto che a modificare il sorgente.
* Matteo ci ha raccontato di aver scritto un'app in Node che ha saturato il cavo di rete, nel senso che inviava più dati di quanti ne potesse reggere la macchina (qualcosa come 800 Gbit !)... Inoltre **NodeJs richiede meno risorse** (in termini di hardware) di altri linguaggi più strutturati.
* Per cosa Node **non va bene**? Per le applicazioni finanziare o che comunque devono lavorare con i **numeri**, perchè Node ha solo i double e questo genera problemi di arrotondamento. Inoltre **non supporta ancora la tail recursion**, quindi potreste avere problemi con chiamate ricorsive estreme. Tutto questo potrebbe cambiare con le prossime versioni di Node (che hanno alcune feature sperimentali attivabili via `-harmony`).
* **Niente minificazione** o cose strane tipo webpack o babel su Node! Solo plain JS con quello che node mette a disposizione.

Questi sono alcuni degli appunti che ho preso quel giorno, ci sono tanti altri aspetti che meriterebbero di essere approfonditi più tante storielle e aneddoti che Matteo ci ha raccontato, ma quelli meritano storie a sè! Buon JS a tutti 🙂
