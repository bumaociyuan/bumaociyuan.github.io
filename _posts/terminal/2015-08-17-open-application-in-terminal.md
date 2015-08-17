---
layout: post
title: "open application in terminal"
description: ""
category: terminal
tags: [alias]
---


I found solution of [open sublime in terminal](http://bumaociyuan.github.io/mac/2015/08/10/open-sublime-in-terminal.html), but how can I open others app in terminal ?

```
$ touch ~/.bashrc
```

copy 

```
# -------
# Function
# -------
function google() { open "https://www.google.com/search?q=$1&gws_rd=ssl"; }

function baidu() { open "https://www.baidu.com/s?ie=UTF-8&wd=$1"; }

# -------
# Aliases
# -------
alias chrome='open -a /Applications/Google\ Chrome.app'

```

into `~/.bashrc` then

```
$ source ~/.bashrc

#usage
$ google bumaociyuan
$ baidu bumaociyuan

$chrome http://bumaociyuan.github.io/mac/2015/08/10/open-sublime-in-terminal.html
```
