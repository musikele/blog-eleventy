---
paginate: true
comments: true
author: musikele
category: English
layout: post
date: 2020-12-27
tags:
- mvc
- web
- laravel
- django
- rails
- artisan
- orm
- documentation
title: A gently intro to MVC Frameworks
header-img: "/images/coding1.jpg"
description: What is a MVC Framework, why it exists, how it works.

---
In the last few years I've worked or played with a bunch of MVC frameworks: **Laravel**, **Ruby on Rails**, **Django**, and **AdonisJS**.

With two of them (Laravel and Dango) I also have some experience in production environments. Laravel is the one I know most.

So, what do they all share in common? What's the difference between them and Express, Flask, Sinatra? This article will try to explain the philosophy around those tools.

## Why do we need these tools? 

The web is not only a matter of serving the right file to the user; you usually also want to: 

*  pass arguments, values, cookies, more generally data with the request; 
* customize the output: not only in the format (plain html, or json, or ... xml if you are kink enough), but also the data in it (if you are a logged user you may want to see more things than an anonymous user; etc)
* handle security, that is nowadays a first class citizen
* handle authorization, with one of the multiple authorization schemes hat have appeared in the last few years 
* be able to scale: in the number of concurrent users, in the size of the handled data, and in the organization of the code itself. 

The key point here is,**people got tired of solving the same problem over and over and invented a set of tools that standardized/simplified the developer's job**, allowing to focus more on the business logic than on the details.

## So what's this MVC stuff?

M stands for **Model**, and means the data that is manipulated by the framework. In current web frameworks the Model usually corresponds to classes that map to a database (E.g. `Person` class is linked to the `persons` table). 

V stands for **View** and means the way the data is presented to the user. In my small dev life I've seen many ways to represent this part: JSON responses for example, or plain HTML. Usually, modern MVC tools offer a template system so you can write the _products.html_ page once and then inject the data to be displayed. 

C is for **Controller**, the part that will do the dirty job. When a request arrives, the controller will validate the input, fetch the database, apply business rules, and pass it to the right view. Or it will trigger some other systems. _This is the part you'll write in some programming language_.

## Opinionated vs Unopinionated

Instead of referring to MVC vs Non-MVC frameworks, I think **the best classification is between _Opinionated_ vs _Unopinionated_**. Opinionated frameworks are those that are presented in this article; they give to the dev a lot of pre-made tools with sensible defaults that will do all the heavy lifting. Sad to say, but the developer's job is sometimes just to configure these tools to make them work as needed.

With _unopinionated frameworks_, you are alone with a tool that handles requests and responses. You may need to write all the tools you need, and end up creating a framework yourself. An example: you may need to decide how to access the database, or handle authentication... In this category I see **Express**, **Flask**, **Sinatra**.

## The router in MVC

Almost all the opinionated frameworks expose a functionality called _router_. Similarly to phisical routers, these pieces of software will understand the URL of a request and will route to the right controller. One can create a route for `/products/123` and the router will send this request to `ProductController` calling the appropriate function and passing the parameter `123` as argument. Isn't this lovely? 

So when I have to debug an application I usually start from here; I try to understand where the router configuration is (usually in `routes.php` or `urls.py`), and where the route I'm interested will point, and follow it.

## The ORMs

**ORM** stands for _Object Relational Mapping_ and is a framework that allows to express sql queries using class constructs. Almost every major framework ships an ORM that is perfect for simple and sometimes elaborated queries. Basically the Model classes will extend a base class that contains all the boilerplate to read from the DB table and perform queries. For example, in Laravel: 

```php
<?php

use Illuminate\Database\Eloquent\Model;

class Flight extends Model
{
    //
}
```

The class `Model` is the base class that will give to `Flight` all the fancy methods, like: 

```php
// Retrieve a model by its primary key...
$flight = Flight::find(1);

// Retrieve the first model matching the query constraints...
$flight = Flight::where('active', 1)->first();
```

## Template systems

Almost every MVC framework use a template system, so you can create HTML files with lower effort, even though it's nowadays very easy to just respond with JSON. Usually it only depends on what you return from the controller. 

## Command line utilities 

Laravel has **artisan**, Python has **manage.py**, Rails has **rake**. These three command line utilities do _a lot_. They can: 

* **create and execute migrations**, that are operations that will change the structure of your database. You may create a migration to add a new table or change a column., for example. You can also rollback if something doesn't go as planned. All of that without writing SQLs directly on the DB server. We use this feature on a daily basis during development. 
* Likewise the migrations, sometimes you only want to add data in tables, like the values of a select box. This process is called **seeding**.  
* Put the server on **maintenance mode** and resume
* **create boilerplate** (models, controllers, views...) from command line, so that you only have to fill those generated files 
* **execute tests**  
* **create custom commands**; for example, we usually create commands for operations that should be triggered by cron, or long-lasting batch commands. 
* ...and much more! Every tool exposes more or less capabilities.  

## The tool you'll use more: the documentation

I cannot stress out how important is documentation when using those frameworks. It's impossible to remember all the possible commands and configurations. You end up searching through docs, and if those are well written, you don't need to pay a visit on stack overflow right away. If you write an MVC tool and it doesn't have an _excellent_ documentation, with a lot of examples, it will probably not be used by anyone. 

## Standardization

Another thing that pays off is that, no matter who'll work on what, all the code will look the same, and will be organized the same way. This has some value, since those kind of systems must be maintained over a span of several years, while the average dev only works only 2 years in the same company :)  

## Conclusions

I hope I don't have expressed concepts that are too trivial for the average reader; these are the basic info I wish somebody told me at the time. 