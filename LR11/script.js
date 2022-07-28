
//задание 1
$("#p_spec_one").mouseover(function(){$("#p_spec_one").css("color","red")});
$("#p_spec_one").mouseout(function(){$("#p_spec_one").css("color","black")});

//задание 2
$(".h1_header_box").mouseover(function(){$(".h1_header_box").css("font-size","64px")});
$(".h1_header_box").mouseout(function(){$(".h1_header_box").css("font-size","32px")});

//заданеи 3




//задание 2.2

$("#img_one").mouseover(
  function(){
    $("#img_one").animate({left:220}, // действие
    2000, //скорость
    function(){$("#img_one").animate({left:0},2000)})} //действие после
);

//
