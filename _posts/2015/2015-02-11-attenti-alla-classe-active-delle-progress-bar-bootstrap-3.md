---
id: 140
title: 'Pay attention to the ".active" progress bar class in Bootstrap'
date: 2015-02-11T13:15:36+00:00
author: musikele
layout: post
guid: http://michelenasti.com/?p=140
permalink: /2015/02/attenti-alla-classe-active-delle-progress-bar-bootstrap-3/
dsq_thread_id:
  - "3990321065"
headerImg: /uploads/2015/02/bootstrap-3-progress-bars.jpg
categories:
  - English
tags:
  - bootstrap
  - performance
  - progress bar
---
Yesterday a coworker calls me because he wants to understand why, **after loading the search results on a given page, we had an active CPU running**. In fact, after the data is loaded, the CPU goes from 10% to20% without any apparent cause.

Astonished, we started to find out all the possible causes to this.

Is this the famous "_Angular Performance Problem_" that we have all read on the web (but never found in practice)? Well, the profiler said that nothing was happening on the page.

Maybe we are loading too much data from the search? 87 kb is not that much, we have loaded far more data without problems.

Suddenly we have a brainwave: **on that page we have an animated progress bar for each search result.** With developer tools I delete all this progress bars _et voilà_: **CPU calms down to 0%.**

![Bootstrap 3 progress bar](/uploads/2015/02/progress-bar-bootstrap.png)

Our error has been to leave the class `active` on our progress bars, and if you go on the [official bootstrap page](http://getbootstrap.com/components/#progress-animated) about it, there is no evidence of this behavior. (click on the "toggle animation" button to see it in action).

Well, apart from the fact that we had this 25 progress bars moving on the page, we really didn't have any clue of what was going on. Our browser is doing a lot of work to animate things smoothly, and as I said _bootstrap documentation does never mention this high CPU usage_. But did we really need it? of course not, so we took away the `active` class and leaved a striped, but static progress bar.

**Beware of all transitions that you have on your page, they consume more CPU than you might think;** and if a computer is slightly outdated (who said "cheap phones"?) your customers might experience bad performance.
