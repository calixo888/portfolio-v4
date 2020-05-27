AOS.init();

// NAVBAR JS
// Making navbar a block if on mobile
if ($(window).width() <= 768){
  var $nav = $(".fixed-top");
  $nav.addClass("scrolled");
} else {
  $(function () {
    $(document).scroll(function () {
  	  var $nav = $(".fixed-top");
  	  $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  	});
  });
}

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
    btnText.innerHTML = "<img class='arrow-icon' src='img/icons/arrows/right-arrow-dark.png' alt=''> See More";
    extraText.style.display = "none";
  } else {
    btnText.innerHTML = "<img class='arrow-icon' src='img/icons/arrows/down-arrow-dark.png' alt=''> See Less";
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

$(document).ready(function() {
  $('.navigation__link').on('click', function(event) {
      event.preventDefault();
      var hash = this.hash;
      $('html, body').animate({scrollTop: $(hash).offset().top - 70}, 900);
      $(".navigation__checkbox").prop("checked", false);
  });

  $('.my-projects a').on('click', function(event) {
      event.preventDefault();
      var hash = this.hash;
      if (hash) {
        $('html, body').animate({scrollTop: $(hash).offset().top}, 900);
      }
      else {
        open(this.getAttribute('href'));
      }
  });
})

window.addEventListener('scroll', function() {
  var element = document.querySelector('#about-me');
  var position = element.getBoundingClientRect();

  if(position.top < window.innerHeight && position.bottom >= 0) {
    setTimeout(function(){
          contribution_odometer.innerHTML = 3050;
      }, 1500);

      setTimeout(function(){
          repo_odometer.innerHTML = 62;
      }, 1500);
      setTimeout(function(){
          years_odometer.innerHTML = 1;
      }, 1500);
	}
});
