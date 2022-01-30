---
id: 592
title: '"quanto ci metti?" - perchè i programmatori sono delle pippe col time management'
date: 2016-02-19T12:47:00+00:00
author: musikele
layout: post
guid: http://michelenasti.com/?p=592
permalink: /2016/02/quanto-ci-metti-problemi-time-management/
dsq_thread_id:
  - "4592974903"
categories:
  - Italiano
tags:
  - stima
  - time management
---
![](https://i2.wp.com/michelenasti.com/wp-content/uploads/2016/02/time-management.jpg) 

Il boss vi spiega una funzionalità da implementare, una bella cosa che va dal front-end al db, regole di business, interazioni UI, chiamate a servizi esterni, etc. e poi la fatidica domanda: "quanto ci vuole?" e voi, candidamente e onestamente, rispondete gentili: "mah, un giorno credo..."

Questo problema affligge tutti, e gli unici che non sbagliano sono quelli che sovrastimano. (Del resto, ai capi piace quando dici 3 e ci metti 2, mentre non piace se dici 2 e ci metti 3.)

Ma a cosa è dovuto questo _annoso_ problema?

  * Quando facciamo delle stime assumiamo il caso migliore, ossia nessuna interruzione, i requisiti non cambiano, etc.
  * sottostimiamo la complessità delle cose da fare
  * sovrastimiamo le nostre abilità
  * Per il boss, "stima" vuol dire "previsione esatta al 100%"

E gli effetti ricadono sia su di voi (generalmente con una bella aggiunta di stress), sia sul lavoro che dovevate fare (fatto in fretta, magari dovevano partire altre attività che restano bloccate, etc).

### Possiamo stimare meglio?

La risposta onesta è: **no**. Questo è avvilente, soprattutto perchè in genere i programmatori sono persone intelligentissime che hanno studiato una miriade di cose complesse (teoremi, linguaggi, etc), e pensano di essere supereroi che superano le leggi fisiche. Ma sulla stima non c'è niente da fare, **il tempo è l'unica risorsa consumabile che non tornerà mai più indietro**.  Non lo dico solo io: da un lato Zakas ha scritto un [messaggio in una mailing list]({{site.baseurl}}/archives/saved_elements/time_management_zakas.html) a riguardo, ma in rete ci sono molti altri articoli, [tipo questo](http://www.drdobbs.com/architecture-and-design/software-estimation-how-misperceptions-m/240166474?utm_source=NCZOnline+Newsletter&utm_campaign=5afe08eb6f-ncznewsletter&utm_medium=email&utm_term=0_607705c87a-5afe08eb6f-87891737).

Zakas suggerisce di **arrotondare** sempre **al giorno intero** se il task dura meno di una settimana (es. stimo 1,5 giorni => dico 2 giorni), di **arrotondare alla settimana** se dura più di 5 giorni (Es. stimo 9 giorni => dico 2 settimane) (ricordate che in una settimana lavorativa ci sono 5 giorni :p ), e se stimate di più beh,,, scomponete il problema, non potrete mai stimare una cosa che dura mesi!.

## Altri metodi di Time Management

### Pomodoro Techique

Quasi tutti ora direte "ma c'è la Pomodoro Technique!", ossia dividere il tempo in slot da 25 minuti e fare una pausa di 5 minuti tra ogni slot; ogni 4 slot consumati fare una pausa più lunga (15 minuti). La tecnica Pomodoro è un modo per provare a lavorare concentrati, non un modo per stimare la durata dei task.

Questa tecnica è ampiamente utilizzata e pubblicizzata nel mondo, esistono tantissimi siti web, libri e app (eccone [uno](http://tomato-timer.com/)) per provare a usarla.

Purtroppo, almeno nel mio caso, la tecnica Pomodoro non funziona affatto perchè le interferenze esterne sono la normalità ovunque abbia lavorato, per non parlare di quando provo a fare qualcosa a casa. (Butta l'immondizia... prendi le cose in macchina... si lavora sempre per qualcuno!). Inoltre le poche volte che ho provato a usare strumenti software per monitorare il tempo ho finito col litigarci - tipo quando compare quel popup "fai una pausa!" e io sto nel bel mezzo di un algoritmo complicatissimo.

### Scrum

**Scrum** è una metodologia _Agile_ che ho conosciuto nella prima fase della mia vita lavorativa. E' un insieme di best-practices per organizzare il lavoro, basato sull'esperienza ventennale di centinaia di migliaia di sviluppatori nel mondo. Questa delle metodologie software è un campo in continuo fermento.

Scrum organizza gli **sprint** in cicli da 2 settimane, ossia ogni 2 settimane si consegna un **deliverable** pienamente testato e funzionante con le nuove feature aggiunte. Queste feature, che in scrum si chiamano **user stories**, non vengono stimate in base al tempo che ci vuole per farle, ma in base a una metrica chiamata "**story point**", che il team assegna a ogni storia. Questi punti non sono un'indicazione di quanto tempo ci vuole ma di quanto il team vede complessità nei prossimi task da svolgere.

Come si relazionano questi punti con il tempo? In Scrum c'è tutta una filosofia per cui il team sa che ogni sprint riesce a bruciare X story points, anche basandosi sulle metriche raccolte nei precedenti sprint, quindi il tempo non diventa più un grande problema (perchè è fisso) bensì le storie, se sono percepite come molto complesse dal team, possono diventare lunghe e spalmarsi su più sprint. In questi casi la soluzione migliore è di spacchettare le storie in sottostorie più semplici (e misurabili).

_Studi empirici dimostrano che gli story point non sono proporzionali al tempo ma al costo (dollaroni). Se un task è difficile (=punteggio alto) probabilmente costa anche di più realizzarlo. Se un task è facile, invece, non è detto che sia di breve durata._ 

### Per concludere

Avete migliorato il vostro modo di gestire il tempo leggendo questo articolo? Suppongo di no. Ma almeno ora sapete che non siete i soli ad avere questo "problema". Se conoscete altri modi di stimare / gestire il tempo, segnalatelo nei commenti.