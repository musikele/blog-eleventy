---
paginate: true
comments: true
author: musikele
category: English
layout: post
date: 2021-04-02
title: 'Clickhouse: a Database for your next Big Data project'
description: Clickhouse is a very fast database for big data with some peculiar characteristics.
header-img: "/images/clickhouselogo.png"
tags:
- clickhouse
- database
- big data
- olap

---
When I started this blog I would have never guessed that I would write a post about ... Big Data?

That's not a field where I am specialized, but since at work we had a problem, we also needed a solution. Let's dig into this!

### The problem: a lot of data and a fragile cluster

We are processing a lot of streaming data coming from all over the web and we are using an ElasticSearch cluster for this. ElasticSearch is a great technology, very mature, supports many different use cases, but it has some issues: it costs a lot to run on very perfomant hardware, and due to the nature of our input data queries can bring down the whole cluster, making it very fragile. I can't enumerate the times the team had to fix the cluster by restarting services even very late at night.

Even if after some time we figured out what was taking down the ES cluster, we still think it is a very costly option for what we need. So we started exploring other approaches and we stumbled on...

### The alternative: Clickhouse Database

Clickhouse is an **OLAP** database. OLAP means _On Line Analytical Processing_, and it's a synonime for "big data" nowadays. Think of these databases as those that are fast on complex search queries, where data may be huge.

The standard, relational, general purpose databases are called **OLTP**, that is _On Line Transactional Processing_. The _Transactional_ here makes a lot of difference, in fact those databases try to preserve data integrity over speed. In this category you may see MySQL, Postgres, etc.

So why **Clickhouse** was a surprise? Well, for two factors mainly. First, it uses SQL to query data, so we don't have to learn a new query language.

Second, **they changed just _one_ thing - the way the data is stored on disk - and this changed everything else**.

In traditional relational databases, rows are stored on disk continously. Imagine a `Users` table. On disk, you'll see that every block contains all the data of a row, like this:

    0: <id0> | <name0> | <surname0> | <email0> | <password0> 
    1: <id1> | <name1> | <surname1> | <email1> | <password1>
    ...

In Clickhouse, data is stored in a _columnar_ way, so the same data is arranged on disk differently:

    <id0> | <id1> | ... | <idN> | 
    <name0> | <name1> | ... | <nameN>
    ...
    <password0> | <password1> | ... | <passwordN>

Data of the same column is stored continuously.

This has two big implications:

* **adding new data is not performant**. Clickhouses prefers large batches of data instead of sending one object at a time. Data insertion requires more time and data is eventually consistent.
* **querying can be much faster**. Disks are phisically optimized to read continuous data, and since data is stored continously, doing aggregations or scans over the table is dramatically faster.

Another funny thing is that we don't need a whole cluster: just one server, at the moment, is handling the same amount of data that we were storing in a cluster of 8 ES machines. Of course we're not crazy horses and we'll probably set up a replica, don't worry :) But still 2 is less than 8. 

So what are the cons?

* **this is not a database for every kind of project**. This will not substitute your redis, mysql, or mongo. This is another tool in your toolbox that you may need if you have to do complex queries on big data.
* **This is not a complete replacement for ElasticSearch**. ES can do much more and I admit my knowledge of both is very superficial. Be sure to choose the right one for your next project!

I am still in the first stage of meeting this DB so don't ask complex questions, I may not have the answers yet. Probably I will also not have the real chance to get my hands dirty because of my role in my team (frontendish fullstackish guy). Let me know if you use it and what are your impressions! 