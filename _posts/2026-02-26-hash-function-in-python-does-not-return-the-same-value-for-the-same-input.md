---
title: hash() function in Python may not return the same value for the same input
date: 2026-02-26T09:34:00
layout: post
description: While debugging a complex multi-application app, I found out that the same hash function is not returning the same value. Let's understand why and how to mitigate this.
permalink: /2026/hash-function-in-python/
eleventyExcludeFromCollections: false
tags:
  - python
  - hash
  - security
headerImg: /images/python-hash-salt.png
---

I am working on a project with multiple different services running together. All these services have to process the same items, so we need to rely on some sort of identifier to relate them.

Being the project in Python, we decided to use the classic  `hash()` function that is **part of the standard library**.

Now, imagine my surprise when I found out that, on **service A**,

```python
hash("<stringified_object_n_1>") = 12345
```

while on **service B**,

```python
hash("<stringified_object_n_1>") = -5678
```

(yes, hashes become numbers, and they can be negative, too).

## What is going on

The reason seems to be almost universally known to the Python devs world, unfortunately I was not a Python dev until lately so I had to dig deep into ~~ChatGPT~~ the [python documentation](https://docs.python.org/3/reference/datamodel.html#object.__hash__):

> By default, the [`__hash__()`](https://docs.python.org/3/reference/datamodel.html#object.__hash__ "object.__hash__") values of str and bytes objects **are “salted” with an unpredictable random value**. Although they remain constant within an individual Python process, **they are not predictable between repeated invocations of Python.**
> ...

every time you run a new Python program, a new environment variable (`PYTHONHASHSEED`)  is set to a random number. If you want to have the same seed for two programs you must set the same env variable for both.

Then, the "hash seed" is internally used like this:

```python
import os

def hash(value: str) -> int:
    value = os.environ.get("PYTHONHASHSEED") + value
    ...
```

## Ok, but why?

The reason Python and many other programming languages are doing this, is related to an [attack that was "discovered" in 2003 for the Perl programming language](https://www.usenix.org/legacy/events/sec03/tech/full_papers/crosby/crosby.pdf) (but it's so general that it has been proven and solved for many other languages, like Python).

Basically, **every programming language uses some sort of hash table** (you may also know it by the name "associative array") where the data you store is put in an array, and the index is usually calculated through an hash function.

**In theory, collisions are very rare, but if they occour, the values with the same hash are stored in linked lists.** If you remember linked lists performances, scrolling through all elements of a linked list to check if that element has been already stored can cost _O(n)_.

You may understand how the attack can be forged: if we find a way to build hashes so that we get, for different inputs, the same hash, we can degradate the performance of the software causing a _Denial of Service_.

This attack works because those hash functions are not built for cryptographic security but for speed: the language designer usually wants a hash function that is fast and that shows a sufficiently small average collision probability.

So, **the attacker can prebuild some strings that have the same hash.** It can be done asynchronously on the attacker computer, in a way that is described in the paper. **Then you just feed those inputs to the attacked system and it'll start to degrade.** In the paper, the example attack is performed on a popular firewall software that, after some time, will stop working.

How the _salting _fixes the attack? Basically, if the hash is salted with a random number, the attacker doesn't know if the inputs calculated on his computer will be exactly going to compute to the same hash on the target computer. This is generally considered a good compromise.

## what a trip!

That small detail led to this long article. I am happy to have gone through this, I learned something new nonetheless. Also, i know how to fix my original issue: I'll use one of the `hashlib` functions that are guaranteed to return the same result!
