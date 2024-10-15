const navs = document.querySelectorAll("nav a");

for (const i = 0; i < navs.length; i++) {
  navs[i].addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");

    const targetSection = document.querySelector(targetId);

    targetSection.scrollIntoView({
      behavior: "smooth",
    });
  });
}
