---
layout: post
title:  "jekyll blog deploy github pages"
date:   2014-06-13 12:06:50
categories: jekyll

---
[Jekyll Introduction](http://themes.jekyllbootstrap.com/preview/the-minimum/lessons/2011/12/29/jekyll-introduction/)

[demos](https://github.com/jekyll/jekyll/wiki/Sites)

simple blog

[github pages](https://pages.github.com/)

[Host on GitHub in 3 Minutes](http://jekyllbootstrap.com/usage/jekyll-quick-start.html?#)


* Create a New Repository

	Go to your https://github.com and create a new repository named USERNAME.github.com


* install jekyll

	http://jekyllrb.com/
	
```
	gem install jekyll
	
	jekyll new my-awesome-site
	
	cd my-awesome-site
	
	jekyll serve
	
	//Now browse to http://localhost:4000
	
	cp my-awesome-site path/of/USERNAME.github.com 
```

* Write .md file in _post dir
	
```
	cd path/of/USERNAME.github.com 
	
	jekyll build
	//auto create HTML file in _site dir 
	
	jekyll serve 
	//preview in port 4000
```

commit ur changes to github,visit `USERNAME.github.io`

