---
layout: post
date: 2025-02-12T23:00:00.000Z
title: 'Fixing python imports, formatting and tooling in VSCode'
headerImg: /images/fixing python impots.webp
description: >
  in this post I'll explain what has worked for me to fix Visual Studio Code to
  work with Python, poetry, virtualenvs, to find the right imports and how to
  configure black and isort correctly. 
tags:
  - black
  - isort
  - vscode
  - visual studio code
  - python
permalink: fixing-python-black-isort-imports-in-vs-code/
eleventyExcludeFromCollections: false
---

As you may know, Python developers that work on a project that is big enough will start to use "virtualenvs" to manage the python version and the project dependencies.

So, even though I had installed the right Python version on my computer and I could see that by running `python --version` , Visual Studio Code would still tell me that my imports were broken.

![lxml is not found by VScode ](</images/Screenshot 2025-02-13 alle 09.52.42.png> "Hey lxml, where are you located?")

This project is using Poetry to manage its dependencies. Poetry does many things:

* it creates a virtual env with the right python verison (usually with `poetry install`)
* installs the specified dependencies (same command as before)
* if some of these dependencies are runnable commands, it will allow you to run them using the right python and dependencies version (this is done with `poetry run ...`).

In my case, this problem was due to the fact that VSCode was using the global python version, not the virtualenv one. So, how to fix this?

To fix this issue you have to do a couple of things.

run poetry env info to get the path to the virtualenv python executable:

```shell
$ poetry env info

Virtualenv
Python:         3.11.9
Implementation: CPython
Path:           /Users/michelenasti/Library/Caches/pypoetry/virtualenvs/myproject-l90-KmuS-py3.11
Executable:     /Users/michelenasti/Library/Caches/pypoetry/virtualenvs/myproject-l90-KmuS-py3.11/bin/python
Valid:          True

Base
Platform:   darwin
OS:         posix
Python:     3.11.9
Path:       /Users/michelenasti/.asdf/installs/python/3.11.9
Executable: /Users/michelenasti/.asdf/installs/python/3.11.9/bin/python3.11
```

Copy the executable path for the virtualenv. It will be needed at next step.

Then, click this little menu at the bottom down of VSCode, the one where you see the python version:![](</images/Screenshot 2025-02-13 alle 09.58.36.png>)If you have more than one project in the workspace, you'll see a menu where you can select the right project to fix. Select it.

Then, a new menu will show where you can select the right python version. There'll be many: all the system ones, plus the virtual env ones. If the virtualenv one doesn't show up, click "insert the interpreter path" (sorry for the translation) and put the path you saw previously.

...and BAM! no more import errors for you.

### Bonus points: fixing black and isort

If you use the black formatter and isort to sort python imports, usually you may want to set them to run on save. After some digging, i found the settings that are working for me. I'll show you the snippets for the settings.json file, because it's easier to copy/paste them, instead of showing screenshots of the settings UI.

```json
{
  "[python]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "ms-python.black-formatter",
    "diffEditor.ignoreTrimWhitespace": false,
    "editor.codeActionsOnSave": {
      "source.organizeImports": "explicit"
    },
  "black-formatter.path": [
    "poetry",
    "run",
    "black"
  ],
  "isort.path": [
    "poetry",
    "run",
    "isort"
  ]
}
```

This way the exact same versions of black and isort that you have specified in your poetry configuration are run.
