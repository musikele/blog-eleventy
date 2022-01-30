---
paginate: true
comments: true
author: musikele
title: Docker cheatsheet
category: English
layout: post
date: 2018-10-25
tags:
- docker
- cheatsheet
header-img: "/images/Q9jiI1pL_400x400.jpg"
description: A docker cheatsheet with stuff I learn on the job

---
I usually forget everything if I don't use it that much. Here is a brief list of docker commands learned on the go.

## Start a simple container

```bash 
$ docker run -i -t ubuntu /bin/bash
```

* `run` runs the `ubuntu` image
* `-i` allows you to write to the container ("Keep STDIN open even if not attached")
* `-t` allocates a pseudoTTY and allows to read from the container
* `ubuntu` is the name of the image to start
* `/bin/bash` is the command to launch once the image is started

In practice: use `-i -t` to read and write from the docker image in the console.

Optional commands:

* `--name XXX` assigns the name XXX to the container
* `-d` launches the container as a daemon
* `-c XXX` passes XXX to the command. In our example the command is `/bin/bash`. With -c we can pass any kind of commands; for example `-c "while true; do echo hello world; sleep 1; done"`. Docker would pass this string t bash and the container would print hello world every second without stopping. Note the quotes.

## See containers status

```bash 
$ docker ps -a 
```

* `ps` alone prints only the active containers
* `-a` shows also the exited containers

## Inspecting a container

If the container is started as daemon you might want to see the output.

```bash 
$ docker logs -t -f NAME_OF_CONTAINER 
```

* `logs NAME_OF_CONTAINER` shows you the logs of the container. Without options you see the latest logs and then the propt gets back to your shell.
* `-f` works like `-f` in `tail -f`; logs become live. Use `CTRL-C` to exit.
* `-t` shows also timestamps.

To check container processes:

```shell
$ docker top daemon_dave
```

To get stats about a bunch of docker containers:

```shell
$ docker stats daemon_dave daemon_kate
```

## Running programs in a container

Daemon mode:

```shell
$ sudo docker exec -d daemon_dave touch /etc/new_config_file
```

* `-d` stands for daemon mode.
* `exec` is used to run a command in the `daemon-dave` container.

Interactive mode:

```shell
$ docker exec -t -i daemon_dave /bin/bash
```

* `-t` creates a TTY
* `-i` captures STDIN

...basically opens an interactive shell.

## Stopping & Deleting

```console
$ docker stop CONTAINER 
```

```console
$ docker rm CONTAINER 
```

## Listing docker images

```console
$ docker images
```

## Build a static container with my blog 

create the `Dockerfile`: 

```docker
# Version: 0.0.1 
FROM ubuntu:18.04 
LABEL maintainer="XXX@gmail.com"
# update and install stuff we need: ruby, nodejs, nginx
RUN apt-get update && apt-get install -y nginx make build-essential ruby ruby-dev curl
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash -
RUN apt-get install -y nodejs 
# install ruby gems to build the blog
RUN gem install bundler
RUN gem install jekyll
# specify that we want to work in the directory /root/
WORKDIR /root/
# Remove the default Nginx configuration file
RUN rm -v /etc/nginx/nginx.conf
# Copy a configuration file from the current directory
ADD nginx.conf /etc/nginx/
# add files from our current directory (.) to the local work dir (/root/)
ADD . .
# install jekyll plugins and build the site
RUN bundle install 
RUN bundle exec jekyll build --config=_config.yml,_config_dev.yml
# copy generated website to nginx public dir 
RUN cp -r _site/* /usr/share/nginx/html/
# run nginx as foreground process. 
CMD ["nginx", "-g", "daemon off;"]
EXPOSE 80
```

In a Dockerfile there must be a `CMD` command otherwise the process will stop after being launched. 

To actually make it work you should also configure your nginx with a valid `nginx.conf`:

```nginx
# file nginx.conf
worker_processes 1;

events { worker_connections 1024; }

http {
    include    mime.types;
    sendfile on;
    server {
        root /usr/share/nginx/html/;
        index index.html;
        server_name localhost;
        listen 80;
    }
}
```

Then we can build the image: 

```bash 
$ docker build -t "musikele/blog" .
```

And we can run it with: 

```bash
$ docker run -d -p 80:80 --name blog musikele/blog
```

In case anything goes wrong, you can enter and inspect the running container with: 

```bash
$ docker exec -i -t blog /bin/bash
```
