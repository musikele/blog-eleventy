---
id: 652
title: 'Gestire le dipendenze frontend con... bower'
date: 2016-04-28T07:15:32+00:00
author: musikele
layout: post
guid: http://michelenasti.com/?p=652
permalink: /2016/04/gestire-le-dipendenze-frontend-con-bower/
dsq_thread_id:
  - '4783180565'
categories:
  - Italiano
tags:
  - bower
  - frontend
headerImg: /uploads/2016/04/bower-logo.png
---

Avete un progetto web che include molte librerie esterne (angular, moment, jquery...)? Aggiornarle, gestirle e censirle sta diventando un problema? Nel corso degli anni sono usciti molti tool per la gestione delle dipendenze, e questo vale per ogni linguaggio di programmazione esistente al mondo; per il frontend una delle soluzioni più semplici da implementare è **bower** che con pochissimo sforzo si configura anche negli ambienti più ostici.

# Bower

**Bower** è un gestore delle dipendenze frontend, ossia gestice i file .js, e funziona in modo molto simile a Maven (se venite da tecnologie Java). Con **bower** è possibile definire un file (chiamato `bower.json`) in cui vengono inserite tutte le dipendenze della nostra webapp e gestirle con pochi comandi. Obiettivo? ridurre la complessità, semplificare gli aggiornamenti, vivere più felici con il proprio team 😀

Per installare bower come prerequisito bisognerà installare NodeJs, dal sito [nodejs.org](https://nodejs.org/en/).

> **Nerd Alert!** per poter usare bower e/o Node vi servirà un po' di dimestichezza con il terminale. Tutti i comandi che vedrete qui andranno lanciati da linea di comando.

Successivamente:

```shell
npm install bower -g
```

`npm` è un package manager di NodeJs, ossia un tool da linea di comando che permette di installare programmi, dipendenze, librerie, etc. Il comando `install` si preoccupa di scaricare il pacchetto specificato, `bower`, e con l’opzione `-g` stiamo dicendo che bower deve essere installato globalmente (dunque sarà disponibile da qualunque path del terminale).

Non mi addentro in ulteriori spiegazioni su npm, perchè può fare molto di più se lavorate con NodeJs (addirittura c'è chi lo usa al posto di bower!), prometto di ritornare su npm in futuro.

Una volta installato bower è molto facile iniziare ad utilizzarlo: dal sito `http://bower.io/search/` si potranno ricercare pacchetti (es. angular, moment…) e se ci interessano basterà digitare da linea di comando

```shell
bower install angular`
```

Per installare la versione di angular più recente.

Se invece vogliamo installare una versione specifica, possiamo scrivere

```shell
bower install bootstrap#2.2
```

## Usare Bower like a "pro"

Quello che abbiamo visto fino ad ora riguarda dipendenze "one shot"; di solito noi vorremmo poter catalogare tutte le dipendenze della nostra webapp così da condividere con i colleghi solo il file delle dipendenze. Insomma, piuttosto che intasare SVN o Git con migliaia di file esterni, identici ad altri già presenti on line, scambiamo solo il file `bower.json` e chiediamo a bower di scaricare le dipendenze per noi.

Se vogliamo seguire questo approccio, lanciamo il comando `bower init` all’interno della cartella che contiene il nostro progetto, rispondiamo alle domande che bower ci fa (nome del package, autore..) e successivamente avremo uno scheletro di file bower bello e creato.

Ora che abbiamo creato un bower.json qualsiasi, possiamo scaricare e salvare una dipendenza usando il comando

```shell
bower install angular --save
```

che oltre a scaricare angular all'ultima versione disponibile, lo inserisce anche nel `bower.json`.

## Un caso pratico

A lavoro ho creato un progetto "base" che dovrà servire come punto di inizio per le prossime webapp che andremo a sviluppare. Contiene principalmente angular, jquery e qualche altra libreria creata da noi (quindi è interessante vedere come integrare in bower librerie aziendali, private).

Per creare questo progetto ho per prima cosa creato un file di configurazione che si chiama `.bowerrc` (notate il punto all'inizio). Serve a dare istruzioni di carattere "generale" a bower. Non è obbligatorio se vi stanno bene le configurazioni di default. Eccolo:

```json
{
  "directory": "lib",
  "timeout": 300000,
  "proxy": "http://localhost:9915",
  "https-proxy": "http://localhost:9915",
  "no-proxy": "localhost",
  "strict-ssl": false
}
```

Queste impostazioni sono tipiche in una realtà _enterprise_ dove c'è un proxy da configurare. Provo a spiegare le più importanti:

- **directory**: specifica in quale directory andare a scaricare le dipendenze esterne. Ad esempio, se importiamo angular, la troveremo in lib/angular .
- **proxy** e **https-proxy**: se avete qualche proxy impostato per accedere a internet, cosa assolutamente normale in ambienti aziendali, li configurate così.
- **no-proxy**: se ci sono host da raggiungere che fanno parte della rete locale, e che dunque non devono passare per il proxy, si possono specificare qui.
- **strict-ssl**: se il vostro SVN o Git privato è raggiunto in modalità https, è molto probabile che il certificato non sia validato da un'autorità riconosciuta. settando questo flag a "false", bower ignora i controlli di validità sul certificato.

Questo file `.bowerrc` può andare sia nella home dell’utente sia nella home del progetto, dato che sono impostazioni globali. Bower quando va sui repo cerca il file `.bowerrc` più vicino andando a vedere prima nella directory corrente, poi in quella superiore, etc. fino alla home utente.

Superata questa prima fase di configurazione, che farete una sola volta, vediamo il file **bower.json** che contiene la vera e propria lista delle dipendenze:

```json
{
  "name": "MyProject",
  "version": "0.0.1",
  "dependencies": {
    ...
    "jquery": "~2.1.3",
    ...
    "jquery-scrollintoview": "litera/jquery-scrollintoview#06834cf7fdba0e86cac84ed7761ea64a3a5fbec8",
    ...
    "mylib" : "svn+https://&lt;mysvnrepo&gt;/frontend-libs/mylib#0.0.1"
  },
  "private": true
}
```

`name` e `version` sono due attributi utili a bower per poter cacheare il pacchetto. **private** invece serve a evitare che il pacchetto venga committato per errore su bower central.

all’interno delle dipendenze vediamo i 3 tipi di dipendenze che ho utilizzato:

1. **jquery** è uno di quei pacchetti presenti nel bower globale (raggiungibile a [bower.io/search](http://bower.io/search)), quindi è specificato solo per versione;
2. **jquery-scrollintoview** è un plugin di jquery e non esiste su bower central, ma solo su GitHub. Scrivendo `litera/jquery-scrollintoview` lo stiamo andando a prendere da github. La versione è la `#06834cf7fdba0e86cac84ed7761ea64a3a5fbec8` (che sarebbe l’hash del commit su github). Quando una dipendenza non ha versioni, è possibile fissare il download ad un commit specifico in questo modo.
3. **mylib** non è una dipendenza presente nè su bower nè su github, perchè nostra, quindi ho specificato la sua versione con il path su SVN. Se il vostro repository inizia con http o https, bisogna aggiungere `svn+` davanti all'indirizzo, altrimenti bower assume che sia un repository git. Se il nostro progetto è versionato in maniera standard, ossia con le cartelle `branches`, `tags`, e `trunk`, bower sceglierà la versione giusta andando a vedere se esiste un cartella in tag con quel nome. Dunque nel nostro caso andrà all’interno della cartella `tags` presente su svn e poi prende il contenuto della cartella `0.0.1` e farà il checkout da `svn+https://<mysvnrepo>/frontend-libs/mylib/tags/0.0.1/`.

Una volta che abbiamo specificato tutte le dipendenze che abbiamo, possiamo semplicemente lanciare un fantastico `bower install` dalla root del progetto e bower si preoccuperà di scaricare tutte le dipendenze per conto nostro. Provare per credere!

### Nel prossimo articolo: private-bower

In molte realtà aziendali, dipendenze esterne vengono versionate anche su server privati dell'azienda, o per renderne più veloce lo scaricamento, o perchè sono stati corretti dei bug in librerie open dunque le si vuole gestire internamente.

Con git e svn bower è già compatibile con la stragrande maggioranza dei repo globali, ma resta il fatto che bisogna scrivere in bower.json il path completo dei repository. Questa cosa fa un po' storcere il naso ai puristi che vorrebbero gestire queste librerie in maniera trasparente (ossia, io ti dico solo la versione, e tu la vai a prendere dal mio server bower). Questo problema lo risolve un package chiamato `private-bower`, di cui spero di riuscire a parlare in un prossimo articolo (scrivere questo mi è costato 3 settimane, per mancanza di tempo!). Spoiler: facciamo puntare `bower` da riga di comando al nostro server `private-bower`, che cercherà i pacchetti per noi; se non li trova li va a scaricare da `bower.io` (il server centrale). Non resta che vedere come farlo.

Buona bowerizzazione dei vostri frontend!

Altre risorse:

- [Bower Getting Started](http://bower.io/#getting-started)
