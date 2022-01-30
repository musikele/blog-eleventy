---
paginate: true
comments: true
author: musikele
category: Italiano
layout: post
date: 2019-01-23
tags: []
title: 'Is typescript Namespace feature deprecated? '
header-img: "/images/typescript-cover-image.jpg"
description: 'Typescript: the good, the bad, the deprecated ?'

---
At my new job I maintain a medium-sized typescript library that is critical to the success of the company. 

![]({{ site.baseurl }}/images/typescript-cover-image.jpg)

The guy who wrote the library was not expert in typescript (but he was in ES6) and he needed a way to manage complexity before it was too late; so he rewrote entire parts of the app using **typescript namespaces**. 

## What is a namespace in Typescript

Apart from the fact that typescript actually has a good documentation about [namespaces](https://www.typescriptlang.org/docs/handbook/namespaces.html "Typescript Namespaces"), it is not clear why you would need them in first place. So, a namespace is declared like this: 

```typescript
namespace Validation {
	...
}
```

inside the namespace you can create wathever you need: classes, functions, etc. 

What's the corresponding ES5 output? 

```typescript
(function(Validation) {

    Validation.foo = 123;

})(Validation || (Validation = {}))
```

The magic happens in the arguments: we pass the `Validation` object if exists, otherwise we initialize a new `Validation` object. This way we can add as many object we want to the same namespace without polluting the global scope. 

But ... 

## Is this actually needed? 

You can actually have many files that declare objects and classes in the same namespace: 

```typescript
// typescript: 
// file 1
namespace Validation {
	const foo = 123;
}
// file 2
namespace Validation {
	const bar = 567;
}

//This becomes, in es6:
(function(Validation) {
    Validation.foo = 123;
})(Validation || (Validation = {}))

//file 2... 
(function(Validation) {
    Validation.bar = 567;
})(Validation || (Validation = {}))
```

And in memory `Validation` will contain both `foo` and `bar` properties. 

If these two `Validation` namespace declaration are in two separate files, evaluating  order is important. That's why in Typescript when you use namespaces you also use a custom tag `/// <reference path="Validation.ts" />` to reference the actual ordering of files. But, guess what? **This tag is not supported by Visual Studio Code** - no autocomplete, bitches. 

Apart from this, the problem we faced was **testing**: actually being able to test a namespaced class or function is very important (where is quality if you don't have tests?). We eventually found the combination of importing, module type and typescript setting that would allow us to do this. but it was cumbersome. 

I _think_ that this syntax was developed before ES6 was actually developed, but in my modest opinion **ES6 modules surpassed them in functionality** and are more similar to how we commonly modularize stuff. You should go with ES6 straight. 

## Why ES6 modules are better 

First, an example: 

```typescript
//typescript
export class Validaton { 
	... 
}

//becomes, in javascript:
export class Validation {
	... 
}

//then you can import the class anywhere: 
import { Validation } from '../Validation' 

function checkData(data) {
	Validation.isValid(data)
}
```

Can you see the difference? There is _NO_ difference! Typescript is a superset of ES6 so you have more power in what you can do, but that doesn't mean you should do it. In this case, ES6 solved the problem of modularization for us by doing a good job, so we don't need any namespace at all in common programs (unless you specifically want to use namespaces). 

My rule of thumb: **stick to ES6 the more you can and just add types** to classes and functions. This way the code is readable also by those who don't know typescript. 

The great **benefit** of all this is with **IDE autocompletion** and **error highlighting**. Today I refactored the whole library based only on IDE suggestions, and it was a breeze. Can you imagine doing this in ES6? Impossible. 

## Other people that deprecates namespaces

This [ultra-famous book](https://basarat.gitbooks.io/typescript/docs/project/namespaces.html) about typescript states: 

> For most projects we recommend using external modules and using `namespace` for quick demos and porting old JavaScript code.  

TSLint has a predefined rule to [avoid namespaces](https://palantir.github.io/tslint/rules/no-namespace/). 

The same opinion is found in [many places](https://stackoverflow.com/questions/12737942/does-typescript-support-namespace#comment78314603_12742162) around Stack Overflow: 

> I wouldn't recommended `namespace` nor mixing it with `module` source code.  

## So what

I think namespaces will hit their end-of-life soon, basically they solved a problem that now can be solved with classical ES6 syntax. Even if the import/export keyword is not working in all browsers out of the box, that' the road they are covering so it's just a matter of time and we'll get rid of any other solution we had to manage complexity. 

See you soon! 
