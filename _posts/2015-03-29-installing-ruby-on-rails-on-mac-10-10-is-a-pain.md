---
id: 236
title: Installing Ruby On Rails on Mac 10.10 is a pain
date: 2015-03-29T22:13:30+00:00
author: musikele
layout: post
guid: http://michelenasti.com/?p=236
permalink: /2015/03/installing-ruby-on-rails-on-mac-10-10-is-a-pain/
dsq_thread_id:
  - "3980357243"
categories:
  - English
tags:
  - howto
  - mac
  - RoR
  - ruby
  - ruby on rails
---
I've tried many "howto install Ruby" and "how to install Rails", at the end the only installation method that works on Mac 10.10 (Yosemite) is this: [Setup Ruby On Rails on Mac OS X 10.10 Yosemite](https://gorails.com/setup/osx/10.10-yosemite)

What to say? Installation went "ok" on Windows (this is not very true since I actually have Windows at work, and at work I have a proxy, so ... I had to play a little bit), but on my Mac I have found something like 3000 tutorials on how to install this and that, and no tutorial was similar to others. Thanks to the author!

Then I had a lot of warnings that I'm trying to fix, and mostly I go on Stack Overflow to understand what's happening. One of this errors is:

<pre class="lang:sh decode:true">/usr/local/rvm/gems/ruby-1.9.3-p194@global/gems/bundler-1.9.1/lib/bundler/shared_helpers.rb:83: 
warning: Insecure world writable dir /usr/local in PATH, mode 040777</pre>

For what I understood, you have this problem because anyone can write in /usr/local . So the fix was to digit the following command:

<pre class="lang:sh decode:true">chmod go-w /usr/local</pre>

**You can also have the same error referred to other directories, just launch this command with the appropriate path.**

And now I'm having this other problem, unfortunately Stack Overflow does not have any ideas on how to solve it:

<pre class="lang:default decode:true">/usr/local/rvm/gems/ruby-1.9.3-p194/gems/activesupport-3.2.8/lib/active_support/values/time_zone.rb:270: 
warning: circular argument reference - now</pre>

Can anybody help me?