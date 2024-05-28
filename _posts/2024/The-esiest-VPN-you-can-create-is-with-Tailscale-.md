---
layout: post
date: 2024-05-14T22:00:00.000Z
title: 'The esiest VPN you can create is with Tailscale '
description: >
  If you need to connect a bunch of devices in the same virtual network,
  Tailscale is the tool for you. Let's explore why it stands out from other
  VPNs.
headerImg: /images/tailscale-logo-black-800.png
tags:
  - tailscale
  - vpn
permalink: /2024/tailscale/
eleventyExcludeFromCollections: true
---

I am amazed by the semplicity of setting up a VPN using [Tailscale](https://tailscale.com/ "Tailscale"), so here I am describing how it works and why I think it's one of the best around.

I own a [NAS](https://michelenasti.com/2019/10/27/tips-tricks-from-my-linux-experience.html), sitting in my basement, connected to my ISP router. And, as a NAS owner, I've gone through a lot of configurations just to do basic things, like *exposing some services to the internet*, while keeping others private and accessible only behind a VPN. 

Over the years I've tried different protocols: 

* **L2TP/IPSec**, which requires to exchange a pre-shared key among all partecipants to the network, has a very good compatibility with MacOS but not with Android devices; 
* **OpenVPN, **one of the best protocols around, which requires to exchange a configuration file containing the public key of the server plus a bunch of other settings; this one requires to install software on every device, so I had to install Tunnelblick on MacOS, and OpenVPN apps on Android and iOS. 

Apart from this, there are other configurations I needed to do in order to make these protocols work: 

* **open the right ports** on all network equipments I control
* **set up a domain** that points to my home network, with a dynamic IP
* set up a DNS to route packets differently if I am outside or inside the network.

Every piece is a new point of failure that I introduced, considering that at the time I set up all this stuff I was basically ignorant and learning how all these pieces work together. After being locked out of my network many times, I can say I have learned a lot.

## Then I met Tailscale

Tailscale was simply showing up in the available Synology NAS apps. In a moment that I was willing to try new things, I decided to give it a try. Installing it is just one click. Then you create an account and boom! you have a VPN (with just one node). 

Then you may want to connect all other devices in your network. You simply add the app (for MacOS, for iOS) and login. Boom! you have added two new devices to the network. 

Once you're in, each device gets a private IP (starting with 100.x.x.x) and a custom hostname like musikele720.XXXXXX.ts.net , which works exactly as you would imagine, chosing the best path to deliver packets and not going to an external server all the time. 

![The administration panel of Tailscale](</images/Screenshot 2024-05-28 alle 09.01.37.png>)
