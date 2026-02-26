---
title: hash() function in Python does not return the same value for the same input
date: 2026-02-26T09:34:00
layout: post
description: While debugging a complex multi-application app, I found out that the same hash function is not returning the same value. Let's understand why and how to mitigate this.
permalink: /2026/hash-function-in-python/
eleventyExcludeFromCollections: true
tags:
  - python
  - hash
  - security
headerImg: /images/python-hash-salt.png
---

The project I am working on in this period has several services running together. All these services have to process the same items, so we need to rely on some sort of identifier to relate them.

Being the project in Python, we decided to use the naive and basic `hash()` function that is **part of the standard library**.

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

The reason itself seems to be almost universally known to the Python devs world, unfortunately I was not a Python dev two years ago so I had to dig deep into ~~ChatGPT~~  [python documentation](https://docs.python.org/3/reference/datamodel.html#object.__hash__):

> By default, the [`__hash__()`](https://docs.python.org/3/reference/datamodel.html#object.__hash__ "object.__hash__") values of str and bytes objects **are “salted” with an unpredictable random value**. Although they remain constant within an individual Python process, **they are not predictable between repeated invocations of Python.**
> ...

every time you run a new Python program, a new environment variable (\`PYTHONHASHSEED\`)  is set to a random number. If you want to have the same seed for two programs you must set the same env variable for both.

Then, the "hash seed" is internally used like this:

```python
import os

def hash(value: str) -> int:
    value = os.environ.get("PYTHONHASHSEED") + value
    ...
```

## Ok, but why?

The reason
