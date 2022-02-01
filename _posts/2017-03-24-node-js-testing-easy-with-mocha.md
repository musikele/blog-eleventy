---
paginate: true
comments: true
author: musikele
title: Easy testing of NodeJS applications with Mocha
layout: post
date: 2017-03-23 18:13
tags:
  - post
- Javascript
- Nodejs
- Testing
- Mocha
categories: English
---
Testing in Javascript has become an immensely popular argument, but still there's a lot of people that has not clear how to do it effectively. [I was one of these]({% post_url 2016-08-30-my-very-personal-javascript-fatigue %}). There are many troubles that a young developer has to overcome in order to master Javascript testing. In this article, I'm going to explain Javascript testing with Mocha, a powerful library.

## Why testing in Javascript

An easy example. You write a function that takes only one argument, and use it extensively. After some days, you modify this function to take two arguments.

Obviously you try to find every place where this function is called and add the missing parameter. Since the scripting nature of the language, how can you tell that this modification did not break anything? How to discover rapidly what to fix? Are users our only testers?

## Setup the example

Let's write a simple Node test file. Let's call it `utils.js`, a file where we put all the functions that do not fit in a specific module.

```
module.exports.add = (a,b) =&gt;  a + b;
```

That's it! Let's test this function. Is our sum function really doing its job?

## Setup the test

First, let's install 
<a href="https://mochajs.org"><strong>Mocha</strong></a>. This is easy as launching

```
$ npm install --save-dev mocha 
```

Let's modify our `package.json` (you did run `npm init`, didn't you?) to add a new task:

```
"scripts": {
    ... 
    "test": "mocha **/*.test.js"
  },
```

Mocha will be installed as a *development dependency*, this means that it is not necessary to run our code. Some deployment systems (like Heroku) will not download these dev dependencies.

As you can see, the `test` command will execute all files in every directory ending with `.test.js`. This is incredibly fast.

Let's create in the very same directory where we put `utils.js`, another file called `utils.test.js`.

Here is the test code:
```
const utils = require('./utils'); //(1)

it('should add two numbers', () =&gt; {   //(2)
  let res = utils.add(33,11);
  if (res !== 44) {
     throw new Error(`Expected: 44, but got ${res}`); //(3)
  }
});
```

And now you can simply run `npm test`. you should see an out like this:

```
$ npm test

&gt; node-tests@1.0.0 test /Users/michelenasti/Doc
uments/node-tests
&gt; mocha **/*.test.js



  ✓ should add two numbers

  1 passing (13ms)

```

## What's going on

Our tests are run directly by Mocha, that's why we don't import the library in this function.

Mocha provides us a function called `it()`. You might notice this function at (1). It takes two parameters: a description of the test, and a function with the code to execute.

In the JS community tests are usually written in a *Behaviour Driven Development* paradygm, this is a complex notion, for now let's just say that test description starts with "*should ...*". I'll write more in the future :)

The second argument passed to `it()` is a function with the actual test code. Here we call the function under test, take the result and check the correctness.

How Mocha decides if a test has passed or not? If no errors are thrown in our test code, then the test is marked as passed. On the other side, if an `Error()` object is thrown, the test will stop and the message of the `Error` is printed to the terminal.

*Exercise for you: modify `utils.js` to let the test fail :)*

## Do JS developers throw errors to test their functions? 

No, in reality JS developers NEVER throw Errors. Usually in JS we use some other libraries to *assert* some properties on the result, using functions that are more expressive. We will talk about this aspect in another post. However, I think that seeing how tests work without assertion libraries is _fundamental_ to use such libraries. 

## Last but not least 

Do you want your test to run automatically everytime you change some file? Of course you can, mixing some code coming from a previous post ([nodemon](https://michelenasti.com/2017/01/31/develop-faster-in-nodejs-with-nodemon.html)).

In `package.json` add the script `test-watch`... 

```javascript
"scripts": {
   "test": "mocha **/*.test.js",
   "test-watch": "nodemon --exec \"npm test\""
  },
```

Happy testing!