$(document).ready(function() {

//------------- Check all checkboxes -------------//
$('.table').checkAll({
	masterCheckbox: '.check-all',
	otherCheckboxes: '.check'
})
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