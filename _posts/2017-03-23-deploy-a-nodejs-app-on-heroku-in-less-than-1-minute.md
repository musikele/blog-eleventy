---
paginate: true
comments: true
author: musikele
title: Deploy a NodeJS app on Heroku in less than 1 minute
category: English
layout: post
date: '2017-03-18T13:18:53+00:00'
tags:
- nodejs
- heroku
- express
---
Actually, the time you need to deploy an app depends on how fast you are to copy & paste.

## Prerequisites
Your code must be hosted in a git repository.

## Steps to set up the environment the first time
1. Sign up (or log in) to
  <a href="http://heroku.com">heroku.com</a>
1. download
  <a href="https://devcenter.heroku.com/articles/heroku-cli">heroku's command for the console</a> (select the right version for your operating system).
1. be sure the command is installed: `heroku -v` (you should see some output)
1. launch `heroku login`and log in with your email and password.
1. Upload ssh keys to heroku: `heroku keys:add`
1. `ssh -v git@heroku.com`: even if the command seems to fail, check that the long output contains the row 
```
debug1: Authentication succeeded (publickey).
```
Generally it is one of the last 5-6 rows. If this log is present, everything is set up correctly. 

## Steps to set up the environment with the NodeJs app
- Set the host port of your application as an environment variable:
```
const port = process.env.PORT || 3000 ;  
... 
app.listen(port);
```


- set the `npm start` script, in `package.json`:

```
"scripts": {
   "start": "node server.js",
   ...
   }

```

- Check that the app runs correctly: `npm start`
- launch `heroku create`: will create a new remote for your repository named `heroku`
- `git push heroku` : will push your code to heroku
- `heroku open`: will open your webapp in the browser 

For every modification you do to your code, just commit and `git push heroku`!