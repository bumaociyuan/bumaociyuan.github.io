iOS 使用 GZIP

翻译自 [“25个提升 iOS 性能的诀窍和技巧”](http://www.raywenderlich.com/31166/25-ios-app-performance-tips-tricks#gzip)

越来越多的APP依赖于外部数据从远程服务器或其他外部api。在某些时候你会开发一个应用程序,下载数据在XML中,JSON、HTML或其他文本格式。

问题是,不能依赖网络条件时移动设备。用户在2G网络下等待一分钟,或者4G网络下等待一瞬间。不管这个场景,你不想让你的用户等待!

一个选项来减少文件大小,加快网络资源的下载是通过启用GZIP压缩你的服务器和你的客户。这是特别有用的文本数据,潜在的压缩比很高。

好消息是,iOS已经支持GZIP压缩默认情况下如果你使用NSURLConnection,或者一个框架[AFNetworking](http://www.raywenderlich.com/?p=30445)等构建在它之上的。更多的好消息是,一些云提供商,比如[Google App Engine](https://developers.google.com/appengine/)已经可以发送GZIP过的响应。

这有一篇[文章](http://betterexplained.com/articles/how-to-optimize-your-site-with-gzip-compression/)关于GZIP压缩解释如何在Apache和IIS服务器上启用它。


##结论：开启 GZIP 对 iOS 没有性能影响，因为原生就对 GZIP 支持

文档待完善和验证，完善过后再加入开发中心