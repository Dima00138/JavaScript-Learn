
//задание 1.1
$("#p_spec_one").mouseover(function(){$("#p_spec_one").css("color","red")});
$("#p_spec_one").mouseout(function(){$("#p_spec_one").css("color","black")});

//задание 1.2
$(".h1_header_box").mouseover(function(){$(".h1_header_box").css("font-size","64px")});
$(".h1_header_box").mouseout(function(){$(".h1_header_box").css("font-size","32px")});

//заданеи 1.3

//изменяем содержимое тега img с помощью attr
$("#img_two").click(function(){$("#img_two").attr("src","pictute1.jpg")});

//заданеи 1.4
//с помощью html мы изщменяем содержимое тега
$('#task_1_4').click(function(){$('#task_1_4').html('<p style="padding-top:200px">Что-то пропало</p>')});

//задание 1.5

$('#img_four').mouseover(function(){$("#img_four").css("width","200px")});
$("#img_four").mouseout(function(){$("#img_four").css("width","100px")});

//задание 1.6

$("p").dblclick(function(){$("p").css("border","1px solid #BF0B3B")});




//заданеи 2.1



//задание 2.2

$("#img_one").mouseover(
  function(){
    $("#img_one").animate({left:220}, // действие
    2000, //скорость
    function(){$("#img_one").animate({left:0},2000)})} //действие после
);

//
