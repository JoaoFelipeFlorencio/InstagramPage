const images = ["image01", "image02", "image03", "image04", "image05"];

var prev = 0;
var next = 1;


function changeImage() {
  setTimeout(function() {
    
    document.getElementById(images[prev]).style.opacity = 0;
    document.getElementById(images[next]).style.opacity = 1;

    prev = next;

    next = next === 2 ? 0 : next + 1;

    changeImage();
  }, 6000);
}
changeImage();