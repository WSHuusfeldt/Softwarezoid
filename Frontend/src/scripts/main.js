import $ from 'jquery'; 

$(function ($) {
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 10) {
        $("nav.navbar").addClass("mybg-dark p-3 navbar-shrink");
    } else {
        $("nav.navbar").removeClass("mybg-dark");
        $("nav.navbar").removeClass("navbar-shrink");

    }
});
$('.navbar-toggler').click(function(){
    $("nav.navbar").addClass("mybg-dark p-3 navbar-shrink");
});
// Stop carousel
$('#myCarousel').carousel({});

});