function AnimateIcon(element, animationName, callback) {
    var nodeList = document.querySelectorAll(element);
    for (var i = 0; i < nodeList.length; ++i) {
      nodeList[i].classList.add("animated", animationName);
    }

    function endAnimation() {
      for (var j = 0; j < nodeList.length; ++j) {
        nodeList[j].classList.remove("animated", animationName);
        nodeList[j].removeEventListener("animationend", endAnimation);
        if (typeof callback === "function") callback();
      }
    }

    for (var k = 0; k < nodeList.length; ++k) {
      nodeList[k].addEventListener("animationend", endAnimation);
    }
  };

export {AnimateIcon as default};