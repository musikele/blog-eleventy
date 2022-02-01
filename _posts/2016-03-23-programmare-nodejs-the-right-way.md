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
  - post
  - javascript
  - node
  - nodejs
---
<a href="https://i1.wp.com/michelenasti.com/wp-content/uploads/2015/10/node-js-logo.png" rel="attachment wp-att-390"><img class="aligncenter size-medium wp-image-390" src="https://i1.wp.com/michelenasti.com/wp-content/uploads/2015/10/node-js-logo-300x150.png?fit=300%2C150" alt="node-js-logo" srcset="https://i1.wp.com/michelenasti.com/wp-content/uploads/2015/10/node-js-logo.png?resize=300%2C150 300w, https://i1.wp.com/michelenasti.com/wp-content/uploads/2015/10/node-js-logo.png?w=600 600w" sizes="(max-width: 300px) 100vw, 300px" data-recalc-dims="1" /></a>

Sono stato al workshop tenuto da [Matteo Collina](https://www.linkedin.com/in/matteocollina) a Roma, che è da poco diventato uno dei Node Core Developer (tradotto: contribuisce al linguaggio e al runtime di NodeJS).

Il workshop aveva, come obiettivo, quello di realizzare delle API Rest con [HAPI](http://hapijs.com/) e NodeJS. HAPI è un altro framework concorrente del più noto [Express](http://expressjs.com/it/).

Con Javascript non posso dire di essere l'ultimo arrivato, eppure ho incontrato molte difficoltà principalmente perchè non ho mai approcciato un framework di testing &#8220;serio&#8221; lato backend e poi perchè Matteo usa VIM ed è velocissimo. Molte volte non riuscivo a stargli dietro 🙂

  * E' impossibile programmare in NodeJs senza realizzare **test unitari**. I test garantiscono che possiamo sopravvivere a un refactoring. Come framework di test Matteo ci ha suggerito &#8220;[lab](https://github.com/hapijs/lab)&#8220;, che funziona bene per il backend.
  * La **struttura delle directory &#8220;standard&#8221;** viene presa pari pari dal progetto [node](https://github.com/nodejs/node) quindi creeremo un unico entry point che espone tutte le nostre funzionalità; nella cartella <span class="lang:default decode:true crayon-inline ">lib</span>  metteremo tutti i file .js che utilizziamo, mentre in <span class="lang:default decode:true crayon-inline ">src</span>  metteremo il codice nativo (C o C++). Ovviamente in <span class="lang:default decode:true crayon-inline">node_modules</span> ci saranno tutti i package esterni installati tramite <span class="lang:default decode:true crayon-inline">npm install <package> -save</span> .
  * JS è molto libertino con le **code convention**, infatti anche i core developer di Node ne usano di diverse; **non c'è uno standard** _à-la-Java_ da seguire. Ma se volete un tool che aggiusti il codice per voi, potete usare <span class="lang:default decode:true crayon-inline">standard</span> (<span class="lang:default decode:true crayon-inline ">npm install standard -g</span> ). Questo tool eliminerà tutti i punti e virgola, quindi se siete degli amatori del genere installate <span class="lang:default decode:true crayon-inline ">semistandard</span> (da _semicolon_, punto e virgola in inglese).
  * Quanto è **veloce programmare** in Node? tantissimo. Non riesco a credere di aver scritto una API Rest con autenticazione, test e altre feature in 8 ore di lavoro. Spiegazioni incluse!
  * Oltre alla velocità di programmazione c'è anche **velocità di esecuzione**, infatti il single thread model di JS permette di avere un'elevata concorrenza e un'alta affidabilità.
  * Io personalmente penso che Node sia un candidato ideale per un'**architettura a microservices**, perchè se cambia un requisito si fa prima a riscrivere tutto che a modificare il sorgente.
  * Matteo ci ha raccontato di aver scritto un'app in Node che ha saturato il cavo di rete, nel senso che inviava più dati di quanti ne potesse reggere la macchina (qualcosa come 800 Gbit !)... Inoltre **NodeJs richiede meno risorse** (in termini di hardware) di altri linguaggi più strutturati.
  * Per cosa Node **non va bene**? Per le applicazioni finanziare o che comunque devono lavorare con i **numeri**, perchè Node ha solo i double e questo genera problemi di arrotondamento. Inoltre **non supporta ancora la tail recursion**, quindi potreste avere problemi con chiamate ricorsive estreme. Tutto questo potrebbe cambiare con le prossime versioni di Node (che hanno alcune feature sperimentali attivabili via <span class="lang:default decode:true crayon-inline ">-harmony</span> ).
  * **Niente minificazione** o cose strane tipo webpack o babel su Node! Solo plain JS con quello che node mette a disposizione.

Questi sono alcuni degli appunti che ho preso quel giorno, ci sono tanti altri aspetti che meriterebbero di essere approfonditi più tante storielle e aneddoti che Matteo ci ha raccontato, ma quelli meritano storie a sè! Buon JS a tutti 🙂