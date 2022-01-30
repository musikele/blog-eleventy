---
id: 342
title: Instantiate beans with Spring without @Autowired
date: 2015-07-14T18:30:45+00:00
author: musikele
layout: post
guid: http://michelenasti.com/?p=342
permalink: /2015/07/instantiate-beans-with-spring-without-autowired/
dsq_thread_id:
  - "3974297058"
categories:
  - English
tags:
  - applicationContextAware
  - autowire
  - autowired
  - java
  - spring
---
Are you in a situation where @Autowired will not work? for example, in a static class or a class that is istantiated by another framework (hibernate) and so on. The latter case is my case: I had to autowire a bean in a Sequence Generator (to create ID for my classes), but since the class was instantiated by Hibernate, Spring could not access and autowire it, even if it was declared as a bean.

However, there is a chance to get what you want. In my example we will try to autowire "myBean" object. Please ensure that your bean is declared somewhere in your applicationContext.xml 😉

1. First of all, the class that can't be Spring-ified must implement ApplicationContextAware interface :

<pre class="lang:java mark:2,4 decode:true">public class SequenceTableIdGenerator implements IdentifierGenerator, 
    ApplicationContextAware { 

private static ApplicationContext applicationContext;

private MyBean myBean; 

...

}</pre>

2. you must override the method setApplicationContext that comes with the above interface :

<pre class="lang:java decode:true">@Override
public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {
    this.applicationContext = applicationContext;
}</pre>

3. Finally, you can autowire your beans in a constructor or in any other method:

<pre class="lang:java mark:2 decode:true">if (myBean == null) {
    myBean = (MyBean) applicationContext.getBean("myBean");
}</pre>

That's it! This method is not standard but it's very useful. Every time I needed it I had to go searching the web. Now this useful piece of info is my website 🙂