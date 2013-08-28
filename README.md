js-object-to-querystring
=======================

Transforms a JS key:value object into a valid url query string
Useful in combination with Purl (https://github.com/allmarkedup/purl), basically, the opposite of $.url().param()


Uses:
-----
underscore.js (https://github.com/jashkenas/underscore)


Usage:
------
``` javascript
/*---- With Purl (https://github.com/allmarkedup/purl) -----*/
$.url().param().toQueryString();

/*---- Plain JS version -----*/
var data = {
	categoryId: [43, 35, 12],
	salesOnly: true,
	color: 'red'
};

data.toQueryString();
```
