//------------- email.js -------------//
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

	//------------- Hilight table rows on checkbox click -------------// 
	function tableHighlight () {
	    var table = $('.table');
	    var chboxes = table.find('input.check');

	    chboxes.on('ifChecked ifUnchecked', function(event) {        
	        if (event.type == 'ifChecked') {
	            $(this).closest('tr').addClass('highlight');
	        } else {
	            $(this).closest('tr').removeClass('highlight');
	        }
	    });
	}

	tableHighlight();

	//------------- Simple email star click function -------------//
	var emailTable = $('.email-list table');
	var emailStar = emailTable.find('td.email-star>i');

	//setup the star in click
	emailStar.click(function() {
		if($(this).hasClass('im-star')) {
			$(this).removeClass('im-star s20').addClass('im-star3 s20');
			//make callback here

		} else {
			$(this).removeClass('im-star3 s20').addClass('im-star s20');
			//make callback here
		}
	});

	//--------------- Tinymce for send email ------------------//
	tinymce.init({
	    selector: "textarea.tinymce",
	    menubar : false,
	    plugins: [
	        "advlist autolink lists link image charmap print preview anchor",
	        "searchreplace visualblocks code fullscreen",
	        "insertdatetime media table contextmenu paste"
	    ],
	    toolbar: "bold italic strikethrough bullist numlist blockquote hr alignleft aligncenter alignright alignjustify link unlink code image media | fullscreen"
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