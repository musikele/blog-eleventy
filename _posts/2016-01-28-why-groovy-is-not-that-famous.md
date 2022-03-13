---
id: 566
title: Why Groovy is not that famous?
date: 2016-01-28T13:30:16+00:00
author: musikele
layout: post
guid: http://michelenasti.com/?p=566
permalink: /2016/01/why-groovy-is-not-that-famous/
dsq_thread_id:
  - "4530571216"
categories:
  - English
tags:
  -  groovy
  - java
  - languages
  - programming languages
---
If you understand Italian, my last two articles were about integrating Groovy inside a Java webapp.

#### But... what is Groovy?

  * **Groovy** is a **dynamic scripting language**, it can be interpreted at runtime to create applications more rapidly. However, **you can also compile the code** to get the best possible performance (comparable to Java).
  * It has a **succinct syntax** with idioms coming from Javascript and Python, other than Java. There are idioms to avoid null pointers that are very smart and easy to apply.
  * It is **compatible with Java6 syntax,** in the sense that if you write Java6 code it will be 99% understood by Groovy. It would be stupid to write Java inside Groovy, but this is the main advantage Java developers find in this language: they don't have to learn something totally new.
  * It is **one of the** **oldest alternative languages for the JVM,** this year it should have passed 10 market years.
  * It has **closures** and they work in a very natural way; functions are prime-order objects of this language so you can assign and operate over functions pretty much like you would do with int, double, String.
  * It will **wrap every primitive value** by it's Object representative and it will override &#8216;==' so it will behave like _equals_. Many other helpers (like type conversion) are present too.
  * It has **type inference**: you can avoid writing the return type of functions and Groovy will try to infer it for you. You can **def** every variable, or you can explicitly type **int, double, String** to gain more compiler power.
  * It has a **good IDE Support:** IntelliJ will support it out of the box, Eclipse is a pain whatever you want to try outside Java but you can accomplish some results.
  
    **Annotations,** and **popular frameworks** (like Spring, or Hibernate) **will work seamlessly.** Just put the Jars in the classpath.

#### Disdvantages

  * **During the first years of its life Groovy's performances were poor**. Very poor. This was mainly due to a feature of the JVM that was blocking dynamic languages. From Java7 a new feature called _invokeDynamic_ greatly improves dynamic code execution; the compiled groovy classes usually share the same execution time of Java (kind of). However, Groovy is still seen as the &#8220;slow&#8221; JVM language. Let's change opinion!
  * **People coming from iterative Java will not understand functional paradigms** and will say that Groovy is too difficoult or crazy.
  * Many are asking, now that **Java8** is here and **supports lambda expressions** (aka _functional paradigm_), do we still need Groovy? Well, if you also need a dynamic _scripting_ language the answer is yes.

### Bonuses

Ruby on Rails started the framework hype, so now we have Laravel for Php, Play for Scala and Java, Django for Python... **Grails** is the Groovy version of **web development framework**. I admit that i still have no experience with it but I'm very curious.

**Gradle is a dependency management and build system** (maven competitor) that is gaining a lot of notoriety since it is the default Android dependency management. It is written in Groovy and it's build file is in groovy syntax, but nobody will notice it if you don't tell them.

### Conclusions

Since I see a lot of good points and a very limited list of disadvantages, why Groovy has not shined like a star? Like... Scala, for example. It is seen as a simple tool, like the very first versions of javascript, but I have done many complex things that cross the boundaries of one programming language. And now I will develop a Grails app to see its power.