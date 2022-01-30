---
paginate: true
comments: true
author: musikele
title: 'Javascript: call functions without using parentheses (what?!)'
category: English
layout: post
date: 2018-09-19
tags:
- javascript
header-img: "/images/es6.jpeg"
description: 'A nice to know feature, good for impressing others '

---
Let's dig in a not-well-publicized ES6 feature: calling functions without using parentheses.

If you are familiar with Ruby, you know that in Ruby you can omit parentheses when they're not ambiguous:

```ruby
puts 'hello world' 
puts('hello world') 
//-> same result!
```

But we're in javascript and this is not allowed. Uhm... **in some forms it _IS_ allowed!**

## How I've discovered this: SQORN

In my search for new libraries, I found [SQORN](https://sqorn.org/) library. Sqorn allows you to write sql queries in nodejs.

What captured my attention is _the way Sqorn is intended to be used_:

```javascript
const sq = require('sqorn-pg')()
const kid = sq.from`person`.where`age < 13` 
```

What's happening here?! Where are parentheses? **Is this javascript after all?**

## Template strings

You should already know the newest way of declaring a string in JS, like this:

```javascript
const str = `this is a string!`
```

And it is very useful because you can interpolate values inside, witouth concatenating:

```javascript
var name = 'Michele';
//es5
var helloES5 = "Hello, " + name;
//es6 
const helloES6 = `Hello ${name}`;
```

Imagine you have to concatenate 6-7 items in the same sentence... You'll agree the ES6 version is clearer ;)

**The nice part of this string declaration is that you can pass strings as arguments to functions without parentheses:**

```javascript
function hello(name) {
	console.log(`How are you ${name}`);
}

// The convention is to write the string right 
// after the function name...
hello`Michele` 
//-> How are you Michele 

//...but you can put a space too 
hello `Michele `
//-> How are you Michele
```

This syntax doesn't work with `'` or `"`:

```javascript
hello 'Michele'
//-> SyntaxError: unexpected token: string literal
```

## More power to string templates!

Studying this syntax I discovered intresting features. For example, functions can extract the variables (ones in `${...}`) from the template string:

```javascript
var a = 5;
var b = 10;

function tag(strings, ...values) {
  console.log(strings[0]); // "Hello "
  console.log(strings[1]); // " World "
  console.log(values[0]);  // 15
  console.log(values[1]);  // 50
  
  return "Bazinga!";
}

tag`Hello ${ a + b } World ${ a * b }`;
// "Bazinga!"
```

## Conclusion

This stuff is pretty nice but it is a bit obscure. Infact, apart from SQORN, I've never seen this syntax used elsewhere. **It's a nice-to-know feature, good for impressing others, but my suggestion is to use this only if it's the clearest way to express your concepts.**
