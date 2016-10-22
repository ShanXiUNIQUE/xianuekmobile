
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
    //图片懒加载
    $('.test-lazyload').picLazyLoad( {placeholder: 'images/blank.png'});
    
    
    
    
    
    
    
    
    
    
    
    
    
})