document.addEventListener("DOMContentLoaded", () => {

  // ===== MOBILE MENU =====
  const menuBtn = document.getElementById("menu");
  const nav = document.getElementById("header");
  const icon = menuBtn.querySelector("i");

  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");

    if (nav.classList.contains("open")) {
      icon.classList.replace("fa-list", "fa-xmark");
    } else {
      icon.classList.replace("fa-xmark", "fa-list");
    }
  });

  // ===== DROPDOWN MENU (MOBILE CLICK) =====
  const dropdownLink = document.getElementById("link");
  const dropdownContent = document.querySelector(".dropdown-content");

  dropdownLink.addEventListener("click", (e) => {
    e.preventDefault();
    dropdownContent.classList.toggle("show");
  });

});


const labels = document.querySelectorAll(".label");

labels.forEach(label => {
  label.addEventListener("click", (e) => {
    e.preventDefault(); // prevent <a> from navigating

    // remove active from all
    labels.forEach(l => l.classList.remove("active"));

    // add active to clicked one
    label.classList.add("active");
  });
});