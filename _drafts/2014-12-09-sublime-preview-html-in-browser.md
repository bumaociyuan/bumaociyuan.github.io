---
layout: post
title:  "sublime preview html in browser"
date:   2014-12-09	10:03:30
categories: []
tags: []

---


* Install [sublime-view-in-browser](https://github.com/adampresley/sublime-view-in-browser)
* Open workspace -> `Project` -> `Save Project As...`
* Config setting

```
{
   "folders":
   [
       {
           "path": "/home/<username>/code/python/my-cool-website"
       }
   ],
   "settings": {
       "sublime-view-in-browser": {
           "baseUrl": "http://localhost:8080",
           "basePath": "/home/<username>/code/python/my-cool-website"
       }
   }
}
```
	
* `Sublime Text 2` -> `Preferences` -> `Key Bindings - User` add following line to config file


```
{ "keys": [ "ctrl+alt+v" ], "command": "view_in_browser", "args": { "browser": "chrome" } }
```

##server

[tomcat](http://)

##支持中文路径

tomcat 

[link](http://blog.csdn.net/lwowen/article/details/658314)

```
<Connector port="8080" maxThreads="150" minSpareThreads="25" 
maxSpareThreads="75" enableLookups="false" redirectPort="8443" 
acceptCount="100" debug="0" connectionTimeout="20000" 
disableUploadTimeout="true" URIEncoding="UTF-8" />
```

sublime 

[让sublime text2 支持中文路径的文件](http://www.cnblogs.com/wangrui-techbolg/archive/2013/04/22/3036817.html)

[Sublime Text support Chinese path](http://www.programmershare.com/829945/)

paste following two lines to `/Applications/Sublime Text 2.app/Contents/MacOS/sublime_plugin.py` line `7` after `import frameworks`

```
reload(sys)  
sys.setdefaultencoding('utf-8') 
```

##error

[local doc](http://localhost:8080/docs/config/filter.html)

`No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'http://localhost:8080' is therefore not allowed access. `


