---
paginate: true
comments: true
author: musikele
title: Designing the documentation for a tech product
category: English
layout: post
date: 2018-07-10 00:00:00 +0200
tags:
- Documentation
- Work
header-img: "/images/documentation.png"
description: 'What makes great a product? The features, the ease of use, and obviously
  all of this must be explained in a great documentation: one of my jobs. '
---
What makes a product a _great_ product?

one might say the **features**, others may say the **ease of using** these features writing less code, with more throughput, etc.

I agree with this definition; everyday in my job I use tools that can deploy rockets to the moon and others that can at most change the color of a text. But let me tell you how I choose my lethal weapons: by their **documentation**.

![]({{ site.baseurl }}/images/documentation.png)

## One of the last things a developer thinks about

you write a fantastic tool that automatizes a part of your job and you think it might be useful for others, too. What do you do?

* Put on github
* Write a simple Readme.md
* Wait for people coming

And nobody comes. Or, people coming will just watch and pass by, preferring another older tool with less features. 

To spread your product as much as possible you have to impersonate your users and think like them. In your Readme you have to write _at least_:

* What does this tool do
* How
* What do you need to start/install the tool
* How to configure it
* ... 

This applies to commercial tools too, infact **it is the last free thing you can do to spread your product** - marketing costs money! 

## My job for the last two years 

In my last two years I've worked (and still working) for a very big digital product. (I have worked also on other things, but this has been one of my exclusive tasks). I started with knowing nothing about it, and now I know it better than anyone else. 

My job? Designing the documentation website. I had to explain to a complete ignorant, like myself, how to use this product to obtain any possible goal. 

It was not an easy journey: for example, available documentation was written in _pdf_ or _doc_ documents, not the best solution in 2016. And not all the documentation was publicly accessible. 

The product is old: it started in 1999 and still kicks asses! 

The product is big: competitors don't have many features this product has. 

So: what's the job?

## My solution: two websites for one documentation 

I've decided to create two websites: 

* The first one explains, in current English, every possible feature in the form of a tutorial. Many topics are explored in sections (for example there's the _security_ section).
* The second website contains just the APIs and explains, for every API, what every field does. It also contains examples of requests and responses. 

The first website was made using [jekyll](Https://jekyllrb.com); the second was created using a tool called [Slate](https://github.com/lord/slate). 

In the first website I think I have covered everything: form how to sign up to how to handle custom configurations. 

Every API referenced in the jekyll documentation is linked to the slate one, so a user can easily dive in details.

## The most difficult part

Architecturing the whole solution was the toughest job.

I had to be sure everything was clear enough for newcomers, and also clear for experienced customers.

I had to organize stuff into chapters, sections, remembering where and when I was going to talk about a topic and to link it in the future.

Then, the job of actually writing the documentation was easy (and a little bit boring!) because the most difficult part was already done. 

I've not mentioned other technical aspects: allow users to search the docs, deploy a beta version of the docs for internal and review purposes, handle versions...

## Feedbacks

During my job I have talked to many people who has read "my" documentation. They told me it was extremely clear and they loved the examples, it made the whole thing more readable. 

Even my bosses think that the documentation is helping them in expanding the product to new potential  customers.

I feel proud that my job is helping the company and customers to reach their respective goals. I really enjoy working for public products! 