---
paginate: true
comments: true
author: musikele
title: E' importante conoscere come sono fatte le librerie che usiamo?
category: Italiano
layout: post
date: 2018-01-07 00:00:00 +0000
tags:
- michele risponde
- programmazione
- elon musk
- tesla
- spacex
description: Rispondo alla domanda di uno studente, preoccupato perchè usa librerie
  di cui non conosce come sono fatte internamente. Dobbiamo reinventare la ruota ogni
  volta? O fare come Elon Musk?
header-img: "/images/rinventare-la-ruota.jpg"
---
Domanda: 

> fin dal primo giorno, alla facoltà di Ingegneria Informatica mi è stata inculcata un'idea che tutt'ora fatico ad accettare. Visto che ci sono infinite librerie che ti rendono disponibili delle funzioni avanzate, il tuo lavoro principale non è riscrivere quelle funzioni, ma saperle  usare e adattare per i tuoi scopi. Faccio un esempio stupido: una  libreria python per l'elaborazione di file pdf. Due righe e posso copiare, fondere, togliere pagine. **Però non saprò mai come funziona.** **E  questa cosa mi angoscia tantissimo.** Nel senso, posso aprire la libreria e  andarmele a leggere, ovviamente. Ma passerei probabilmente ore a capire il loro funzionamento. Sono l'unico che è turbato da questa cosa? Chiaramente mi riferisco a chi sta ancora studiando, come me.

Risposta:

Nel thread originale, su facebook, ho risposto che **da studente non c'è niente di meglio che provare a rifare quelle librerie proprio per capire come sono state fatte.** All'università sono felice di aver reimplementato tutte le strutture dati, perchè ora le uso con cognizione di causa. 

Un altro esempio: quando ho iniziato a studiare NodeJS, sentivo la mancanza di una libreria di logging come Log4J in Java. Una delle prime cose che ho fatto è stata di scrivermene una mia, che ovviamente faceva schifo ed era pure piena di bug, ma che mi ha aiutato a imparare meglio proprio NodeJS. 

![]({{ site.baseurl }}/images/rinventare-la-ruota.jpg)**Nel mondo del lavoro vero c'è una discriminante: il tempo.** Gli studenti scopriranno prima o poi che ogni giorno di lavoro in più equivale a molti soldi spesi dall'azienda, quindi meno tempo si impiega meglio è. E questo impone che **non si può reinventare la ruota,** non si può riscrivere ogni possibile funzione che abbiamo già disponibile da qualche parte on line. **E' anche il motivo per cui delle persone si sono inventate i framework**: **risolvono problemi che altri già hanno avuto**, risparmiando tutto il tempo necessario a tirare su un progetto. 

### L'eccezione che conferma la regola: cosa ci insegna Elon Musk

![]({{ site.baseurl }}/images/Elon_Musk_2015.jpg)

Ho tirato in ballo un _pezzo da 90_ e l'ho fatto per un motivo ben preciso. Tesla è un'azienda che produce auto elettriche. Era da una settantina d'anni che non si fondavano nuove case automobilistiche _consumer,_ e infatti ciò che ha realizzato, rivisto con gli occhi di oggi, sembra comunque una pazzia. Per creare un'auto dal nulla non ha seguito il solito processo che impiegano gli altri costruttori: **ogni singolo pezzo delle Tesla viene prodotto da loro stessi.**

E ancora: quando ha fondato SpaceX si stava buttando in un settore dominato da poche grandi aziende che avevano formato un oligopolio. Era difficile e dispendioso trovare, tra le tante cose, una base di lancio per poter sperimentare i propri razzi costruiti _in-house_, **senza subappaltare nulla**. Quindi che fa Musk? **Compra un atollo nel Pacifico da cui farà partire tutti i suoi razzi.** In questo modo non ha dovuto più chiedere nulla a nessuno, e ha velocizzato di molto il processo di realizzazione e sperimentazione. 

_Musk ha provato a "usare quanto c'era di già fatto"_, sia nel caso di Tesla che di SpaceX, ma a un certo punto si è trovato nella condizione di dipendere troppo da altro e di dover riciclare soluzioni non ottime per il suo contesto. Per Tesla, i motori erano sviluppati per altri tipi di carburanti, le batterie erano pensate per altri sistemi etc. **Riprogettare tutto da zero era l'unica strada percorribile per ottenere il miglior progetto, e soprattutto la miglior execution possibile.** 

La lezione che possiamo trarne è che **se dipendiamo in maniera decisa da qualcosa, e questa non ci soddisfa, è il caso che ce la riscriviamo da noi**. 

Se il _core_ della tua azienda è, ad esempio, processare pagamenti con le carte di credito, e le attuali soluzioni presenti sul mercato costano troppo o sono lente, è il caso che tu ti scriva il tuo payment processor. 

Sarà lungo e non sarà una passeggiata, ma dopo avrai la miglior soluzione possibile. 

Poi la devi vendere, ma questa è un'altra storia :)