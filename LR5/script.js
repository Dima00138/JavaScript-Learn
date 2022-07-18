//задание 1
/*
хрень которую написал я
function nodecheck(node, numberUL, numberLI = 1){
  if(node.children) { //проверка на наличие содержимого у элемента коллекции
    for(let item of node.children){ // перебор содержимого
      console.log(numberUL + "." + numberLI);
      console.log(item);
      if(item.children){ //проверка на наличие у содержимого собственного содержимого
        numberLI++;
        nodecheck(item, numberUL, numberLI); //рекурсия
      }
    }
  }
  return;
}

let number = 1;
for (let node of document.body.childNodes) {
  if(node.children)console.log(node);// покажет узел из коллекции
  nodecheck(node, number);
    if(node.children)number++;
}

*/

//то что надо
//задание 1
console.log(document.all)
for (let item of document.all){
  console.log(item);
}

//заданеи 2
console.log(document.body)
for (let item of document.body.childNodes){
  if(item.children)console.log(item);
}

//заданеи 3
//первый вариант
for (let item of document.all){
  if(item.tagName == "SPAN"){//сравнение тега с словом SPAN с помощью tagName
    console.log(item.innerHTML);//вынимаем содержимое с помощью innerHTML
    break;
  }
}
//второй вариант
let spanitem = document.getElementsByTagName("SPAN")
console.log(spanitem.item(Date).innerHTML)
//третий способ
console.log(document.getElementById('identspan').innerHTML)


//задание 4

for(let i = 1, sr_ball=0;;i++){
  if(!table.rows[i]){
    document.getElementById('identspan2').innerHTML= (sr_ball / 3);
    break
  }
  sr_ball += Number(table.rows[i].cells[1].innerHTML)
}
