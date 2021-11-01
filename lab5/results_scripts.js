$(function(){
	$('#slider').slider({
		slide: function(event, ui){
			$('#val').val(ui.value);
		}
	});
});

$( function() {
    $( "#datepicker" ).datepicker();
});