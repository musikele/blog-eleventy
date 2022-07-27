---
eleventyExcludeFromCollections: true
layout: post
title: Recover gitlab repositories from an hacked machine
description: ''
permalink: ''
date: 
tags: []
headerImg: ''

---
Some weeks ago I was tasked to recover a series of git repositories from a gitlab private box that was hacked. This gitlab instance was of a former startup that was acquired by my current company, and honestly completing this task required a lot of research (and 10-15 lines of code).

But let's start from the beginning:

## The hack

The box was hosted on a DigitalOcean droplet. It was a Ubuntu 14.10 server; this, together with the ancient version of the softwares that were running on the machine, helped the hackers to take possession of the box and use it as a zombie in their botnet.

Digitalocean disconnected this box in November, 21, 2021 stating that the machine had sent 2 million packets towards an host. I could still access the box using the recovery console but I couldn't ping it from outside nor ping anything from the inside.

It seems that nobody received the notification and nobody reacted to this. 'Til I was put in charge of recovering the box!

## Gitlab what?

Gitlab, for the few that do not know what it is, it's a git repository manager. It's a Github competitor, but it has a significant advantage: it's open source, it can be downloaded on a machine and run privately. You can host your company code in total security, until the box gets hacked ;)

The user experience is very very similar, probably the thing that changes the most is that PRs (Pull Requests) are called MRs (Merge Requests), and that's it. Seriously :)

## Deciding what to recover

First, we had to discuss what exactly was our plan.

* recover the whole machine: this means that we would put remove the malware, inform digitalocean that the machine could be reconnected to the network, and prey that we did our job. Turns out this is one of the most difficult things one can do; hackers know their sh*t and do this for living, while I am just a simple webdev.
* Detach the disk from the droplet, create a new droplet and attach the disk to it: Again, in this scenario we would try to recover the whole instance, but in practice it's very hard to recover a gitlab instance this way.
* Create a gitlab backup, then create a new machine, import the backup and restart over: there are official procedures on line to do this, so it shouldn't be that complicated. However, at my first attempt to get a backup it took more than 2hrs and it didn't even complete, so in the end I decided to stop that.
* just recover the git repositories and don't care about all the rest (pull requests, comments, users, stars, thumbs up, etc etc).

We went for the last option.

## So where are Gitlab repositories?

All gitlab options are in `/etc/gitlab/gitlab.rb` file, and the default location for the git repositories is in the folder `/var/opt/gitlab/git-data/repositories`.

This was easy: just `tar -czf /var/opt/gitlab/git-data/repositories repositories.tar.gz`.

then, DigitalOcean provides a recovery options for droplets that are hacked. It consists of booting the droplet from a "plain" ubuntu ISO, and attach the previous disk to it. This way you won't execute any malicious code. Asking the support to reattach the machine to the network completed this other task.

After that, copying files from a remote machine is also a very easy task, using `scp`:

```shell
$ scp root@123.123.123.123:var/opt/gitlab/git-data/repositories.tar.gz .
```

Now it's just a matter of extracting:

```shell
tar -xzf repositories.tar.gz
```

Once extracted, I found the repositories are in a "bare" format. What does it mean? Well, all directories have this naming formatting: `<project>/<library>.git/` that should be familiar if you have used git in the past: it's essentially the path of a git repo if you use the ssh address. 

Anyway, a git repository in a “bare“ format has this directory structure: 

```shell
$ cd project/library.git
$ ls -al 
drwxr-x---  13 mnasti  staff    416  9 Dic  2019 .
drwxr-x---  34 mnasti  staff   1088 16 Lug  2021 ..
-rw-r--r--   1 mnasti  staff     81 25 Gen  2019 FETCH_HEAD
-rw-r--r--   1 mnasti  staff     23 23 Gen  2019 HEAD
-rw-r--r--   1 mnasti  staff    101 24 Apr  2019 config
-rw-r--r--   1 mnasti  staff     73 23 Gen  2019 description
lrwxr-xr-x   1 mnasti  staff     47 23 Gen  2019 hooks -> /opt/gitlab/embedded/service/gitlab-shell/hooks
drwxr-xr-x  13 mnasti  staff    416 23 Gen  2019 hooks.old.1548237270
drwxr-xr-x   4 mnasti  staff    128  3 Apr  2020 info
-rw-r--r--   1 mnasti  staff    535 15 Mar  2019 language-stats.cache
drwxr-xr-x  37 mnasti  staff   1184 27 Apr  2020 objects
-rw-r--r--   1 mnasti  staff  38631 18 Giu  2019 packed-refs
drwxr-xr-x   8 mnasti  staff    256 25 Gen  2019 refs
```

Doesn't look like a normal repo with normal files. In fact, this looks like the content of  the .git folder that every git repository has. So I decided to try it to force it to become a _real_ git repo: 

```shell
$ mkdir project/library
$ mv project/library.git project/library/.git
$ cd project/library
$ git reset --hard HEAD
fatal: this operation must be run in a work tree 
```

Damn: what does this error mean? Well, if you remember I said that the repo is in a "bare" state, and I have to un-bare it: 

```shell
$ cd .git
$ git config --unset core.bare
$ cd .. 
$ git reset --hard HEAD 
```

And finally we've got the repo back, with the original files !

## Next step: push all of these to corporate Github 


