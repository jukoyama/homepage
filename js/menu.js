$(function() {
	$('.name').on('inview', function(event, isInView, visiblePartX, visiblePartY) {
		if(isInView){
			$(this).stop().addClass('mv07');
		}
		else{
			$(this).stop().removeClass('mv07');
		}
	});

	$("#datepicker").datepicker();

});
