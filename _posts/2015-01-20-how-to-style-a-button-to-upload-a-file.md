---
id: 76
title: How to style a button to upload a file
date: 2015-01-20T20:44:52+00:00
author: musikele
layout: post
guid: http://michelenasti.com/?p=76
permalink: /2015/01/how-to-style-a-button-to-upload-a-file/
dsq_thread_id:
  - "4056337607"
categories:
  - English
tags:
  - bootstrap
  - css
  - howto
  - html
---
This is what I'm doing right now at work: _trying to style an **input button** to upload a file_.

So, if you simply type the code like this:

<pre class="lang:default decode:true ">&lt;input type="file"&gt;</pre>

this is what you get:

[<img class="aligncenter wp-image-84 size-full" src="https://i1.wp.com/michelenasti.com/wp-content/uploads/2015/01/upload-no-style.png?fit=215%2C44" alt="upload-no-style" data-recalc-dims="1" />](https://i1.wp.com/michelenasti.com/wp-content/uploads/2015/01/upload-no-style.png)The problem is: how do you style the button ( written here in Italian, "scegli file" - "choose file") to match the style of your website?

For example, in my works I use [bootstrap](http://getbootstrap.com/) like half dozen million of people of the world does. I want the style of _this_ button to match the style of the others. Also, I don't want to see the "_nessun file selezionato_" ("no file selected") written aside (it can't be styled too!).

### The solution

This is something I have discovered on [StackOverflow](http://stackoverflow.com/a/25825731/1020090) and by now it is my favorite hack.

<pre class="lang:default decode:true">&lt;div class="form-group"&gt;
    &lt;label for="inputFile" class="btn btn-primary"&gt;
      &lt;input id="inputFile" type="file" style="display:none;"&gt;
        Select File
    &lt;/label&gt;
&lt;/div&gt;</pre>

This is how it is rendered by the majority of browsers:

[<img class=" size-full wp-image-85 aligncenter" src="https://i0.wp.com/michelenasti.com/wp-content/uploads/2015/01/upload-button-styled.png?fit=162%2C121" alt="upload-button-styled" data-recalc-dims="1" />](https://i0.wp.com/michelenasti.com/wp-content/uploads/2015/01/upload-button-styled.png)The first "this is a button" is a normal html <span class="lang:default decode:true  crayon-inline "><button></span> element. the second is the file uploader button.

### How the hack works?

When you wrap a <span class="lang:default decode:true  crayon-inline "><label></span> around an <span class="lang:default decode:true  crayon-inline"><input></span>  element, if you click on the label, the click is propagated to the input element pointed by the <span class="lang:default decode:true  crayon-inline ">for="..."</span> attribute (matching the input id).

Another help is coming from the <span class="lang:default decode:true  crayon-inline ">style="display:none;"</span> attribute. It will hide the input element from the screen, so that we only see the label for the input.

### Compatibility

Boring part. It seems that it doesn't work very well with IE8 and before. Have a look on Stack Overflow on how to make it work. I don't care, since I don't use IE and I generally target my work to the latest browsers and platforms.