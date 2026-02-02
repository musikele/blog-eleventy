---
title: 'Hobby project: Quando scade, an app to avoid food expiration'
date: 2025-11-21T23:00:00.000Z
description: '**"Quando Scade?"**, in italian, means *"when does it expire?"*. The purpose of the project is to get an estimation of expire dates of all the perishable stuff you buy at the supermarket. The idea is that, **knowing that something is getting closer to the expiry date, you try to consume it and avoid to throw away.**'
permalink: /quando-scade-app-idea/
eleventyExcludeFromCollections: false
tags:
  - app idea
headerImg: /images/receipts_receipt_pay_shopping_wealth_supermarket_currency_finance-1410366.jpg
layout: post
---

There are problems and hard problems. For problems, we can find solutions that are good and work incredibly fine (think of polinomial algorithms). Then there are hard problems, which you can't easily find an easy solution, if it exists (Think of NP problems). \

Surprisingly, we don't always need the perfect solution. Sometimes we can _approximate_ with a solution that is _good enough_. That's what I wanted to explore with this project I'd like to build. The name is...

## Quando Scade

**"Quando Scade?"**, in italian, means _"when does it expire?"_. The purpose of the project is to get an estimation of expire dates of all the perishable stuff you buy at the supermarket. The idea is that, **knowing that something is getting closer to the expiry date, you try to consume it and avoid to throw away.**

### How to make it badly

There is a simple way to build this project, you simply build an app where you manually enter all the stuff you buy with it's expiry dates.. if you have ever used a project like this, you know that you'll never use it again. It takes just too much time to manually insert / update / delete all the items. On the other side, you have perfect exipiry dates.

### How to make it in the AI era

What if the user can simply take a picture of the market's invoice, and let AI figure out the rest? I did a test, and i was not disappointed. AIs can:

* correctly identify what i bought from the cryptic words on the invoice
* estimate their expiry dates
* return all of this in the form of a JSON

Now it's time to put this into practice. In this post, I'll try to outline what I want to do to get to a 0.1 version.

## The plan

### Step 1 - create React Native app ✅

The RN app must have just one button that, when clicked, allows to photograph an invoice and send the photo to a server.

### Step 2 - create NodeJS server ✅

The server will expose just one endpoint, /extract, that will:

* get the photo
* send it to OpenAI
* retrieve a JSON containing all the objects with their estimate expiry date.

### Step 3 - display the list on the RN app ✅

Once you have the objects, make them appear in the UI.

> Note: at this point I have connected the most important parts. All the next steps are all UX, cosmetic, and usability tricks to make this app be actually useful and used by real users.

### Step 4 - add a Database to the mix ✅

we want to be able to retrieve the list of scanned objects without taking pictures at every test

### Step 5 - Display items in a meaningful way ✅

The items that are close to their expiry date must be shown in high impact colors, at the top of the list.

We can implement a mechanism (swipe? checkbox?) to make the items disappear if we consume them, or if they have expired without we could do anything.

### Step 6 - add notifications ✅

We want the system to remind you, every day, if there's some item that is close to expiry.

### Step 7 - allow users to change expiry dates ✅

AI isn't perfect, the estimation is, infact, an estimation. So we have to provide a way to modify expiry dates.

## At this point, I only have to use the app in real life

I will for sure validate my theories and follow up with you what happens once this app is on my family's phone. While developing, I've already found some improving points. The developer's experience - and the vibe coding - deserves a blog post, too. Once I validate the use case with me & my wife, i want to move over and:

* add authentication and authorization
* Add groups
* Monetize from the project, if possible - AI it's not free!

Stay tuned!
