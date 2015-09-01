
$.extend({
    sayHello: function (name) {
        alert('Hello,' + (name ? name : 'Dude') + '!');
    }
});



$.fn.setLinkStyle = function () {
    //在这里面,this指的是用jQuery选中的元素
    this.css('color', 'red');
}



$.fn.setLinkStyle2 = function () {
    //在这里面,this指的是用jQuery选中的元素
    this.css('color', 'red');

    //对每个元素操作
    this.each(function () {
        var item = $(this);
        item.append(' ' + item.attr('href'))
    });

}


$.fn.setLinkStyle3 = function () {
    //在这里面,this指的是用jQuery选中的元素
    this.css('color', 'red');

    //对每个元素操作
    return this.each(function () {
        var item = $(this);
        item.append(' ' + item.attr('href'))
    });

}



//让插件支持参数
$.fn.setLinkStyle4 = function (options) {
    var defaults = {
        'color': 'red',
        'fontSize': '12px'
    };
    var settings = $.extend(defaults, options);
    
    return this.css({
        'color': settings.color,
        'fontSize': settings.fontSize
    });
}


//保护默认参数
$.fn.setLinkStyle5 = function (options) {
    var defaults = {
        'color': 'red',
        'fontSize': '12px'
    };
    var settings = $.extend({}, defaults, options);
    return this.css({
        'color': settings.color,
        'fontSize': settings.fontSize
    });
}


//定义Beautifier构造函数
var Beautifier = function (ele,opt) {
    this.$element = ele;
    this.defaults = {
        'color': 'red',
        'fontSize': '12px',
        'textDecoration':'none'
    }

    this.options = $.extend({}, this.defaults, opt);
}

//定义Beautifier方法
Beautifier.prototype = {
    beautifier: function () {
        return this.$element.css({
            'color': this.options.color,
            'fontSize': this.options.fontSize,
            'text-decoration': this.options.textDecoration
        });
    }
}

//调用
$.fn.setLinkStyle6 = function (options) {

    var beautifier = new Beautifier(this, options);

    return beautifier.beautifier();
}

//自调用匿名函数
;(function ($, window, document, undefined) {
    //定义Beautifier构造函数
    var Beautifier = function (ele, opt) {
        this.$element = ele;
        this.defaults = {
            'color': 'red',
            'fontSize': '12px',
            'textDecoration': 'none'
        }

        this.options = $.extend({}, this.defaults, opt);
    }

    //定义Beautifier方法
    Beautifier.prototype = {
        beautifier: function () {
            return this.$element.css({
                'color': this.options.color,
                'fontSize': this.options.fontSize,
                'text-decoration': this.options.textDecoration
            });
        }
    }

   
    //调用
    $.fn.setLinkStyle7 = function (options) {

        var beautifier = new Beautifier(this, options);

        return beautifier.beautifier();
    }
})(jQuery, window, document);


