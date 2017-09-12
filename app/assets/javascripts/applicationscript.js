/* EXECUTION OF THE FUNCTIONS */

var ready = function(){
	switch (url()) {
		case "/":
		case "/pages":
		case "/#":
			$('.animation').click(function(e){
				e.preventDefault();
				findParagraph(this);
			});
			if (window.innerWidth > 760) { navBarColor(false); } else { navBarColor(true); }
			break;
		case "/blog":
			navBarColor(true);
			break;
	}

	$('#circleArrow').hover(function(){
		$(this).effect("bounce", {times: 3}, 2000);
		/*$(this).click(function(){
			scrollToParagraph(".header.header-video", ".navbar.navbar-default");
		});*/
	});
}

var visit = function() {

}

/* FUNCTIONS */

function findParagraph(input) {
	/*console.log(input)*/
	animation = $('.animation'); 
	switch(input) {
		case animation[0]:
		case animation[1]:
			scrollToParagraph('#portfolio')
		break
		case $('.center.animation')[0]:
			scrollToParagraph('.navbar.navbar-default')
		break
	}
}

function scrollToParagraph(target) {
	/*parameters = [[".button.animation", ""],[".portfoliobutton", "#portfolio"],["#circleArrow", ".navbar.navbar-default"]];
	for (i = 0; i < array.length;  i++) {}*/
	position = $(target).offset();
	top_position = parseInt(position["top"]);
	$('html, body').animate({scrollTop: top_position}, 'slow');
	/*$(parameters[i][0]).click(function(e){
		e.preventDefault();
		$('html, body').animate({scrollTop: top_position}, 'slow');
	});		*/
}

function navBarColor(condition) {
	if (condition) {
		$('.navbar-nav, .navbar, .header .button').addClass("initial-background");
		$('.navbar.navbar-default .navbar-nav > li > a, .navbar-brand').css("color", "black");
	} else {
		$('.navbar-nav, .navbar, .header .button').removeClass("initial-background");
		$('.navbar.navbar-default .navbar-nav > li > a, .navbar-brand').css("color", "#FCFFFD");
	}
}


function url() {
    address = window.location.pathname; 
    return address;
}

function animateLink(target) {
	target.effect("bounce", "slow");
}

/* DOCUMENT READY CALL*/

$(document).on("turbolinks:load", ready);
$(document).on("turbolinks:visit", visit);