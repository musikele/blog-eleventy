---
paginate: true
comments: true
author: musikele
category: English
layout: post
date: 2019-08-17
tags:
- Javascript
- " Interview"
- " Questions"
title: What is the difference between var, let and const in Javascript
header-img: "/images/proxy.duckduckgo.com-2.jpeg"
description: 'Var is deprecated; let and const are introduced with es6. Let''s see
  how to use them '

---
I did some interviews in the last few days, the role we were searching was "super-duper senior javascript master" so I asked this very simple question as starter:

> What is the difference between `var`, `let` and `const` to declare a variable?

Surprisingly, a lot of js developers do not know the right answer.

![]({{ site.baseurl }}/images/proxy.duckduckgo.com-3.jpeg)

## Var: the first, the oldest, the deprecated

Var is with us since the very first version of Javascript. All major browsers, including Internet Explorer, still and will understand a var declaration forever. So why I say it's deprecated?

Well, when you declare a variable with var, it's declaration is _hoisted_ and the assignment will happen in a separate time. This is unnoticed for most of the time, unless you hit a bug and start complaining. Let's see an example:

```javascript
// ...looks fine, isn't it?
if (!someVariable) {
    console.log("will this execute?") 
    // will throw ReferenceError: someVariable is not defined
}
```

Now refresh the page and run this:

```javascript 
if (! someVariable) {
    console.log("will this execute? and what is the value of someVariable?", someVariable) 
    // apart from console.logs, we only added this line: 
    var someVariable = true 
    console.log("Value of someVariable again: ", someVariable)    
}

//output:
//  "will this execute? and what is the value of someVariable? undefined"
//  "Value of someVariable again:  true"
```

Did you notice that I declared the variable inside the if block? You would expect an error ("dude, your variable does not exist at this moment") instead Javascript will just let you do it. Why?

### Hoisting

Javascript will read your .js file twice. The first time it will **move on the top of the current unction** all `var` declarations, initializing these variables with `undefined`.

The second time it reads the `.js` file, it will now execute the interpreted code.

Based on this, the previous code becomes something like this:

```javascript 
// 
function someFunction() {
  	var someVariable = undefined
  	if (!someVariable) {
		console.log("will this execute? and what is the value of someVariable?", someVariable) 
    	someVariable = true
      	console.log("Value of someVariable again: ", someVariable)    
  	}
}
```

> Note: If the script is executed in a "global" context, you should imagine a "wrapper function" around your code. So variable declarations are moved on top of the file.

Since this _movement of variables_ happen in functions, we can say tha `var` is function-scoped. This code should not surprise you anymore:

```javascript
 if (someCondition) {
 someCondition = false
} else {
  var someCondition = true
}
```

... But when you check the code and see that `someCondition` is true, but the first if block didn't execute,  you'll end in wtf. 

### So, what's the problem

The biggest problem is that this way of thinking of variables is completely different from all other programming languages. **Developers coming from other programming languages will believe that a** `var` **is block scoped, while indeed it's function scoped**. This will take you to weird bugs.

That's why the JS community decided to fix this with ES6 introducing two new variable declarations: **let** and **const**.

## Let

Imagine a world where you declare a variable and it will behave exactly as you thought: it's block scoped, it doesn't do strange movements, and the browser will throw at you the right errors if you forget to initialize. Let me present you ... `let` !

The same code as before will now be more reasonable:

```javascript  
if (! someVariable) {
    console.log("will this execute? and what is the value of someVariable?", someVariable) 
    let someVariable = true
    console.log("Value of someVariable again: ", someVariable)    
}

// : ReferenceError: someVariable is not defined
```

Once the `var` problem is fixed, what if you want to declare an immutable reference to a variable? In the past, doing so in Javascript was weird and included accessing some private properties; now that's a lot easier.

## Const

With const, we can finally declare constant _references_, but what does it mean? Let's see an example again:

```javascript 
const PRICE = 33
const TITLE = 'wonderful title'
const anObject = { a: 'obj property' } 

PRICE=44 // TypeError: invalid assignment to const `PRICE'
TITLE = 'less beautiful title' // TypeError: invalid assignment to const `TITLE'

anObject = {} // TypeError: invalid assignment to const `anObject'
anObject.a = 'new obj property' // no error! 
```

_The last two lines should bring you special attention._ `const` will **freeze the reference**. If the referenced object holds other properties, you can still change them.

## Conclusions

Since Internet Explorer is fading away, the days we can finally get rid of `var` are very close. The problem is that until it is not completely dead we have to transpile our code with `let` and `const` to `var`.

A lot of developers have no idea of why we transpile and what is happening under the hood, and it's a pity because it's my first question when I interview JS senior developers :/
