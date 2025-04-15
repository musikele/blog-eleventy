---
layout: post
date: 2025-03-25T23:00:00.000Z
title: A dive into the world of Video Ads
headerImg: /images/1d8b80ef-b910-4e39-a15f-8c0d6da2a743.webp
description: >
  Many websites, or apps, are free because they run ads. No surprise that we
  went from banner ads to videos, because videos better capture the attention
  span of a viewer. And they pay more. But... how they work exactly?
tags:
  - vast
  - adtech
  - advertisment
  - video ads
permalink: /video-advertisement-vast/
eleventyExcludeFromCollections: false
---

Many websites, or apps, are free because they run ads. No surprise that we went from banner ads ([covered in this article](https://michelenasti.com/2019/10/21/how-internet-ads-work "How internet ads work")) to videos, because videos better capture the attention span of a viewer. And they pay more. But... how do they work exactly?

## The basics

Usually publishers (i.e. those that own and write content) don't self-host these video ads, instead they rely on third-party companies to serve ads from them.

A video ad is for sure made of a video url, but that's not enough. How can we know if the player has played the video? Which player? Was the human really on the page? How much of the video has he seen? etc.

So, the role of these 3rd party companies is to provide the infrastructure to deliver, count, analyze all these "impressions".

## A "video ad exchange" standard: the VAST protocol

Suppose you - the publisher - have multiple sources of ads, but your player is always the same. You don't want to change the player code everytime you integrate with a new ads provider. That's why many video advertisement companies all over the world have adpoted the [VAST standard](https://iabtechlab.com/standards/vast/), which stands dor **Video Ad Serving Template**. This standard is maintained by the **Internet Advertising Bureau**, an organization composed of many advertising companies that have decided to unify the efforts to speak the same language covering most of the use cases of the various actors involved.

**VAST is based on XML**, and this should give you a sense of how "old" it is. Nonetheless, it is updated frequently, and at the time of this writing we're at version 4.3.

Vast contains, in its simplest form, the obvious elements you'd expect from it:

* the video file url to play
* an Impression tracker, which is, a url the player should call to notify that the video is being seen
* many other event trackers: errors, 25%, 50%, 75% of the ad, or when the ad has fully completed, etc

Here's an example VAST [(link to full example)](https://github.com/InteractiveAdvertisingBureau/VAST_Samples/blob/master/VAST%204.2%20Samples/Inline_Simple.xml). I tried to highlight the most important parts in the following example.

```xml
<VAST version="4.2" xmlns:xs="http://www.w3.org/2001/XMLSchema" xmlns="http://www.iab.com/VAST">
  <Ad id="20001">
    <InLine>
      ...
      <Impression id="Impression-ID"><![CDATA[https://example.com/track/impression]]></Impression>
      <Creatives>
        <Creative id="5480" sequence="1" adId="2447226">
          <Linear>
            <TrackingEvents>
              <Tracking event="start" ><![CDATA[https://example.com/tracking/start]]></Tracking>
              ...
            </TrackingEvents>
            <Duration>00:00:16</Duration>
            <MediaFiles>
              <MediaFile id="5241" delivery="progressive" type="video/mp4" bitrate="2000" width="1280" height="720" minBitrate="1500" maxBitrate="2500" scalable="1" maintainAspectRatio="1" codec="H.264">
                <![CDATA[https://iab-publicfiles.s3.amazonaws.com/vast/VAST-4.0-Short-Intro.mp4]]>
              </MediaFile>
            </MediaFiles>
          </Linear>
        </Creative>
      </Creatives>
    </InLine>
  </Ad>
</VAST>
```

## Ad-providers calling other ad-providers

Now we start to wet our toes in the deep, obscure parts.

Suppose you have a contract with publisher `A` to provide you with ads. `A` may not have all the inventory necessary to fulfill the request. So, usually it will start an auction with `B`, `C` and `D`. It may happen that `B` has the same problem, and it will call `C`, which in turn can call `D`, and in turn, can call `B`. Luckily, there is a way to stop the infinite-loop-of-requests, by checking if you've already seen the transaction ID, but don't think this is a special case, what I just described here is normality.

A funny thing: `D` may be contacted directly and respond with no ads; but when reached out from `B`, they will respond with an ad. At this point, every intermediary (`A` - `B` - `D`) takes a cut on the bid.

## When are video ads considered "payable"?

An ad is considered payable (i.e. the publisher expects the money) when the ad is playing in the viewport. So, if an ad loads and starts outside the viewport, it is not considered payable until it's in viewport. If an ad is in the viewport but has not started, it is not paid too.

## Wrapping Vasts

We said that some companies call other companies to show an ad. In doing so the "wrap" the response in a "wrapping vast". These are the vast majority of VASTs we see passing.

To explain this: The ad is an XML that points to another VAST. Here's a snippet; full exmaple at this [link](https://github.com/InteractiveAdvertisingBureau/VAST_Samples/blob/master/VAST%204.2%20Samples/Wrapper_Tag-test.xml).

```xml
<VAST version="4.2" xmlns="http://www.iab.com/VAST">
  <Ad id="20011" sequence="1" >
    <Wrapper followAdditionalWrappers="0" allowMultipleAds="1" fallbackOnNoAd="0">
      <Error><![CDATA[https://example.com/error]]></Error>
      <Impression id="Impression-ID"><![CDATA[https://example.com/track/impression]]></Impression>
      ...
      <VASTAdTagURI>
        <![CDATA[https://raw.githubusercontent.com/InteractiveAdvertisingBureau/VAST_Samples/master/VAST%204.2%20Samples/Inline_Companion_Tag-test.xml]]>
      </VASTAdTagURI>
    </Wrapper>
  </Ad>
</VAST>
```

We commonly see 6-7 layers of unwrapping before getting to a VAST with an `<InLine>` element. (This means that all these wrapping companies take a "cut" in the price paid! 🤯)

Can we unwrap these VASTs on the server, before serving to the player? Unfortunately, bidders recognize this and they ultimately answer with a `No Ad`. So you unwrap for nothing.

## VPAID or not-VPAID

VAST support exentions, and the most important is VPAID. VPAID allows the VAST to return some javascript in the response. This javascript is executed in the user's device. Many companies return, for example, a bunch of javascript to load a player, to set up impression trackers, or do anti-fraud recognition. When possible, companies send VPAID so they can load a player that is known to have the maximum compatibility with their ads.

However, VPAID has its own issues. Some bidders may inject malicious code and many publishers are reluctant to have third parties inject unprotected code on their pages. Also, VPAID does not work in all non-browser traffic, like CTVs. And finally, with the latest specs VPAID is being deprecated, even though I think this will never happen.

## Summary

Did you enjoy this deep dive in video advertising? I bet people gets interested in rocket science more than this, but still, understanding how this works makes all the difference in this field. this article is a summary of what i wish I knew before moving to the video sector.
