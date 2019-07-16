//------------- maps-google.js -------------//
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

	//------------- Google maps -------------//
	//basic map
	var bmap = new GMaps({
        el: '#gmap',
        lat: -12.043333,
        lng: -77.028333,
        zoomControl : true,
        zoomControlOpt: {
            style : 'SMALL',
            position: 'TOP_LEFT'
        },
        panControl : false,
        streetViewControl : false,
        mapTypeControl: false,
        overviewMapControl: false
    });

    //geolocation
    var gmap = new GMaps({
        el: '#gmap-geolocation',
        lat: -12.043333,
        lng: -77.028333
    });

    GMaps.geolocate({
        success: function(position){
          gmap.setCenter(position.coords.latitude, position.coords.longitude);
        },
        error: function(error){
            $.gritter.add({
				title: 'Error !!!',
				text: 'Geolocation failed: '+error.message,
				close_icon: 'en-cross',
				icon: 'ec-location',
				class_name: 'error-notice'
			});	
        },
        not_supported: function(){
        	$.gritter.add({
				title: 'Error !!!',
				text: 'Your browser do not support geolocation',
				close_icon: 'en-cross',
				icon: 'ec-location',
				class_name: 'error-notice'
			});	
        },
        always: function(){
        	$.gritter.add({
				title: 'Done !!!',
				text: 'Your location is detected',
				close_icon: 'en-cross',
				icon: 'ec-location',
				class_name: 'success-notice'
			});		
        }
    });

    //routes
    var rmap = new GMaps({
        el: '#gmap-routes',
        lat: -12.043333,
        lng: -77.028333
    });
    rmap.drawRoute({
        origin: [-12.044012922866312, -77.02470665341184],
        destination: [-12.090814532191756, -77.02271108990476],
        travelMode: 'driving',
        strokeColor: colours.red,
        strokeOpacity: 0.6,
        strokeWeight: 10
    });

    //street panorama
    panorama = GMaps.createPanorama({
		el: '#gmap-street-panorama',
		lat : 42.3455,
		lng : -71.0983
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