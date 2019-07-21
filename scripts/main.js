$(document).ready(function () {
  $('.header').height($(window).height());
})

function animateCSS(element, animationName, callback) {
  var nodeList = document.querySelectorAll(element);
  for (var i = 0; i < nodeList.length; ++i) {
    nodeList[i].classList.add('animated', animationName);
  }

  function endAnimation() {
    for (var j = 0; j < nodeList.length; ++j) {
      nodeList[j].classList.remove('animated', animationName)
      nodeList[j].removeEventListener('animationend', endAnimation)
      if (typeof callback === 'function') callback()
    }
  }

  for (var k = 0; k < nodeList.length; ++k){
    nodeList[k].addEventListener('animationend', endAnimation)
  }
}
document.getElementById("jsButton").addEventListener("click", function() {applyGrayscale('javascriptIcon');});
document.getElementById("jsButton").addEventListener("click", function(){animateCSS('.javascriptIcon', 'shake');})
function applyGrayscale(keepsColor) {
  var colorlessElements = document.querySelectorAll('.tech-icon');

  for (var i=0; i < colorlessElements.length; ++i){
    if (!colorlessElements[i].classList.contains(keepsColor)){
      colorlessElements[i].style.WebkitFilter="grayscale(100%)";
      colorlessElements[i].style.opacity="0.50";
    } 
  }
  setTimeout(function removeGrayscale(){
    for (var i=0; i < colorlessElements.length; ++i){
      colorlessElements[i].style.WebkitFilter="grayscale(0%)";
      colorlessElements[i].style.opacity="1";
    }
  }, 7000);
}

// function grayscale() {
//   var icon = querySelectorAll('.tech-icon');
//   for (var i=0; i < icon.length; i++){
//     var iconID = icon[i].id;
//     document.getElementById(iconID).addEventListener("click", function(){

//     });
//   }
// }