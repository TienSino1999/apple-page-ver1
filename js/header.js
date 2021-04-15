var navBar = document.getElementsByTagName('nav')[0];

window.addEventListener('scroll', function() {
  var scrollPos = window.scrollY;
  if (scrollPos > 10) {
    navBar.classList.add('scrolled');
    // navBar.style.opacity = '0.2';
  } else {
    // navBar.style.opacity = '1';
    navBar.classList.remove('scrolled');
  }
})