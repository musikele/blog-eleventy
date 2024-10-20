---
layout: post
date: 2024-10-20
title: A class that behaves like an Object and like a Dict in Python
description: For fun and learning, I developed a class that behaves like a dict and an object. Let's see how it works
headerImg: '/images/two-faces.webp'
tags:
- python
permalink: object-mock-python/
eleventyExcludeFromCollections: false
---

Now that I am working with Python, I am getting familiar with mocks and test frameworks. So, in order to test stuff, there are a couple of tools you may find useful, like Mock and MagicMock. I'll probably write again about them, expecially how to use and how to configure for your purposes.

> not a Python expert here. I'm learning. I appreciate corrections.

But, in this article, I wanted to show a class that I wrote. I called it the **ObjectMock**.

##  The problem

In Javascript, you may know that you can do this:

```javascript
const obj = {} 
obj.prop1 = 33 
obj.["prop1"] = 44 
```

We have two different notations to access and set the same properties.

In Python this is not the case. You can define a new class and access the values, like this:

```python
class myObj():
    prop = 33

my_obj = myObj()
print(my_obj.prop)
```

Or, you can use a `dict` :

```python
my_dict = {}
my_dict["prop"] = 44
```

The two syntaxes cannot be mixed.

## The code

That's why I decided to create a class that could be used with both syntaxes.

- it's small, coincise, you can copy paste everywhere you need it.
- It behaves like a dict and like an object. So you can use this class either like `obj.property` or `obj["property“]`. It may be handy to have this tool when you have to mock something that behaves in this very strange way.

Let's see the code.

```python
class ObjectMock:
    def __init__(self, **kwargs):
        self.__dict__.update(kwargs)
    
    def __getitem__(self, key):
        return self.__dict__.get(key, None)

    def __setitem__(self, key, value):
        setattr(self, key, value)

    def __setattr__(self, key, value):
        self.__dict__[key] = value
```

This was also a good exercise to learn a few Python features, so let's go a bit deeper.

### The constructor

In Object-Oriented world, classes can have a constructor to set the starting internal state.

Every object in Python has this *not-so-well-hidden* property called `__dict__`. I must admit that once I found this out, I started using it everywhere, being bashed shortly after by my coworkers. In theory this property is "hidden" and by using it we're implicitly breaking the contract between the object and its clients. For example, we can have a `Person` with fields `name`, `surname`, and by tweaking `__dict__` we can add `engine`, which doesn't make any sense. In general there are other ways to access properties of an object in a sequential way.

I decided to use it here, because I'm not going to use this code in production. By accessing `self.__dict__` we can access the fields of the object like it was a `dict`, and we can use all the `dict` methods on it. Here we're saying, "pass all `kwargs` to the `update` method".

####  What are `**kwargs`?

`**kwargs` are all keyworded arguments passed to the function. Python will then group all those keyworded arguments in a dict, which is convenient because the `.update()` method used previously accepts a `dict`.

### `__getitem__` and `__setitem__`

These two functions implement the *magic* when we access the object with the **square brackets** notation. For exaple, when we do

```python
obj = ObjectMock()
obj['prop'] = 3 # calling __setitem__
print(obj['prop']) # calling __getitem__
```

what Python is doing behind the scenes is call the `__setitem__` function under the hood.

Note that `__setitem__` is implemented slightly different, by using a function called `setattr`, that will set a new attribute over an object (here the object is `self`). Since it doesn't have underscores around it, `setattr` is considered public, stable, and with a well-defined behaviour.

###  `__setattr__`

This function is instead called when we are defining a new prop using the dot notation:

```python
obj = ObjectMock() 
obj.prop = 'value' # calling __setattr__
print(obj.prop) # it works but, where is __getattr__ ? 
```

Surprisingly, there's no need to implement `__getattr__`. Python will call the right property since it was internally set. (Python docs say: `__getattr__` is called only when default attribute access fails with `AttributeError`, and we're not in such scenario here).

#### Bonus: I want every unset attribute to return None

By default, if you try to access a non-existing property in an object, you get `AttributeError`. If we want the class to return another value, for example `None`:

```python
obj = ObjectMock()
obj.prop3 == None
```

we have to implement the `__getattr__` method:

```python
def __getattr__(self, key):
    """Python will only call this for unknown attributes"""
    return None
```

## But... why

A well-educated reader may think: bro you just implemented Javascript Objects in Python! Yes, this was a side-effect of this journey.

Testing a complex feature was the starting point for developing this class, but in the end I decided not to use it. Python wants to clearly separate the two things, a dict is a dict and an object is an object, mixing the two smells bad. But it was fun to learn and understand this stuff at this deep level.
