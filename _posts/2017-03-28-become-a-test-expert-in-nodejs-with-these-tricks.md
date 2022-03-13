---
paginate: true
comments: true
author: musikele
title: Become a test expert in NodeJS with these tricks
category: English
layout: post
date: 2017-03-27T10:55:00+00:00
tags:
  -  testing
  - nodejs
  - async
  - express
---
After reading my first guide to 
<a href="https://michelenasti.com/2017/03/23/node-js-testing-easy-with-mocha.html">testing NodeJS with Mocha</a> you might have grasped the fundamental concepts of NodeJS testing. However, **real word code is usually tested with some other expedients** that you might know to be a better tester (and coder).

## Using an assertion library

In my previous article I wrote how to check the test result: to set a test as failing, you throw a `new Error()` object with the message to show.

This is the naive approach; the default is to use an assertion library. These libraries will expose an API that is clearer and simpler to manage, and will let you test more conditions with less code. Under the hood, they will launch the `new Error()` if the conditions are not respected.

Let's see one of these libraries. One of the most famous libraries is called 
<a href="https://github.com/mjackson/expect"><code>expect</code></a>:
<blockquote>
<p>When you use expect, you write assertions similarly to how you would say them, e.g. "I expect this value to be equal to 3" or "I expect this array to contain 3". When you write assertions in this way, you don't need to remember the order of actual and expected arguments to functions like assert.equal, which helps you write better tests.</p>
</blockquote>

Let's see an example. Here is the test for a `add` function, and the test is contained in file `utils.test.js`:

```
//utils.test.js
const expect = require('expect');

const utils = require('./utils');

it('should add two numbers', () => {
  let res = utils.add(33, 11);

  expect(res).toBe(44).toBeA('number');
});
```

Easier to write, and to reason about. with `expect` you can also check if objects have properties, etc. Have a look on their website to see all aviable methods.

## Testing async code

If you're using NodeJS, or Javascript, you're also probably using async functions. No matter if it's in the form of promises or callbacks, stuff in JS happens async, and we must deal with it.

Let's prepare an example async function:

```
//utils.js
module.exports.asyncAdd = (a,b, callback) => {
  setTimeout(() => {
    callback(a+b);
  }, 1000);
}

```

How do we test it? The first approach we might think would be to write the test like before:

```
//utils.test.js
it('should add two numbers', () => {
  let res = utils.asyncAdd(33, 11, (res) => {
  
    // will this work? 
    expect(res).toBe(44).toBeA('number'); 
  });
});

```

If you launch this example, *the test will pass, but for the **wrong reason***. Infact, Mocha will not wait the result callback an will end the test instantly. Try to break the test or the function... Mocha will say that everything is ok. That's not good.

How can we fix this? Mocha has a super-simple solution, just add a `done` argument to the test callback. When `done` is present, Mocha will not end the test before you call the `done()` function. Let's try:

```
//utils.test.js
it('should add two numbers', (done) => {
  let res = utils.asyncAdd(33, 11, (res) => {
  
    expect(res).toBe(44).toBeA('number'); 
    done();
  });
});

```

Now, if you try to break the test or the function, you'll see that Mocha will fail. Exactely what we want.

## Testing an Express application

It's very difficult for the random developer to write a NodeJS app without using [Express](https://expressjs.com/it/), a framework for web applicatons that allows you to write REST endpoints easily.

How do I test an express application?

the creators of Express have come in help by creating another library called [supertest](https://github.com/visionmedia/supertest):

> HTTP assertions made easy via superagent.

Let's write a simple http application with Express: 

```javascript
//file server.js
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(404).send({
    error: 'Page not found',
    name: 'hello baby'
  });
});

app.listen(3000);
module.exports.app = app; // (1)
```

This simple express app will return a `404` error with a json payload, everytime you navigate to `http://localhost:3000/`. Why? Because there's nothing to see, obviously! :p 

The only point worth of noting is that we simply export the app, as every other node module. Adding this line at (1) does not break anything, and makes testing possible.

To test this app, let's write the test using _supertest_: 

```javascript
//server.test.js

const request = require('supertest');
const expect = require('expect');

const app = require('./server');

it('should return hello world response', (done) => {
  request(app)          // (1)
    .get('/')           // (2)
    //supertest expect!!
    .expect(404)        // (3)
    .expect((res) => {  // (4)
      //expect library! 
      expect(res.body).toInclude({
        error: 'Page not found'
      })
    })
    .end(done);         // (5)
});
```

That's interesting. At (1) we are importing the express app and using `supertest` to wrap it. Then we perform a `get` request over `/` (2) and start expecting things about the result. Unfortunately, supertest has another `expect` method that is not related to the one in the `expect` library. 

By the way, with supertest we can make assumptions about the status code (3), and if we want to assert something about the body of the request, we can do like in (4): when using a callback we can do everything over the `res` variable, and infact we are using the `expect` library to see if the body includes the `error` property. 

Since this Mocha test is async, we need a way to tell mocha that the test has ended. In (5) we see that supertest is already aware of mocha and will stop the test by passing the `done` function to `end()`. 

## Conclusions 

For a novice, the problem of testing Node apps is that there are many libraries the same thing. For an expert, this becomes an advantage: you can choose the best for your purposes (but you must know them in advance). 

By the way, testing is important. Test everything is testable. Otherwise, maintaining javascript code can only be a mess.