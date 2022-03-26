---
id: 587
title: Ho partecipato a Google HashCode 2016. Ecco com'é andata
date: 2016-02-15T20:23:33+00:00
author: musikele
layout: post
guid: http://michelenasti.com/?p=587
permalink: /2016/02/ho-partecipato-a-google-hashcode2016-ecco-come-andata/
dsq_thread_id:
  - "4582091882"
categories:
  - Italiano
tags:
  - google
  - hashcode
  - hashcode2016
---
Qualche sera fa io e altri amici abbiamo deciso di partecipare al **Google HashCode 2016**, una gara di programmazione distribuita ideata da Google per team da 2 a 4 persone. Il mio non era proprio un team di _scemi_, siamo tutti usciti dall'università da qualche anno (...) ma avevamo ancora voglia di rockeggiare. Avevamo **4 ore di tempo** per presentare una soluzione a un problema comune e potevamo usare **qualsiasi linguaggio** di programmazione avessimo bisogno.

<div id="attachment_589" style="width: 710px" class="wp-caption aligncenter">
  <a href="https://i2.wp.com/michelenasti.com/wp-content/uploads/2016/02/2016-02-11-19.47.12.jpg" rel="attachment wp-att-589"><img class="wp-image-589 size-large" src="https://i1.wp.com/michelenasti.com/wp-content/uploads/2016/02/2016-02-11-19.47.12-1024x768.jpg?fit=700%2C525" alt="Hash Code 2016 team " srcset="https://i2.wp.com/michelenasti.com/wp-content/uploads/2016/02/2016-02-11-19.47.12.jpg?resize=1024%2C768 1024w, https://i2.wp.com/michelenasti.com/wp-content/uploads/2016/02/2016-02-11-19.47.12.jpg?resize=300%2C225 300w, https://i2.wp.com/michelenasti.com/wp-content/uploads/2016/02/2016-02-11-19.47.12.jpg?resize=768%2C576 768w, https://i2.wp.com/michelenasti.com/wp-content/uploads/2016/02/2016-02-11-19.47.12.jpg?resize=700%2C525 700w, https://i2.wp.com/michelenasti.com/wp-content/uploads/2016/02/2016-02-11-19.47.12.jpg?w=1840 1840w" sizes="(max-width: 700px) 100vw, 700px" data-recalc-dims="1" /></a>
  
  <p class="wp-caption-text">
    Da sinistra: Mauro, Michele, Raffaele ed Enrico.
  </p>
</div>

## il problema

Quest'anno si é parlato tanto di **droni** per consegnare pacchi: da Amazon a AliBaba tutti hanno avviato delle sperimentazioni e sono usciti molti articoli di giornale che annunciavano questo futuro non troppo lontano.

Sebbene Google non sia proprio un'azienda di shopping online, lo statement di oggi era proprio questo: _data una lista di M depositi, una lista di D droni e una lista di N ordini da evadere che potevano contenere più oggetti non tutti presenti nello stesso deposito, saremmo riusciti a pianificare il volo dei Droni in modo da evadere più ordini possibile?_ 

Al problema mancano altre due vincoli, ossia i droni possono portare un peso massimo e la durata della simulazione é prefissata. Quanti ordini saremmo riusciti a evadere prima della scadenza del tempo?

#### Bullshit! I &#8220;veri&#8221; programmatori non risolvono questo tipo di problemi!

Ah si? E chi li risolve allora? Questi sono i problemi che competono ai programmatori! I siti web e i gestionali lasciamoli fare a quelli scarsi 😀

## Input e output

Per rimanere il più agnostici possibile dal linguaggio di programmazione, gli input di Google erano file di testo con righe di numeri. Anche l'output doveva essere codificato in un certo modo (sempre numeri in un file di testo semplice) che poi un giudice automatico avrebbe validato. Solo per fare il parsing dei primi file abbiamo bruciato un'ora su 4 a disposizione.

## Il nostro algoritmo

All'inizio volevamo arrivare il più presto possibile nel judge system quindi abbiamo provato a scrivere l'algoritmo più semplice che ci venisse in mente: ogni drone porta max 1 oggetto (dunque ordini grandi avrebbero richiesto più viaggi).
  
Questo algoritmo si é preso 3 ore per rispettare tutti i constraint e, comunque, _non funzionava a dovere._

## Idee per l'anno prossimo

Una delle cose che abbiamo fatto bene è stata quella di scrivere al più presto un modello dati comune a tutt'e quattro; un'altra cosa che mi è piaciuta è stata l'idea di scrivere delle classi utility che permettessero di ragionare sulle collezioni di dati (una sorta di DB, diciamo).

Ma tante altre cose non le abbiamo fatte bene. Abbiamo scelto un linguaggio che 2 del nostro team non ricordavano più, e quindi non potevano dare una mano (in realtà hanno aiutato eccome, hanno scritto lo pseudocodice dell'algoritmo...). Inoltre siamo arrivati al test negli ultimi 10 minuti a disposizione, quando era chiaro che non c'era più niente da fare: infatti non ha funzionato. Quindi una delle cose che dovremmo provare a fare è di inviare subito qualcosa al Judge System per avere una validazione dei dati più rapida. E dobbiamo scrivere più in fretta l'algoritmo altrimenti rischiamo di non poterlo ottimizzare.

## Conclusioni

E' stata una prova molto difficile, un problema sicuramente non banale. Ma partecipare nell'Hub dell'**Università di Salerno** ha conferito quell'atmosfera di _nerdismo_ che ci ha fatto sentire, ancora una volta, _studenti_.

Ci riproveremo? Certo. Se pure dovesse andare male, ci consoleremo con i gadget.

<div id="attachment_590" style="width: 710px" class="wp-caption aligncenter">
  <a href="https://i2.wp.com/michelenasti.com/wp-content/uploads/2016/02/2016-02-11-18.31.36.jpg" rel="attachment wp-att-590"><img class="wp-image-590 size-large" src="https://i2.wp.com/michelenasti.com/wp-content/uploads/2016/02/2016-02-11-18.31.36-1024x768.jpg?fit=700%2C525" alt="google gadgets " srcset="https://i2.wp.com/michelenasti.com/wp-content/uploads/2016/02/2016-02-11-18.31.36.jpg?resize=1024%2C768 1024w, https://i2.wp.com/michelenasti.com/wp-content/uploads/2016/02/2016-02-11-18.31.36.jpg?resize=300%2C225 300w, https://i2.wp.com/michelenasti.com/wp-content/uploads/2016/02/2016-02-11-18.31.36.jpg?resize=768%2C576 768w, https://i2.wp.com/michelenasti.com/wp-content/uploads/2016/02/2016-02-11-18.31.36.jpg?resize=700%2C525 700w, https://i2.wp.com/michelenasti.com/wp-content/uploads/2016/02/2016-02-11-18.31.36.jpg?w=1840 1840w, https://i2.wp.com/michelenasti.com/wp-content/uploads/2016/02/2016-02-11-18.31.36.jpg?w=2760 2760w" sizes="(max-width: 700px) 100vw, 700px" data-recalc-dims="1" /></a>
  
  <p class="wp-caption-text">
    noi abbiamo vinto occhiali da sole (i google glass dei poveri), una spilla, una penna e una borsa.
  </p>
</div>