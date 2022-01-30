---
paginate: true
comments: true
author: musikele
category:
- english
layout: post
date: 2019-10-02
tags:
- jest
- testing
- javascript
title: Jest and Puppeteer from the barricades
header-img: "/images/1BM_RS2-DjYk_JZUKr4uq0g.png"
description: 'Jest and Puppeteer are two great tools. Together they can satisfy a
  lot of needs. Testing simple JS is easy, testing complex async scenarios is super
  hard: by learning these two tools you''ll get test superpowers to use in your projects!'

---
When I started my career as a software developer I immediately become "friend" with the concepts of **unit testing and integration testing**. At the time (2012) the backend was written in Java and the frontend was written in GWT, a Java framework to build UIs that is compiled to JS.

Unfortunately **all our testing efforts were only directed towards the backend**, probably because of the language; this means that **we could not find UI bugs before it was too late**.

Fast fotward many years, GWT is not a thing anymore (good for you!), and Javascript is one of the most studied and used languages of the world. Javascript ecosystem is growing exponentially with thousands of packages, frameworks, ideas, applications that come out all the time. The language itself is evolving every year, after the first 20 years of no interesting additions. So... testing in JS became a necessity!

At the start of 2019 there was a lot of hype around Javascript testing, mainly because of:

* popular UI frameworks (react, vue, angular...) were designed from the ground up to be testable;
* NodeJS has become stable and mature
* The ubiquity of the web (progressive web apps, or React Native-like projects, made possible to use js on mobile too)

I also read an interesting article saying (cannot find it anymore) "**the js community has finally realized that web apps must be E2E tested first, instead of unit tested**_"_. That's true because e2e tests have become easier (but not dead easy) to write and to repeat. Let's see it!

![]({{ site.baseurl }}/images/1BM_RS2-DjYk_JZUKr4uq0g.png)

## How to structure the code

Unit tests and End-to-end (e2e) tests are executed in two different environments: unit tests are executed in a browser-like environment provided by jest, while e2e tests are executed in a real browser. They need different configurations, that's why I've created two directories:

* `unit` for unit tests
* `e2e` for end to end tests

[All the code is here](https://github.com/musikele/jest-puppeteer-tutorial).

## Unit testing: JEST

Let me introduce Jest. **Jest** is a testing framework mainly maintained by Facebook. It has a lot of features:

* support for typescript,
* babel,
* webpack,
* latest ES features,
* support for testing timers, classes, etc.
* support for mocking
* a clear-enough documentation

To install:

    $ npm i --save-dev jest 
    $ jest --init # create an initial conf file

and, for the purpose of using ES6 syntax:

```console
npm i --save-dev babel-jest @babel/core @babel/preset-env
```

Then, let's add some Babel configuration to transpile code:

```javascript
//babel.config.js
module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    browsers: '>2%',
                },
            },
        ],
    ],
};
```

## Let's run our first test

This example is slightly modified from JEST [getting started](https://jestjs.io/docs/en/getting-started). Suppose we have this function:

```javascript
// unit/example01/sum.js
export default (a, b) => {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('The sum function accepts only numbers')
    }
    return a + b
}
```

Ok! Let's write a test for this function:

```javascript
// unit/example01/sum.spec.js
import sum from './sum'

describe('sum module', () => {
    it('should sum two numbers', () => {
        const result = sum(2,3)
        expect(result).toBe(5)
    });
});
```

> **Try it!** Use `$ npx jest`  from the command line and see the output! Jest will search for *_.test.js and *.spec.js_ files, and will execute them.

`describe()` is used to define a test suite - a logical group of tests that are related. You can write tests directly at the top level, or you can wrap as many `describe` blocks you want one into another; these names hare helpful when the tests start failing because they provide some context of what went nuts.

> **Suggestion**: I prefer to write at least one containing the module name and optionally another that will explain the base condition I am checking. Example:

```javascript
describe('Products service', () => {
	describe('The product is not in the database', () => {
		...
    })
})
```

Let's go back to our example. the function `it()` (or `test()`) is the actual test function that will be executed. Usually our tests are comprised of three parts:

* **setup** - import the code, insert the configuration, etc.
* **execution** - where we actually call the sum function
* **expectations test** - where we check that the test has actually succeded.

We use Jest function `expect()` to assert that the result of the function is `5`; thanks to a bunch of [Jest expectations](https://jestjs.io/docs/en/expect), we can test pretty much everything is testable.

> **Suggestion**: limit yourself to test only the public API of a module.  There's no need to test the inner workings!

And now let's write a test for the _bad_ case:

```javascript
// unit/example01/sum.spec.js
import sum from './sum'

describe('sum module', () => {
    it('should sum two numbers', () => { ... })

    it('should explode with exception', () => {
        try {
            sum(2,'pippo')
        } catch(e) {
            expect(e).toBeDefined()
        }
    })
})
```

> **Hint**: try to make your tests fail. Otherwise you can never know if they're really working.

### Can we check DOM modifications?

Jest integrates JSDOM, a browser DOM API implementation in pure JS. In my experience it will work very similarly to a real browser, and I found it super useful. For example, let's write a function that will change toggle a class over a DOM element:

```javascript
// unit/example02/toggleClass.js
export default (domElement, className) => {
    domElement.classList.toggle(className)
}
```

This very super stupid snippet will add or remove to a `domElement` a `¢lassName` .

Now let's write a Jest test for it:

```javascript
// unit/example02/toggleClass.spec.js
import toggleClass from './toggleClass';

describe('Toggle class on DOM element', () => {
    it('attach an element to the Document and toggle a clas on it', () => {
        // (1) 
        const div = document.createElement('div')
        div.id = 'myDiv'
        document.body.appendChild(div);
        
		// (2) div actually attached to the virtual dom:
        const sameDivAsBefore = document.getElementById('myDiv');
        expect(div).toBe(sameDivAsBefore);
		
        // (3)
        toggleClass(sameDivAsBefore, 'myClass');
        expect(sameDivAsBefore.classList).toContain('myClass');
		
        // (4) 
        toggleClass(sameDivAsBefore, 'myClass');
        expect(sameDivAsBefore.classList).not.toContain('myClass');
    })
});
```

Heeeey, a 3 lines function tested by a 20 lines test :D Well, lot of the code was added to show you something.

At (1) I create a DIV and attach to a Document. **The Document object is provided by JSDOM and is instantiated by Jest** - if you are using NodeJS, remember to change a setting in jest configuration and you're done.

At (2) I just show that _all the DOM API is available_, so I retreive the same element with `getElementById()`.

Then, I will add a class to this element by calling `togleClass()`. We then check that the class has been added by using `expect().toContain()`.

Finally, we call again `toggleClass` (4) and check that the dom element does **not** contain the class anymore.

This is so **powerful**, that by enabling some features (via configuration) I could also _load scripts_ (like jquery) and use it in the test! Not bad.

## Can we mock other functions/classes?

Yes! That's how you reach the zen of unit test.

Let's imagine we have a class `apiClient` that will ask another class `apiService` to make a REST call.  **We want to test apiClient**.

In this example, `apiService` will ask for currency exchange from Euro to many other currencies. `apiClient` will in turn transform the data in a way it is usable, by just keeping the `USD` value.

Here's the code for `apiService.js`, the module that will call the REST endpoint:

```javascript
// unit/example03/apiService.js 
export const getCurrencyExchange = async () => {
  const response = await window.fetch(' https://api.ratesapi.io/api/latest');
  const json = await response.json()
  return json;
}
```

And the consumer, `apiClient.js` (**this** _is the module we want to test_):

```javascript
// unit/example03/apiClient.js
import { getCurrencyExchange } from './apiService'

export const getEuroDollar = async () => {
    const currencyExchange = await getCurrencyExchange()
    console.log(`1 Euro is ${currencyExchange.rates.USD} dollars`)
    return currencyExchange.rates.USD
}
```

What's the problem with this module?

* the value of the USD exchange rate will change over time
* if the network is down, the test will fail

So we need... **mocks!**

Here's a unit test that will mock out `apiService` from using the network.

```javascript
// unit/example03/apiClient.spec.js

//class to test (1)
import { getEuroDollar } from './apiClient';

// stuff we need to mock (2)
import { getCurrencyExchange } from './apiService'
jest.mock('./apiService');

describe('apiClient tests', () => {
    //reset all mocks before use! (3) 
    beforeEach(() => {
        getCurrencyExchange.mockClear()
    })
    
    it('should return euro/dollar exchange', async () => {
        //when called, return this result (4) 
        getCurrencyExchange.mockResolvedValue({
            rates: {
                USD: 2000
            }
        })
        //call the function under test 
        const euroDollarChange = await getEuroDollar()
        
        //expect that getCurrencyExchange has been called (5)
        expect(getCurrencyExchange).toHaveBeenCalled()
        expect(euroDollarChange).toBe(2000)
    })
})
```

* (1) - we import the function we want to test
* (2) - but we need to intercept and change the behaviour of `getCurrencyExchange()`  so we also import it, and with `jest.mock()` we tell jest we want to modify the behaviour
* (3) - imagine we have not just one test like in this example, but a suite of tests, with this code we tell Jest to clear eventual mocks between tests.
* (4) - here we are _really_ **mocking the behaviour** of `getCurrencyExchange`. Jest will return the value specified in `mockResolvedValue` instead of making the actual network call. In this mock, inflation was really a thing and 1 Euro corresponds to 2000 $ (Euro rulez!).
* After having instructed the test, we check that the mocked function has really ben called and the mocked value has been returned.

I only scratched the surface of what is possible to do with Jest, and there are thousand of mock tecniques depending of what you want to mock: classes, timers, async methods.. jest has you covered.

Now let's talk about... Puppeteer.

## Puppetteer: a headless Chrome

[Puppeteer](https://pptr.dev/) is a node library that allows to control a Chromium instance. Let's quiclky see an example. To install:

```console
$ npm i --save-dev puppeteer 
```

Puppeteer will download a beta-version of chromium that will be used to run our tests. Usually the puppeteer version uses a chromium version that is 2-3 versions further than the regular chrome, and this is done to test new chromium too.

Let's try to run a super-easy example that comes from their website: let's take a screenshot of my personal website, michelenasti.com:

```javascript
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://michelenasti.com');
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();
```

Some things to note:

* Most of the time we will interact with the `page` object, almost all useful stuff is there
* Almost all methods are async, so we have to use `await` everywhere
* Chromium is started with a very dumb resolution, 800x600, like my first 486 monitor.
* The documentation is your friend: check it out!
* If you want to _see_ chrome in action, pass this configuration to `puppeteer.launch()`:

```javascript
await puppeteer.launch({
  headless: false
})
```

Nothing more to say, we are ready to glue together jest + puppeteer in our tests!

## jest-puppeteer to the rescue!

Let's instal [jest-puppeteer](https://github.com/smooth-code/jest-puppeteer), a jest plugin to remote-control puppeteer in jest:

```console
$ npm install --save-dev jest-puppeteer
```

At this point, in the root of your project, create an `e2e` folder that will contain all your e2e tests. Copy `jest.config.js` from `unit` and add this option:

```javascript
{
  "preset": "jest-puppeteer"
}
```

This setting will tell Jest to launch tests in a different environment, that is Chrome.

Ready to run our first test?

```javascript
// e2e/example01/01.spec.js
describe('Google', () => {
    beforeAll(async () => {
      await page.goto('https://google.com')
    })
  
    it('should display "google" text on page', async () => {
      await expect(page).toMatch('google')
    })
  })
```

I cheated, this example comes directly from jest guide, but it is helpful to understand how it works.

* in the `beforeAll` block we navigate to the google page;
* in the test block, we check that `google` is somewhere on the page.

> **Suggestion**: try to change website with michelenasti.com ... it will fail

Let's move to something more interactive. We will borrow [Todolist MVC app](http://todomvc.com/examples/vue/) from [this website](http://todomvc.com/) (they replicate the same app in every possible framework so you can study them).

The idea is to:

* add a todo item
* check that it has been added to the list
* remove it

Let's write such test!

```javascript
// e2e/example02/01.spec.js
describe('TodoApp MVC tests', () => {
    beforeEach(async () => {
        await page.goto('http://todomvc.com/examples/vue/')
    })

    it('should add a todo', async () => {
    	// (1)
        await page.type('input.new-todo', 'this is a todo');
        await page.keyboard.press('Enter');
        const label = await page.$('div.view label')
		// (2)
        const property = await label.getProperty('innerHTML')
        const jsonValue = await property.jsonValue()
        console.log(jsonValue)
        expect(jsonValue).toBe('this is a todo')
		// (3)
        await page.hover('div.view label')
        await page.click('div.view button.destroy')
        const label2 = await page.$('div.view label')
        expect(label2).toBe(null)
    })
});
```

I don't want to illude you, you'll learn many tricks with experience, like me while I was preparing these examples.

* at (1) we write in the big input box our todo item
* at (2) we check that the value has been added to the list
* at (3) we first hover the item, in order to make the destroy button appear; then we click it. _What happens if we do not hover over the text?_

## Conclusions

...And that's it! Testing is an art and as such must be constantly exercised. These frameworks are complex because they allow to do complex things. During this talk I tried to give you hints of what you should do based on my experience.

I also want to highlight some **alternatives** of these frameworks. For **Jest** the most famous alternative is **Mocha**, it has almost the same API. However, to use mocha you have to install a lot of external libraries (the assertion library, the mocking framework, etc), so I prefer jest because it already contains everything.

Regarding **puppeteer**, there are some old competitors like **Selenium** (and you can write tests in other languages too, or you can also use other browsers);  if you want to stick with Chrome, **Cypress** is another great tool that is worth to try. It is much more visual than puppeteer.

Remember:

> If there is no test written, than you didn't test it.
