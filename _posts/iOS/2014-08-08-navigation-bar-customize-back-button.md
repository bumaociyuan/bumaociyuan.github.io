---
layout: post
title:  "navigation bar customize back button"
date:   2014-08-08 11:09:00
categories: ios

---

December 27, 2014 update
[link](http://www.jianshu.com/p/50b63a221f09)

	  [[UIBarButtonItem appearance] setBackButtonTitlePositionAdjustment:UIOffsetMake(0, -60)
                                                         forBarMetrics:UIBarMetricsDefault];

----

in `AppDelegate.m`

		UINavigationBar * bar = [UINavigationBar appearance];
		bar.backIndicatorImage = [UIImage imageNamed:@"navBackButton"];
		bar.backIndicatorTransitionMaskImage = [UIImage imageNamed:@"navBackButton"];
	
in `BaseViewController.m` -viewdidload

		self.navigationItem.leftItemsSupplementBackButton = YES;
		self.navigationItem.backBarButtonItem = [self textBarButtonItemWithText:@""];
		
**cannot handle the back bar button item click event**