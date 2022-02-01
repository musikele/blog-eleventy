---
id: 472
title: Essere bravi colleghi evitando di committare cazzate
date: 2015-12-24T10:30:46+00:00
author: musikele
layout: post
guid: http://michelenasti.com/?p=472
permalink: /2015/12/essere-bravi-colleghi-evitando-di-committare-cazzate/
dsq_thread_id:
  - "4424679020"
categories:
  - Italiano
tags:
  - post 
  - lavoro
  - programmazione 
  - commit 
  - git 
  - svn
---
 

Ogni volta che qualcuno committa qualcosa di rotto, gli altri dev del team perdono tempo per capire cosa è successo e come risolvere. **Se io fossi il boss mi assicurerei che i miei sviluppatori seguano i passi che descrivo nell'articolo, altrimenti gli pagherei lo stipendio per perdere tempo riparando danni altrui. **

Ah, e vogliamo parlare di quelli che committano pur sapendo che il sistema non funziona?

Ah, e vogliamo parlare di quelli che committano 1 file alla volta? (Quindi se hanno 12 file in uscita fanno 12 commit?!?!?!?)

Lo so, sto diventando talebano, ma è il prezzo da pagare se si vuole raggiungere la **Purity Of Code (™).**

Mi è capitato che vado a sincronizzarmi col mio **VCS** preferito (VCS = **Version Control System**; in pratica stiamo parlando di _CVS, SVN, Git,_ etc.) e il codice  appena scaricato non compila.

La colpa è quasi sempre di chi ha committato senza seguire <del>elevatissimi</del> standard di sicurezza (una persona meno calma di me potrebbe infatti picchiare i committer). Infatti io raccomando ai miei colleghi la seguente checklist, che a quanto pare nessuno rispetta:

  1. scaricare tutti gli update possibili da SVN
  2. fare maven install - compilare dunque il codice nuovo con le modifiche appena apportate
  3. se almeno la compilazione va, commit.

Che ci vuole?

Questi tre semplici passi non ci mettono al riparo da problemi di runtime, ossia quando l'app non parte per problemi di configurazione. Inoltre non funziona con i linguaggi interpretati. Si potrebbe dunque inserire un passo 2.5: _far partire il server_.

Sventolate questo post in faccia ai vostri colleghi scapestrati e buffoniatevi un po'.

 