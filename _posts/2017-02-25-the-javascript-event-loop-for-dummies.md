---
title: The Javascript Event Loop for dummies
date: '2017-02-25 11:29:00'
paginate: true
comments: true
author: musikele
layout: post
tags:
  - post
- javascript
- async
- event loop
permalink: the-javascript-event-loop-for-dummies/
category: English
---
What does it mean that Javascript has no threads?! What is the event loop and how it is related? How can JS be even considered a modern programming language?! Let's find out the surprising truth about this stuff.

![An event loop. The dancer is not included.]({{ site.baseurl }}/images/o_weighted_hula_hoop-1.jpg)

## Quiz: what's going on?

Let's consider this small javascript program. What will be printed?

```javascript
console.log('Starting app');

//first block 
setTimeout(() => {
  console.log('First setTimeout');
}, 2000);

//second block 
setTimeout(() => {
  console.log('Second setTimeout');
}, 0);

console.log('Finishing app');
```

In case you don't know: `setTimeout` is a javascript global function used to fire an action (the first argument) when the delay (second argument) is elapsed.

So the first `setTimeout()` block will wait two seconds and then will write `First setTimeout` on console.

The second block will wait 0 milliseconds (... it doesn't wait at all!) and then write `Second setTimeout` to the console).

Back to the quiz... what is the expected outcome?

<table>

<thead>

<tr>

<th>#1</th>

<th>#2</th>

<th>#3</th>

<th>#4</th>

</tr>

</thead>

<tbody>

<tr>

<td>Starting App  
First setTimeout  
Second setTimeout  
Finishing app</td>

<td>Starting App  
Second setTimeout  
Finishing app  
First setTimeout</td>

<td>Starting App  
Finishing app  
Second setTimeout  
First setTimeout</td>

<td>Starting App  
Second setTimeout  
First setTimeout  
Finishing app</td>

</tr>

</tbody>

</table>

What's your choice? Don't scroll down and think a little bit...

Hey, you could just paste this code in your browser's console to discover that ... the right answer is **#3**.

This behaviour may seem surprising but is perfectly legit.

Why?

## what is really happening under the hood

Let's start with a Dogma: **in Javascript there is just one thread**. (_This is not correct anymore, because in the last years a new technology called `Service Workers` has become available; but it is not important for now._) Everything is always executed in the same thread, even events that happen asynchronously.

So what happens when an asynchronous event happen, like the `setTimeout`?

`setTimeout` is a good example of an asynchronous event. Expanding the reasoning, this can be a reading of a file, or receiving a packet over the network. The philosophy doesn't change.

Bearing this in mind, let's return to the basis.

*   The first `console.log()` is printed: `Starting app`

*   The first block is evaluated:

```javascript
//first block 
setTimeout(() => {
  console.log('First setTimeout');
}, 2000);
```

This code says: _after 2000 milliseconds, trigger the function specified as first argument_. Since `() => { ... }` is a function, this is put in a **callback queue** ready to get fired when the conditions occur.

*   The second block is evaluated:

```javascript
//second block 
setTimeout(() => {
  console.log('Second setTimeout');
}, 0);
```

Another explanation. This code says: _after zero milliseconds, fire the function specified as first argument_. One would expect to be fired instantly, but this does not happen: The function is put in a **callback queue**, and when NodeJS believes the conditions are respected, the function is fired.

Node cannot fire the function NOW because there's other javascript code being executed in the stack: it's the _main program_, the one that starts with the first `console.log()`. Think of this as a being wrapped inside a function; nodeJS is evaluating **this** function and cannot evaluate others.

*   The last `console.log()` is evaluated and `Finishing app` is written to console.

*   NodeJS controls the call queue and decides what to fire. There are two functions in the call queue. It's NodeJS's responsibility to select the right one: since the second `setTimeout` had a higher priority, it will be fired first: you'll then see `Second setTimeout`.

*   Node will pop the previous function from the stack and will check again the callback queue. This time it will select the first block `setTimeout` callback, and will print `First setTimeout`. Then, Node will pop this last function from the stack, and when it realizes that nothing more can be executed, the program will end.

### What happens when you read data from a file or receive a response from the network?

The behavior is the same! Node will put your callback function in the callback queue, and it will be called as soon as possible.

### The advantages of this

The main advantage is that **the CPU will not stop when waiting for an I/O event**: it will just put the callback in the queue, and Node will execute the next available function. This means that one single CPU can handle more traffic and a greater number of concurrent connections; it is not limited by the number of threads a server can handle (because there is just one thread).

### The disadvantage

The first disadvantage is that **programming with async in mind and with callbacks is profoundly different** from the past: it is more difficult to reason about and to debug, at start. However, once you truly understand the philosophy and the way it works, you'll never want to come back again.

## So? What you suggest?

Node.js is a great idea made simple: a complex use case solved smartly. **Learning Node will help you become a better programmer**, and this applies even if you work with other languages.

I can only suggest you to google *NodeJS vs XXX performance", change XXX with whatever you want... You'll find that [an interpreted language, with no tweaks, is faster than well-established platforms](https://dzone.com/articles/performance-comparison-between) (Caution: old article! but the main points still hold) with years of optimization.