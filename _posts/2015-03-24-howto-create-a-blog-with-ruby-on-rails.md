---
id: 218
title: 'Howto: create a blog with Ruby on Rails'
date: 2015-03-24T13:30:53+00:00
author: musikele
layout: post
guid: http://michelenasti.com/?p=218
permalink: /2015/03/howto-create-a-blog-with-ruby-on-rails/
dsq_thread_id:
  - "4061839464"
categories:
  - English
tags:
  -  blog
  - howto
  - RoR
  - ruby
  - ruby on rails
---
[<img class="aligncenter wp-image-224 size-full" src="https://i1.wp.com/michelenasti.com/wp-content/uploads/2015/03/rubyrails.png?fit=640%2C320" alt="rubyrails" srcset="https://i1.wp.com/michelenasti.com/wp-content/uploads/2015/03/rubyrails.png?w=640 640w, https://i1.wp.com/michelenasti.com/wp-content/uploads/2015/03/rubyrails.png?resize=300%2C150 300w" sizes="(max-width: 640px) 100vw, 640px" data-recalc-dims="1" />](https://i1.wp.com/michelenasti.com/wp-content/uploads/2015/03/rubyrails.png)

I'm following a course on Coursera about Ruby on Rails, well the course is about [Web Architectures](https://www.coursera.org/course/webapplications "Web Application Architectures") but it uses Ruby on Rails to explain it's uses. So this is a good excuse to experiment with this new language and framework.

It is not the first time that I try to learn RoR; when I completed my university it was in its "momentum" &#8212; it was one of the coolest frameworks to play with. Since 2012 things have changed a bit, now NodeJS is the new "new", but who cares: when you learn something new you should target at the idea, not the execution.

RoR is one of the first frameworks that have speed up web development; with some simple (very simple) commands you can build <del>ugly</del> websites that just work. Then you only have to customize it.

Some _advantages_ of RoR: **convention over configuration**, so that you don't have to hassle with stupid details. Usually the defaults are already what you want. RoR is a good tool for **Agile development**, testing is built-in and the server doesn't need to restart if you modify something; a good set of **generators** that generate almost everything for you. Another principle worth of noting is **DRY** (**don't repeat yourself**), so for example you don't have to write the sql table, if you have the structure of the table written in the entity. You'll see this below.

And what about _disadvantages_? You have to learn a **new language** (Ruby), that outside RoR, is used less than never; there is some kind of **"magic" **in its generators, so you never know what's going on; and also Twitter, that has used Ruby in its early stage, has rewritten everything in Java: many have seen this as a problem of scalability. (It seems, however, that the scalability problems did not depend on Ruby itself but on a horizontal scalability issue).

### Let's get our hands dirty

Assuming you have [installed Ruby on Rails](http://railsinstaller.org/en "Rails Installer"), here are the steps to produce an "iteration 1" of a blog application:

<pre class="lang:default decode:true">rails new blog && cd blog</pre>

this command creates a new directory named "blog" and then we "cd" into it.

<pre class="lang:default decode:true">rails generate scaffold post title:string body:text

rails generate scaffold comment post_id:integer body:text</pre>

these two lines create the "**post**" and "**comment**" entities, as well as all the **model**, **view**, **controllers**, and **tests**. We specify the actual attributes of the entities on the command line; so for example post has a <span class="lang:default decode:true  crayon-inline ">title </span> of type string, and a <span class="lang:default decode:true  crayon-inline ">body </span> of type text. One note about <span class="lang:default decode:true  crayon-inline ">post_id</span>  from the entity comment: it will be linked to the post, but in iteration 2.

<pre class="lang:default decode:true">rake db:migrate</pre>

** rake** is a command that will find changes in the model and will update the database accordingly; this follows the DRY principle (I told you!). It will also version your db scripts.

<pre class="lang:default decode:true">rake routes</pre>

rake will create routes to the actual views. All this links are available to use.

<pre class="lang:default decode:true">rails server</pre>

This command will start a server on http://localhost:3000 . You should see a welcome page by ruby on rails. Can't see it ? Install it correctly !

If the server has started, you can then navigate to the routes outputted by <span class="lang:default decode:true  crayon-inline ">rake routes</span> , so try to go to http://localhost:3000/posts and http://localhost:3000/comments.

I want to point out that **we didn't open any IDE ... just the console. **

What can we do with this? quite nothing, for now, but we are still in **iteration 1** !

Will we ever get a fully functional blog app? follow us on the next episode and you'll know!