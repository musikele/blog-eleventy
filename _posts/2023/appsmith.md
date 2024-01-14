---
layout: post
date: 2023-12-09T23:00:00.000Z
title: No-code development with Appsmith
description: >
  Fullstack developers are always looking for tools that can help us build
  applications faster. Appsmith is a tool that allows to do exactly that, with
  limitations of course. Let's dive in.
headerImg: /images/Appsmith_logo.png
tags:
  - low-code
  - no-code
  - appsmith
permalink: appsmith/
eleventyExcludeFromCollections: true
---

Fullstack developers are always looking for tools that can help build applications faster. [Appsmith](https://www.appsmith.com/ "Appsmith") is a tool that allows to do exactly that, and after three months of trying, I think there's nothing that can be faster than that. With a huge set of limitations, of course, but nonetheless it's still valuable for a lot of situations. Let's dive in.

## What is Appsmith?

Appsmith is a **no-code**, **open-source platform** that allows to build applications using a drag-and-drop interface. The focus is around APIs and data (you have to provide the data somehow), but I think the level of customization is enough for most use cases.

### Wait, what is no-code?

No-code is a movement that aims to allow people to build applications without writing code. It's not a new concept, but it's been gaining a lot of traction lately. The idea is to allow people to build applications without having to learn how to code. This is done by providing a visual interface that allows to build applications by dragging and dropping components, and connecting them together.

If you are a developer like me, I know what you're thinking: *there's NO WAAYYY I'm going to use such a tool, I am too good at \<insert your favourite framework here> and nothing can beat me at this*. You are right: you are good and these tools are crap. But there are a few advantages that these tools bring to the table, which I'll try to enumerate here:

* They allow non-technical people to create UIs that work. By inference, they allow not-so-good developers to make stuff that works, with a decent quality.
* They are suitable for a limit set of appliations, but for those types, they offer an extremely fast development experience.
* You don't have to think about a lot of stuff - styling, bundling, deploying... other people has already taken those choices for you.

> **No-code or Low-code?**
> Since writing an app with no code is impossible, some in the industry have been starting naming these concepts as "low code", because you don't have to write everything, just a few bits of it.

### But what exactly is Appsmith?

It's a webapp. You access via [appsmith.com](https://www.appsmith.com/) and sign up. Once you're in, you're greeted with a dashboard with all your apps:

![Appsmith's dashboard](/images/appsmith_dashboard.png)

Creating an app is a matter of clicking "+ New", and then you're redirected to a page that looks like this:

![Appsmith new app page](/images/appsmith_new_app.png)

## The Appsmith way of writing apps

One of the first steps you'll have to do is configuring a data source. Appsmith can connect with a wide variety of sources, including a bunch of popular SQL databases, or REST APIs, GraphQL, and so on.

![list of Appsmith datasources](/images/appsmith-datasources.png)

Then you'll probably start putting widgets on page. Appsmith comes bundled with a long set of widgets that satisfy many common use cases. Date pickers, multi select boxes, and even charts, most of these are already packed in. The list is long, what you see in the next screenshot is just a start.

![list of widgets](/images/appsmith-widgets.png)

And finally the most complex part: adding interaction and state management to the UI. In Appsmith world, this is done with reactively.

So, imagine you have to get a list of customers from DB. You write a query and save it in Appsmith (let's call the query `getCustomers`):

```sql
select * from customers;
```

Then, you add a table component and "bind" the content of the table to the query. Voilà! The table gets populated with data, and you only have to customize columns.

Imagine you want to do filtering server side. This means that we will add a new input box called `inputFilter`.

Then we change the query to get this value:

```sql
select * from customers where name = "{{inputFilter.value}}";
```

Appsmith will reexecute the query each time the value of `inputFilter.value` changes (in a smart way; not firing at every character). (*Doesn't this look similar to the very, first, AngularJS? Yes to me!*)

And there's much more. Even Javascript classes can be data sources. This means you have the ability to do processing on the data, before sending the query, or after. Appsmith detects if there's a dependency and will trigger the right query/function based on user input!

## This is cool, but are there any downsides?

There are downsides. I'll try to tell the ones we hit after three months with it.

* There's no way to customize the look & feel. This is ok for most CRUD, Internal apps, but if your customer is more demanding, personalizing Appsmith can only go that far.
* Performance: don't expect appsmith apps to be top-notch. Since state management is reactive, each time you change something the UI has to recalculate what to trigger and what to change. This comes at a cost.
* Git integration is not really useful. When you add git to your project, you discover that the whole app is *just* a big json of keywords that make sense to them. All your queries and functions become stringified, meaning you cannot even check if there's something that is not right. And the biggest problem is that two people cannot collaborate on the same app: merging is impossible because you have to figure out conflicts on json keys. In order to solve this problem, we try to merge PRs as soon as possible, sometimes disrupting the flow of other developers that have to review PRs in a hurry to avoid merge conflicts.
* Reviewing PRs is very limited. For example, you cannot inspect the code for bad things. The only thing you can do is execute the app and check that everything still works. But nailing down if the query is ok, if there are no wastes in memory or inefficient code, is complicated because everything is stringified.
* Debugging is another pain point. Apps that become big enough tend to have bugs in the data, for example in queries. Appsmith has a debugging panel that allows you to inspect things, like the return value of a query, or to write console logs, but you cannot stop and debug javascript like you're used to.
* It's impossible to reuse components and data sources across apps.
* In the eventuality you need a component not provided by Appsmith, you can write your own in an iFrame. This brings in a whole new set of problems, like sending data to and from the iframe, which would require another blog post (that has been my biggest pain point recently).

## Conclusions

So, how's gone with Appsmith so far? My company has decided to keep it as a prototyping tool, because it really makes development super-fast. However, we've also reached the point where the features we want to implement deserve a fully fledged SPA written in real code; so in the next months we'll be developing the same apps in React. In the meantime, if there'll be new features to validate with the customer, we'll implement in Appsmith first.

Anyway, apart from my specific work case, I think there's room for appsmith development out there. I get asked a lot to make "apps" to store informations, like users, customers, etc - appsmith is just the perfect tool for that. Small apps with very limited features: if that's the case, no need to set up a complex react stack, appsmith will just do the job.
