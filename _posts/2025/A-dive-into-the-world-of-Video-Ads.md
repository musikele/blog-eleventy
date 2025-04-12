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

Many websites, or apps, are free because they run ads. No surprise that we went from banner ads ([covered in this article](https://michelenasti.com/2019/10/21/how-internet-ads-work "How internet ads work")) to videos, because videos better capture the attention span of a viewer. And they pay more. But... how they work exactly?

## The basics

Usually publishers (i.e. those that own and write content) don't self-host these video ads, instead they rely on third-party companies to serve ads from them.

A video ad is for sure made of a video url, but that's not enough. How can we know if the player has played the video? Which player? Was the human really on the page? How much of the video has he seen? etc.

So, the role of these 3rd party companies is to provide the infrastructure to deliver, count, analyze all these "impressions".

## A "video ad exchange" standard: the VAST protocol

Suppose you - the publisher - have multiple sources of ads, but your player is always the same. You don't want to change the player code everytime you integrate with a new ads provider. That's why many video advertisement companies all over the world have adpoted to the [VAST standard](https://iabtechlab.com/standards/vast/), which stands dor **Video Ad Serving Template**. This standard is maintained by the **Internet Advertising Bureau**, an organization composed of many advertising companies that have decided to unify the efforts to speak the same language covering all the use cases of the various actiors involved.

VAST is based on XML, and this should give you a sense of how "old" it is. Nonetheless, it is updated frequently, and at the time of this writing we're at version 4.3.

Vast contains, in the simplest form, the classical elements you'd expect from it:

* the video file url to play
* an Impression tracker, which is, a url the player should call to notify that the video has started reproducing
* many other event trackers: endpoints for errors, for when we are at 25%, 50%, 75% of the ad, or when the ad has been fully completed, etc

## Ad-providers calling other ad-providers

One thing that is not well known of this world, is the amount of providers that call other providers.

Suppose you have a contract with publisher A to provide you with ads. A may not have all the inventory necessary to fulfill the request. So, usually it will start an auction with B, C and D. It may happen that B has the same problem, and it will call C, which in turn can call D, and in turn, can call B. Luckily, there is a way to stop the infinite-loop-of-requests, by simply checking if you've already seen the transaction ID, but don't think this is a special case, it happens all the time.

A funny thing: D may be contacted directly and respond with no ads; but when reached out from B, it will respond with an ad. At this point, every intermediary takes a cut on the bid.

## When are bids paid?

Bids are

## Wrapping Vasts

One thing is not immediately

## VPAID or not-VPAID

## Web vs CTV
