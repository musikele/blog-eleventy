---
paginate: true
comments: true
author: musikele
category: English
layout: post
date: 2019-04-03
tags:
- ssh
- tutorial
title: 'SSH cheatsheet (from zero to hero) '
header-img: "/images/ssh-big.png"
description: 'SSH is one of the fundamental tools you must master to become a successful
  developer. In this article we''ll talk about using it for advanced configurations,
  like logging to remote server without password, configuring a tunnel, monitoring
  ssh connections '

---
SSH is one of the basic commands you need to master, no matter what's your platform of choice. Because you'll always end up working on some random server, and you'll have to login to see logs or restarting services. Also, you'll never see it as a _skill to show_ because it's implicit that you have to know how to use it, at least for logging in to some website.

Here is a little cheatsheet of the most important commands (and tricks) you might find useful.

![]({{ site.baseurl }}/images/ssh-big.png)

## Creating a new pair of keys

Before working with SSH, you need to create a new pair of keys. Basically it is a pair of private/public keys. **To generate a new key pair on your computer**, run:

```bash
$ ssh-keygen
```

keys are created in `~/.ssh` directory. Two files will be created:

```bash
➜  $ cd ~/.ssh
➜  $ ls -al
-rw------- 1 musikele musikele 1,8K feb 18 21:56 id_rsa
-rw-r--r-- 1 musikele musikele  411 feb 18 21:56 id_rsa.pub
➜  $
```

The private key is `id_rsa` and you should never share it with anybody. It is readable and writable only by the current user.

The public key is `id_rsa.pub` and it can be shared with others. As you can see the `id_rsa.pub` is also readable by anyone on the system.

## Set up SSH login to remote server without password

Now that we have SSH set up on our computer, let's see how we can login to a remote server. (We assume that ssh is set up on the remote server too - if not, just lunch the previous command there too!).

There are two ways to log in to a remote server:

* by typing the remote user's password,
* by using your private/public key.

We will talk about the second option from now on.

What we want to do now is to register our public key on the server. I want to remain  practical in this article, but if you need some deep explanation of what happens during the login process I suggest you to [follow this link](https://www.digitalocean.com/community/tutorials/understanding-the-ssh-encryption-and-connection-process "How SSH works").

There's a simple command to set up the ssh key on a remote server (run on your local computer):

```bash
$ ssh-copy-id root@123.123.123.123
```

once you hit enter, the remote server will ask for the password (at least for the first time). Once done, you can log in to a remote server by typing

```bash
$ ssh root@123.123.123.123
```

...and you're in!

What is this command `ssh-copy-id` doing? This command will copy your public key (`~/.ssh/id_rsa.pub`) in the remote file `~/.ssh/authenticated_keys`. The server will use the your public key to authenticate you.

## Logging in as a different user

When we log in to a remote server, without using a username, we will log in with the same username of our local machine. My username is `musikele`, so if I try to login to a remote server that's what happens:

```bash
$ ssh 123.123.123.123
musikele@123.123.123.123's password:
```

... but if you're logging in to a corporate machine you don't have a user set up with your  username. So we prefix the host address with the remote user, like this:

```bash
$ ssh remote_user@123.123.123.123
```

We're in!

Other useful options:

* `-p 2222` is used to specify the port to use. Default port for SSH is 22.
* `-i /path/to/alternate/key` is used to speficy another _private_ key you want to use instead of the default one. You can have as many public/private keys you want, and they an be in different files or in different paths.
* `-f` runs ssh in the background (you'll see later when to use it)
* `-N` does not open a window.

to run only one command and exit, simply write the command after the ssh connection string:

```bash
$ ssh -p 2222 remote_user@123.123.123.123 ls -al
drwxrwxrwx+  3 root          root     4096 Apr  3 10:02 #recycle
drwxr-xr-x  31 admin         users    4096 Mar 13 07:41 .
drwxrwxrwx+ 13 root          root     4096 Feb  6 09:54 ..
-rwxrwxrwx+  1 admin         users   14340 Jun 18  2017 .DS_Store
...
$
```

We just lunched `ls -al` on a remote machine! (and the prompt at line 7 is our local prompt, again).

## Simplify connections with ssh config files

It may be tedious to write the same info (username, remote server address, port...) again and again. With ssh we can define an alias with some informations already set, so that we don't have to type them again and again. Here's an example:

```bash
$ vi ~/.ssh/config
```

    # use four spaces to indent
    Host foo
        Hostname 123.123.123.123
        User root
        IdentityFile ~/.ssh/id_rsa
        Port 22

And then we just log in with

```bash
$ ssh foo
```

This is a real time saver tip ;)

## Copy files to and from the remote host

One of the most common actions we want to do with our remote servers is to copy files from and to it. The handy command **scp** will help us doing this.

To  transfer a file from local host to a remote one:

```bash
scp bar.txt mark@123.123.123.123:~/
```

Here we are coping `bar.txt` file on the server, logging in as user `mark`.

Whatever is after the `:` is the path on the remote server. If the path starts with `/` it is an absolute path; otherwise it will be local to the user's home folder.

Some other handy options for this command are:

* `-P` for the port (note that for the regular ssh we used `-p` lowercase)
* `-r` for a recursive copy of a folder

And of course, if you want to copy from a remote host to your local pc:

```bash
scp mark@123.123.123.123:~/bar.txt ./new.txt
```

## Configure a ssh tunnel

With _tunneling_ you can redirect traffic from one port of an ssh host to a remote server.

Let's see an easy example:

```bash
ssh -L 8000:yahoo.com:80 mark@myhost.com
```

In this case:

* your computer will listen on port `localhost:8000`
* when a packet is sent at `localhost:8000` it will reach `myhost.com`
* ssh daemon at `myhost.com` will redirect to `yahoo.com:80`
* responses follow the same path.

This technique can be useful to access a server on a private network. The only problem is that we also log in to `myhost.com` and the connection stays open until we exit from the remote session.

Combining with options  `-f -N` ,  we run the tunnel and return to the localhost computer:

```bash
ssh -f -N -L 8000:yahoo.com:80 mark@myhost.com
```

Another great use for tunneling is to redirect  traffic from the ssh server to your local host. Imagine to hit `myhost.com:8000` but the traffic is redirected to `localhost:3000`. This is useful for debugging, or to set up proxies, etc.

Remote tunneling is disabled by default; to enable, open the config file:

    $ vi etc/ssh/sshd_config

set `GatewayPorts` option to `yes` and restart the service (for example with `service ssh restart` on Debian/Ubuntu systems).

Now we can explore the tunneling functionality by launching:

```bash
ssh -R 8000:localhost:3000 mark@myhost.com
```

What's happening here:

* port `8000` on server `myhost.com` is exposed (be sure that it's reachable, for example by setting port forwarding on gateways if you have)
* when you connect to port `myhost.com:8000` the data is sent to `localhost:3000`
* eventual responses will flow back on the same route.

## Escape sequences

* To stop a blocked ssh connection hit `<ENTER>` then write: `~.` (tilde fullstop).
* Another escape sequence is `~ CTRL-Z` (tilde character + CTRL + Z). The ssh connection will be moved to background. To resume, type `fg`. Remember to hit `<ENTER>` if you have written anything before.

## Verify SSH fingerprints

When you connect to a new machine, a new entry is created in the local file `~/.ssh/known_hosts` of your computer. This entry contains the fingerprint of the server, so next time it will be already trusted.

However, sometimes keys on remote servers will change and our machine will not be able to connect again.

In order to check the new fingerprint of a remote server:

* connect to the remote server (e.g. `ssh root@123.123.123.123`) with password
* on remote host, launch:

```bash
$ ssh-keygen -l -f /etc/ssh/ssh_host_ecdsa_key.pub
```

The output of the command is the fingerprint of the key.

* on localhost, launch:

```bash
$ ssh-keygen -R 123.123.123.123
```

This will remove the line associated with `123.123.123.123` in the `~/.ssh/known_hosts` file.

* finally, connect again to the remote server:

```bash
$ ssh root@123.123.123.123
```

The remote host will show its fingerprint, and it should match the one calculated before.

## Other cool SSH options

### Deny any root access

You can imagine why a ssh connection for the root account can be a bad thing. Fortunately It can be disabled.

* launch `vi /etc/ssh/sshd_config`. This file contains a bunch of options for ssh.
* Search for `PermitRootLogin` and set to `no` to avoid root login.

### Prohibit password access

Another value for this setting is `prohibit-password`. This way you can only connect via public/private key.  You can disable password authentication by setting `PasswordAuthentication` option to `no`.

If you want to accept connections only for a specific set of users, or only users that come from a specific IP, you can set `AllowUsers` option like this:

    AllowUsers foo bar@1.2.3.4 *@2.3.4.5

Remember to restart the server with `service ssh restart`.

## Monitoring connection attempts

To check malicious/suspicious activity we have some tools that come at help.

* `vi /var/log/auth.log` contains all the informations about who tried to log in the system, with other info like the IP, etc.
* command `lastlog` will show last logs from all users of the system.
* `lastlog -u mark` will display last logs for user `mark`.

For example, we may see that our employee `mark` is connecting to the server, but at strange hours. So we can ask mark to  `cat ~/bash_history` and check his latest commands.  We can use this info to check if he legitimately accessed the machine, or if it was a hacker.

### That's all folks

This article is nothing more than a summary of what I learned by following [this excellent ssh course from Egghead](). I think they are great and deserve a paid subscription.

Tunnelling was the most difficult thing to set up. Here are [two]() [articles]() that have helped me out. about this
