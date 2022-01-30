---
title: Le migliori piattaforme di blogging (per un developer) a confronto
date: 2016-12-15
author: musikele
layout: post
categories:
  - Italiano
tags:
  - blogging
  - development
  - wordpress
  - medium
  - linkedin pulse
  - tumblr
  - jekyll
---

Ho iniziato la mia avventura circa 10 anni fa usando **Wordpress**, un'eccellente piattaforma di blogging così versatile da poter diventare qualsiasi cosa: portale, sito vetrina, piattaforma di ecommerce... e anche blog, ovviamente! 

<img src="{{site.baseurl}}/images/blogging_platforms.png">

> Per avere una visione più chiara dell'argomento *blogging for developers*, leggete anche il mio articolo precedente: [Perché un programmatore dovrebbe avere un blog]({% post_url 2016-12-12-perche-un-programmatore-dovrebbe-avere-un-blog %})

Tuttavia Wordpress ha alcuni requisiti che durano da 10 anni, ossia PHP e MySql. Ciò significa che per avere un blog bisogna necessariamente comprare uno spazio di hosting da qualche parte (a dire la verità i prezzi sono anche molto bassi per piattaforme non proprio performanti). Il modello di richiesta/risposta utilizzato da worpdress (principalmente *Apache*) e il fatto che per ogni richiesta si vada sul db, l'hanno resa una delle piattaforme più lente in assoluto. 

> Nota bene: esistono hosting ultra-ottimizzati per wordpress che costano anche 100$/mese, e sono potentissimi. Ma voi non avete questi soldi. 

Esistono altre piattaforme di blogging, cercherò di spiegare velocemente perchè secondo me non sono buone per un informatico: 

- **Medium** è la piattaforma cool del momento, ed è perfetta per chi _non_ scrive codice. Il bello di Medium è che ti trova i lettori (consigliando il tuo articolo a chi legge cose simili) ed è perfettamente integrato con i social. A parte il titolo e il contenuto del testo, non si può personalizzare nulla. Only content. No ads. 
- **Linkedin Pulse** è la piattaforma di blogging di linkedin, e gli articoli condivisi su questa piattaforma vengono condivisi con gli utenti del social network. La cosa positiva è che non si parla a una platea generalista visto che gli utenti di linkedin sono quasi tutti "professionals" quindi si ricevono anche ottimi feedback. La cosa negativa è che non si può personalizzare alcunché.
- **Tumblr** è un'altro social che in Italia non è famosissimo. Ho (purtroppo) visto dei blog tecnici su Tumblr che si mischiano con i blog dei quattordicenni in cerca di ansie e con, beh, il porno che su tumblr la fa da padrona. 

Queste tre piattaforme non si pagano, e in generale non dovete fare nulla (hosting, installazione, etc) se non scrivere. Sarete però limitati a ciò che la piattaforma permette di fare: non potrete mettere ads, non potrete modificare il layout se non per alcune cose, etc. 

Quasi tutte le piattaforme di cui vi ho parlato permettono di integrare codice esternamente tramite [Gist di Github](https://gist.github.com/), uno strumento fantastico per condividere snippet di codice al volo. 

## E quindi?

La mia scelta è ricaduta su [**Jekyll**](http://jekyllrb.com), anzi per essere precisi sull'accoppiata **Jekyll + Github**. Queste tecnologie sono alla base del blog che vedete ora, e in un prossimo articolo vi spiegherò le infinite potenzialità di questa scelta. 

> Update: l'articolo su [Jekyll & Github]({% post_url 2016-12-22-jekyll-e-github-in-pratica %}) l'ho pubblicato. Check it out! 