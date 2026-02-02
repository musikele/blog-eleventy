---
id: 513
title: un pratico esempio del perchè l'Object Oriented non è la Soluzione Universale©'
date: 2016-01-13T10:10:58+00:00
author: musikele
layout: post
guid: http://michelenasti.com/?p=513
permalink: /2016/01/perche-lobject-oriented-non-e-la-soluzione-a-tutto/
headerImg: /uploads/2016/01/stormo-di-gabbiani-un-cielo-color-pastello.jpg
dsq_thread_id:
  - "4486789148"
categories:
  - Italiano
tags:
  - functional programming
  - object oriented
  - programmazione funzionale
---

Ieri molti amici e lettori mi hanno chiesto perchè avessi iniziato ad approfondire il paradigma funzionale, quando con l'object oriented riesci a risolvere quasi tutti i problemi del mondo.

Voglio farvi vedere un esempio di codice che, siccome dipende dallo stato interno degli oggetti e questo stato è mutevole, risulta molto difficile da seguire e da analizzare.

Stavolta l'esempio l'ho preparato in Java, il linguaggio OO per eccellenza. Ho creato la classe `Stormo` (di gabbiani) che modella uno stormo. Ogni stormo ha due metodi, il metodo `unisci` con un altro stormo, e `riproduci`, che modella essenzialmente quella cosa là :D.

Nel main invece vedete un po' di operazioni sugli Stormi. Quanto vale result?

```java
class Stormo {

 public int gabbiani;

 public Stormo(int n) {
  this.gabbiani = n;
 }

 public Stormo unisci(Stormo other) {
  this.gabbiani += other.gabbiani;
  return this;
 }

 public Stormo riproduci(Stormo other) {
  this.gabbiani = this.gabbiani * other.gabbiani;
  return this;
 }
}

public class Test {

 public static void main(String args[]) {

  Stormo stormo_a = new Stormo(4);
  Stormo stormo_b = new Stormo(2);
  Stormo stormo_c = new Stormo(0);

  int result = stormo_a.unisci(stormo_c).riproduci(stormo_b)
                  .unisci(stormo_a.riproduci(stormo_b)).gabbiani;

  System.out.println(result);
 }
}
```

Quanti gabbiani contate? Quanto vale `result` alla fine del Main ?

La risposta che avete contato voi è ... 16. La riposta del compilatore invece è ... 32. E l'oggetto `stormo_a` è addirittura cambiato!

Come vedete, sono bastate poche righe di codice per ottenere un risultato sballato e un bug piuttosto evidente.

Uno dei problemi che affligge questo codice è che va a mutare lo stato interno dell'oggetto; se i metodi `unisci` e `riproduci` avessero restituito copie e lasciato immutato la classe stessa, ora non saremmo qui a parlarne.

### Come si risolve?

Amici suggeriscono di mostrare cosa si dovrebbe cambiare affinchè il codice funzioni.

Io modificherei i metodi `unisci` e `riproduci` per ottenere il risultato corretto:

```java
public Stormo unisci(Stormo other) {
    return new Stormo(this.gabbiani+other.gabbiani);
}

public Stormo riproduci(Stormo other) {
     return new Stormo(this.gabbiani*other.gabbiani);
}
```

Ed è qui che si applica il concetto di **immutabilità**: non ci sono side effects sull'oggetto chiamato e viene restituito un nuovo oggetto contenente le nuove proprietà.

---

Dunque ciò che dicono i miei amici e colleghi è giusto, nel senso che con la programmazione a oggetti (ma anche con la programmazione iterativa) i problemi si risolvono comunque; l'approccio funzionale permette però di avere qualche altro gadget nel coltellino svizzero del programmatore, di scrivere codice più bello, più espressivo, più succinto.

Per completezza, riporto qui l'esempio (con i termini inglesi) in javascript così potrete eseguirlo nella console del browser (senza che aprite eclipse...). Anche questo esempio è preso da [Mostly Adequate Guide to Functional Programming, capitolo 1.](https://github.com/MostlyAdequate/mostly-adequate-guide/blob/master/ch1.md)

```java
var Flock = function(n) {
  this.seagulls = n;
};

Flock.prototype.conjoin = function(other) {
  this.seagulls += other.seagulls;
  return this;
};

Flock.prototype.breed = function(other) {
  this.seagulls = this.seagulls * other.seagulls;
  return this;
};

var flock_a = new Flock(4);
var flock_b = new Flock(2);
var flock_c = new Flock(0);

var result = flock_a.conjoin(flock_c)
    .breed(flock_b).conjoin(flock_a.breed(flock_b)).seagulls;
//=> 32
```
