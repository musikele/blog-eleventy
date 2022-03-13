---
id: 360
title: Css Position
date: 2015-07-27T19:00:55+00:00
author: musikele
layout: post
guid: http://michelenasti.com/?p=360
permalink: /2015/07/css-position/
dsq_thread_id:
  - "3976733018"
categories:
  - Italiano
tags:
  -  css
  - position
---
Facciamo una breve deviazione sul CSS.

l’attributo **position **viene utilizzato per specificare la posizione degli elementi all’interno della pagina html. Sono 4 i suoi possibili valori:

  * **static **– è il valore che viene assegnato dal browser quando non viene specificato nulla. L’elemento viene aggiunto e posizionato in base all regole standard dell’html.
  * **fixed** – l’elemento viene posizionato in base alla finestra del browser, quindi è anche insensibile allo scrolling. Utile per i menù che devono essere sempre visibili.
  * **relative** – posiziona l’elemento _relativamente _alla posizione che avrebbe avuto se fosse stato static. Per essere più chiari: posiziona l’elemento in base a dove sarebbe dovuto essere. Molto spesso viene associato a un elemento che poi dovrà contenere
  * **absolute** – posiziona l’elemento relativamente all’oggetto contenitore più prossimo che ha la position diversa da _static_. Se non viene trovato nulla, si risale fino a _html_.

Una volta impostate queste proprietà, se applicabili, si possono utilizzare i vari **top, left, bottom, right. **

Questa tabellina andrebbe imparata a memoria da chiunque debba mettere mano, almeno una volta, al codice html & css di una pagina web!