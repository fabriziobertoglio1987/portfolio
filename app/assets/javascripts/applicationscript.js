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
			// if (window.innerWidth > 760) { navBarColor(false); } else { navBarColor(true); }
			break;
		case "/blog":
		case "/contact":
			navBarColor(true);
			break;
	}

	$('#circleArrow').hover(function(){
		$(this).effect("bounce", {times: 3}, 2000);
	});
}

var visit = function() {

}

/* FUNCTIONS */

function findParagraph(input) {
	animation = $('.animation'); 
	switch(input) {
		case animation[0]:
		case animation[1]:
			scrollToParagraph('#surfcheck')
		break
		case $('.center.animation')[0]:
			/*scrollToParagraph('.navbar.navbar-default')*/
			scrollToParagraph('#video-container')
		break
	}
}

function scrollToParagraph(target) {
	position = $(target).offset();
	top_position = parseInt(position["top"]) - 20;
	$('html, body').animate({scrollTop: top_position}, 'slow');
	height = document.getElementById("bs-example-navbar-collapse-1").style.height
	if (target == '#portfolio' && height != "1px") {
		$("#bs-example-navbar-collapse-1").css("height","1px");
	}
}

//function navBarColor(condition) {
//	if (condition) {
//		$('.navbar-nav, .navbar, .header .button').addClass("initial-background");
//		$('.navbar.navbar-default .navbar-nav > li > a, .navbar-brand').css("color", "black");
//	} else {
//		$('.navbar-nav, .navbar, .header .button').removeClass("initial-background");
//		/*$('.navbar.navbar-default .navbar-nav > li > a, .navbar-brand').css("color", "#FCFFFD");*/
//	}
//}


function url() {
    address = window.location.pathname; 
    return address;
}

function animateLink(target) {
	target.effect("bounce", "slow");
}


function cookieconsent() {

}

/* DOCUMENT READY CALL*/

$(document).on("turbolinks:load", ready);
$(document).on("turbolinks:visit", visit);
