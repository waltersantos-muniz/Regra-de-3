// This is a JavaScript file
$(document).on("click","#calc",function(){
   let resultado = $("#valor3").val()*$("#valor2").val()/$("#valor1").val();
   $("#resultado").val(resultado);
    $("#valor4").val(resultado);
});

$(document).on("click","#limpar",function(){
  $("#valor1").val("");
   $("#valor2").val("");
     $("#valor3").val("");
       $("#valor4").val("");
        $("#resultado").val("");
});