---
id: 367
title: Perchè Node.JS è così difficile da imparare (per chi viene da Java)
date: 2015-10-06T19:00:12+00:00
author: musikele
layout: post
guid: http://michelenasti.com/?p=367
permalink: /2015/10/perche-node-js-e-cosi-difficile-da-imparare-per-chi-viene-da-java/
dsq_thread_id:
  - "4198440043"
categories:
  - Italiano
tags:
  - async
  - callback
  - javascript
  - linguaggi funzionali
  - node
  - nodejs
headerImg: /uploads/2015/10/node-js-logo.png
---

Breve riassunto della mia vita programmativa: all'università ho studiato C (male) e Java (bene), con il tempo mi sono specializzato su Java e comunque sui linguaggi orientati ad oggetti. Ho odiato il mondo del web perché, quando 10 anni fa ho sviluppato qualcosina, mi sentivo frustrato che tutto si vedeva male a seconda del browser. Quindi ho snobbato Javascript. Poi invece il mondo Enterprise ha smesso di fare applicazioni standalone e mi sono trovato a dover rimparare html, css e js in meno di tre anni. Ed eccomi qui!

Nel 2005 Javascript non era uno standard, ogni browser lo interpretava a modo suo e veniva usato principalmente per assicurarsi che l'input dei form fosse corretto. Qualcuno provava a sviluppare animazioni e poco più, ma si scontrava contro il mondo frammentato dei browser. Il 2005 era ancora l'anno di Internet Explorer 5.5, Netscape Navigator, Mozilla aveva appena lanciato Firefox, Chrome non esisteva: la browser war aveva superato il punto più critico ma restavano ancora nodi aperti. Per fortuna JQuery ci mise una pezza, e il W3C decise di standardizzare tutto lo stack del frontend per evitare che ogni browser implementasse le cose a modo suo.

10 anni dopo Javascript non è più il linguaggio dei Browser. Javascript è ovunque. Addirittura esistono DB che prendono in input codice JS e lo eseguono sui dati! Tranquilli, non vi parlerò di questo mondo incasinato (cit. il mio amico TilT "se qualcosa si può fare con Javascript, eventualmente verrà fatto in javascript"), non ancora almeno. Questo articolo vorrebbe semplicemente parlarvi di cosa c'è di diverso tra un linguaggio ad oggetti, come Java, e un linguaggio funzionale, come Javascript. E poi parliamo di Node.

### 1. Tutto è una funzione

Ci ho messo un po' a capire questa proprietà dei linguaggi funzionali. In pratica tra i vari tipi di default di un linguaggio funzionale come javascript ci sono int, long, double, Object, ... e **function**. Altri linguaggi, come Scala, usano un approccio simile. Essendo una funzione un tipo assegnabile a una variabile, si possono passare funzioni in input a un'altra funzione, si possono assegnare funzioni alle variabili, e si possono anche scrivere funzioni che ritornano funzioni! è un mondo incasinato ma proverò a spiegarvelo in pochi semplici snippet.

Possiamo assegnare una funzione a una variabile:

```javascript
var saluta = function() {
   console.log("ciao"); 
}
```

possiamo passare una funzione in input a un'altra funzione:

```javascript
var salutaColCiao = function() {
   return "ciao";  
};

//nota: sto passando la funzione come un argomento qualsiasi!
var salutaConNome = function(saluto, nome) {
   //per come è fatto javascript, se saluto() non è una funzione 
   //verrà lanciata un'eccezione
   saluto() + " " + nome;
}

//scriverà "ciao Michele" 
salutaConNome(salutaColCiao , "Michele"); 
```

### 2. Callback

Una Callback è una funzione che viene "chiamata dopo". Ad esempio, fate una query al DB, quando questa finisce processate i dati. In un linguaggio come Java scrivereste qualcosa così:

```java
//codice JAVA
...
List&lt;Paziente&gt; pazienteList = PazienteDAO.getAll(); 
processPazienti(pazienteList); 
... 

```

E se l'operazione successiva la dovremmo decidere a runtime, in base al punto in cui ci troviamo dell'applicazione? Sempre in JAVA ci conviene scrivere un'interfaccia e passarla al metodo getAll ....

```java
//codice JAVA

public interface Callback {
    public void executeOperation(Object result); 
}

public class PazienteDAO {

    private static DB db; 

    public void getAll(Callback callback) {
      //operazioni di lettura sul db... 
      List&lt;Paziente&gt; pazienteList = db.executeQuery("select * from paziente"); 
      //quando ho fatto chiamo la callback: 
      callback.executeOperation(pazienteList); 
      }
}
```

Adesso, siccome getAll non restituisce più nulla, per elaborare il dato in uscita dobbiamo implementare la funzione executeOperation per processare l'output:

```javascript
... // codice JAVA 
pazienteDAO.getAll(new Callback() {
  
  @Override
  public void executeOperation(Object result) {
    List&lt;Paziente&gt; pazienteList = (List&lt;Paziente&gt;) result; 
    process(pazienteList); 
  }

});
```

Ecco, questa è una callback in Java. In JS è moooolto più semplice, visto che si possono passare le funzioni e quindi non dobbiamo scrivere codice in più (bloat-code):

```java
patientDAO.getAll(function(patientList) {
   //tutte le operazioni che servono 
   process(patientList); 
});
```

O ancora più semplicemente:

```javascript
patientDAO.getAll(process(patientList));
```

### 3. tutto è in un solo thread (e basta!)

Questa è difficile da spiegare, perchè non è davvero così. Il thread che analizza il codice javascript e lo traduce in codice macchina è uno solo. Ma tutte le operazione di sistema, come quelle di I/O (su disco, su rete...) vengono eseguite su un thread a parte. L'idea è che, quando chiamiamo un'operazione di IO come una lettura su disco, il sistema operativo si occupa di leggere il file e lo fa in maniera _asincrona_, così che Node può passare subito all'istruzione successiva. Quando il sistema operativo ha terminato la lettura del file chiama la callback, che viene schedulata da Node per essere eseguita nel famoso unico thread.

![una spiegazione visibile di come funziona l'event loop di javascript](/uploads/2015/10/threading_node.png)

E la scalabilità? L'approccio asincrono permette di gestire migliaia di richieste contemporanee con un singolo thread (Provate a farlo fare ad Apache!).

E l'octacore che ho comprato a Natale? Programmando con un paradigma "funzionale" si impara anche a programmare in maniera stateless, dunque si possono lanciare più istanze di Node e mettere un load-balancer che inoltra le richieste ai vari processi.

Per ricapitolare: _tutto ciò che fa parte di una libreria base viene eseguito in parallelo, **tranne il tuo codice**_.

### 4. Il fantastico mondo degli oggetti in JS

Questa non è troppo difficile da capire ma l'ho messa qui perchè, rispetto ai vari linguaggioni business etc, penso che sia una cosa fantastica.  Per creare un oggetto in JS è sufficiente questo :

```javascript
var human = {}; //oggetto istanziato ma vuoto
```

se voglio creare una property all'interno dell'oggetto posso fare così:

```javascript
var human = {
  height: 170, 
  weight: 80
};
```

e ora potrete accedere alle varie proprietà dell'oggetto con `human.weight` o `human.height`.

Potete mettere le funzioni negli oggetti nello stesso modo delle proprietà:

```javascript
var human = {
  height: 170, 
  weight: 80, 
  calculateDensity : function(height, weight) {
     return height/weight; 
  }
};
```

La cosa da capire è che la funzione così definita non va ad agire sulle property dell'oggetto (perchè è stateless!) ma bisogna passargliele di volta in volta.

Ciò significa che se istanzio 100 human avrò 100 funzioni istanziate? SI. Ed è qui che entrano in gioco i Prototype (ossia, istanzio la funzione una volta, e me la ritrovo sempre). Però non ne voglio parlare in questo articolo perchè diventerebbe un casino. Sappiate solo che ogni oggetto in js può essere liberamente modificato successivamente, quindi posso aggiungere property a human facendo cose tipo `human.numberOfEars = 2` , o cancellare property esistenti con `delete human.height` .

### Concludendo

Javascript gode della fama storica di essere un linguaggio per giochetti. Mentre la gente era impegnata a snobbarlo, alcuni programmatori hanno tirato fuori le webapp più incredibili mai pensate. NodeJS è ciò che restituisce la dignità a JS come un linguaggio vero e proprio: finalmente si possono creare file, aprire socket, etc. etc. etc.

Io stesso sono ancora in fase di studio, e non ho realizzato ancora nulla che sia degno di nota con questo linguaggio. Come prova del 9, per vedere se ho capito i concetti che io stesso ho spiegato, vorrei realizzare una piccola webapp che fa "qualcosa" (idee? suggerimenti?)

Vale la pena studiarlo? SI. Solo il cambio di paradigma (da oggetti a funzionale) ne vale la pena. Sarà un'ottima palestra per tutti quei linguaggi che si dichiarano "funzionali" e che fanno della scalabilità il loro punto di forza.
