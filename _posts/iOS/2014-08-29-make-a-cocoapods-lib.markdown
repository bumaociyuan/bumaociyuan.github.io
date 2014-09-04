---
layout: post
title:  "make a cocoapods lib"
date:   2014-08-29 13:54:52
categories: ios

---
[nshipster blog](http://nshipster.com/cocoapods/)

[http://guides.cocoapods.org/](http://guides.cocoapods.org/making/making-a-cocoapod.html)


NSString-BlockHelper.podspec

	Pod::Spec.new do |s|
	  s.name     = 'NSString-BlockHelper'
	  s.version  = '1.0.0'
	  s.license  = 'MIT'
	  s.summary  = "NSString+BlockHelper"
	  s.homepage = 'http://bumaociyuan.github.io/'
	  s.authors  = { ‘bumaociyuan’ =>
	                 'http://bumaociyuan.github.io/' }
	  s.social_media_url = "https://twitter.com/bumaociyuan"
	  s.source   = { :git => 'https://twitter.com/bumaociyuan', :tag => '1.0.0' }
	  s.source_files = 'NSString-BlockHelper'
	end
