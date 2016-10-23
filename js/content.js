
Zepto(function($){
    $(function () {
        //    返回顶部
        $('.sgq_backTop').on('doubletap', function(e) {
            $.scrollTo({
                endY: 0,
                duration: 200
            });
        });
        
        //图片懒加载
        $('.test-lazyload').picLazyLoad( {placeholder: 'images/blank.png'});
    })

})




