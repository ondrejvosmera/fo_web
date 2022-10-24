const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
})

mobile_menu.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobile_menu.classList.toggle('active');
})


document.addEventListener('scroll', () =>{
    var scroll_position = window.scrollY;
    if(scroll_position > 250){
        header.style.backgroundColor = "#ffffff";
    }
    else{
        header.style.backgroundColor = "transparent";
    }
} )

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  var width = document.documentElement.clientWidth;
  if (prevScrollpos > currentScrollPos){
    document.getElementById("header").style.top = "0";
  }
  else if (width < 768){
    document.getElementById("header").style.top = "0";
  }
  else {  
    document.getElementById("header").style.top = "-90px";
  }
  prevScrollpos = currentScrollPos;
}

const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", () =>{
    var scroll_position = window.scrollY;
    if(scroll_position > 300){
        toTop.classList.add("active");
    } 
    else {
        toTop.classList.remove("active");
    }
})