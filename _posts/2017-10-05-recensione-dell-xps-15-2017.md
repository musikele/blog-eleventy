---
paginate: true
comments: true
author: musikele
title: 'Windows non fa più così schifo: recensione Dell XPS 15" 9560 (2017)'
category: Italiano
layout: post
date: 2017-10-03 00:00:00
tags:
  - dell
  - xps
  - recensione
  - computer
  - laptop
  - mac
  - windows
---

Appena ho finito l'università ho acquistato un Macbook Air, che è durato ben 5 anni (!). All'epoca lo presi perchè, da neolaureato, non volevo chiudermi l'opzione di realizzare app per iOS, cosa che poi non è mai avvenuta. Quindi per il lavoro di tutti i giorni ho deciso di uscire dalla comfort zone e prendere un nuovo pc: un **[Dell XPS 9560](http://www.dell.com/it/p/xps-15-9560-laptop/pd?oc=cnx95604&model_id=xps-15-9560-laptop), con schermo da 15"**.

## I mac non sono meglio?

Per una grande parte degli utenti, probabilmente si. Un mac ha:

- un ottimo sistema operativo
- un ottimo hardware
- un'eccellente simbiosi hardware/software, che fa davvero la differenza
- è facile da usare, se appartenete alla fascia di utenti normali (io no)
- non viene colpito da virus (_chiarimento per i secur-nazi: i mac hanno lo 0,1% dei virus di Windows e a meno che tu non sia proprio un imbecille, è difficile che un virus possa fare troppi danni_)
- ha tanti software e applicativi multimediali, alcuni eccellenti e addirittura gratuiti!
- Hanno un terminale unix-like quindi non bisogna imparare nuovvi comandi.

### Mac anche no!

I Mac tuttavia hanno una serie di problemi:

- Costano. Almeno 1000€ in più di un equivalente Windows, o Linux.
- Ti fanno credere di vivere in un mondo fantastico dove tutto è bello e perfetto, in cui c'è sempre una _i_ davanti a tutto (\_i_Tutto) e non esiste nient'altro.
- E' compatibile solo con roba certificata per Apple, generalmente venduta da Apple, al doppio-triplo del prezzo equivalente. (Adattatori hdmi, sto parlando di voi!)

Se avete i soldi, e siete consapevoli che potreste entrare in una bolla da cui sarà problematico uscire, prendete un mac e non pensateci due volte.

## Cosa ho scelto: Dell XPS

Alla fine ho preso un Dell XPS con un monitor da 15".

![Dell XPS 15"]({{site.baseurl}}/images/dell-xps-15-2017-nw-g01.jpg)

L'ho pagato **2190€**.

> Alla faccia Miche', e hai detto che il Mac costa!

L'equivalnte Mac dello stesso computer costa _3.399€_.

Torniamo al Dell. La versione che ho deciso di prendere ha queste caratteristiche:

- Ha un processore **Intel i7 di settima generazione**, l'ultima al momento dell'acquisto.
- **16 GB di RAM**, espandibili
- **hard disk da 512 GB**, espandibili
- **monitor da 15,6"**, che per un web developer fa la differenza
- schermo **touch** in **4k**: mi sono lasciato convincere da una cosa che non mi serviva; senza questo spendereste addirittura meno.

Non entro in altri dettagli perché sarebbe per gamers, e io non sono un gamer, sono un programmatore.

## La caratteristica che non ti aspetti: Bash su Windows

Io faccio un **abuso della shell** e dei suoi script, e questa storia di Bash su Windows è stato uno dei motivi per cui ho deciso di passare a Win: Non è una macchina virtuale, non è un'emulazione, ma è un vero e proprio sottosistema Ubuntu che gira sul computer windows. Le chiamate unix vengono "intercettate" da Windows che le traduce in chiamate native. Questo significa che all'interno del sottosistema linux si pul accedere a tutti i file del mondo windows (è sconsigliato fare il contrario!), oltre che lanciare comandi, eseguire script, `sudo apt-get install git` e via di seguito.

Una delle prime cose che ho fatto infatti è stato di scaricare [Hyper.js](https://hyper.is/) (un terminale moderno scritto in NodeJS) e [oh-my-zsh](https://michelenasti.com/2017/05/30/cinque-tool-per-migliorare-la-vostra-developer-experience.html), un'estensione di zsh che permette di lavorare con più facilità.

Su internet ci sono [guide ovunque](https://msdn.microsoft.com/it-it/commandline/wsl/install_guide) per settare la shell di bash anche in [Visual Studio Code](https://code.visualstudio.com/docs/editor/integrated-terminal), Intellij, etc.

Microsoft, stavolta hai fatto una cosa davvero decente: **esperimento riuscito** 👍

## Il monitor touch, 4k e 15"

Il monitor ha un bordo sottilissimo per cui il computer è uno dei più piccoli per la sua fascia. Il fatto che sia lucido non mi fa impazzire, un po' li odio i monitor così. Sono felice di averlo preso 15", con più pixel posso mettere più cose sullo schermo (non sono mai stato il tipo da usare più desktop).

I video in 4k si fanno apprezzare, anche se per ora solo su youtube si trova roba decente.

Toccare lo schermo cambia proprio il modo di interagire col pc. Il touch è molto comodo in aereo, o in treno, o comunque nei posti dove non puoi usare nè mouse nè tastiera agilmente. Tuttavia non sono un grande utente di questa feature, almeno non quanto mia figlia che si diverte a toccarmi lo schermo mentre lavoro (chiude programmi, manda mail, tutto senza saper neanche camminare!).

## La batteria

La batteria non mi ha sorpreso: dura 6 ore. Aumentando la luminosità del monitor anche meno.

## Connettività

In un mondo dominato da porte USB tradizionali, abbandonare tutto per le sole USB-C mi sembrava un passo troppo estremo. Un mouse da 9,90€ non lo avrei più potuto collegare! Invece il Dell è dotato di due porte USB tradizionali, una USB-C, una porta HDMI, alimentatore e slot per SD. Niente più adattatori...

(In realtà uno l'ho dovuto comprare, quello per i monitor VGA. Ogni tanto vado a fare delle presentazioni e voglio assicurarmi di essere compatibile con qualsiasi proiettore incontri).

## Prestazioni

E' una bomba, non c'è niente da dire. Forse potevo spendere per avere più RAM, ma come ho scritto sopra è estendibile quindi non appena saranno pochi ne acquisterò un altro po'. Forse potevo prendere più hard disk, ma da quando esistono Google Photos, Dropbox e ho il NAS a casa non conservo più nulla sul disco del pc, a parte i programmi e i workspace di lavoro.

Nonostante sia così potente, **c'è una cosa che va lenta ed è proprio la feature che amo di più: il terminale bash**. Purtroppo, essendo emulato, noto che alcuni comandi richiedono più del consentito - un semplice `ls` o un `git pull` possono durare dei secondi, e lo si accetta come un compromesso che comunque non impatta troppo.

## il sistema operativo: Windows

Windows 10 è migliorato tantissimo. Non uso tutte le sciccherie che sicuramente ha, ad esempio Cortana la uso solo quando voglio divertirmi, però mi piace molto com'è strutturato ora il menu (in verità preferivo quello di Windows 8) e la barra delle applicazioni.

Ci sono tante cose su cui bisogna ancora lavorare:

- coesistono applicazioni dalla grafica moderna con altre che risalgono a Win98
- ci vogliono ancora 715 click per conoscere il proprio indirizzo IP
- serve sempre un antivirus in funzione, e Dell mi ha regalato un anno di McAfee.
- Trovo preinstallato OneDrive che non uso, perchè ho già Google Drive e Dropbox. Non è possibile disinstallare e neanche disabilitare completamente.
- Inserire i caratteri `` ` `` e `~` su questa tastiera è stato un dramma. Ho risolto con AutoHotkey.

## Conclusioni

Potrei parlare e scrivere ancora per un paio d'ore, ma mi fermo qui perchè spero siano trasparite alcune cose: **non sono un fanboy di nessuna azienda** e questa la considero una virtù, infatti valuto in maniera analitica, senza sentimenti. Inoltre **valuto uno strumento in relazione all'uso che ne faccio**, e infatti io sono un programmatore, scrivo di programmazione e i problemi che ho io con i computer sono profondamente diversi da quelli di ogni altra categoria lavorativa; dove possibile (come in questo caso) cerco di comprare la miglior macchina che costa meno e che mi permetterà di lavorare al 100%, senza sconti.
