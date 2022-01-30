---
paginate: true
comments: true
author: musikele
category: Italiano
layout: post
date: 2019-10-27
tags:
- linux
- ubuntu
title: Tips & Tricks from my linux experience
header-img: "/images/busy-computer-keyboard-hands-2058128.jpg"
description: In more than 15 years I've used Ubuntu, windows and mac as my desktop
  workstation. Here's the best way to use enjoy Linux to become a better developer!

---
> This article is the summary of a talk I gave for [Linux Day Avellino 2019](https://www.facebook.com/events/686761111828223/permalink/686775338493467/). Slides are [here](https://show.zohopublic.com/publish/h93fsd5b97c46dd57465e9769d542c3871bea). 

While at university, I - like many other students - were encouraged to install linux on our laptops, to learn the fundamentals of programming and the internals of operating systems.

I guess it was 2006-2007 and I installed Ubuntu in dual boot on my machine, but since I'm not an easy guy **I decided to use it as my first operating system**, leaving Windows as a backup. Blog posts, magazines and books agreed, linux was _ready_ for desktop PCs.

Could not agree: **at the time, drivers support was a mess**. There was no support, for example, for a usb DSL modem and a printer I owned. I remember buying an external wifi adapter and that was not working too. I had to consume a lot of time on forums, even translating from french, to make my laptop working.

However, I was happy with what I had, also because I do not play videogames and I really do not need Windows for any special reason (no adobe, no MS Office, etc.). Also, 100% of my studies could be done from linux standard tools, and this was something I really loved.

Let's fast-forward a couple of years, I bought a Mac with my first salary - a Mac that lasted 5 years - and a Windows PC - this one. I used it with WSL (_bash on Windows_) for some time, then I had to switch back to linux as my daily operating system because WSL is _so slow_.

In this article I'll share some neat tricks I found useful, together with some stories about my experience. If you want to reach the buddha developer status, there are some steps to make!

## Get comfy with the command line

If you're a Windows user, you can avoid command line for the rest of your life, even as a developer. But if you work in a Unix environment, the terminal becomes the best tool for your job. **Knowing bash is really important**: you can automate almost any aspect of your daily tasks. The problem is that **bash has the most obscure syntax ever**, and honestly I can't even remember how to check for a file existence. what a mess!

However, Bash is still super popular, and if you administer or work on a remote server, chances are your only tool is bash. Here are some resources:

* [Pure Bash Bible](https://github.com/dylanaraps/pure-bash-bible)
* [The single most useful thing in bash](https://coderwall.com/p/oqtj8w/the-single-most-useful-thing-in-bash)
* [Bash cheatsheet](https://devhints.io/bash)
* ... and obviously Stack Overflow, Google, etc.
* don't forget to learn _vi_ or _emacs_ (i prefer the former). 

## How to backup a Linux system?

When I switched to MacOS everybody was talking about how _advanced_, _superior_, _cool_ was Time Machine, the backup solution every Mac has. It is actually very nice to use, mainly because the graphics seem to come from the future, but I did not like one aspect: the backup files were compressed (and encrypted) in a way that only another Mac could understand.

I am not a vendor lock-in fan, so I did not want to be obliged to buy Macs forever only because of my backups, so I started looking around at alternatives. There are many, either free or payed, but there is one sitting there in your `/usr/bin` called **rsync**.

**Rsync** is a Unix tool to synchronize the content of two folders that can be located over the net, or on different hard disks. It is capable of everything you can think of - preserving attributes, navigating symlinks, encrypt files, incremental backups, etc. - and has a very nice man page.

So I decided to build [my own backup script](https://github.com/musikele/backupscript). It was not an easy journey. It's written in bash, it will take your data from your home directory to a network position using SSH. It will also copy only differences in files, and hard linking unchanged files, so everytime I run it I get a snapshot of my pc that takes the smallest possible space.

If you can access a network position with ssh access (without password), you can schedule a cron job to run every X hours and have a full backup of your computer.

Nice, isn't it? However, I ended up not using my script. 

A backup is a critical process and must run flawlessly without hassles, without the user even knowing it's running. In my case, since my solution was "homemade", I had to check every now and then if it was working, and what was going on, etc. 

After a couple of years of honoured service I moved to [Duplicati](https://www.duplicati.com/), an open source .NET project that has a lot of features for backup nerds like me.

So next question: where I am storing all the data?

## buy (or build) a NAS

**The problem**: decouple my life from Dropbox, Google Drive, etc.

I have more than 100+ GB of data, going back to 2003, that I want to preserve forever. Also, I want to backup my photos and my entire PC, everyday, twice per day. Buying space from one of those accounts can cost up to 100€ per year.

But I'm a nerd and I want to do it myself!

What I am looking for is a **NAS** (_Network Attached Storage_), basically a Server connected to the internet. After having looked around, building one means you have time,  knowledge and a spare computer. I did not have time and a spare computer so I decided to buy one :)

I bought 5 years ago a NAS with two 3TB hard disks, total expense 320€, duplicated in a RAID 1 configuration. This means that the two disks are exact clones and when a disk will fail I can substitute it with a new one and the system will autoclone the disks.

But buying a NAS it's not only great because of the power you get, but because you can experiment with a lot of cool features! That's a list of what I accomplished:

* buy a domain and point to the NAS - access the NAS from everywhere
* use let's encrypt to generate certificates and connect to the NAS with HTTPS only
* use 2 factor auth
* install apps on it, like owncloud (drobox clone)...
* a webserver with mysql and a wordpress instance (for my wedding)...
* a mail server for my custom domain ...
* a DLNA for video streaming
* SSH access with no password
* SAMBA, SFTP, etc for network devices,
* an italian proxy to watch football matches from abroad (go Napoli!)
* ... and whatever else you may ever need!

I did not expect to learn that much when I first bought my NAS, but yes, after looking at what I've gained 5 years after, I really did a good choice.

## For your pet projects, buy a private server

I have a bunch of pet projects and I run all of them on a virtual machine I've bought online.

The cool thing is that this machine costs me nothing - around 2.5€ per month - and I spend my time to setup the machine, but that time is rewarded with experience.

In the past I used to configure everything with command line and by following the [Ubuntu Server Guide](https://help.ubuntu.com/lts/serverguide/), today I don't do this anymore (too time consuming and error-prone) and I usually install [Virtualmin](https://www.virtualmin.com/) and then try to figure out my needs with it.

With Virtualmin you can pretty much administer your machine as you want, like your NAS, but I prefer to physically separate the two things because if a hacker ever gets access to this machine (that is designed to be exposed to the web) I don't want to loose all my personal life.

So my setup is to create a third level domain (XXX.abc.def), then create an https certificate for it thanks to lets encrypt, set up a cron job that will take care of renewing the certificate, and then setup database etc.

In the past I used heroku but now i find that platform too limiting if my requirements are slightly more complex.

## And now... some cool terminal tricks

For my terminal I use [Oh-My-Zsh](https://ohmyz.sh/), it will make your command line more beautiful and with tons of plugins you can configure autocomplete for stuff that usually is not auto-completable - like git, or docker, etc.

When I have to test the communication between a client and a server I use [ngrok](), that will create an address like `<random_numbers>.ngrok.io` even with HTTPS, all of this for free. Then, you can inspect what happened during the connection. The cool thing is that you can use this tool to show to your colleagues some work, even if you're not on the same net.

I wrote a nice article about [SSH, from zero to hero](https://michelenasti.com/2019/04/03/ssh-cheatsheet-from-zero-to-hero.html) and you shoul read it - it's the **basic foundation** for all the stuff you read above. 

## Some notes on Dell XPS 15"

Installing Ubuntu on my Dell was not so flawless as I thought. Google will be your friend (or enemy) if you try this path. Here are some insights:

* since the monitor is 4K, the native terminal is too small to be read.
* Connecting a non-external monitor that is not-4k is a real problem. I generally launch this command to connect a monitor on the right:

    $ xrandr --output HDMI1 --scale 2x2 --mode 1920x1080 --fb 3840x0 --pos 3840x0

(trick: connect the cable, and when the system looks freezed, run this command. I don't know why, but if I wait for the system to unfreeze and then run the command, the system will definitely block!)

* **Wayland** - an alternative composer to Xorg - is not ready for 4K monitors. Gnome apps will look fine, but Electron apps will not.
* This PC also has a **touchscreen**. It works nice with Chrome, but it is useless with Firefox because it will select text instead of scroll. [Here are some fixes](https://superuser.com/questions/1151161/enable-touch-scrolling-in-firefox).
* **Snap or apt** ? I tend to embrace new stuff and I like snap because applications get updated faster, since they're self-contained. Also, many command line tools can be snap-installed. However, I also got some 4K problems with snap apps so I had to install some apps few times before finding one that works without issues.

That's all folks! I hope you enjoy linux as much as I did. 
