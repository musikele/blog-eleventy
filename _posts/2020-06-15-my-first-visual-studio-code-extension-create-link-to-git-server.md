---
paginate: true
comments: true
author: musikele
category: English
layout: post
date: 2020-06-15
title: My first Visual Studio Code Extension, create-link-to-git-server
description: 'I wrote my first Visual Studio Code extension out of need, and I learned
  many things along the way. '
header-img: "/images/visual-studio-code-logo.png"
tags:
- visual studio code
- extension

---
You know when you're chatting with a colleague and **you want to point** **out** **a specific line in the git repository?** For example, **a specific line of a specific branch of a specific fork**? It's a time-wasting process to open the browser, open the git hosting website, navigate to the file, and create the link; so I decided to create an extension for Visual Studio Code.

Here's what I learned.

![]({{ site.baseurl }}/images/visual-studio-code-logo.png)

## Wait, does it work?

Yes! This extension is very simple. It adds a new item (`Get link to Git server`) in the right-click menu. When you click, the extension will copy in the clipboard a link to that line that you can paste wherever you want.

It supports ssh and https repositories.

You can download the extension by

* compiling it yourself from [github](https://github.com/musikele/create-link-to-git-server)
* exploring it on [visual studio code marketplace](https://marketplace.visualstudio.com/items?itemName=musikele.create-link-to-git-server)
* installing it directly from VSC by searching for `create-link-to-git-server`

Here's a demo:

![](https://raw.githubusercontent.com/musikele/create-link-to-git-server/master/demo.gif)

## Wasn't there another extension that does exactly that?

You may be thinking of the super popular extension GitLens, of which I am a huge fan and user. Anyway, GitLens has some issues with my setup:

* At my company we use a private git server, and gitlens doesn't play nice with that.
* With public famous repositories, like github, GitLens produces a link to the commit, so you loose the information about the branch and the fork, that I find very useful.

Anyway my extension does not block GitLens in any way, so feel free to use both :D

## How do you exactly write a VSC extension?

Folks at Microsoft have published a ton of articles regarding how to build an extension for Visual Studio Code. The starting point is this: [Your First Extension](https://code.visualstudio.com/api/get-started/your-first-extension). It will create a simple "Hello World" extension that will show a message on screen.

So: you need to write the function in a Typescript file, and then specify how this function should be activated in `package.json` . 

### Code

All the code will be in a typescript file called `src/extension.ts` that contains the following blocks:

* an `activate` function , that is run at VSC startup
* inside the activate function, we register the command we want to show; in my case, I called `registerTextEditorCommand` that contains the body of the code. Here I do all my logic, like getting git info from VSC, and building the link. More info on those commands [here](https://code.visualstudio.com/api/references/vscode-api#commands)

### Package.json

Creating the command is not enough. Now we must specify how to activate those commands. This is done in `package.json` file by specifying custom properties. I admit that the documentation for this is messy, overly descriptive, and not easy to find/digest/understand without some research in stack overflow.

To be precise, Here's a snippet from my package.json: 

```json
...
"activationEvents": [
	"onCommand:create-link-to-git-server.helloWorld"
],
...
"contributes": {
	"menus": {
		"editor/context": [
			{
				"when": "editorTextFocus",
				"command": "create-link-to-git-server.helloWorld"
			}
		]
	},
	"commands": [
		{
			"command": "create-link-to-git-server.helloWorld",
			"title": "Get link to Git server"
		}
	]
},
...
```

* the `activationEvents` section specifies when this extension will be activated. In my case, it will be activated when the command `create-link-to-git-server.helloWorld` is triggered. [Here are all the possible activation events you can use](https://code.visualstudio.com/api/references/activation-events). 
* The `contributes` section specifies how you extension contributes to Visual Studio Code. In this section, we can add menu items, commands, themes, whatever. What I do here is to specify two ways of modifying VSC: by adding a menu item in the editor menu, and by specifying a command that is triggered on Cmd+Shift+P (ctrl+shift+p). [Here's the whole list of contribution points](https://code.visualstudio.com/api/references/contribution-points) 

## How long did it take to write this extension?

In total, I worked on this about 4-6 hours to get the bulk of the code working. As I said, I had no idea on how to

* get Git information from VSC 
* add a menu item in VSC 
* write something in the clipboard 

For all this, Stack Overflow was my friend.

Then, there's the releasing part .... 

## What about releasing 

To release an extension on Visual Studio Code marketplace, you have to do a bunch of things first: 

* write a good Readme / documentation, that explains clearly what the extension does. This is what is shown to your users when they search for it. I also added a GIF to show the behaviour of the extension. 
* Install a tool called `vsce`, create an account on Azure Deploys, authenticate my own pc, and publish. [This has a tutorial](https://code.visualstudio.com/api/working-with-extensions/publishing-extension), too, and honestly I found it a bit complicated. The good news is that, once the account is set up and the code is committed, you only have to run `vsce publish <sem_ver>` and wait a couple of minutes.

***

So, what can be another "missing" extension? What else can we build for developers that can be extremely useful? Let me know :)