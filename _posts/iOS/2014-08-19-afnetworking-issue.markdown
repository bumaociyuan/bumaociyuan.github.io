---
layout: post
title:  "AFNetworking issues"
date:   2014-08-19 14:28:00
categories: ios

---
error with

`Request failed: unacceptable content-type: text/html`

fix this issue

 		AFHTTPRequestOperationManager *manager = [AFHTTPRequestOperationManager new];
		NSMutableSet *set = manager.responseSerializer.acceptableContentTypes.mutableCopy;
    	[set addObject:@"text/html"];
   		manager.responseSerializer.acceptableContentTypes = set;