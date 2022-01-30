---
paginate: true
comments: true
author: musikele
title: 10 years around the web platform, what's changed and what's not
category: Italiano
layout: post
date: 2018-12-12
tags:
- html
- " javascript"
- css
- internet explorer
- jquery
- chrome
- firefox
- edge
- safari
- microsoft
- google
- apple
- mozilla
header-img: "/images/1472784019browser-wars-over.png"
description: 'Starting from 2006, what is changed to the web plaftorm, what we have
  now and where are we going. Should we leave all the web to only one browser? '

---
**In 2006 I was studying web technologies at University**. Avilable browsers were Firefox, Opera, Internet Explorer, Netscape on some linux computers.

![The web was a huge mass of <table> elements]({{ site.baseurl }}/images/1 Me2MiUgum7fhYWoUp5nwJA.png "The youtube homepage in 2006")  

**HTML** was at version 4 and there were a lot of standards competing like **xhtml** (basically, xml to write html and help syntax checkers) and also many **doctypes** (strict, transitional ...) that I never fully understood. Fortunately now we just write `<!DOCTYPE html>` and that's it. `<div>` was a relatively new thing. 

**Javascript** was not cool. The teacher didn't spend more than 2-3 lessons on it, just explaining how to do basic input validation and some DOM manipulation. Strangely enough, javascript as a language was never versioned but now we refer to that days as EcmaScript3 ([here's a table with all javascript versions](https://www.w3schools.com/js/js_versions.asp)). No JQuery was introduced. There were no books ot guides to learn JS, too. There was just one devtool available, and it was a Firefox extension called _Firebug_ (later it became part of the browser). 

**CSS** was also crazy (it still is!). Some browsers adhered to the standard, but not the main one, forcing developers to cross test everything on all possible browsers. Fortunately at the time browsers were just 3-4, not the plethora we have now. 

So... my first days of web design were just crazy. One of the tasks I had to do for this exam was to develop a "personal website", and I remember that it was not rendering correctly on IE. 

## Internet Explorer, the bad guy

What I didn't know is that IE _deliberately_ violated the standard, using its power and market share to **impose** their version of the web against rivals.  

I struggled realizing a simple website that would show correctly on firefox, following the standards, but not at all on IE (95% of the market share at the time). 

Same for Javascript: IE was just not following some rules that were correctly implemented by others, or deliberately not implementing some standard features. This is one of the motivations for libraries like **JQuery** to rise: cross-browser uniformity. 

I promised to myself to never work on the web: the platform is unreilable, buggy, nothing works as expected and there's nothing you can do about it, except than doubling the work.  

## Fast forward, 12 years later 

I'm working as a web developer since 6 years, basically I had no choice: when I ended university all the companies were transforming their long-lived java applications to web applications. The good news are that javascript has been standardized (ES5 before, and ES6 after, were huge steps towards browser uniformity) and even newer versions of IE are supporting it. 

**Chrome**, started in 2008, is now the market leader with about 68% of the market share. Chrome uses its own rendering engine called _Blink,_ part of the _Chromium project_. 

**Firefox, the only truly indipendent browser,** is my default browser. They are not developed by a company but by a no-profit foundation. Their goal is to make the web platform the best possible platform. For many years they were behind Chrome on features, speed and privacy, but now FF is just the same if not better. So yes, I'm using Firefox for moral issues, but there's litterally nothing that I'm loosing since the switch. (I also use FF on mobile). Firefox uses its own rendering engine called _Gecko_. 

**Edge** was a new browser by Microsoft, and it was a surprisingly great browser. It is very fast and it also has a lot of features dedicated to tablets and touchscreens, so that you may prefer it on portable devices. Edge is still not widely adopted (lates stats say that edge is at 4% while IE is _still_ at 11%!) but it should. Edge uses it's own rendering engine called _EdgeHTML_.

**Internet Explorer** in 2018 it should be a thing of the past, but it's not. IE has been _deprecated_ and there will be no support for it in the future. It still has 11% of global market share (In Italy, where I live and work, it's at 2-4%) and I think this happens because many companies impose to their employees to use IE, since they may have developed security features, of custom applets, or other stuff that cannot be thrown away and rebuild in newer technology because it's not a simple/cheap job. This is what happens when you entangle your company on a closed platform... 

**Safari** is a browser that only exists on Apple iDevices. Safari is now considered the IE of the current browsers: many missing features, slow updates, slow fixes... Many standard components are simply ignored because it's not functional to the company's view of the web (Apple encourages developers to go native). Safari is based on _Webkit_. 

There are many other browsers, like **Opera**, **Brave**, etc. but they've not reached great market share, even if they are technologically very valid. 

![]({{ site.baseurl }}/images/1472784019browser-wars-over.png)

## So ... what should we do now

The web is the platform that I know better: I love and hate it. **I love the fact that it's spontaneous**, with many great ideas going on, and it also moves very fast so that's impossible to stay current with every possible update. 

**I hate that some companies implement standards based on what they consider useful.** This has happened for a decade with Internet Explorer, and now with Safari. 

With Chrome I have a difficult relationship: **I don't like that one company owns the future of a browser, and with a 70% of the web they also own the future of the web**; it creates some moral questions about privacy and security, too. But **we cannot negate that Google has done a great job** by open sourcing big parts of the browser and they also have been the first browser to implement new standards (and closing bugs). 

The latest news are that **Edge is switching to a Chromium-based rendering engine**. They are doing this because Edge was so new that - like all new things - the browser was crashy, with bugs, and not performing well on some things that others do just fine. I am not an Edge user and, while I have to admit that technologically they are chosing the best available platform, I feel sad that another competitor gives away the competition. **This brings us to a monopoly and that's not what I expect**. The good thing is that developers at Microsoft will start contributing to parts of Chromium, so the rendering engine will not be really owned by only one company, but we still don't know the direction of these two companies and their long-term plans. 

## Please condiser using a non-Chromium browser for some time 

I'm already using and supporting **Firefox** and there's literally nothing I miss. It's fast, secure, privacy oriented, cool. Break the monopoly; **in the long term we - users - will be the only ones to earn the benefits of this choice.** 
