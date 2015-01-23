---
layout: post
title: "introduction of git and github"
description: ""
category: git
tags: []
---


#Git : 是一个分布式版本控制／软件配置管理软件，原是Linux内核開發者林纳斯·托瓦兹（[Linus Torvalds](https://github.com/torvalds) 1969年12月28日－）为更好地管理Linux内核开发而设计。 

早期历史

> 自2002年開始，林纳斯·托瓦兹決定使用BitKeeper作為Linux內核主要的版本控制系統，以此來维护程式碼。2005年，BitKeeper的著作權擁有者，Larry MaVoy，宣稱安德魯·垂鳩曾試著以逆向工程手法來解析BitKeeper內部使用的協定，因此決定收回使用BitKeeper的授權。Linux內核開發團隊與BitMover公司進行蹉商，但無法解決他們之間的歧見，林纳斯·托瓦兹決定自行開發版本控制系統，來替代BitKeeper，於是編寫出git

实现原理
> Git和其他版本控制系统（如CVS）有不少的差别，Git本身关心檔案的整体性是否有改變，但多數的CVS或Subversion系统則在乎檔案内容的差异。因此Git更像一個檔案系统，直接在本機上取得資料，不必連線到主机端获取資料。

主要功能
> 它采用了分布式版本库的作法，不需要服务器端软件，就可以運作版本控制，使得源代码的发布和交流极其方便。Git的速度很快，这对于诸如Linux内核这样的大项目来说自然很重要。Git最为出色的是它的合并追踪（merge tracing）能力

基本命令

```
	git clone [repo url]			#从repo url 克隆仓库
	git add [file path]				#添加修改的 文件到暂存区
	git commit -m 'commit comment'	#提交暂存区到本地仓库
	git push 						#push 到服务器
	git pull 						#从服务器获取最新代码
```

结构图
![image](/resources/2015/1/23/1.png)



[Git 官网](http://git-scm.com/)

[GitDemo](https://github.com/bumaociyuan/gitDemo)
修改历史
轻量级的分支


#GitHub : 是一个共享虚拟主机服务，用于存放使用Git版本控制的软件代码和内容项目。

统计
> GitHub于2008年2月运行，2013年4月，GitHub用户数达到350万，代码库数量达到6百万个。

地区事件

> 2013年1月20日，中國大陸政府的防火長城利用域名污染和關鍵詞過濾等手段封鎖GitHub，令中國大陸的用戶無法直接訪問。此前，针对中华人民共和国铁道部售票网站12306的抢票插件曾经不合理引用了存储在Github上的js文件（死循环重试），导致Github伺服器的速度大幅降低。後来插件的作者將該JavaScript文件轉移到其他網站。針對政府對Github的封鎖行動，知名人士李开复在新浪微博貼文抗議，迅速引起網民的關注，該訊息更在三小時内被轉發逾3萬2千次。2013年1月23日，GitHub被解封，事件平息。

常用功能

> 搜索下载源码

> 储存代码，建立自己的代码库，开源项目

> 为开源项目贡献代码

> 搭建托管在github 上的个人blog ，通过[jekyll](https://github.com/jekyll/jekyll)


#Git的各种桥接
> git-svn

> git-tfs

> 自2013年1月30日开始，TFS就开始支持使用 Git 签入源代码了，这对很多项目组来说是个不折不扣的好消息。但是想使用该功能必须安装一个 Visual Studio 扩展，该扩展只支持 Visual Studio 2012 Update 2 或以上版本（Visual Studio 2013则原生支持 Git）

#Git Windows
[Git Windows](http://msysgit.github.io/)

#客户端s

SourceTree

TortoiseGit 

------
引用

[torvalds](https://github.com/torvalds)

[Git 官网](http://git-scm.com/)

[GitDemo](https://github.com/bumaociyuan/gitDemo)

[jekyll](https://github.com/jekyll/jekyll)

[Git Windows](http://msysgit.github.io/)