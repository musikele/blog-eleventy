---
id: 461
title: Ho provato la prossima versione di Eclipse (web-based) per voi
date: 2015-12-01T13:30:15+00:00
author: musikele
layout: post
guid: http://michelenasti.com/?p=461
permalink: /2015/12/ho-provato-la-prossima-versione-di-eclipse-che-web-based-per-voi/
dsq_thread_id:
  - "4365876472"
categories:
  - Italiano
tags:
  - docker
  - eclipse che
---
E' uscita una [nuova versione di Eclipse](https://eclipse.org/che/), denominata **Eclipse Che** (forse realizzata a Cuba?) che promette di essere un'autentica rivoluzione: non a caso, il titolo del sito è

<div class="carousel-inner">
  <div class="item active">
    <div class="carousel-caption">
      <h3>
        Next Generation Eclipse IDE
      </h3>
      
      <div id="attachment_462" style="width: 2512px" class="wp-caption aligncenter">
        <a href="https://i0.wp.com/michelenasti.com/uploads/2015/12/che-autocomplete.png"><img class="size-full wp-image-462" src="https://i0.wp.com/michelenasti.com/uploads/2015/12/che-autocomplete.png?fit=920%2C606" alt="Eclipse Che in esecuzione ... in un browser!" srcset="https://i0.wp.com/michelenasti.com/uploads/2015/12/che-autocomplete.png?w=2502 2502w, https://i0.wp.com/michelenasti.com/uploads/2015/12/che-autocomplete.png?resize=300%2C198 300w, https://i0.wp.com/michelenasti.com/uploads/2015/12/che-autocomplete.png?resize=1024%2C674 1024w, https://i0.wp.com/michelenasti.com/uploads/2015/12/che-autocomplete.png?resize=700%2C461 700w, https://i0.wp.com/michelenasti.com/uploads/2015/12/che-autocomplete.png?w=1840 1840w" sizes="(max-width: 920px) 100vw, 920px" data-recalc-dims="1" /></a>
        
        <p class="wp-caption-text">
          Dall'immagine non si vede che Eclipse Che  è in esecuzione ... in un browser!
        </p>
      </div>
    </div>
  </div>
</div>

Andiamo dritti al punto: **_Eclipse Che_ è un IDE che viene eseguito all'interno del browser**. Avete capito bene: tutta l'applicazione è una webapp che compila, assembla e genera applicazioni Docker per una portabilità massima.

**Installazione**: scaricate il pacchetto per la vostra piattaforma, avanti avanti avanti fine. NON provate a cambiare installation path che fate guai (e sono stato una buona mezz'oretta a chiedermi perchè non riuscissi a farlo partire).

**Primo avvio**: si fa partire un .bat (o .sh) che lancia un webserver su _localhost:8080_ ; una volta raggiunto l'indirizzo si entra nell'IDE vero e proprio. La prima cosa che farà sarà chiedervi di definire un workspace (proprio come il vecchio Eclipse...) e a quel punto potrete provare a buttare le mani.

Primo progetto di test: Ho provato a creare uno dei progetti di esempio, nella fattispecie quello con GWT. Dopo averlo selezionato e cliccato su Next, l'applicazione si è bloccata. _Mmm._ 

**Secondo progetto di test:** Visto che con la prima le cose non sono andate, ho provato a creare un progettino di test con maven. In questo caso il progetto è stato creato, ma non sono riuscito a farlo partire (si pianta quando provo a far partire l'app; credo che stesse provando a creare un Docker container e per qualche motivo pretendeva che ci fosse https in esecuzione).

### **Scusa ma... non funziona niente?**

Si, non funziona niente, ma ciò che conta (e che mi elettrizza) è ... il *_potenziale_*.

Siccome l'IDE non è più un programma standalone ma **una webapp che gira in un browser**, lo si potrà sia lanciare in locale sia **installarlo su un server condiviso da tutta l'azienda** e **lavorare a più mani sullo stesso progetto**, inventando nuovi paradigmi collaborativi (superando SVN e GIT).

Le **compilazioni e le esecuzioni onerose vengono eseguite in background sul server**, che potrebbe essere molto più potente della vostra macchina. Pacchettizzare tutti gli output, anche quelli di sviluppo, con **Docker significa astrarsi completamente dal sistema operativo dell'utente**.

C'è da dire che _Eclipse Che_ non è il primo esperimento in questo senso. Altri siti offrivano qualcosa di simile, come [Cloud9](https://c9.io/), o [Codenvy](https://codenvy.com/), ma erano sistemi &#8220;esterni&#8221; che gestivano tutto per voi, senza la possibilità di customizzare l'ambiente con plugins o supportare nuovi linguaggi.

Attualmente _Eclipse Che_ è un &#8220;proof-of-concept&#8221; o poco più, ma sono sicuro che nei prossimi mesi ne sentiremo delle belle. Forse tra qualche anno gli IDE (o meglio, tutti i programmi a cui siamo abituati) così come li intendiamo non esisteranno più.