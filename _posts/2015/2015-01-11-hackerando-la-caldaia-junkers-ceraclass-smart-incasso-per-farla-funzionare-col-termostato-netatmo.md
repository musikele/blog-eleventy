---
id: 53
title: Hackerando la caldaia Junkers CERACLASS SMART INCASSO per farla funzionare col termostato NetAtmo
date: 2015-01-11T16:20:32+00:00
author: musikele
layout: post
guid: http://michelenasti.com/?p=53
permalink: /2015/01/hackerando-la-caldaia-junkers-ceraclass-smart-incasso-per-farla-funzionare-col-termostato-netatmo/
dsq_thread_id:
  - "3958634016"
image: /wp-content/uploads/2015/01/netatmo-640x0.jpg
categories:
  - Italiano
tags:
  - caldaia
  - ceraclass
  - domotica
  - hacking
  - incasso
  - junkers
  - netatmo
  - smart
---
[<img class=" full-width alignnone wp-image-54 size-full" src="https://i0.wp.com/michelenasti.com/wp-content/uploads/2015/01/netatmo-640x0.jpg?fit=640%2C437" alt="netatmo-640x0" srcset="https://i0.wp.com/michelenasti.com/wp-content/uploads/2015/01/netatmo-640x0.jpg?w=640 640w, https://i0.wp.com/michelenasti.com/wp-content/uploads/2015/01/netatmo-640x0.jpg?resize=300%2C205 300w" sizes="(max-width: 640px) 100vw, 640px" data-recalc-dims="1" />](https://i0.wp.com/michelenasti.com/wp-content/uploads/2015/01/netatmo-640x0.jpg)

titolo lungo, figuratevi il post 🙂

Tempo fa ho ristrutturato casa e ho installato una caldaia nuova: questa J[unkers Ceraclass Smart Incasso](http://www.junkers.it/privati/prodotti/dettaglio_prodotto/scheda_prodotto_4425). Inutile dire che me l'hanno venduta come la miglior caldaia possibile, considerando che doveva essere incassata nel muro.

Dopodichè, memore del periodo precedente in cui vivevo solo, ho deciso di comprare il [termostato NetAtmo](https://www.netatmo.com/it-IT/prodotto/thermostat), per programmare in modo intelligente la temperatura (e i risparmi) di casa. Il NetAtmo si inserisce nel filone della domotica per tutti, e **permette di controllare la temperatura di casa tramite smarphone**.

Ora, non appena arriva il termostato (e la caldaia) inizia la fila di tecnici e installatori che mi ripetono la stessa cosa: _non si può fare... non credo si possano collegare... questa caldaia non è come tutte le altre... etc._

La caldaia in questione, in effetti, non è una caldaia come tutte le altre, visto che tutta la configurazione interna la si fà tramite un termostato esterno che è uscito incluso con la caldaia, il TF-25 .

<div id="attachment_55" style="width: 290px" class="wp-caption aligncenter">
  <a href="https://i1.wp.com/michelenasti.com/wp-content/uploads/2015/01/junkers-bosch-ceraclass-smart-incasso-2.jpg"><img class="wp-image-55 size-full" src="https://i1.wp.com/michelenasti.com/wp-content/uploads/2015/01/junkers-bosch-ceraclass-smart-incasso-2.jpg?fit=280%2C210" alt="junkers-bosch-ceraclass-smart-incasso-2" data-recalc-dims="1" /></a>
  
  <p class="wp-caption-text">
    la caldaia Junkers Ceraclass Smart Incasso, con il suo termostato TF25 .
  </p>
</div>

Il TF-25 è un vero e proprio minicomputer per questa caldaia, infatti permette di impostare la temperatura di mandata, la temperatura dell'acqua sanitaria, la pressione, e molto altro: praticamente tutta la gestione si fa da qui. Si può anche accendere, spegnere o programmare la caldaia in maniera temporizzata, ma non ha la comodità dello smartphone (quindi il netAtmo aveva ancora un senso).

Già l'installatore (colui che installa centinaia di caldaie di questo tipo ogni anno) mi aveva detto che "_questa caldaia è molto avanzata, dubito che uno possa usare un termostato diverso da quello che esce con la caldaia"._ Dubito? Lo sai o non lo sai?

A questo punto ho scritto a NetAtmo, chiedendo lumi sulla mia caldaia e su come collegare il termostato. Loro mi hanno risposto che si, si poteva collegare, ma la spiegazione che mi hanno dato non riesco ad applicarla (che manuale avranno visto?).

### Come funziona il TF25 (e perchè non va bene per il NetAtmo)

La prima cosa che abbiamo provato a fare è stata scollegare il TF25 e collegare il NetAtmo, come se fosse un normale termostato da muro. Il TF25 è connesso tramite due fili al muro, e noi pensavamo fossero i fili che chiudevano il circuito. Invece no: i due fili sono un bus su cui il TF25 invia i segnali di controllo alla caldaia (temperatura alla quale operare, programmi impostati, etc)

### Come funziona invece il NetAtmo

il netatmo funziona come tutti i termostati normali: quando la temperatura di casa è minore della temperatura impostata, il circuito si chiude. Per verificarlo abbiamo usato un tester.

Se il netAtmo funziona come tutti i termostati del mondo, mentre il TF25 no, dove lo collego? Stavo per rivenderlo, quando un amico su Facebook (che io definisco "hacker delle caldaie") mi spiega passo passo cosa dovrei fare, manuale alla mano. E quindi ...

# Dove collegare i termostati classici?

Il relay del netAtmo è composto da quattro fili, due per chiudere il circuito della caldaia (e attivarla) e due per alimentare il relay. I primi due fili bisogna inserirli negli inserti superiori, come mostrato nell'immagine in basso, mentre quelli dell'alimentazione devono essere messi insieme a quelli che alimentano la caldaia. **Spegnete l'alimentazione alla caldaia altrimenti facciamo una bella frittura.**[<img class=" full-width aligncenter wp-image-59 size-large" src="https://i1.wp.com/michelenasti.com/wp-content/uploads/2015/01/fili-ceraclass-1024x768.jpg?fit=920%2C690" alt="fili-ceraclass" srcset="https://i2.wp.com/michelenasti.com/wp-content/uploads/2015/01/fili-ceraclass.jpg?resize=1024%2C768 1024w, https://i2.wp.com/michelenasti.com/wp-content/uploads/2015/01/fili-ceraclass.jpg?resize=300%2C225 300w, https://i2.wp.com/michelenasti.com/wp-content/uploads/2015/01/fili-ceraclass.jpg?w=1840 1840w" sizes="(max-width: 920px) 100vw, 920px" data-recalc-dims="1" />](https://i2.wp.com/michelenasti.com/wp-content/uploads/2015/01/fili-ceraclass.jpg)Nella seconda immagine invece vedete che bisogna alzare il ponticello n.8 per attivare il circuito che abbiamo appena creato. [<img class=" full-width aligncenter wp-image-60 size-large" src="https://i0.wp.com/michelenasti.com/wp-content/uploads/2015/01/ceraclass-controlli-1024x768.jpg?fit=920%2C690" alt="ceraclass-controlli" srcset="https://i0.wp.com/michelenasti.com/wp-content/uploads/2015/01/ceraclass-controlli.jpg?resize=1024%2C768 1024w, https://i0.wp.com/michelenasti.com/wp-content/uploads/2015/01/ceraclass-controlli.jpg?resize=300%2C225 300w, https://i0.wp.com/michelenasti.com/wp-content/uploads/2015/01/ceraclass-controlli.jpg?w=1840 1840w" sizes="(max-width: 920px) 100vw, 920px" data-recalc-dims="1" />](https://i0.wp.com/michelenasti.com/wp-content/uploads/2015/01/ceraclass-controlli.jpg)Facile no?

.... no! Non per me che non avevo mai messo mano a queste cose.

Tutte queste informazioni sono scritte sul manuale della caldaia, ma sfortunatamente non tutti gli elettricisti hanno voglia di leggerselo. Figuratevi io che manco ci capisco niente.Tutti pigri tranne il mio "hacker" della caldaia, uno che la domotica è il suo pane quotidiano, quindi se avete bisogno di assistenza, vi metto in contatto con lui 😉