---
layout: post
date: 2024-08-10T22:00:00.000Z
title: What I got so far about monorepos
description: >
  **Monorepos **have been gaining a lot of traction recently, mostly because
  people at uber-massive companies are using it, like Google and Amazon. But,
  can this concept be applied to small startups? Why? And most importantly, what
  are monorepos? Let's try to answer all these questions.
headerImg: /images/monorepos.jpg
tags:
  - monorepos
  - monorepo
permalink: 2024/monorepos/
eleventyExcludeFromCollections: true
---

**Monorepos** have been gaining a lot of traction recently, mostly because people at uber-massive companies are using it, like Google and Amazon. But, can this concept be applied to small startups? Why? And most importantly, what are monorepos? Let's try to answer all these questions.

The problem that led to this research came from work, where we have 8-9 repos used by 3 teams, and a task usually implies changing 3-4 different repositories that have to be released in a specific order otherwise production will blow up. Also, releasing like this means that we need to rerun test suites at every merge, and this is time consuming.

So, what are monorepos? Can they solve one of these problems? Or are a totally different thing?

> In this post i'll try to be generic and not to talk directly about any specific tool, even though at the end i'll use NX as an example.

## Folders vs Projects

The first thing you and I think when referring to monorepos are: *a huge folder with all repos in it*. You probably already have this on your local disk: a folder named `{company_name}` with all repos in it. You're not that far from reality, but it's not just this.

* What is a **repository**? It's *a bunch of files stored on a version control system*.
* What is a **directory**? *A bunch of files grouped together*.
* What is a **project**? *A bunch of files logically linked together by dependency relation, that serve some common purpose*.

Usually, in the pre-monorepo world, a repo is a directory linked with git that contains just 1 project. But this is just one of the possible scenarios. **In the monorepo world, we have multiple projects as subfolders of the same folder, and the root folder is the repo**.

A monorepo is a container of many projects that:

* are logically independent
* produce an artifact that can be deployed or can be imported by other projects
* live under the same version control system.

### I have many repos with their own git history, am I going to loose the git history?

no, [there is a command to link unrelated git histories](https://gfscott.com/blog/merge-git-repos-and-keep-commit-history/) together and bundle all of them. 

### How is this solving the problem you had?

* In a single PR we can change files of different projects.
* tests for each project can be executed in parallel, and only once.
* There'll be a clear understanding of dependencies between projects.

### &#x20;A concrete case with NX

**NX** is a monorepo tool that allows to manage monorepos in javascript/typescript (and, with a plugin, python). Techincally you could use just *Make* to make things work, but NX gave me the mental model to reason about. I expect other tools to be similar and different, in their own ways.

> Note: just a few tools allow to mix different programming languages. *Usually, monorepo means also monolanguage*.

So, the first thing that sounds very logic is the distinction between apps and libs.

```
root
  |- apps
      |- proj1 
      |- proj2
  |- libs
      |- lib1
      |- lib2
```

What's the difference between apps and libs? My rule of thumb is that **Apps can execute and will be deployed**, while **Libs are just imported by apps**. This is exactly the situation I have at work :D

As i said, we can have a Makefile to do the classic things we are used to: install dependencies, run tests, execute... but NX allows us to do much more. 

Nx will understand that a project is a project if it contains a file called `project.json`. In this file there'll be a bunch of informations, but most notably, there will also be embodied the dependencies between tasks and projects. Suppose we want to run `proj1`, but to do so we must also "install“ `lib1` and `lib2`. Nx will detect this dependency and will run the appropriate commands if it detects that files have changed in these projects, too. (It's interesting that if files have not changed the execution is also cached, thus it's very fast!) You can see the [whole list of nx features](https://nx.dev) on their website. 

### What about dependencies?

Usually big corps want to have all projects to use the same version of the library X, mainly because this version is what they consider stable, and they have also plans to update those libraries regularly. You can specify a root-level project.json and put all dependencies there, but you are also free to have each project to install their own versions of any library. It all boils down on how much *pain* you want to feel, with one approach or the other :)

### I don't want \<random\_person> to commit on my project!

Github allows that type of control by using a specific instruction ([CODEOWNERS](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/about-code-owners)) in the project repo.

## So, is it better?

The last 10 years everybody became obsessed with microsevices and some think this should come with microrepositories. I have seen how this is hard when you have to checkout on 10 different repos. **I think monorepos gives companies a mental model to re-think their set of projects, microservices or monolites**. The price to pay is:

* doing the migration of all projects into one monorepo (during this period nobody should commit on anything)
* reconfiguring many CI/CD jobs to get the data from a new source

This task can be performed iteratively, by adding a new project at a time.

## Interesting resources

* [monorepo.tools](https://monorepo.tools/ "monorepo tools")
