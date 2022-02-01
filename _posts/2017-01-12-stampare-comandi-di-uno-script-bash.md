---
title: 'Tip del giorno: stampare comandi di uno script Bash'
date: 2017-01-12 15:37:51
paginate: true
comments: true
author: musikele
layout: post
tags:
  - post
---
Se avete scritto uno script bash *complesso* e volete cosa accade step by step, una soluzione semplice è usare lanciare il comando così: 

```console
$ bash -x script.sh 
```

In questo modo vedrete tutti i comandi che vengono lanciati, e le variabili che vengono settate, etc etc. 

Voci mi dicono che si può addirittura debuggare Bash come se fosse un linguaggio di programmazione normale, ma non ho ancora avuto modo di provarlo.

Fonte: [StackOverflow](https://stackoverflow.com/questions/5750450/bash-print-each-command-before-executing) (dove se no?)