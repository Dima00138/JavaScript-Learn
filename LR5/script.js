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
console.log(document.all)
for (let item of document.all){
  console.log(item);
}
