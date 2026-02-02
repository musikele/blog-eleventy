---
title: 'Discesa in Inferno e risalita in Paradiso: le 24 ore da incubo di Gitlab'
date: 2017-02-07 11:33:49
layout: post
tags:
  
---
**Il 1 febbraio 2017** è accaduto ciò che nessun'azienda al mondo si augura: un database admin, durante un'operazione di manutenzione di una macchina, lancia il comando sbagliato sul cluster sbagliato e cancella tutto il database di produzione, circa 300 gb di dati andati in fumo.

![]({{ site.baseurl }}/images/gitlab_logo.svg)

[**Gitlab**](https://about.gitlab.com) è una startup americana di hosting di codice via git. In questo settore le più note sono **Github** e **Bitbucket**, giusto per darvi un'idea dei competitor.

Gitlab era principalmente nota perché ospitava un'intera piattaforma di continuous integration al suo interno integrata con docker, cosa che gli altri competitor più affermati invece delegano a servizi esterni (a pagamento).

### Poco male, abbiamo i Backup... Abbiamo i backup, vero?

**Gitlab va offline deliberatamente**, finché non riescono a ripristinare il database. Pensate un attimo alla vostra azienda che chiude per un giorno o due a causa di un incidente di questo tipo: clienti paganti furiosi, il web che legge e scrive di te, migliaia di post indignati e social arrabbiati.

Contemporaneamente, **una buona fetta di programmatori nel mondo inizia a provare compassione.** Io stesso, autore di questo articolo, ho per errore cancellato una volta tutto il database di test (di test, per fortuna!) della mia azienda. Ma almeno avevamo un backup.

Torniamo a Gitlab: scatta la ricerca dei backup. Secondo le loro procedure interne, **Gitlab ha almeno 5 backup differenti, ma uno dopo l'altro si scopre che non funzionano**.

* I backup regolari sembrano non essere più in funzione: fallivano silenziosamente da mesi, e nessuno se ne era mai accorto.

* Il dump del database non funziona a causa di un mismatch tra il tipo del db e l'eseguibile che lo leggeva/eseguiva.

* gli snapshot del disco sono abilitati per i file comuni, ma non per i dischi del db.

* Neanche il backup su S3 stava funzionando

* a causa di alcuni script automatici che rimuovono i vecchi backup, non c'era più nulla di utilizzabile da poter ripristinare

Fortunatamente, **lo stesso admin che ha lanciato il comando per errore aveva fatto uno snapshot a mano del db sulla sua macchina locale.**

L'ultimo backup corrispondeva a 6 ore fa, e su una macchina non direttamente connessa al cluster di server; **il ripristino del backup è avvenuto lentamente con una perdita di tutti i dati delle ultime sei ore.**

### Come trasformare un disastro in un'operazione mediatica

E' a questo punto che in Gitlab si rendono conto di avere un'occasione da sfruttare: stanno ricevendo un'incredibile esposizione mediatica.

**La prima cosa che fanno è mettere su un [google docs](https://docs.google.com/document/d/1GCK53YDcBWQveod9kfzW-VCxIABGiryG7_z_6jHdVik/pub)** condiviso in cui spiegano l'accaduto, i tentativi, le scoperte.

La seconda cosa che mi ha sorpreso è il **live streaming su youtube** (era [qui](https://www.youtube.com/watch?v=63wCG86ih94), ora non funziona più) dei dipendenti di gitlab che mostravano live tutte le operazioni messe in pratica per ripristinare il database. Tramite la chat i dipendenti di gitlab parlavano con gli spettatori, e rispondevano alle loro domande. A video c'erano le loro facce e il terminale che mostrava l'output di comandi impronunciabili.

La domanda più gettonata è stata questa:

> Q: Who did it, will they be fired?  
> **A: Someone made a mistake, they won't be fired.**

(Traduzione: _Verrà licenziato quello che ha cancellato il db?_ **No, non sarà licenziato**.)

### E ora?

**Gitlab è di nuovo in funzione**, il ripristino è stato lentamente completato e tutta questa vicenda ha generato un grande "_abbraccione_" da parte della community di sviluppatori di tutto il mondo.

Questo è quel genere di disastri che **non dovrebbero MAI accadere** e per cui **conviene sempre avere più di un backup e testarlo regolarmente**. E voi avete un piano di disaster recovery?
