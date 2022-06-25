const navToggle = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");

// select links
navToggle.addEventListener("click", function () {
  links.classList.toggle("show-links");
});

// scroll link
const scrollLink = document.querySelectorAll(".scroll-link");

scrollLink.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    links.classList.remove("show-links");

    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    let position = element.offsetTop - 77;

    window.scrollTo({
      left: 0,
      top: position,
      behavior: "smooth",
    });
  });
});
