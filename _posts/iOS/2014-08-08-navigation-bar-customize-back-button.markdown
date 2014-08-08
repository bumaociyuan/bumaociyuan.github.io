---
layout: post
title:  "navigation bar customize back button"
date:   2014-08-08 11:09:00
categories: ios

---

in appdelegate.m

		UINavigationBar * bar = [UINavigationBar appearance];
		bar.backIndicatorImage = [UIImage imageNamed:@"navBackButton"];
		bar.backIndicatorTransitionMaskImage = [UIImage imageNamed:@"navBackButton"];
	
in baseviewcontroller.m -viewdidload


		self.navigationItem.leftItemsSupplementBackButton = YES;
		self.navigationItem.backBarButtonItem = [self textBarButtonItemWithText:@"" 		handler:nil];
		
`cannot handle the back bar button item click event`