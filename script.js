function Shuffle(o) {
	for(var j, x, i = o.length; i; j = parseInt(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
	return o;
};

var imagesArr = ["img/angular2.png", "img/backbone.png", "img/ember-js.png", "img/meteor.png", "img/node.png",
                  "img/preact.png", "img/react.svg", "img/vue.svg", "img/angular2.png", "img/backbone.png",
                  "img/ember-js.png", "img/meteor.png", "img/node.png", "img/preact.png", "img/react.svg", "img/vue.svg"]

document.addEventListener("DOMContentLoaded", renderImages = () => {
  var imgList = document.querySelector('.cards-row')
  var imgArr = Shuffle(imagesArr)
  for(let i=0; i<imgArr.length; i++) {
    imgList.innerHTML += `
      <div class="flip-container" onclick="this.classList.toggle('hover')">
        <div class="flipper">
          <div class="front">
            <div class="img-div"></div>
          </div>
          <div class="back">
            <img src=${imgArr[i]}>
          </div>
        </div>
      </div>
    `
  }
});

document.addEventListener("click", () => {
  var imgList = document.querySelectorAll('.hover')
  var targArr = imgList


  if (targArr[0].childNodes[1].childNodes[3].childNodes[1].src == targArr[1].childNodes[1].childNodes[3].childNodes[1].src) {
    targArr = []
    setTimeout(()=>{
      imgList[1].classList.remove('hover')
      imgList[0].classList.remove('hover')
      imgList[0].classList.add('inviz')
      imgList[1].classList.add('inviz')
      imgList[0].onclick = console.log('haha')
      imgList[1].onclick = console.log('haha')
    }, 1000)
  } if (targArr[0].childNodes[1].childNodes[3].childNodes[1].src != targArr[1].childNodes[1].childNodes[3].childNodes[1].src) {
    targArr = []
    setTimeout(()=>{
      imgList[1].classList.remove('hover')
      imgList[0].classList.remove('hover')
    }, 1500)
  }


})


