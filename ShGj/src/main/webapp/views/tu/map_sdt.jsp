<%@ page language="java" contentType="text/html; charset=UTF-8"
         pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ page import="com.gj.pojo.HeatOpint"%>
<%@ page isELIgnored="false" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>图标</title>
    <script src="<%= request.getContextPath()%>/assets/js/jquery-1.8.3.min.js"></script>
    <script src="http://gis.zut.edu.cn/api?v=2.1"></script>
</head>
<body>

<div class="content-wrapper">
           <div class="outlet">
           <div class="row">
                        <!-- Start .row -->
                        <div class="col-lg-12">
                            <!-- Start col-lg-12 -->
                            <div class="panel panel-default panel-closed toggle  panelClose showControls">
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
                                                    <div class="col-lg-2 col-md-2">
                                                        <select id="timeSelect" class="form-control">
                                                            <option value="1">0:00-6:00</option>
                                                            <option value="2">6:00-12:00</option>
                                                            <option value="3">12:00-18:00</option>
                                                            <option value="4">18:00-24:00</option>
                                                        </select>
                                                        <span class="help-block">周期为一天</span>
                                                    </div>
                                                    
                                                    <div class="col-lg-3 col-md-3">
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
<div id="map" style="width: 80%;height: 700px;"></div>
<input type="button" value="设置中心点" name="设置中心点" onclick="setCenter([113.682129,34.586153])">
<script>
    LMap.APIURL = "http://gis.zut.edu.cn/";
    LMap.MAPSERVERURL = "http://gis.zut.edu.cn/geoserver/";

    var map = new LMap.Map2D("map", 1053);
    /**
     * 定义矢量图层和图层默认样式
     */
    var markerLayer = new LMap.Layer.Vector("marker",{
        styleMap:new LMap.StyleMap({
            "default":new LMap.Style({
                cursor:'pointer',
                fillColor: "#fff000",
                fillOpacity: 0.4,
                strokeColor: "#fff000",
                strokeOpacity: 1,
                strokeWidth: 1,
                pointRadius: 6,
                title:'${title}'
            })
        })
    });
    /**
     * 设置中心点
    */
    var setCenter = function(coordinate){
        map.setCenter(coordinate);
    }
    /** 
    * 设置地图中心点和级数    * @param coordinate 经纬度 * @param zoom 级数 */
    map.setCenterAndZoom(113.68275171521535, 34.586569985103544, 2);

    /*备注：随机添加 100 个点。 
    */
   
    $(function() { 
        
        $("#getheatmap").click(function () {
        	var time_num=$('#timeSelect option:selected') .val();//选中的值
      		var url = "<%=request.getContextPath()%>/getbiao";
      		
                var args = {"time_num": time_num, "time": new Date()};
                $.getJSON(url, args, function (data) {
                	 for (var i = 0; i < data.length; i++) {
                            var lon = data[i].lon;
                            var lat = data[i].lat;
                            var uid = data[i].XH;
                            var markerFeature = new LMap.Feature.Vector(
                                     new LMap.Geometry.Point( lon, lat).transform(proj, map.getProjectionObject()), 
                                      {
                                          gid:i,
                                          title:'标注点' + uid
                                      }
                                  );
                                  markerLayer.addFeatures(markerFeature);
                        }
                    });
           });

        });

    map.addLayer(markerLayer);
</script>

</body>
</html>