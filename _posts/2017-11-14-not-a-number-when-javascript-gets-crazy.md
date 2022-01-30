---
paginate: true
comments: true
author: musikele
title: 'Not-A-Number: when javascript gets crazy'
category: Italiano
layout: post
date: 2017-11-14 00:00:00 +0000
header-img: "/images/not-a-number.jpg"
tags: []
---
Yesterday I was doing some maintenance on a corporate website when I found out that `parseInt()` returns `NaN` if the argument is, well, not a number.

![]({{ site.baseurl }}/images/not-a-number.jpg)

```javascript
> let pippo = parseInt('a')
NaN
```

`NaN` is a constant and stands for `Not a Number`. Javascript uses this for some very default cases, for example if you divide a number by a string, etc.

That's fair. What comes next is funny :)

```javascript 
> pippo == NaN
false
> pippo === NaN
false
```

Even if a variable is `NaN`, you cannot check with the usual operators that it is `NaN`.

```javascript
> pippo == pippo
false
> pippo === pippo
false
> NaN == NaN
false
> NaN === NaN
false
```

Things start to get crazy. As you can see, `NaN` is not even equal to itself. You cannot compare anything to `NaN`, because `NaN` is not equal to anything.

## sooooo... isNaN() ?

There is a function called `isNaN()` and it's the only way to detect a `NaN`.

```javascript
> isNaN(pippo)
true
> isNaN(3)
false
> isNaN('bau bau micio micio')
true
```

This function seems to resolve our problems: it detects _not_-numbers, and infact a string is considered `NaN`.

```javascript
> isNaN(undefined)
true
> isNaN(null)
false
```

I see your face 😆 Where is the logic?

`isNaN` tries to convert the argument to a number, using the constructor `Number()`; if the argument cannot be converted, `NaN` is returned.

In the case of `isNaN(null)`, this is what happens:

```javascript
isNaN(null) // Number(null) ==> 0 
> false 
```

Ha ha, `Number(null)` returns zero??? Welcome to javascript 😎 This would require a bigger explanation, however JS does a type cohercion trying to compare things. It is described [here](http://www.ecma-international.org/ecma-262/5.1/#sec-9.3) (warning: it's a spec, the first 10 lines are understandable, then it's a mess).

Of course,

```javascript
null == 0
> false
```

🙂

Just to add the last bit of discoveries around `NaN`:

```javascript
Number(null)
> 0
parseInt(null) 
> NaN
```

## There is another isNaN() around

The Javascript `Number` object also has a `isNaN` method, that is way more conservative:

```javascript 
> Number.isNaN(3)
false
> Number.isNaN('3a')
false
> Number.isNaN('abc')
false
> Number.isNaN(undefined)
false
> Number.isNaN(null)
false
> Number.isNaN(NaN)
true
```

It will return `true` only for `NaN`.

## Stop this! It's a mess!

Ok, let's end with a song:

```javascript
console.log(`${10/'a'}a${ 10/'b'}a${ 10/'c'}a${10/'d'}a ${10/'e'}a${10/'f'}a${10/'g'}a${ 10/'h'}a Batman!`)
//NaNaNaNaNaNaNaNa NaNaNaNaNaNaNaNa Batman!
```
