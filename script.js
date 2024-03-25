function fcbarcelona() {
    window.open("https://www.youtube.com/watch?v=wP6__QU0jv0")
}

function cote() {
    window.open ("https://www.youtube.com/watch?v=oRQTHN6Ceus")
}

function EaSports() {
    window.open("https://www.youtube.com/results?search_query=ea+sports+fc+24")
}

function Barcelona() {
    window.open("https://www.youtube.com/results?search_query=fc+barcelona")
}

let submenu = document.getElementById("submenu");

function togglemenu(){
    submenu.classList.toggle("open-menu");
}


let slidemenu = document.getElementById("slidemenu");

function togglesidemenu(){
    slidemenu.classList.toggle("hide-menu");
}

let scrollconrainer = document.querySelector(".button-list")
let leftbtn = document.querySelector(".left-arrow")
let rightbtn = document.querySelector(".right-arrow")

scrollconrainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollconrainer.scrollLeft += evt.deltaY;
})

rightbtn.addEventListener("click", ()=>{
    scrollconrainer.scrollLeft += 400;
});

leftbtn.addEventListener("click", ()=>{
    scrollconrainer.scrollLeft -= 400;
});