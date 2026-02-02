---
id: 136
title: Quando assumere Generalisti vs Specialisti
date: 2015-02-19 13:00:32
author: musikele
layout: post
guid: http://michelenasti.com/?p=136
permalink: '/2015/02/quando-assumere-generalisti-vs-specialisti/'
dsq_thread_id:
  - '4108724544'
categories:
  - Italiano
tags:
  - assumere
  - generalisti
  - lavoro
  - specialisti
headerImg: '/images/vs.jpg'
description: 'Siete generalisti o specialisti? In questo articolo proviamo a scoprire
  cosa conviene fare alle aziende in base al loro ciclo di vita. '
---

Oggi voglio riproporre in Italiano un articolo di una persona molto skillata sulle tecnologie web, Nicolas Zakas. Zakas è autore di ESLint e ha scritto [questo libro su Javascript](http://amzn.to/2mKc6gl) che ho letto per metà e che mi ha dato le basi per capire Javascript dal di dentro, ossia tutte le sue parti più nascoste come scoping, prototyping, type system, object model, etc.

L'articolo che però vi propongo non è un articolo sul web e le sue tecnologie, bensì sul processo di assunzione nelle varie aziende. Ciò che si chiede Zakas è [quando assumere "**generalisti**" vs quando (e se) assumere "**specialisti**"](http://www.nczonline.net/blog/2014/07/15/generalists-and-specialists-thoughts-on-hiring/). Se capite l'inglese e avete dieci minuti leggetelo, ne vale la pena. Altrimenti, leggete qui sotto 🙂 Ne farò un riassunto e infine scriverò alcune considerazioni personali.

Ritengo che _questo tipo di ragionamento non si applica solo al mondo del software ma a tutti i livelli del mondo lavorativo_, quindi se leggendo questo articolo volete fare un paragone con la vostra situazione attuale, i commenti sono vostri amici 🙂

## Chi sono i "Generalisti"

i Generalisti sono coloro che sono bravi a fare un po' di tutto, senza una reale specializzazione. Sono solitamente bravi a fare le cosiddette attività _server-side_: database, setup di tool complessi, builds, etc.

Riescono a passare da un linguaggio ad un altro con facilità, perché ciò che conta è il procedimento e non la tecnica. Queste persone riescono a portare a termine qualsiasi compito gli venga assegnato.

I Generalisti tendono a fare un lavoro buono, ma non eccezionale; spesso vanno in crisi quando bisogna ragionare su un paradigma di lavoro che richiede un modo di pensare diverso (es. mobile, frontend).

All'inizio del ciclo di vita di un'azienda (o di un progetto), spesso vengono assunte persone che sono capaci di fare compiti anche molto diversi da quelli inizialmente previsti. In questo caso i Generalisti sono la scelta migliore perché possono lavorare a più ambiti senza sentirsi in difficoltà. Inoltre all'inizio del ciclo di vita di un'azienda il sistema è relativamente piccolo e ogni programmatore deve conoscere ogni aspetto del progetto. Se tutti sanno fare tutto, questo lavoro viene notevolmente semplificato.

## Gli "Specialisti"

Non c'è bisogno di me o di Zakas per spiegare chi sono gli specialisti 🙂 Sono programmatori che, spinti dalla passione e dall'esperienza, eccellono in alcuni campi (web e mobile, lì si trovano i più accaniti specialisti). Spesso hanno una conoscenza superiore alla media su come si implementano particolari soluzioni, a discapito di altre aree che magari hanno dimenticato, più o meno intenzionalmente.

All'inizio del ciclo di vita di un'azienda i Generalisti implementano molte soluzioni che sono "abbastanza buone"; non appena la crescita dell'azienda è diventata consistente, e ci si rende conto che le soluzioni "abbastanza buone" non sono più così buone, ed è il momento di assumere degli specialisti. Ma come?

![specialisti vs generalisti](/images/SPECIALIST-vs-GENERALIST.jpg)

## Come assumere specialisti

Generalmente è il front-end il problema principale dei generalisti; spesso non riescono a trasformare in realtà ciò che i designer hanno prodotto, e i manager iniziano a brontolare perché "_front-end is a feature_", e quindi si inizia a chiedere di qualcuno che sappia cosa fare. Tuttavia, **non sempre le aziende sanno come assumere uno specialista**. Il processo di assunzione è tarato sui Generalisti e le domande che vengono fatte in questi colloqui non vanno bene per gli Specialisti.

Un altro problema spesso paventato dai manager è che **uno Specialista crea problemi di allocazione**. Molti credono che uno Specialista, una volta esaurita la sua mole di lavoro, diventi un peso e non si sappia dove allocarlo.

Dunque il vero primo problema è riuscire ad assumere il primo specialista abbastanza bravo da risolvere problemi nel breve termine. Grazie a questa prima figura si potranno assumere altre persone nel medio termine, e fare un trasferimento di conoscenze verso gli altri nel lungo termine.

Facile no?

## Quando assumere uno specialista

La risposta può variare, ma per sommi capi potremmo pensare a queste situazioni:

- quando le cose sono veramente messe male. Ossia quando il lavoro che era "abbastanza buono" ora è diventato un totale casino.
- quando ci si vuole muovere su un'area completamente nuova e bisogna farlo in fretta (es. Quando si ha già una webApp e si deve creare subito una app mobile)

## chi deve condurre l'intervista

Se in azienda nessuno ha le competenze dello specialista che si vuole assumere, diventa un problema anche solo fargli un colloquio. Le solite domande non vanno bene per questo tipo di figure. Eppure in azienda qualcuno ha provato a svolgere il lavoro dello specialista, sporcandosi le mani con la UI o il mobile: secondo Zakas queste sono le persone che dovrebbero condurre l'intervista.

I contenuti dell'intervista dovrebbero vertere sui problemi già affrontati e da affrontare e vedere se lo specialista riesce a spiegare con facilità ciò che ha in mente per risolvere il problema. La capacità di spiegarsi è fondamentale quando si assume il primo specialista; egli infatti sarà colui che dovrà dialogare con tutti i Generalisti preesistenti.

A un certo punto della vita aziendale sarà difficile vivere senza Specialisti. Gli stessi Generalisti, quando il sistema sarà diventato troppo grande, inizieranno a focalizzarsi su parti del sistema e saranno loro stessi a chiedere di poter migliorare qualcosa. In genere questa è la fase in cui ci si trasforma da Generalisti a Specialisti.

Assumere Generalisti diventa addirittura un rischio in questa fase, in quanto uno sviluppatore prima di diventare produttivo può richiedere molto tempo. Zakas cita ad esempio una company per cui ha lavorato, in cui i programmatori ci mettevano 6 mesi per essere produttivi perché assumevano solo Generalisti e poi usavano tool proprietari, così da rendere impossibile il trovare qualcuno già skillato.

## l'approccio Google

L'approccio utilizzato a Mountain View viene detto "_ultimate generalist_" : assumere solo le persone più brave, più in gamba, che sappiano ragionare. Google ragiona così perchè non sa queste persone su quale progetto andranno a lavorare: può darsi lavoreranno a migliorare un DB o a sviluppare App per iPhone, lo si scoprirà solo il primo giorno di lavoro.

È come se, dovendo fare una squadra di calcio, si punti a prendere i migliori giocatori disponibili sul mercato, ignorando completamente i ruoli: portiere, difensori, centrocapisti e attaccanti. Nel metodo Google, tutti possono trovarsi a fare tutto. Lo immaginate?

Per questo, assumere generalisti all'inizio è un'ottima idea, ma se si hanno grandi ambizioni (giocare in Serie A) a un certo punto bisogna assolutamente diversificare i ruoli specializzandoli. Assumere generalisti e puntare al _training on the job_ diventa un problema di scalabilità, con molte persone nuove che non riescono a gestire la mole di lavoro subito.

## (inutili) Considerazioni personali

Sebbene abbia poca esperienza lavorativa, ho visto questi comportamenti su piccola scala. Ho vissuto la fase in cui un'azienda è passata da tool proprietari a tool aperti, e quindi siamo riusciti a trovare nuovi specialisti subito. Ho anche visto quanto è sconveniente prendere persone alle prime esperienze e affidarsi al training on the job, specialmente quando il progetto è avviato da diversi anni.

L'approccio Google ha prodotto risultati interessanti e alterni: da un lato l'ideatore di GMail afferma di non aver avuto alcuna competenza su javascript quando ha iniziato a lavorarci, e insomma GMail era un esperimento per mettere in pratica ciò che stava imparando. Questo suo "sperimentare" lo ha trasformato da generalista a specialista; inoltre ha creato la prima webapp di successo che ha rivoluzionato il modo di pensare a javascript lato client.

Inoltre una grande parte del successo di Google dipende da ciò che accade lato server - i loro data center sono un esempio e sono copiati da centinaia di altre aziende nel mondo.

Sfortunatamente non tutti i generalisti hanno la fortuna di cambiare il mondo, anche se in questo campo Google domina sugli avversari ([anche AngularJS è nato da un "generalista" a digiuno di javascript...](http://michelenasti.com/2015/02/pro-e-contro-di-angularjs-dopo-2-mesi-di-lavoro/)).

Dove falliscono i generalisti? Proprio lì dove gli altri invece hanno successo: guardiamo ad Apple, che su hardware non eccellente costruisce software perfettamente tarato ed integrato. Apple assume generalisti? Penso di no, anche se sulle procedure di assunzione della Apple c'è molta segretezza.

Io sono "nato" generalista, e sto facendo un grande sforzo per studiare il mondo web e frontend, di cui sono affascinato.

E voi? generalisti o specialisti?
