---
layout: post
date: 2024-11-30T23:00:00.000Z
title: 'Jenkins, Docker, npm and a weird repo merge'
headerImg: /images/pexels-joshsorenson-1714208.jpg
description: >
  I've been dealing with a huuuge task in the last 3 weeks, that has nearly
  taken all my time. The quest was: let's try to shrink the release time of a
  particular project to *something deterministic*. How to do that? We need to
  understand the process in order to get to the bottom of it.
tags:
  - continuous integration
  - build
  - docker
  - pre-commit
  - jenkins
eleventyExcludeFromCollections: false
---

I've been dealing with a huuuge task in the last 3 weeks, that has nearly taken all my time. The quest was: let's try to shrink the release time of a particular project to *something deterministic*. How to do that? We need to understand the process in order to get to the bottom of it.

Even for a simple, one line frontend fix, you need to:

* Merge the PR for frontend. This will re-run the frontend jenkins job and give you a production version number. 10 minutes
* Then, update backend with the new, commit the new frontend version number. Wait for CI to run. 20 minutes.
* Merge. Wait for Jenkins to run on master branch. 20 minutes.

At this point we have a docker image that can be pushed to production servers.

This is the best-world scenario, where nothing goes wrong (e.g. if a test fails in the middle of the release process, we are stuck and nobody can deploy until we understand what happened).

We started to think what we could do to speed up the release process. We quickly understood that having two repositories separated was bringing no value to the project. We started [discussing about monorepos](https://michelenasti.com/2024/monorepos/ "What I got so far about monorepos") but we felt that it was too much. We then decided to merge the two in a simpler way: by putting all the frontend stuff into a frontend folder in the backend proejct.

There were many things to adjust to do that. We had a lot of automation that must continue to work. For example:

* No more **waiting for version tagging**. The git commit for both frontend and backend was enough.
* We wanted **one Jenkins job for both projects**. All tests (frontend, backend) must run in parallel. All checks should continue to happen in the right folders (bad idea to run python formatter into node\_modules, trust me).
* I had to **unify pre-commit checks**. I had to add all missing frontend pre-commit steps like Prettier, Eslint to the backend project.
* The **git history must be preserved**. [This article by Graham F. Scott](https://gfscott.com/blog/merge-git-repos-and-keep-commit-history/) was the basis for this task. It worked effortlessly.
* We wanted to create **just one docker image** instead of two. In the process of doing this, We've also optimized it with multi-stage builds.

It took me a good 3 weeks effort, but think that in those 3 weeks i also had to do reviews for my team, attend to meetings, etc. In the end, I am still unifying a lot of stuff, deleting duplicate checks, but I gained a lot of knowledge:

* I know a lot more about configuring Jenkins pipelines now.
* I know much more about Docker, too.
* ChatGPT has given me a lot of help, and from time to time I thought, **why blogging anymore if you have ChatGPT**?

Now, we only have to wait 16-17 minutes to run the pipeline, then the code is releasable. Still a lot, but there are 9000 tests to run, A docker image to build, and a big number of checks. And we simplified the developer and devops experience (1 PR with everything). A huge win for all!
