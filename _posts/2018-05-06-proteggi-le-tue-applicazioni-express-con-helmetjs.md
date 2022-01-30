---
paginate: true
comments: true
author: musikele
title: Proteggi le tue applicazioni Express con HelmetJs
category: Italiano
layout: post
date: 2018-05-06 00:00:00 +0200
header-img: "/images/testuggine-8.jpg"
tags:
- express
- helmetjs
- helmet
- security
- node
description: 'Helmet è un middleware che agganci ad Express e la tua app è immediatamente
  più sicura. '
---
Quanto ne capisci di sicurezza informatica? Io molto poco, anzi a dire il vero trovo l'argomento addirittura noioso. Questo non vuol dire che lo sottovaluto: è una di quelle cose che sì, è una palla, ma sì, bisogna trattare l'argomento _seriamente_.

![Testuggine romana]({{ site.baseurl }}/images/testuggine-8.jpg "Metti questi tizi a proteggere il tuo server ")

Intorno al mondo della sicurezza informatica esistono addirittura delle figure specifiche (il pentester, ad esempio, che per lavoro deve _bucare_ i server dei suoi clienti e trovare eventuali falle - per farle correggere!) o comunque interi team devoti alla sicurezza, che si occupano di implementare patch, conoscere gli attacchi più diffusi, capire cosa sta accadendo in tempo reale nella loro rete, etc.

Tutto questo preambolo per dire: quando realizzi la tua applicazione web **pensi alla sicurezza?** Se usi NodeJS è molto probabile che hai scritto qualcosa con Express; **ti sei mai preoccupato di sapere se l'app che hai rilasciato in produzione è _sicura_?**

Ripeto, la sicurezza è una cosa seria e non va abbozzata. Basta installare wordpress pulito su un server custom per scoprire dopo neanche dieci giorni che è stato bucato. Se siete un po' come me, è probabile che a tutto questo ci pensate alla fine (prima vi rimboccate le maniche per fare in modo che il servizio _funzioni_). Come evitare di prendere sottogamba l'argomento?

L'ideale, per me, è di trovare un middleware per Express che lo agganci e - _magia! -_ la tua app è più sicura.

Tale progetto esiste e si chiama [HelmetJS](https://helmetjs.github.io/).

![Helmet Logo ]({{ site.baseurl }}/images/helmetjs.png "Il logo di HelmetJS. Purtroppo esiste solo in bassa qualità")

## Come funziona

**HelmetJS** non fa analisi di ciò che entra o ciò che esce dal tuo sito.

Quello che invece fa è aggiungere una serie di best practices a Express, alcune che sono semplici regole dettate dal buon senso, e altre che invece dipendono dal contesto.

Un esempio di regola semplice: rimuvere il tag `X-Powered-By` che di default Express setta con nome e versione; questo rende la vita facile a un attacker che può trovare un exploit specifico per il tuo server.

Altri esempi li trovate cliccando sui vari [link dei sottomoduli]() di Helmet, installabili singolarmente.

## Come si installa

niente di più semplice, e a me le soluzioni semplici piacciono.

```shell
$ npm install helmet --save 
```

Dopodichè si tratta solo di istanziare Helmet nel vostro server e usare il middleware il più in alto possibile:

```javascript
var express = require('express')
var helmet = require('helmet')

var app = express()

app.use(helmet())

// ...
```

### Mai più preoccupazioni?

Non scherziamo. Gli hacker ne sanno una più del diavolo, e non appena un software - sistema - applicativo si diffonde, sfruttano bug sempre più complessi.

Però bisogna riconoscere che Helmet è un progetto semplice che fa quelle cose che Express avrebbe dovuto fare di suo. Per me, è un _mai più senza_.

Vi lascio le mie personali regole non scritte (prima d'ora) della sicurezza informatica:

* più una cosa è semplice, più è difficile da bucare
* aggiorna sempre tutti i sw, e se non puoi iscriviti alle mailing list di sicurezza dei software che tieni in produzione (così avvisi chi di dovere)
* Se i dati che gestisci sono importanti, assumi uno che ne capisce

Conoscete tool simili a Helmet ma per altri linguaggi? Se si, indicali nei commenti!