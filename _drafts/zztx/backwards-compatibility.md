向下兼容 iOS6 

TODO list

### 代码兼容性

* 代码 
	
```
写代码时就比较注意，应该没使用 iOS7 only 或者iOS8 only 的API
或者使用预定义宏，来跳过编译
```
	
* 三方库
	
```
#估计会出现兼容问题的三方库

1 AFNetworking 发请求
2 MWPhotoBrowser 多图浏览
3 聊天界面
4 其他大概使用了20+个三方库 估计还会有2 3 个会有兼容性问题

#解决办法
1 AFNetworking 使用旧版本
2 MWPhotoBrowser 使用旧版本
3 聊天界面手动修改代码
4 其他手动修改代码，或者使用旧版本，或者替换三方库
	
```	
	
* 界面

```
由于 iOS6 和 iOS7 的区别较大，界面运行可能差距很大，所以绝大部分工作会在调试界面bug，显示不正确
```

### 测试
 
真机测试：运行 iOS6 的手机一台

模拟器测试：

1. 因为我们现在使用的是最新的 Xcode6 已经不支持 iOS6，所以没有官方途径下载，只有在网上搜索6的模拟器放到某个路径，可能不靠谱，
2. 下载 Xcode5 。 Xcode5 和 Xcode6 同时保留在电脑上需要搜索一下方法，`如果使用 Xcode5 的话，代码就会需要较大的改动，应为 Xcode5 没有 iOS8 SDK`

### 结论：先下载 Xcode5 并存版 ，下载 iOS6 模拟器，打开项目运行，评估工作量，验证过后再写成文档

参考

[Can Xcode 6 and Xcode 5 coexist on the same computer?](http://stackoverflow.com/questions/24005297/can-xcode-6-and-xcode-5-coexist-on-the-same-computer)

[Supporting Multiple iOS Versions and Devices](http://www.raywenderlich.com/42591/supporting-multiple-ios-versions-and-devices)

[Supporting iOS 6](https://developer.apple.com/library/ios/documentation/UserExperience/Conceptual/TransitionGuide/SupportingEarlieriOS.html#//apple_ref/doc/uid/TP40013174-CH14-SW1)
