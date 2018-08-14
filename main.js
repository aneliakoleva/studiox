$(document).ready(function(){
     $('.slider').bxSlider({
         autoControls: true,
      pager: false,
      captions: true,
   });


$('.slider-resp').bxSlider({
    pager: true,
controls: false
});

$(".ham").click(function() {
    $(".dropdown-content").toggle();
    $(".ham img").attr("src", "images/ic-close-sandwich-menu.svg");
    $(".ham img").remove("src", "images/ic-close-sandwich-menu.svg");
});
});
