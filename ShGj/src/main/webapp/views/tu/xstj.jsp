<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ page import="com.gj.pojo.XSimilar" %>
<%@ page import="com.gj.pojo.BSimilar" %>
<%@ page isELIgnored="false" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>加载地图</title>
    <!--  <script src="<%= request.getContextPath()%>/assets/js/jquery-1.8.3.min.js"></script>
    --><script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>  
</head>
<body>

<div class="content-wrapper">
<div class="row">
                    <!-- Start .row -->
                    <!-- Start .page-header -->
                    <div class="col-lg-12 heading">
                        <h1 class="page-header"><i class="im-table2"></i> 相似推荐</h1>
                        <!-- Start .bredcrumb -->
                       
                        <!-- End .breadcrumb -->
                        <!-- Start .option-buttons -->
                        <div class="option-buttons">
                            
                        </div>
                        <!-- End .option-buttons -->
                    </div>
                    <!-- End .page-header -->
</div>
                <!-- End .row -->
            <div class="outlet">
            <div class="row">
                        <!-- Start .row -->
                        <div class="col-lg-12">
                            <!-- Start col-lg-12 -->
                            <div class="panel panel-default toggle">
                                <!-- Start .panel -->
                                <div class="panel-heading">
                                    <h3 class="panel-title">学生行为相似分析--条件筛选</h3>
                                </div>
                                <div class="panel-body">
                                    <form class="form-horizontal group-border" role="form">
                                        <div class="form-group">
                                            <label class="col-lg-2 col-md-2 col-sm-12 control-label">时间段</label>
                                            <div class="col-lg-10 col-md-10">
                                                <div class="row">
                                                    <div class="col-lg-2 col-md-2">
                                                        <select id="xhtimeSelect" class="form-control">
                                                            <option value="1">0:00-6：00</option>
                                                            <option value="2">6:00-12:00</option>
                                                            <option value="3">12:00-18:00</option>
                                                            <option value="4">18:00-24:00</option>
                                                        </select>
                                                        <span class="help-block">周期为一天</span>
                                                    </div>
                                                    <div class="col-lg-3 col-md-3">
                                                        <div class="input-group">
                                                             <input type="text" id="xhinput" class="form-control">
                                                    
                                                        </div>
                                                         <span class="help-block">中原工学院2017级用户</span>
                                                    </div>
                                                    <div class="col-lg-3 col-md-3">
                                                        <button id="getxhSimilar" class="btn btn-primary" type="button">获取</button>
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
            <div class="row">
                        <div class="col-lg-12">
                            <!-- col-lg-12 start here -->
                            <div class="panel panel-default plain toggle  ">
                                <!-- Start .panel -->
                                <div class="panel-heading white-bg">
                                    <h4 class="panel-title"><span id="xhshow"></span>用户行为的相似人员</h4>
                                </div>
                                <div class="panel-body">
                                    <table id="xhtable" class="table">
                                        <thead>
                                            <tr>
                                                <th class="per5">
                                                   #
                                                </th>
                                                <th class="per15">时间段</th>
                                                <th class="per25">学号</th>
                                                <th class="per15">班级</th>
                                                <th class="per15">性别</th>
                                                <th class="per15">相似度</th>
                                                
                                            </tr>
                                        </thead>
                                        <tbody id="tbody_xh">
                                           
                                        </tbody>
                                        
                                    </table>
                                </div>
                            </div>
                            <!-- End .panel -->
                        </div>
                        <!-- col-lg-12 end here -->
            </div>
                    

          </div>
          
</div>

<script>
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
	
	//学号推荐
	 $("#getxhSimilar").click(function () {
		 
		 var xh=$('#xhinput').val();//选中的值
		 var time=$('#xhtimeSelect option:selected') .val();//选中的值
		 location.href = "<%=request.getContextPath()%>/views/xs.jsp?xh="+xh+"&time_num="+time+""; 
	 });
	 var xh=getQueryVariable("xh");
	 var time=getQueryVariable("time_num");
	 $("#xhtimeSelect option[value='" + time + "']").attr("selected", true);
	 if(xh){
		 document.getElementById('xhinput').value=xh;
		 var url ="<%=request.getContextPath()%>/getSimilarbyxh";
	     var args = {"xh": xh,"time_num":time, "time": new Date()};
	     $.getJSON(url, args, function (data) {
	    	 for (var i = data.length-1; i >=0; i--) {
	    		 var id=i+1;
	  		     var time_str=data[i].time_num;
	             var key = data[i].xh;
	             var xb = data[i].xb;
	             var bj=data[i].bj;
	             var similar_num=data[i].similar;
	             
	            
	             var str="<tr>"+
	             "<td>"+
	             "   "+id+""+
	             "</td>"+
	             " <td>"+time_str+"</td>"+
	             " <td>"+key+"</td>"+
	             " <td>"+bj+"</td>"+
	             " <td>"+xb+"</td>"+
	             " <td>"+similar_num+"</td>"+
	             " </tr>";
	             $("#xhtable tbody").prepend(str);
	             
	  	   }
	    	
	    	 
	     });
	 }
	 
	
	 
});
</script>

</body>
</html>