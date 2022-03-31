---
id: 318
title: iMovie and the -50 error
date: 2015-06-22T19:00:16+00:00
author: musikele
layout: post
guid: http://michelenasti.com/?p=318
permalink: /2015/06/imovie-50-error/
dsq_thread_id:
  - "4016107614"
categories:
  - English
tags:
  - -50 error
  - apple
  - imovie
---
[<img class="alignleft size-full wp-image-320" src="https://i2.wp.com/michelenasti.com/uploads/2015/06/imovie400.jpg?fit=400%2C400" alt="imovie400" srcset="https://i2.wp.com/michelenasti.com/uploads/2015/06/imovie400.jpg?w=400 400w, https://i2.wp.com/michelenasti.com/uploads/2015/06/imovie400.jpg?resize=150%2C150 150w, https://i2.wp.com/michelenasti.com/uploads/2015/06/imovie400.jpg?resize=300%2C300 300w" sizes="(max-width: 400px) 100vw, 400px" data-recalc-dims="1" />](https://i2.wp.com/michelenasti.com/uploads/2015/06/imovie400.jpg)Yesterday I had to realize a quick video for a family celebration so I decided to use **iMovie** for the first time since I had bought my Mac in 2012.

iMovie is smart and it is very easy to prepare a video without being an expert of video editing. Of course it was what I was searching for, and in about 2 hours I managed to make the video.

The problem arose when I tried to create a **mpg file** of the video. There's a button **"share" -> "file"** with some settings about the video, and I simply left all with default values.

My first 5-6 attempts where blocked by a very strange **-50 error**.  There was **no description of what was going on**, so I tried to be friend with Google. Unfortunately they all described error -49 and I was a bit disappointed, however it seems that nobody really knows where's the problem and here are the suggestions that worked for me:

  * disable Time Machine while rendering the video;
  * disable iCloud;
  * disable other cloud services that are scanning the rendering directory (dropbox, google drive, owncloud, etc. In my case, owncloud was scanning Pictures folder).

At first, none of these suggestions solved the problem.

Another strange thing was that **the video was stopping always at the same point** - I could see the output video, and instead of 4 minutes it was about 3:15 minutes. I reviewed the video and I found something corrupted, like a flickering in the video; it worked fine during preview but the Renderer Job failed for this. I deleted this video and tried again. (In reality, I only dropped the corrupted frames, removing the bad part from the clip).

**The video still gave -50 errors , but to my surprise, the rendering process was continuing.** At the end the video was completed and it played well in Vlc and QuickTime. So My suggestions are to

  1. disable the services listed before
  2. check if the rendering blocks always at the same point
  3. check if the rendering really stops or if continues until the end. Ignore errors that don't block the rendering.

While waiting for an Apple iFix, maybe this will save 3-4 hours to understand what's going on.