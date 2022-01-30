---
paginate: true
comments: true
author: musikele
category: Italiano
layout: post
date: 2019-12-09
tags:
- pair programming
- pull request
- remote work
title: 'Pair Programming vs Pull Requests '
header-img: "/images/330px-Pair_programming_1.jpg"
description: 'What is good, and what is wrong, in pair programming? And in Merge Requests
  (or Pull Requests, in github name)? '

---
I attended a hackaton recently: an italian bank organizes an event every year for employees only, me and another programmer friend were invited by an employee to conribute to his idea.

Once we had defined the problem we wanted to solve, and defined who-does-what, we also decided that there was some space to actually _implement_ the solution. While other team members worked on slides, number, charts, motivation, me and my friend did produce a web application that could be shown to the jury.

What happened during the 24 hours we worked on? **We _pair-programmed_.** Two people, one pc only.

## What happens when you do pair programming

This was unexpected, but I felt _good_.

* When you code by yourself from zero you have to make a lof of choices, like what framework to use and why, how to store information, how to design the app, etc. **Having another person crosscheck the ideas is great**: many bugs were catched before even writing the first line of code.
* Having another pair of eyes on the monitor helped **reduce other kind of bugs (like typos)** before hitting _Save_.
* **After a couple of hours of work we both had an incredible amount of knowledge of the project**; at some point we decided it was time to split efforts, and he worked on backend while I set up domain, hosting etc. We clearly knew what we wanted and how independent tasks fitted into the whole picture.

So, should we all switch to pair programming and _trash_ a computer every two developers? No. Pair programming (or _pair thinking_) is great to :

* **teach stuff to a new hire** while you work on it
* **Design a project or a feature** in its initial phase
* **discover**, before it's too late, **hidden or conflicting use cases**.
* **increase the quality of the project** (fewer bugs)
* **spread knowledge** of the project **to all team members**.

And the downsides?

* Probably **managers fear** one thing: **that productivity is halfed**. Two programmers doing the work of one? no way.
* Also, **not all tasks are great to be worked on by two people**, like writing tests, or bug fixing.
* Finally, if your **coworker** is a **stubborn** or a **dickhead**, this may be not a great developer experience.

In conclusion, **my experience has been great**, I will probably do it again if necessary and I'd love to know any stories (either success or horror) about pair programming. The comment section is there for you!

## And what about Merge (or Pull) Requests?

Since internet was born we saw the rise of thousands of programmers working distributedly to enhance complex projects. To enable this, new instruments were born too. Git and Github for example popularized a way to contribute to other repositories, called **Pull Request**, that basically consists in:

* "fork" (copy) a project under your account
* do your work on your copy
* push a Pull Request to the original project.
* Somebody from the oroginal project will review the modifications, and if everything is allright, the modifications are merged.

This process is totally asynchronous and it's the one I currently use at work, since my team is remote. At my job, the policy is that at least two people must review and approve the code before merging with the original project.

What are the advantages of this approach?

* Obviously, it **works great for distributed teams**.
* **The history of the project is preserved**, thanks to version control.
* Linus Torvalds says that _the more eyes see your code, the less bugs arrive to the users_. 

On the other side:

* Imagine you're working on a feature that touches several entities and business rules, what if you forget to cover one hidden path? You'll only discover when somebody will review it, and if you modification is heavy, this may mean **you have to rewrite a lot of code**.
* **Understanding a codebase** that is not yours, or that is written in a language that you're not fluent with, **can be daunting**.
* Even small tasks may require **a lot of time** (yours and that of your reviewers) to figure out if the merge request is fine.

## Is there space for a new programming model?

Pair programming is great for new hires, or when a new functionality has to be designed, etc.

Obviously pair programming is much easier when two people are in the same room, looking at the same monitor, but **in 2019 there is plenty of tools that can help remote workers** to achieve the same experience.

Pull Requests do their job, but I feel like the sum of two brains is much greater than two individual brains working alone, so **we should** - as an industry - **find a way to merge the two things in a new process that may enhance productivity and quality of code**.

In a PR-only world, we leave the _knowledge sharing_ to documentation, that is obviously important, but we're left to the willing of the programmer to properly document his choices, design points, etc. What if the programmer is not a great writer? Or lazy? Or did not have time to write it?