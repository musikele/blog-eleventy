---
eleventyExcludeFromCollections: false
layout: post
title: How DNS works? A refresh of the DNS algorithm and architecture.
description: 'Recently I started asking questions to myself about how DNS works. In
  a very slim article, I try to recap all the important details that I forgot. '
permalink: "/how-dns-works/"
date: 2022-05-12T00:00:00.000+02:00
tags:
- resolver
- computer science
- bind
- anycast
- dns
headerImg: "/images/telefonbog_ubt-1.JPG"

---
Recently I started asking myself questions about how DNS works. It turns out I forgot almost all I learned at university (damn frontend development!), so I wrote some notes to refresh my memory.

***

**DNS** stands for Domain Name Server. It is used by computer to find IP addresses of domains[^1].

When a browser needs an IP it asks a **DNS Resolver**.
The resolver runs this algorithm:

* if it's not in cache, queries one of the 13 root nameservers. These IPs are hardcoded. The resolver will choose the fastest one.
* These root nameservers are nowadays replicated in hundreds of instances so every geographic region has a lot of those servers very close to the them. These nameservers are operated by different companies to ensure indipendence, transparency and adherence to standards.
* The root nameserver does not contain individual entries, but it contains the IPs of top domain nameservers . So, if you ask `michelenasti.com` , it will respond with `.com` nameservers (more than one, in order to be fault-resistant).
* the DNS Resolver now queries the `.com` nameserver and it will respond with `michelenasti.com` nameserver.
* the DNS Resolver asks `michelenasti.com` nameserver, that in my case is currently hosted on Netlify, and it will _finally_ return the IP address of _something_ [^2] that will return my website.
* Finally, the DNS resolver responds back to the browser with the IP address.

> Note: for every step, the DNS caches every result. Also, these results have a Time-To-Live (TTL) so if these results do change, they will be refetched after the time expires.

##### **Question:** why there are 13 root nameservers?

Since the #UDP spec says that datagrams less than 512 bytes should not be fragmented, DNS designers thought to restrict the number of root nameservers to 13 (`32 * 13 = 416` bytes) leaving some space for future.

every address takes 32 bits = 4 bytes; However it seems addresses are hardcoded as 32 bytes. The error here is that in the packet there's not just the IP address but a whole record.

This is however historical and things have changed a lot. [A description of how it currently works is here](https://unix.stackexchange.com/questions/557799/ip-address-is-of-32-bit-which-means-4-bytes-yet-all-answers-to-question-on-13).

##### **Question**: Which one is chosen at any time?

**BIND**, the Open Source software that *was* powering up DNS in almost every operating system[^3], usually contacts all root nameservers and then chooses the one with least roundtrip time. [source](https://superuser.com/questions/527116/how-does-my-browser-locate-the-nearest-dns-root-servers).

##### **Question**: When I connect to a network, what happens exactly? Why when I am at home i use my own DNS server and when I am at work I use the network's dns server?

[#DHCP](https://afteracademy.com/blog/what-is-dhcp-and-how-does-it-work) will give to clients, among other informations, also the nameserver for this subnet.

##### **Question**: What's the AnyCast protocol ?

Even though there are 13 IP addresses for root servers, in reality there are hundreds of them. Each IP is shared among same servers using AnyCast protocol, so there's a root server close to every subnet.

A description of [Anycast](https://www.imperva.com/blog/how-anycast-works/) is here.

***

Hope you have enjoyed my journey back to DNS world. Is there any other question you think I should add?

*I want to thank [Stéphane Bortzmeyer](https://twitter.com/bortzmeyer) for suggesting some corrections to this article.

[^1]: there are many more use cases for DNS queries. For example, it can find email servers, XMPP servers, authenticating emails, validating servers, etc.

[^2]: in a very simple scenario, it's just one server that answers to requests. Nowadays there are load balancers, clusters, cloud providers that can interfere with your request. So the IP returned is usually going to point to one of those; what happens inside the cloud provider is an internal detail that may vary from company to company, and depending on the desidered level of complexity.

[^3]: BIND is not the most famous DNS client anymore. Most small "routers" use dnsmasq, operators or local networks also use Unbound, PowerDNS recursor, Knot, etc.

