$(document).ready(() => {
  // animasi preloader
  setTimeout(() => {
    $(".preloader").fadeOut();
  }, 1000);

  let scroll_start = 0;
  let navbar = $(".navbar");
  let startchange = $("#onStart");
  let offset = startchange.offset();

  $(document).scroll(() => {
    scroll_start = $(this).scrollTop();
    if (scroll_start > offset.top) {
      navbar.addClass("Header__navbar-scrolled");
    } else {
      navbar.removeClass("Header__navbar-scrolled");
    }
  });
});
