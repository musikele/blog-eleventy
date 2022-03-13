---
id: 411
title: 'My problem: start custom js code with ngRoute'
date: 2015-10-30T08:26:03+00:00
author: musikele
layout: post
guid: http://michelenasti.com/?p=411
permalink: /2015/10/start-custom-js-with-ngroute/
dsq_thread_id:
  - "4273427006"
categories:
  - Italiano
tags:
  
---
The problem is: I took a theme for a website and now I am _angularizing_ it, mainly to use two features of this framework: the **ngImport** feature (for the footer) and **ngRoute**, to get a dynamic menu for my website. 

After 2-3 hours of playing, I almost gave up. 

This template is built in a very classical way, so all js libraries are just JS files that are imported in each page. We are talking of libraries like jquery, parallax, and others. 

My &#8220;angularization&#8221; of the website started like this: from the home page, divide the toolbar (it will be my index) from the content. 

At this step I already had problems: jquery was not firing its events on the content page. 

**BEFORE** the page loaded, then scripts started and jquery found its way to start its functions on the elements. **NOW** the header loads, then all the scripts load, then the content loads, then... Nothing. Seems that i can execute only Angularjs code at this point. 

I managed to solve creating a function that wraps the jquery code and calling it everytime I change page; but maybe I have to do this for every other library? Is there a more generic way? 

**RequireJs** might be the solution and I am exploring it, however I am also concerned with how many libraries I am injecting in my website: right now we are already using 190 Mb of RAM...  Too much for a simple website IMHO. 

Let me get back to my dirty website... My feeling is that **Angular was too much to get just this simple routing capability,** maybe I have to explore other libraries to get what I want. Any other idea/solution will be very much appreciated!