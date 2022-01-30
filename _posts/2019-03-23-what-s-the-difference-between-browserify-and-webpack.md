---
paginate: true
comments: true
author: musikele
category: English
layout: post
date: 2019-03-23
tags:
- browserify
- webpack
- rollup
- parcel
- bundler
title: What's the difference between Browserify and Webpack?
header-img: "/images/bropack.png"
description: 'Webpack is the king of the bundlers now, but Browserify is the former
  ruler: what''s the difference? What made webpack the default choice? '

---
**Browserify** belongs to the very first generation of module bundlers and it basically allowed one thing, that is, use the `require` function from NodeJS in the browser. Browserify's only job was to concatenate files wrapping them in functions that were then called by other fils. 

![]({{ site.baseurl }}/images/bropack.png "Browserify vs Webpack")

**Webpack** came around after (that's why I call it _2nd generation_) but it enhanced a lot and it has also joined the _3rd generation_, together with **Rollup** and **Parcel**. The difference with Browserify is that Webpack is extremely configurable, and it can be used to write libraries, webapps, and much more. 

Webpack integrates so well with all existing tools that already existed but that didn't talk to each other (minimizers, obfuscators, patchers...) and by integrating with **babel** it allowed to write ES6 code even before browsers were actually supporting it.

The third generation not only did all of this but also introduced the concept of _zero config_, meaning you don't have to configure anything, it will just work. 

And then there's _threeshaking_: if an external file exposes 100 functions but you use only one, webpack picks only the one you used and its dependencies, not the whole file. This way, your bundler will save space, meaning less data flowing through the net.  
