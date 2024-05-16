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

I own a [NAS](https://michelenasti.com/2019/10/27/tips-tricks-from-my-linux-experience.html), sitting in my basement, connected to my ISP router. And, as a NAS owner, I've gone through a lot of configuration just to do basic things, like *exposing some services to the internet*, while keeping others private and accessible only behind a VPN.

But wait: what is a VPN? it stands for **Virtual Private Network**, and basically it's a software layer built on top of physical networks to let a bunch of devices appear to be on the same physical network. There are many VPN types, we'll dive into that in a few moments, but the basic approach is the same: when the OS detects that a packet has to be sent to a destination that is in the VPN, the packet gets "wrapped" in another packet that contains the real addresses of the destination.

The flow of a packet is more or less this:

* your app asks the TCP layer to send the packet.
* the TCP layer breaks down the stream of packets into IP packets.
* the IP packet is sent to a VPN tunnel.
* the VPN tunnel (which lives on the same machine) will wrap the IP packet in another packet, so basically there will be another source IP and another destination IP, and the data of the current packet is the previous, original packet.
* the VPN packet is then routed through internet and arrives to the destination VPN server.
* the destination VPN will read the content of the packet, and route it to the right server, using it's own IP as source.

\## Types of VPNs

\## Wireguard

\## and finally, Tailscale

\### route only internal traffic or all traffic?
