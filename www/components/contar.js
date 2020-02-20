// This is a JavaScript file
$(document).on("click","#somar",function(){
  var valor1 = $("#valor1").val();
  var valor2 = $("#valor2").val();
  var result = parseFloat(valor1)+parseFloat(valor2);
  $("#resultado").val(result);

});

$(document).on("click","#subt",function(){
  var valor1 = $("#valor1").val();
  var valor2 = $("#valor2").val();
  var result = parseFloat(valor1)-parseFloat(valor2);
  $("#resultado").val(result);

 }); 

$(document).on("click","#divisao",function(){
  var valor1 = $("#valor1").val();
  var valor2 = $("#valor2").val();
  var result = parseFloat(valor1)/parseFloat(valor2);
  $("#resultado").val(result);

 }); 

$(document).on("click","#multi",function(){
  var valor1 = $("#valor1").val();
  var valor2 = $("#valor2").val();
  var result = parseFloat(valor1)*parseFloat(valor2);
  $("#resultado").val(result);

 }); 

$(document).on("click","#limpar",function(){
  $("#valor1").val("");
   $("#valor2").val("");
    $("#resultado").val("");
});