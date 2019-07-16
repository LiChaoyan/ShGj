//------------- landing.js -------------//
$(document).ready(function() {
	$(function() {
	    $('.scrollTo, .back-to-top, .goTo').bind('click',function(event){
			var $anchor = $(this);
			$('html, body').stop().animate({
	        scrollTop: $($anchor.attr('href')).offset().top
	        }, 1500,'easeInOutExpo');
	    event.preventDefault();
	    });
	});

	//Animate logos
	$('.logos').waypoint({
		offset: '90%',
		handler: function(direction) {
		    // do stuff
		    $('.logos').addClass('animated bounceIn opacity');
		}
	});

	//Animate features
	$('.clean-code .col-md-8').waypoint({
		offset: '60%',
		handler: function(direction) {
		    // do stuff
		    $('.clean-code .col-md-8').addClass('animated fadeInLeft opacity');
		}
	});

	$('.clean-code .col-md-4').waypoint({
		offset: '60%',
		handler: function(direction) {
		    // do stuff
		    $('.clean-code .col-md-4').addClass('animated fadeInRight opacity');
		}
	});

	$('.charts .col-md-8').waypoint({
		offset: '60%',
		handler: function(direction) {
		    // do stuff
		    $('.charts .col-md-8').addClass('animated fadeInRight opacity');
		}
	});

	$('.charts .col-md-4').waypoint({
		offset: '60%',
		handler: function(direction) {
		    // do stuff
		    $('.charts .col-md-4').addClass('animated fadeInLeft opacity');
		}
	});

	$('.email-app .col-md-8').waypoint({
		offset: '60%',
		handler: function(direction) {
		    // do stuff
		    $('.email-app .col-md-8').addClass('animated fadeInLeft opacity');
		}
	});

	$('.email-app .col-md-4').waypoint({
		offset: '60%',
		handler: function(direction) {
		    // do stuff
		    $('.email-app .col-md-4').addClass('animated fadeInRight opacity');
		}
	});
});