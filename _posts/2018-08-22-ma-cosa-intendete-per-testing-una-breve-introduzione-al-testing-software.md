---
paginate: true
comments: true
author: musikele
title: '"ma... cosa intendete per testing?" - una breve introduzione al testing software '
category: Italiano
layout: post
date: 2018-08-22 00:00:00 +0200
tags:
- testing
header-img: "/images/Testing_in_Progress.gif"
description: 'Una brevissima descrizione del testing manuale vs testing automatico. '

---
Mi chiedeva Emanuele su Quora:

> ...posso sapere con una certa  precisione cosa intendete con testing? Questa cosa mi ha incuriosito e  mi piacerebbe conoscerne di più.

![]({{ site.baseurl }}/images/Testing_in_Progress.gif)

Per testing si intende **un’esecuzione del codice per assicurarsi che faccia  esattamente ciò che viene richiesto**.

Esistono sostanzialmente due tipi di testing, _manuale_ e _automatico_. Il **testing manuale** è quello che fa un programmatore dopo che ha sviluppato il codice: lancia l’applicazione e verifica che faccia ciò che dovrebbe. A volte sono altri utenti in carne ed ossa a fare il test dell’applicazione.

Il testing manuale è efficace e immediato se l’app è semplice o di piccole dimensioni: al crescere della complessità potrebbe essere lungo in termini di tempo, e impreciso nei risultati.

Esempio: _un’app per prenotare visite mediche_. Immaginiamo di aver realizzato la funzionalità di modifica della data di una visita. Se faccio l’edit di una visita e seleziono una data e un orario che già sono state prenotate da qualcun altro, il sistema deve rispondere che l’orario richiesto non è disponibile. Riesci a immaginare quanto tempo serva per poter rieseguire questo caso di test, ogni volta? _(Ti aiuto: bisogna prima creare una visita... poi crearne una seconda... poi prendere la prima e impostare la data e l'orario della seconda... e verificare il messaggio di errore)_

Passiamo al **test di  tipo automatico**. Innanzitutto viene scritto in un linguaggio di  programmazione vero e proprio. Nel test viene definito il setup iniziale (es. crea DUE visite nel sistema) e poi viene eseguito il test vero e proprio, ossia cerca la prima visita, e cambia la data e l’orario a quello della seconda.

Infine, controlliamo che il sistema abbia restituito l’errore. Se è accaduto, il test ha avuto successo (si, se il  sistema risponde correttamente che un’operazione non si può fare, è un  caso di successo!). Se così non fosse, il test dovrebbe fallire.

**Quali sono gli svantaggi di questo approccio?**

* che il test lo può scrivere solo un programmatore,
* per scrivere il test ci vuole del tempo un  po’ più lungo della mera esecuzione;
* inoltre, se cambia l’applicazione, bisogna cambiare anche i test relativi.

**I vantaggi, invece, sono un  aumento della qualità generale e un’efficienza nell’esecuzione**, anche in termini di tempo. Ad esempio, è prassi eseguire tutti i test ad ogni modifica del sistema, per assicurarsi di non aver rotto aree  dell’applicazione collegate con quella che stiamo modificando e che  difficilmente andremmo a testare “manualmente”.

In questa risposta ho dato una visione molto generica del software testing; esistono tante altre sotto-aree (integration, unit, e2e…) e tecniche da conoscere, ma il senso generale è che si, **un computer può  fare dei test al posto tuo, è molto più veloce di te, e ne guadagni in qualità.**

[Link alla domanda originale]()