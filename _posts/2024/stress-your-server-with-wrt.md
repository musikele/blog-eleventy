---
layout: post
date: 2024-04-10T22:00:00.000Z
title: Stress your server with WRT
description: >
  wrk is a stress test tool: with very few configuration options you can stress
  test your server against a high load. In the article i describe how i used it
  to simulate a bug that appeared only on high loads.
headerImg: /images/server-emitting-smoke.jpg
tags:
  - wrt
  - load test
  - testing
  - stress test
permalink: /stress-test-wrk/
eleventyExcludeFromCollections: true
---

Lately I was exploring **a bug where the communication between two servers goes on timeout under heavy load**. Let me explain this better: a huge number of incoming HTTP connections hits server A, that needs to call server B, and a big percentage of the calls between A and B goes on timeout. The weird thing? A and B live on the same host, so basically A is calling localhost!

One may think that B is designed in a way that cannot handle such a big load: this is not the case, we know by a fact that B can handle thousands of connections, only being limited by the size of the machine. So we needed to find the culprit and before everything else we need to replicate the bug on our local.

This type of tests falls under the name of **stress tests**, or **load tests**. Basically, you must throw at the server a big number of incoming requests in order to see how the server - or the cluster - behaves.

The tool we choose for the job is called [wrk](https://github.com/wg/wrk "wrk github homepage"). It's a command-line app that, in it's most basic form, is already very useful for stress testing.

To install on mac:

```bash
$ brew install wrk
```

On every other system, the official reccomended path is to clone the repo, run make, and use the binary directly.

## How to use the binary

Let's see a classic example:

```shell
$ wrk -t20 -c300 -d30 http://localhost:8080
```

* `-t` specifies the number of threads to use. The best thing to do is to use between half and all the number of CPU cores. So, if your CPU has 20 cores, use a number between 10 and 20. More would just clog the system. In the example, 20 threads.
* `-c` is the number of connections every thread will keep open. In the example, 300 connections per thread.
* `-d` is the duration of the test, in seconds. In the example, 30 seconds.
* `http://localhost:8080` is the url to hit. The request will be a simple GET.

## Tips and Tricks

When I first started to run this command, i got that server A was always timing out. At first I thought it was the bug, but no, the bug was that only a small percentage was timing out, not all of them. So, what's going on?

The friend that gave me the command to run was on a ARM machine with 24-core CPU, and he could replicate the same behaviour in production. Me, on an intel with just 6 cores, had to lower the number until I found the right combination of it.

So, in order to test that things are right, i started very soft:

```shell
$ wrk -t1 -c1 -d10 ...
```

One thread, one connection, 10 seconds, and finally i don't see the timeout. A good assessment that the server is working. After that, i started to increase the number of cores and connections, until i reached the form that could replicate the bug:

```shell
$ wrk -t4 -c30 -d10 ...
```

Apparently, this is the maximum load that my machine can handle before becoming unresponsive. But yes, now around 10% of connections time out, not all of them!

An example of a "good" response from wrk:

```shell
  3 threads and 30 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency   857.73ms  392.03ms   1.93s    65.47%
    Req/Sec    12.52      9.85    80.00     89.89%
  293 requests in 10.04s, 101.29KB read
  Socket errors: connect 0, read 0, write 0, timeout 15
```

Only 15 timeouts after 293 requests.

Why in the 20-threads, 300-connections scenario my server is running out? Basically there are so many resources involved in handling the load, that server A does not find any CPU cicles to even start the request to server B!

An example of a 100% timed out responses:

```shell
20 threads and 400 connections
  Thread Stats   Avg      Stdev     Max   +/- Stdev
    Latency     0.00us    0.00us   0.00us     nan%
    Req/Sec    10.67     24.25   100.00     87.22%
  462 requests in 30.03s, 159.71KB read
  Socket errors: connect 0, read 390, write 0, timeout 462
Requests/sec:     15.38
Transfer/sec:      5.32KB
```

You can see 462 requests, 462 timeouts!

So, not all machines are equal, numbers need to be adjusted based on what you have and what you want to do. Blasting the server with too many connections will stop every server on earth, and does not provide any value.

## And what was the bug?

My colleague noticed that we are creating a new instance of `httpx` client at every request, and this slowed down everything. `httpx` is a python library to make http requests, and it's considered the spiritual (faster) successor of request. To solve the bug, we created just one instance of the client, so that the connections are not dropped after the request. With this new setup, timeouts decreased to a non-significant number.
