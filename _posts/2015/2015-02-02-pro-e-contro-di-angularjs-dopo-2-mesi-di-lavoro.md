---
id: 115
title: Pro e contro di AngularJs dopo 2 mesi di lavoro
date: 2015-02-02T09:55:11+00:00
author: musikele
layout: post
guid: http://michelenasti.com/?p=115
permalink: /2015/02/pro-e-contro-di-angularjs-dopo-2-mesi-di-lavoro/
dsq_thread_id:
  - "3958633940"
headerImg: /uploads/2015/02/angular-featured-825x468.png
categories:
  - Italiano
tags:
  - angularJs
  - backbone
  - ember
  - javascript
  - requireJs
  - SPA
  - webstorm
---
_Questa è una chat tra me e il mio ex-collega/amico [Davide](https://www.linkedin.com/profile/view?id=9483864 "Davide Antelmo"), sull'esperienza fatta con [AngularJs](https://angularjs.org/). Forse anche loro svilupperanno un POC (proof of concept) e voleva un po' di info. Credo che queste "opinioni" possano servire anche ad altri. Enjoy 🙂_

> **D.:** Come vi state trovando con angularjs?

**Io:** la cosa di AngularJs è lunghetta; ci sono pro e contro. Di sicuro Angular è un framework all-or-nothing ... Non si può usare solo una parte di Angular, come il data binding, senza usare ad es. le direttive, o la dependency injection. Ci sono parti di Angular che si possono saltare, ma il "core" è abbastanza ampio. Quindi lo si deve imparare per forza tutto prima di capirne tutte le potenzialità.

Un altro svantaggio di Angular è che **è JavaScript**,  e JavaScript è un linguaggio da studiare completamente, ossia il modello a oggetti, i prototype, gli scope, gli === al posto di == ... Pensa, ho scoperto dopo mesi di lavoro che alcuni ignorano la possibilità di provare codice nella console del browser!

Ci sono anche alcuni vantaggi, però: è ormai il framework più diffuso a livello mondiale, da un po' esistono migliaia di estensioni, direttive, filtri, etc. che qualcuno ha già scritto e fa proprio quel che vuoi tu.

Durante lo sviluppo ho sentito due mancanze principali: **un esperto di Angular che ci guidasse** (ho dovuto imparare quasi tutto da me!), e senza conoscerne i reali vantaggi è stato scelto forse un po' per moda... scelta azzeccata comunque. E poi la **mancanza di linee guida** per tutti gli sviluppatori. Specialmente all'inizio ognuno faceva le cose di testa sua. Chi usava jQuery, chi usava Bootstrap classico (quando c'è [angular-ui](http://angular-ui.github.io/bootstrap/)), ... Queste cose però si risolvono , diciamo.

Quel che mi manca invece è la possibilità di fare refactoring efficienti ... L'unico IDE decente per Angular (o meglio per JavaScript) è [WebStorm](https://www.jetbrains.com/webstorm/), che si paga (45$), ma nel mio team nessuno l'ha voluto adottare ... Troppa resistenza. E gli errori di sintassi si scoprivano solo a runtime, quindi trial&error.

Alla fine della fiera cmq il software lo stiamo realizzando, i problemi li abbiamo tutti aggirati pure con una buona infrastruttura, e l'esperienza fatta è molto preziosa ... Non saprei che altro dirti; i problemi di "efficienza" che tanti dicono su Angular noi non li abbiamo visti!

> **D.:** scusa e che ide avete usato? Cmq anche noi stiamo per far partire un POC su Angular. Durante il POC sceglieremo se usare [Brackets](http://brackets.io/), [Atom](https://atom.io/), o addirittura [Visual Studio community edition 2013](http://www.visualstudio.com/en-us/products/free-developer-offers-vs.aspx)

**Io:** Il migliore in assoluto è WebStorm

> **D.:** ovviamente imbarcarsi su AngularJs senza una base solida su javascript è un grosso problema. Chiaro , ti parlavo di quelli free. Quelli che ti dico io sono tutti free.

**Io:** Gli sviluppatori sono abituati a Eclipse per il backend e quasi tutti usano eclipse anche per il frontend. Difficilmente li convinci se non gli fai vedere che funziona ctrl+spazio (che comunque in Eclipse JavaScript non c'è!) o altre amenità. Ho pure mostrato che in WebStorm c'è, anche se non funziona benissimo, e comunque manco l'hanno voluto usare... Ho visto un pò di brackets ed è OK... Non so visual studio etc come vanno

> **D.:** cmq anche io ho letto diversi articoli sui famosi &#8216;problemi di perfomance' di angularjs. Quante UI aveva il progetto che avete usato?

**M:** Un centinaio di UI. Era una vecchia applicazione Visual BASIC portata in web

> **D.:** beh good avrete modularizzato bene... ma avete usato anche [RequireJs](http://requirejs.org/) per caricare asincronamente i moduli?

**Io:** No niente RequireJs

> **D.:** avete usato qualche template per la struttura del progetto ? Tipo [angular seed](https://github.com/angular/angular-seed)? o avete usato qualcosa di più &#8216;enteprise' ?

**M:** una sorta di "template" ce lo siamo inventati noi. Su questa parte non siamo stati troppo smart ... Eravamo all'inizio e non sapevamo che fare. Dovevamo "buttare le mani"

> **D:** io penso che useremo qualcosa di questo tipo:  <a href="https://github.com/johnpapa/gulp-patterns" target="_blank" rel="nofollow">https://github.com/johnpapa/gulp-patterns</a>

**M:** Se potessi tornare indietro userei [yeoman](http://yeoman.io/) che ho usato a casa

> **D.: **<a href="http://slides.com/thomasburleson/using-requirejs-with-angularjs#/" target="_blank" rel="nofollow">http://slides.com/thomasburleson/using-requirejs-with-angularjs#/</a>  <a href="https://github.com/ThomasBurleson/angularjs-Zza-BMEAN" target="_blank" rel="nofollow">https://github.com/ThomasBurleson/angularjs-Zza-BMEAN</a>

**M: **Si si purtroppo sono cose che ho letto DOPO che ho iniziato a lavorare su angular. Purtroppo non ho partecipato alla fase di setup del progetto. Ah dimenticavo,  un altro svantaggio probabile è che A[ngularJs 2 sarà una cosa totalmente diversa](http://ng-learn.org/2014/03/AngularJS-2-Status-Preview/)

> **D.: s**i visto

**Io:** Ma non uscirà subito e cmq angular 1 sarà supportato per molto tempo ancora

> **D.:** cmq il modo in cui si fanno le web application (anche con backend Java) sta cambiando. Insomma [SPA](http://en.wikipedia.org/wiki/Single-page_application): oggi è AngularJs 1,domani AngularJs 2 o web components, ma architetturalmente il futuro è questo. L'era delle pagine generate dal server è finito 🙂

**Io:** Il web si interroga come ha fatto angularJs a vincere ... ci sono altri progetti concorrenti che qualitativamente stanno lì, come [Backbone](http://backbonejs.org/) e [Ember](http://emberjs.com/)... Bo

> **D.:** Perchè AngularJs, secondo me, è più enterprise. Le due cose &#8216;enterprise' che ha di più sono le direttive e i moduli. Ti permette di strutturare, riusare, testare... poi ok c'è anche la dependency injection... ah, questi javisti che si mettono a inventare framework javascript!

**Io:** a quanto pare è stato scritto da un Javista ...

> **D.:** Bravo!

**Io:** Mi hai anticipato, ho mia moglie che mi sta tallonando 😀

> **D.:** idem! e allora buona serata, e grazie per i feedback!