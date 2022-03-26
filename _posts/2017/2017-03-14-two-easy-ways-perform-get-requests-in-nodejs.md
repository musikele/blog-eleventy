---
paginate: true
comments: true
author: musikele
title: 'Two easy ways perform GET requests in NodeJS '
layout: post
date: 2017-03-13
tags:
  - javascript
  - nodejs
  - Request
  - Axios
categories: Italiano
---
Today I want to talk about something that we all need during our programming life: requesting data from a remote server. We will do this using callbacks and promises, to show both the approaches.

We will see this specifically for NodeJS because it's so simple that I couldn't even imagine.

In this article I'm going to talk about two super-popular libraries that do the same thing, but expose their API to the developer differently. Let's see what they do and how to use them.

![]({{ site.baseurl }}/images/callbacks.png)

## a simple use case: Google maps API

Just as an example, we will write a simple program that takes a textual address (for example`Piazza della Concordia, Salerno`) and return latitude and longitude.

The URL is this: [https://maps.googleapis.com/maps/api/geocode/json?address=piazza della concordia, salerno](https://maps.googleapis.com/maps/api/geocode/json?address=piazza della concordia, salerno).  Clicking on this link you can see the response in json format.

Our mission is to retrive latitude and longitude, so

```
results[0].geometry.location.lat
results[0].geometry.location.lng
```

## Request: the name says it all

The first library I'm going to talk is simply called [`request`](https://www.npmjs.com/package/request). Install as always:

```shell
$ npm install request --save
```

From the NPM description:

> Request is designed to be the simplest way possible to make http calls. It supports HTTPS and follows redirects by default.

Here is a NodeJS function that uses `request` to perform the call

```javascript
let encodedAddress = encodeURIComponent(address);

  request({
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`,
    json: true
  }, (error, response, body) => {

    //server unreachable
    if (error) { 
      callback('Unable to connect to Google Servers');
    }

    // no results 
    else if (body.status === 'ZERO_RESULTS') {
      callback('Unable to find that address');
    }

    else if (body.status === 'OK') {
      callback(undefined, {
        address: body.results[0].formatted_address,
        latitude: body.results[0].geometry.location.lat,
        longitude: body.results[0].geometry.location.lng
      });
    }

  });
```

`encodeURIComponent()` is a function that converts strings with special characters (like spaces, or quotes..) to a string that can be passed over a URI.

`request` is just a function that takes an URI, some options, and will give the result in a **callback**. Since we are following Node standard approach to callbacks, where the first argument is the error object, the return callback contains a `undefined` as first argument.

## Axios: a Promise based equivalent

[In my last article we talked about promises](https://michelenasti.com/2017/03/12/js-promises-description-pros-cons-of-this-es6-construct.html), so we would like to see these in action, right? We have two options, the first is to wrap `request` in a promise (easy, but more code); the second is to **use a library already built with promises in mind**.

The one I use, and that is super popular, is called **[`Axios`](https://www.npmjs.com/package/axios)**: Here's the description

> Promise based HTTP client for the browser and node.js

To install:

```shell
$ npm install axios
```

Here is the snippet for the axios request:

```javascript
let encodedAddress = encodeURIComponent(address);

let geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodedAddress}`;

axios.get(geocodeUrl).then((response) => {
  // throw error on no results
  if (response.data.status === 'ZERO_RESULTS') {
    throw new Error('Unable to find that address');
  }
  // return new promise with data (for chaining)
  return Promise.resolve({
    latitude: response.data.results[0].geometry.location.lat,
    longitude: response.data.results[0].geometry.location.lng,
    formatted_address: response.data.results[0].formatted_address
  });

  // show data
}).then((response) => {
  console.log(`latitude: ${response.formatted_address}`);
  console.log(`latitude: ${response.latitude}`);
  console.log(`latitude: ${response.longitude}`);

  //error handling 
}).catch((e) => {
  console.error(e);
}); 
```

The approach here is different. `axios.get()` returns a Promise, that we chain with a call to the `then()` method.

Once we have the data, in the form of `response.data`, we can extrapolate the fields we need.

I could just print the data in the first `then()` block, but to be more coherent with my design guidelines (_every function does just one thing_) I wanted to separate the two operations so the first block will just retrieve the data, then returns another Promise (`return Promise.resolve({..})`).

The next `then()` block will only display the data retrieved.

## Which approach do you prefer?

This depends on you! **I prefer promises**, because I find them more natural, but being a Node coder means you can choose and decide what's best for you. Both are well tested libraries with well known patterns, so you only have to choose the one you love.

Cheers from `40.7802306`, `14.7010686` !