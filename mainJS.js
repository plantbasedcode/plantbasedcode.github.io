window.onload = function(){
    document.getElementById("dropDownGallery").style.display='none';
  };
//this hides the media scroller on load

function myFunction() {
    var x = document.getElementById("dropDownGallery");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
// creates a dropdown menu button in js


// BACK TO TOP button 
let mybutton = document.getElementById("topButton");

// When the user scrolls down 20px from the top of the document, show the button edited to 50 but not sure thats working
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Click on the button and auto scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; //safari verified
  document.documentElement.scrollTop = 0; //supposedly chrome firefoxe ie opera
}
// END of BACK TO TOP


