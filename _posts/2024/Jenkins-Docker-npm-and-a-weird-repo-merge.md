---
layout: post
date: 2024-11-30T23:00:00.000Z
title: 'Jenkins, Docker, npm and a weird repo merge'
headerImg: /images/pexels-joshsorenson-1714208.jpg
description: ''
tags:
  - build
  - docker
  - node
  - jenkins
eleventyExcludeFromCollections: true
---

I've been dealing with a huuuge task in the last 3 weeks, that has nearly taken all my time. The quest was: let's try to shrink the release time of a particular project from \~1hr to \~20mins. How to do that? We need to understand the process in order to get to the bottom of it.

Until now, for a particular backoffice system, the company used two repos, one for the client (react), another for the server (django-python).

Imagine you are a programmer. You develop your feature, then you want it merged. By company policy, that's what you'd do:

1. you must do a canary release first, to only a fraction of traffic, for 1 hour, and monitor for errors or revenue problems. 
2. If nothing terrible happens, you can release. 

Let's explore the canary & release process: they are the same, the only thing that changes is the version number.  

* For the frontend: change the version in the package.json. A Jenkins job gets triggered. It takes \~10 minutes to finish. The output is: a new release on github with the new version.
* For the backend: you go into the project settings and set the new version of the frontend. this one takes around 20 minutes to build. 

This is the best-world scenario, where nothing goes wrong (e.g. if a test fails in the middle of the release process, we are stuck and nobody can deploy until we understand what happened).

We started to think what we could do to speed up the release process. We understood very quickly that having the two repositories separated was bringing no value to the project. We started [discussing about monorepo](https://michelenasti.com/2024/monorepos/ "What I got so far about monorepos")s but we felt that it was too much. We then decided to merge the two in an artisanal way: by putting all the frontend stuff into a frontend folder in the backend proejct (not the actual name, but you get the point).

There were many things to adjust to do that. We had a lot of automation that must continue to work. For example: 

* First of all, no more waiting for version tagging. The git commit for both frontend and backend was enough. 
* We wanted one jenkins job for both projects. All tests (frontend, backend) must run in parallel. All checks should continue to happen in the right folders (bad idea to run python formatter into node\_modules, trust me). So, I had to merge the two jenkins jobs into one that performed all the checks for both projects. 
* I had to unify pre-commit checks. I had to add all missing frontend pre-commit steps like Prettier, Eslint to the backend project. 
* The git history must be preserved. [This article by Graham F. Scott](https://gfscott.com/blog/merge-git-repos-and-keep-commit-history/) was the basis for this task. It worked effortlessly. 
* We wanted to create just one docker image to test everything. In the process of doing this, We've also optimized it with multi-stage builds.

It took me a good 3 weeks effort, but think that in those 3 weeks i also had to do reviews for my team, attend to meetings, etc. In the end, I am still unifying a lot of stuff, deleting duplicate checks, but I gained a lot of knowledge:

* I know a lot about Jenkins now. 
* I know much more about Docker, too.
* ChatGPT has given me a lot of help, and from time to time I thought, why blogging if you have ChatGPT ? There's nothing to write anymore. 

The build takes 16 minutes now. Still a lot, but there are 9000 tests to run, two docker images to build in the middle, and a big number of checks. And we simplified the developer experience a lot (1 PR with everything). A huge win!
