---
id: 1130
title: I was not satisfied with Time Machine so I wrote my own Backup System
date: 2016-11-05T10:15:45+00:00
author: musikele
layout: post
guid: http://michelenasti.com/?p=1130
permalink: /2016/11/build-your-own-cross-platform-time-machine/
dsq_thread_id:
  - "5279464760"
categories:
  - English
tags:
  - backup
  - rsync
---
When I bought my first Apple computer, 4 years ago, I had a big problem: my data would be backed up in an encrypted and proprietary format. This meant that I could not access to my data from a linux or windows computer. I'm not a fanboy, and I happily use every possible system on earth, so this is a huge issue for me. 4 years ago I decided to overcome this problem by starting the writing **My Own Cross-Platform bash-based Time Machine**!

## Design principles

  * **incremental backups -** the first backup is a specular copy of your hard drive (well, in my case, of my home directory); the next backups will only transfer changed files.
  * **Space-efficient** - using [hard links](https://en.wikipedia.org/wiki/Hard_link), I can do as many backups I want (every hour, every day...), non-changed files will be linked, not copied. No extra space is involved in this operation 😉
  * **Snapshot view /File Versioning - **every directory is named after a timestamp, like "20161210-1359", so I know that this backup started at 13:59 the 10th of december of 2016.
  * **Work with my private NAS** - I bought a NAS System by Synology, so my data is safely stored in my house.
  * **Work on different networks** - When I'm far from home, I want to backup as well. This means I can backup from everywhere - as long there's a free internet connection 😉
  * **Possibility to be launched from every system** - since it is a bash script, compatibility with Linux and Mac is assured. Some testing is required on Windows, but since Bash is now available on the platform, this should not be a big issue anymore.

## Prerequisites

  * You should have **your own server / NAS**, and you can **access it via SSH**.  I have the cheapest Synology, but it's perfect for my data because it has two mirrored disks. You may try with online systems like S3, as long you have ssh access, you can use it.
  * SSH access must be [configured to access without password](http://www.linuxproblem.org/art_9.html): to do this you must generate a pair of private/public keys and configure your server to accept your key. If you don't do this, the script will work but will ask the password 4 times.

## How did I do this?

  * The magic is all by **[rsync](http://rsync.samba.org):** this software is the real engine that does the transfer, securely, efficiently.
  * the script is programmend in **bash, **the worst programming language ever. There is no debug, no IDE support, the strangest syntax, but it is also the software that powers the best available shell.

## How does it work?

  1. The script will try to connect to the server and check if the backup folder exists.
  2. since every backup is stored in a directory named after date and time (example: <span class="lang:default decode:true crayon-inline">20161225-1400</span>), sort the directory and take the latest. This will be the base directory for calculating the difference.
  3. create a new directory named after the current date and time, and **hard link** the files that are not changed on your computer.
  4. copy only the modified files in the newly created directory.

A hard link is a pointer to a file. If you create a hard link to a file, you can access the same file from two locations on filesystem. If you delete a hard link the other will continue to work. When you delete all the hard links, the file is lost forever (and the OS will mark that disk location as available for writing).

## What will you do now?

  * The project is very simple and **open source**! Feel free to understand how does it work.
  * I'm still developing a system to **schedule backups** on Mac. Next I'll move on other platforms. This means that now you have to launch the script by hand with <span class="lang:default decode:true crayon-inline">./start.sh</span> .
  * I also want to **add some toast messages** to say "hey! I'm going to backup everything. Click here if you don't want to" (for example, when you are under a mobile connection).
  * I also want to **implement a solution that deletes unnecessary backups**: it keeps 1 backup for every year, 1 backup for every month of the last 12 months, 1 backup per day for the last week, and one backup per hour for the last day.

## WHERE IS THE SOURCE!!!

I was forgetting the most important part. You'll find the script on [github](https://github.com/musikele/backupscript). Cheers!