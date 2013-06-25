$(document).keyup(function(e) { 
  if (e.keyCode == 27) { // esc keycode
    // $('.overlay').removeClass('is-shown');
  }
});

$('.menu-link').on('click', function () {
  $('.drawer').toggleClass('is-visibile');
});

$('.reveal').click(function() {
  // Rename is-modal
  $('body').addClass('test');
});

$('.modal-close').click(function() {
  // Rename is-modal
  $('body').removeClass('test');
});