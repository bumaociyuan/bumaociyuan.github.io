---
layout: post
title:  "cocoapods empty reply form server"
date:   2014-12-03	12:38:41
categories: []
tags: []

---

When run `pod install`

Get error message 

```
fatal error blabla empty reply form server

```

Fix this 

```
git config --global url."git://".insteadOf https://
```