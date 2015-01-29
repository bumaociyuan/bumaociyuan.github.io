---
layout: post
title: "bandwagon note"
description: ""
category: breakWall
tags: [bandwagon]
---

[tutorial](http://www.advertcn.com/thread-20498-1-1.html)

[3.99$ VPS](https://bandwagonhost.com/aff.php?aff=322&pid=19)


1. 进入搬瓦工ClientArea-https://bandwagonhost.com/clientarea.php输入注册的邮箱和密码登录；

2. 点击Services-My Services-点击你需要架设的VPS对应的KiWiVM Control Panel，这样我们就进入VPS的控制面板（在这里可以看到你的VPS的IP和SSH端口等信息）；

3. 点击Stop（停止掉当前的系统）-停止后点击Instal New OS（这个在页面左侧）-进入选择Debian 7 x86，把红字的勾选上，确认，很快你的新系统就安装完成；

4. 新系统安装完成后，搬瓦工会告诉你VPS 新的Root账户密码，以及新的SSH端口，这两项很重要，记下来后面会用到（VPS的root密码可以在Panel里自行设置）。

5. ssh connect
	
```
#login
ssh -p <port> root@<ip>	

#download
wget http://tennfyfile.qiniudn.com/debian_shadowsocks_tennfy.sh

#install
bash debian_shadowsocks_tennfy.sh

#stop
/etc/init.d/shadowsocks-libev stop

#start
/etc/init.d/shadowsocks-libev start

#config
vi /etc/shadowsocks-libev/config.json
```

```

{
    "server":"104.224.166.82",
    "server_port":88,			#change the port need to restart server
    "local_port":1080,
    "password":"48zFWAFgA3",
    "timeout":60,
    "method":"rc4-md5"
}
```



