
const buttons = document.querySelectorAll(".buttons button");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    buttons.forEach(b => b.classList.remove("btn1", "btn2"));
    btn.classList.add(btn.id);
  });
});

// const headercontent = document.getElementById("header-content");
// const menu = document.getElementById("menu");

// menu.addEventListener('click', ()=>{
//   headercontent.style.display = headercontent.style.display==="grid" ? "none":"grid";
  

// })

const headercontent = document.querySelector(".header-content");
const menu = document.querySelector(".menu");

menu.addEventListener('click', () => {
  headercontent.classList.toggle("show");
  if (headercontent.classList.contains("show")){
    menu.src = "close-large-line.svg"
  }
  else{
    menu.src="menu-2-line.svg"
  }
});


