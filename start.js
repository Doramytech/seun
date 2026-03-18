const count = document.getElementById("count");
const counts = document.getElementById("counts");
const countss= document.getElementById("countss");
const header=document.getElementById("header");
const menu = document.getElementById("menu");
const headercontent=document.getElementById("headercontent");
const inpt = document.getElementById("inpt");
const sdd = document.getElementById("sdd");
const dropss= document.getElementById("dropss");
const btns = document.getElementById("btns");
const btnss =document.querySelectorAll("#btns");

let countdown=0;

function countNumber(){
    countdown++;
    count.textContent=countdown;
    counts.textContent=countdown;
    countss.textContent=countdown;

    if (countdown<300){
        setTimeout(countNumber, 10)
    }
}
countNumber();
menu.addEventListener('click', ()=>{
    headercontent.style.display=headercontent.style.display==='block' ? 'none':'block';
    header.style.backgroundColor="white"
})
btnss.forEach(btnss=>{
    btnss.addEventListener('mouseover', ()=>{
        btnss.style.opacity=0.6;
        btnss.style.color='black'
    })
    btnss.addEventListener('mouseout', ()=>{
        btnss.style.opacity=1;
        btnss.style.color='white'
    })
})