---
layout: post
date: 2025-02-12T23:00:00.000Z
title: Fixing python imports
headerImg: /images/fixing python impots.webp
description: ''
tags:
  - black
  - isort
  - vscode
  - visual studio code
  - python
eleventyExcludeFromCollections: true
---

As you may know, Python developers that work on a project that is big enough will start to use "virtualenvs" to manage the python version and the project dependencies.

So, even though I had installed the right Python version on my computer (3.9) and I could see that by running python --version , Visual Studio Code would still tell me that my imports were broken.

![lxml is not found by VScode ](</images/Screenshot 2025-02-13 alle 09.52.42.png> "Hey lxml, where are you located?")

This project is using Poetry to manage its dependencies. Poetry does many things:

* it creates a virtual env with the right python verison (usually with `poetry install`)
* installs the specified dependencies (same command as before)
* if some of these dependencies are runnable commands, it will allow you to run them using the right python and dependencies version (this is done with `poetry run ...`). 

In my case, this problem was due to the fact that VSCode was using the global python version, not the virtualenv one. So, how to fix this? 
