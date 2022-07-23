//задание 1
let moveObj = document.getElementById('moveObj');

//отслеживание нажатия
moveObj.onmousedown = function(e) {

  let coords = getCoords(moveObj);
  let shiftX = e.pageX - coords.left; //вычисляем смещение
  let shiftY = e.pageY - coords.top; //вычисляем смещение

// если позиция не абсолютная, то прописываем moveObj.style.position = 'absolute';

  // переместим в body, чтобы мяч был точно не внутри position:relative
  document.body.appendChild(moveObj);

  moveAt(e);

//если надо чтобы было над другими элементами moveObj.style.zIndex = 1000;

// производим смещение
  function moveAt(e) {
    moveObj.style.left = e.pageX - shiftX + 'px';
    moveObj.style.top = e.pageY - shiftY + 'px';
  }

//если двигаем мышью вызывается функция смещения
  document.onmousemove = function(e) {
    moveAt(e);
  };

//если убрали мышь с картинки, прекращаем
  moveObj.onmouseup = function() {
    document.onmousemove = null;
    moveObj.onmouseup = null;
  };

}
//начинаем смещение при щелчке по объекту
moveObj.ondragstart = function() {
  return false;
};

function getCoords(elem) {   // кроме IE8-
  let box = elem.getBoundingClientRect();
  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset
  };
}

//задание 2
/* из гайдов с инета
let moveObjTwo = document.getElementById('moveObjTwo');
moveObjTwo.onclick = function(){
  let start = Date.now(); // запомнить время начала

  let timer = setInterval(
    function() {
      // сколько времени прошло с начала анимации?
      let timePassed = Date.now() - start;

      if (timePassed >= 2000) {
        clearInterval(timer); // закончить анимацию через 2 секунды
        return;
      }
      // отрисовать анимацию на момент timePassed, прошедший с начала анимации
      draw(timePassed);
    },
    20);


  // в то время как timePassed идёт от 0 до 2000
  // left изменяет значение от 0px до 400px
  function draw(timePassed) {
    moveObjTwo.style.left = timePassed / 5 + 'px';
  }
}
*/

//заданеи 2 сам
let moveObjTwo = document.getElementById('moveObjTwo');

moveObjTwo.onclick = function(){
  let x = 10;
  let y = 1;
  setInterval(function(){

    if(y == 101){
      return;
    }

    if(x < 110){
    moveObjTwo.style.left = x + 'px';
    x++
    }

    if(x >= 110){
      moveObjTwo.style.left = x - y + 'px';
      y++
    }

  },20);
}

//заданеи 3

let moveObjThree = document.getElementById('moveObjThree');

moveObjThree.onclick = function(){
  let x = 0
  //написаь получение начальных коорд объекта
  setInterval(curveMove(x), 20)

  function curveMove(x) {
    //передвижение по окружности с помощью синусоиду с учётом начальных оорд объекта
  }
}
