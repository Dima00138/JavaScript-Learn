
//задание 1
let myWindow
function OpenWindow(){
  myWindow = window.open("", "Page2" ,"width=250, height=250");
}
function WindowAlert(){
  myWindow.document.write("Название этого сайта "  + document.title);
}
function CloseWindow(){
  if (myWindow) {
   myWindow.close();
   myWindow = null;
 }
}

//заданеи 2
document.write(
"<table>" +
"<tr><td>" + "Свойство" + "</td><td>" + "Значение" + "</td></tr>" +
"<tr><td>" + "всю информацию о браузере пользователя" + "</td><td>" + navigator.userAgent + "</td></tr>" +
"<tr><td>" + "версию браузера" + "</td><td>" + navigator.appVersion + "</td></tr>" +
"<tr><td>" + "название браузера" + "</td><td>" + navigator.appName + "</td></tr>" +
"<tr><td>" + "кодовое название браузера" + "</td><td>" + navigator.appCodeName + "</td></tr>" +
"<tr><td>" + "ОС, которую использует пользователь" + "</td><td>" + navigator.platform + "</td></tr>" +
"<tr><td>" + "включена ли поддержка Java в браузере" + "</td><td>" + navigator.javaEnabled() + "</td></tr>" +
"<tr><td>" + "ширину и высоту экрана" + "</td><td> w:" + screen.width + " h:" + screen.height + "</td></tr>" +
"<tr><td>" + "глубину цвета" + "</td><td>" + screen.colorDepth + "</td></tr>" +
"<tr><td>" + "URL, которые были посещены в данном окне браузера" + "</td><td>" + history  + "</td></tr>" +
"<tr><td>" + "URL текущего документа" + "</td><td>" + location.href + "</td></tr>" +
"<tr><td>" + "путь к загруженному документу" + "</td><td>" + location.pathname + "</td></tr>" +
"<tr><td>" + "имя домена загруженного документа" + "</td><td>" + location.hostname
 + "</td></tr>" +
"</table>"
);
