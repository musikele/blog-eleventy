---
paginate: true
comments: true
author: musikele
title: 'Agile? No grazie, noi siamo Lean'
category: Italiano
layout: post
tags:
  - post
- agile
- Lean
- scrum
- metodologie
---

Agile, agile, agile... ormai tutti fanno Agile, implementando un framework tipo Scrum (che è uno dei possibili modi di essere Agile). 

Per dare una definizione: siete _Agile_® se la vostra metodologia di sviluppo segue il [_Manifesto Agile_](http://agilemanifesto.org/iso/it/manifesto.html).

Tuttavia, è facile prendere un framework (ripeto: Scrum) e sputtanarlo per tirare fuori qualcosa che non va. Spesso ciò accade quando il management continua a ragionare a delivery fisse, chi-fa-cosa, butta-a-mare-la-qualità-dobbiamo-consegnà, etc. 

![Quest'immagine prova a spiegare com'è fatto il mondo](/images/geografia_metodologie.png)

## Ma in questo post dovevi parlare di LEAN 

Avete ragione. 

Ritorniamo sulle definizioni. *Lean* (in italiano: magro, scarno) è un termine preso in prestito dal settore manifatturiero, e consiste in una serie di principi da seguire per ottenere _qualità, velocità & soddisfazione del cliente_. (Stesse finalità di Agile!)

Il punto è che i principi base del *Lean thinking* non sono filosofici, ma pratici. Vediamoli: 

- **Eliminate Waste**: fate riunioni che non servono? Non fatele. Scrivete documenti che nessuno leggerà? Non scriveteli. Più chiaro di così!
- **Build Quality In**: Mettere in pratica tutte quelle pratiche che portano a evitare i bug, o a correggerli subito. Correggerli dopo è sempre peggio. 
- **Create Knowledge**: All'inizio di un progetto difficilmente avrete idea di cosa vuole il cliente. Inoltre, ciò che sapete voi è molto diverso da ciò che conosce il vostro collega. Creare conoscenza significa soprattutto _condividerla_.  
- **Defer Commitment**: Prendere le decisioni all'ultmo momento utile (ossia quando non sono più rinviabili) permette di avere la maggior conoscenza possibile, e quindi di prendere decisioni migliori. 
- **Deliver Fast**: Prima fate vedere il prodotto al cliente, prima saprete se è quello che vuole. 
- **Respect People**: non significa solo evitare di mandare a cagare il tuo collega; significa anche rispettare le scelte del gruppo, riconoscerne gli sforzi e aiutarli quando gli sforzi non producono frutti. 
- **Optimize the Whole**. Ottimizzare il processo, nella sua interezza, significa applicare i punti precedenti. Si deve ottimizzare continuamente, a ogni livello.

Fin qui era filosofia. Ma praticamente che dobbiamo fare? 

## Lean in pratica: gli step zero

Per essere Lean nel mondo del software ci sono due **step zero**: 
- **Source code management** - perchè il codice non si condivide più via email o via floppy da un bel pò. Tools come SVN (antichi!) o GIT dovreste conoscerli tutti ormai. 
- **Scripted builds** - il vostro prodotto deve essere generabile a partire da **un solo comando**. Ancora meglio: ogni volta che committate, un ambiente di _continuous integration_ dovrebbe far partire una build automatica e verificare che sia tutto ok. Non dimenticate di mandare una mail a chi ha rotto la build ;) 

**Principi Lean rispettati**:
- **create knowledge** - il codice è in un solo posto
- **eliminate waste** - nessun lavoro manuale per compilare e deployare il progetto!
- **build quality in** - l'automazione elimina possibili cause d'errore. 

Vediamo ora altre pratiche che possono aiutarvi a diventare _Lean_. 

### Il meeting giornaliero 

Se dovessi scegliere un unico punto da implementare, tra tutti i punti di questo articolo, il meeting giornaliero è sicuramente quello che sceglierei io. *La comunicazione tra membri del team è dannatamente importante.* 

Per fare un daily meeting perfetto bisogna: 
- farlo tutti i giorni, alla stessa ora
- non deve superare 15 minuti
- partecipano e parlano tutti
- quando parla qualcuno non si fanno domande e non si interrompe 
- si risponde a tre domande: _cosa ho fatto ieri?_, _cosa farò oggi?_, _che problemi ho avuto?_
- _facoltativo_: fare il meeting in piedi (così durerà anche meno di 15 minuti)

**Principi Lean rispettati**: 
- _respect people_ - stiamo mettendo il team al centro dello sviluppo. Tutti si sentiranno di far parte di una squadra.  
- _create knowledge_ - Parlare di ciò che si sta facendo è il modo migliore di creare una conoscenza condivisa. 

### Testing automatico 
Qui parliamo dell'**esecuzione automatica dei test a partire da un singolo comando**, con tanto di report a fine esecuzione. In questo modo avremo test che sono sempre eseguiti nello stesso modo e che non sono soggetti a errori umani. 

I test dovrebbero essere lanciati sia dai singoli sviluppatori mentre realizzano le feature, che dall'ambiene di continuous integration quando committiamo. 

**Principi Lean rispettati**: 
- _Build Quality In_ - test automatici eseguiti regolarmente aiutano a prevenire i difetti.  
- _Eliminate Waste_ - i bug vengono trovati prima, e quindi corretti prima. 
- _Create Knowledge_ - i test sono un modo per documentare come funziona il codice. 

### Continuous Integration 
La **continuous integration** è una pratica che consiste nell'integrare i piccoli cambiamenti al codice in maniera frequente. Ciò cerca di ridurre, o addirittura eliminare, la fase di integrazione post-sviluppo. 

Per farlo: 
- Usate una macchina (vera o virtuale) per il sistema di CI. 
- a ogni commit, la CI deve far partire una build e i test. 
- I developer devono aggiornare il codice una volta al giorno; una volta all'ora è meglio. 
- Le build fallite devono essere subito sistemate. 

**Principi Lean rispettati**: 
- _Build Quality In_ - in Continuous Integration, siamo sicuri che il codice sia sempre funzionante. 
- _Eliminate Waste_ - E' più efficiente integrare continuamente piccole modifiche che una singola grande fase di integrazione finale. 

### Less Code 
"Less Code" significa **scrivere solo il codice necessario per implementare la funzionalità richiesta**. Qui stiamo ribadendo il principio della semplicità: se una cosa è piccola è anche facile capirla; un codice sorgente vasto diventa difficile non solo da capire, ma anche testare e debuggare. Scrivere (_poco_) codice in modo semplice è un'arte. Per poter scrivere meno codice bisogna: 

- **eliminare codice inutile**. Facile a dirsi 😊 In pratica bisogna trovare il codice, o le _forze_ che creano il codice non necessario, ed eliminarlo. Ogni codice aggiunto al repository deve essere _giustificabile_. Sviluppa solo per l'iterazione o il task corrente, non per quelle del futuro che verrà. (Verrà?)
- **Migliorare l'efficienza del codice**. Ciò si fa applicando degli standard o comunque le best practices. 

**Principi Lean rispettati**: 
- _Build Quality In_ - Codice che fa quello che deve fare. Cosa vuoi di più? 
- _Eliminate Waste_ - Codice che non serve, o mega-design-patterns che non si capiscono (o che si capiscono solo nella mente dell'autore), sono scoraggiati. 

### Short Iterations 

Prima si sviluppavano applicazioni con un ciclo di rilascio da 6 mesi a 1 anno; adesso la moda è 15/30 giorni. Questo tipo di rilasci permette ai clienti di capire se stiamo realizzando davvero il software di cui hanno bisogno, e permette di capirlo _prima che sia troppo tardi_. 

**Principi Lean rispettati**: 
- _Eliminate Waste_ - rilasci frequenti permettono di concentrarsi solo su ciò che serve davvero. 
- _Deliver Fast_ - Il nuovo codice viene rilasciato al cliente ad intervalli regolari.

### Customer Partecipation

In passato il cliente veniva coinvolto solo per le specifiche, a inizio progetto, e poi ci si vedeva alla fine per mostrare il risultato. E lì sentivi frasi "ma non era quello che volevo" 😫

Usando un approccio _Lean_ invece il cliente fa parte del team. E' il cliente a fornire i requisiti, a prioritizzarli, e ad accettarli a fine iterazione. 

**Principi Lean rispettati**: 
- _Create Knowledge_ - Attraverso la collaborazione col cliente, i requisiti vengono determinati prima e meglio. 
- _Defer Commitment_ - Siccome il cliente è coinvolto nel processo, è possibile prendere le decisioni architetturali solo quando servono.

## Lean è uguale o diverso da Agile?

Chi ha fatto un po' di Agile starà ora dicendo: "Ma tutte queste cose le facciamo anche noi!". Già! Dov'è la differenza? 

Le differenze sono sostanzialmente due: _scope_ e _focus_. 

In **Agile** lo scopo è di migliorare lo sviluppo del software e si focalizza sull'adattabilità e sul rilascio veloce. Oppure, come piace dire a me, si parte dalla filosofia e si trovano i mezzi per metterla in pratica. 

Nell'approccio **Lean** invece si guarda al quadro generale, e ci si focalizza più sulle pratiche (che sono il punto di partenza!) che sulla filosofia. Infatti **non è obbligatorio mettere in pratica contemporaneamente tutte le pratiche**, si può tranquillamente iniziare a integrarle una alla volta; e soprattutto, si può seguire qualsiasi tipo di metodologia ma usare le pratiche _Lean_.

Per questo, **negli ultimi team con cui ho collaborato**, piuttosto che mettere insieme tutte le cerimonie di Scrum **ho preferito privilegiare quelle pratiche che sicuramente avrebbero portato un valore effettivo**. 

Non avrei conosciuto le pratiche Lean senza Agile. **Non potrei fare Agile senza mettere in pratica i principi Lean. Al contrario, si può essere Lean senza essere Agile**. Questi due mondi si sovrappongono per molte cose e sono, alla fine della fiera, **complementari tra loro**. 