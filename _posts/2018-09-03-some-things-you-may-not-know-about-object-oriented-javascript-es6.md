---
paginate: true
comments: true
author: musikele
title: Things you may not know about Object Oriented Javascript (Es6)
category: English
layout: post
date: 2018-09-03 00:00:00 +0200
tags:
- javascript
- es6
header-img: "/images/es6.jpeg"
description: 'Features that are very handy in Object Oriended Javascript: getters
  & setters, and static methods. '

---
Hi there! Let's try to create a simple `Group` object, very similar to the [existing `Set` object](https://developer.mozilla.org/it/docs/Web/JavaScript/Reference/Global_Objects/Set) in Javascript. Here's the specification for this Abstract Data Type:

1. It should provide a constructor that creates an empty Group.
2. An object can be contained only once; there cannot be duplicates.
3. It must provide `add()`, `delete()` and `has()` methods.
4. There must be a `length` property containing the number of objects stored inside.
5. Provide a static method that creates a `Group` from an array.

> We'll use this example to explain stuff regarding javascript new `class` keyword introduced in ES6. We will **not** focus on the performance of this class; only on js syntax.

## The constructor

Let's start from the basics. Here's the constructor for this object:

```javascript
class Group {
  
  constructor() {
    this.elements = []
  }
  ...
}
```

The `Group` class has an internal array that will hold the list of objects.

## The has() method

Let's start with the `has` method, because it will be used widely in other methods. This method should check that an element is already in the group. Here's the code:

```javascript
class Group {
  ...
  has(element) {
    return this.elements.indexOf(element) >= 0 ? true : false
  }
}
```

Basically we leave to `indexOf()` the burden of checking if the element is already present in our group.

## add() and delete() method

If an element is not present, `add` should add the element to the group. And of course,  if an element is present, `delete` should... delete.

```javascript
class Group {
  ...
  add(element) {
    if (this.has(element)) return
    this.elements.push(element)
  }

  delete(element) {
    if (!this.has(element)) return
    this.elements.splice(this.elements.indexOf(element), 1)        
  }
  ...
}
```

What's going on in the `delete()` method? We search for the index of the element in the array, then we call the `[splice()](https://www.w3schools.com/jsref/jsref_splice.asp)`[ function](https://www.w3schools.com/jsref/jsref_splice.asp) that returns a new array without the element at the specified index. The second argument is the number of elements to remove.

## "That don't impress me much". Fun begins now: getters and setters

Let's see how to create a _derived_ property in a javascript object. A derived property is a property that changes when another property changes. For example we want to write a derived property to get the number of the elements for the group.

```javascript
class Group {
  ...
  get length() {
    return this.elements.length
  }
  ...
}
```

1. there's the keyword `get` that specifies this property as a _getter_. When we call `group.length` (**note: no parenthesis!**) we get the length of the inner array. We can write very complex stuff in here, and we can access the `length` property as a normal property - the user will not know what's going on internally.
2. There's also the `set` keyword that you can use for setting a property. Here's an example:

```javascript
class Example {
  constructor() {
    this.hidden = 3
  }
  set property(element) {
    this.hidden = element
  }
  
  get property() {
    return this.hidden*this.hidden 
}

const example = new Example()
console.log(example.hidden)
// --> 3
console.log(example.property)
// --> 9, the getter returns the square of hidden
example.property = 4
// now `hidden` is set to 4
console.log(example.hidden)
// --> 4
console.log(example.property)
// --> 16
```

This mechanism is very powerful and you can do a lot of stuff with it. VueJS uses this mechanism to create the Vue object filled with the `data` properties.

## Static methods

Our last piece of exercise is to build a static method for the `Group` class.

A static method are called without instantiating their class and are callable when the class is not instantiated. Let's see an example:

```javascript
class Group {
  ...
  static from(elements) {
	//here we instantiate the object that will be returned
    const group = new Group()
    //for semplicity let's assume that `elements` is an array. 
	for (let elem of elements) {
      group.add(elem)
    }
    return group
  }
}

const group = Group.from(["one", "two", "three", "one"]);
// -> returns a Group 

console.log(group.length)
// -> 3
```

## Finally...

I don't suggest you to program in JS as you would in Java; JS object oriented features in JS are very different compared to other languages. However, if you find that something should be an object, and you end up writing an Object, there two tricks might become handy.

Next time we'll talk about iterators and symbols in Javascript, another nice addition to the language. Stay tuned!
