//------------- panels.js -------------//
$(document).ready(function() {

	//get object with colros from plugin and store it.
	var objColors = $('body').data('sprFlat').getColors();
	var colours = {
		white: objColors.white,
		dark: objColors.dark,
		red : objColors.red,
		blue: objColors.blue,
		green : objColors.green,
		yellow: objColors.yellow,
		brown: objColors.brown,
		orange : objColors.orange,
		purple : objColors.purple,
		pink : objColors.pink,
		lime : objColors.lime,
		magenta: objColors.magenta,
		teal: objColors.teal,
		textcolor: '#5a5e63',
		gray: objColors.gray
	}

	//------------- Sparkline in widget header -------------//
	$('.sparkline-bar-positive').sparkline([5,12,18,15,22, 14,26,28,32,34], {
		type: 'bar',
		width: '100%',
		height: '18px',
		barColor: colours.green,
	});

	$('.sparkline-positive').sparkline([5,12,18,15,22, 14,26,28,32,34], {
		width: '55px',
		height: '20px',
		lineColor: colours.green,
		fillColor: false,
		spotColor: false,
		minSpotColor: false,
		maxSpotColor: false,
		lineWidth: 2
	});

	//------------- Switches -------------//
	$('input.switch').onoff();

	//------------- slim scroll -------------//
	//get the settings from plugin
	var scrollSettings = $('body').data('sprFlat').settings.customScroll;
	//init the slim scroll
	$('.scroll').slimScroll({
        position: "right",
        height: '100%',
        distance: '0',
        railVisible: false,
        size: scrollSettings.size,                    
        color: scrollSettings.color,                    
        railOpacity: scrollSettings.opacity,
        railColor: scrollSettings.railColor,
        height: '130px'
    });

    $('.scroll-horizontal').slimScrollHorizontal({
        size: scrollSettings.size,                    
        color: scrollSettings.color,                    
        railOpacity: scrollSettings.opacity,
        railColor: scrollSettings.railColor,
        width: '100%',
        positon: 'bottom',
        start: 'left',
        railVisible: true,
        //distance: "3px",
    });

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