---
paginate: true
comments: true
author: musikele
title: What I learned by writing my first npm module
category: English
layout: post
date: 2018-11-17
tags:
- javascript
- nodejs
header-img: "/images/index.png"
description: 'I wrote a little browser npm utility just for fun, but the process from
  code to npm is not so straightforward. Let''s have a look at all my mistakes and
  discoveries. '

---
Last weekend I wrote a simple module that converts a Javascript array in a HTML table. It's called [Html Table Builder](https://www.npmjs.com/package/html-table-builder "HTML Table Builder").

It is an exercise from the book [Eloquent Javascript](https://eloquentjavascript.net); also, there are other gazillion modules on NPM that do the same thing with very similar names (a sign that the book is used a lot by javascript learners).

## A little description

The library exposes a js function that accepts a js array and returns a HTML `<table>` object (not string!), so you can attach to the document with `document.appendChild(element)`. Checkout the [documentation on github](https://github.com/musikele/html-table-builder). 

My idea was to release a library that was:

* **fully tested**
* developed with **Test Driven Development**
* **isomorphic** (by using [JSDOM](https://www.npmjs.com/package/jsdom) on node)
* built by **webpack**
* accepts objects with **custom columns**

Many more features have to come:

* apart from the fact that the input must be an array, I don't want to force users to pass array of objects. So you can pass an array containing strings, numbers, etc. even heterogeneous objects, the function will render it somehow.
* I want to generate tables-in-tables, if the object in input is an array containing other arrays. This is tricky to do, I'll have to handle colspans and more.. but not impossible.
* I also have to add css classes to columns (so you can style your tables) 
* ...and add a showcase page. Who's gonna use your library if nobody understand how to use it? 

## I lost a lot of time with...

* **Webpack** - diving inside the webpack configuration to get the library minimized and bundled should be an easy task, BUT our friends in webpack have added thousands of options to configure every single bit.  
  In the end this is [the configuration that works for me](https://github.com/musikele/html-table-builder/blob/master/webpack.config.js):

  ```javascript
  // webpack.config.js
  module.exports = {
    entry: './index.js',
    target: 'web', 
    output: {
      filename: 'html-table-builder.js',
      library: 'HtmlTableBuilder',
      libraryTarget: 'umd'
    },
    mode: 'production',
    devtool: 'source-map',
    externals: {
      jsdom: 'JSDOM'
    }
  };
  
  ```

  The relevant bits to expose the library are in the `output` property; read the [documentation](https://webpack.js.org/configuration/output/#output-library) for it.
* **NPM** - I used npm (tool) to upload my pckage to NPM (site). NPM had some security issues lately, somebody hacked maintainers accounts and released dangerous code in popular libraries. That's why they reset all user passwords and implemented 2FA authentication, that is a good thing. It even works from console. 
  But the main trouble was naming the library. It is a table generator, and you really can't imagine [how many there are](https://www.npmjs.com/search?q=json%20to%20table). Trying to be self-explicative, without sacrificing the "ideal good name", took me to choose a `html-table-builder`. I would have loved to call it `super-table` or `table-generator`, but guess what? Already taken. Sad. 
* **Javascript** - I have a story to tell about JS and dynamic typing. I was writing the function that [extracts the name of the columns](https://github.com/musikele/html-table-builder/blob/master/get-columns/index.js), and in the first version it returned an array of strings.   
  Then I decided to return an array of object and DANG! errors everywhere, fortunately tracked down by unit tests.   
  Then I decided to change again and make it return an object instead of an array, and again only TDD could help me to track down errors.   
  In the end ... **static types could have helped to catch errors without TDD** and I could have used TDD-time to develop more complex tests. 

## What did not give problems 

* **Jest**. Testing with Jest has been _extremely easy_. It was my first experience with Jest (coming from Mocha) but I have never had to checkout the documentation for anything. Good! 
* **ESLint, Prettier** and **VSCode** - These tools resolve stupid issues for you. Just install and forget about them.  They'll add semicolumns, fix tabs or spaces, return syntactic errors live... A good bonus. 

## Finally 

It is a very simple library, but it is already downloaded by 64 users (small number, but _great!_ If you're a user, pass by and let me know your problems). 

I learned a lot of stuff by writing this library; **It took me some 8hrs to work it out**. But it was fun. 

> You remember 5% of what you read, 10% of what you write, 90% of what you do again. 

Exactly what I thought while I was preparing the first release! 
