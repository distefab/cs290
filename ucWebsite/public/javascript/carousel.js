var slideShow

function slideDirection(n){
    resetTimer(timer);
    if (n < 0){
      slideViewer(slideShow -= 1);
    } else {
     slideViewer(slideShow += 1); 
    }
    if (n === -1){
      timer = setTimer(function(){slideDirection(n + 2)}, 4000);
    } else {
      timer = setTimer(function(){slideDirection(n + 1)}, 4000);
    }
  }

function slideViewer(n){
    var i;
    var slides = document.getElementsByClassName("slide");
    if (n > slides.length) {slideShow = 1}
    if (n < 1) {slideShow = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideShow-1].style.display = "block";
  }

window.addEventListener("load",function() {
    slideViewer(slideShow);
    timer = setTimer(function(){slideDirection(1)}, 4000);
})