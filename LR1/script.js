
//задание 1
alert("Вас приветствует учебный центр");
let name = prompt("Введите имя");
alert("Добро пожаловать на наши курсы, " + name);
let Answer = confirm("Хотите стать Web-дизайнером?");
if(Answer){
  alert("Учите стили CSS и JavaScript");
}
else{
  alert("Упускаете время!");
}

//Задание 2
alert(1 + 2);
alert("1" + "2");
alert("1" + 2);
alert(1 + "2");
alert("Результатом сложения строки и числа всегда будет " + typeof("1" + 2));

//задание 3
let number_x = prompt("Введите число X");
let number_y = prompt("Введите число Y");
let result_one = 35 * number_y - 25 * number_x;
let result_two = 8 ** number_y / 5 * number_x
alert("Результат выражения один: " + result_one);
alert("Результат выражения два: " + result_two);
alert("Остаток от деления: " + (result_one % result_two));

//задание 4
let q4 = prompt("Введите любое число");
if((q4 < 20 || q4 > 40) && q4 != 15){
  alert("Правильное значение");
}
else{
  alert("Не правильное значение");
}

//задание 5
let a = prompt("Введите A");
let b = prompt("Введите B");
if (a > b){
  alert("A > B");
}
else if (a == b){
  alert("A = B");
}
else{
  alert("A < B");
}

let exemple = prompt("Введите число");
(exemple > 50) ? alert("число > 50") : alert("число < 50");

//задание 6
