---
id: 324
title: Impostare PHPUnit in IntelliJ
date: 2015-06-24T13:30:12+00:00
author: musikele
layout: post
guid: http://michelenasti.com/?p=324
permalink: /2015/06/impostare-phpunit-in-intellij/
dsq_thread_id:
  - "3965593322"
categories:
  - Italiano
tags:
  - post
  - composer
  - intellij
  - phpstorm
  - phpunit
  - symfony2
---
Se state lavorando a un progetto creato col framework **Symfony2,** in **PHP**, è molto probabile che state cercando un IDE che vi permette di utilizzare tutti gli strumenti necessari allo sviluppo.

**Symfony2** utilizza una serie di tecnologie consolidate in PHP tra cui **Composer**, che è un gestore delle dipendenze come Maven per Java; per i test unitari c'è **PHPUnit**, come ORM c'è **Doctrine** al posto  di Hibernate, e così via.

Non è un mistero che faccio uso di IntelliJ da qualche meso a questa parte. Vediamo come configurare PHPUnit !

Appena creato il progetto con Symfony, impostare Composer dalla relative impostazioni:

[<img class="aligncenter wp-image-326 size-medium" src="https://i2.wp.com/michelenasti.com/wp-content/uploads/2015/06/Schermata-2015-06-22-alle-23.09.201-300x197.png?fit=300%2C197" alt="Schermata 2015-06-22 alle 23.09.20" srcset="https://i2.wp.com/michelenasti.com/wp-content/uploads/2015/06/Schermata-2015-06-22-alle-23.09.201.png?resize=300%2C197 300w, https://i2.wp.com/michelenasti.com/wp-content/uploads/2015/06/Schermata-2015-06-22-alle-23.09.201.png?w=1022 1022w" sizes="(max-width: 300px) 100vw, 300px" data-recalc-dims="1" />](https://i2.wp.com/michelenasti.com/wp-content/uploads/2015/06/Schermata-2015-06-22-alle-23.09.201.png)

Troverete 2 file, uno .phar e uno .json, inseriteli nei relativi textbox.

Successivamente bisogna impostare PHPUnit, che [secondo questa guida](https://www.jetbrains.com/idea/help/enabling-phpunit-support.html#d683218e298) dobbiamo seguire quella al passo 2 (trovate il file autoload.php):  [<img class="aligncenter wp-image-327 size-medium" src="https://i0.wp.com/michelenasti.com/wp-content/uploads/2015/06/Schermata-2015-06-22-alle-23.23.02-300x196.png?fit=300%2C196" alt="Schermata 2015-06-22 alle 23.23.02" srcset="https://i1.wp.com/michelenasti.com/wp-content/uploads/2015/06/Schermata-2015-06-22-alle-23.23.02.png?resize=300%2C196 300w, https://i1.wp.com/michelenasti.com/wp-content/uploads/2015/06/Schermata-2015-06-22-alle-23.23.02.png?w=1017 1017w" sizes="(max-width: 300px) 100vw, 300px" data-recalc-dims="1" />](https://i1.wp.com/michelenasti.com/wp-content/uploads/2015/06/Schermata-2015-06-22-alle-23.23.02.png)Non ci resta che lanciare i test impostando il comando dal menù dei task:

[<img class=" wp-image-328 size-medium aligncenter" src="https://i1.wp.com/michelenasti.com/wp-content/uploads/2015/06/Schermata-2015-06-22-alle-23.29.02-300x191.png?fit=300%2C191" alt="Schermata 2015-06-22 alle 23.29.02" srcset="https://i1.wp.com/michelenasti.com/wp-content/uploads/2015/06/Schermata-2015-06-22-alle-23.29.02.png?resize=300%2C191 300w, https://i1.wp.com/michelenasti.com/wp-content/uploads/2015/06/Schermata-2015-06-22-alle-23.29.02.png?resize=1024%2C653 1024w, https://i1.wp.com/michelenasti.com/wp-content/uploads/2015/06/Schermata-2015-06-22-alle-23.29.02.png?w=1078 1078w" sizes="(max-width: 300px) 100vw, 300px" data-recalc-dims="1" />](https://i1.wp.com/michelenasti.com/wp-content/uploads/2015/06/Schermata-2015-06-22-alle-23.29.02.png)Se provate a lanciare questo task, vedrete i test eseguiti all'interno delll'IDE !

 