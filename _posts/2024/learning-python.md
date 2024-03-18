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

* in Python there are many ways to define **strings**, with single quotes, double quotes, with triple-single quotes, with triple-double quotes, with `f'...'`, with `r'...'` and I am sure i've seen also `u'...'`. This is a bit confusing. Javascript has only `'...'`, `"..."`, and `` `...` ``.
* Python has the concept of **Tuples**, which probably exists in a similar way only in Typescript. Basically, a tuple is an immutable collection of things, that can also be of different types. You may think that a Javascript array is exactly this, with the distinction that it is not immutable. So, what are tuples used for? Sometimes you want to specify that a collection must be exactly of x elements, not less not more, and a tuple is exactly good for that. A common example of such thing is a database record.
* Javascript has becomed a better language with ES6, and one of such improvements was the destructuring operator ( ...array ). Python has something similar, it's called **unpacking**, and it's used in another differently based on what you are unpacking.
  * if it's a tuple, just assign it: (word1, word2, word3) = tuple
  * if it's an array, use asterisk: range(\*\[3, 6]) (Range accepts two arguments)
  * And finally, if it's a dictionary, use two asterisks: \*\*dict this will return all key-values.
* Creating **variables** is just less confusing in Python. you give it a name, put an equal sign at the right, and that's it. In javascript you have var, let, const . I hope you're not using var anymore in your projects if you don't want to mess up with scoping.
* **Functions**. Easy, simple, clean functions are defined with def. But, if you want to pass around functions, you have to study the concept of lambda , which is a keyword that allows you to create one-line(-only?) functions. Other things that are worth noting:
  * to document functions, python devs have thought of *docstrings*, which I find a terrible idea, but that's it.
  * functions can get arguments both positionally and by keyword. You can also pass a variable number of positional and keyoword arguments. You can decide if you want to bind your function to just one, or the other, or both. I think it's very expressive. To get the same in javascript you have to adapt destructuring, like myFunction({arg1, arg2}) which means that the only argument is an object that contains those keys.
  * To get a tuple with all additional positional arguments, you can add an argument that starts with an asterisk: \*arguments
  * to get a dictionary with all keyword arguments, you can add an argument with two asterisks: \*\*keywords
* **Data structures**
  * The most used is the *list* for sure, which behaves like an array in JS, but there are also dictionaries (javascript objects), and sets, and many more, you name it, you get it.
  * The feature that i probably like more is the list comprehension. Basically you can create a list by specifying the properties you want in it. This looks like math notation and it's very expressive.
* Every modern programming language should provide a way to declare modules and python makes no difference. Every file in Python is a module. It seems that you can literaly import everything from a file, there is no concept of public/private. The similarity with javascript is in the \_\_init\_\_.py file, which looks like index.js when found in a folder. If you import a folder, and that folder has a \_\_init\_\_.py in it, this will be evaluated to determine what to export and what to import. If you want to export just a subset of items, you can assign those to the variable \_\_all\_\_ which is an array of ...strings. 
*
