document.addEventListener("DOMContentLoaded", () => {
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const targetId = link.getAttribute("href").slice(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 50,
          behavior: "smooth",
        });
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const readMoreLinks = document.querySelectorAll(".read-more");

  readMoreLinks.forEach((link) => {
    link.addEventListener("click", () => {
      const details = link
        .closest(".project")
        .querySelector(".project-details");

      if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
        link.textContent = "[Read Less]";
      } else {
        details.style.display = "none";
        link.textContent = "Read more..";
      }
    });
  });
});

function toggleDetails(id) {
  const details = document.getElementById(id);
  if (details.style.display === "none") {
    details.style.display = "block";
  } else {
    details.style.display = "none";
  }
}
