---
title: 'Interviewing a CTV Product Manager: the questions I asked as an engineer'
date: 2026-10-26T10:41:00
layout: post
description: I interviewed candidates for a CTV Product Manager role. Here are the questions I asked as an engineer, what each one reveals, and the red flags I watched for.
permalink: /2026/interviewing-ctv-product-manager/
eleventyExcludeFromCollections: true
tags:
  - adtech
  - video ads
  - ctv
  - product management
  - hiring
headerImg: ''
headerImgAlt: ''
---

## The plot twist

Recently I sat on the other side of the table: I was one of the interviewers for a **Product Manager for CTV**. Not a developer role, a PM. This post is about the questions I asked, why I asked them, and what made me raise an eyebrow.

An engineer interviewing a PM may sound odd. Usually PMs are interviewed by other PMs, by managers, by HR. But the person who works with the new PM **every single day** is the engineer: we read their tickets, discuss their priorities, and say "this will take three sprints, not three days".

If you're new to video advertising, I wrote [a dive into the world of video ads](https://michelenasti.com/video-advertisement-vast/) a while ago: it covers VAST, wrappers and VPAID, which I'll take for granted here.

So I asked myself a simple question: **what do I, as an engineer, want to know about my future PM?**

[TODO Michele: one or two lines on how you ended up in the interview loop.]

## Why CTV is a different beast

If you come from web advertising, CTV looks familiar. There's VAST, there's OpenRTB, there are auctions. Easy, right?

Nope.

On a TV **you don't control the player**. There are dozens of devices, each with its own quirks. Ads are often stitched server-side into the stream (SSAI), so the "user" calling your ad server is actually a server. And ads don't come one at a time: they come in **pods**, like the commercial breaks you see on regular TV.

A good CTV PM doesn't need to write code. But they need to understand **why** things are hard here. Otherwise every estimate looks like laziness, and every bug looks like incompetence.

So during the interviews I was looking for three things:

- **Domain understanding**: do you get how an ad actually reaches the screen?
- **Method**: when something breaks, where do you start?
- **Spine**: can you say no to someone?

## The questions

Here they are. Not the exact ones I used (sorry, future candidates), but the same spirit.

### 1. "Walk me through an ad break on a smart TV"

What happens from the moment a break starts to the moment the spot is on screen? This is **the** question. In two minutes you understand if the candidate knows about SSAI, pods, VAST and who talks to whom, or if they're just stringing acronyms together.

There's no perfect answer. I'm happy with "I don't know this part" followed by a reasonable guess. I'm much less happy with confident nonsense.

### 2. "Why is client-side a problem in CTV, and what does server-side break?"

A good answer mentions both sides: heterogeneous devices and limited players on one hand; measurement, tracking and shared IPs on the other. **Every solution here is a trade-off**, and I want a PM who knows it.

### 3. "A publisher says the fill rate of their pods is low. Where do you start?"

Here I'm not looking for the right answer, I'm looking for **the method**. What data do you ask for? Who do you ask? Do you think about spot durations, competitive separation, timeouts, floor prices? Or do you just open a ticket for the engineers saying "fill rate low, pls fix"?

### 4. "A standard we've used for years is becoming obsolete. How do you handle the transition?"

Customers still depend on it, sales wants to keep everybody happy, engineering wants to delete code. This is pure product work: **priorities, communication, compromises**.

### 5. "Tell me about a time you said no to a customer or to sales"

Not CTV specific, but for an engineer this is crucial. A PM who says yes to everything is a PM whose promises **land on the dev team**. I want to hear a concrete story, with a cost and a consequence.

### 6. "Write me a user story for cross-device frequency capping"

Can you turn a business need into something an engineer can estimate? Do you think about edge cases? Do you know what you **don't** know (spoiler: identity in CTV is a mess)?

## Red flags

No names, no details, just patterns. These are the things that made me raise an eyebrow:

- **Buzzword soup.** "We leverage programmatic synergies across the CTV ecosystem." Cool. What does it mean?
- **"The engineers will figure it out."** Maybe. But then what exactly is your job?
- **No numbers.** A PM who never mentions a metric, a KPI, a before and after, is a PM who doesn't measure. And if you don't measure, you don't know.
- **Never wrong.** Every story ends with a success. Nobody ever shipped something that flopped? Really?

[TODO Michele: add one anonymous, generic example from your interviews, if you want.]

## So, what did I learn?

That interviewing is hard. Way harder than being interviewed. You have one hour to guess how it will feel to work with someone for the next two years.

But also that engineers **should** be in the loop when hiring a PM. Not to test if they can code (please don't), but to check if the two of you will speak the same language. In CTV, where everything is a trade-off, that language matters a lot.

And you? Have you ever interviewed someone outside your role? Which question would you add? Let me know in the comments.
