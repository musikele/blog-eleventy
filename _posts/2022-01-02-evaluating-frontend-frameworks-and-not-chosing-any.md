---
paginate: true
comments: true
author: musikele
category: English
layout: post
date: 2022-01-02
title: Evaluating frontend frameworks and not choosing any
permalink: evaluating-frontend-frameworks
description: 'For one of our latest projects we evaluated many frontend frameworks, and this discussion went on for months before taking the decision to, well, not choose a frontend framework. What happened?'
header-img: "/images/frontend-frameworks.png"
tags:
- frontend
- angular 
- react
- vuejs
- preact
- svelte
- lit
- webcomponents
- ssr
- nextjs
- ejs

---

For one of our latest projects we evaluated many frontend frameworks, and this discussion went on for months before taking the decision to, well, not choose a frontend framework. What happened? 

Our goal was to build some "widgets" that needed to be:
-  **Served thousand times**: we'd like the smallest possible size.
-  **Developer friendly**: the framework should not impose a strict structure to follow. Future widgets may not be developed by us. 
-  **Excellent tooling**: development is easy when there's syntax check and hightlight, visual helps to understand what's going on, test utilities, etc. 

Probably the hardest constraint was the size, that we settled around **15 Kb** gzipped, widget js & css included, images excluded. We don't want to waste the network's capacity with so many bytes. Less bytes sent -> less energy used -> greener planet ! 

So, let's have a look at what framework was evaluated and why it was discarded. 

> *This is not a post on why every frontend framework sucks, they do not - i love them all. This is a post on the process that took me and the team to reason about the product many times, often making assumptions that later are found not valid, like every time you work on a green field product.*

## Angular 
[Angular](https://angular.io) was the first one to be discarded. Basically, none of our team has enough experience on it, and angular alone is around 60k, and it imposes a strict structure (and typescript). 

## React 
[React](https://reactjs.org) is super famous, but if you live on mars and don't know why, basically it's because it allows to create composable UIs with low effort and it has very high rendering performance.
Isn't it surprising that React was discarded? Well, even though it's the most famous frontend framework in the world, **it still requires 120 KBs** in order to work. Much of it because of the ReactDOM dependency, but I couldn't find a way to shrink it.  

## VueJS 
[VueJS](https://vuejs.org) is smaller, around 30kb, but not _that_ small. Also, it is very opinionated and we don't want to force people of the future to use VueJS. 

---

Let's now see other less known frameworks we hit during our evaluation phase. 

## Preact 
[Preact](https://preactjs.com) is a library that uses the same React syntax (who-ho!) but it's only 3 Kb. It has a solid user base that made us prefer it against all other react-like libraries, like [Inferno](https://www.infernojs.org). 

Well, after a while we saw that if you imported hooks which are basically needed for everything, you had to add 7 Kb more, but we were still in the budget. For a long time we believed we were going to use Preact for our widgets. We even developed a first version with it. 

## Svelte
[Svelte](https://svelte.dev) is the new kid on the block in the frontend framework space and I can only say good things about it. Contrary to all previous libraries that are essentially interpreters, Svelte is a *compiler*, this means that it's a command-line tool that will spit up code that is rendered by the browser as-is, without side loading THE library (react, vue, angular). 

Svelte created the smallest bundles, smaller than the preact versions of the same widgets. However, the syntax is different than what the rest of the world is used to and the user base is very small compared to the react world. In the end, we judged svelte too risky to depend on. Maybe in 3-5 years Svelte will be a good choice, but not now! 

## Lit and WebComponents 
The last technology we decided to go was [Web Components](https://www.webcomponents.org). These, in theory, fulfill all our needs: webcomponents are a standard technology supported by all major browsers, you only have to write Js and that's it, no? 

Well, no. Writing webcomponents without any external help is difficult and verbose, because the API is very basic and that's why a bunch of libraries have risen to help the developer. One of the most famous is [Lit](https://lit.dev). At the end of the day, Lit would add some polyfills to standardize what's supported by browsers, plus some helper methods to write components in a saner way. 

This would result in 5KB more, but the developer community is basically skipping webcomponents altogether. Probably, the fact that webcomponents do not offer routing, complex state management and all the other bells and whistles, is stopping the community to even test it out. If you go with Lit you have to choose other external projects to fulfill your needs, and this is worse than relying on 120Kbs by react and its entire ecosytem. Last but not least, writing comq qponents in Lit is problematic because the actual HTML lies in a string. it's very easy to mess it up if you're not using an editor extension. And you won't imagine how many people will not install any extension because of their inner beliefs... 

## Server Side Rendered frameworks 
We did a test with this too. My framework of choice was [NextJS](https://nextjs.org) , that uses React under the hood. What is a Server-Side Render framework (SSR) from now on? Essentially, it creates a website app that is pre-rendered on the server, using React syntax, and a file-system based routing. 

The bonus is you get fast rendering of the component, because the HTML of the component is rendered on the server and sent through the wire, so the browser can instantaneously parse and display it. 

The minus is that, in order to execute JS events on the loaded DOM, the browser must receive the JS bundle that contains the library + your JS code. This means that you simply moved React loading later in the chain, but you didn't remove this step altogether. Anyway, SSR methodology is now the de facto standard if you want to develop websites. But I want to build widgets. 

# Two cents on the methodology 
In order to evaluate all those libraries, I first had to understand **what was our goal** then I had to decide **if the library would be a good fit** for it.

We probably realized *what was our goal* after many iterations on the product. At start, we believed we wanted one thing, then we realized we needed more (freedom) or less (KBs). Really, this process was not linear, we runned in circles till we eventually figured out, challenging every assumption all the time. It took a lot, around 6 months.

Regarding the library being a good fit, this was more technical and the framework evaluation was more static. Basically I prepared a simple widget and tried to set it up in all of the previous frameworks. Even setting up the projects was not straightforward, because I am not creating a SPA ([create-react-app](https://create-react-app.dev) is not a good fit, for example) and I wanted to be able to understand every step, from transpiling to minification. We didn't need many features, like bundle splitting, or service workers, that many project starters integrate without asking. 

So, for every project, I had to write my own configuration for [webpack](https://webpack.js.org), or [rollup](https://rollupjs.org/guide/en/). This configuration work was not really accounted at start, but I am glad I did. With it, I could take real misurations for every framework and also I learned a lot. 

# So, who won? 
In the end, we figured out that
- we don't want to add any extra KB that is not strictly necessary. 
- Our widgets are very simple, interaction is usually very very limited. 
- We don't care about IE11 

And our choice become... [EJS](https://ejs.co). 

If I had to give my own a real-world definition of EJS, I'd say it's a library that will allow very complex string substitutions inside javascript strings. You define a template, that usually it's HTML, and a JSON of options, then pass both to EJS, and EJS will render the HTML using the provided options. One option may be, `color: red` for the background color; another option may be `numberOfElements: 5` and EJS will iterate five times on a piece of HTML to create 5 subcomponents. 

modularity is obtained via `include` statements, and JS does not rely on any third party library, it uses plain old vanilla javascript to do everything! 

We did lost something with this choice. First, we lost compatibility with a couple of tools that we really wanted to use. One of them was [storybook](https://storybook.js.org), that is a super-nice preview system. We had to develop our own frankenstein to do the same. 

Another thing that we lost is editor syntax check and highlighting. Even though there's an EJS extension for visual studio code, it does not understand EJS tags in css or JS and it treats those as errors. 

So yes, we definitely lost on the tooling, that was one of our requirements, but we don't think it's that bad in the end. Our choice does not need anyone to learn anything, and one can create a widget in no time! 

## Conclusions 

You may have understood that the right tool for the job is not the one that everyone is talking about, but it always depends. This post is not about my day job, that is nothing different than other jobs; it's more about a process, a going-back-and-forth from the product to the techincal specifiation, 'till we eventually found out what worked best for every use case. 