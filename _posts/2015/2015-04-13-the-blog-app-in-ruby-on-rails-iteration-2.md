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
  - howto
  - RoR
  - ruby
  - ruby on rails
headerImg: /uploads/2015/04/rubyrails.png
---
Previous Articles and tutorials about Ruby:

  1. [Howto: create a blog using Ruby on Rails](http://michelenasti.com/2015/03/howto-create-a-blog-with-ruby-on-rails/)
  2. [Installing Ruby on Rails on Mac is a pain](http://michelenasti.com/2015/03/installing-ruby-on-rails-on-mac-10-10-is-a-pain/)

In the [previous article](http://michelenasti.com/2015/03/howto-create-a-blog-with-ruby-on-rails/) we created a `post` entity and a `comment` entity. If you remember, we did not create the one-to-many relationship between these two objects of the model. Let's see how to create them.

In real world applications there are three types of relations:

* **one-to-one**
* **one-to-many**
* **many-to-many**

I have ~stolen~ acquired a photo on how to organize relations inside ruby objects:

![Ruby on Rails relations](/uploads/2015/04/rubyrelations.png)

Let's take as example the `comment` entity. It has a `post_id` attribute that obviously will contain the Id of the `post` linked. So, as we see in the previous table, our relation is of type Many-To-One (since many comments can belong to only one post). Comment is the model with the foreign key so we will add this line to the `Comment.rb` class:

```ruby
belongs_to :post
```

While in the `post` class we will write

```ruby
has_many :comments
```

Note that Ruby will handle by itself the pluralism of the entity, that's why we write `:comments` and not `:comment`.

Another modification that we can do is to say that, if we delete a post, we want to delete all the relative comments too. We can achieve this by writing

```ruby
has_many :comments, dependent: :destroy
```

As of now we have linked the two models of our application.

How to quickly test it? We can open the Rails Console by executing

```shell
rails console
```

In a terminal.

Here we have a full Ruby console but with all Rails classes preloaded, so we can work on the entities and explore a little bit.

For example, let's write:

```ruby
Comments.all
```

To get all the comments in the database (if you don't have any comments start your rails application and write some comments at `http://localhost:3000/comments`).

Let's write

```ruby
Posts.all
```

To get a reference of all posts. Now we can treat all posts like an array, so If we write

```ruby
p[1].destroy
```

You will see that the **second** post will be deleted (you know that we start counting from zero, don't you?). And since we have used the `:destroy` option, we will see also that all relative comments will be deleted too.

Check with `Comments.all`.

Let's digit quit to exit the console and let's have a look at the routes, writing `rake routes`.

What we see now is routes for all the comments and routes for all the posts. But the ideal would be to have comments under the Posts route (something like `/posts/1/comments`).

How to do this?

Let's open the `/config/routes.rb` file. All the routes are shown just using the commands `resource :posts` and `resources :comments`. If we want to show the comments route under the posts, we have to write:

```ruby
resources :posts do
   resources :comments
end
```
 
Launch again `rake routes` in the console and now you'll see new routes, exactly as we wanted.

If we start the Webserver (Rails server) we can try these new urls, however they actually break something in the view, something that we will fix soon.

In the next lesson we will talk about validation. This is a good moment to save our work!
