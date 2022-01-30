---
paginate: true
comments: true
author: musikele
title: 'Get the list of files blocked by a process in Linux '
category: English
layout: post
date: 2018-06-19 00:00:00 +0200
tags:
- linux
- shell
- bash
header-img: "/images/find-file-linux-code_magnifying_glass_zero.png"
description: let's find how to find files read by a linux process. It's super easy!
---
Problem: **I had a process using 90% of cpu, couldn't understand what was going on.**

After seeking the log files and other stuff, I still couldn't undestand why it was taking so much CPU.

I decided to give a look at what files are used by this process.

![]({{ site.baseurl }}/images/find-file-linux-code_magnifying_glass_zero-1 "find files blocked by processes in linux")

## It's so easy

first, **find the PID of your process.** My preferred way to do it is with the command:

```bash
$ ps -ef | grep <command_name>
```

you'll see an output like this:

```bash
$ ps -ef | grep <command>
root     13141     1 69 10:36 ?        02:52:34 /path/to/<command>
admin    31182 30798  0 14:45 pts/2    00:00:00 grep --color=auto <command>
```

The pid of this process is `13141`.

And now **let's get the list of files blocked by this process**.

```bash
$ ls -al /proc/13141/fd 
```

The system might ask you to run this command as privileged user, so don't disregard using `sudo`.

output:

```bash
total 0
dr-x------ 2 root root  0 Jun 19 12:12 .
dr-xr-xr-x 8 root root  0 Jun 19 10:36 ..
lrwx------ 1 root root 64 Jun 19 12:12 0 -> /dev/null
lrwx------ 1 root root 64 Jun 19 12:12 1 -> /dev/null
lr-x------ 1 root root 64 Jun 19 14:30 10 -> /run/sdk/user.uid.db
lr-x------ 1 root root 64 Jun 19 14:30 11 -> /run/sdk/user.shadow.db
lrwx------ 1 root root 64 Jun 19 12:12 2 -> /dev/null
lrwx------ 1 root root 64 Jun 19 12:12 3 -> socket:[2342197]
lrwx------ 1 root root 64 Jun 19 12:12 4 -> socket:[2342201]
lr-x------ 1 root root 64 Jun 19 12:12 5 -> anon_inode:inotify
lr-x------ 1 root root 64 Jun 19 12:12 6 -> /backup_rsync/backup/20170825-1225/lib/azure-cli/lib/python2.7/site-packages/azure/mgmt/network/v2017_03_01/models
lr-x------ 1 root root 64 Jun 19 12:12 7 -> /run/sdk/lock/lock_pw
lr-x------ 1 root root 64 Jun 19 14:30 8 -> /run/sdk/user.name.db
lr-x------ 1 root root 64 Jun 19 14:30 9 -> /run/sdk/user.misc.db
```

Apart from a lot of stuff that seems creepy (`/dev/null`, `socket:\\\[...\\\]`), I can clearly spot a file used by my process: the one starting with `/backup_rsync`.

Running this command other two-three times, I understood that it is not hung, it is just scanning every file in my system and checking against a pattern. Very poor design.

Hope this helps!