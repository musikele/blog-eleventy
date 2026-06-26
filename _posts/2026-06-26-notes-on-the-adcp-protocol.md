---
title: Notes on the AdCP protocol
date: 2026-06-26T11:13
layout: post
description: AdCP is a MCP protocol for campaign setting. In this post I'll write down what I undestood.
permalink: /notes-on-adcp/
eleventyExcludeFromCollections: true
tags:
  - adcp
  - advertising
headerImg: /images/adcp.png
---

AdCP is a protocol for Advertising companies to setup direct campaigns. It's built on top of MCP servers: companies have to setup MCP servers with some capabilities. This protocol is intended to be spoken by agents that want to set up campaigns on SSP platforms. 

Practically, the AdCP protocol has 6 sequential steps. Every step is a JSON call to an MCP server. 

## Step 1 - discovery: find a publisher

Every publisher has to expose a json file, `adagents.json`: 

```json
{
  "version": "1.0",
  "publisher": { "name": "Michele Nasti's website", "domain": "michelenasti.com" },
  "agents": [{
    "url": "https://michelenasti.com/mcp",
    "protocol": "mcp",
    "capabilities": ["get_products", "create_media_buy", "sync_creatives"]
  }]
}
```

## Step 2 - the buyer sets up an account on the seller's site 

Instead of a classic onboarding, Agents can set up with a seller with just a simple json request: 

```json
{
  "$schema": "...sync-accounts-request.json",
  "accounts": [{
    "brand": { "domain": "acmeoutdoor.com" },
    "operator": "pinnacle-agency.com",
    "billing": "operator"
  }]
}
```

Here it's saying: create an account for the agency named "Pinnacle-agency.com" that is operating as an intermediary (_operator_) for the brand AcmeOutdoor. 

## Step 3 - ask for inventory

Once the account as been set up, it's time to request to create a campaign:

```json
{
  "buying_mode": "brief",
  "brief": "Premium sports video, Q2 2026, targeting 25-45 males. Budget $50K su CTV e display.",
  "brand": { "domain": "acmeoutdoor.com" }
}
```
