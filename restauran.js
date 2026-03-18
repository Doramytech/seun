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

const chicken = document.querySelector(".chicken-container");
const chicken1 = document.querySelector(".chicken-container1");
const chicken2 = document.querySelector(".chicken-container2");

const breaks = document.getElementById("breakfast");
const special = document.getElementById("special");
const dinner = document.getElementById("dinner");

function hideAll() {
  chicken.classList.remove("block");
  chicken1.classList.remove("block");
  chicken2.classList.remove("block");
}

// Breakfast
breaks.addEventListener("click", (e) => {
  e.preventDefault();
  hideAll();
  chicken.classList.add("block");
});

// Special
special.addEventListener("click", (e) => {
  e.preventDefault();
  hideAll();
  chicken1.classList.add("block2");
});

// Dinner
dinner.addEventListener("click", (e) => {
  e.preventDefault();
  hideAll();
  chicken2.classList.add("block3");
});




const playBtn = document.getElementById("playBtn");
const modal = document.getElementById("ytModal");
const closeBtn = document.querySelector(".close");
const iframe = document.getElementById("ytVideo");

// Replace with your YouTube video ID
const videoID = "xPPLbEFbCAo";

playBtn.addEventListener("click", () => {
  iframe.src = `https://www.youtube.com/embed/${videoID}?autoplay=1`;
  modal.classList.add("active");
});

closeBtn.addEventListener("click", closeVideo);

modal.addEventListener("click", (e) => {
  if (e.target === modal) closeVideo();
});

function closeVideo() {
  modal.classList.remove("active");
  iframe.src = ""; // stops the video
}


let map;

async function initMap() {
  const options = {
    zoom: 10,
    center: { lat: 6.440343, lng: 3.463797 }
  };

  map = new google.maps.Map(document.getElementById("map"), options);

  addMarker({
    coordinate: { lat: 6.440343, lng: 3.463797 },
    iconImage: "https://img.icons8.com/fluent/96/000000/marker-storm.png"
  });
}

function addMarker(prop) {
  const marker = new google.maps.Marker({
    position: prop.coordinate,
    map: map,
    icon: prop.iconImage
  });

  // 👉 Open Google Maps when marker is clicked
  marker.addListener("click", () => {
    const lat = prop.coordinate.lat;
    const lng = prop.coordinate.lng;

    const url = `https://www.google.com/maps?q=${lat},${lng}`;
    window.open(url, "_blank");
  });
}

initMap();

const btn = document.getElementById("btn");
const span = document.querySelector(".span")
btn.onclick = function(){
  span.classList.add("show")
}


const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  {
    threshold: 0.2 // triggers when 20% is visible
  }
);

reveals.forEach(el => observer.observe(el));

