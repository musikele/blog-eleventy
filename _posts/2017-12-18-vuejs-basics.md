---
paginate: true
comments: true
author: musikele
title: VueJS basics
layout: post
date: 2017-12-17 01:00:00 +0100
tags:
- vuejs
- javascript
- frontend
header-img: "/images/vuejs.png"
description: 'A super brief description of what is VueJS, and how easy it is to get
  in. '
categories: Italiano
---
It has been a long week for me, I'm studying very hard VueJS - this time by coding real examples - and I confirm that there are some very good concepts backed in.

![]({{ site.baseurl }}/images/vuejs.png)

## Separation of data and methods

This is a basic html containing some VueJS markup:

```html
<html>
  ...
  <body>
  	<script src="https://cdn.jsdelivr.net/npm/vue"></script>
  	<div id="app">{% raw %}
  	  <h2>{{ message }}</h2>
      <p>{{ sayHelloTo(name) }}</p>{% endraw %}
  	</div>
  </body>
</html>
```

This is a basic VueJS element:

```javascript
new Vue({
  el: '#app',
  data: {
    message: 'Hello from Vue!',
    name: 'Michele'
  },
  methods: {
    sayHelloTo: function(name) {
      return `Hello, ${this.name}!`
    }
  }
})
```

Let's describe this snippet:

* the `el` references the DOM element with the `#app` id. This element will be _Vuezed_.
* the `data` object contains the data that can be used inside the HTML: for example, we used the `message` property in the Html.
* the `methods` property contains the methods you can use in your html. These are useful for calculations or for actions, like clicking on a button.

I acutally like a lot: a clear separations of data and methods.

This is a concept that comes from the **functional programming world**, that is, separate the data from the functions that interact with this data.

However, Vue is not _functional_ in the classic sense of the definition, because you use the `this` keyword to access data & you're not forced to write pure functions, etc etc.

## A word on this

Have you noticed that from the `methods` section,  if you want to access `data` properties, you use `this` ?

In fact, Vue proxies the `this` keyword so that you can access to data without writing `this.data.message`.

However, for `this` to work you must write 90% of the time the old ES5 `function()` declaration: this is expecially clear in VueJS components, an argouments we'll talk in another post.