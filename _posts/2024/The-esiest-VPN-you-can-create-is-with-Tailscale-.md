---
layout: post
date: 2024-05-27T22:00:00.000Z
title: 'The esiest VPN you can create is with Tailscale '
description: >
  If you need to connect a bunch of devices in the same virtual network,
  Tailscale is the tool for you. Let's explore why it stands out from other
  VPNs.
headerImg: /images/tailscale.png
tags:
  - tailscale
  - vpn
permalink: /2024/tailscale/
eleventyExcludeFromCollections: false
---

I am amazed by the semplicity of setting up a VPN using [Tailscale](https://tailscale.com/ "Tailscale"), so here I am describing how it works and why I think it's one of the best around.

I own a [NAS](https://michelenasti.com/2019/10/27/tips-tricks-from-my-linux-experience.html), sitting in my basement, connected to my ISP router. And, as a NAS owner, I've gone through a lot of configurations just to do basic things, like *exposing some services to the internet*, while keeping others private and accessible only behind a VPN.

Over the years I've tried different protocols:

* **L2TP/IPSec**, which requires to exchange a pre-shared key among all partecipants to the network, has a very good compatibility with MacOS but not with Android devices;
* **OpenVPN**, one of the best protocols around, which requires to exchange a configuration file containing the public key of the server plus a bunch of other settings; this one requires to install software on every device, so I had to install Tunnelblick on MacOS, and OpenVPN apps on Android and iOS.

Apart from this, there are other configurations I needed to do in order to make these protocols work:

* **open the right ports** on all network equipments I control
* **set up a domain** that points to my home network, with a dynamic IP
* **set up a DNS** to route packets differently if I am outside or inside the network.

Every piece I introduced is a new probable point of failure, considering that at the time I set up all this stuff I was basically ignorant and learning how all these pieces work together. After being locked out of my network many times, I can say I have learned a lot.

## Then I met Tailscale

Tailscale was simply showing up in the available Synology NAS apps. In a moment that I was willing to try new things, I decided to give it a try. Installing it is just one click. Then you create an account and boom! you have a VPN (with just one node).

Then you may want to connect all other devices in your network. You simply add the app (for MacOS, for iOS) and login. Boom! you have added two new devices to the network.

Once you're in, each device gets a private IP (starting with 100.x.x.x) and a custom hostname like musikele720.XXXXXX.ts.net , which works exactly as you would imagine, chosing the best path to deliver packets and not going to an external server all the time.

![The administration panel of Tailscale](</images/Screenshot 2024-05-28 alle 09.01.37.png>)

Some other features were of particular interest for me.

* I configured my NAS to be the exit node of the network. Usually this feature is turned off, so only the traffic between my devices is routed through Tailscale, but from time to time - for example, when I am on a public unprotected wifi - I want my VPN to cover my back. Configuring the NAS to have this configurations is super easy. Then, when I want my device to use the exit node, I simply open the app and select "use exit node".
* Accessing the subnets is another cool feature. I have many devices at home that are not exposed on the web, and I cannot install tailscale on them: printers, security cameras, robot mower... when I am connected to tailscale, which is all the time, I can control them from outside.
* At the moment I am the only user of this network but Tailscale encourages to invite people and give them different access rights. The Free Tier is very generous: 3 users and 100 devices per user, which is more than enough for a home setup like mine. I think their targeted customers are small and medium enterprises that want to share private resources with their employees, and this makes perfect sense.
* Tailscale is very easy to use but it also has a great documentation and a configuration page which I never needed to use, to configure things like permissions, groups of devices, etc.

## But how Tailscale works

Under the hood, everything is routed through the [Wireguard](https://en.wikipedia.org/wiki/WireGuard) VPN protocol. Wireguard is a modern, open source protocol that uses very strong cryptography algorithms, UDP to send packets (to avoid TCP-over-TCP which can bring to hyper saturation of the channel), IPv6 ready, and more. Usually configuring Wireguard in your network means that you have to pre-share configuration files between the server host and the client, and if you want to connect more hosts, and if these hosts need to communicate between each other, the number of configurations to set up grows exponentially.

Tailscale will do all of this for you (probably the only point of centralization of the system). [All of this is explained very well in their docs](https://tailscale.com/compare/wireguard "Wireguard vs Tailscale").

## So how's it going?

After a month I can say, the best "set and forget" moment of my life. My computer is backing up with Time Machine no matter where I am in the world. My phone is backing up photos on my NAS without issues. I can print on my home printer from anywhere in the world. What else?!
