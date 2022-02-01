---
paginate: true
comments: true
author: musikele
title: Cinque tool per migliorare la vostra developer experience
category: Italiano
layout: post
date: 2017-05-30T12:07:50+00:00
tags:
  - post 
  - git flow
  - mac-cli
  - oh-my-zsh
  - postman
  - ngrok
---


Riuscireste a svolgere il vostro lavoro senza la linea di comando? Se siete come me, ossia amanti di bash, ecco alcuni tool che vi permetteranno di migliorare la vostra *developer experience*.

### `mac` command line

Si [installa da linea di comando](https://github.com/guarinogabriel/Mac-CLI) e crea un eseguibile, `mac`, che permette di svolgere molte operazioni comuni con pochi click.

![](/images/demo-mac-cli.gif)

Un esempio?

* `mac ip:public` vi restituisce il vostro ip pubblico
* `mac speedtest` esegue uno speed test da linea di comando
* `mac memory` vi dice quale app sta consumando la vostra preziosa RAM

e tanti altri. Sono circa una cinquantina!

### `Oh-my-zsh` per un terminale più combattivo

[Oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh) è un tool che va a sovrascrivere un po' di cose nei vostri file di configurazione di zsh. In particolare, modifica il funzionamento del prompt di comando mostrandovi le informazioni di cui più avete bisogno:

![](/images/oh-my-zsh.jpg)

Insomma, avrete sott'occhio user, cartella in cui vi trovate, repository e branch, senza impazzire. E poi migliora anche l'utilizzo dell'autocompletamento (il TAB). Ci sono anche i plugin. Oh my!

### `ngrok`, per testare chiamate API dall'esterno

Dovete testare le chiamate di un sistema esterno verso il vostro software? Ad esempio, io ho avuto questa esigenza con le API di Paypal e Gestpay: a un certo punto questi sistemi dovevano notificarmi che i pagamenti erano andati a buon fine e mi avrebbero contattato agli indirizzi configurati.

Come testare e come verificare il contenuto di queste chiamate? Facile, con [ngrok](https://ngrok.com/): un tool che permette di creare un tunnel privato da un indirizzo http esterno.

![](/images/ngrok.png)

Per farla facile, voi lanciate `ngrok http 8000` e ngrok creerà un indirizzo tipo `http://abc33344422.ngrok.io`. Visitando questo indirizzo (anche dall'esterno della vostra rete privata!) ngrok redirige il traffico a`localhost:8000`. Tutto ciò che passa per ngrok viene loggato e mostrato!

### Git Flow, una metodologia per semplificare e standardizzare git nel team

Git flow è sia [un tool installabile da linea di comando](https://github.com/nvie/gitflow), sia un approccio filosofico alla domanda "come lavorare in gruppo".

Git è un potentissimo sistema di versioning e branching; spero per voi che lo stiate già utilizzando altrimenti brrrr.

Con git flow organizziamo il lavoro in due *meta-filoni*:

* branch `master`, che corrisponde alle versioni rilasciate
* branch `develop`, ossia dove gli sviluppatori committano le feature sviluppate, in attesa di rilascio.

Oltre a questi due branch "generali", ogni azione degli sviluppatori è realizzata creando nuovi branch:

* Gli sviluppi delle singole feature sui branch `feature/*tua_feature*`
* I rilasci (da develop a master) su branch chiamati `release/*nome_release*`
* le hotfix (fix, correzioni a bug, di versioni già rilasciate) su branch `hotfix/*nome_fix*`.

Non ci avete capito niente? [Qui un grafico che prova a spiegare comandi e funzioni](https://danielkummer.github.io/git-flow-cheatsheet/).

### Bonus: Postman per testare le interfacce Rest

Ho iniziato a lavorare che c'era SOAP e si stava appena iniziando a parlare di REST. Qualche anno dopo, SOAP è diventato *legacy* e tutti si dichiarano REST, chi bene e chi male. 

Ad ogni modo, è sorta l'esigenza di testare le interfacce REST e come testarle se non con [Postman](https://www.getpostman.com/)?

![Postman](https://www.getpostman.com/img/v2/logo-big.svg)

Questa è  una vera e propria applicazione *standalone* che permette di effettuare ogni tipo di chiamata desideriate, GET - PUT - POST - HEAD etc. C'è la possibilità di salvare le chiamate, passare header aggiuntivi, visualizzare i dati in molti modi (ad esempio JSON), etc etc.

Come dite? non è un tool da linea di comando? Avete ragione, ma questo è il mio blog e qui comando io 😂
