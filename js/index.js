AOS.init();

$(window).scroll(function() {

  // selectors
  var $window = $(window),
      $body = $('body'),
      $panel = $('section');

  // Change 33% earlier than scroll position so colour is there when you arrive.
  var scroll = $window.scrollTop() + ($window.height() / 3);

  $panel.each(function () {
    var $this = $(this);

    // if position is within range of this panel.
    // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
    // Remember we set the scroll to 33% earlier in scroll var.
    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {

      // Remove all classes on body with color-
      $body.removeClass(function (index, css) {
        return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
      });

      // Add class of currently active div
      $body.addClass('color-' + $(this).data('color'));
    }
  });

}).scroll();

function myFunction(event) {
  var btnText = event;
  var extraText = btnText.parentNode.querySelector("p");

  if (extraText.style.display !== "none") {
    btnText.innerHTML = "&rarr; More Info";
    extraText.style.display = "none";
  } else {
    btnText.innerHTML = "&darr; Less Info";
    extraText.style.display = "inline";
  }
}

VANTA.RINGS({
  el: ".header",
  mouseControls: true,
  touchControls: true,
  minHeight: 200.00,
  minWidth: 200.00,
  scale: 1.00,
  scaleMobile: 1.00,
})

$(document).ready(function(){
    $('.navigation__link').on('click', function(event) {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({scrollTop: $(hash).offset().top}, 900);
        $(".navigation__checkbox").prop("checked", false);
        console.log($(".navigation__checkbox").val())
    });
})

window.addEventListener('scroll', function() {
  var element = document.querySelector('#about-me');
  var position = element.getBoundingClientRect();

  if(position.top >= 0 && position.bottom <= window.innerHeight) {
    setTimeout(function(){
        contribution_odometer.innerHTML = 1522;
    }, 1000);

    setTimeout(function(){
        repo_odometer.innerHTML = 44;
    }, 1000);
    setTimeout(function(){
        years_odometer.innerHTML = 1;
    }, 1000);
  }
});
