---
paginate: true
comments: true
author: musikele
category: English
layout: post
date: 2021-05-03
title: Want to play songs in your web app? Say no more with JS Headless Playlist Player
description: 'JS Headless Playlist Player is a javascript library that implements
  the logic of a playlist player. You provide the graphics the way you want and call
  the API to play music. '
header-img: "/images/winamp.png"
tags:
- open source
- pet project
- javascript
- audio
- js headless playlist player
permalink: js-headless-playlist-player/

---
Welcome to my latest project: [**JS Headless Playlist Player**](https://github.com/musikele/js-headless-playlist-player). 

As the name suggests, it's a Javascript API to build your own web player. You write the graphics, I give you the free JS glue, and let the music play! 

## Wait, what's that

One of my friends is building a social web app to create music and to listen other member's creations. Very cool project, but he wanted a way to play the music from his community sequentially. Of course there's SoundCloud, but we wanted to implement this thing internally. Also, I didn't want to provide graphics because every future consumer will be creating a UI that respects it's own tastes. 

For example, you can build your own Winamp, lol  

![]({{ site.baseurl }}/images/winamp.png)

_(If you want to see a real Winamp web clone, go to_ [_webamp.org_](https://webamp.org/) _- NOTE: it doesn't use my library under the hood)_

## How does JS Headless Playlist Player work? 

You compile the project and add the script to your html and then you have this global object, called `PlaylistPlayer`, that implements a very nice API: 

```javascript
// add songs to the library.
// The only mandatory attribute is `url`. But you can also pass names or other
// info you may need to build your player.
PlaylistPlayer.load([{ url: 'firstsong.mp3' }, { url: 'secondsong.wav' }]);

// starts playing songs sequentially
PlaylistPlayer.play();

// pauses the song; it can later be resumed by calling `.play()`.
PlaylistPlayer.pause();

// will stop and go to the start of the *current* song.
PlaylistPlayer.stop();

// go to next song if present
PlaylistPlayer.next();

// go to prev song if present
PlaylistPlayer.prev();

// returns the current song list
PlaylistPlayer.getSongsList();

// get current playing song index
PlaylistPlayer.getCurrentSongIndex();

// get player state
PlaylistPlayer.getCurrentState();
// output: [
//    'unloaded', // when no song has been loaded.
//    'stopped', // songs are loaded but no song is playing. If you press play song will start from start.
//    'playing', // music coming out of the speakers!
//    'paused'  // song is paused; if you press play it will resume from last paused location.
// ]

// To listen for changes in the PlaylistPlayer state changes, you can
// attach a listener to 'playlistEvent' event:
document.addEventListener('playlistEvent', (evt) => {
    console.log(evt.detail);
    // {
    //   currentState: "playing",
    //   songs: [...],
    //   currentSongIndex: 2
    // }
});
```

## Under the hood: XState 

To build this small project I decided to go with a state library called [XState](https://xstate.js.org/). **XState** is a library to define state machines very easily. Audio players are simple finite state machines. 

This library was nothing more than an exercise to grasp the fundamentals of XState, but I must say I didn't get all it has to offer. Sometimes there are more ways to do the same thing, and still I don't know if some of what I had in mind could be done. 

To give you more detail: The State Machine has an internal state, that lives inside a `context` object. In this context I store the songs array, what song I am currently playing, and all the things I need to run the lib. 

Then, when you jump from a state to another (e.g. from `stopped` to `playing`), you can trigger a function for example. In XState, those functions are called **actions**. 

However, actions are thought for immediate-returning actions; in my case the "play" action was long-lasting. For these scenarios, XState offers the concept of **activity**, that is a perpetual function. When you exit from this state, XState will automatically shut down your activity by calling the exit function you defined (that in my case will stop the audio). 

There is much more than this. I honestly tried to hack the library as fast as possible, so I cannot consider myself an expert. 

## Why HTML5 Audio instead of WebAudio?

This project's goal is to go in the browser, and browsers have excellent support for the Audio object. It is the easiest API out there to play songs. I didn't want to overcomplicate things. Let me know if this is a limitation for you!

Enough said, let me know if you find any bugs (there are many!) and if you have feature requests! 