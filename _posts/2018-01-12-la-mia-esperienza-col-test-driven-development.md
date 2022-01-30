---
paginate: true
comments: true
author: musikele
title: La mia esperienza col Test Driven Development
category: Italiano
layout: post
date: 2018-01-12 00:00:00 +0000
tags:
- test driven development
- tdd
- testing
- mock
header-img: "/images/Testing_in_Progress.gif"
description: 'Il Test Driven Development porta a un aumento della qualità del codice
  scritto, ma nella vita reale aumenta i tempi di sviluppo e porta a qualche compromesso. '
---
Il **Test Driven Development** è una pratica _mistica_: consiste nello **scrivere prima i test e poi il vero e proprio codice che ti serve per realizzare quella funzionalità**.

![]({{ site.baseurl }}/images/Testing_in_Progress.gif)

Faccio un esempio: immaginiamo di dover realizzare una funzione `cercaSuCanale5()` che, presa in input una data (es. `2018-12-31` e una stringa (es. `concertone`) ritorni tutti i programmi che su Canale  quel giorno 5 contengono quella stringa nel titolo o nella descrizione.

E' un caso semplice, magari richiederà qualche ricerca per trovare le API da interrogare per tirare fuori i dati giusti, oppure se abbiamo questi dati disponibili nel db li andremo a prendere da lì, ma **è un caso abbastanza interessante per discutere di testing**.

Se realizzo questa funzionalità col TDD, prima ancora di scrivere la vera e propria funzione `cercaSuCanale5()` , scriverò questi casi:

* un test che deve rispondere con un'eccezione quando chiamo la funzione con una data `null`.
* Un test che deve rispondere con _tutta la programmazione televisiva di quel giorno_, se invio una data, ma la stringa è null o vuota.
* Un test che, data una data valida e una stringa (es. `concer`) ritorna gli eventi che contengono questa stringa nel titolo o nella descrizione per quella data.
* Un test che, data una data valida e una stringa implausibile (es. `abcdefgh123`) ritorna una lista vuota.

Hai notato? **Solo per scrivere questi test abbiamo in pratica definito come si comporta la nostra funzione.** Questo è un ottimo motivo per fare TDD: ha un funzione _documentativa_ del codice.

Tornando ai test, la cose si fanno difficili quando la nostra funzione accede a qualcosa di esterno per elaborare i dati. Ad esempio, se `cercaSuCanale5()` chiama un'API esterna, chi ci garantisce che per la stessa data e la stessa stringa i dati saranno sempre gli stessi? Stesso dubbio per un'eventuale implementazione su DB: magari chi gestisce API o DB impone che dopo 1 anno (o un giorno!) quei dati vengano cancellati, per cui il test dopo 1 anno (o un giorno!) non funzionerà più.

Per evitare tutto questo, in genere nel test si _mocka_ la chiamata a tutto ciò che è esterno, ossia si dice al test che quella chiamata esterna deve essere sostituita da un **mock** che risponderà sempre allo stesso modo.

_Già qui i detrattori del TDD diranno che, nel momento in cui introduciamo i mock, stiamo sostituendo il mondo reale con una finzione e tanti casi reali non saranno più riscontrabili. Purtroppo è vero, un mock è una semplificazione, ma è l'unica opzione che abbiamo quando abbiamo a che fare con dati mutabili._

Ecco altre fantastiche "regole" del TDD: 

* **i test scritti devono fallire tutti prima di scrivere la vera e propria funzione**
* **mai scrivere codice di produzione senza un test che fallisce** 
* **se accade un bug in produzione, scrivi prima un test che lo riproduce e poi correggi il bug (e il test)** 

## La mia esperienza col TDD

Alla mia prima esperienza lavorativa mi hanno iniziato al TDD: "**scrivi prima il test e poi il  codice**. In questo modo avrai chiaro cosa il tuo codice deve fare, e come".

Addirittura una delle pratiche era che **quando scaricavamo un modulo da SVN dovevamo lanciare i test, se questi fallivano potevamo anche _richiamare_ l'ultimo collega che aveva committato senza correggere i test.**

Bello.

**Poi abbiamo iniziato a correre**, perché le scadenze non venivano rispettate, e  la prima cosa che succede quando corri è che butti a mare la qualità.  Di conseguenza i test iniziarono a scarseggiare.

Inoltre,  questo lo notano pochi, **i test sono altro codice da manutenere**:  quando fai una modifica al codice dell'app (e il codice cambia, perchè cambiano i requisiti) devi inevitabilmente fare  modifiche anche al codice del test, e questo porta via fino al doppio del tempo. Quante aziende hanno schedule così _rilassate_ da poterselo permettere?

Alla fine faccio alcuni test unitari, molti test di integrazione in cui mocko db o chiamate esterne, e la priorità é di testare ciò che é difficile da testare a mano.

Tutto  questo discorso vale, nel mio caso, per il backend, perché **per il frontend mi sono  ritrovato da solo a voler scrivere test - per gli altri non era nemmeno un'opzione!**

Non mi arrendo però: ora che devo mettere mano a codice React e Vue, voglio assolutamente riprovare a scrivere codice di test per il frontend, e vedere a quali benefici porta.