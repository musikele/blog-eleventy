---
title: Debug a NodeJS application from command line - it's super easy!
date: 2017-02-08 12:17:15
paginate: true
comments: true
author: musikele
layout: post
---
If you want to seriously develop a nodejs application, you can't continue to put `console.log()` statements everywhere. It's just a pain! That's why every modern language has debug support via various tools.

In NodeJS debugging can be also done via command line - it's not _point n' click_, but it's still easy and straightforward.

I want tell lies to you, _I debug my applications in a IDE_ :) But if I'm debugging something over `ssh`, this tool comes in hand.

## An example file to play with

Save this file as `book.js` :

```javascript
let book = {
  title: 'NodeJS for dummies',
  ISBN: '1234567'
};

book.title = 'cooking with Trump';
book.category = 'recipes';

console.log(book);
```

## debug!

To run this file you can launch `node book.js`; however, in case you want to **debug** you just add an option:

```terminal
$ node debug book.js 

< Debugger listening on 127.0.0.1:5858
connecting to 127.0.0.1:5858 ... ok
break in book.js:1
> 1 let book = {
  2   title: 'NodeJS for dummies',
  3   ISBN: '1234567'
debug>
```

Let's skip the first two lines, they are just diplayed for nerds.

Nodejs has blocked the execution at line 1 of the file, as you can see from the `>` mark.

> It's best to say now that when NodeJS blocks at a line, the line is **NOT** executed. So, in the example, we are _before_ the first istruction is ever executed.

To continue to the next line, press `n`(next) and hit Enter:

```terminal
debug> n
break in book.js:6
  4 };
  5
> 6 book.title = 'cooking with Trump';
  7 book.category = 'recipes'
  8
```

Now the first line has been executed (the creation of the `book` object); node has now stopped to the next executable instruction.

In this easy example, going from one instruction to another using `n` might be interesting, but complex applications can contain thousands of lines of code, so jumping with `n` is not a great idea. Exit from debug for now.

> To exit from the debugger you can type `quit` or press `Ctrl+C` twice.

We might want to stop at a specific point, for example before setting the `category` attribute to the book:

```javascript
...
book.title = 'cooking with Trump';
debugger; 
book.category = 'recipes';
...
```

if we want to jump directly to the place where the `debugger` instruction is, you can just hit `c` (continue):

```terminal
debug> c
break in book.js:7
  5
  6 book.title = 'cooking with Trump'
> 7 debugger;
  8 book.category = 'recipes'
  9
debug>
```

As you can see the debugger has now stopped at line 7, where the `debugger` instruction was. **It's important to say that `debugger` instruction is ignored when running the application normally**.

Ok, now we know how to stop in a nodejs application, but how can we inspect the value of objects?

just hit `repl`:

```terminal
debug> repl
Press Ctrl + C to leave debug repl
>
```

Now we are in a Javascript console, like the one we have in a browser. we can execute expressions like `var a = 1+3`; the interesting thing is that we have **access to variables defined until the break point**: infact we can inspect our `book` variable and see that ...

```terminal
> book
{ title: 'cooking with Trump', ISBN: '1234567' }
```

...`category` attribute is not defined, since it will be executed later, at line 8.

Using `repl` you can also modify the value of objects, and this is great if you are in a loop and want to go directly to the value that you want, or to simulate complex cases.

To exit from `repl` just hit `Ctrl+C` to return to `debug>` prompt.

## Now you can debug like a boss

Show this to your friends, they'll respect you more after this.