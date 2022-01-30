---
id: 20
title: Il Document Object Model (DOM)
date: 2015-01-08T08:53:26+00:00
author: musikele
layout: post
guid: http://michelenasti.com/?p=20
permalink: /2015/01/il-document-object-model-dom/
dsq_thread_id:
  - "3979259896"
image: /wp-content/uploads/2015/01/Dom_tree.png
categories:
  - Italiano
tags:
  - browser
  - document object model
  - dom
  - internet explorer
  - javascript
  - netscape
---
Come abbiamo detto (nell'articolo "[un breve riassunto della storia di Javascript](http://michelenasti.com/2015/01/un-breve-riassunto-sulla-storia-di-javascript/)"), Javascript è composto da tre parti:

- EcmaScript, che definisce la sintassi del linguaggio;
- il Document Object Model, oggetto di questo articolo,
- e il Browser Object Model, che sviscereremo nella prossima puntata.

Il **Document Object Model (DOM)** è una API per l’XML che è stata estesa per l’HTML. il DOM mappa l’intera pagina come una gerarchia di nodi. Considerando un semplice file html, come

```html
<html>
	<head>
		<title>This is a title!</title>
	</head>
	<body>
		Hello World!
	</body>
</html>
```

Questo documento viene rappresentato come un albero la cui radice è il nodo `<html>`, i figli di `<html>` sono `<head>` e `<body>`, e così via.

## il DOM è necessario?
 
A partire da Internet Explorer 4 e Netscape Navigator 4 (ragazzi, stiamo parlando del giurassico) questi browser iniziarono a supportare delle forme di Dynamic Html (DHTML), grazie al quale potevano modificare il contenuto di una pagina senza ricaricarla. Fu un enorme passo avanti per il web, ma anche un grande problema per gli sviluppatori: i due browser implementavano specifiche diverse, e a farne le spese spesso erano gli utenti. (I problemi non si risolvevano dicendo "vabbè, ora scarico l’altro browser e vedo come si vede la pagina"... Internet era leeeeentiiiiisssiiiiiimooooooo). Siccome non si poteva attendere che uno dei due browser vincesse sull’altro, e per preservare la natura "aperta" del web, il W3C (ente che sovrintende le regole del web) decise di standardizzare il DOM.

## DOM levels

Il **DOM di livello 1** divenne uno standard nel 1998. Era composto da due parti: il _Core_, che forniva gli strumenti per mappare un documento XML, e per fare ricerche e manipolazione al suo interno; e il _DOM HTML_, un’estensione del Core, che aggiungeva metodi specifici per l’HTML. Da notare che i DOM non è specifico a Javascript ma anzi è stato implementato in altri linguaggi.

Con il **DOM di livello 2** si puntava ad aggiungere funzionalità al DOM di primo livello. Fu aggiunto il supporto per il Mouse, per gli eventi della UI, iteratori per poter attraversare il documento, e il supporto per i CSS.

Il **DOM di livello 3** continua ad estendere le funzionalità dei DOM precedenti e introduce anche metodi per il caricamento e il salvataggio dei documenti, e metodi per la validazione. Nel DOM Level 3, il Core è esteso per essere compatibile con tutto lo standard XML 1.0.

> Alcuni parlano anche di **DOM livello 0**, che non è mai stato uno standard, ma anzi rappresenta solo ciò che era il DOM all’epoca di IE4 e NN4.

Esistono anche altri DOM tarati per altri linguaggi, come SVG, MathML, SMIL, e anche Mozilla ha un suo DOM per la sua interfaccia grafica (XUL). Se volete approfondire Google è vostro amico.

## E i Browser?

Internet Explorer ha iniziato ad avere un supporto del DOM level 1 a partire dalla versione 5.5 . Fino alla versione 8 non è cambiato granchè, per avere nuove funzionalità conviene partire da IE9. Netscape senza che ne parliamo visto che si è estinto, ma è bene sapere che Firefox dalla versione 3 in poi supporta il Level 1, una grande parte del Level 2, e alcune parti del level 3.

Ci vediamo alla prossima puntata per parlare dello sconosciutissimo BOM !