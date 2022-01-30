---
paginate: true
comments: true
author: musikele
category: Italiano
layout: post
date: 2019-02-12
tags: []
title: 'How ads are loaded so fast: the command queue pattern'
header-img: "/images/command_queue_pattern-2.jpg"
description: 'The command queue pattern allows you to give commands to your library,
  even if it has still not been loaded. This technique is widely used in advertising. '

---
Prior to work in an ads company I had no idea of how ads are actually rendered on a page. I mean, I had a vague sense of what was going on, but the actual world behind it ... well, it's huge :)

Sometimes ads are loaded on a page even before you actually see any content. How? The first thing we learned at university is to wait for the DOM to have completely loaded, before doing anything to the DOM itself. This does not apply to ads, or better to say, ad companies use many tricks to load ads without blocking the DOM.

I won't go in the detail of this process now, but basically **ads are rendered inside _iframes_**, and iframes should be used only for very narrow use cases, like widgets to inject on other pages, or payment processors. In the past I did the exact opposite: we implemented an angular 1 routing system with iframes, and that's something I wouldn't do again ([my experience](https://michelenasti.com/2015/05/iframe-safari-ios-e-la-lotta-allultimo-millisecondo/) - in italian).

Here in this article I'm going to talk about how some popular ad libraries (like [google publisher tag](https://support.google.com/admanager/answer/1638622?hl=en&ref_topic=4390039) or [Prebid](http://prebid.org/dev-docs/getting-started.html)) allow users to write code that will be put in a queue and will be executed as soon as the library is loaded.

## The problem: async library loading

Suppose we have a library that will load something, and this initialization process will take some time. Also, we don't know when the library will be actually loaded, since it's asyncronous. However, we would like to start giving commands (e.g. setup instructions) to this library as soon as possible. How?

> Let's suppose our library's name is, without much fantasy, `Library` and is loaded from file `Library.js`.

## The client code

in the client's code, the code that the user will write to interact with our library, we will initialize the library like this:

```javascript
var Library = Library || {}; 
Library.queue = Library.queue || [];
```

In these two simple lines, we have initialized our library and its commands queue. In fact, if the `Library` object does not exist, we will initialize it with an empty object, and then we will create the empty array property `Library.queue` that will contain our initalization code. For example:

```javascript
Library.queue.push(function(){
	console.log("Called only when the library has loaded, not before");
	Library.doMagic();
});
```

> Note: I'm deliberately using ES5 code here. It would be fantastic that every user in the world was using the latest version of the coolest browser, but the reality is that **a bunch of zombies are still using Internet Explorer**. Ad companies want to earn money on these people too!

## How we load the Library

Imagine we load our library with this `script` tag:

```html
<script src="/path/to/Library.js" async defer></script>
```

`async` means that the browser will download the library as soon as possible, but the evaluation will start whenever it is more convenient (the browser decides). The HTML parser is paused when the script is evluated. `defer` means the same thing (more or less!) but the code execution happens only after the DOM has been loaded. [More info here](https://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html "async vs defer").

By inserting the `async` and `defer` keyword we don't have any guarantee of the Library execution time, so we don't know who will be loaded first.

## The Library internals

Here's an example of how the Library could initialize itself:

```javascript
//This code could be in file Library.js 
 
var Library = (function() {
  ...
  var queue = []; 
  if (Library) {
    // queue from outside might be null... 
    queue = Library.queue || queue;
  } 
  //here we execute code that is in the queue
  while (queue.length > 0) {
    var command = queue.shift(); 
    command();
  }
  ...
})()
```

First we will check if the `Library` object already exists. This may be because of the initialization we did in the client code. If so, we take the queue object and start executing all commands from the queue, until the queue is empty.

## That's so async, it's actually fast

By not forcing the browser to stop and parse our js, we gain a significant amount of perceived speed. And by splitting the client code in _commands_ we also get the guarantee that the client code will be executed.

In this simple snippet we have not covered other themes like:

* what if we add another element to the queue after the initialization has already completed?
* A way of logging functions (yes, we can stringify functions) and remember a history of executed functions

That's an exercise for you, fellow readers!
