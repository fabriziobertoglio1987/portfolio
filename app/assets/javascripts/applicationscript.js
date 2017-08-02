/* EXECUTION OF THE FUNCTIONS */

var ready = function(){
	switch (url()) {
		case "/":
		case "/pages":
			scrollToParagraph("#portfolio");
			if (window.innerWidth > 760) { navBarColor(false); } else { navBarColor(true); }
			break;
		case "/blog":
			navBarColor(true);
			break;
	}

	$('#circleArrow').hover(function(){
		$(this).effect("bounce", {times: 3}, 2000);
		$(this).click(function(){
			scrollToParagraph(".header.header-video");
		});
	});
}

var visit = function() {

}

/* FUNCTIONS */

function scrollToParagraph(target) {
	$('html, body').animate({scrollTop:0}, 'slow');
	position = $(target).offset();
	top_position = parseInt(position["top"]);
	$('.portfoliobutton').click(function(e){
		e.preventDefault();
		$('html, body').animate({scrollTop: top_position}, 'slow');
	});
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