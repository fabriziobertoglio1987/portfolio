/* EXECUTION OF THE FUNCTIONS */

var ready = function(){
	scrollToParagraph();
}


/* FUNCTIONS */

function scrollToParagraph() {
	$('html, body').animate({scrollTop:0}, 'slow');
	position = $('#portfolio').offset();
	top_position = parseInt(position["top"]);
	$('.portfoliobutton').click(function(e){
		e.preventDefault();
		/*window.scrollTo(0, top_position);*/
		$('html, body').animate({scrollTop: top_position}, 'slow');
	});
}


function changeNavbarColor() {

    var url = window.location.pathname; 
        urlRegExp = new RegExp(url.replace(/\/$/,'')); 
        console.log(urlRegExp);
    
    // now grab every link from the navigation
    /*    $('.sidebar a').each(function(){
            // and test its href against the url pathname regexp
            if(urlRegExp.test(this.href)){
                $(this).parents('li').addClass('active');
            }
        });*/

    /* GET companies#index show Print Settings */
    /*if (urlRegExp.test(/\/companies/)) {
        $('#runForm').hide();
    }*/

}

/* DOCUMENT READY CALL*/

$(document).on("turbolinks:load", ready);