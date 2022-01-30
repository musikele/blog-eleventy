---
paginate: true
comments: true
author: musikele
category: English
layout: post
date: 2019-06-24
tags:
- typescript
- javascript
title: 'Typescript: why so complicated?! (A list of my preferred options)'
header-img: "/images/typescript-cover-image.jpg"
description: Typescript does not have sane defaults and I had to experiment a lot
  before finding the right set of options for my projects. Here's a discussion about
  module, target, outDir, moduleResolution, lib, etc

---
Hey there, after digging about how Typescript settings mesh together, I decided to write my article about what I found _the hard way_, hoping to clear the path for newcomers.

![]({{ site.baseurl }}/images/typescript-cover-image.jpg)

Once you install Typescript, default values are a bit dumb. For example, 99% of the world would put the source code in a `src` directory, and typescript has to be configured explicitly this way. Let's see my `tsconfig.json`:

```json
{
    "compilerOptions": {
        "module": "esnext",
        "target": "esnext",
        "sourceMap": true,
        "outDir": "./build/",
        "moduleResolution": "node",
        "strict": true,
        "lib": [
            "dom",
            "esnext",
            "dom.iterable",
            "scripthost"
        ],
    },
    "include": [
        "src/**/*.ts"
    ],
    "compileOnSave": true
}
```

This is part of my setup. I will go through some of these options so you can choose wisely.

### The "target" option

Typescript is a compiler from a superset to a subset of Javascript features and `target` determines what kind of EcmaScript (Javascript's formal name) should be targeted.

Possible values are:

* `ES3` (default)
* `ES5`
* `ES6`
* `esnext`

If you leave it blank, or choose `ES3`, your code would be compatible with very old browsers, like Internet Explorer 5 or Netscape Navigator (joking, but not that much). ES3 is the first standardized version of Javascript.

You may think this is a great default value and be tempted to use `fetch`, or `Promise`, and typescript will let you use them, BUT **typescript will not add any polyfill to your code.** Beware of this!

Similarly you can choose to run several different options, `ES5` (if your users are on Internet Explorer),  `ES6`... I prefer `esnext` to be able to use the latest features of the language and leave to Babel the transpilation step.

Did you know that prior to ES6 there was no official way to import some JS code inside another JS code? The community came out with several options and the next section will discuss them.

### The "module" option

**module** determines the way modules (and files) express dependencies between each other. Possible values are:

* `None`
* `CommonJS`
* `AMD`
* `System`
* `UMD`
* `ES6`
* `ES2015`
* `ESNext`

Ouch, so many options for a single task: importing code. Why?! That's because the evolution of Javascript is non-linear,  and many of them do not apply for every platform.

If you use **None** you cannot use `import`, `export`, `require`... nothing.

**AMD**, **System** and **CommonJS** are (IMHO) a thing of the past.  the first (AMD) came from [RequireJS](https://requirejs.org/docs/whyamd.html "RequireJS") and the second from [SystemJS](https://github.com/systemjs/systemjs "SystemJS"). These two are browser's solutions. Not so long ago there was no way to express dependencies across JS files, so many competing systems came out to solve the same problem. AMD and SystemJS did not get enough fortune to become a standard.

**CommonJS** is a spec that is very similar to what NodeJS has implemented (`require`/`exports`).

**UMD** stands for _Universal Module Definition_ and tries to deliver a module that works with every possible module definition defined before.

However, the ECMAScript community went for the `import/export` solution, and node has embraced that too, and we have that available in  `ES6` and `ES2015`.

Again, I prefer to use Typescript as a superset of JS, so I choose `esnext` and let webpack decide how to bundle stuff together.

### outDir or outFile ?

You have decided which module system you want to use (you know  my vote for `ES6`), but do you want a single file in output (`outFile`) or many single files in a output directory (`outDir`)?

If you write JS for the browser you may be tempted to go for `outFile` and let TS deal with everything. You may think that this way you can skip webpack, babel and so on. The problem is that TS allows to use this option only with `amd` and `system`. So this is a hard requirement for that.

The second big problem is that, to build a single file with all modules, Typescript needs also to know the _order_ of files, so _you_ have to provide the list in the right order. Imagine having 30-50-100 modules...

Again, my advice is to use`outDir`. For every source file you get a compiled file in the output directory. Then, again, did I tell you of webpack + babel?

### ModuleResolution

This setting accepts two possible values: `node` and `classic`. At this point there's no need to have a value different than `node` here. For what I read [in the official documentation](https://www.typescriptlang.org/docs/handbook/module-resolution.html),

> Nowadays, this strategy \[`classic`\] is mainly present for backward compatibility.

### Lib

Since we are working in the browser and we are targeting a JS version greater than ES2015, I use the defaults that are `DOM,ES6,DOM.Iterable,ScriptHost`. The list of all available libraries is [here](https://www.typescriptlang.org/docs/handbook/compiler-options.html). If you forget to put those, Typescript will output weird errors like missing `Set` interface or other stuff - I guess the problem is that TS goes in `node_modules` and finds code that is obviously thought for Node, and it fails somehow.

### compileOnSave

An option for IDEs to trigger compilation on a file save. If your IDE does not support it you can disable it but having it turned on it does not harm.

### strict: true

You use Typescript because you want it to catch syntax errors in your library. However, the default value for this option is `false` and this means that many syntax checks are not done for you. 

If you start a new project, I strongly advise to turn on this option. If you, like me, are converting a JS library to TS, this option may transform your job in hell: introduce it gradually and slowly. 

## Conclusions

So many choices to do and I guess inexperienced developers do not know what to do at first. Hoping to do them a favour!

I've also cited **Webpack + Babel** setup here, and this will be discussed in another article. It will require some changes here and there, and typescript will only be used to check the syntax of the project, but the transpilation will be done by Babel.

Curious? Stay tuned!
