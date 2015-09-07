---
layout: post
title: "make a jx build system in sublime text 3"
description: ""
category: 
tags: [jx,sublime,applescript]
---

`Tools` -> `Build System` -> `New Build System...`

```
{
	"cmd": ["osascript","-l","JavaScript","$file"]
}
```

