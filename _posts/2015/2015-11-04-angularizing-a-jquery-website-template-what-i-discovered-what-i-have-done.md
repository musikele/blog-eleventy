---
id: 415
title: 'Angularizing a jQuery website template: what I discovered, what I have done'
date: 2015-11-04T13:30:55+00:00
author: musikele
layout: post
guid: http://michelenasti.com/?p=415
permalink: /2015/11/angularizing-a-jquery-website-template-what-i-discovered-what-i-have-done/
dsq_thread_id:
  - "4288256095"
categories:
  - Italiano
tags:
  - angular
  - jquery
  - template
---
In my [last post](http://michelenasti.com/2015/10/start-custom-js-with-ngroute/) I talked about angularizing a jQuery template for a new website I am developing.

Let's remember my problem. The template I have chosen has a jQuery function that starts it's events with `$(document).ready(...)`. When the homepage (that consists only of the header buttons of the page!) starts, angular is loaded. at this point, before ngRoute decides what to do, the "ready" jQuery event is fired; when the partial.html is finally loaded (for example, the about.html page) no jQuery is fired.

My solution:

  1. change the jQuery function in `$(document).ajaxComplete(...)`. This way, everytime you get an ajax call, the code is re-executed. But... how can jQuery understand if an ajax call has been executed? expecially if it is not fired by jQuery?
  2. in every controller of every page (I only have 3 fortunately), I do a "fake" ajax call that calls an empty file that I have on my server: something like `jQuery.ajax( 'fakeFile.tmp' )`

This way jQuery could understand to re-execute the code inside the 'ajaxComplete' event. And this could be done inside AngularJs.

### Is this the right way to do this?

Well, no. Usually if you start with angular, you should stick with Angular. If you start with jQuery, stick with it. But in this case I had to develop a website starting from a well-done _jQuery_ed template. And I wanted to use some cool features that I can easily implement in Angular - translation, routing of pages, import of html fragments. So, _in this particular case_ I feel proud of my solution: little study of the situation gave me the best effect with little code.

### What options were you exploring?

In my last post I was suggesting to myself to use requireJs to lazy load the dependencies every time we change page. Unfortunately this is not the right approach. At the end I did not do this.

In the meantime, I asked some friends about my problem and they suggested me to NOT use requireJs; since I am using angular, a better idea might be to use [ocLazyLoad](https://oclazyload.readme.io/). The advantage is that it can be completely integrated in an Angular App at whatever level you like - in the router, in the controller, etc etc. However I don't need this too 😉
