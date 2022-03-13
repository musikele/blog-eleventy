---
id: 128
title: WebApp nel tempo libero con approccio MEAN
date: 2015-02-06T10:17:38+00:00
author: musikele
layout: post
guid: http://michelenasti.com/?p=128
permalink: /2015/02/webapp-nel-tempo-libero-con-approccio-mean/
dsq_thread_id:
  - "3979788260"
image: /wp-content/uploads/2015/02/650_1000_mean_stack.png
categories:
  - Italiano
tags:
  -  javascript
  - MEAN
  - trend
  - webapp
---
[<img class=" size-medium wp-image-130 alignright" src="https://i2.wp.com/michelenasti.com/wp-content/uploads/2015/02/650_1000_mean_stack-300x203.png?fit=300%2C203" alt="MEAN stack" srcset="https://i2.wp.com/michelenasti.com/wp-content/uploads/2015/02/650_1000_mean_stack.png?resize=300%2C203 300w, https://i2.wp.com/michelenasti.com/wp-content/uploads/2015/02/650_1000_mean_stack.png?w=650 650w" sizes="(max-width: 300px) 100vw, 300px" data-recalc-dims="1" />](https://i2.wp.com/michelenasti.com/wp-content/uploads/2015/02/650_1000_mean_stack.png)E' una di quelle domande poste da un amico che ha letto il mio precedente articolo ([pro e contro di Angular dopo due mesi di lavoro](http://michelenasti.com/2015/02/pro-e-contro-di-angularjs-dopo-2-mesi-di-lavoro/)). Lui è un ex-collega universitario che da qualche tempo non ha più la possibilità di programmare; siccome ha voglia di aggiornarsi, ha chiesto un po' in giro quali sono gli ultimi trend.

Quel che voleva realizzare è un piccolo software per la gestione della biblioteca presso cui presta servizio. E allora sono partito con la prima domanda: _dato che vuoi approfittarne per aggiornarti, hai **molto** tempo libero? _

E poi via con le tristi ma necessarie frasi a effetto: **il tempo delle pagine generate lato server è finito**, e non sono <del>solo</del> io ad averlo sentenziato 🙂

Non è che i server non esistono più, anzi; il loro ruolo adesso è fortemente cambiato. I server ormai prendono i dati dal DB, li validano, li assemblano, li trasformano, e li mandano alla UI che si preoccupa invece di renderizzare le pagine.

A inizio anno ho risposto a un sondaggio on line che dà l'idea di dove vuole andare a parare il [web development nel 2015](http://tutorialzine.com/2014/12/the-languages-and-frameworks-that-you-should-learn-in-2015/): Il vincitore a mani basse è **NodeJS**, motivo per cui bisogna assolutamente essere dei maestri di Javascript.

Se si approccia NodeJS bisogna imparare uno stack tecnologico completamente rivoluzionato rispetto al vecchio caro LAMP (**L**inux, **A**pache, **M**ySql, **P**hp). Il nuovo approccio viene definito "**MEAN"** che sta per **M**ongoDB, **E**xpress, **A**ngular, **N**odeJS.

Mi vorrei soffermare giusto un attimo sul fatto che in MEAN manchi Javascript nella definizione, ma di fatto c'è. **Javascript è alla base di tutte queste tecnologie**; una volta (all'università) ci veniva proposto di usare JS solo per fare un po' di validazione lato client e niente più; invece è un Linguaggio di Programmazione come tutti gli altri - Java, C, PHP, etc. - e come tale va _studiato approfonditamente_. Tra le tante cose è un linguaggio _funzionale_, ci sono almeno quattro modi per creare un oggetto, ed è importante conoscerli tutti; è dinamico, è prototipizzato, ed ha un concetto di "scope" da afferrare bene!

I vecchi problemi di compatibilità dei browser, da IE9 in poi, sono stati praticamente risolti (in passato ogni browser faceva di testa sua, e gli standard non venivano MAI rispettati); ora sviluppare webapp è un piacere, e con browser disponibili in ogni smartphone diventa facilissimo trasformare una webApp in un'App.

Cosa manca all'elenco? Ah si! [Bootstrap](http://getbootstrap.com/) 🙂  nessuno di noi nasce web designer, motivo per cui utilizzando Bootstrap il nostro sito parte con un livello di bellezza decente.

## Cazzate! Questa roba non diventerà mai mainstream

Forse è vero. Javascript stesso ci ha messo 10 anni per passare da chicca presente nei browser a linguaggio a sé stante. Ma il succo non è di imparare qualcosa per poi riportarla nel mondo del lavoro; l'intramontabile Java e gli immortali database relazionali dureranno molto più a lungo delle nostre stesse vite. Ciò che conta davvero è capire la filosofia alla base di questi nuovi approcci, e perché sono così diversi dallo sviluppo che si faceva anche solo 5 anni fa.

Se nelle università o nei corsi _professionali_ non accennano neanche un po' ad Ajax, o spiegano _solo_ la generazione di pagine lato server, allora è il momento che vi aggiornate da voi.