---
title: 'Another pet project: "da quando non piove"'
date: 2026-05-08T08:38:00
layout: post
description: Let's talk about a little tool I decided to toast, "daquandononpiove.it", a website that tells you how many days since the last rain.
permalink: /2026/daquandononpiove.it/
eleventyExcludeFromCollections: false
tags:
  - vibe coding
  - pet project
  - daquandononpiove.it
headerImg: /images/Screenshot 2026-05-08 alle 08.43.28.png
---

Since the advent of AI, I feel like my creativity is unleashed. I can finally design functionalities instead of focusing on coding. In this sense,  I feel I am getting closer to become a product manager, instead of being "just" a developer. 

The last project I've been [vibe coding](tags/vibe-coding/) is "[Da quando non piove](daquandononpiove.it)", that translated would be "how many days since last rain". Unfortunately it's in Italian, but it's very easy to follow along. 

The website is very stupid: you navigate to the main page, and it'll detect your current location, fetch the historical data, and tell you how long since the last rain. Nothing else. 

In summer I can feel the total absence of water in my garden and in the hills around me:  together with high temperatures, this can ease the spread of fires, which is a huge problem where I live. And also, given the climate change emergency we're living in, I thought this could be a useful website to spread some awareness. 

This project took 1-2 hours to be completed. Honestly, the thing I spent most time on was connecting the domain name to netlify, and debugging an issue with the search bar - one can fetch the situation of any city in the world. 

I'd like to thank the services that expose a free API for this, which are:

- [OpenStreetMaps](https://nominatim.openstreetmap.org/) , that allows me to find the name of the city from the device's coordinates;
- [Open-Meteo Geocoding API](https://open-meteo.com/en/docs/geocoding-api), that I use to autocomplete the name of the cities while you type;
- [Open-Meteo Forecast API](https://open-meteo.com/en/docs), that allows me to find weather data up until 92 days in the past.

Enjoy !
