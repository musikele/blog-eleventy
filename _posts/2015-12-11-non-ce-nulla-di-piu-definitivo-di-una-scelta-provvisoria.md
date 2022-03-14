---
id: 467
title: Non c'é nulla di più definitivo di una scelta provvisoria
date: 2015-12-11T08:34:51+00:00
author: musikele
layout: post
guid: http://michelenasti.com/?p=467
permalink: /2015/12/non-ce-nulla-di-piu-definitivo-di-una-scelta-provvisoria/
dsq_thread_id:
  - "4394257271"
categories:
  - Italiano
tags:
  - metodologie
  - pezzotto
  - sviluppo
---
Negli ultimi due giorni ho lavorato a un  refactoring della webapp che stiamo sviluppando e, mentre sistemavamo tutti i problemi che incontravamo lungo la strada, abbiamo trovato tante scelte _provvisorie_ fatte dagli sviluppatori di sei mesi fa (alcune anche di un anno fa). Ci faceva sorridere il fatto che alcuni div fossero addirittura etichettati come `provvisorio` e invece sono resistiti tutto questo tempo. 

Voi lo sapete che meno refactoring si fa sul codice meglio é, tuttavia ogni tanto un refactoring é indispensabile altrimenti  i poveri sviluppatori impazziscono 🙂  

Questo problema delle scelte provvisorie che poi diventano definitive travalica i confini dell'informatica: mi vengono in mente i [Trulli di Alberobello](https://it.m.wikipedia.org/wiki/Trullo), costruiti senza malta (quindi con la sola pietra) affinché potessero essere facilmente smontabili in caso di ispezione da parte del Regno delle Due Sicilie. Ai tempi si pagava una tassa per ogni nuovo insediamento!

Tornando all'informatica, lo sviluppatore che deve scegliere tra due o più strade ha generalmente due opzioni: farlo bene (e ci metterà del tempo), o farlo subito (col classico _pezzotto_). Non ci crederete ma, sulla base della mia esperienza, **é il management che spinge verso soluzioni veloci** che non resistono alla prova del tempo! Purtroppo spesso l'ansia di completare un'attività (e di rispettare la tabella di marcia) fa dire ai nostri capi che _poi si vede_, ignorando i costi a breve e lungo termine. 

A breve termine può darsi che ciò che é stato fatto si debba rifare: quando si ha un feedback rapido, come con metodologie Agili, potrebbe accadere proprio questo. E il tempo speso per realizzarlo raddoppia. (c'é da dire che spesso manco il cliente sa cosa vuole, e solo quando vede una soluzione riesca a dire "ma io non volevo questo"!). 

A lunghissimo termine invece, non é detto che la nostra soluzione sia sempre rifattorizzabile: spesso il codice potrebbe gestire parti così oscure del programma che toccandolo (o anche solo guardandolo) potrebbe rompersi qualcosa che non di sospettava nemmeno che fosse collegata. E allora che si fa? Un altro pezzotto! Alla lunga questo pregiudica la manutenibilità e la risoluzione dei bug. 

_Infine, ci sono pezzotti che sono veri e propri capolavori. Quando ne ho trovati sono rimasto sorpreso da tanto ingegno (mi viene in mente la variabile _pezzott++).__ In quei casi quasi dispiace dover modificare o mettere mano al codice: del resto, _se funziona, perché cambiarlo? 🙂_