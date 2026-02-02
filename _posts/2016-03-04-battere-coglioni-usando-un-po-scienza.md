---
id: 612
title: Chi è Jacopo Notarstefano, l'inventore del programma anti-Calderoli
date: 2016-03-04T20:37:24+00:00
author: musikele
layout: post
guid: http://michelenasti.com/?p=612
permalink: /2016/03/battere-coglioni-usando-un-po-scienza/
dsq_thread_id:
  - "4634520636"
categories:
  - Italiano
tags:
  - big data
  - calderoli
  - emendamenti
  - Jacopo Notarstefano
  - python
---
In questi giorni, sul web, è uscito un articolo bellissimo: [Battere Calderoli usando Python](http://www.jacquerie.it/battere-calderoli-usando-python), scritto da [Jacopo Notarstefano](https://twitter.com/Jaconotar). E' un po' difficile da leggere perché è tecnico, ma gli effetti sono piuttosto interessanti. Proverò a spiegarvi un attimo l'articolo, da un punto di vista "umano", e poi vi parlerò dell'autore.

## L'articolo originale spiegato facile

Spero sappiate tutti che Calderoli se ne è uscito, qualche tempo fa, con un programmino informatico (non scritto da lui) capace di generare emendamenti a proposte di leggi. Semplicemente sposta una virgola qui, aggiunge un comma lì, ed ecco che l'emendamento è servito. Con questo programmino ha presentato milioni di emendamenti in occasione del Ddl Boschi che la Camera avrebbe addirittura dovuto stampare; per fortuna in quel caso hanno preso una svolta ecologista e hanno scelto di non farlo. (Perchè stampano se i deputati hanno un tablet "aziendale"?!)

Dunque molti emendamenti sono simili. Come fare a capire quali sono stati generati da software e quali invece sono "reali"? Come eliminare il "rumore" di questi emendamenti fuffa?

Ecco il procedimento utilizzato da Jacopo, spiegato a chi di informatica capisce poco o niente:

* Il primo passo è di scaricare tutti gli emendamenti dalla pagina del senato.
* Il problema da risolvere è un classico problema di Data Science, ossia trovare tutti i "cluster" (gruppi) di articoli "omogenei" (simili).
* Come capire quali articoli sono simili tra loro? Usando una metrica semplice: dati due emendamenti, calcola quanto è grande la sottostringa uguale (una porzione di testo) più grande. E' abbastanza chiaro che se la sottostringa è grande, i due articoli sono molto simili.
* Grazie a questa metrica è possibile lanciare un algoritmo, chiamato "Hierarchical Clustering", che mostra un grafico somigliante a un tabellone dei mondiali disegnato da un ubriaco. Se lo guardate attentamente, però, i colori sono diversi: bene, l'algoritmo ha colorato allo stesso modo gli emendamenti che secondo lui sono simili. Nell'articolo viene mostrato anche praticamente, ispezionando gli esempi.

### Calderoli, prendi questo

L'approccio qui spiegato è molto simile a quello che fanno giornalmente i filtri anti-spam dei nostri account di posta, per filtrare le mail indesiderate. Spiace dirlo ma un milione di emendamenti di Calderoli (o di chiunque altro) non è che spam, fuffa, e come tale va buttato. Un senatore (pagato da noi) spammer.

### Chi è l'autore?

Ci sto chattando su Twitter mentre scrivo l'articolo. E' una persona normale, risponde a tutti (compreso me che non sono nessuno), anche se in questi giorni chiunque lo sta contattando per chiedergli un'intervista. Ha 28 anni, è laureato in matematica alla triennale, sta completando la specialistica di informatica; ha iniziato a programmare seriamente dal 2010, e lavora presso il CERN di Ginevra al motore di ricerca di articoli scientifici (ecco spiegata la familiarità con le metriche sui testi e la capacità di analizzare dati di grandi dimensioni...).

Ci tiene a precisare che il suo articolo è stato realizzato lontano dagli orari di lavoro al CERN, dunque nel tempo libero, e che **il CERN non centra assolutamente nulla con questo lavoro**.

Per me questo ragazzo è un genio, Nel senso che ha applicato strumenti che a suo tempo ho studiato anche io ma che non ho mai pensato di usare in questo senso. Gli chiedo se si sente così (**test della modestia**): "Nah. Cioè, non penso di essere scemo, ma ho conosciuto abbastanza gente che si meritava l'appellativo di "genio" per sapere che io non me lo merito." E' anche modesto!

Gli chiedo **se i suoi superiori, o colleghi, gli abbiano chiesto spiegazioni o intimato qualcosa**: "No, nessuno. L'unica cosa che mi ha chiesto il Press Office è di tenere ben presente che questo progetto e il CERN non hanno niente a che vedere l'uno con l'altro." E poi: "il collega italiano si è congratulato dell'articolo, ma niente di più". Immagino che la CERN e specificamente nel suo settore, risolvano problemi ben più complessi. E, dato l'ambiente internazionale, a nessuno frega nulla di Calderoli spara-emendamenti.

Mi conferma che anche **dalle istituzioni politiche non è arrivato nessun segnale di interesse** verso il suo lavoro.

Altra domanda, **quante persone ti hanno contattato in questi giorni per chiederti interviste** e chiarimenti sull'articolo? "Chiunque 🙂 sono un po' indietro con le interviste sebbene stia saltando la pausa pranzo da martedì per farle... Mi sono stati chiesti i dettagli tecnici dell'articolo, ma in genere sono sempre stati tagliati dagli articoli, quindi non li devo aver spiegati granché bene."

A questo punto, curiosità personale: **come si fa a lavorare per il CERN**? Risposta più facile di quel che pensavo: "Applichi a uno dei (tanti) bandi che escono durante l'anno. A seconda del tipo della posizione hai requisiti diversi sulle qualifiche che devi avere e gli step che devi superare. Ad esempio a [questo indirizzo](https://jobs.web.cern.ch/join-us/fellowship-programme).

Non resta che salutarci, è una persona davvero squisita, risponde a tutte le mie domande senza troppi problemi. Gli auguro il meglio, e mi riprometto di far arrivare il suo lavoro più in alto possibile (chi lo sa, magari ai presidenti di Camera e Senato?).

Io ripeto quello che ho già scritto in un tweet: **fatelo** **Presidente Del Mondo**, il mio voto già ce l'ha!
