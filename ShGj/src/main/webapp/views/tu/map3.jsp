<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ page import="com.gj.pojo.Gj" %>
<%@ page isELIgnored="false" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>加载地图</title>
   <script src="<%= request.getContextPath()%>/assets/js/jquery-1.8.3.min.js"></script>
    <script src="http://gis.zut.edu.cn/api?v=2.1"></script>
    <script src="<%= request.getContextPath()%>/headmap/v2/echarts/echarts.js"></script>
    <script src="<%= request.getContextPath()%>/headmap/v2/markline.js"></script>
    
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
                                            <label class="col-lg-2 col-md-2 col-sm-12 control-label">轨迹起始地点</label>
                                            <div class="col-lg-10 col-md-10">
                                                <div class="row">
                                                    <div class="col-lg-6 col-md-6">
                                                        <select id="gjSelect" class="form-control">
                                                            <option value="1053001010">9号院系楼</option>
                                                            <option value="1053001011">11号院系楼</option>
                                                            <option value="1053001012">2号教学楼</option>
                                                            <option value="1053001013">3号教学楼</option>
                                                            <option value="1053001014">4号教学楼</option>
                                                            <option value="1053001015">8号院系楼</option>
                                                            <option value="1053001030">5号楼</option>
                                                            <option value="1053001031">6号楼</option>
                                                            
                                                            <option value="1053001032">7号楼</option>
                                                            <option value="1053001033">2号演播厅</option>
                                                            <option value="1053001118">2号组团楼</option>
                                                            <option value="105300115">图书馆</option>
                                                            
                                                            <option value="1053001220">南苑9号公寓</option>
                                                            <option value="1053001221">南苑1号学生公寓</option>
                                                            <option value="1053001222">南苑2号学生公寓</option>
                                                            <option value="1053001223">南苑3号学生公寓</option>
                                                            <option value="1053001224">南苑4号学生公寓</option>
                                                            <option value="1053001226">南苑6号学生公寓</option>
                                                            <option value="105300132">南苑餐厅</option>
                                                            <option value="1053002013">南苑7号公寓</option>
                                                            
                                                            
                                                           
                                                        </select>
                                                        <span class="help-block">中原工学院南区2017级数据</span>
                                                    </div>
                                                    <div class="col-lg-6 col-md-6">
                                                        <button id="getgj" class="btn btn-primary" type="button">查询</button>
                                                        <!-- <span class="help-block"></span> -->
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

<script>
require.config({
    paths: {
        echarts: 'headmap/v2/echarts'
    }
});
LMap.APIURL = "http://gis.zut.edu.cn/";
LMap.MAPSERVERURL = "http://gis.zut.edu.cn/geoserver/";
 //var map = new LMap.Map2D("map", 1053);
var map = new LMap.Map3D("map", 1059);
var data_start_end=[];
var data_opint=[];
var option = {
        color: ['#0000FF'],
        tooltip : {
            trigger: 'item',
            formatter: '{b}'
        },
        series : [
            {
                name: 'Top n',
                type: 'map',
                mapType: 'none',
                roam: false,//鼠标滚轮缩放
                data:[],
                geoCoord: {
					'图书馆':[113.680880573271,34.5833035203915],   // 图书馆
                    '南苑1号学生公寓':[113.680800573271,34.5821935203915], // 南苑1号学生公寓
					'南苑2号学生公寓':[113.680610573271,34.5821335203915], // 南苑2号学生公寓
					'南苑3号学生公寓':[113.680480573271,34.5821035203915], // 南苑3号学生公寓
					'南苑4号学生公寓':[113.680280573271,34.5820635203915], // 南苑4号学生公寓
					'南苑5号学生公寓':[113.680120573271,34.5820335203915], // 南苑5号学生公寓         
                    '南苑6号学生公寓':[113.680020573271,34.5819505203915],  // 南苑6号学生公寓
					'南苑7号公寓':[113.682030573271,34.5823895203915],  // 南苑7号学生公寓
					'南苑8号学生公寓':[113.682130573271,34.5824295203915], // 南苑8号学生公寓
					'南苑9号公寓':[113.682230573271,34.5824895203915],  // 南苑9号公寓
					'南苑餐厅':[113.681200573271,34.58239935203915], // 南苑餐厅
					'商务中心':[113.680900573271,34.58230035203915], // 商务中心
                    '体育馆': [113.681400573271,34.5837935203915], //体育馆
					'2号演播厅':[113.681350573271,34.5825003520391],  // 2号演播厅
					'2号组团楼':[113.681530573271,34.5825003520391], // 2号组团楼
					'5号楼':[113.681760573271,34.5825333520391], // 5号楼
					'6号楼':[113.681660573271,34.5824603520391], // 6号楼
					'7号楼':[113.681500573271,34.5824003520391], // 7号楼					
					'2号教学楼':[113.681750573271,34.5830335203915], // 2号教学楼
					'3号组团楼':[113.682350573271,34.5829035203915], // 3号组团楼
                    '3号教学楼':[113.681280573271,34.5827935203915], // 3号教学楼
					'4号教学楼':[113.680800573271,34.5826895203915], // 4号教学楼
					'8号院系楼':[113.680400573271,34.5826905203915], // 8号院系楼
					'9号院系楼':[113.680200573271,34.5826905203915], // 9号院系楼
					'11号院系楼':[113.680000573271,34.5826905203915], // 11号院系楼
					'北苑5号学生公寓':[113.682819573271,34.5839535203915], // 北苑5号学生公寓
		
                },
                markLine : {
                    smooth:true,//true:平滑曲线；false：直线
                    effect : {
                        show: true,
                        scaleSize: 1,
                        period: 20,
                        color: '#fff',
                        shadowBlur: 10
                    },
                    itemStyle : {
                        normal: {
                            borderWidth:1.5,
                            lineStyle: {
                                type: 'solid',//可选'solid' | 'dotted' | 'dashed'
                                shadowBlur: 5
                            }
                        }
                    },
                data : data_start_end,
                },
                markPoint : {
                    symbol:'emptyCircle',
                    symbolSize : function (v){
                        return 10 + v/10
                    },
                    effect : {
                        show: true,
                        shadowBlur : 0
                    },
                    itemStyle:{
                        normal:{
                            label:{show:false}
                        },
                        emphasis: {
                            label:{position:'top'}
                        }
                    },
                    data : data_opint,
                }
            }
        ]
    };
var echartlayer;

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
	 $("#getgj").click(function () {
		 var bid_start=$('#gjSelect option:selected') .val();//选中的值
		 location.href = "<%=request.getContextPath()%>?bid_start="+bid_start+"";
		 // data_start_end.splice(0,data_start_end.length);
		 //data_opint.splice(0,data_opint.length);
		      	
	 });
	 var bid=getQueryVariable("bid_start") ;
	 if(bid!=null){
	 $("#gjSelect option[value='" + bid + "']").attr("selected", true); 
	 var url = "<%=request.getContextPath()%>/getgjbybid_start";
     var args = {"bid_start": bid, "time": new Date()};
        $.getJSON(url, args, function (data) {
        	  for (var i = 0; i < data.length; i++) {
        		     
        		var bname_start = data[i].bname_start;
                var bname_end = data[i].bname_end;
                var count=data[i].count;
                
                data_start_end.push([{
                	name:bname_start
                },{
                    name: bname_end,
                    value: count
                }]);
                data_opint.push({
                    name: bname_end,
                    value: count
                });
        		}
        	   require([
                    'echarts',
                    'echarts/chart/map'
                ], function (echart) {
                	  echartlayer = new LMap.Layer.EchartMarkLine("echartlayer",map,echart,{
                        option:option
                }); 
                 map.addLayer(echartlayer);
                 echartlayer.updateLayer();
            });
        }); 
	 }
});


</script>

</body>
</html>