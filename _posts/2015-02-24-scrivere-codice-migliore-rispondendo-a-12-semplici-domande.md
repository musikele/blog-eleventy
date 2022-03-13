---
id: 161
title: Scrivere codice migliore rispondendo a 12 semplici domande
date: 2015-02-24T13:15:36+00:00
author: musikele
layout: post
guid: http://michelenasti.com/?p=161
permalink: /2015/02/scrivere-codice-migliore-rispondendo-a-12-semplici-domande/
dsq_thread_id:
  - "4000455381"
image: /wp-content/uploads/2015/02/code-hero-580x230.png
categories:
  - Italiano
tags:
  -  codice
  - qualità
  - questionario
---
[<img class=" size-medium wp-image-164 alignleft" src="https://i2.wp.com/michelenasti.com/wp-content/uploads/2015/02/code-hero-580x230-300x119.png?fit=300%2C119" alt="code-hero-580x230" srcset="https://i1.wp.com/michelenasti.com/wp-content/uploads/2015/02/code-hero-580x230.png?resize=300%2C119 300w, https://i1.wp.com/michelenasti.com/wp-content/uploads/2015/02/code-hero-580x230.png?resize=580%2C230 580w" sizes="(max-width: 300px) 100vw, 300px" data-recalc-dims="1" />](https://i1.wp.com/michelenasti.com/wp-content/uploads/2015/02/code-hero-580x230.png)Qualcuno (per la precisione, uno dei creatori del celeberrimo Stack Overflow) nel 2000 ha ideato un [questionario di 12 domande](http://www.joelonsoftware.com/articles/fog0000000043.html) per sapere se la vostra azienda (o il vostro progetto) sta seguendo le "buone pratiche di qualità del software", che tradotto in programmatorese, significa **codice migliore**. Questa roba non è fuffa, visto che esistono anche standard internazionali che codificano più o meno le stesse cose, solo che sono libri di 1500 pagine che non sono stati letti nemmeno da chi li ha scritti.

Ecco il famigerato questionario:

<!--more-->

  1. Usate un sistema di source control?
  2. Potete realizzare una build del sistema in un solo step?
  3. Create una build giornaliera?
  4. Avete un database dei bug?
  5. Risolvete i bug prima di scrivere nuovo codice?
  6. Avete una pianificazione aggiornata delle cose da fare?
  7. Avete una specifica scritta di cosa devi fare?
  8. I programmatori hanno condizioni lavorative tranquille?
  9. Usate i migliori tool che potete permettervi?
 10. Avete tester allocati sul progetto?
 11. I candidati al ruolo di programmatore scrivono codice durante il colloquio?
 12. Effettuate test di usabilità minimi?

Il bello di questo test è che è facile rispondere; altri sistemi richiedono di calcolare il numero di bug per commit e cose simili, e non sono dunque rapidi. _Ovviamente non è un test da utilizzare per testare la sicurezza di una centrale nucleare_ 🙂

Come si calcolano i punteggi? 12 è perfetto, 11 va bene, ma con 10 o meno c'è un serio problema in azienda.

Ci pensate? Eravamo nel 2000 quando è stato ideato questo questionario; le tecnologie cambiano, ma i processi di sviluppo no. Queste domande sono attualissime e probabilmente sono destinate a restarlo per molto tempo ancora, che si tratti di software desktop, webapp, o mobile.

### Usare un sistema di source control

Che sia CVS, SVN o GIT, è impossibile gestire il lavoro di un team senza uno strumento del genere. L'ho fatto all'università (ai miei tempi c'erano ancora i floppy) e siamo impazziti.

### Realizzare una build in un solo step / una build giornaliera

Se per compilare il vostro software c'è bisogno di più passi, allora il processo di build è passibile di errori dovuti a distrazione, cambio di configurazioni, problemi di environment. In un progetto su cui ho lavorato abbiamo ragionato per molti mesi per giungere a un sistema di build veloce e pratico che prende il codice da SVN, lo compila, lo invia via SSH alla macchina remota su cui deve essere installato, e avvia il server. Tutto ciò poteva essere lanciato on-demand e, comunque, ogni mezzanotte il processo veniva eseguito. (E praticamente tutte le mattine c'era un problema di compilazione da risolvere).

### Database dei bug / risolvere bug prima del nuovo codice

Ho lavorato su un progetto in cui i bug venivano memorizzati in un bug-tracker, senza però essere gestiti. Poi quando il numero è salito a qualcosa come 10.000 ci siamo accorti di quanto fosse dispendioso, in termini di risorse, soltanto verificare se quei bug esistessero ancora. Spesso risalivano a funzionalità realizzate anni prima, e chi le aveva realizzate si era pure licenziato.

Risolvere i bug subito permette quindi di avere le persone giuste al momento giusto e allocate sulla cosa giusta; se ci si mette a risolvere i bug alla fine c'è il SERIO rischio che, per eliminare un singolo e semplice bug, si rompa un intero sistema. (cosa realmente accaduta).

### Pianificazione aggiornata / Specifica scritta

Se lavorate con una metodologia Agile, come SCRUM, questo problema viene fuori subito: cosa dobbiamo fare per completare la storia assegnata?

Se invece si lavora senza una metodologia Agile, e mi è capitato, non si sa mai a che livello di specificità ci si deve fermare. Domande tipo "come implemento la recovery della password?" possono generare discussioni infinite o risposte stizzite. Attenti!

### Condizioni lavorative tranquille / tools migliori disponibili

E' stato dimostrato che [il principale ostacolo al lavoro dei programmatori sono le interferenze esterne](https://www.ironistic.com/the-cost-of-distractions-on-developers/). Per quanto oggi si voglia spingere sul lavoro di gruppo, la programmazione è un lavoro che viene fatto da una sola persona davanti a un computer, che spesso lavora di notte per non essere disturbata dagli altri. E in effetti, le cuffiette sono indispensabili quando ho bisogno di concentrarmi su qualcosa. Spesso non metto neanche la musica, mi basta attutire i discorsi intorno a me.

Per quanto riguarda i tool: spesso è questione di preferenze personali. Anzi, pare che i migliori software in circolazione, salvo rare eccezioni, siano open source. Ma se un developer vuole testare una soluzione alternativa (o a pagamento), perché non provarla? non è detto che venga applicata subito, ma qualsiasi sperimentazione porta sempre a un arricchimento.

### Tester allocati sul progetto

Ho lavorato per anni con dei tester allocati sul progetto, e portano innumerevoli benefici al progetto. Persone dedicate al testing che validano le specifiche che arrivano dall'analisi, diventano un surrogato della specifica parlante, che si interroga sui casi limite e aiuta a ragionare sui comportamenti ambigui. Molti problemi di specifica incompleta vengono beccati dai tester (se sono bravi) e soprattutto _non hanno scritto loro il codice che devono testare_.

Al contrario, lavorare senza tester è doloroso. Io scrivo codice perfetto, perché mai qualcuno dovrebbe testarlo? E se esce qualche bug, è sicuramente un caso limite che non dipende da me ma da uno degli 8 punti precedenti di questo articolo 🙂

### Candidati che scrivono codice

L'idea alla base è: se assumi un cuoco, vorrai assaggiare i suoi piatti prima di assumerlo. Se assumi un mago, vorrai vedere qualche trucco di magia. Perché non fare lo stesso con gli sviluppatori?

Il principale problema di questo approccio è che, per uno sviluppatore che ha intenzione di affrontare il processo di selezione, dovrà sobbarcarsi di una certa mole di lavoro (8-10 ore di programmazione) che generalmente verranno svolte a casa, togliendo tempo ad altro. Quindi molti candidati si sentiranno scoraggiati ad affrontare un processo di selezione lungo e dall'esito incerto.

Io ho fatto più di una decina di colloqui di lavoro. Quasi mai ho scritto codice durante il processo di selezione, specialmente per realtà campane e Italiane. Ciò che conta davvero nelle aziende in cui mi è capitato di andare è l'esperienza accumulata, e quanto guadagnavo al momento. Qualcuno mi ha fatto domande teoriche (java, garbage collector, scrum, design patterns, testing...) ma le risposte erano quasi sempre concettuali. L'unico colloquio in cui ho scritto codice è stato per Amazon, ma il tizio a cui ho inviato i risultati ora non lavora più per loro. Potenza di LinkedIn.

### Test di usabilità minimi

Cosa si intende per test di usabilità minimi? Sono quei test fatti prendendo 4-5 persone a caso (quelle che passeggiano dietro alla tua scrivania) chiedendogli cose tipo "prova a fare questo". Vedrete che poche persone troveranno il 90% dei problemi di usabilità a cui non avevate nemmeno pensato. Cose tipo "ma cosa dovrei cliccare?" oppure "non capisco cosa sta accadendo sul sistema in questo momento". Meglio averle subito queste risposte che in produzione.

## Quanti punti avete totalizzato?

Nelle esperienze passate in media ho totalizzato intorno agli 8-9 punti. E voi?