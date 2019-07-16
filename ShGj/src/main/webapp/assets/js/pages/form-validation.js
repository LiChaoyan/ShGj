$(document).ready(function() {

//------------- Select 2 -------------//
$('.select2').select2({placeholder: 'Select state'});

//------------- File input styling -------------//
$(":file").filestyle({
	buttonText: "Select file",
	classButton: "btn btn-primary",
	classInput: "form-control file-upload",
	classIcon: "fa-plus-sign"
});
 
//------------- Form validation -------------//
//add custom method for filesize field
$.validator.addMethod('filesize', function(value, element, param) {
    // param = size (en bytes) 
    // element = element to validate (<input>)
    // value = value of the element (file name)
    return (element.files[0].size <= param*1024) 
});
$("#validate").validate({
	ignore: null,
	ignore: 'input[type="hidden"]',
	errorPlacement: function(error, element) {
		wrap = element.parent();
		wrap1 = wrap.parent();
		if (wrap1.hasClass('checkbox')) {
			error.insertAfter(wrap1);
		} else {
			if (element.attr('type')=='file') {
				error.insertAfter(element.next());
			} else {
				error.insertAfter(element);
			}
		}
	}, 
	errorClass: 'help-block',
	rules: {
		email: {
			required: true,
			email: true
		},
		select2: "required",
		password: {
			required: true,
			minlength: 5
		},
		confirm_password: {
			required: true,
			minlength: 5,
			equalTo: "#password"
		},
		textarea: {
			required: true,
			minlength: 10
		},
		maxLenght: {
			required: true,
  			maxlength: 10
		},
		rangelenght: {
	      required: true,
	      rangelength: [10, 20]
	    },
	    url: {
	      required: true,
	      url: true
	    },
	    range: {
	      required: true,
	      range: [5, 10]
	    },
	    minval: {
	      required: true,
	      min: 13
	    },
	    maxval: {
	      required: true,
	      max: 13
	    },
	    date: {
	      required: true,
	      date: true
	    },
	    number: {
	      required: true,
	      number: true
	    },
	    digits: {
	      required: true,
	      digits: true
	    },
	    ccard: {
	      required: true,
	      creditcard: true
	    },
	    file: { 
			required: true, 
			accept: "png|jpeg|jpg|gif", 
			filesize: 2048  
		},
		agree: "required"
	},
	messages: {
		password: {
			required: "Please provide a password",
			minlength: "Your password must be at least 5 characters long"
		},
		confirm_password: {
			required: "Please provide a password",
			minlength: "Your password must be at least 5 characters long",
			equalTo: "Please enter the same password as above"
		},
		agree: "Please accept our policy",
		textarea: "Write some info for you",
		file: "File must be JPG, GIF or PNG, less than 2MB"
	},
	highlight: function(element) {
		if ($(element).offsetParent().parent().hasClass('form-group')) {
			$(element).offsetParent().parent().removeClass('has-success').addClass('has-error');
		} else {
			if ($(element).attr('type')=='file') {
				$(element).parent().parent().removeClass('has-success').addClass('has-error');
			}
			$(element).offsetParent().parent().parent().parent().removeClass('has-success').addClass('has-error');
			
		}
    },
    unhighlight: function(element,errorClass) {
    	if ($(element).offsetParent().parent().hasClass('form-group')) {
    		$(element).offsetParent().parent().removeClass('has-error').addClass('has-success');
	    	$(element.form).find("label[for=" + element.id + "]").removeClass(errorClass);
    	} else if ($(element).offsetParent().parent().hasClass('checkbox')) {
    		$(element).offsetParent().parent().parent().parent().removeClass('has-error').addClass('has-success');
    		$(element.form).find("label[for=" + element.id + "]").removeClass(errorClass);
    	} else if ($(element).next().hasClass('bootstrap-filestyle')) {
    		$(element).parent().parent().removeClass('has-error').addClass('has-success');
    	}
    	else {
    		$(element).offsetParent().parent().parent().removeClass('has-error').addClass('has-success');
    	}
	}
});
 	
//------------- Sparklines -------------//
	$('#usage-sparkline').sparkline([35,46,24,56,68, 35,46,24,56,68], {
		width: '180px',
		height: '30px',
		lineColor: '#00ABA9',
		fillColor: false,
		spotColor: false,
		minSpotColor: false,
		maxSpotColor: false,
		lineWidth: 2
	});

	$('#cpu-sparkline').sparkline([22,78,43,32,55, 67,83,35,44,56], {
		width: '180px',
		height: '30px',
		lineColor: '#00ABA9',
		fillColor: false,
		spotColor: false,
		minSpotColor: false,
		maxSpotColor: false,
		lineWidth: 2
	});

	$('#ram-sparkline').sparkline([12,24,32,22,15, 17,8,23,17,14], {
		width: '180px',
		height: '30px',
		lineColor: '#00ABA9',
		fillColor: false,
		spotColor: false,
		minSpotColor: false,
		maxSpotColor: false,
		lineWidth: 2
	});

    //------------- Init pie charts -------------//
	initPieChart();

 	
});

//Setup easy pie charts
var initPieChart = function() {
	$(".pie-chart").easyPieChart({
        barColor: '#5a5e63',
        borderColor: '#5a5e63',
        trackColor: '#d9dde2',
        scaleColor: false,
        lineCap: 'butt',
        lineWidth: 10,
        size: 40,
        animate: 1500
    });
}