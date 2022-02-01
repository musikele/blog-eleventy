---
title: Node useful libraries - manage command line arguments with YARGS
date: 2017-02-02 10:45:38
paginate: true
comments: true
author: musikele
layout: post
tags:
  - post
---
When dealing with command line arguments in NodeJS we all know that we have to enquire `process.argv` object. 

This object contains all the strings that compose our nodejs app, so for example 

```terminal
$ node bank.js balance 
```

can be read inside `bank.js` as: 

```javascript
console.log(process.argv) 
/* outputs: 
[
  '/usr/local/bin/node', 
  '/path/to/bank.js',
  'balance'
]
*/
```

That's a simple case, and we know that `process.argv[2]` will contain the "command" provided to our script, `bank.js` (that is also `process.argv[1]`). 

But what if we want to accept parameters like:

```terminal
$ node bank.js sendMoney --recipient="James" 
```

or this:

```terminal
$ node bank.js sendMoney --recipient "James Woods" 
```
 
Well, now the problem is becoming a bit more complex, expecially if we want to handle everything with `process.argv`. Maybe if there's a library that handles all of this... 

## YARGS: the module that handles command line parameters 

[YARGS](http://yargs.js.org) is a npm module that will transform your `process.argv` into a javascript object. It will handle all the special cases, spaces, quotes, arguments, for you. 

Yargs is completely configurable, but its defaults are the best choice for you and your users. 

First, let's install this module and save it in our current project: 

```terminal
$ npm i -s yargs 
```

To use yargs you only have two steps to do: 

```javascript
const yargs = require('yargs');
const argv = yargs.argv; 
```

Now we have an object `argv` with all the properties set to the command line. 

Let's do a quick example: 

```terminal
$ node bank.js sendMoney --recipient "James Woods" 
```

process.argv will show this: 

```javascript
console.log(process.argv);
/* prints: 
[ '/usr/local/bin/node',
  '/path/to/bank.js',
  'sendMoney',
  '--recipient',
  'James Woods' ]
*/
```

While YARGS will return this: 

```javascript
console.log(argv)
/* prints: 
{ _: [ 'sendMoney' ],
  recipient: 'James Woods',
  '$0': 'bank.js' }
*/ 
```

As you can see, now we have a Javascript obect with some properties that resamble what we have passed on the command line. 

- `argv._` contains the program commands, like `balance`, `sendMoney`, etc. 
- `argv.recipient` contains the property associated  with `--recipient="James Woods"`. Note: you can also use spaces, or remove the quotes in case of a single word... Yargs will contain this for you. 
- `argv.$0` contains the name of the js file, in case you need it. 

Easy, isn't it? 

Now you are ready to write your beautiful command line app and be super productive !