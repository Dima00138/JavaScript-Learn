//задание 1
let moveObj = document.getElementById('moveObj');

//отслеживание нажатия
moveObj.onmousedown = function(e) {

  let coods = getCoords(moveObj);
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
