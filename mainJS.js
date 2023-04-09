window.onload = function(){
    document.getElementById("dropDownGallery").style.display='none';
  };
//this hides the scroller on load

function myFunction() {
    var x = document.getElementById("dropDownGallery");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  // actual button js from W3