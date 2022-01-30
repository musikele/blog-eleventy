---
paginate: true
comments: true
author: musikele
category: English
layout: post
date: 2021-09-17
title: A better Git Log
permalink: a-better-git-log
description: 'Do you find that git log is a bit too verbose for your standards? With
  this alias you''ll see it improved! '
header-img: "/images/schermata-2021-09-22-alle-11-43-51.png"
tags:
- git

---
Today I'll share with you a nice 1-line git config that will enhance a lot your git logs.

But let's start from the problem first. When you hit `git log` you usually get this output:

![]({{ site.baseurl }}/images/schermata-2021-09-21-alle-17-53-20.png)

There's nothing wrong with it, but it's very verbose, and for the 21 lines of VS code terminal, you only get info on two commits, not much.

Here's the trick.

Open the file `~/.gitconfig` and add this line at the end:

```bash
# ...other content... 

[alias]
       lg = log --color --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit --branches
```

Tabs are meaningful here. 

Now we have succesfully created a new git alias. To use it, we can simply call `git lg` (note the missing `o`) and here's what the output looks like: 

![(this is a demo project I used for a talk, as you can see the majority of commits were made by github security bot)]({{ site.baseurl }}/images/schermata-2021-09-22-alle-11-43-51.png)

Here's what you get: 

* much more commits in the same space as before 
* information is condensed, but all the meaningful info are present
* You can clearly see branches, merges, and remotes

Now, this post would not exist without the [excellent git course I followed on egghead]( https://egghead.io/lessons/git-make-my-git-log-look-pretty-and-readable). Highly recommended if you, like me, had already met git but wanted to know some more advanced features. (_Note: i'm not affiliated. To be precise: I am a subscriber! Yes, i do pay for the content.)_ 