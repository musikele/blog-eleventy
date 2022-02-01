---
id: 852
title: How to log a PHP Soap call with NuSoap
date: 2016-09-13T19:30:47+00:00
author: musikele
layout: post
guid: http://michelenasti.com/?p=852
permalink: /2016/09/to-log-php-soap-call-with-nusoap/
dsq_thread_id:
  - "5141030553"
categories:
  - English
tags:
  - post
  - debug
  - gestpay
  - nusoap
  - php
  - soap
---
I am doing some debugging in PHP for **Gestpay**.

[**Gestpay**](http://www.gestpay.it) is an italian system that allows to accept payments from customers, all over the world. If you have an e-commerce and want to try something (in my opinion) way more powerful than other systems, you should definitely check this out.

So, today I had to send a php SOAP call to Gestpay, but for some reasons I was doubting that the actual xml contained exactly what I was sending.

We are using [NuSoap](https://sourceforge.net/projects/nusoap/), a PHP library that allows to use SOAP on old versions of the language, as old as 4.x, and that does not have any external dependencies, so it should work with a great number of hostings. You may feel better using something more powerful and modern.

Back to our question: how do you show the NuSoap call?

Here it is:

<div class="gist-oembed" data-gist="musikele/77cf3cf81cd9db9bd0bdac8003093bbe.json">
</div>

And you'll see something the output of your code to something like ...

<div class="gist-oembed" data-gist="musikele/7e50d19bb1a161704b6bff6c70019875.json">
</div>

I found this tip on [stack overflow](http://stackoverflow.com/questions/3606239/how-do-i-view-the-raw-xml-output-from-nusoap)... I'm sticking it in my blog because I'm sure I'll need it in the future!