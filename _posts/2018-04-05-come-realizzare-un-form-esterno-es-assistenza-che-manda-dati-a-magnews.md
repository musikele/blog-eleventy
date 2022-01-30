---
paginate: true
comments: true
author: musikele
title: Come realizzare un form esterno (Es. assistenza) che manda dati a MagNews
category: Italiano
layout: post
date: 2018-04-05 00:00:00 +0000
tags:
- magnews
- form submission
description: 'Come inviare dati da un form esterno a MagNews? Qui una guida "a futura
  memoria". '
header-img: "/images/logo-magnews-600x400.jpg"
---
Questa roba l'ho dovuta fare per lavoro e, nello scoprire tutti i passaggi necessari, me li sono segnati.

## Cos'è MagNews? (Spoiler: non lo so)

E' un tool per il marketing automation, email marketing, roba così. 

Se siete qui probabilmente già sapete cos'è e avete anche un account. 

## Cosa vogliamo fare

Su un sito creiamo una pagina "contattaci" in cui l'utente inserisce tutti i dati necessari; questi dati piuttosto che andare in un backend qualsiasi vanno a finire su MagNews.

Passiamo all'azione!

### Creare il form su Magnews

Dalla dashboard di MagNews, _Design -> Siti Web ->_ Selezionate il sito su cui volete operare -> _crea nuova pagina di tipo "forms"_.

Disegnate un form che contiene i dati che vi interessano. Non è importante la grafica, ma solo che siano presenti i campi di cui avete bisogno.

Per ogni campo, dategli un **nome** e poi in _Avanzato -> Opzioni per gli script ->_ date anche un **NAME del campo**_._  E' importante che questo nome sia **tutto minuscolo**.

Create anche un tasto "submit" a cui dovete dare le solite info, come se fosse un campo.

Primo step superato :)

### Creare form HTML

Questa è la parte facile, dovete realizzare il form nel modo che più vi piace nella pagina che volete voi.

Ma ora dobbiamo agganciare un evento al tasto SALVA.

### Comunicazione JS / MagNews

Secondo la loro [pagina ufficiale per i devlopers per creare i FORM](https://be-mn1.mag-news.it/be/documentation.do?packageid=advanceduserguide&pageid=ws023), i dati devono essere in questo formato:

    {
        "idform":432,
        "parameters":[
            {
               "name":"campo_di_testo_1",
               "value":"123"
            },
            {
                ...
            },
            {
               "name":"submit_button", // auto generated input name
               "value":"I am an input value"
            }
        ]
    }

Cerchiamo di mettere insieme i pezzi.

La prima cosa che vi serve è un URL a cui mandare i dati.

Io l'ho trovata cliccando su _Visualizza Codice Form_, mi è comparso il form html costruito fino a quel momento. (Esempio: `http://tuosito.mno08.com/nl/tuosito_page543.mn` ).

Sempre secondo la documentazione ufficiale, dobbiamo cambiare leggermente questo URL e trasformarlo in `http://tuosito.mno08.com/nl/api/forms`. 

Dopodiché ci serve l'ID del form per il parametro `idform`. Anche questo l'ho trovato nella "mappa del sito" su MagNews; di fianco alla pagina c'era l'id tra parentesi graffe. 

Infine, i campi. Se avete settato tutto bene, dovete inviare tutti i campi specificati più il bottone submit (wtf?!) con un valore a caso. 

Se tutto va bene vedrete i vostri dati salvati in MagNews (sempre dal backoffice, andate in edit sulla pagina che contiene il form e cliccate su _Visualizza Risultati_). 

Bene, spero di avervi tolto le castagne dal fuoco! Io invece mi sono scritto questo post per ricordarlo, casomai dovesse servire ancora.  