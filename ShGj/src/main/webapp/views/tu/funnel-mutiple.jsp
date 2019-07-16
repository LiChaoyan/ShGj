<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ page import="com.gj.pojo.Model" %>
<%@ page isELIgnored="false" %>
<!DOCTYPE html>
<html style="height: 100%">
   <head>
       <meta charset="utf-8">
   </head>
   <body style="height: 100%; margin: 0">
       <div id="container" style="height: 100%"></div>
       <script type="text/javascript" src="http://echarts.baidu.com/gallery/vendors/echarts/echarts.min.js"></script>
       <script type="text/javascript" src="http://echarts.baidu.com/gallery/vendors/echarts-gl/echarts-gl.min.js"></script>
       <script type="text/javascript" src="http://echarts.baidu.com/gallery/vendors/echarts-stat/ecStat.min.js"></script>
       <script type="text/javascript" src="http://echarts.baidu.com/gallery/vendors/echarts/extension/dataTool.min.js"></script>
       <script type="text/javascript" src="http://echarts.baidu.com/gallery/vendors/echarts/map/js/china.js"></script>
       <script type="text/javascript" src="http://echarts.baidu.com/gallery/vendors/echarts/map/js/world.js"></script>
       <script type="text/javascript" src="https://api.map.baidu.com/api?v=2.0&ak=xfhhaTThl11qYVrqLZii6w8qE5ggnhrY&__ec_v__=20190126"></script>
       <script type="text/javascript" src="http://echarts.baidu.com/gallery/vendors/echarts/extension/bmap.min.js"></script>
       <script type="text/javascript" src="http://echarts.baidu.com/gallery/vendors/simplex.js"></script>
       <script type="text/javascript">
var dom = document.getElementById("container");
var myChart = echarts.init(dom);
var app = {};
option = null;

var yearCount = 8;
var categoryCount = 20;

var xAxisData = [];
var customData = [];
var legendData = [];
var dataList = [];

legendData.push('trend');
var encodeY = [];
for (var i = 0; i < yearCount; i++) {
    legendData.push((1 + i) + '层');
    dataList.push([]);
    encodeY.push(1 + i);
}

for (var i = 0; i < categoryCount; i++) {
    var val = Math.random() * 1000;
    xAxisData.push('category' + i);
    var customVal = [i];
    customData.push(customVal);

    var data = dataList[0];
    for (var j = 0; j < dataList.length; j++) {
        var value = j === 0
            ? echarts.number.round(val, 2)
            : echarts.number.round(Math.max(0, dataList[j - 1][i] + (Math.random() - 0.5) * 200), 2);
        dataList[j].push(value);
        customVal.push(value);
    }
}

function renderItem(params, api) {
    var xValue = api.value(0);
    var currentSeriesIndices = api.currentSeriesIndices();
    var barLayout = api.barLayout({
        barGap: '30%', barCategoryGap: '20%', count: currentSeriesIndices.length - 1
    });

    var points = [];
    for (var i = 0; i < currentSeriesIndices.length; i++) {
        var seriesIndex = currentSeriesIndices[i];
        if (seriesIndex !== params.seriesIndex) {
            var point = api.coord([xValue, api.value(seriesIndex)]);
            point[0] += barLayout[i - 1].offsetCenter;
            point[1] -= 20;
            points.push(point);
        }
    }
    var style = api.style({
        stroke: api.visual('color'),
        fill: null
    });

    return {
        type: 'polyline',
        shape: {
            points: points
        },
        style: style
    };
}

option = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: legendData
    },
    dataZoom: [{
        type: 'slider',
        start: 50,
        end: 70
    }, {
        type: 'inside',
        start: 50,
        end: 70
    }],
    xAxis: {
        data: xAxisData
    },
    yAxis: {},
    series: [{
        type: 'custom',
        name: 'trend',
        renderItem: renderItem,
        itemStyle: {
            normal: {
                borderWidth: 2
            }
        },
        encode: {
            x: 0,
            y: encodeY
        },
        data: customData,
        z: 100
    }].concat(echarts.util.map(dataList, function (data, index) {
        return {
            type: 'bar',
            animation: false,
            name: legendData[index + 1],
            itemStyle: {
                normal: {
                    opacity: 0.5
                }
            },
            data: data
        };
    }))
};;
if (option && typeof option === "object") {
    myChart.setOption(option, true);
}
       </script>
   </body>
</html>