---
id: 845
title: 'My very personal Javascript Fatigue: the truth about JS testing'
date: 2016-08-30T23:34:08+00:00
author: musikele
layout: post
guid: http://michelenasti.com/?p=845
permalink: /2016/08/my-very-personal-javascript-fatigue/
dsq_thread_id:
  - "5107340415"
categories:
  - English
tags:
  - javascript
  - testing
headerImg: /uploads/2016/08/js-fatigue.jpg
---
Trying to write this post as a 2007 blog post: personal, not so politically correct. (I'm not involved in JS politics by the way)

Well, In 2007 I was already studying **Javascript**, **HTML** and **CSS**, and I vividly remember that I **HATED** the web world because different browsers were doing crazy stuff for the same instruction. These were the good ol' _HTML 4_ days.

I was pretty wrong. Browser apps are everywhere.

I have worked with a lot of javascript till now, I have also started a [Javascript Meetup](http://michelenasti.com/2016/02/javascript-meetup-a-salerno/) here in my home town, Salerno. I have mentored and teached people about NodeJS. I have explained the story of the _single thread_ and the differences between browsers and servers ... and still, there was something that I was missing.

### Everybody talks, nobody really does it: TESTING

It's very easy to say that **testing is important**, it's just three words nonetheless. I have heard this a thousand times, from a bazillion of people. However, when I have asked to talk to me honestly about javascript testing, the answer was more or less:

> _nobody really does testing_

**WTF?** I have heard this from people that I respect, and at many companies where I was interviewed. Why?!

> _Our apps are not so big that you can't test them manually_

Well, this can be an explanation, but not a great one.

> _I can't find any resources about testing in javascript_

Uhm ... we are reaching the point ...

> **Testing in javascript is f\*\*\*ing difficult

Now that's the truth, ol' boy. Let's dive into it.

[Testing is difficult](https://i0.wp.com/michelenasti.com/uploads/2016/08/testingdifficult.jpg)

### My personal testing jurney

I decided to revamp a very old project, written in Java and Swing (yes, it was a standalone application, that's how computers worked in 2010). In 2016, since browsers can do better things than before, I have decided to rewrite everything in javascript and to write the frontend in something that is more mantainable.

I decided to write my stuff in angular 1 (I know it very well and since I have no spare time this was the only option for me). As a build tool, i have decided to use [Gulp](http://gulpjs.com/) + [Browserify](http://browserify.org/). For those who don't know what Browserify is, well, it's a JS library that lets you import other javascript modules exactly like NodeJs (so, you would use <span class="lang:default decode:true crayon-inline">require('./TimerService')</span>  to import it in your file). This has given me the ability to decouple angular from the actual JS code. Another advantage is that I can test it better, since it's only Javascript.

What about Gulp? Gulp is a build tool that can do a lot of stuff for you. I use it to trigger actions everytime I save a file, like running a syntax checker and convert my ES6 code to more <del>archaic</del> compatible ES5.

I also run my unit tests everytime I hit <span class="lang:default decode:true crayon-inline">Ctrl+S</span>  (save).

### How do you write unit tests in Javascript?

It would be great to just say, "use this!" and we're happy. In Javascript there are many libraries that are competing in the same space that there is no clear winner. I had to choose something that was well supported, well documented and used. I don't know if they are the best for every scenario, but since my time is limited, I am using these because <del>they were the first result on Google </del>they worked at the first attempt.

One library? NO! In JS, at least for browser testing, you need:

* a test runner, like [<span class="lang:default decode:true crayon-inline">karma</span>](https://karma-runner.github.io/1.0/index.html)
* a library to actually write the tests, like [<span class="lang:default decode:true crayon-inline">mocha</span>](https://mochajs.org/)
* an assertion library, like [<span class="lang:default decode:true crayon-inline">chai</span>](http://chaijs.com/)

WTF, again? 3 libraries to do something that <span class="lang:default decode:true crayon-inline ">JUnit</span>  (for Java) does alone ?? This is an **example of the over-populated, github-based, quality-variegated NPM package manager**.

These 3 pieces of software still don't have many years of maturity on their shoulders, and are not immune to bugs (which are promptly resolved, however). I have found one in mocha, for example, and I could not figure out until I upgraded.

Once you understand how to use these three libraries, then you have to actually write tests for your application: I don't have words to describe how difficult is to test a function that uses multiple <span class="lang:default decode:true crayon-inline">setTimeout()</span>  in the code (it's an audio player, and deals with timing...). And now my next step in this journey is to mock stuff.

Another discovery I want to share with you (well, it's not a discovery, since it's on <span class="lang:default decode:true crayon-inline ">chai</span> 's web page): you can check the test correctness in two ways, the <span class="lang:default decode:true crayon-inline">assert</span> way (like the one used in JUnit), or via a "behavioural" testing definition, something like "<span class="lang:default decode:true crayon-inline ">expect(this).to.be.greaterThan(that)</span> ". two syntaxes for the same thing.

### Moral of this <del>story</del> rant

Do we really need testing in Javascript? I believe that yes, **testing is fundamental as the application grows**, and expecially if you want to do some refactoring that has some sense.

**Should it be this difficult to test stuff? No.**

At some point in the future, testing JS will be easy like every other language in the programming world. Modern languages born with testing capabilities built in, and Javascript is so old that testing was just not cool to think about it.

So, if you believe that your application will be refactored some time in the future, if you don't want to become crazy, test it. _Test it now_. Run tests every <span class="lang:default decode:true crayon-inline">Ctrl+S</span> . This is the only way to be sure that things will not break up. Js is a dynamic language, it's not statically typed, and IDEs do not do type checking for you. Help yourself with testing.

And finally, **when testing will be cool again, you can say you were already doing it when stuff was being developed.**You can talk like a good, ol' Testing Granpa.
