const ApplyGrayscale = keepsColor => {
  var colorlessElements = document.querySelectorAll(".tech-icon");

  for (var i = 0; i < colorlessElements.length; ++i) {
    if (!colorlessElements[i].classList.contains(keepsColor)) {
      colorlessElements[i].style.WebkitFilter = "grayscale(100%)";
      colorlessElements[i].style.opacity = "0.50";
    }
  }
  setTimeout(function removeGrayscale() {
    for (var i = 0; i < colorlessElements.length; ++i) {
      colorlessElements[i].style.WebkitFilter = "grayscale(0%)";
      colorlessElements[i].style.opacity = "1";
    }
  }, 7000);
};

export default {ApplyGrayscale};