---
paginate: true
comments: true
author: musikele
title: Handling configuration for multiple environments in NodeJS
category: English
layout: post
date: 2018-07-22
tags:
- nodejs
- configuration
- laravel
header-img: "/images/conifer-daylight-environment-454880.jpg"
description: 'A Laravel-style configuration sytem for NodeJS. '

---
Imagine you have a NodeJS app you're writing, and this app runs on several different environments:

* on your **developer** PC, it should use some environment variables (e.g. database connection to _localhost_, port to use _3000_...)
* when you push your code you may want to run some continuous integration & deployiment on a **test environment**, so you have to configure new environment variables: database now points to _192.168.xx.yy_, port is _8000..._
* Finally, on the **production environment** you use the official values for these configuration.

How do you handle this? There are several ways to accomplish this task, I wanted to replicate the simple, easy solution provided by _Laravel_ in **NodeJS**.

## How does laravel config works

In [Laravel](https://laravel.com/docs/5.6/configuration) you create as many env files you want, for example:

* `.dev.env`, that contains configuration for development environment
* `.test.env`, for test environment
* `.prod.env` for production
* Then there's a last file called `.env` that contains a single variable:

  `APP_ENV=dev` (or test, or prod).

We're in NodeJS, how do we simulate this behaviour?

## a Node solution

First, our configuration files are js files:

* `.development.js`
* `.test.js`
* `.production.js`

Naming of files has changed a little bit, we'll see why in a while.

Let's see the content of the .development.js test file:

```js
//.development.js 

module.exports = {
    API_URL: 'api_url',
    API_KEY: 'api_key',
    SECRET_KEY: 'secret_key'
}
```

`.production.js` and `.test.js` will contain an object with the same keys but different values.

## The environment variable NODE_ENV

Since Express became the most popular application server in Node, the NODE_ENV variable has became popular too. In Express, [app.get('env') is used to retrieve the execution environment](https://stackoverflow.com/a/16979503/1020090). Many popular platforms, like Heroku, set this variable to `production` and you can also change to your needs, too.

`app.get('env')` is pretty much implemented like this:

```javascript
return process.env.NODE_ENV || 'development'
```

So you know that if the variable is not set, it is defaulted to `development`.

Let's write a solution that is not express-dependent.

Here's the configuration.js file:

```javascript
//configuration.js 

const env = process.env.NODE_ENV || 'development'

module.exports = require(`../.${env}.js`) 
```

Based on the `NODE_ENV` variable, we will pick up the right `.js` file.

And now let's test this. Run `node index.js` (should start with `development` environment):

```javascript
//index.js

const configuration = require('./configuration')

console.log('configuration: ', configuration)
// =>  
// configuration:  { API_URL: 'api_url',
// API_KEY: 'api_key',
// SECRET_KEY: 'secret_key' }
```

How to start with other configurations?

Either set this in package.json:

```json
 "scripts": {
    "start": "node index.js",
    "start:test": "NODE_ENV=test node index.js",
    "start:prod": "NODE_ENV=production node index.js"
  },
```

and run with `npm run start:test`; or set the `NODE_ENV` variable directly on the server (docker, heroku, aws... they all allow you to set env variables).

## Some security concerns

This approach is very easy to use but you should not versionate `.production.js` file, as it will contain sensitive data. In your build process consider injecting this file from some other secure location.

An alternative could be to use environment variables only for the production file:

```js
//.production.js 
module.exports = {
    API_URL: process.env.API_URL || 'some_value' ,
    API_KEY: process.env.API_KEY,
    SECRET_KEY: process.env.SECRET_KEY,
    ... 
}
```

The good thing about this approach is that you can even mix the two things or swap them altogether.

Happy coding with your configurations ;)