﻿
//this hides the media scroller on load

window.onload = function hideOnLoad(){
    document.getElementById("myDigitalArt").style.display='none';
    document.getElementById("animation").style.display='none';
    document.getElementById("analogArt").style.display='none';
    document.getElementById("oldFanArt").style.display='none';
    document.getElementById("newFanArt").style.display='none';
    document.getElementById("myArt").style.display='none';
    document.getElementById("fanArt").style.display='none';
    document.getElementById("sandyTheCatDropDown").style.display='none';
  };

// creates a dropdown menu button in JS

function showHideFunction(stringIdToCall) {
    var x = document.getElementById(stringIdToCall);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }



// BACK TO TOP button 
let mybutton = document.getElementById("topButton");

//contd When the user scrolls down 20px from the top of the document, show the button edited to 50 but not sure thats working
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 270 || document.documentElement.scrollTop > 270) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

//contd Click on the button and auto scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; //safari verified
  document.documentElement.scrollTop = 0; //supposedly chrome firefoxe ie opera
}
// END of BACK TO TOP button

//


