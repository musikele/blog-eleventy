---
id: 1030
title: Develop a microservice with Ratpack
date: 2016-10-28T18:30:55+00:00
author: musikele
excerpt: Ratpack is a microservice framework written in Java8 and Groovy. It really helps to write applications with complex requirements.
layout: post
guid: http://michelenasti.com/?p=1030
permalink: /2016/10/develop-a-microservice-with-ratpack/
dsq_thread_id:
  - "5260298458"
categories:
  - Italiano
tags:
  -  groovy
  - java
  - java 8
  - microservices
  - ratpack
---
[Ratpack](https://ratpack.io) is a lightly opinionated framework that's perfect for backends written with a RESTful specification. I am using it in a project that we are developing, and of course it's a microservice.

<img class="wp-image-1122 aligncenter" src="https://i1.wp.com/michelenasti.com/wp-content/uploads/2016/10/Schermata-2016-10-28-alle-15.16.51.png?resize=551%2C205" alt="schermata-2016-10-28-alle-15-16-51" srcset="https://i1.wp.com/michelenasti.com/wp-content/uploads/2016/10/Schermata-2016-10-28-alle-15.16.51.png?w=551 551w, https://i1.wp.com/michelenasti.com/wp-content/uploads/2016/10/Schermata-2016-10-28-alle-15.16.51.png?resize=300%2C112 300w" sizes="(max-width: 551px) 100vw, 551px" data-recalc-dims="1" />

Ratpack is completely **written in Java 8**, and you can use it with Java if you like. However, it's in **Groovy** that it really shines. Groovy is a functional scripting language for the JVM, and enhances Java under many aspects.

I was scared of using Groovy, a language that I have never studied systematically. But **Groovy is not that difficult**. In fact, I found it easier to read (and write) Groovy examples than the Java counterpart.

So, right now I'm stuck with the Java version of the framework, that is functionally equivalent to the groovy one. But I have already in mind to rewrite everything in groovy, once I have stabilized the requirements. **Microservices are** also this: **the possibility to rewrite everything when you find a better option**.

So, what's great about ratpack? what are it's main features? Let's dig in it.

### Ratpack Features

**Ratpack** **does not force you** to stuck with their idea **on how structure your code**.

**Ratapack has built in support for startup configuration** coming from json, yaml, environment variables, system arguments, and java classes. This is great since many of us are going to use Ratpack in a container.

With ratpack you can specify the API of your backend in a fluent way, so that **it's very easy to declare and to understand who will answer a call**. Here's an example:

<div class="gist-oembed" data-gist="musikele/0a32762eddc82d1de801e66029dcdb07.json">
</div>

It has native **support for headers, status codes, Exceptions, query parameters, forms, json**, and all the like.

Guice is the default **dependency injection**, but you can go on with Spring if you want.

The class that responds to a http call is a **Handler**, that you have to imagine **like a java servlet that intercepts a request**.  You can, for example, log all requests in a handler, then pass the control to the next that will extract data from headers, and according to that data it will call the right handler for you. You can also pass data between handlers so that it's very easy to work with it.

Want more? **Ratpack is implemented using [Netty](http://netty.io)**, <span class="s1"><i>an asynchronous event-driven network application framework. </i>Does this definition say anything to you? <strong>It's the same philosophy taken by NodeJS</strong>. So you can expect to handle a lot of connections. (This power comes at a cost. Develop responsibly)</span>

**Testing is a breeze**. I have done only functional tests, but I'm confident that the application works exactly like I am expecting. Ratpack encourages to use Spock, but I'm using JUnit and I'm not regretting it.

And finally, **in development mode** (launching it with &#8220;gradle -t run&#8221;) **it will auto-reload the server everytime there's a change on filesystem**. If you have ever worked with tomcat, you know how much time this can save you.

## How to learn?

Don't read the official documentation - it's just a waste of time. Instead, **buy a copy of [Learning Ratpack](http://shop.oreilly.com/product/0636920037545.do)** - this book is clear and covers every aspect of a Ratpack application. I'm still at chapter five but it's very easy to go through!

## Plans for the future

I want to rewrite everything in Groovy, as I said. I also have to finish the book to uncover all Ratpack powers. I have made many mistakes in the past, expecially from not having undestood how handlers work and how to pass data between handlers. That's why I say the book is useful.

If you have ever tried ratpack, feel free to give me your impressions! Expecially if they are negative.