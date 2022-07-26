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

    if(y == 101){return;}

    if(x < 110){moveObjTwo.style.left = x + 'px'; x++ }

    if(x >= 110){moveObjTwo.style.left = x - y + 'px'; y++ }

  },20);
}

//заданеи 3

let moveObjThree = document.getElementById('moveObjThree');

moveObjThree.onclick = function(){
  //переменные для счёта
  let x = 0;
  let y = 0;
  //написаь получение начальных коорд двигаемого объекта
  coordY = moveObjThree.getBoundingClientRect().y;
  coordX = moveObjThree.getBoundingClientRect().x;

  setInterval(function(){
    if(y == 600){return;}

    moveObjThree.style.top = coordY + Math.sin(x) * 100 + 'px';

    if(y < 300){
      moveObjThree.style.left = coordX + x * 100 + 'px';
      x += 0.01;
    }

    if(y >= 300){
      moveObjThree.style.left = coordX + x * 100 + 'px';
      x -= 0.01;
    }

    y++
  }, 10)

}


//Задание 4

function draw(choice) {
  var canvas = document.getElementById('canvas');
  if (canvas.getContext){

    let x = 1;
    let y = 0;

    var ctx = canvas.getContext('2d');

    if(choice == 1){
      ctx.clearRect(0, 0, 400, 300);
      ctx.beginPath();
      ctx.lineWidth = 3; // толщина обводки
      ctx.strokeStyle= document.getElementById('form').color.value; // цвет обводки
      ctx.moveTo(0,150);

      for (let i = x; i < 100; i++) {
        y = i * i;
        ctx.lineTo(i,150 + y);
      }


      ctx.stroke();
    }

    if(choice == 2){

      ctx.clearRect(0, 0, 400, 300);
      ctx.beginPath();
      ctx.lineWidth = 3; // толщина обводки
      ctx.strokeStyle= document.getElementById('form').color.value; // цвет обводки
      ctx.moveTo(0,150);

      for (let i = x; i < 100; i++) {
        y = i * i * i;
        ctx.lineTo(i,150 + y);
      }

      ctx.stroke();
    }

    if(choice == 3){

      ctx.clearRect(0, 0, 400, 300);
      ctx.beginPath();
      ctx.lineWidth = 3; // толщина обводки
      ctx.strokeStyle= document.getElementById('form').color.value; // цвет обводки
      ctx.moveTo(0,150);

      for (let i = x; i < 100; i++) {
        y = Math.sin(i)
        ctx.lineTo(i,150 + y);
      }

      ctx.stroke();
    }

    if(choice == 4){

      ctx.clearRect(0, 0, 400, 300);
      ctx.beginPath();
      ctx.lineWidth = 3; // толщина обводки
      ctx.strokeStyle= document.getElementById('form').color.value; // цвет обводки
      ctx.moveTo(0,150);

      for (let i = x; i < 100; i++) {
        y = Math.cos(i);
        ctx.lineTo(i,150 + y);
      }

      ctx.stroke();
    }
  }
}
