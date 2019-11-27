$(window).scroll(function(){
    var scrollval = $(this).scrollTop();    // It will return scroll value
    
    $(".parallax_lento").css("transform",'translate(0px,-'+scrollval/12+'%)');
    $(".parallax_rapido").css("transform",'translate(0px,-'+scrollval/4+'%)');
    
});