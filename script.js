
var New = document.querySelector(".New");
var nav = document.querySelector(".nav");
var links = document.querySelector(".nav li");

New.addEventListener("click",function(){
    this.classList.new("click");
    nav.classList.New("open");
})

var typed = new Typed(".input",{
    strings:["frontend developer","Web Developer","UI/Ux Designer"],
    typeSpeed:100,
    backSpeed:100,
    backdelay:100,
    loop:true
})