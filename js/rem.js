$(function () {
    var designwidth=750;
    var fontsize=100;
    function resize() {
        var devicewidth=$(window).width();
        if(devicewidth<300){
            devicewidth=300;
        }
        var ratio=devicewidth/designwidth;
        var newfontsize=fontsize*ratio;
        $("html").css({fontSize:newfontsize});
    }
    resize();
    $(window).resize(resize);
})
