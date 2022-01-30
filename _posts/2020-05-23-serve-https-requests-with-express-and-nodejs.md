---
paginate: true
comments: true
author: musikele
category: English
layout: post
date: 2020-05-23
title: 'Serve HTTPS requests with Express and NodeJS '
description: 'Let me show how easy it is to write an https server with nodejs and
  express. '
header-img: "/images/person-holding-white-scroll-2292837.jpg"
tags:
- nodejs
- express
- https

---
One of the things I do, on my job, is to maintain a javascript library to display ads. Customers will inject this script on their page and _voilà_ they start displaying ads.

Everything works nice and easy except debugging. One of the problems is that we build this big chunk of javascript with customer's data, a bunch of other open source libraries, all concatenated in one file (there is a reason why we do that - we are not crazy).

So, when we have to debug the library, we usually _generate_ a modified version (uncompressed, or with sourcemaps, or with a different configuration...) and then we inject it into the page. To do that, we use several thecniques:

* via [Requestly](https://www.requestly.in/ "Requestly.in") (a firefox and chrome plugin) it is possible to redirect a request to localhost
* by specifying an entry in `/etc/hosts` we can also redirect traffic for a domain to aother ip, like localhost

The problem is when our target website is on **https**. As you know, when the page is served on a secure channel, all other requests must be https too. This means that if I require **`https`**`://michelenasti.com` I cannot add a script tag pointing to **`http`**`://cdn.google.com/jquery.js` - the browser will refuse to serve the file and will display a warning in console.

> The opposite is not true: if the page is on http, you can link to https files.

So I needed to serve my files over https. How to do that?

![Yes, you need to "generate" a certificate. ]({{ site.baseurl }}/images/person-holding-white-scroll-2292837.jpg "certificate")

## Generate the certificates

First of all, we need to **generate a certificate** that will be used by our https server. In the same folder of express `index.js`, run this command on mac or linux:

```console
$ sudo openssl req -x509 -nodes -days 365 -newkey rsa:2048 -keyout ./selfsigned.key -out selfsigned.crt
```

The program will ask you to answer some questions on the issuer of the certificate.

This will generate two files, `selfsigned.key` and `selfsigned.crt`, that can be used by any webserver in the world, but for now we'll use in nodejs.

**This step is only required once**. Generate and forget :) 

## Use the certificates in express

in the same folder of the generated certificates, create a file `index.js`:

```javascript
const express = require('express');
const fs = require('fs');
const http = require('http');
const https = require('https');

// read the certificate files previously created and create 
// options object for https server 
var key = fs.readFileSync(__dirname + '/selfsigned.key');
var cert = fs.readFileSync(__dirname + '/selfsigned.crt');
var options = {
  key: key,
  cert: cert
};

const app = express();

// this handler will respond to all GET requests. 
// It will respond with the file that matches the url. 
// For example http://localhost:3000/index.js 
// will respond with this very file. 
const handler = (req, res) => {
    res.sendFile(`${req.url}`, {
        root: '.'
    });
}
app.get('*', handler);

// set the server to respond on http and https 
var httpServer = http.createServer(app);
var httpsServer = https.createServer(options, app);

// set the addresses. This will start the program! 
httpServer.listen(3000);
httpsServer.listen(8443);
```

**The first time you run this program, browsers will ask you if you trust this certificate**. Then, the server will work flawlessly.

To conclude, I want to point out **how easy** it is to create an http(s) server with few lines of code and nodejs.

And also, that **this server should not end in production**. what if a hacker will request \`https://your_server:8443/selfsigned.key ? Or some other random file on your hard disk? enjoy :)