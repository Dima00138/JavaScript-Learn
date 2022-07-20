
//задание 4
function form3(){
  let form_3_option = "<ul>";
  if(document.getElementById('faculty_form').object[0].checked){
    form_3_option += "<li>" + document.getElementById('faculty_form').object[0].value + "</li>";
  }
  if(document.getElementById('faculty_form').object[1].checked){
    form_3_option += "<li>" + document.getElementById('faculty_form').object[1].value  + "</li>";
  }
  if(document.getElementById('faculty_form').object[2].checked){
    form_3_option += "<li>" + document.getElementById('faculty_form').object[2].value  + "</li>";
  }
  if(document.getElementById('faculty_form').object[3].checked){
    form_3_option += "<li>" + document.getElementById('faculty_form').object[3].value  + "</li>";
  }
  if(document.getElementById('faculty_form').object[4].checked){
    form_3_option += "<li>" + document.getElementById('faculty_form').object[4].value  + "</li>";
  }
  form_3_option += "</ul>"
  document.forms[2].innerHTML =
  "<fieldset><h4>Часть 2</h4><p>Предметы</p>"+
  form_3_option +
  "</fieldset>"
}

//заданеи 3
function form_objet_input(){
  let form_objects = "<ul>";
  if(document.getElementById('faculty_form').object[0].checked){
    form_objects += "<li>" + document.getElementById('faculty_form').object[0].value + "</li>";
  }
  if(document.getElementById('faculty_form').object[1].checked){
    form_objects += "<li>" + document.getElementById('faculty_form').object[1].value  + "</li>";
  }
  if(document.getElementById('faculty_form').object[2].checked){
    form_objects += "<li>" + document.getElementById('faculty_form').object[2].value  + "</li>";
  }
  if(document.getElementById('faculty_form').object[3].checked){
    form_objects += "<li>" + document.getElementById('faculty_form').object[3].value  + "</li>";
  }
  if(document.getElementById('faculty_form').object[4].checked){
    form_objects += "<li>" + document.getElementById('faculty_form').object[4].value  + "</li>";
    form_objects += "</ul>";
  }
  form3();
  return form_objects;
}

function print_form(){
  form_objet_input();
  document.write(
    "<div>" +
    "<p style='text-align:center'>" +
    document.getElementById('faculty_form').faculty_name.innerHTML +
    "</p>" +
    "<p>Студент " +
    document.getElementById('faculty_form').lastname.value +
    " специальность " +
    document.getElementById('faculty_form').spec.value +
    " курс " +
    document.getElementById('faculty_form').year.value +
    " должен сдавать следующие предметы:</p>" +
     form_objet_input() +
    "</div>"
  )
}
