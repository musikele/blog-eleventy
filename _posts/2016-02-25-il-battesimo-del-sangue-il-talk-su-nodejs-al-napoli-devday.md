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
---
Ieri sera (24/02/2016) ho presentato NodeJs alla platea del Napoli DevDay.

<a href="https://i2.wp.com/michelenasti.com/wp-content/uploads/2016/02/nodejs1.jpg" rel="attachment wp-att-600"><img class="wp-image-600 size-medium aligncenter" src="https://i0.wp.com/michelenasti.com/wp-content/uploads/2016/02/nodejs1-e1456388830455-300x270.jpg?fit=300%2C270" alt="nodejs1" srcset="https://i1.wp.com/michelenasti.com/wp-content/uploads/2016/02/nodejs1-e1456388830455.jpg?resize=300%2C270 300w, https://i1.wp.com/michelenasti.com/wp-content/uploads/2016/02/nodejs1-e1456388830455.jpg?w=476 476w" sizes="(max-width: 300px) 100vw, 300px" data-recalc-dims="1" /></a><a href="https://i2.wp.com/michelenasti.com/wp-content/uploads/2016/02/nodejs2-e1456388882207.jpg" rel="attachment wp-att-601"><img class="wp-image-601 size-medium aligncenter" src="https://i1.wp.com/michelenasti.com/wp-content/uploads/2016/02/nodejs2-e1456388882207-300x293.jpg?fit=300%2C293" alt="" srcset="https://i2.wp.com/michelenasti.com/wp-content/uploads/2016/02/nodejs2-e1456388882207.jpg?resize=300%2C293 300w, https://i2.wp.com/michelenasti.com/wp-content/uploads/2016/02/nodejs2-e1456388882207.jpg?w=476 476w" sizes="(max-width: 300px) 100vw, 300px" data-recalc-dims="1" /></a>

Le slide, con le gif animate e tutto, le potete [vedere su google docs](https://docs.google.com/presentation/d/1EDsvR99WUDx3IBhygYt51YKM1sA5UA_PJmaRFh9HTa4/edit?usp=sharing). Altrimenti eccovele embeddate:

Il repo con il codice mostrato al talk è su [github](https://github.com/musikele/nodeJsExamples), insieme a una descrizione dei vari file.

Se avete osservazioni, dubbi, chiarimenti, consigli, giudizi, sono a vostra disposizione.

Ho intitolato questo post &#8220;_il battesimo del sangue_&#8221; perchè, sul più bello, non mi ha funzionato un esempio. Nessun dramma, era una fesseria: il codice è 100% funzionante, ma l'estensione di Chrome che uso per testare le API REST, chiamata Advanced Rest Client, codificava le richieste in un altro modo (non-JSON) e il server Node non la interpretava correttamente. Settando l'encoding a <span class="lang:default decode:true crayon-inline ">application/json </span> funziona tutto.

E non dimenticate del [Meetup su Javascript](http://www.meetup.com/it-IT/JS-Salerno/)  il 5 marzo 2016! Maggiori dettagli in un prossimo post.