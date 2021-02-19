//Nav Bar Functioning
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  const nav__overlay = document.querySelector(".nav-overlay");

  burger.addEventListener("click", () => {
    toggleMobileNav();
  });

  nav__overlay.addEventListener("click", () => {
    toggleMobileNav();
  });

  function toggleMobileNav() {
    // toggle nav
    nav.classList.toggle("nav-active");
    nav__overlay.classList.toggle("nav-active");

    // Animate Links
    navLinks.forEach((link, index) => {
      if (link.className == "nav-active") {
        link.style.transition = "1s ease-in";
      } else {
        link.style.transition = "0.5s ease " + index / 7 + "s";
      }
      link.classList.toggle("nav-active");
      link.addEventListener("click", () => {
        nav.classList.remove("nav-active");
        nav__overlay.classList.remove("nav-active");
        burger.classList.remove("toggle");
        navLinks.forEach((link) => {
          link.style.transition = "1s ease-in";
          link.classList.remove("nav-active");
        });
      });
    });
    // Burger animation
    burger.classList.toggle("toggle");
  }
};
navSlide();

// Navbar Highlighting
function unhighlight() {
  document.querySelectorAll(".nav-links li").forEach((item) => {
    item.querySelector("a").style.color = "#8495b6";
  });
  document.querySelectorAll(".bottom-navbar a").forEach((item) => {
    item.style.color = "#8495b6";
  });
}
function highlight(elem1, elem2) {
  unhighlight();
  elem1.style.color = "white";
  // elem2.style.color = "white";
}
highlight(
  document.querySelector(".nav-links li:nth-child(1) a")
  // document.querySelector(".bottom-navbar a:nth-child(1)")
);
window.addEventListener("scroll", (e) => {
  // console.log(window.scrollY, document.querySelector('#Experience').offsetTop);
  if (window.scrollY > document.querySelector("#home").offsetTop) {
    highlight(
      document.querySelector(".nav-links li:nth-child(1) a"),
      document.querySelector(".bottom-navbar a:nth-child(1)")
    );
  }
  if (window.scrollY > document.querySelector("#about").offsetTop - 100) {
    highlight(
      document.querySelector(".nav-links li:nth-child(2) a"),
      document.querySelector(".bottom-navbar a:nth-child(1)")
    );
  }
  if (window.scrollY > document.querySelector("#experience").offsetTop - 100) {
    highlight(
      document.querySelector(".nav-links li:nth-child(3) a"),
      document.querySelector(".bottom-navbar a:nth-child(2)")
    );
  }
  if (window.scrollY > document.querySelector("#projects").offsetTop - 100) {
    highlight(
      document.querySelector(".nav-links li:nth-child(4) a"),
      document.querySelector(".bottom-navbar a:nth-child(4)")
    );
  }
  if (window.scrollY > document.querySelector("#contact").offsetTop - 100) {
    highlight(
      document.querySelector(".nav-links li:nth-child(6) a"),
      document.querySelector(".bottom-navbar a:nth-child(4)")
    );
  }
});
