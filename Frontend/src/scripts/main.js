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
    $(".sidebar-dropdown > a").click(function() {
  $(".sidebar-submenu").slideUp(200);
  if (
    $(this)
      .parent()
      .hasClass("active")
  ) {
    $(".sidebar-dropdown").removeClass("active");
    $(this)
      .parent()
      .removeClass("active");
  } else {
    $(".sidebar-dropdown").removeClass("active");
    $(this)
      .next(".sidebar-submenu")
      .slideDown(200);
    $(this)
      .parent()
      .addClass("active");
  }
});
$("#close-sidebar").click(function() {
  $(".page-wrapper").removeClass("toggled");
});
$("#show-sidebar").click(function() {
  $(".page-wrapper").addClass("toggled");
});
// Stop carousel
$('#myCarousel').carousel({});

});