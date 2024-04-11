---
layout: post
date: 2024-04-10T22:00:00.000Z
title: stress your server with wrt
description: ''
headerImg: /images/server-emitting-smoke.jpg
tags:
  - wrt
  - load test
  - testing
  - stress test
permalink: /stress-test-wrt/
eleventyExcludeFromCollections: true
---

Lately I was exploring a bug where the communication between two servers goes on timeout under heavy load. Let me explain this better: a huge number of incoming HTTP connections hits server A, that needs to call server B, and a big percentage of the calls between A and B goes on timeout. The weird thing? A and B live on the same host, so basically A is calling localhost!

One may think that B is designed in a way that cannot handle such a big load: this is not the case, we know by a fact that B can handle thousands of connections, only being limited by the size of the machine. So we needed to find the culprit and before everything else we need to replicate the bug on our local.

This type of tests falls under the name of stress tests, or load tests. Basically, you must throw at the server a big number of incoming requests in order to see how the server - or the cluster - behaves. 

The tool we choose for the job is called [wrk](https://github.com/wg/wrk "wrk github homepage")
