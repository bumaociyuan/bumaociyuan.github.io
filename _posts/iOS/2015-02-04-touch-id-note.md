---
layout: post
title: "touch id note"
description: ""
category: 
tags: []
---

```objc
 LAContext *lol = [[LAContext alloc] init];
        
        NSError *error = nil;
        NSString *message = @"message";
        
        if ([lol canEvaluatePolicy:LAPolicyDeviceOwnerAuthenticationWithBiometrics error:&error]) {
            [lol evaluatePolicy:LAPolicyDeviceOwnerAuthenticationWithBiometrics localizedReason:message reply:^(BOOL succes, NSError *error)
             {
                 if (succes) {
                     //do something
                 } else {
                 }
             }];
        } else {
            NSLog(@"没有开启TOUCHID设备自行解决");
        }
```