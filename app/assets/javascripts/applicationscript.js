var ready = function(){
	$('html, body').animate({scrollTop:0}, 'slow');
	position = $('#portfolio').offset();
	top_position = parseInt(position["top"]);
	$('.portfoliobutton').click(function(e){
		e.preventDefault();
		/*window.scrollTo(0, top_position);*/
		$('html, body').animate({scrollTop: top_position}, 'slow');
	});



}


$(document).on("turbolinks:load", ready);