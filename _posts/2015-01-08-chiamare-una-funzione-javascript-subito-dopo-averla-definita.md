---
id: 28
title: chiamare una funzione Javascript subito dopo averla definita
date: 2015-01-08T09:14:21+00:00
author: musikele
layout: post
guid: http://michelenasti.com/?p=28
permalink: /2015/01/chiamare-una-funzione-javascript-subito-dopo-averla-definita/
dsq_thread_id:
  - "4034986557"
image: /wp-content/uploads/2015/01/logo_JavaScript-e1420667913457-825x510.png
categories:
  - Italiano
tags:
  - javascript
  - scope
---
Consideriamo il seguente esempio:

<pre class="">(function() {
  var clickCount = 0;
  $('button#mybutton').click(function() {
    clickCount ++;
    alert('Clicked ' + clickCount + ' times.');
  });
}());</pre>

Questa è la semplice definizione di una funzione (anonima) che, quando viene cliccato su un bottone, aumenta un contatore. Ma in grassetto ho evidenziato due parentesi tonde: questa è una sintassi comoda e rapida per indicare che la funzione, una volta definita, deve essere anche subito eseguita. Ricapitoliamo:

<pre>function() { 
  ... 
} () ;</pre>

Questo pattern viene utilizzato quando non vogliamo inquinare il _global scope_ con variabili che potenzialmente possono entrare in conflitto con altre, e quando vogliamo creare nuovi _scope_. Parleremo degli _scope_ In altri articoli.