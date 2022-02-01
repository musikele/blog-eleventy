---
id: 418
title: Unofficial but simple way to upgrade Moodle
date: 2015-11-12T09:09:18+00:00
author: musikele
layout: post
guid: http://michelenasti.com/?p=418
permalink: /2015/11/unofficial-but-simple-way-to-upgrade-moodle/
dsq_thread_id:
  - "4311572009"
categories:
  - English
tags:
  - post
  - moodle
  - upgrade
---
[<img class="aligncenter size-full wp-image-422" src="https://i2.wp.com/michelenasti.com/wp-content/uploads/2015/11/moodle-logo.png?fit=204%2C61" alt="moodle-logo" data-recalc-dims="1" />](https://i2.wp.com/michelenasti.com/wp-content/uploads/2015/11/moodle-logo.png)

In the last days I have been involved in setting up a Moodle website. Moodle is a very complex software that wights 140+ MB, about 14000+ files. Installing it is difficoult, Upgrading it is a pain. Why?

Compared to other php applications, like WordPress, Moodle is not so automatized. Installing it means to creating a folder outside the http root of your server, creating a database and setting up a cron job. WordPress does not need this and its installation (and backup) (and upgrade) is totally automatic!

Recently I also received an attack on my moodle server that caused me some big trouble; all hostings were turning off my account asking me to repair it.

#### Upgrading Moodle: how I do it

I am using a private italian hosting, and I am not able to access the server via ssh so I have to upgrade via ftp.

First, unnamed step:

  * did you backup? (I pay the hosting for a weekly backup, for now this is good!)

then, my checklist:

  1. upload latest moodle.zip.
  2. maintenance mode.
  3. access via ftp with Filezilla.
  4. create a new folder called &#8220;moodle_old&#8221;.
  5. copy all content of http root into moodle_old.
  6. uncompress latest moodle.zip. You get a /moodle directory.
  7. move the content of /moodle in the http root.
  8. move config.php and custom plugins from /moodle_old to the http root.
  9. reach out your website with a browser and do the DB upgrade, upgrade plugins, etc etc (from this point you can follow instructions in browser).

Et voilà! Moodle is updated. 9 steps is still a lot tough. There are many steps that you can do wrong and loose all your files. I wonder Moodle was easier to upgrade, but the truth is that it's one of the most cusotmized software in the planet - what if an automatic upgrade deletes a university customization?

You get the point. Happy upgrading.

 