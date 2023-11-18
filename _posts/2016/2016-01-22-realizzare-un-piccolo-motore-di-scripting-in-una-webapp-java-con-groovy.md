---
id: 525
title: Realizzare un piccolo motore di Scripting in una webapp Java con Groovy
date: 2016-01-22T10:10:35+00:00
author: musikele
layout: post
guid: http://michelenasti.com/?p=525
permalink: /2016/01/realizzare-un-piccolo-motore-di-scripting-in-una-webapp-java-con-groovy/
dsq_thread_id:
  - "4513006607"
categories:
  - Italiano
tags:
  - groovy
  - java
  - scripting
headerImg: /uploads/2016/01/2000px-Groovy-logo.svg_.png
---

Alla Webapp a cui stiamo lavorando abbiamo dovuto integrare un motore di scripting per aiutare gli specialisti che dovranno interfacciarsi con gli strumenti di laboratorio.

Nella precedente versione dell'applicazione, realizzata in Visual Basic, questi script erano realizzati in PL/SQL (perchè c'era bisogno di leggere e scrivere dati sul DB)... ma questa scelta ora non è più praticabile perchè noi vogliamo supportare più DB.

Così tra ieri e oggi mi sono messo a cercare un po' di info su quale fosse il miglior linguaggio scriptabile e integrabile con Java, che avesse le seguenti caratteristiche:

* deve poter accedere al database e "vivere" nella stessa transazione del chiamante
* deve poter chiamare i servizi Java già creati (solitamente creati come bean spring)
* i servizi Java devono poter chiamare questi eventuali script
* devono poter essere sostituiti "on-the-fly", senza spegnere e accendere il software.

Il management aveva individuato [Drools](http://www.drools.org/) come uno dei possibili tools che il team già conosce, che non risponde però a tutti i requisiti. Il mio compito era di continuare a investigare per trovare altre alternative.

#### let me google "Java Scripting" for you

Fin dall'inizio ho pensato a Groovy ma da qualche parte ho letto che Spring supporta altri due linguaggi, che ho dovuto scartare:

* [**BeanShell**](https://github.com/beanshell/beanshell). Purtroppo i siti web a riguardo non sono molto aggiornati, e sembra che il progetto sia ospitato su github ora. Il sito ufficiale è in disuso dal 2005, github non viene aggiornato da 4 mesi e comunque c'è stato un solo avanzamento di versione in 10 anni. Ci sono dubbi sulla compatibilità con Java8 e, da una mia prova, non riesce a chiamare bean autowired di spring.
* [JRuby](http://jruby.org/). Ruby è un grande linguaggio e sulla JVM diventa incredibilmente potente, portabile, veloce. Peccato che la sua sintassi sia estremamente complicata per uno _scripter_ alle prime armi.

Così siamo arrivati a [Groovy](http://www.groovy-lang.org/). Andate sul sito web se volete leggere le caratteristiche, ma la cosa che ci importava è che

* supporta una grande parte della sintassi Java (e si possono chiamare classi Java come String, Integer, Boolean...)
* è sponsorizzato da SpringSource
* esiste da una decina d'anni (e aveva le clojures dalla prima versione!)
* Ad oggi è molto utilizzato come framework per lo sviluppo web, ad esempio col framework [Grails](https://grails.org/).

Il problema delle transazioni l'ho risolto grazie a [questo articolo](http://sadalage.com/blog/2013/01/14/transactions_using_groovysql/), come potete vedere il data source e il transaction manager vengono definiti in Hibernate e poi passati all'oggetto SQL di Groovy.

La possibilità di _Autowirizzare_ i bean Groovy e di utilizzare i bean Spring è stata un'altra cosa spiegata "abbastanza" bene nel [capitolo 34 della guida di Spring](http://docs.spring.io/spring/docs/current/spring-framework-reference/html/dynamic-language.html).

#### Show me the code

Come prima cosa ho creato un'interfaccia `GroovyScripterInterface` in JAVA:

```java
/**
 * Created by Michele on 20/01/2016.
 */
public interface GroovyScripterInterface {

    public void sayHello();
}
```

e una classe Groovy che la implementa:

import groovy.sql.Sql
import org.springframework.beans.factory.annotation.Autowired

```java
/**
 * Created by Michele on 20/01/2016.
 */
class GroovyScripter implements GroovyScripterInterface {

    @Autowired Sql sql

    @Autowired ServizioFarlocco servizioFarlocco

    void sayHello() {
        printf('\n\n\n\nHello! ' + sql + '\n\n\n\n\n')
        servizioFarlocco.mangia()
        return
    }
}
```

Groovy tradurrà questo codice groovy in una classe Java, e su queste classi si potrà utilizzare AOP, annotazioni, transazioni, etc.

`ServizioFarlocco` invece è una classe Java che non fa nulla di chè.

L'oggetto SQL invece è definito nella configurazione di Hibernate, andate a vedere il primo articolo linkato (quello sulle transazioni in groovy).

E infine ecco l'XML in cui sono definiti i due bean (Java e Groovy):

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:context="http://www.springframework.org/schema/context"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:lang="http://www.springframework.org/schema/lang"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
        http://www.springframework.org/schema/beans/spring-beans-4.0.xsd
        http://www.springframework.org/schema/context
        http://www.springframework.org/schema/context/spring-context-4.0.xsd
        http://www.springframework.org/schema/lang 
        http://www.springframework.org/schema/lang/spring-lang.xsd"
>


<context:annotation-config />

<bean id="servizioFarlocco" 
    class="it.eng.areas.eliot.interoperability.ServizioFarlocco">
</bean>

<lang:groovy 
    id="groovyScript" 
    script-source="path/to/GroovyScript.groovy" 
    refresh-check-delay="5000"
/>

</beans>
```

Da notare che il parametro `refresh-check-delay` serve a Spring per verificare se il file è stato aggiornato. il valore 5000, espresso in millisecondi, significa "verifica ogni 5 secondi se il file è stato aggiornato". script-source invece è il path (non il package, per questo ci vogliono gli slash).

Per concludere un bel test JUnit, quindi da Java chiamiamo il bean Groovy (che chiama un altro bean Java) :

```java
@ContextConfiguration(locations = {"file:context/application-context-junit.xml"})
@TransactionConfiguration(defaultRollback = false)
@Transactional
public class GroobyBeanTest extends AbstractTransactionalJUnit4SpringContextTests {

    @Autowired
    private GroovyScripterInterface groovyScripterInterface;

    @Test
    public void groovyTest() {
        groovyScripterInterface.sayHello();
    }

}
```

## Conclusioni

sembra di aver imboccato la strada giusta. Agli "specialisti" del prodotto darò in dote un fantastico linguaggio di scripting con cui potranno fare quello che vogliono. Nel frattempo vi chiedo: avrei potuto seguire altre strade, conoscete altri strumenti per questo compito?
