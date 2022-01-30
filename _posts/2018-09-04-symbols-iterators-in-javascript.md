---
paginate: true
comments: true
author: musikele
title: Symbols & Iterators in Javascript
category: English
layout: post
date: 2018-09-04 00:00:00 +0200
tags:
- javascript
- es6
header-img: "/images/es6.jpeg"
description: 'Let''s have a look at Symbols and iterators in Javascript. '

---
ES6 introduced the new `for ... of` syntax to iterate a collection. Did you know? And how does it work?

```javascript
const arr = ['banana', 'apple', 'orange']

for (const fruit of arr) {
  console.log(fruit)
}
// -> banana
// -> apple
// -> orange
```

### How does it work 

What you are seeing is a syntax that iterates on an **iterator**, a common concept in other languages but fairly new in Javascript. 

Basically, if an object has an _iterator_ you can use the `for...of` syntax to iterate on it. 

### How do we create an iterator? 

To create iterators, we must provide a new property in our object called `Symbol.iterator`. _...what ?_

## What is a Symbol 

a Symbol is a javascript function that returns a value that is guaranteed to be unique. 

```javascript 
const helloSymbol = Symbol('hello')
```

They accept names, to be easily recognized and debugged, but if you create two symbols with the same name, they are not equal: 

```javascript 
const helloSymbol2 = Symbol('hello')
console.log(helloSymbol === helloSymbol2)
/// -> false 
```

### Why do we _need_ symbols? 

First, I've seen a similar concept in other languages, like Ruby. They are useful to define properties (or functions) that are shared across different types of objects. You could use symbols to uniquely identify properties in your maps, for example. 

There is one symbol that has been already created by the Javascript runtime, and it's called `Symbol.iterator`. **If an object has a property named `Symbol.iterator`, it is iterable. 

## How do we create an Iterator for our objects

To create an iterator the first thing to do is to attach the property: 

```javascript
class Example {
  [Symbol.iterator]() {
    ...
  }
}
```

As you can see, this is a legitimate name for a property. Infact, **allowed names for properties are strings and symbols**. 

The only caveat is that we have to use the square brackets to define the property name, since it is an object. 

The iterator must return a function that returns an object, containing a `next()` function. 

This `next()` function, in turn, returns an object with two properties, `value` (the actual element of the iteration) and `done` (set to `true` when the iteration has ended). 

Confused? 

### Example 

Do you remember the `Group` class we [designed in the last article](https://michelenasti.com/2018/09/03/some-things-you-may-not-know-about-object-oriented-javascript-es6.html)? Basically it is a Set object with another name. It holds just one copy for every object (duplicates are not allowed) and we use a simple array to store data inside. Let's write an iterator for it! 

```javascript

const Group {
  ...
  [Symbol.iterator]() {
    // a reference of internal elements...
    const elements = this.elements;
    if (elements.length === 0) return; 
    //the index we'll use to track the next element to return
    let i=-1;
    return {
      //we return a next() function that will be called many times, 
      //once for every element in the Group 
      next() {
        i++;
        //the next function returns an object with two properties
        return {
          //in value we store the actual element we're returning 
          value: elements[i],
          // if true, the iteration stops 
          done: i === elements.length ? true : false
        }
      }
    }
  }
}

//Some tests! 
// You find the code for the Group class in the previous article ;) 
for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c
```

....And this is how we create iterable objects in Javascript. 

Easy, isn't it? 

Just to let you know, (don't know if it's useful..) `String` is iterable, so you can write this:

```javascript 
const hello = "Hello" 
for (const letter of hello) {
  console.log(letter)
}
// -> H
// -> e
// -> l
// -> l
// -> o
```

See you in the next iteration! 