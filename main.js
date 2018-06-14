// Initial scroll position
var scrollState = 0;

// Store navbar classes
var navClasses = document.getElementById('header').classList;

// returns current scroll position
var scrollTop = function() {
  return window.scrollY;
};

// Primary scroll event function
var scrollDetect = function(home, down, up) {
  // Current scroll position
  var currentScroll = scrollTop();
  if (scrollTop() === 0) {
    home();
  } else if (currentScroll > scrollState) {
    down();
  } else {
    up();
  }
  // Set previous scroll position
  scrollState = scrollTop();
};

function homeAction() {
  console.log("home");
}

function downAction() {
  navClasses.remove('open');
  navClasses.add('collapse');
}

function upAction() {
  navClasses.remove('collapse');
  navClasses.add('open');
}

window.addEventListener("scroll", function() {
  scrollDetect(homeAction, downAction, upAction);
});



var burgerMenu = document.querySelector('.menu');
var imgClose = document.querySelector('.menu-close');
var mainnav = document.getElementById('mainav');


burgerMenu.addEventListener('click', function() {
  mainav.style.display = 'block';
  imgClose.style.display = 'block';

})
imgClose.addEventListener('click', function() {
  mainav.style.display = 'none';
  imgClose.style.display = 'none';
})