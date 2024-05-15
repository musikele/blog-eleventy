---
layout: post
date: 2024-05-14T22:00:00.000Z
title: 'The esiest VPN you can create is with Tailscale '
description: >
  If you need to connect a bunch of devices in the same virtual network,
  Tailscale is the tool for you. Let's explore why it stands out from other VPN
  types. 
headerImg: /images/tailscale-logo-black-800.png
tags:
  - tailscale
  - vpn
permalink: /2024/tailscale/
eleventyExcludeFromCollections: true
---

I own a [NAS](https://michelenasti.com/2019/10/27/tips-tricks-from-my-linux-experience.html), sitting in my basement, connected to my ISP router. And, as a NAS owner, I've gone through a lot of configuration just to do basic things, like *exposing some services to the internet*, while keeping others private and accessible only behind a VPN.

But wait: what is a VPN? it stands for **Virtual Private Network**, and basically it's a software layer built on top of phisical networks to let a bunch of devices appear to be on the same physical network.
