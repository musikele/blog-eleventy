---
id: 333
title: Alcune Best Practices per non impazzire con i DB relazionali
date: 2015-07-03T18:30:16+00:00
author: musikele
layout: post
guid: http://michelenasti.com/?p=333
permalink: /2015/07/alcune-best-practices-per-non-impazzire-con-i-db-relazionali/
dsq_thread_id:
  - "3969405603"
categories:
  - Italiano
tags:
  - best practices
  - database relazionali
  - RDBMS
  - sql
---
Cerchiamo di avere poche ma semplici regole di gestione del DB che servono a non impazzire in futuro, fin'ora quelle più semplici che ho usato e che hanno portato alla miglior comprensione possibile (parlo di un team di 30 devs) è:

- **Chiamare tutte le tabelle al singolare** (es. PRODOTTO e non PRODOTTI)
- **Chiamare tutte le tabelle in inglese** (quindi: Product)
- **Tutte le tabelle devono avere un solo ID** (niente chiavi composite!) - di tipo String o Long.
  - **String** quando nel db ci saranno parecchi inserimenti e potremmo usare una funzione per generare stringhe casuali (UUID) da usare come ID.
  - **Long** quando ci sono pochi inserimenti ma molte letture, così da facilitare gli indexer. Supponiamo di avere 30000 inserimenti simultanei, il 30.000esimo deve aspettare che i precedenti 29.999 record abbiano ricevuto un ID numerico. In questo caso conviene usare la strategia precedente (String).
- quando ci sono relazioni con altre tabelle, la colonna che gestisce la relazione si chiamerà `NOMEALTRATABELLA_ID`
  - Quando ci sono tabelle che mappano **relazioni molti-a-molti**, chiamare la tabella semplicemente `ENTITY1_ENTITY2` , magari provando a inserire come nome della prima entità quella che "gestisce" la relazione. Però non è davvero importante l'ordine in cui compaiono, l'importante è che si segua una convenzione.
- evitare di chiamare colonne con il prefisso `NOT_` e similari, visto che il nostro cervello fa uno sforzo algebrico per capirne il significato (es. `NOT_PRESENT` a false, vuol dire che è presente... Ma perchè non chiamare la colonna PRESENT e settare il valore a true?!)

ho lavorato in un'azienda dove il DB di 3000 tabelle era organizzato in questo modo e si capiva tutto. Hibernate quasi non necessitava di configurazione. Ora lavoro in un posto dove il db è vecchio 30 anni e hano fatto il contrario di queste regole; non si capisce una vacca.
