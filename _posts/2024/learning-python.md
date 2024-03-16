---
layout: post
date: 2024-03-16T00:00:00.000Z
title: How I am learning Python
description: >
  I'm learning Python the proper way, and i want to highlight the differences
  and the similarities with Javascript.
headerImg: /images/learning-python.jpg
tags:
  - python
permalink: how-i-am-learning-python/
eleventyExcludeFromCollections: true
---

**[Python](https://docs.python.org/)** is one of the most successful programming languages in the world. It is clear, coincise, easy to learn and to reason about. the fact that it is being taught in US universities has immensely contributed to the spread of this programming language amongst students and companies. (By contrast, the main programming language I have studied here in Italy is Java, and guess what companies are using around here?)

It is also become the "default" programming language for Machine Learning, thanks to high quality libraries like NumPy, Pandas, SciKit and many others.

Anyway, the curious fact is, despite having worked for the latest 6 years for foreign companies, and despite the fact that those companies had python code in production, I have always skipped the "learn Python the right way" part. My knowledge has always been very sparse and based on previous code, sometimes on Python2, which is a different, incompatible dialect.

I know that for my next job I'll need to "speak" at least two new languages, Python as my first and Go as the second, so I am finally using some spare time to learn these new languages by proper studying them.

So, how do I approach learning a new programming language? First of all, I prefer to follow two documents:

* a [tutorial](https://docs.python.org/3/tutorial/), which will guide me through the language features in an organized way;
* the official [docs](https://docs.python.org/3/index.html), which goes into the details of every function, every argument, every side effect.

Luckily the Python devs have released a fantastic tutorial which is the text I am following. I am also using the python shell to test snippets and see what-happens-if.

Probably, later will come a moment where I want to solidify my knowledge, and usually I resort to one of the many coding challanges available online, like [HackerRank](https://www.hackerrank.com/).

## Python for javascript programmers

There are many similarities between Python and Javascript, of course there are also many differences. Here's a very short and idiotic list of what is similar and what is different.

* in Python there are many ways to define a string, with single quotes, double quotes, with triple-single quotes, with triple-double quotes, with `f'...'`, with `r'...'` and I am sure i've seen also `u'...'`. This is a bit confusing. Javascript has only `'...'`, `"..."`, and `` `...` ``. 
* Python has the concept of **Tuples**, which probably exists in a similar way only in Typescript. Basically, a tuple is an immutable collection of things, that can also be of different types. You may think that a Javascript array is exactly this, with the distinction that it is not immutable. So, what are tuples used for? Sometimes you want to specify that a collection must be exactly of x elements, not less not more, and a tuple is exactly good for that. A common example of such thing is a database record.
*
