$(function() {

});

$(window).on('load', function(){
	
});

$(window).scroll(function() {
    var header = $(document).scrollTop();

    if (header >= 400){
      $(".top").addClass("padding__scroll");
      $(".hamburger__top-menu").addClass("padding__scroll-hamburger");
    } else {
      $(".top").removeClass("padding__scroll");
      $(".hamburger__top-menu").removeClass("padding__scroll-hamburger");
    }
});






