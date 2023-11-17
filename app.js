// stiky navbar
window.onscroll = function () {
  stickyNavbar();
};

const navbar = document.querySelector(".navbar");
const heads = document.querySelector(".navhead");

const sticky = navbar.offsetTop;

function stickyNavbar() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky");
    heads.classList.add("sticky");
  } else{
    navbar.classList.remove("sticky");
    heads.classList.remove("sticky");
  }
}
// background-nav color

let nav = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;

  // Adjust this threshold based on when you want the opacity change to start
  var threshold = 100;

  if (scrollPosition > threshold) {
    nav.classList.add('opaque');
  } else {
    nav.classList.remove('opaque');
  }
});

// observer section for lazy load
document.addEventListener("DOMContentLoaded", function () {
  var lazySections = document.querySelectorAll("section");

  var lazyOptions = {
    root: null,
    rootMargin: "-10px",
    threshold: 0.2,
  };

  var lazyObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        entry.target.classList.remove("reverse");
        lazyObserver.unobserve(entry.target);
      } else {
        entry.target.classList.add("reverse");
      }
    });
  }, lazyOptions);

  lazySections.forEach(function (section) {
    lazyObserver.observe(section);
  });
});
// {realy no form ?}
