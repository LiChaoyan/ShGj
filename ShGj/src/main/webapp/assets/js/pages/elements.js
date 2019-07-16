//------------- elements.js -------------//
$(document).ready(function() {

	//declare chart colours ( be sure are same with custom-variables.less or main.css file)
	var colours = {
		white: '#ffffff',
		dark: '#79859b',
		red : '#f68484',
		blue: '#75b9e6',
		green : '#71d398',
		yellow: '#ffcc66',
		brown: '#f78db8',
		orange : '#f4b162',
		purple : '#af91e1',
		pink : '#f78db8',
		lime : '#a8db43',
		magenta: '#eb45a7',
		teal: '#97d3c5',
		textcolor: '#5a5e63',
		gray: '#f3f5f6'
	}


	//------------- Tab drop -------------//
	function tabdrop() {
		$('.tabdrop').tabdrop({
			text: '<i class="fa-align-justify"></i>'
		}).on("click", function(){
		    $(this).tabdrop('layout');
		});
	}
	$(window).on("load", function(){
	   tabdrop();
	});
	$(window).resize(tabdrop);

	//------------- Sliders -------------//
	//Basic slider
	$('#basic-slider').slider({
		min: 1,
		max: 100,
		step: 1,
		value: 50,
		formater: function(value) {
			return value;
		}
	});
	$("#basic-slider").on('slide', function(slideEvt) {
		$("#slider1val").text(slideEvt.value);
	});

	//custom step slider
	$('#step-slider').slider({
		min: 1,
		max: 100,
		step: 25,
		value: 25,
		formater: function(value) {
			return value;
		}
	});
	$("#step-slider").on('slide', function(slideEvt) {
		$("#slider2val").text(slideEvt.value);
	});

	//range slider
	$('#range-slider').slider({
		min: 1,
		max: 1000,
		step: 1,
		value: [100,500],
		formater: function(value) {
			return value;
		}
	});
	$("#range-slider").on('slide', function(slideEvt) {
		$("#slider3val").text(slideEvt.value);
	});

	//vertical slider
	$('#vertical-slider').slider({
		orientation: 'vertical',
		reversed: true,
		selection: 'after',
		min: 1,
		max: 10,
		step: 1,
		value: 5,
		formater: function(value) {
			return value;
		}
	});
	$("#vertical-slider").on('slide', function(slideEvt) {
		$("#slider4val").text(slideEvt.value);
	});

	//------------- Circfull progress bar -------------//
	//dark color
	$('.progress-circular-dark').circliful({ backgroundColor: colours.gray,  foregroundColor: colours.dark	});
	//red color
	$('.progress-circular-red').circliful({ backgroundColor: colours.gray,  foregroundColor: colours.red	});
	//blue color
	$('.progress-circular-blue').circliful({ backgroundColor: colours.gray,  foregroundColor: colours.blue	});
	//green color
	$('.progress-circular-green').circliful({ backgroundColor: colours.gray,  foregroundColor: colours.green });
	//orange color
	$('.progress-circular-orange').circliful({ backgroundColor: colours.gray,  foregroundColor: colours.orange });
	//yellow color
	$('.progress-circular-yellow').circliful({ backgroundColor: colours.gray,  foregroundColor: colours.yellow });
	//pink color
	$('.progress-circular-pink').circliful({ backgroundColor: colours.gray,  foregroundColor: colours.pink	});
	//lime color
	$('.progress-circular-lime').circliful({ backgroundColor: colours.gray,  foregroundColor: colours.lime	});
	//magenta color
	$('.progress-circular-magenta').circliful({ backgroundColor: colours.gray,  foregroundColor: colours.magenta });
	//purple color
	$('.progress-circular-purple').circliful({ backgroundColor: colours.gray,  foregroundColor: colours.purple });

	//------------- Modals -------------//
	//Alert modal
	$('#alert-modal').click(function() {
		bootbox.dialog({
			message: "This is custom alert",
			title: "Alert!!!",
			buttons: {
				success: {
				  label: "Ok i got it",
				  className: "btn-primary btn-alt",
				  callback: function() {
				  	//callback result
				  }
				}
			}
		});
	});

	//Confirm modal
	$('#confirm-modal').click(function() {
		bootbox.confirm({
			message: "Confirm results:",
			title: "Are you sure ?",
			callback: function(result) {
		  		//callback result
		  		console.log(result);
		    }
		});
	});

	//Prompt modal
	$('#prompt-modal').click(function() {
		bootbox.prompt({
			title: "What is your name ?",
			callback: function(result) {
		  		//callback result
		  		console.log(result);
		    }
		});
	});

	//------------- Carousel -------------//
	$('.carousel').carousel();

	//------------- Sparklines -------------//
	$('#usage-sparkline').sparkline([35,46,24,56,68, 35,46,24,56,68], {
		width: '180px',
		height: '30px',
		lineColor: colours.dark,
		fillColor: false,
		spotColor: false,
		minSpotColor: false,
		maxSpotColor: false,
		lineWidth: 2
	});

	$('#cpu-sparkline').sparkline([22,78,43,32,55, 67,83,35,44,56], {
		width: '180px',
		height: '30px',
		lineColor: colours.dark,
		fillColor: false,
		spotColor: false,
		minSpotColor: false,
		maxSpotColor: false,
		lineWidth: 2
	});

	$('#ram-sparkline').sparkline([12,24,32,22,15, 17,8,23,17,14], {
		width: '180px',
		height: '30px',
		lineColor: colours.dark,
		fillColor: false,
		spotColor: false,
		minSpotColor: false,
		maxSpotColor: false,
		lineWidth: 2
	});

    //------------- Init pie charts -------------//
    //pass the variables to pie chart init function
    //first is line width, size for pie, animated time , and colours object for theming.
	initPieChart(10,40, 1500, colours);

 	
});

//Setup easy pie charts in sidebar
var initPieChart = function(lineWidth, size, animateTime, colours) {
	$(".pie-chart").easyPieChart({
        barColor: colours.dark,
        borderColor: colours.dark,
        trackColor: '#d9dde2',
        scaleColor: false,
        lineCap: 'butt',
        lineWidth: lineWidth,
        size: size,
        animate: animateTime
    });
}