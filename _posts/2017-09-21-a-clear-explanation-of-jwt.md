---
paginate: true
comments: true
author: musikele
title: 'JWT: what is it? How does it work? Why should we use it?'
layout: post
tags:
- authentication
- jwt
categories: English
date: 2017-09-21 00:00:00 +0000
---


In this post I'm going to talk about an authentication "protocol" called JWT, that allows to secure an API so that only authenticated users can use some requests of your API. And more importantly, a user cannot impersonate another by changing something in the request, so we can be reasonably certain that a user is who claims to be.

However, to understand JWT, we must step back and talk about hashing functions.

<!--more--> 

## Hashing: a one-way transformation function

JWT is universal, it will be easy to grasp the concepts in any language you like, but I'll use NodeJS for this post.

Create a new Node project anywhere you like. We will use this project to do our experiments. In order to use hashing functions in Node, create and enter a new directory, and install `crypto-js`:

```bash
$ npm i --save crypto-js
```

Now, let's create a new file, `hashing.js` and fill it with this:

```javascript
const {SHA256} = require('crypto-js')

let message = 'I am user number 3'

let hash = SHA256(message).toString();

console.log(`Message: ${message}`)
console.log(`Hash: ${hash}`)
```

Let's run this file. What will we get?

```bash
$ node hashing.js 
Message: I am user number 3
Hash: 9da4d19e100809d42da806c2b7df5cf37e72623d42f1669eb112e23f5c9d45a3
```

What's happening here? We are importing the function `SHA256`, that is one of the strongest hash functions we know for the moment, with mathematical proofs, etc. 256 is the number of bits of the hashed message.

Basically, the `message` text will be converted in a new string of just 256 bits, and this string has some unique properties:

* the same message will always receive the same hash.

* If you change just one character from the `message` string, you get a completely different hash.

* The probability that two different strings get the same hash is definitely low.

* It's impossible to get the original message back.

Curious? I won't lie to you, security is one of the hottest themes in computer science; this stuff is hard, btw we are just using it and the three points before should be sufficient for you to understand.

## When to use a hash

You might use Hashes in a lot of different situations; we will use them in **authentication**, but another famous use case is to store passwords in your database. [Bitcoin also uses hashes to mine new bitcoins (italian)]({{site.baseurl}}/2017/09/19/come-capire-il-bitcoin-le-funzioni-crittografiche.html).

Passwords should never be stored as plaintext, because users have this bad habit to use the same password everywhere (I guess you don't, do you?).

So, when a user logs in your system, you should hash their password, and see if it matches the one stored on the db.

To increase security, always use HTTPS too.

### Back to our hashes

So the user has logged in. Now we want to provide them with a token that certifies that they are who they say they are. What can we do?

It's not so safe to send the password over and over; an attacker could steal it by listening to the network calls (man in the middle attacks) or by just hacking the client, or the server.

The safest way is to provide them with a **token**. A token is a piece of data (a json, obviously) with some authentication data we need. We give this token to the client, and he will send it back to us with every request.

So let's create a json object with the user' ID:

```javascript
let data = {
    id: 4
}
```

We obviously don't want that the user can change their ID with some other ID, for example the admin ID. So we can create a new object called `token` that contains the data and the hash of the data:

```javascript
let data = {
    id: 4
};

let token = {
    data, 
    hash: SHA256(JSON.stringify(data)).toString()
}
```

We now have a token, but ... if the user tamper the data, he can just recalculate the hash and he won.

### Salting the HASH

How can we prevent that the user won't tamper the data? The most used technique it's also the simplest: we just concatenate a string, called **salt**, that in our case is a secret password.

So the previous example would be something like this:

```javascript
let token = {
    data, 
    hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
}
```

Wait, but what if the user knows the salt? **They shouldn't!** Once they're logged in, you send them this *token* signed with the *server's salt* and you can be sure that the client cannot recreate the hash back again.

## Don't reinvent the wheel: Json Web Token

We could write all the edge cases, but that would be a lot of work. Instead, there's a library that does just  this, **JSON Web Token** (JWT): it has becomed a de-facto standard for authentication tokens, even if not all the web loves it.

Let's install it:

```bash
$ npm i --save jsonwebtoken 
```

With this package we get two functions: one to **create** the token (`sign`), and another to **verify** (`verify`).

So let's create a new file (we are not going to need the previous stuff anymore) and start over.

```javascript
const jwt = require('jsonwebtoken')

let data = {
    id: 10
};

let secret = '123abc'
let token = jwt.sign(data, secret)
console.log(token)
```

And this becomes:

```bash
$ node jwtExample.js 
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImlhdCI6MTUwNTk4MjUxOX0.w
DMat521KBdCoTj0XiqYcHxLkTblN01C9v8y26pEtl8
```

this is different from the hash we presented before: it is divided in three blocks, and it's clearly bigger. What's going on?

Let's copy this string and go over [jwt.io](http://jwt.io), where you'll see a cool tool that will explain the JWT: paste it in the left side.

* We see the **header**, that contains the algorithm used the type of token issued;

* we see the **payload**, that contains our original data along with a new property called `iat`(*Issued at*, the time this token was created);

* and finally we see the **verify signature** that will allow us to inser the secret and verify that the token is right. Try to insert our `secret` (`123abc`) and the verification box will change to *Signature Verified* ;)

![screenshot of JWT website]({{site.baseurl}}/images/jwt.PNG)

### Verify that the token is valid

Very very easy:

```javascript
//add this to the preceeding script 

let decoded = jwt.verify(token, secret)
console.log('decoded', decoded)

```

output:

```bash
$ node jwtExample.js 
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImlhdCI6MTUwNTk4MjUxOX0.w
DMat521KBdCoTj0XiqYcHxLkTblN01C9v8y26pEtl8
decoded { id: 10, iat: 1505982519 }

```

And if we try to change anything in the token, or in the secret, we get a javascript Error back:

```javascript
//change the secret to fail the validation  

let decoded = jwt.verify(token, secret+'blah')
console.log('decoded', decoded)

```

output:

```bash
$ node jwtExample.js 
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTAsImlhdCI6MTUwNTk4MjUxOX0.w
DMat521KBdCoTj0XiqYcHxLkTblN01C9v8y26pEtl8

/mnt/c/Users/miche/Documents/code/node-udemy/node-todo-api/node_modules/js
onwebtoken/verify.js:32
      if (err) throw err;
               ^
Error
    at Object.module.exports [as verify] (/mnt/c/Users/miche/Documents/cod
e/node-udemy/node-todo-api/node_modules/jsonwebtoken/verify.js:107:17)
    at Object.<anonymous> (/mnt/c/Users/miche/Documents/code/node-udemy/no
de-todo-api/playground/hashingJWT.js:11:19)
    at Module._compile (module.js:573:30)
    at Object.Module._extensions..js (module.js:584:10)
    at Module.load (module.js:507:32)
    at tryModuleLoad (module.js:470:12)
    at Function.Module._load (module.js:462:3)
    at Function.Module.runMain (module.js:609:10)
    at startup (bootstrap_node.js:158:16)
    at bootstrap_node.js:598:3

```

Not very clear, but once you know, you'll catch it.

### Conclusions

In the past years I have dealt with authentication checking *on database* if the user was logged.

Think about it: for. every. request. How much delay we introduced? Could we scale? Obviously not!

With JWT the database is not needed anymore (at every request), because we can stay safe that the user has not tampered data and because we know when the token was issued, so we can decide to block the authentication after, you say, 24 hours.

> **UPDATE**: it seems that you might need the database however, with different strategies depending on your needs. Check out the comments thread, and thanks to [Stas Kaufman](http://disq.us/p/1mremix) for pointing this to me. However, i believe JWT can scale better than session tokens: think of a 2 million users logged in to a cluster of servers. You loose some things but you earn scalability. 

Now you can handle as many users you can, thanks to hash functions and JWT!

*This post would have never existed without the brilliant course by [Andrew Mead about NodeJs](https://www.udemy.com/the-complete-nodejs-developer-course-2/). Check it out.*