//------------- charts.js -------------//
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

	//generate random number for charts
	randNum = function(){
		return (Math.floor( Math.random()* (1+150-50) ) ) + 80;
	}

	//------------- LIne charts with dots -------------//
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
	        colors: [colours.white],
	        legend: { 
	        	position: "ne", 
	        	margin: [0,-25], 
	        	noColumns: 0,
	        	labelBoxBorderColor: null,
	        	labelFormatter: function(label, series) {
				    return '<div style="padding: 10px; font-size:20px;font-weight:bold;">'+ label + ': $'+ total +'</div>';
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

		var plot = $.plot($("#line-chart-dots"),[{
    			label: "Earnings", 
    			data: d1
    		}], options
    	);
		
	});

	//------------- LIne charts only -------------//
	$(function() {

		// line chart
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
			    color: colours.textcolor ,
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
	            	show:false
	            }
	        },
	        colors: [colours.blue],
	        legend: { 
	        	position: "ne", 
	        	margin: [0,-25], 
	        	noColumns: 0,
	        	labelBoxBorderColor: null,
	        	labelFormatter: function(label, series) {
				    return '<div style="padding: 10px; font-size:20px;font-weight:bold;color:'+colours.textcolor+'">'+ label + ': $'+ total +'</div>';
				},
				backgroundColor: colours.white,
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

		var plot = $.plot($("#line-chart"),[{
    			label: "Earnings", 
    			data: d1
    		}], options
    	);
		
	});

	//------------- LIne charts filled -------------//
	$(function() {

		// line chart
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
			    aboveData: false,
			    color: colours.textcolor ,
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
            		fill: true,
            		lineWidth: 2.5
	            },
	            points: {
	            	show:false
	            }
	        },
	        colors: [colours.blue],
	        legend: { 
	        	position: "ne", 
	        	margin: [0,-25], 
	        	noColumns: 0,
	        	labelBoxBorderColor: null,
	        	labelFormatter: function(label, series) {
				    return '<div style="padding: 10px; font-size:20px;font-weight:bold;color:'+colours.textcolor+'">'+ label + ': $'+ total +'</div>';
				},
				backgroundColor: colours.white,
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

		var plot = $.plot($("#line-chart-filled"),[{
    			label: "Earnings", 
    			data: d1
    		}], options
    	);
		
	});

	//------------- Line charts style 2 -------------//
	$(function() {

		//visiotrs
		var d1 = [["MON", randNum()], ["TUE", randNum()], ["WED", randNum()], ["THU", randNum()], ["FRI", randNum()], ["SAT", randNum()], ["SUN", randNum()]];
		
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
	        colors: [colours.dark, colours.red],
	        legend: { 
	        	show:false
	    	},
	        shadowSize:0,
	        tooltip: true, //activate tooltip
			tooltipOpts: {
				content: "%y.0 Views",
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

		var plot = $.plot($("#line-chart-dots2"),[{
    			label: "Visitors", 
    			data: d1,
    		}], options
    	);

	});

	//------------- Bars chart -------------//
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
				barWidth: 0.5,
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
		 
		$.plot($("#bars-chart"), [data, d1], options);
	});

	//------------- Ordered bars chart -------------//
	$(function () {
		//some data
		var d1 = [];
	    for (var i = 0; i <= 10; i += 1)
	        d1.push([i, parseInt(Math.random() * 30)]);
	 
	    var d2 = [];
	    for (var i = 0; i <= 10; i += 1)
	        d2.push([i, parseInt(Math.random() * 30)]);
	 
	    var d3 = [];
	    for (var i = 0; i <= 10; i += 1)
	        d3.push([i, parseInt(Math.random() * 30)]);
	 
	    var ds = new Array();
	 
	    ds.push({
	     	label: "Data One",
	        data:d1,
	        bars: {order: 1}
	    });
	    ds.push({
	    	label: "Data Two",
	        data:d2,
	        bars: {order: 2}
	    });
	    ds.push({
	    	label: "Data Three",
	        data:d3,
	        bars: {order: 3}
	    });

	    var stack = 0, bars = false, lines = false, steps = false;

		var options = {
				bars: {
					show:true,
					barWidth: 0.2,
					fill:1
				},
				grid: {
					show: true,
				    aboveData: false,
				    color: colours.textcolor ,
				    labelMargin: 5,
				    axisMargin: 0, 
				    borderWidth: 0,
				    borderColor:null,
				    minBorderMargin: 5 ,
				    clickable: true, 
				    hoverable: true,
				    autoHighlight: false,
				    mouseActiveRadius: 20
				},
		        series: {
		        	stack: stack
		        },
		        legend: { position: "ne" },
		        colors: [colours.blue, colours.red, colours.green],
		        tooltip: true, //activate tooltip
				tooltipOpts: {
					content: "%s : %y.0",
					shifts: {
						x: -30,
						y: -50
					}
				}
		};

		$.plot($("#ordered-bars-chart"), ds, options);
	});

	//------------- Pie chart -------------//
	$(function () {
		var options = {
			series: {
				pie: { 
					show: true,
					innerRadius: 0,
					radius: 'auto',
					highlight: {
						opacity: 0.1
					},
					stroke: {
						width: 2,
					}
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
	    $.plot($("#pie-chart"), data, options);

	});

	//------------- Donut chart -------------//
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
	    $.plot($("#donut-chart"), data, options);

	});

	//------------- Autoupdate chart -------------//
	$(function () {
		// we use an inline data source in the example, usually data would
	    // be fetched from a server
	    var data = [], totalPoints = 300;
	    function getRandomData() {
	        if (data.length > 0)
	            data = data.slice(1);

	        // do a random walk
	        while (data.length < totalPoints) {
	            var prev = data.length > 0 ? data[data.length - 1] : 50;
	            var y = prev + Math.random() * 10 - 5;
	            if (y < 0)
	                y = 0;
	            if (y > 100)
	                y = 100;
	            data.push(y);
	        }

	        // zip the generated y values with the x values
	        var res = [];
	        for (var i = 0; i < data.length; ++i)
	            res.push([i, data[i]])
	        return res;
	    }

	    // Update interval
	    var updateInterval = 200;

	    // setup plot
	    var options = {
	        series: { 
	        	shadowSize: 0, // drawing is faster without shadows
	        	lines: {
            		show: true,
            		fill: true,
            		lineWidth: 3.5,
            		steps: false
	            }
	        },
	        grid: {
				show: true,
			    aboveData: true,
			    color: colours.textcolor ,
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
			colors: [colours.blue],
	        tooltip: true, //activate tooltip
			tooltipOpts: {
				content: "Value is : %y.0",
				shifts: {
					x: -30,
					y: -50
				}
			},	
	        yaxis: { min: 0, max: 100 },
	        xaxis: { show: true}
	    };
	    var plot = $.plot($("#autoupdate-chart"), [ getRandomData() ], options);

	    function update() {
	        plot.setData([ getRandomData() ]);
	        // since the axes don't change, we don't need to call plot.setupGrid()
	        plot.draw();
	        
	        setTimeout(update, updateInterval);
	    }

	    update();
	});

	//------------- Sparklines -------------//
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

	$('.sparkline-negative').sparkline([17,3,9,12,8,4,9,5,2,5], {
		width: '55px',
		height: '20px',
		lineColor: colours.red,
		fillColor: false,
		spotColor: false,
		minSpotColor: false,
		maxSpotColor: false,
		lineWidth: 2
	});

	$('.sparkline-bar-positive').sparkline([5,12,18,15,22, 14,26,28,32,34], {
		type: 'bar',
		width: '100%',
		height: '18px',
		barColor: colours.green,
	});

	$('.sparkline-bar-negative').sparkline([17,3,9,12,8,4,9,5,2,5], {
		type: 'bar',
		width: '100%',
		height: '18px',
		barColor: colours.red,
	});

	//------------- Sparklines in sidebar -------------//
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
	initPieChartPage(20,100,1500, colours);

 	
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

//Setup easy pie charts in page
var initPieChartPage = function(lineWidth, size, animateTime, colours) {

	$(".easy-pie-chart").easyPieChart({
        barColor: colours.dark,
        borderColor: colours.dark,
        trackColor: colours.gray,
        scaleColor: false,
        lineCap: 'butt',
        lineWidth: lineWidth,
        size: size,
        animate: animateTime
    });
    $(".easy-pie-chart-red").easyPieChart({
        barColor: colours.red,
        borderColor: colours.red,
        trackColor: '#fbccbf',
        scaleColor: false,
        lineCap: 'butt',
        lineWidth: lineWidth,
        size: size,
        animate: animateTime
    });
    $(".easy-pie-chart-green").easyPieChart({
        barColor: colours.green,
        borderColor: colours.green,
        trackColor: '#b1f8b1',
        scaleColor: false,
        lineCap: 'butt',
        lineWidth: lineWidth,
        size: size,
        animate: animateTime
    });
    $(".easy-pie-chart-blue").easyPieChart({
        barColor: colours.blue,
        borderColor: colours.blue,
        trackColor: '#d2e4fb',
        scaleColor: false,
        lineCap: 'butt',
        lineWidth: lineWidth,
        size: size,
        animate: animateTime
    });
    $(".easy-pie-chart-teal").easyPieChart({
        barColor: colours.teal,
        borderColor: colours.teal,
        trackColor: '#c3e5e5',
        scaleColor: false,
        lineCap: 'butt',
        lineWidth: lineWidth,
        size: size,
        animate: animateTime
    });
    $(".easy-pie-chart-purple").easyPieChart({
        barColor: colours.purple,
        borderColor: colours.purple,
        trackColor: '#dec1f5',
        scaleColor: false,
        lineCap: 'butt',
        lineWidth: lineWidth,
        size: size,
        animate: animateTime
    });

}