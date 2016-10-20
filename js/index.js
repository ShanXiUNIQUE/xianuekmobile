$(function () {
    //实训效果
    var shixunSwiper = new Swiper('.sgq_result_box',{
        onlyExternal : true,
        speed:500
    });
    $(".sgq_public_item .sgq_pubulic_menu").on('touchstart',function(e){
        e.preventDefault()
        $(this).parent().children(".hot").removeClass('hot');
        $(this).addClass('hot')
        shixunSwiper.swipeTo( $(this).index() )
    });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
})