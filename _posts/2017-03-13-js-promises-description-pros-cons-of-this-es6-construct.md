---
paginate: true
comments: true
author: musikele
title: 'JS Promises: description, pros, cons of this ES6 construct'
category: English
layout: post
date: '2017-03-12T13:06:29+00:00'
tags:
  - post
- javascript
- es6
- promises
---
I hope that you have done some kind of exploration with Javascript, NodeJS and asynchronous constructs right now.

To recap: when you wait for an async operation to handle the result, for example in NodeJS when we read a file, we do this:

```javascript
const fs = require('fs');
fs.readFile('filename.txt', (err, data) => {
   if (err) throw err; 
   //now you can use the data object 
   ...
});
```

This is the standard, classic way of handling asynchronicity in NodeJS and Javascript.

In the last few years a new approach has come to rise, first from outside libraries, then as part of ES6 language: **Promises**.

![]({{ site.baseurl }}/images/promise.jpg){:style="float: none;"}

_Not me in the photo. This is the Italian way to promise. I love his way of looking guilty. _

## I promise that I will give you the result

I don't want to talk about the history of promises, because like everything in JS Promises have a complex story coming from many libraries doing the same thing, with different syntaxes and patterns.

However ES6 has standardized this, and now we have a fantastic `Promise` object. Let's see how to use it.

The following snippet will create a Promise that waits 2,5 seconds and then sends a message `Hey. it worked`:

```javascript
let somePromise = new Promise((resolve, reject) => { //1
  setTimeout(() => {
    // only one can be called and only once 
    resolve('Hey. it worked');                      //2
    //reject('Unable to fulfill promise');          //3
  }, 2500);
}); 

somePromise.then(                                   //4
  (message) => {
    console.log('Success: ' + message);
  }, 
  (errorMessage) => {
    console.log('Error: ', errorMessage);
  }
);
```

My definition of promises: **a `Promise` is a wrapper object that you use to encapsulate a function that might return a value in the future**.

We declare a promise as showed in (1): `new Promise()` with a function inside.

This function takes two arguments that are two other functions, usually called `resolve` and `reject`. So the full specification is `let somePromise = new Promise((resolve, reject) => {...});`.

How do you use these two parameters? `resolve` (2) is a function used to return a value, when the function ends normally (e.g. reading a file, you get the content of the file and return to the caller); `reject` (3) is used when you encounter a problem (e.g. you couldn't read the file).

There are some bonds on using Promises:

*   you cannot call both `resolve` or `reject`in your code. As soon as one of the two functions gets called, the promise stops.
*   if you don't call any of the two functions, the promise will hang.
*   you can only pass **one** parameter to `resolve` or `reject`. If you have more stuff to pass, wrap everything in an object.

Ok, now we have defined a promise. How do we use it? An example is shown in (4): we just call the promise and then use the `then` method to use the response.

`then` can take two functions as arguments:

*   the first callback is called when the promise ends correctly, with the value contained in `resolve`
*   the second callback is the _error handler_, so you might want to use it when you want to get data from the `reject` function.

## Chaining promises

This approach is nice, but the true power comes when you can `chain` many promises one after another.

The following code shows a function `asyncAdd` that adds two numbers after 1,5 seconds. I bet your calculator is faster. It does however some checks on the type of `a` and `b`, to be sure they are numbers.

```javascript
let asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a + b);
      } else {
        reject('Arguments must be numbers');
      }
    }, 1500);
  });
};

asyncAdd(5, 7)                         // (1)
  .then((result) => {                  // (2)
    console.log(result);
    return asyncAdd(result, '33');     // (3)
  })
  .then((res) => {                     // (4)
    console.log('Should be 45:', res); 
  })
  .catch((errorMessage) => {           // (5)
    console.log(errorMessage);
  })
```

**Quiz**: what does this code print? (Answer below)

In (1) we are evaluating the first sum. **Then** (2) (_Look how it is semantically fantastic to express this concept in plain English!!!_) we write the result to console, and return another operation (3): we add the result to the number '33' (**note! it is a string!**).

Since we are returning a function that returns a promise, we can chain the two promises with another `then()`.

We didn't write the second `then` callback, because we have used the `.catch()` method. We will explain this in a second.

In the second `then()` (4) we would print the result of the total sum.

Lastly, in (5) we have the `catch` block. In the previous paragraph we were saying that you can handle errors inside every `then`, but if you chain many `then` together and the first one fails, the others are still executed. Usually you don't want this, because the next `then` depends on the result of the previous.

So, if you just want to stop an operation at the first error encountered, you can use a single `catch()` block at the end: whatever promise will fail, be it the first or the last, the `catch` block will be called to handle the failure. So easy to reason about.

(Sorry, no answer for the quiz... run it and see!)

## Conclusions

A promise is a new construct that, after some practice, becomes a powerful tool for your async constructs.

The advantages are that you don't have to write anymore nested callbacks with a lot of indented code, that is often complex to reason about, and to handle errors.

The disadvantage is that there is much more than what I wrote in this article, about promises, that covers every possible edge case that naturally occours when you work with async code. However, what you read here should cover 80% of your needs.

You can transform every callback in a promise; many NodeJS core developers don't like promises at all, and use only callbacks. Popular libraries in NPM use one way or the other to deliver results, so you might be forced to use one or the other approach based on this.