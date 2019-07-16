<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ page import="com.gj.pojo.HeatOpint"%>
<%@ page isELIgnored="false" %>
<!doctype html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml"
      xmlns:th="http://www.thymeleaf.org">
<head>
    <title>校园WiFi分析系统</title>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <script src="<%= request.getContextPath()%>/assets/js/jquery-1.8.3.min.js"></script>
</head>
<body>
<div class="content-wrapper">
           <div class="outlet">
           <div class="row">
                        <!-- Start .row -->
                        <div class="col-lg-12">
                            <!-- Start col-lg-12 -->
                            <div class="panel panel-default panel-closed toggle panelClose showControls">
                                <!-- Start .panel -->
                                <div class="panel-heading">
                                    <h3 class="panel-title">条件筛选</h3>
                                </div>
                                <div class="panel-body">
                                    <form class="form-horizontal group-border" role="form">
                                        <div class="form-group">
                                            <label class="col-lg-2 col-md-2 col-sm-12 control-label">时间段</label>
                                            <div class="col-lg-10 col-md-10">
                                               <div class="row">
                                                    <div class="col-lg-6 col-md-6">
                                                        <select id="timeSelect" class="form-control">
                                                            <option value="1">0:00-6：00</option>
                                                            <option value="2">6:00-12:00</option>
                                                            <option value="3">12:00-18:00</option>
                                                            <option value="4">18:00-24:00</option>
                                                        </select>
                                                        <span class="help-block">周期为一天</span>
                                                    </div>
                                                    <!--  <div class="col-lg-3 col-md-3">
                                                        <div class="input-group">
                                                             <input type="text" id="knuminput" class="form-control">
                                                    
                                                        </div>
                                                         <span class="help-block">聚类中心个数</span>
                                                    </div>-->
                                                    <div class="col-lg-6 col-md-6">
                                                        <button id="getheatmap" class="btn btn-primary" type="button">获取</button>
                                                    </div>
                                                    
                                                   
                                                </div>
                                            </div>
                                        </div>
                                        <!-- End .form-group  -->
                                          
                                    </form>
                                </div>
                            </div>
                            <!-- End .panel -->
                        </div>
                        <!-- End col-lg-12 -->
                    </div>
                    <!-- End .row -->
           </div>
</div>
<div id="map" style="width: 100%;height: 700px;"></div>



<script type="text/javascript" src="http://webapi.amap.com/maps?v=1.3"></script>
<script type="text/javascript" src="http://cache.amap.com/lbs/static/addToolbar.js"></script>
<script src="http://gis.zut.edu.cn/api?v=2.1"></script>
<script type="text/javascript" src="<%= request.getContextPath()%>/headmap/v2/echarts/echarts.js"></script>
<script type="text/javascript" src="<%= request.getContextPath()%>/headmap/v2/heatmap.js"></script>
<script type="text/javascript" src="http://a.amap.com/jsapi_demos/static/resource/heatmapData.js"></script>
<script type="text/javascript">
    /*<![CDATA[*/
    LMap.APIURL = "http://gis.zut.edu.cn/";
    LMap.MAPSERVERURL = "http://gis.zut.edu.cn/geoserver/";
    var map = new LMap.Map2D("map", 1053);
    //经纬度坐标转web墨卡托投影坐标
    var proj = new LMap.Projection("EPSG:4326");
    var transform = function (coordinate) {
        return new LMap.Geometry.Point(coordinate[0], coordinate[1]).transform(proj, map.getProjectionObject());
    }
    //原始经纬度坐标需要转换成web墨卡托投影坐标
    var data1 = [];
    var coordinates= new Array();
    var heatmap;
    $(function(){
    	function getQueryVariable(variable)
    	{
    	       var query = window.location.search.substring(1);
    	       var vars = query.split("&");
    	       for (var i=0;i<vars.length;i++) {
    	               var pair = vars[i].split("=");
    	               if(pair[0] == variable){return pair[1];}
    	       }
    	       return(false);
    	}
   	 $("#getheatmap").click(function () {
   		 var time_num=$('#timeSelect option:selected') .val();//选中的值
   		 location.href = "<%=request.getContextPath()%>/views/kmap.jsp?time_num="+time_num+"";
		
   		
   	 });
   	    
     
   	    var time=getQueryVariable("time_num") ;
   	    if(time!=null){
   	    $("#timeSelect option[value='" + time + "']").attr("selected", true); 
   	    var url = "<%=request.getContextPath()%>/getkmap";
        var args = {"time_num": time, "time": new Date()};
           $.getJSON(url, args, function (data) {
        	   for (var n = 0; n <data.length ; n=n+1) {//
        		   var count=data[n].count;
        		   coordinates[n] = new Array(2);
                   coordinates[n][0] = data[n].lon;
                   coordinates[n][1] = data[n].lat;
                   var lonlat = transform(coordinates[n]);
                   
        	   for(var m=0;m<count;m++){
           		   data1.push({
                       name: n, lon: lonlat.x, lat: lonlat.y, count: 1
                   })
                   }//for
        	   }//for
           	   require.config({
           	        paths: {
           	            echarts: 'v2/echarts'
           	        }
           	    });
           	    heatmap = new LMap.Layer.EchartHeatmap("heatmap", map, {
           	        heatdata: data1,
           	        opacity: 0.6
           	    });
           	    map.addLayer(heatmap);
           	    
           
           });
         }
   	    
    });
    map.addLayer(heatmap);
    

</script>
</body>
</html>
