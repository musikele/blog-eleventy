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

Imagine you are a programmer. You develop your feature, then you want it merged. That's what you do: 

* For the frontend: change the version in the package.json. A Jenkins job gets triggered. It takes \~10 minutes to finish. The output is: a new release on github with the new version. 
* For the backend: you go into the project settings and set the version of the frontend to the one just created. 
