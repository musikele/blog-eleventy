---
id: 297
title: Interpretare HTML in una stringa popolata da angular con ng-bind-html
date: 2015-05-17T00:19:27+00:00
author: musikele
layout: post
guid: http://michelenasti.com/?p=297
permalink: /2015/05/interpretare-html-una-stringa-popolata-da-angular-con-ng-bind-html/
dsq_thread_id:
  - "4064361793"
categories:
  - Italiano
tags:
  - angular
  - ng-bind
  - ng-bind-html
---
Lo sapevate che non potevate inserire del testo html all'interno di una variabile _bind_ata con angular? Eh? Eh? Lo sapevate?

Facciamo l'esempio: in un controller dichiariamo una variabile così:

```javascript
$scope.errorMessage = 'this is not good! <br>; it won\'t work!'
```

e nell'HTML, a un certo punto, vogliamo mostrare questo messaggio in un div:

```html
<div ng-controller="...">{{errorMessage}}</div></pre>
```

il `<br>` sarà interpretato come "a capo"? o vedremo scritto proprio `<br>`?

....Vedremo scritto proprio `<br>`. Motivo per cui ci sono io a spiegarvi perchè e come aggirare il problema 🙂

Pochi sanno che quando scriviamo `<p>{{variabile}}</p>` in realtà per Angular stiamo scrivendo `<p ng-bind="variabile"></p>`; insomma il famosissimo _two way binding_ di Angular è una direttiva bella e buona! I creatori di Angular hanno pensato che è decisamente più chiaro scrivere con le parentesi graffe, in modo che anche un non-programmatore possa capire il contenuto dell'html. Angular stesso poi tradurrà le `{% raw %} {{...}} {% endraw %}`  in `ng-bind="..."`, e infine la variabile in testo.

### Un buon motivo per usare ng-bind

Solitamente non dovreste rinunciare alla potenza espressiva delle `{% raw %}{{...}}{% endraw %}` , però c'è un caso speciale che magari `ng-bind` può essere d'aiuto: al caricamento della prima pagina della nostra webapp.

Quando apriamo la nostra bellissima webapp per la prima volta, il browser inizia a caricare subito il DOM, e poi inizia a scaricare e a eseguire i file javascript. Questo significa che, finchè non verrà scaricato il js di Angular, per pochi istanti vedremo le antipaticissime parentesi graffe.

La soluzione a questo problema è data proprio da [ng-bind](https://docs.angularjs.org/api/ng/directive/ngBind), ossia finchè Angular non viene caricato il browser non mostrerà alcuna parentesi graffa, e poi vedremo il testo. (Il browser, prima di scaricare Angular, non ha idea di come interpretare un attributo ng-bind e nel dubbio lo ignora).

### ng-bind-html, un nuovo amico

Ma torniamo alla domanda iniziale. Come facciamo a mostrare l'html all'interno di una variabile _angularizzata_? La direttiva da chiamare stavolta è [**ng-bind-html**](https://docs.angularjs.org/api/ng/directive/ngBindHtml), che sfortunatamente non ha corrispettivi con un'altra sintassi (niente doppie o triple parentesi qui). Il motivo per cui è meno nota (e dovrebbe essere usata con cura!) è che non bisognerebbe mai lasciare la responsabilità della formattazione del testo a un js, quindi non bisognerebbe inserire un `<br>`  o qualsiasi altro tag in un messaggio. Inoltre sorgono dei problemi di sicurezza: che succede se un utente malevolo carica un tag `<script>` ?

Almeno per questo Angular ci mette in guardia, e infatti specifica chiaramente nella guida che per usare ng-bind-html bisogna iniettare **$sanitize** di angular, così da eliminare eventuali tag scomodi. Senza l'import di $sanitize non dovrebbe proprio funzionare, questo per farvi capire quanto è importante ripulire codice che potrebbe essere compromesso.

Morale: usate `ng-bind-html`  con coscienza, ma utilizzatelo solo in pochi punti ben documentati dell'applicazione, altrimenti in futuro potreste essere anche vittima di attacchi. Nel mio caso, l'ho usato per una fix rapida su un messaggio di errore che arrivava dal server (ove risiedeva il famigerato `<br>` ). Quando ci sono rilasci non si può ragionare troppo 🙂
