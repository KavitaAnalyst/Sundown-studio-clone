
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function PageAnimation(){
  var elemContainer = document.querySelector("#elem-container")
var fixedImg = document.querySelector("#fixed-image")
elemContainer.addEventListener("mouseenter",function(){
    fixedImg.style.display ="block";
});

elemContainer.addEventListener("mouseleave",function(){
    fixedImg.style.display ="none";
});

var elems = document.querySelectorAll(".elem")
elems.forEach(function(e){
e.addEventListener("mouseenter",function(){
var image = e.getAttribute("data-image")
fixedImg.style.backgroundImage=`url(${image})`
})
});
}
// var elem1 = document.querySelector("#elem1")
// elem1.addEventListener("mouseenter",function(){
//     var image = elem1.getAttribute("data-image")
//     fixedImg.style.backgroundImage = `url(${image})`
// })




function swiperAnimation(){
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",
    centeredSlides:false,
    spaceBetween: 100,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  })
};
function hamburgerMenu(){
  var menu = document.querySelector("#nav h3")
var navImg = document.querySelector("#nav img");
var FullScreen = document.querySelector("#full-screen")
var menuITEM = document.querySelector("#nav #menuItem")
var flag =0
menu.addEventListener("click",function(){

  if (flag==0){
    FullScreen.style.top=0;
    navImg.style.opacity=0;
    flag =1
    menuITEM.style.display="block";
  }

  else{
    FullScreen.style.top="100%";
    navImg.style.opacity=1;
    flag = 0;
    menuITEM.style.display="none";
  }
});
}

function loaderAnimation(){
  var loader = document.querySelector("#loader")

  setTimeout(function(){
      loader.style.top= "-100%"
  }, 4000)
  

}

PageAnimation();
swiperAnimation();
hamburgerMenu();
loaderAnimation()
