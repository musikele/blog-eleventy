---
paginate: true
comments: true
author: musikele
title: Remap backtick, ñ and tilde characters on Windows computers
category: Italiano
layout: post
date: 2018-01-27 00:00:00 +0000
tags:
- windows
- dell
- xps
- backtick
- keyboard
- mapping
- tilde
header-img: "/images/autohotkey.jpg"
description: If you own a Windows PC and writing backticks, tildes and other special
  characters is  a pain, this article si for you.
---
Since the switch to Windows I had a problem to solve as soon as possible: find a way to write the backtick (\`) and tilde (\~) characters.

Both the characters, on a mac, can be stroked by pressing `AltGr + \` (backtick) and  `AltGr + 6` (tilde).

On Windows the actual combination is incredible and unmemorizable - and, on my Dell XPS laptop, I just can'tuse it. It requires me to use the numeric pad (that I don't have) so I have to press the function key... well, it's a lot of strokes only to gain a single character.

So, that's my solution.

## AutoHotkey

The first step is to [install AutoHotkey](https://autohotkey.com/ "AutoHotkey official website") from the official website.

![]({{ site.baseurl }}/images/autohotkey.jpg)

What is AutoHotkey? Here is their official description:

> AutoHotkey is a free, open-source scripting language for Windows that  allows users to easily create small to complex scripts for all kinds of  tasks such as: form fillers, auto-clicking, macros, etc.

What we really need is the ability to remap some keys for our purposes.

## Write a AutoHotkey script

Once downloaded, we need to create the AutoHotkey script with our desired configuration.

AutoHotkey doesn't do anything on its own; it needs a script to tell it what to do.

So we have to create a file `startup.ahk` to fill in with our commands.

Here is mine:

    <^>!6:: 
       Send ~
    Return
    
    <^>!\::
    	SendRaw ```
    Return
    
    <^>!n::
    	Send ñ
    Return

Explanation of the first block (the others are similar):

* `<^>!` means **AltGr**
* `<^>!6` means _AltGr + 6_\*, pressed together
* `::` means that the input sequence has endend.
* `Send ~`: that's the AutoHotkey magic. It will send the `~` character upon receiving of this sequence.

To send the backtick, I had to use the function `SendRaw` because the backtick is a reserved character in AutoHotkey.

I have also mapped the _n with tilde_ (`ñ`) useful if you write some spanish.

## Execute the script (at startup)

To simply execute this script, just double click on it. Now you can start writing backticks, tildes, and ñ everywhere.

If you want to start the script automatically at every Windows start, just put this script in this folder:

    C:\Users\$USER\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup

Remember to change `$USER` with your username.

Now Markdown will not be a problem anymore!