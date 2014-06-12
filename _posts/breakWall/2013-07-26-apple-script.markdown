---
layout: post
title:  "用apple script写自动开启wallproxy的命令"
date:   2013-07-26 11:58:50
categories: breakWall

---
打开 as编辑器

	tell the application "Terminal"
	do script "python /Users/noteant-3/Documents/	wallproxy-master/local/startup.py"
	close the 1st window
	end tell
	quit

save as app

右键显示包内容可以修改 icon
icon binder 可以简单生成 icon
最后在login items 加入 wallproxy app 就ok了
