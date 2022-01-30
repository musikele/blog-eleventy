---
paginate: true
comments: true
author: musikele
title: The easiest way to understand Javascript Generators
category: English
layout: post
date: 2018-10-29
tags:
- javascript
- es6
- nodejs
- generators
header-img: "/images/81TfpvWrBRL._SL1500_.jpg"
description: 'Let''s have a look at generator functions in JS. '

---
**Generators in Javascript are functions that return an iterator**.

**Generators** are functions declared with the keyword `function*`.

## What do you mean with "iterator"?

The _iterator_ is a design pattern usually already implemented in other programming languages. It is a **data structure that allows you to _iterate_ (read one by one) over the elements of the data structure.**

It might be very easy to think of an iterator for an array (a function that returns every element of the array, one by one), things become more complex if you want to iterate over a graph, or a tree. 

## An Iterator example in plain Javascript (no generators here) 

An iterator obeys to these rules:

* The iterator must return a function that returns an object, containing a `next()` function.
* This `next()` function, in turn, returns an object with two properties, `value` (the actual element of the iteration) and `done` (set to `true` when the iteration has ended, `false` otherwise).
* This function is attached to the property `myObj[Symbol.iterator]` .

Here is an example iterator for an array:

```javascript
Array.prototype[Symbol.iterator] = function() {
	const clone = this.slice(0); // clones the original array
    let i = -1; // iterating index; 
  	return {
    	next() {
        	i++;
        	return {
            	value: clone[i],
            	done: i >= clone.length
            }
        }
    }
}
```

Let's try this in the nodejs console...

```javascript
> let iterator = [1,3,5,7,9][Symbol.iterator]()
undefined
> iterator
{ next: [Function: next] }
> iterator.next()
{ value: 1, done: false }
> iterator.next()
{ value: 3, done: false }
> iterator.next()
{ value: 5, done: false }
> iterator.next()
{ value: 7, done: false }
> iterator.next()
{ value: 9, done: false }
> iterator.next()
{ value: undefined, done: true }
```

I've already discussed this issue in [in another article](https://michelenasti.com/2018/09/04/symbols-iterators-in-javascript.html "Symbols & Iterators in Javascript "); there you'll find other examples and more explanations!

## Iterators are not funny.

Nobody wants to write a functions that returns an object with a next property that returns a value.

That's why the Javascript community has introduced the generators syntax.

A generator is declared this way: `function* myGenerator {}` and this will return an iterator.

Let's rewrite the preceeding example with generators:

```javascript
Array.prototype[Symbol.iterator] = function*() {
  for (let i = 0; i < this.length; i++) {
    yield this[i];
  }
}
```

You know that Promises interrupt the function execution, and when the promise resolves, the flow returns to the point it was left.

**Not only Promises but also Generators can interrupt the execution flow**: when we return a value via the  `yield` keyword, the generator function gets paused until it's called again.

Does it work? 

```javascript
$ node  
> Array.prototype[Symbol.iterator] = function*() {
...   for (let i = 0; i < this.length; i++) {
.....     yield this[i];
.....   }
... }
[GeneratorFunction]
> const iterator = [1,2,3,4,5][Symbol.iterator]() //calling!
undefined
> iterator
Object [Generator] {}
> iterator.next()
{ value: 1, done: false }
> iterator.next()
{ value: 2, done: false }
> iterator.next()
{ value: 3, done: false }
> iterator.next()
{ value: 4, done: false }
> iterator.next()
{ value: 5, done: false }
> iterator.next()
{ value: undefined, done: true }
```

Yes, it works!!!

## But why Iterators are important

JS uses iterators in `for ... of` loops, so if the object after the `of` contains an iterator, you can iterate over all the elements of the object.

```javascript
> // The array here is using the iterator defined before...
> for (element of [1,2,3,4,5]) console.log(element)
1
2
3
4
5
```

It works!

## What else you need to know

`yield` must be in generator functions; you cannot put `yield` in  subfunctions, or in promises results, asyncs, etc.

## Ready to use it ?

Generators are widely supported by all major/modern browsers, **except for IE**.

A not well known JS feature; since it is part of the language specification, the more you know, the more you gain.
