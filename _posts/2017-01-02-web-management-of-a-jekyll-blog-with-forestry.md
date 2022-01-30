---
title: Web management of a Jekyll blog with Forestry
date: 2017-01-02
paginate: true
comments: true
author: musikele
layout: post
---
I have successfully moved all my blog from Wordpress to Jekyll (what you see is the proof of it!) but there was one thing I was really missing: a web console to easily manage the blog when I don't have a computer on hand.

Then I found [**Forestry.io**](http://forestry.io), a cloud enviornment to manage your static site.

## How is my blog set up

My blog is hosted on github and I use some custom plugins that are not allowed by github default jekyll integration. That's why I use Travis-CI to build my website at every commit - if the build goes well, the build is pushed to github again (master branch) and served to you.

I explain my setup not because it's cool (it is _very_ cool) but because **forestry.io** covers my case too, so I guess that can cover every possibile case.

## How does Forestry.io works

Forestry.io is a cloud web application that gives you back what you miss more with Jekyll: a backend management for your website/blog.

You simply authorize Forestry to access your github account, tell forestry your blog repo (and branch), and voilà! You have a good backend for your Jekyll blog.

Here's a screenshot of my backend while I am writing this article in a wysiwyg editor:

![]({{ site.baseurl }}/images/Schermata%202017-01-02%20alle%2012.35.41.png)

You get a

* **wysiwyg editor** for posts and pages that is completely in-sync with the repository
*   a **custom url** to access the blog-management without going to forestry.io website everytime
*   support for **parameters** in front matter (with auto recognition!)
*  support for **drafts**
*  **upload** of images and files

In practice, they set-up a custom route (`/admin` ? you can choose it) with a `.js` file that connects with their servers and does all the magic for you.

All of this for the price of **free** (for one user/blog). Isn't this just _fantastic_?

You can still manage your blog from your preferred editor, offline, on your pc; Forestry will not get angry for this.

I only have a **feature request**: a **native mobile app** (android please!).

Kudos to them :)