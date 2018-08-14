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
});
});
