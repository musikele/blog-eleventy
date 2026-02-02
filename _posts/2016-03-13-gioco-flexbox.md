---
id: 627
title: Vuoi imparare flexbox ma ti annoi? Prova questo gioco
date: 2016-03-13T16:27:01+00:00
author: musikele
layout: post
guid: http://michelenasti.com/?p=627
permalink: /2016/03/gioco-flexbox/
dsq_thread_id:
  - "4659041306"
categories:
  - Italiano
tags:
headerImg: /uploads/2016/03/Schermata-2016-03-13-alle-16.17.26.png
---
Tutti abbiamo sentito parlare di **flexbox**, _spero_, è una nuova spec di css3 che permette di organizzare gli elementi di una pagina web in maniera più semplice rispetto a prima. Nonostante sia una feature per così dire _moderna_ è ben supportata da tutti i browser (anche mobile!).

Forse il motivo per cui è poco utilizzata è che tecnologie come Bootstrap risolvevano il 95% dei problemi che risolve flexbox; solo che bootstrap fa tutto "vecchia scuola".

Il problema di queste nuove "feature" è che bisogna impararle, e non c'è altro modo che studiarle (dal web), provarle, o ... giocarle.

E' proprio tramite un simpatico giochino ([flexbox defense](http://www.flexboxdefense.com/)) che ho imparato i concetti base del flexbox model; Invito tutti ad andare sul sito e a provare ad arrivare all'ultimo quadro con il 100% dei punti fatti. (come me).

### Come si gioca

Bisogna posizionare dei cannoni su una mappa per distruggere i nemici che percorrono il sentiero marrone. I cannoni non possono essere posti sui sentieri ma solo negli spazi verdi. Come posizionarli? Bisogna utilizzare il css e in particolare le proprietà flexbox suggerite quadro per quadro.

Curiosità: non avevo idea di come funzionassero i flexbox prima di oggi, ma grazie al giochino **ora mi sento piuttosto sicuro di come funziona**.

### display: flex

è la property da dare a un div. Da quel momento si comporterà seguendo le regole del flexbox model.

### **justify-content

Distribuisce gli elementi orizzontalmente in base alle regole specificate.

* `flex-start`: Raggruppa gli elementi nella parte sinistra (l'inizio) del contenitore
* `flex-end`: Raggruppa gli elementi nella parte destra del contenitore
* `center`: Raggruppa gli elementi al centro del contenitore
* `space-between`: Distribuisce equamente gli elementi nel contenitore in modo ch il primo elemento si allinea a sinistra e l'ultimo elemento si allinea a destra
* `space-around`: Distribuisce equamente gli elementi nel contenitore in modo che tutti gli elementi abbiano lo stesso spazio intorno a loro

### **align-items
  
Distribuisce gli elementi verticalmente.

* `flex-start`: Allinea gli elementi sul top del contenitore
* `flex-end`: Allinea gli elementi sul fondo del contenitore
* `center`: Allinea gli elementi al centro del contenitore
* `baseline`: Allinea gli elementi sulla baseline del contenitore
* `stretch`: Allarga gli elementi per riempire il container

### **flex-direction

permette di modificare la distribuzione spaziale degli elementi. Con `column` e `column-reverse` si invertiranno i comportamenti delle due proprietà: justify-content impilerà gli elementi verticalmente e align-items li organizzerà orizzontalmente.

* `row`: Dispone gli elementi da sinistra a destra
* `row-reverse`: Dispone gli elementi da destra a sinistra
* `column`: Dispone gli elementi dall'alto verso il basso
* `column-reverse`: Dispone gli elementi dal basso verso l'alto

### **Order

La proprietà **order** può essere applicata ai singoli item e serve per modificarne la posizione all'interno della disposizione naturale. Ogni item inizia la numerazione da 0, quindi specificando -1 lo si sposterà più a sinistra (mentre dandogli +1 lo si sposterà a destra).

### **Align-self**

E' sempre un attributo pensato per il signolo item. Ha le stesse proprietà (e comportamenti) di align-items, ma viene applicato all'elemento singolo (mentre align-items si applica a gruppi di oggetti).
