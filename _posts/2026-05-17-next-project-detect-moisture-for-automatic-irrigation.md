---
title: 'next project: detect moisture for automatic irrigation'
date: 2026-05-17T10:28:00
layout: post
description: This time i'll talk about raspberry, sensors, irrigation
permalink: 2026/moisture-detection-with-raspberry/
eleventyExcludeFromCollections: false
tags:
  - raspberrypi
  - mcp3008
  - moisture
headerImg: /images/IMG_3468.jpeg
---

Today i'll briefly discuss another project I am working on: **mostiure detection (for automatic irrigation)**. 

## The problem

I own land that is not connected to fresh water. this means that I have to bring water there, and I have to use this water to irrigate, because we've decided to cultivate some groceries over there. But.. how irrigate how much? and when?

When it rains, there's no need to irrigate, and when it's super hot, you need more water than in winter. So, **how do I know how much water I need?**

## The idea

First principle of every project: **if you don't measure you don't know what you need**. So, I've decided to build a simple sensor that reads moisture level from the soil and returns the data. 

That's. It. Disappointed? 

Well, there's much more than that. 

## What i've done so far

I've bought a bundle of electronic sensors and cables, wired all of them to my raspberry PI and .. yes! I can read the data correctly. The sensor returns data as analog current, then I convert it to digital through a component called MCP3008 and finally my raspberry reads it. 

## My long term goals

- **I want to put this data in a Grafana-like system**, together with weather data and other sensors I'll probably need. Also, I want to build a notifications system for when things happen.
- This box must stay in an isolated land. So, I'll buy a solar panel, a battery, and all needed equipment to make it **run without human intervention for years**. 
- Once I can reilably be sure that this thing is working off grid, **I'm going to add an electropump and a droplet irrigation system**. The idea is that it'll automatically deploy the right amount of water to keep the soid hydratated, not a drop more or less. (Of course some coltures require different levels of water, but let's solve a problem at once). 

## Too spare time?

No, it's **willing to learn**. I can't stress out how much LLMs are helping me in designing the process, or simply telling me what to buy, debugging issues, validating my hypothesis. I am a CS major, and I know very basic electricity. I frequently ask Claude "Will I die if one of the cables is put in the wrong place?" as a matter of security. And I am very excited of what I am doing.
