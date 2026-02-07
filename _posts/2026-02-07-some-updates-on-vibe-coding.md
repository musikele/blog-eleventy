---
title: 'Vibe Coding: lessons learned'
date: 2026-02-07T14:14:00
layout: post
description: 'My experience with vibe coding: what was good, what was bad, what took away most of the time'
permalink: 2026-vibe-coding/
eleventyExcludeFromCollections: false
tags:
  - AI
  - vibe coding
headerImg: /images/vibe-coding.png
---

I've been thinking and working on about my app [Quando Scade](https://michelenasti.com/quando-scade-app-idea/) (When does it expire, but in italian) for few weeks now. Here are a few things I learned.

- **The app sucks**. It doesn't suck because i vibe-coded it, it sucks because the idea is fundamentally broken. It doesn't work. I wanted to be notified for things getting close to expiration, and in the end i wasn't even using it. So, there's room for improvement.
- **(Vibe-)Coding took 30% of the time, 70% of the time was on figuring out non-functional stuff**. Yes, vibe coding isn't perfect, but if you create unit tests along the way, and check all it does, you can get productive in a very small time. All the rest, however, was a bit harder. I wanted to spend little money, so I bought a cheap server and I set up a github action that would redeploy at every commit. This took time to figure out, even with the help of AI. Then, running docker on it. Securing the server against attacks. Certificate. etc.
Even though the app was built with react native, at some point I wanted to publish it to real users. So I bought the apple developer subscription to publish it to a bunch of beta testers. Then I had to figure out how to build & publish. then I started to have a very strange bug that only appeared in production, which led me to install sentry.
So, as you can see, it's not just "let AI build it for you".
- **The experience was not totally negative.** My idea was to get confidence with "Vibe Coding", and i must confess i was skeptical, but in the end it did more than I imagined. I also learned a lot from its technical choices. Sometimes it did very weird stuff, but overall I had the technical experience to judge if the output was good or bad. So: I learned a lot about React Native, Expo and iOS in less time.
- **The quality of the code produced is a 6, sometimes a 7, but if you don't check it will easily become a 2.** I can't stress out how much you need to check the output. I understand that vibe coding will be a thing for non-tech people, but if you don't check the code you'll easily cook spaghetti with your code, and fixing bugs will be a nightmare. I've had two nice experiences.
My app has two user flows, one was working, the other was not. So I asked, "fix the second flow". AI decided to comment all the code related to the second flow, and in the end it said "your users are not going to use that, so I commented out". WTF?
The second is that the code produced an overwhemingly set of repetitions. For each call to backend, there was the code to detect the "authentication error". It was easy to fix, by asking "extract this code into a function and use it everywhere it's needed", but what happens if the user doesn't check that? He'll live with all those repetitions forever.

My opinion is that vibe coding is a powerful instrument, and the gap between an idea and its realization is getting smaller and smaller, but it is not yet zero. A tech savy user might get the best out of it. Programmers may be still needed, for the first few months of 2026.
