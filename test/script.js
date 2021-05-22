var firstLi = document.getElementById("firstLi"), //Home
    secondLi = document.getElementById("secondLi"), //About me
    thirdLi = document.getElementById("thirdLi"), //Skills
    fourthLi = document.getElementById("fourthLi"); //Projects

thirdLi.addEventListener('click', () => window.scrollTo({
    top: 71,
    behavior: 'smooth',
  }));


  var pic = document.getElementById("pic"),
      aboutme = document.getElementById("aboutme"),
      visible = document.getElementById("visible");

  pic.onclick = function(){
        aboutme.style.background = "yellow" //Will change the color
        aboutme.style.opacity = "1"
        aboutme.style.transition = "opacity 1s"
        visible.style.opacity = "1"
        visible.style.transition = "opacity 3s"
  }

  pic.onmouseout = function(){ 
        aboutme.style.opacity = "0"
        aboutme.style.transition = "all 3s"
        visible.style.opacity = "0"
        visible.style.transition = "opacity 1s"
  }
  secondLi.addEventListener('click', () => window.scrollTo({
    top: 1021,
    behavior: 'smooth',
  }));
var scroll = document.scrollingElement.scrollTop,
     home = document.getElementById("home");
window.onscroll = function(){
    if(window.pageYOffset >= 1021){
        home.style.visibility = "visible"
            home.addEventListener('click', () => window.scrollTo({
                top: 0,
                behavior: 'smooth',
              }));
        
    }else{
        home.style.visibility = "hidden"
    }
}
        fourthLi.addEventListener('click', () => window.scrollTo({
        top: 2028,
        behavior: 'smooth',
      }));
var mediaQuery = window.matchMedia('(min-width: 480px) and (max-width: 767px)');

(function(){
if(mediaQuery.matches){
    
}