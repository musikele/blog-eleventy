---
title: 'Tool of the week: Develop faster in NodeJS with Nodemon '
date: 2017-01-31 09:56:51
paginate: true
comments: true
author: musikele
layout: post
tags:
  
---
Are you frustrated when you hit an error in your NodeJS application because, after a crash, you have to restart it? Do you want to _immediately_ see the app restarted when you change a file? With **Nodemon** this will never be a problem again.

When you start a NodeJS application, you usually do something like this:

```shell
$ node app.js 
```

but what if the app crashes? What if you change the content of a file? we must return to the terminal and start it again! What a waste of time!

Yes, I know that node applications start in a heartbeat. But... we still have to ALT-TAB to the console and restart :/

<img src="/images/nodemon.svg" alt="nodemon logo">

That's what [_nodemon_](https://github.com/remy/nodemon) is for. It will restart the app for you in case of crashes of file changes.

Simply install it globally

```shell
$ npm install -g nodemon 
```

and start your applications with nodemon:

```shell
$ nodemon app.js 
```

You can also pass parameters via command line, if you need it; nodemon will handle everything for you.

Under the hood, Nodemon will check if your files have changed (or if the process is terminated) and will restart your app everytime the condition is met.

A very useful tool for developer ninjas!