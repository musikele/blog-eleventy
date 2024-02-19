---
id: 535
title: Creare dinamicamente Groovy beans in Spring
date: 2016-01-26T10:10:01+00:00
author: musikele
layout: post
guid: http://michelenasti.com/?p=535
permalink: /2016/01/creare-dinamicamente-groovy-beans-in-spring/
dsq_thread_id:
  - "4524101814"
categories:
  - Italiano
tags:
  - autowired
  - groovy
  - spring
---
Il problema che voglio provare a risolvere è questo: data una stringa in ingresso, che contiene il nome di uno script Groovy da eseguire, siamo capaci di trovarlo su db, di istanziarlo e lanciarlo?

Sembra banale alla luce di quanto già scritto nell'[articolo precedente](http://michelenasti.com/2016/01/realizzare-un-piccolo-motore-di-scripting-in-una-webapp-java-con-groovy/), ma voglio aggiungere un ulteriore tacca di complessità: lo script è una classe Groovy che contiene annotations di Spring. Se venisse inizializzato da zero, molto probabilmente le variabili istanza iniettate da spring sarebbero null.

Grazie a queste pochissime righe possiamo superare il problema e goderci i nostri bean _spring_ati:

```groovy
package interoperability.groovy

import interoperability.GroovyScripterInterface
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.ApplicationContext
import org.springframework.transaction.annotation.Transactional

class GroovyBeanService implements IGroovyBeanService {

    @Autowired
    ApplicationContext applicationContext

    @Transactional
    def initializeBean(className) {

        //leggi la classe da DB, file, etc.
        def classString = new File("path/to/GroovyScript.groovy")
              .collect()
              .join("\n");

        //uso la console per istanziarlo davvero
        def gcl = new GroovyClassLoader()
        def clazz = gcl.parseClass(classString)

        //now that the file is compiled, can we istantiate it?
        def instance = clazz.newInstance();

        //autowire tutti i bean di Spring
        applicationContext.getAutowireCapableBeanFactory().autowireBean(instance);
        
        //proviamo a chiamarlo!
        instance.sayHello()
        
        return instance
    }
}
```

Il bean `GroovyBeanService` viene esplicitamente inizializzato da Spring, motivo per cui implementa l'interfaccia `IGroovyBeanService` .

A riga 21 leggo il contenuto dello script e lo trasformo in una grande stringa.

Attraverso il `GroovyClassLoader`  (riga 24-25) possiamo istanziare la classe appena caricata e poi istanziarla a riga 28.

L'oggetto però ottenuto fino a questo passo conterrà variabili istanza null; tramite l'applicationContext riusciamo a colmare anche questa lacuna. Dopodichè si tratta solo di chiamare i suoi metodi e utilizzarlo.

### Attenti ai MemoryLeak

`GroovyClassLoader` può prendere in input sia una `String`  sia un `File` . Quando prende una stringa, circostanza a cui noi per esigenze strutturali non possiamo rinunciare, GroovyClassLoader non riesce a _cache_are la classe e gli oggetti appena creati non saranno cancellati dalla memoria. Tutto questo non accade se invece l'input è un file. Occorre quindi implementare un meccanismo di cache artigianale (ve lo dovete fare voi!) per evitare di reistanziare milioni di volte lo stesso bean.

Buon Groovy!
