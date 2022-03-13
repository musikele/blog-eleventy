---
id: 251
title: IntelliJ IDEA, alla fine è arrivato l'amore
date: 2015-04-09T13:30:21+00:00
author: musikele
layout: post
guid: http://michelenasti.com/?p=251
permalink: /2015/04/intellij-idea-alla-fine-e-arrivato-lamore/
dsq_thread_id:
  - "3979649259"
categories:
  - Italiano
tags:
  -  ide
  - intellij idea
  - jetbrains
  - produttività
---
Alla fine è scoccato l'amore.[<img class="alignright wp-image-252 size-medium" src="https://i2.wp.com/michelenasti.com/wp-content/uploads/2015/04/idea-300x300.png?fit=300%2C300" alt="IntelliJ Idea" srcset="https://i2.wp.com/michelenasti.com/wp-content/uploads/2015/04/idea.png?resize=300%2C300 300w, https://i2.wp.com/michelenasti.com/wp-content/uploads/2015/04/idea.png?resize=150%2C150 150w, https://i2.wp.com/michelenasti.com/wp-content/uploads/2015/04/idea.png?w=512 512w" sizes="(max-width: 300px) 100vw, 300px" data-recalc-dims="1" />](https://i2.wp.com/michelenasti.com/wp-content/uploads/2015/04/idea.png)

A lavoro non ne potevo più di Eclipse che si bloccava per ogni dieci minuti, anche per le operazioni più comuni. Certe volte bastava ridurlo a icona e Windows 8 lo swappava su disco, e ci mettevo almeno 10 minuti per riprendere possesso del PC. Per non parlare degli enormi quantitativi di RAM buttati al vento.

Ho provato [IntelliJ IDEA](https://www.jetbrains.com/idea/) perchè già avevo provato [WebStorm](https://www.jetbrains.com/webstorm/), e come editor web/javascript l'ho trovato il top. Così ho pensato, dato che a lavoro usiamo JavaEE sul backend e AngularJS/Javascript sul frontend, forse IntelliJ può essere la soluzione!

Ecco alcune cose che mi hanno sorpreso piacevolmente, in ordine sparso:

  * possibilità di impostare il keymap di Eclipse, così non bisogna imparare tutte le combinazioni di tasti da zero. Non tutte sono mappate, ma per fortuna nei menù sono chiaramente elencate. Quella che mi manca di più è Ctrl+1.
  * Riconosce da solo i bean di Spring e se un bean non viene trovato non vedi il simboletto verde di fianco al nome! La cosa non è banale visto che noi abbiamo una configurazione di Spring e di Maven completamente fuori standard.
  * IntelliJ ha capito da solo che i nostri progetti erano "mavenizzati" e mi ha fornito una bella scheda per gestire tutti i task. (piccolo bug: il tasto "skip tests" non funziona).
  * La gestione di SVN (o meglio [VCS](http://en.wikipedia.org/wiki/Revision_control)) è completamente diversa rispetto ad Eclipse; infatti ho dovuto fare diversi esperimenti prima di capire esattamente come fare per aggiornarmi, mergiare (si può dire?) e committare. Alla fine trovo quella di IntelliJ più intuitiva (e soprattutto più veloce).
  * Integrare [JRebel](http://zeroturnaround.com/software/jrebel/) è costato il tempo di un click (install il plugin, fatto).
  * Posso debuggare contemporaneamente Java e Javascript dall'IDE! Finalmente non devo impazzire con la Chrome Developer Tools, che rimane uno strumento indispensabile per capire cosa sta succedendo, ma la comodità di capire (e modificare) il codice da un solo IDE è impagabile.
  * trovo che il modo di gestire le varie impostazioni dell'IDE sia molto più logico e ordinato rispetto a Eclipse.
  * Ancora su SVN: purtroppo qualcuno del mio team ha committato i .project e i .classpath ; se li cancellassimo da SVN succederebbe un bel casotto, dato che al successivo update eclipse cancellerebbe questi file e impazzirebbe. Con intelliJ ho spostato tutti questi file in una lista di commit separata (chiamata "non committare!") così non mi compaiono più nell'elenco dei file in uscita.
  * L'integrazione con il workspace di Eclipse è stata fantastica. Addirittura sto lavorando sui file già scaricati da Eclipse quindi se ho qualche problema e devo tornare al vecchio IDE vedo tutti i file aggiornati. Addirittura tutta la configurazione di SVN, Maven, etc l'ha presa dai settings di Eclipse. Più facile di così... !

Ci sono anche alcune cose che ho dovuto scoprire da me, o che ho dovuto impostare io perchè il setting out-of-the-box non era proprio l'ideale.

  * Impostare Tomcat è stato un casino. Avevo sempre un errore che IntelliJ non riusciva a connettersi al server, che partiva, però non riusciva a deployare l'applicazione. Alla fine ho risolto, e [ho lasciato un commento su SO con la mia soluzione](http://stackoverflow.com/questions/25147843/server-is-not-connected-when-trying-to-deploy-with-intellij/29509240#29509240).
  * Impostare il debug di Javascript in IntelliJ è stato un altro casino. Non ne avevo la priorità, però visto che l'ambiente lo permetteva, dovevo farlo. La cosa importante da capire è che bisogna inserire ESATTAMENTE l'indirizzo della pagina che verrà caricata all'avvio del server. Ad esempio, se l'indirizzo che digitate voi è http://localhost:8080/WebApp , ma poi c'è un redirect a http://localhost:8080/WebApp**/**_#/authentication_ , bisogna inserire il secondo indirizzo, altrimenti chrome si blocca e sembra che non stia facendo assolutamente nulla.
  * La documentazione di IntelliJ non fa capire molto bene queste cose, trascura un po' di dettagli.
  * E poi... perchè nei log del server non c'è lo **scroll automatico**?!!?!? che rabbia!!