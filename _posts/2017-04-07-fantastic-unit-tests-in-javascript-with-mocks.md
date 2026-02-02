---
paginate: true
comments: true
author: musikele
title: Fantastic Unit Tests in Javascript with Mocks
category: Italiano
layout: post
date: 2017-04-07 00:00:00
tags:
  - nodejs
  - testing
  - rewire
  - expect
  - javascript

---
Let's start with the example. We have two files, one that is the main one called `app.js` that exports just one method, called `handleSignup()`:

```javascript
// file app.js
const db = require('./db.js');

module.exports.handleSignup = (email, password) => {
  // ...
  // save the user to the database
  db.saveUser({ email, password });
  // ...
};
```

This `app.js`, at some point, calls the `db.saveUser()` function. Let's see the `db` module:

```javascript
// file db.js
module.exports.saveUser = user => {
  console.log('Saving the user...', user);
};
```

Nothing very special, it's just a demo. Let's go with the important question.

## How do we unit-test app.js?

For those not used to **unit testing**, it **is a way of testing classes atomically**. This means that app.js may depend on other classes, but we will not test these.

Let me be more specific. the `db` module could be really calling a database, this means that if the database connection is not working, the test would fail. OR, if the test is *really* saving a user, next time we launch the test it could be failing because the user is already in the db.

To handle all these scenarios, we will **mock** the `db` module. We will provide a fake implementation of `db` that will reply as we will, every time. This way, *we will be testing only app.js code*.

## But... what if db module has a bug?

You **MUST** test the `db` module, too! However, it's not a good practice to test the `db` module by testing the `app` module.

If you don't test the `db` module, and all of a sudden your test has a bug, how can you say where the bug is? Imagine this in a layer of 10-15 modules... you get the complexity.

However, let me point out that **unit testing alone is not the solution to all of your problems**. Unit testing can test that a single class will perform as specified, but another kind of testing (I call it "integration testing") should be responsible to check that everything is wired correctly.

Here is a famous gif about this concept:![]({{ site.baseurl }}/images/unit-testing-1.gif)

## 1. Before showing the code, let me introduce to you: rewire()

To test `app.js` we need [`rewire`](https://www.npmjs.com/package/rewire), a nodejs module. 

To install: 

```shell
$ npm i --save-dev rewire 
```

`rewire()` works like the `require()` function, this mean that you _could_ use rewire for your applications, even if it does not make any sense. It is indeed very useful in tests. 

When you `rewire` a module, the module is imported _but_ some new methods are added: these are `__get__()` and `__set__()`. Whith these two methods you can retrive any local variable instantiated locally. 

Example: 

```javascript
const rewire = require('rewire'); 

const app = rewire('app'); //like require but...

const db = app.__get__('db'); // will return the db object! 
```

### Rewire has a problem with const

You might be tempted to do this: 

```javascript
...
const app = rewire('app');

const db = { 
  saveUser: () => {...}
}

app.__set__('db', db); //this will not work in this case!
```

Since `db` is declared as a `const` in `app`, `rewire` cannot do the magic: `const` variables in javascript are not reassignable. 

However, even if the `db` object is not reassignable, we can still modify its internals, as long they are declared as `let` and `var`. That's **why we will mock single functions and not the whole object**. 

## 2. Before showing the code, let me introduce to you: expect.createSpy() 

I have already talked about the [`expect`](https://michelenasti.com/2017/03/27/become-a-test-expert-in-nodejs-with-these-tricks.html) assertion library. 

The good thing is, **`expect` has also a way to create mocks - that they call spies**.

What is a _spy_? it's a function that can substitute the real implementation. It can be "trained" to return the value you want, to simulate errors, throw exceptions, etc. 

With spies, you can also check that the function has been called, with the right parameters. 

## TL;DR - Here is the CODE 

```javascript
//file app.test.js 
const expect = require('expect');
const rewire = require('rewire');

let app = rewire('./app'); // (1) 

describe('App', () => {
  //mock
  let db = app.__get__('db');       // (2) 
  db.saveUser = expect.createSpy(); // (3) 
 
  it('should call saveUser with user object', () => {
    let email = 'michele@example.com';
    let password = '123abc';

    app.handleSignup(email, password);

    // (4) 
    expect(db.saveUser).toHaveBeenCalledWith({ 
      email,
      password
    });   
  });
});

```

You should find familiar what happens at (1): we are importing the app module with `rewire`. 

then, we are (2) using the `__get__()` function to retrieve the `db` object from the module. At (3) we are replacing the function `saveUser()` with a spy, created by us. 

The test is created as always; we prepare some input parameters and pass them to `app.handleSignup()`. 

At (4) we can check that the spy has been called for real with the function `toHaveBeenCalledWith` and we can check also that the parameters are the same!

## There's more... 
But that's enough for now! Testing is something I really like, because it can tell you instantly if you're doing something wrong. The overall quality of a project is greatly improved when you test and know how to test.