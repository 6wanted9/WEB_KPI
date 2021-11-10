$(document).ready(function(){
    $(".expgroup").hide();
    $(".add").click(function(){
      $(".expgroup").animate({width:'toggle'}, function(){
        $(".add").toggleClass('rotated')
      });
    });
  });
  
  