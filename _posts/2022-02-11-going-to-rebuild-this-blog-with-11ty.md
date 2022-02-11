---
paginate: true
comments: true
author: musikele
category: English
layout: post
date: 2022-02-11
title: Going to rebuild this blog with 11ty
permalink: rebuild-eleventy/
description: I'm going to rebuild this blog from Jekyll to 11ty. In this article I'll
  try to explain why.
header-img: "/images/11ty.png"
tags:
- 11ty
- jekyll
- blog

---
In this period I am studying a lot of concepts, some which I had forgot and others I didn't have the time to study, so a bunch of new blog posts will come, I thing weekly.

However, I am not satisfied with  [Jekyll](https://jekyllrb.com/), my actual blog sytem. The main reason is that it probably arrived at the end of its life, with no developers taking care or pushing it forward. 

The second reason is... **Ruby**. Even though it's a very nice programming language, every time I need to work on my blog on a new computer, I have to reinstall the ruby interpreter. [This is something I've always found very painful](https://michelenasti.com/2015/03/installing-ruby-on-rails-on-mac-10-10-is-a-pain/ "Installing Ruby On Rails on Mac 10.10 is a pain"). I am not a ruby programmer so I cannot understand the internals of Jekyll, neither write a plugin for it, and I find this limiting. 

Another big pain point is it's slowness. It can take around 30-40 seconds to rebuild my blog, which is archaic compared to newer blogging systems. 

This is sad, because in the past I've written a lot of articles about jekyll:

* [Jekyll & Github in pratica](https://michelenasti.com/2016/12/22/jekyll-e-github-in-pratica.html) (in Italian)
* [Le tecnologie che compongono un blog Jekyll](https://michelenasti.com/2016/12/18/le-tecnologie-che-compongono-un-blog-jekyll.html) (in italian)
* [Le migliori piattaforme di blogging (per un developer) a confronto](https://michelenasti.com/2016/12/15/le-piattaforme-di-blogging-a-confronto.html) (in italian)

So, with some sadness in my heart, it's time to rebuild my blog in another platform.

I've considered some other options:

* [Hugo](https://gohugo.io/) - written in Go, very fast, however I am not a hugo developer.
* [Next.js](https://nextjs.org/), [Nuxt.JS](https://nuxtjs.org/), [SvelteKit](https://kit.svelte.dev/), [Gatsby](https://www.gatsbyjs.com/) - Those are super interesting but I think they're an overkill for a blog. Also, they require me to change the structure of my blog, and I don't want to do that now.
* Wordpress - no dinosaurs, please
* [Substack](https://substack.com/) - nice place to create newsletters, but to retain the spirit of this blog, I'll create my own mailing list system.
* [dev.to](https://dev.to/), Medium -  nice platforms if you want to start very fast, but I don't want to be limited by a platform I have no control on it.

So, what I choose in the end? Meet [**11ty**](https://www.11ty.dev/) (pronunced: **eleventy).**

![]({{ site.baseurl }}/images/11ty.png)

* it's written in javascript, and this allows me to understand also what's under the hood.
* It supports liquid, markdown, and all the technologies I already use in Jekyll.
* Full of plugins, configurations, etc.
* It supports some features out of the box, like pagination and tags.
* It's supported by [Netlify](https://www.netlify.com/), my current hosting platform.
* It's the best tradeoff between how much work I have to do and the features I'll gain.

Here's a quick list of things I'll have to check after the migration:

* All articles and pages must be at the **same URL** as before. This is very important for SEO and discoverability.
* all **links must work** exactly the same and point to the same places. Again, SEO and discoverability are my main drivers here.
* **metadata** for sharing on social networks should remain the same.
* the website must **look good** on every display.

So, this blog will stay on hold until I have migrated everything to 11ty. This will take some time. Hope to see you back when it's time!