---
eleventyExcludeFromCollections: false
layout: post
title: Some tricks for 11ty that I learned along the way
description: in this post I'll explain how to create a collection from a folder, how
  to use slugify in tags page, and how to create a page containing all tags ordered
  alphabetically
permalink: "/some-tricks-for-11ty-that-i-learned-along-the-way/"
date: 2022-04-03T00:00:00.000+02:00
tags:
- 11ty
headerImg: "/images/nerdy-man-in-checkered-shirt-with-computer.jpg"

---
In this post I'll describe some 11ty tricks I've learned while setting some features of this blog.

## Create a collection from a folder

Coming from Jekyll, I had all my posts in the `_posts` folder. If you follow the default guide from 11ty, the first impression is that you have to add a `posts` tag to all your article.

Unfortunately this is not the right approach. Obviously [this is also described in the official website](https://www.11ty.dev/docs/collections/#getfilteredbyglob(-glob-)), but it's buried under a lot of other stuff. You can create a custom collection by adding this in `.eleventy.js` file:

```javascript
eleventyConfig.addCollection("posts", function (collectionApi) {
    return collectionApi.getFilteredByGlob("_posts/**/*.md");
});
```

This will create a classic `collections.posts` that you can later use in your templates.

## Create a page for every tag

I followed the guide [zero-maintenance tag pages](). My only change is, since I have some tags with spaces, to use the `slugify` filter:

```markdown
...
{% raw %}
permalink: /tags/{{ tag | slugify }}/
{% endraw %}
---
...
```

Unfortunately, this error started to appear:

```shell
11ty] > Output conflict: multiple input files are writing to 
`_site/tags/javascript/index.html`. Use distinct `permalink` 
values to resolve this conflict.
  1. ./tags.njk
  2. ./tags.njk

`DuplicatePermalinkOutputError` was thrown:
[11ty]     (Repeated output has been truncated…)
```

What's going on? it's not very clear, it says that the file `tags.njk` is trying to create multiple files that are linked to the same page, `_site/tags/javascript/index.html`.

Suppose you come from another blogging platform and you have housands of posts tagged with non-uniform values. For example, I had `javascript`, `Javascript` or `JavaScript` as tags of different articles. Basically, they are three different things for 11ty, and when we're using slugify they all try to write to the same file, which is an error for this blog system.

Unfortunately this is not documented anywhere and I had to debug the source code + ask in the [official Discord server](https://www.11ty.dev/blog/discord/), that I found very useful.

The solution? Find the offending tags and write all of them in the same way. I had to do various find&replace to fix all of them, and now I have to remember to always write tags in lowercase, but I don't think it's a problem once you know.

> Note: whenever you create a link to tags, you must always use `slugify` filter.

## Create a page with all tags

After switching from Jekyll to 11ty, Google Search Console started complaining that one of my pages is missing: it was a page with all my tags listed. I decided to create a page that lists all my tags, so search engines can crawl them easily.

To do that, I first had to add a new filter in 11ty to sort tags by key:

```javascript
//.eleventy.js
  eleventyConfig.addFilter('sortObjectByKey', (collection) => {
        const entries = Object.entries(collection);
        const toReturn = entries.sort((entry1, entry2) => {
            if (entry1[0] <= entry2[0]) return -1;
            else return 1;

        });
        return toReturn;
    });
```

Then I used this filter in my `tags_all.njk` page:

```markdown
---
layout: default
permalink: /tags/
title: Tags
---

<h1>Tags</h1> 

<section>
    <article>
      <ul>
      {% raw %}
      {% set orderedCollection = collections | sortObjectByKey  %}
      {%- for tag, posts in orderedCollection %}
        <li><a href="/tags/{{tag | slugify}}/"><strong>{{ tag }}</strong></a> - {{ posts | length }} posts</li>
      {%- endfor -%}
      {% endraw %}
      </ul>
    </article>

</section>
```

## ...In the end (it doesn't really matter)

These 3 tips are not something that will earn me an award in Computer Science, but it's stuff I lost my time on, so some of you may find this stuff useful. Enjoy :)