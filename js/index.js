(function($) {
    var DEFAULTS = {
        duration: 200,
        updateRate: 15
    };

    var interpolate = function (source, target, shift) {
        return (source + (target - source) * shift);
    };

    var easing = function (pos) {
        return (-Math.cos(pos * Math.PI) / 2) + .5;
    };

    var scroll = function(settings) {
        var options = $.extend({}, DEFAULTS, settings);

        if (options.duration === 0) {
            window.scrollTo(0, options.endY);
            if (typeof options.callback === 'function') options.callback();
            return;
        }

        var startY = window.pageYOffset,
            startT = Date.now(),
            finishT = startT + options.duration;

        var animate = function() {
            var now = Date.now(),
                shift = (now > finishT) ? 1 : (now - startT) / options.duration;

            window.scrollTo(0, interpolate(startY, options.endY, easing(shift)));

            if (now < finishT) {
                setTimeout(animate, options.updateRate);
            }
            else {
                if (typeof options.callback === 'function') options.callback();
            }
        };

        animate();
    };

    var scrollNode = function(settings) {
        var options = $.extend({}, DEFAULTS, settings);

        if (options.duration === 0) {
            this.scrollTop = options.endY;
            if (typeof options.callback === 'function') options.callback();
            return;
        }

        var startY = this.scrollTop,
            startT = Date.now(),
            finishT = startT + options.duration,
            _this = this;

        var animate = function() {
            var now = Date.now(),
                shift = (now > finishT) ? 1 : (now - startT) / options.duration;

            _this.scrollTop = interpolate(startY, options.endY, easing(shift));

            if (now < finishT) {
                setTimeout(animate, options.updateRate);
            }
            else {
                if (typeof options.callback === 'function') options.callback();
            }
        };

        animate();
    };

    $.scrollTo = scroll;

    $.fn.scrollTo = function() {
        if (this.length) {
            var args = arguments;
            this.forEach(function(elem, index) {
                scrollNode.apply(elem, args);
            });
        }
    };
}(Zepto));
$(function () {
    //实训效果
    var shixunSwiper = new Swiper('.sgq_result_box',{
        onlyExternal : true,
        speed:500
    });
    $(".sgq_result .sgq_public_item .sgq_pubulic_menu").on('touchstart',function(e){
        e.preventDefault();
        $(this).parent().children(".hot").removeClass('hot');
        $(this).addClass('hot');
        shixunSwiper.swipeTo( $(this).index() );
    });
    //就业成果
    var workSwiper = new Swiper('.sgq_work_box',{
        onlyExternal : true,
        speed:500
    });
    $(".sgq_work .sgq_public_item .sgq_pubulic_menu").on('touchstart',function(e){
        e.preventDefault()
        $(this).parent().children(".hot").removeClass('hot');
        $(this).addClass('hot')
        workSwiper.swipeTo( $(this).index() );
    });
    //优逸新闻
    var newsSwiper = new Swiper('.sgq_news_box',{
        onlyExternal : true,
        speed:500
    });
    $(".sgq_news .sgq_public_item .sgq_pubulic_menu").on('touchstart',function(e){
        e.preventDefault()
        $(this).parent().children(".hot").removeClass('hot');
        $(this).addClass('hot')
        newsSwiper.swipeTo( $(this).index() );
    });
//    返回顶部

    $('.sgq_backTop').on('doubletap', function(e) {
        $.scrollTo({
            endY: 0,
            duration: 200
        });
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
})