---
id: 598
title: 'Il battesimo del sangue: il talk su NodeJS al Napoli DevDay'
date: 2016-02-25T19:00:36+00:00
author: musikele
layout: post
guid: http://michelenasti.com/?p=598
permalink: /2016/02/il-battesimo-del-sangue-il-talk-su-nodejs-al-napoli-devday/
dsq_thread_id:
  - "4610890988"
categories:
  - Italiano
tags:
  - devday
  - napoli
  - nodejs
  - talk
headerImg: /uploads/2016/02/nodejs1.jpg
---
Ieri sera (24/02/2016) ho presentato NodeJs alla platea del Napoli DevDay.

Le slide, con le gif animate e tutto, le potete [vedere su google docs](https://docs.google.com/presentation/d/1EDsvR99WUDx3IBhygYt51YKM1sA5UA_PJmaRFh9HTa4/edit?usp=sharing).

Il repo con il codice mostrato al talk è su [github](https://github.com/musikele/nodeJsExamples), insieme a una descrizione dei vari file.

Se avete osservazioni, dubbi, chiarimenti, consigli, giudizi, sono a vostra disposizione.

Ho intitolato questo post "_il battesimo del sangue_" perchè, sul più bello, non mi ha funzionato un esempio. Nessun dramma, era una fesseria: il codice è 100% funzionante, ma l'estensione di Chrome che uso per testare le API REST, chiamata Advanced Rest Client, codificava le richieste in un altro modo (non-JSON) e il server Node non la interpretava correttamente. Settando l'encoding a `application/json` funziona tutto.

E non dimenticate del [Meetup su Javascript](http://www.meetup.com/it-IT/JS-Salerno/) il 5 marzo 2016! Maggiori dettagli in un prossimo post.
