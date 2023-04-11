---
layout: post
date: Created
title: "serverless & 304, Viewability in apps"
description: 
headerImg: '/images/pexels-lukas-574071.jpg'
tags:
- tags
permalink: serverless-304-viewability/
eleventyExcludeFromCollections: false
---

So, what's going on in my programmer's life?

## Serverless caching

I've been working on a cloud function from a famous cloud company. This company is, first of all, a CDN company: their job is to replicate a bunch of files we have on our origin servers. (Basically: you may have customers accessing files in Australia and in Europe, but if you let them go all the way to your origin server, which are in the US, they'll see a huuuuge delay in the response. That is not nice. So, some companies have these CDNs that replicate your content geographically, and they're very good at it).

The cool part of this project is that we can create some rules when we get a request. Say, user requests file `/abc/def/123.js`. This seems pretty straightforward, but we may want to offer our customers the possibility to A/B test two files with the same url, so we can inject a rule and say, for the 1% of the world, serve file `123-experiment.js`, otherwise serve the plain old `123.js`. 

Then we've decided to use this system to allow another form of caching: `304`. 

## 304 Not Modified

In HTTP, **304 Not Modified** is a header that servers can respond with when it is sure that the client already has a cached version of the file. 

But how does the server know that the client has that version? There are essentially two ways: 

- The client sends a GET request with a header `If-Modified-Since`, that contains a date. So the client is saying, "if the content has not changed since this date, let me know!"
- Or, the client can send another header called `If-None-Match` that contains an identifier of the content or, in HTTP vocabulary, an `ETag`.

We've decided to go with the second approach because of some business factors we had to account. Here's a very nice understanding of how this thing works, in human terms:

1. On all requests, but also at the very first `GET` request, the server returns the file with an `ETag: "123abc"` header. `"123abc"` is an identifier of the content, something that will change if the content will change. You can use the hash of the file, for example.
2. On the next request from the client, it will do the same request for the same file, but this time it will append the `If-None-Match: "123abc"` header. Browsers are already programmed to do this if they have received a file with a `ETag`.
3. The server will check this header, check the `ETag` for that file, see that they are the same and respond with `304 Not Modified` and no body. 
4. if the server detects that the `ETag` has changed in the meantime, will respond to the GET request exactly as it was a regular GET request (`200` with a body content). Nobody will notice. 

Oh! I remember the university class on HTTP, it was huuuge, and tried to explain all the nitty-gritty details of how HTTP 1.1 works, all things that I refreshed while working at this task. For more information, [MDN has a lot of info about the topic](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/304), if you click long enough :-)

## Viewability 

In adversiting there's this huge topic of viewability: companies will only pay for ads that have been viewed, not for those that have been downloaded. This means that checking that an ad has been viewed by a human is very very important. 

There have been thousands of ways to detect viewability, in browsers expecially, but recently the topic became hot with the advent of mobile apps. So, the IAB (The biggest association of advertisers) published this new library called OMID, that has two components: an app SDK (for iOS and Android) and a Javascript part, that goes into the creative.

The javascript part will communicate with the native SDKs and will get some "events" when the ad is in view; with those events we can trigger appropriate actions to record this viewability event.

The most difficult part of this project was to deal with the Google Closure Compiler (that was used by IAB to develop the javascript part) and to test the result on Android and iOS, given that I am not a mobile developer. Oh, that was hard! 

## In conclusion 

All these 3 projects were new things for me, I had zero experience with. In the end I am glad I started them, I learned a lot of interesting things along the way. But ultimately, I now feel the urge of learning some basic Android and write a very simple app to test things by miself.