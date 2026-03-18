document.addEventListener("DOMContentLoaded", ()=>{
    const menu = document.getElementById("menu");
const headerContent = document.getElementById("header-content");
const icon = menu.querySelector("i");


menu.addEventListener("click", ()=>{
    headerContent.classList.toggle("open");

    if(headerContent.classList.contains("open")){
        icon.classList.replace("fa-list", "fa-xmark")
    }else {
      icon.classList.replace("fa-xmark", "fa-list");
    }
});
});

let slideIndex = 0;
const slides = document.querySelectorAll(".slide")

function showSlide(index){
    slides.forEach(slide =>{
        slide.classList.remove("active")
    });

    slides[index].classList.add("active");
}

function changeSlide(n){
    slideIndex +=n;

    if (slideIndex >= slides.length){
        slideIndex=0;
    }
    else if(slideIndex <0){
        slideIndex = slides.length - 1;
    }

    showSlide(slideIndex)
}
showSlide(slideIndex)

document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(item => {
        const question = item.querySelector(".question");
        const icon = item.querySelector("i");

        question.addEventListener("click", () => {
            // Close all other FAQ items
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove("good");
                    const otherIcon = otherItem.querySelector("i");
                    otherIcon.className = "ri-arrow-right-s-line";
                }
            });

            // Toggle current item
            item.classList.toggle("good");

            // Change icon
            if (item.classList.contains("good")) {
                icon.className = "ri-arrow-drop-down-line";
            } else {
                icon.className = "ri-arrow-right-s-line";
            }
        });
    });
});


