---
paginate: true
comments: true
author: musikele
category: English
layout: post
date: 2019-08-02
tags:
- network
- sysadmin
title: Detect network issues from your pc to a remote url
header-img: "/images/network-cables-499792_1280.jpg"
description: 'How to check if a URL is not working just for us or globally? '

---
Suppose you see that a website, or a URL, that seems to be unaccessible.

The first thing to do is to check **if the website is down just for you or for the whole universe**. There are many websites that do this, the one I discovered recently is [Uptrends](https://www.uptrends.com/tools/uptime).

By putting a url in uptrends you can see how long a resource will take to load from a bunch of locations in the world:

![](https://files.slack.com/files-pri/T04DE1CDJ-FLXGT5B8Q/image.png)

_Oh no! There's an issue in Europe!_

Another check you can do is for **_proper hackers_** _®_**.** Launch this command from bash:

    $ sudo mtr -rwc 50 <url> 

The result  is a very nice list of all hops made by data from our PC to the remote host

```bash
➜  ~ sudo mtr -rwc 50 michelenasti.com 
[sudo] password di musikele: 
Start: 2019-08-02T10:27:39+0200
HOST: musikele-XPS-15-9560                Loss%   Snt   Last   Avg  Best  Wrst StDev
  1.|-- _gateway                             0.0%    50    2.7   2.2   1.9   4.2   0.4
  2.|-- ???                                 100.0    50    0.0   0.0   0.0   0.0   0.0
  3.|-- 172.18.18.108                        0.0%    50   10.6  10.7   8.5  16.8   1.5
  4.|-- 172.18.19.226                       56.0%    50   11.7  11.3   9.0  30.4   4.6
  5.|-- 172.19.177.38                        0.0%    50   16.5  16.9  15.6  19.6   0.7
  6.|-- 172.19.177.2                         0.0%    50   27.4  27.8  24.6  69.4   8.6
  7.|-- etrunk49.milano50.mil.seabone.net   52.0%    50   28.2  28.3  26.6  40.6   2.9
  8.|-- et9-1-0.ashburn2.ash.seabone.net     0.0%    50  122.1 121.0 119.1 129.5   2.0
  9.|-- cloudflare.ashburn2.ash.seabone.net  0.0%    50  128.3 133.4 125.5 216.4  14.6
 10.|-- 104.28.13.252                        0.0%    50  124.4 124.8 123.5 126.3   0.6
➜  ~ 
```

`mtr` stands for **My TraceRoute** and combines ping with traceroute. It gives a lot of information about the routers crossed during the path to the destination. 

One may think that there are some errors in the upper report, however you should have in mind that many routers are configured to delete ICMP packets (the ones used by mtr, or by ping) or to slow them down for quality assurance. 

I really suggest you to read [this article from Linode](https://www.linode.com/docs/networking/diagnostics/diagnosing-network-issues-with-mtr/) that explains almost everything you may want to know and it's very easy to follow. 

Enjoy your networking! 
