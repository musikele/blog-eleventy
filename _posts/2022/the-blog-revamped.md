---
layout: post
date: 2022-03-25T23:00:00.000+00:00
title: This blog, revamped
description: ''
headerImg: "/images/blog-eleventy.png"
tags:
- 11ty
- eleventy
- blog
permalink: blog-revamped
eleventyExcludeFromCollections: true

---
So, here it is! my redesigned blog is finally live.

It has just been [migrated to 11ty from jekyll](https://michelenasti.com/rebuild-eleventy/), and redesigned, from a theme called [Strata](https://html5up.net/strata) to something super-custom heavily inspired to [Gridsome blog starter](https://gridsome.org/starters/gridsome-blog-starter/). 

Migration itself was not an easy task; but internet is full of migration guides. The issue I spent most time on was checking that all my previous permalinks were not changed. I'll probably write another post about that because it ended up in a script that I think it's useful for most. 

I think it's the right time to write a bit about the story of this "blog", that I consider my side project. Usually people works on apps, startups, or whatever. In my case, I think I have two pet projects, this blog and the developer's community of my area, called DevDay. Let's analyze this blog in this post.

I started blogging back in 2005, I think. At the time blogging was cool but very immature, there were no social networks yet, and everybody was on chat apps like MSN (the favourite of my circle), from Microsoft. This chat app was the de-facto standard for us youngsters. It also offered a blog platform called Live Spaces. I loved putting my photos and very stupid stories about my university exams and nights out with friends. When I pushed an article, a new badge would appear at the side my name in the chat app.

All of a sudden I started hitting the limits of a proprietary platform. I had no control over themes, I couldn't easily export my own posts. The best browser to upload photos was Internet Explorer (!).

I started looking for other blogging platforms and, at the time, the most advanced products were CMSs like: Joomla, Drupal, and ...Wordpress.

Worpress, back in the day, was on the edge. I think I decided to migrate when Wordpress just hit version 2. So, that was the moment I bought my first domain, around 2008-2009. However, my blog was veeery small and followed only by some close friends.

Around 2015 I decided to dicth my "personal" blog because I had no interest at all in writing about myself (and being read by nobody). So I decided to buy another domain more linked with myself, and to start again with Wordpress.

## Wordpress for a coder blog

Wordpress is fine for a lot of use cases. For example, it is still a blog engine under the hood, however it is mostly used now for media projects like newspapers, landing pages, corporate websites. There are some downsides however:

* You need a plugin to write code in your posts. It's a pain in the ass to write inline comments when referring to a variable, like `this`. 
* You need to host a database. This introduces some latency. 
* You need PHP, and back in the day I was not very proficient with its syntax. 
* Also, Wordpress is known for requiring a lot of maintenance. For example: upgrading to latest version, checking that plugins do not break, checking that memory is enough, remember to handle backups, and check that nobody is attacking your website. 

You end up doing maintenance only and never writing content. That's not what I wanted to do in first place. So after a while I decided to switch to Jekyll. 

## Jekyll 

Jekyll is a static site generator. Instead of a database, you can create a file per every article. This is so cheap to achieve and to serve, that many services are offering static hosting for free. I decided to switch because almost all blogs I was already following were done in Jekyll; also there was a nice integration with Github called Github Pages, and you could get a subdomain for free. 

I learned a lot with Jekyll. At the time I used to work for an enterprise that was redesigning a bunch of their websites, I proposed (and obtained) to rewrite all of them in Jekyll, it was a huge success. They're still in Jekyll to this day. 