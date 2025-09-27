---
layout: post
date: 2025-09-26T22:00:00.000Z
title: Logical assignments in Javascript
headerImg: /images/04cd7f8e-bd22-42dc-9b4a-c7677cde534a.png
description: |
  Let's discover three logical assignment operators: `&&=`, `||=`, `??=`.
tags:
  - javascript
permalink: /logical-assignment-operators/
---

I just recently found out that a new syntax - well, 3 new syntaxes have been added to Javascript. Also, they are already supported by all relevant browsers. So, let's dive in!

## Operator &&=

Suppose you have this snippet:

```javascript
if (data.template) {
  data.template = data.template.id;
}
```

which actually means: "if a property is set, assign to that property something else".

Well, this 3-lines code can be re-written in:

```javascript
data.template &&= data.template.id;
```

## Operator ||=

Before we used to all write:

```javascript
if (!data.callbacks) {
  data.callbacks = [];
}
```

Now we can write:

```javascript
data.callbacks ||= [];
```

This means: assign to left what is on the right, if the property on the left is "falsy".

Caveat: what does it mean "falsy" in Javascript? Here's the list: null, undefined, false, NaN ([this is a veeery special value](https://michelenasti.com/2017/11/14/not-a-number-when-javascript-gets-crazy "Not-a-number: when javascript gets crazy")), 0 and -0, "" (empty string) and document.all ( this i just found out now).

the problematic values here are 0 and "". Sometimes, these values are totally legit and we want to consider them as "truthy", not "falsy". That's why we have operator number 3:

## Operator ??=

This ??= operator is like ||=, but it sets the variable only if the left side is null or undefined.

```javascript
let obj = { value: "" };
obj.value ??= "default";
console.log(obj.value) // prints "" 
```

***

Hope you liked these 3 new operators! These are the syntactic enhancements that makes us feel muuuch more productive. Nothing you could not do before, with good old ES3. But writing less, and more elegant code seems a win for many programmers. Bugs will still be there, but now they'll look fancier.
