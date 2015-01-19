---
layout: post
title: "How can UIButton outside superview be clicked"
description: ""
category: ios 
tags: []
---

in superview.m file 

```objc
- (BOOL)pointInside:(CGPoint)point withEvent:(UIEvent *)event {
        if (CGRectContainsPoint(self.bounds, point) ||
                    CGRectContainsPoint(self.outsideButton.frame, point)) {
                    return YES;
                        }
                            
                                return NO;
}
```
