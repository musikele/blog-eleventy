---
id: 242
title: 'The Blog App in Ruby on Rails - iteration 2'
date: 2015-04-13T20:30:12+00:00
author: musikele
layout: post
guid: http://michelenasti.com/?p=242
permalink: /2015/04/the-blog-app-in-ruby-on-rails-iteration-2/
dsq_thread_id:
  - "4152000991"
categories:
  - English
tags:
  - post
  - howto
  - RoR
  - ruby
  - ruby on rails
---
Previous Articles and tutorials about Ruby:

  1. [Howto: create a blog using Ruby on Rails](http://michelenasti.com/2015/03/howto-create-a-blog-with-ruby-on-rails/)
  2. [Installing Ruby on Rails on Mac is a pain](http://michelenasti.com/2015/03/installing-ruby-on-rails-on-mac-10-10-is-a-pain/)

In the [previous article](http://michelenasti.com/2015/03/howto-create-a-blog-with-ruby-on-rails/) we created a <span class="lang:default decode:true  crayon-inline">post</span>  entity and a <span class="lang:default decode:true  crayon-inline ">comment</span> entity. If you remember, we did not create the one-to-many relationship between these two objects of the model. Let's see how to create them.

In real world applications there are three types of relations:

  * **one-to-one**
  * **one-to-many**
  * **many-to-many**

I have <del>stolen</del> acquired a photo on how to organize relations inside ruby objects:

[<img class="aligncenter wp-image-257 " src="https://i1.wp.com/michelenasti.com/wp-content/uploads/2015/04/wpid-wp-1428646850462.jpeg?resize=522%2C148" alt="wpid-wp-1428646850462.jpeg" srcset="https://i1.wp.com/michelenasti.com/wp-content/uploads/2015/04/wpid-wp-1428646850462.jpeg?resize=300%2C85 300w, https://i1.wp.com/michelenasti.com/wp-content/uploads/2015/04/wpid-wp-1428646850462.jpeg?resize=1024%2C291 1024w, https://i1.wp.com/michelenasti.com/wp-content/uploads/2015/04/wpid-wp-1428646850462.jpeg?w=1346 1346w" sizes="(max-width: 522px) 100vw, 522px" data-recalc-dims="1" />](https://i1.wp.com/michelenasti.com/wp-content/uploads/2015/04/wpid-wp-1428646850462.jpeg)

Let's take as example the <span class="lang:default decode:true  crayon-inline">comment</span> entity. It has a <span class="lang:default decode:true  crayon-inline ">post_id</span>  attribute that obviously will contain the Id of the <span class="lang:default decode:true  crayon-inline ">post</span>  linked. So, as we see in the previous table, our relation is of type Many-To-One (since many comments can belong to only one post). <span class="lang:default decode:true  crayon-inline ">Comment</span> is the model with the foreign key so we will add this line to the <span class="lang:default decode:true  crayon-inline ">Comment.rb</span>  class:

<pre class="lang:ruby decode:true">belongs_to :post</pre>

While in the <span class="lang:default decode:true  crayon-inline ">post</span> class we will write

<pre class="lang:ruby decode:true">has_many :comments</pre>

Note that Ruby will handle by itself the pluralism of the entity, that's why we write <span class="lang:default decode:true  crayon-inline ">:comments</span>  and not <span class="lang:default decode:true  crayon-inline ">:comment</span> .

Another modification that we can do is to say that, if we delete a post, we want to delete all the relative comments too. We can achieve this by writing

<span class="lang:ruby decode:true  crayon-inline ">has_many :comments, dependent: :destroy</span>

As of now we have linked the two models of our application.

How to quickly test it? We can open the Rails Console by executing

<pre class="lang:default decode:true ">Rails console</pre>

In a terminal.

Here we have a full Ruby console but with all Rails classes preloaded, so we can work on the entities and explore a little bit.

For example, let's write:

<pre class="lang:ruby decode:true ">Comments.all</pre>

To get all the comments in the database (if you don't have any comments start your rails application and write some comments at http://localhost:3000/comments).

Let's write

<pre class="lang:ruby decode:true ">p = Posts.all</pre>

To get a reference of all posts. Now we can treat all posts like an array, so If we write

<pre class="lang:ruby decode:true ">p[1].destroy</pre>

You will see that the **second** post will be deleted (you know that we start counting from zero, don't you?). And since we have used the <span class="lang:default decode:true  crayon-inline ">:destroy</span>  option, we will see also that all relative comments will be deleted too.

Check with <span class="lang:default decode:true  crayon-inline ">Comments.all</span> .

Let's digit quit to exit the console and let's have a look at the routes, writing <span class="lang:default decode:true  crayon-inline ">rake routes</span> .

What we see now is routes for all the comments and routes for all the posts. But the ideal would be to have comments under the Posts route (something like <span class="lang:default decode:true  crayon-inline ">/posts/1/comments</span> ).

How to do this?

Let's open the <span class="lang:default decode:true  crayon-inline ">/config/routes.rb</span>  file. All the routes are shown just using the commands <span class="lang:default decode:true  crayon-inline ">resource :posts</span>  and <span class="lang:default decode:true  crayon-inline">resources :comments</span>. If we want to show the comments route under the posts, we have to write:

<pre class="lang:default decode:true ">resources :posts do
   resources :comments
end</pre>

 

Launch again <span class="lang:default decode:true  crayon-inline">rake routes</span> in the console and now you'll see new routes, exactly as we wanted.

If we start the Webserver (Rails server) we can try these new urls, however they actually break something in the view, something that we will fix soon.

In the next lesson we will talk about validation. This is a good moment to save our work!

 