---
layout: post
date: 2025-03-25T23:00:00.000Z
title: A dive into the world of Video Ads
headerImg: /images/1d8b80ef-b910-4e39-a15f-8c0d6da2a743.webp
description: ''
tags:
  - vast
  - adtech
  - advertisment
  - video ads
eleventyExcludeFromCollections: true
---

Many websites, or apps, are free because they run ads. No surprise that we went from banner ads (the images that covered part of the screen) to videos, because videos better capture the attention span of a viewer. And they pay more. But... how they work exactly? 

## The basics

Usually publishers (i.e. those that own and write content) don't self-host these video ads, instead they rely on a third-party company to serve ads from them. 

A video ad is for sure made of a video url, but that's not enough. How can we know if the player has played the video? Which player? Was the human on the page? How much of the video has he seen? etc. 

So, the role of these 3rd party companies is to provide the infrastructure to deliver, count, analyze all these "impressions". 

## A "video ad exchange" standard: the VAST protocol

Suppose you - the publisher - have multiple sources of ads, but your player is always the same. You don't want to change the player code everytime you integrate with a new ads provider. That's why many video advertisement companies all over the world have convergeed to the [VAST standard](https://iabtechlab.com/standards/vast/), which stands dor Video Ad Serving Template. This standard is maintained by the Internet Advertising Bureau, an organization composed of many advertising companies that have decided to unify the effort to speak the same language covering all the use cases of the various actiors involved. 

VAST is based on XML - this should give you a sense of how "old" it is. Nonetheless, it is updated frequently, and at the time of this writing we're at version 4.3. \


Vast contains, in the simplest form, the classical elements you'd expect from it: 

* the video file url to play
* an Impression tracker, which is, a url the player should call to notify that the video has started reproducing
* many other event trackers: urls for errors, for when we are at 25%, 50%, 75% of the ad, or when the ad has been fully completed, etc

But wait - there's more. Suppose my 3rd party company is calling another company to get the video. This may be because my company is a Supply-Side Partner, and does the ad selection based on a few things, for example it does an auction on many sources before sending me the best VAST. 

In this case, I want to 
