---
layout: post
date: 2024-08-22T22:00:00.000Z
title: Installing latest ruby with asdf on MacOS with M2 chip
description: Installing ruby is always a pain, here i try to share what worked for me with asdf
tags:
- ruby
- asdf
- macos
- m2
permalink: 2024/ruby-mac-m2/
eleventyExcludeFromCollections: false
headerImg: '/uploads/2015/03/rubyrails.png'
---

Installing Ruby [was a pain in 2015 the first time I tried](/2015/03/installing-ruby-on-rails-on-mac-10-10-is-a-pain/), and I can't believe that 9 years later I would struggle to install it again!

Luckily the world has overcomed most of the issues i had almost a decade ago, also because the community delivered some great tools like `rvm` to do the job for us.

In my case, however, I used `asdf`.

## What is ASDF ?

You have `nvm` to switch between nodeJS versions, `rvm` to switch between Ruby versions, `pyenv` for python... They basically do the same thing, downloading and allowing to choose dinamically which version you want to use for a given project, so a relatively new tool has joined the group: [asdf](https://asdf-vm.com/)!

The idea behind `asdf` is to be multi-language, so you can list, download, and use any version of any (supported) language!

> This post will focus on MacOS for latest hardware at the time being, specifically the M2 chip.

The best way [to install `asdf` is to follow the official howto](https://asdf-vm.com/guide/getting-started.html), basically using `brew`, and follow the relevant part for your shell (which is `zsh` by default on Mac now).

Once everything is working, you can [install the ruby plugin](https://github.com/asdf-vm/asdf-ruby):

```shell
asdf plugin add ruby https://github.com/asdf-vm/asdf-ruby.git
```

## Time to install Ruby

If you "simply" install Ruby, as reccomended by the tool, you'll get this:

```shell
$ asdf install ruby 3.3.4 
ruby-build: using openssl@3 from homebrew
==> Downloading ruby-3.3.4.tar.gz...

...

*** Following extensions are not compiled:
openssl:
        Could not be configured. It will not be installed.
        /private/var/folders/8r/rdh70zf146vdrx054gm3lx3h0000gn/T/ruby-build.20240822143802.92522.9rg23R/ruby-3.3.4/ext/openssl/extconf.rb:122: OpenSSL library could not be found. You might want to use --with-openssl-dir=<dir> option to specify the prefix where OpenSSL is installed.
        Check /var/folders/8r/rdh70zf146vdrx054gm3lx3h0000gn/T/ruby-build.20240822143802.92522.9rg23R/ruby-3.3.4/ext/openssl/mkmf.log for more details.
psych:
        Could not be configured. It will not be installed.
        Check /var/folders/8r/rdh70zf146vdrx054gm3lx3h0000gn/T/ruby-build.20240822143802.92522.9rg23R/ruby-3.3.4/ext/psych/mkmf.log for more details.

BUILD FAILED (macOS 14.5 on arm64 using ruby-build 20240727)
```

## Let's fix it

The issue, as far as I understood, is that asdf is trying to compile the specified Ruby version but for another architecture. The M2 chip, infact, from time to time pretends some special flags for compilation. The problem is that we figure this out only after some research; errors do not tell us anything special.

So we're going to install the missing libraries, but compiled for the ARM architecture:

```shell
arch -x86_64 brew install openssl libyaml
```

Now we can proceed in installing Ruby:

```shell
arch -x86_64 asdf install ruby 3.3.4 
```

If after this you try to run `ruby -v` and still see `ruby 2.6`, which is the default coming with MacOS, simply restart the shell and you'll see the latest version installed.

Enjoy!
