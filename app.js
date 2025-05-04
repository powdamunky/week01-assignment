let mybutton = document.getElementById("bttBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
} else {
    mybutton.style.display = "none";
}
}

function topFunction() {
document.body.scrollTop = 0;
document.documentElement.scrollTop = 0; 
}

document.getElementById("abFire").loop = true;

function playMusic() {
  var audio = document.getElementById("abFire");
  audio.play();
}

function pauseMusic() {
  var audio = document.getElementById("abFire");
  audio.pause();
}
