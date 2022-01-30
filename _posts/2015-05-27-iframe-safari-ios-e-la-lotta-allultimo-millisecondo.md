---
id: 298
title: iFrame, Safari, iOs e la lotta all'ultimo millisecondo
date: 2015-05-27T08:00:27+00:00
author: musikele
layout: post
guid: http://michelenasti.com/?p=298
permalink: /2015/05/iframe-safari-ios-e-la-lotta-allultimo-millisecondo/
dsq_thread_id:
  - "4076741251"
categories:
  - Italiano
tags:
  - iframe
  - ios
  - ottimizzazione
  - problemi
  - safari
  - web development
---
Tutto è nato da una richiesta innocua da parte del capo: la webapp che abbiamo realizzato, e che deve operare principalmente sui pc del nostro cliente, sarà mostrata ad un'importante fiera a fine maggio, quindi dobbiamo rivederla e ottimizzarla per tablet.

Poco male, abbiamo usato Bootstrap per la UI, quindi si tratterà solo di limare, aggiustare, riorganizzare gli elementi sullo schermo.

E invece ciò che stiamo affrontato è divenuto un bagno di sangue.

### Bootstrap, questo sconosciuto

Quando si lavora in un team di 15 persone e tutti fanno tutto ci si scontra con un'amara verità: non siamo tutti egualmente predisposti per il "bello", e soprattutto non siamo tutti disposti a capire come funziona bootstrap. Praticamente: **nessuno si legge la documentazione e spesso vedo usare cose complicate quando ci sono alternative più facili e più portabili**. Un esempio: alcuni amici hanno eliminato il padding a tutti gli elementi aggiungendo classi come ResetPadding, e poi si lamentavano che i componenti erano disposti male sullo schermo. :-O

### iFrame e iOs, nemici giurati

Tutto il mondo usa gli iFrame per una sola cosa, ossia per mostrare la pubblicità. Gli iframe sono elementi che caricano al loro interno altre pagine, le quali pagine riscaricano da capo html, css, javascript, immagini, etc. Ossia, se usate lo stesso script sia fuori che dentro l'iFrame, questo verrà scaricato due volte.

Il mondo del web quindi cerca di non usare gli iFrame per qualcosa che non sia pubblicità. Noi invece cosa abbiamo fatto? **Approfittando di un framework "fatto in casa", basato su Angular, caricavamo le pagine all'interno di un iFrame**. Ossia: la toolbar in alto e il menu laterale fanno parte della pagina, il contenuto vero e proprio invece viene caricato ogni volta all'interno di un iframe.

<div style="width: 318px" class="wp-caption alignright">
  <img class="" src="https://i1.wp.com/stevesouders.com/efws/images/1301-iframes-cost-of-elements.gif?resize=308%2C384" alt="" data-recalc-dims="1" />
  
  <p class="wp-caption-text">
    tempo per aggiungere al DOM 100 elementi. dal sito <a href="http://www.stevesouders.com/blog/2009/06/03/using-iframes-sparingly/">stevensoulders.com</a>.
  </p>
</div>

L'impatto di questo approccio è stato devastante: se pure lo sviluppo era in qualche modo semplificato, ogni volta che cliccavamo su una pagina veniva ricaricato tutto, da Angular fino al css, e non so se lo sapete ma finchè angular non viene caricato l'utente vede le parentesi graffe (`{% raw %}{{ }}` {% endraw %}) tipiche di Angular. Inoltre sui tablet avevamo un degrado delle prestazioni, perchè gli iFrame sono gli elementi più pesanti da aggiungere al DOM e tutto il traffico di rete che generavamo a ogni pagina ci rubava secondi preziosi. Su un tablet più datato avevamo una pagina che si caricava in 40 secondi ! Un esempio di benchmark lo trovate qui a lato.

Altri due gravissimi problemi: **su iPad alcuni iframe (non tutti) non scrollano**; inoltre avevamo trovato un bug che **dopo un po' di navigazione della nostra webapp, safari crasha senza dare troppe spiegazioni**.

### Alcune soluzioni messe in campo

Tutto questo ci ha fatto andare un po' in panico e stiamo cercando le dovute contromisure, che chiaramente non possiamo attuare tutte visto che la scadenza è tra pochi giorni. Però qualcosa abbiamo fatto ed è giusto condividerle con voi, magari qualcuno passa di qui e ci da qualche dritta fantastica.

  * sembrerà una cretinata, ma **mettere tutti gli script alla fine (giusto un attimo prima del tag di chiusura </body>) diminuisce considerevolmente il tempo di caricamento delle pagine**. E' una di quelle best practices che non si considera mai e che invece aiuta davvero.
  * **Diminuire all'osso il numero di file scaricati**, quindi minimizzare e comprimere tutti i javascript, css, e html. Farlo con java e maven è un po' complicato, ma si può fare. Poi scriverò un articolo su come precaricare tutti i template delle direttive di angular.
  * Sul caricamento degli iFrame: **uno degli approcci più utilizzati è quello di aggiungere l'iFrame al dom, aspettare 10 millisecondi, e poi settare l'attributo src, così da ritardare leggermente il caricamento del frame**. Alcuni benchmark mostrano che questo approccio è efficace, anche se la miglior soluzione è di evitare l'iFrame. Trovate una discussione su questo argomento a [questo link](http://www.aaronpeters.nl/blog/iframe-loading-techniques-performance#normal).
  * l'iPad non scrolla e sistematicamente crasha? **useremo tablet Android**.
  * Eliminare chiamate asincrone che non servono davvero... Il miglior approccio è di fare una chiamata sola per precaricare tutte le combo che serviranno nella pagina.

La soluzione a lungo termine è di modificare questo nostro framework e di usare qualcosa di più standard, come ui-router o ng-router di angular. Ciò che vorremmo evitare è di riscrivere tutte le pagine che abbiamo già realizzato, quindi cercheremo di usare l'approccio meno invasivo possibile.