//------------- widgets.js -------------//
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

	//------------- Weather icons -------------//
	var today = new Skycons({
		"color": colours.white,
		"resizeClear": true
	});
	today.set("weather-now", "rain");
	today.play();
   	//set forecast icons too
   	var forecast = new Skycons({
		"color": colours.dark,
		"resizeClear": true
	});
   	forecast.set("forecast-now", "rain");
   	forecast.set("forecast-day1", "partly-cloudy-day");
   	forecast.set("forecast-day2", "clear-day");
   	forecast.set("forecast-day3", "wind");
   	forecast.play();

   	//------------- Autosize text area in chat widget -------------//
   	$('.elastic').autosize();

   	//------------- Add sortable function to todo -------------//
	$(function() {
	    $( "#today, #tomorrow" ).sortable({
	    	connectWith: ".todo-list",
	    	placeholder: 'placeholder',  
        	forcePlaceholderSize: true, 
	    }).disableSelection();
	});

   	//------------- Recent user widget scroll bar -------------//
   	//get the settings from plugin
	var scrollSettings = $('body').data('sprFlat').settings.customScroll;
	//init the slim scroll
	$('.scroll').slimScroll({
        position: "right",
        distance: '5px',
        railVisible: false,
        size: scrollSettings.size,                    
        color: scrollSettings.color,                    
        railOpacity: scrollSettings.opacity,
        railColor: scrollSettings.railColor,
        height: '317px'
    });

	//------------- Instagram widget carousel -------------//
	$('#instagram-widget').carousel({
		interval:   4000
	});

	//------------- Earnings chart -------------//
	//generate random number for charts
	randNum = function(){
		return (Math.floor( Math.random()* (1+150-50) ) ) + 80;
	}
	$(function() {

		//first line chart
		var d1 = [];
		//here we generate randomdata data for chart
		for (var i = 0; i < 8; i++) {
			d1.push([new Date(Date.today().add(i).days()).getTime(),randNum()]);
		}

		var chartMinDate = d1[0][0]; //first day
    	var chartMaxDate = d1[7][0];//last day

    	var tickSize = [1, "day"];
    	var tformat = "%d/%m/%y";

    	var total = 0;
    	//calculate total earnings for this period
    	for (var i = 0; i < 8; i++) {
			total = d1[i][1] + total;
		}

    	var options = {
    		grid: {
				show: true,
			    aboveData: true,
			    color: colours.white ,
			    labelMargin: 20,
			    axisMargin: 0, 
			    borderWidth: 0,
			    borderColor:null,
			    minBorderMargin: 5 ,
			    clickable: true, 
			    hoverable: true,
			    autoHighlight: true,
			    mouseActiveRadius: 100,
			},
			series: {
				grow: {
		            active: true,
		     		duration: 1500
		        },
	            lines: {
            		show: true,
            		fill: false,
            		lineWidth: 2.5
	            },
	            points: {
	            	show:true,
	            	radius: 4,
	            	lineWidth: 2.5,
	            	fill: true,
	            	fillColor: colours.blue
	            }
	        },
	        colors: ['#fcfcfc'],
	        legend: { 
	        	position: "ne", 
	        	margin: [0,-25], 
	        	noColumns: 0,
	        	labelBoxBorderColor: null,
	        	labelFormatter: function(label, series) {
				    return '<div style="padding: 10px; font-size:20px;font-weight:bold;">'+ 'Total: $'+ total +'</div>';
				},
				backgroundColor: colours.blue,
    			backgroundOpacity: 0.5,
    			hideSquare: true //hide square color helper 
	    	},
	        shadowSize:0,
	        tooltip: true, //activate tooltip
			tooltipOpts: {
				content: "$%y.0",
				xDateFormat: "%d/%m",
				shifts: {
					x: -30,
					y: -50
				},
				theme: 'dark',
				defaultTheme: false
			},
			yaxis: { 
				min: 0
			},
			xaxis: { 
	        	mode: "time",
	        	minTickSize: tickSize,
	        	timeformat: tformat,
	        	min: chartMinDate,
	        	max: chartMaxDate,
	        	tickLength: 0,
	            
	        }
    	}

		var plot = $.plot($("#stats-earnings"),[{
    			label: "Earnings", 
    			data: d1,
    		}], options
    	);

	});

	//second bars chart
    $(function () {	
    	
    	var data = [ ["JAN", 1500], ["FEB", 1345], ["MAR", 1800], ["APR", 1670], ["MAY", 1780], ["JUN", 1500], ["JUL", 1350], ["AUG", 1700], ["SEP", 1890], ["OCT", 2000], ["NOV", 1950], ["DEC", 2000] ];
    	
    	//Replicate the existing bar data to reproduce bar fill effect
    	var arr= [];
    	for (var i = 0; i <= data.length -1; i++) {
    		arr.push(data[i][1]);
    	};
    	var largest = Math.max.apply(Math, arr) + 50;
    	d1 = [];
    	for (var i = 0; i <= data.length -1; i++) {
    		sum = largest - data[i][1];
    		d1.push([data[i][0],sum]);
    	};

    	var options = {
    		series : {
				stack: true
			},
			bars: {
				show:true,
				barWidth: 0.6,
				fill:1,
				align: "center"
			},
			grid: {
				show:true,
				hoverable: true,
				borderWidth: 0,
			    borderColor:null
			},
	        colors: [colours.green, colours.gray],
	        tooltip: true, //activate tooltip
			tooltipOpts: {
				content: "$%y.0",
				shifts: {
					x: -30,
					y: -50
				}
			},
			yaxis: {
				tickLength: 0,
				show:false
			},
			xaxis: { 
	        	mode: "categories",
				tickLength: 0
	        }
		};
		 
		$.plot($("#stats-earnings-bars"), [data, d1], options);
	});

	//second donut chart
	$(function () {
		var options = {
			series: {
				pie: { 
					show: true,
					innerRadius: 0.55,
					highlight: {
						opacity: 0.1
					},
					radius: 1,
					stroke: {
						width: 10
					},
					startAngle: 2.15
				}					
			},
			legend:{
				show:true,
				labelFormatter: function(label, series) {
				    return '<div style="font-weight:bold;font-size:13px;">'+ label +'</div>'
				},
				labelBoxBorderColor: null,
				margin: 50,
				width: 20,
				padding: 1
			},
			grid: {
	            hoverable: true,
	            clickable: true,
	        },
	        tooltip: true, //activate tooltip
			tooltipOpts: {
				content: "%s : %y.1"+"%",
				shifts: {
					x: -30,
					y: -50
				},
				theme: 'dark',
				defaultTheme: false
			}
		};
		var data = [
		    { label: "Coding",  data: 68, color: colours.red},
		    { label: "Design",  data: 20, color: colours.green},
		    { label: "SEO",  data: 12, color: colours.blue}
		];
	    $.plot($("#stats-category-earnings"), data, options);

	});

	//------------- Pageview chart -------------//
	$(function() {

		//visiotrs
		var d1 = [["MON", randNum()], ["TUE", randNum()], ["WED", randNum()], ["THU", randNum()], ["FRI", randNum()], ["SAT", randNum()], ["SUN", randNum()]];
		var d2 = [["MON", randNum()], ["TUE", randNum()], ["WED", randNum()], ["THU", randNum()], ["FRI", randNum()], ["SAT", randNum()], ["SUN", randNum()]];
		
    	var options = {
    		grid: {
				show: true,
			    labelMargin: 20,
			    axisMargin: 40, 
			    borderWidth: 0,
			    borderColor:null,
			    minBorderMargin: 20,
			    clickable: true, 
			    hoverable: true,
			    autoHighlight: true,
			    mouseActiveRadius: 100
			},
			series: {
				grow: {
		            active: true,
		     		duration: 1000
		        },
	            lines: {
            		show: true,
            		fill: false,
            		lineWidth: 2.5
	            },
	            points: {
	            	show:true,
	            	radius: 5,
	            	lineWidth: 3.0,
	            	fill: true,
	            	fillColor: colours.red,
	            	strokeColor: colours.white 
	            }
	        },
	        colors: [colours.dark, colours.blue],
	        legend: { 
	        	show:true,
	        	position: "ne", 
	        	margin: [0,-25], 
	        	noColumns: 0,
	        	labelBoxBorderColor: null,
	        	labelFormatter: function(label, series) {
				    return '&nbsp;'+label+'&nbsp;&nbsp;';
				},
				width: 40,
				height: 1
	    	},
	        shadowSize:0,
	        tooltip: true, //activate tooltip
			tooltipOpts: {
				content: "%y.0",
				shifts: {
					x: -45,
					y: -50
				},
				defaultTheme: false
			},
			yaxis: { 
				show:false
			},
			xaxis: { 
	        	mode: "categories",
	        	tickLength: 0
	        }
    	}

		var plot = $.plot($("#stats-pageviews"),[
			{
    			label: "Visitors", 
    			data: d1
    		},
    		{
    			label: "Return visitors", 
    			data: d2
    		}
    		], options
    	);

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