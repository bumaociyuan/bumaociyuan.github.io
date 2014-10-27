---
layout: post
title:  "make a cocoapods lib"
date:   2014-08-29 13:54:52
categories: ios
tags: [cocoapods,tutorial]

---
[nshipster blog](http://nshipster.com/cocoapods/)

[http://guides.cocoapods.org/](http://guides.cocoapods.org/making/making-a-cocoapod.html)

[Your First CocoaPod](http://code.dblock.org/your-first-cocoapod)

demo : [link](https://github.com/bumaociyuan/NSString-BlockHelper.git)

1. create NSString-BlockHelper.podspec


		Pod::Spec.new do |s|
  			s.name     = 'NSString-BlockHelper'
  			s.version  = '1.0.0'
			s.license  = { :type => 'MIT', :file => 'LICENSE.md' }
			s.summary  = "NSString+BlockHelper"
  			s.homepage = 'https://github.com/bumaociyuan/NSString-BlockHelper'
			s.authors  = { 'bumaociyuan' => 'http://bumaociyuan.github.io/' }
 			s.source   = { :git => 'https://github.com/bumaociyuan/NSString-BlockHelper.git', :tag => s.version.to_s }
 			s.source_files = 'NSString+BlockHelper/*{h,m}'
 			s.requires_arc = true
		end



2. set the tag
`git tag 1.0.0;	git push --tags`


3. use the cmd
`pod trunk push NSString-BlockHelper.podspec --verbose` to push .podspec to repo

