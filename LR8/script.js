//Задание 1
function mouseOverBober(){
  document.getElementById("Bober").style.color = "#BF0B3B";
}

//Заданеи 2
function menu_buttonOnclick(){
  document.getElementById("header-menu_button").style.fontSize = "40px";
}

//Задание 3
function imageDivChange(){
  if(document.getElementById("imageDiv").src.includes("pictute2.png")){
    document.getElementById("imageDiv").src = "pictute1.jpg";
    return
  }
  if(document.getElementById("imageDiv").src.includes("pictute1.jpg"))
    document.getElementById("imageDiv").src = "pictute2.png";
}
//задание 4
function footerImgToText(){
  if(document.getElementById('footerText').innerHTML.includes('<p id="footerImg" onclick="footerImgToText()">Quest 4</p>')){
    document.getElementById('footerText').innerHTML ="<img id='footerImg' onclick='footerImgToText()' src='pictute2.png' alt=''>"
    return;
  }
  if(document.getElementById('footerText').innerHTML.includes('<img id="footerImg" onclick="footerImgToText()" src="pictute2.png" alt="">')){
    document.getElementById('footerText').innerHTML = '<p id="footerImg" onclick="footerImgToText()">Quest 4</p>';
    return;
  }
}
//задание 5
function mouseOutBoberFooter(){
  document.getElementById('BoberFooter').style.width = "100px"
}
function mouseOverBoberFooter(){
  document.getElementById('BoberFooter').style.width = "500px"
}
//Заданеи 6
function infoTextEdit(){
  document.getElementById('infoText').style.border = "1px solid #BF0B3B"
}
