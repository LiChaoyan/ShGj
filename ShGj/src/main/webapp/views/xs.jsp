<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/fmt" prefix="fmt" %>
<%@ page isELIgnored="false" %>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>校园WiFi大数据分析系统</title>
        <!-- Mobile specific metas -->
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
        <!-- Force IE9 to render in normal mode -->
        <!--[if IE]><meta http-equiv="x-ua-compatible" content="IE=9" /><![endif]-->
        <meta name="author" content="SuggeElson" />
        <meta name="description" content=""
        />
        <meta name="keywords" content=""
        />
        <meta name="application-name" content="sprFlat admin template" />
        <!-- Import google fonts - Heading first/ text second -->
        <link rel='stylesheet' type='text/css' />
        <!--[if lt IE 9]>

<![endif]-->
        <!-- Css files -->
        <!-- Icons -->
        <link href="<%= request.getContextPath()%>/assets/css/icons.css" rel="stylesheet" />
        <!-- jQueryUI -->
        <link href="<%= request.getContextPath()%>/assets/css/sprflat-theme/jquery.ui.all.css" rel="stylesheet" />
        <!-- Bootstrap stylesheets (included template modifications) -->
        <link href="<%= request.getContextPath()%>/assets/css/bootstrap.css" rel="stylesheet" />
        <!-- Plugins stylesheets (all plugin custom css) -->
        <link href="<%= request.getContextPath()%>/assets/css/plugins.css" rel="stylesheet" />
        <!-- Main stylesheets (template main css file) -->
        <link href="<%= request.getContextPath()%>/assets/css/main.css" rel="stylesheet" />
        <!-- Custom stylesheets ( Put your own changes here ) -->
        <link href="<%= request.getContextPath()%>/assets/css/custom.css" rel="stylesheet" />
        <!-- Fav and touch icons -->
        <link rel="apple-touch-icon-precomposed" sizes="144x144" href="<%= request.getContextPath()%>/assets/img/ico/apple-touch-icon-144-precomposed.png">
        <link rel="apple-touch-icon-precomposed" sizes="114x114" href="<%= request.getContextPath()%>/assets/img/ico/apple-touch-icon-114-precomposed.png">
        <link rel="apple-touch-icon-precomposed" sizes="72x72" href="<%= request.getContextPath()%>/assets/img/ico/apple-touch-icon-72-precomposed.png">
        <link rel="apple-touch-icon-precomposed" href="<%= request.getContextPath()%>/assets/img/ico/apple-touch-icon-57-precomposed.png">
        <link rel="icon" href="<%= request.getContextPath()%>/assets/img/ico/favicon.ico" type="image/png">
        <!-- Windows8 touch icon ( http://www.buildmypinnedsite.com/ )-->
        <meta name="msapplication-TileColor" content="#3399cc" />
    </head>
    <body>
         <jsp:include page="/public/biaolist.jsp" flush="true"></jsp:include>
        <!-- Start #content -->
        <div id="content" style="height:600px">  
         <jsp:include page="/views/tu/xstj.jsp" flush="true"></jsp:include>
        </div>
        <!-- End #content -->
        <!-- Javascripts -->
        <!-- Load pace first -->
        <script src="<%= request.getContextPath()%>/assets/plugins/core/pace/pace.min.js"></script>
        <!-- Important javascript libs(put in all pages) -->
        <script src="<%= request.getContextPath()%>/assets/js/jquery-1.8.3.min.js"></script>
        <script>
        window.jQuery || document.write('<script src="<%= request.getContextPath()%>/assets/js/libs/jquery-2.1.1.min.js">\x3C/script>')
        </script>
        <script src="<%= request.getContextPath()%>/assets/js/jquery-ui.js"></script>
        <script>
        window.jQuery || document.write('<script src="<%= request.getContextPath()%>/assets/js/libs/jquery-ui-1.10.4.min.js">\x3C/script>')
        </script>
        <!--[if lt IE 9]>
  <script type="text/javascript" src="<%= request.getContextPath()%>/assets/js/libs/excanvas.min.js"></script>
  <script type="text/javascript" src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
  <script type="text/javascript" src="<%= request.getContextPath()%>/assets/js/libs/respond.min.js"></script>
<![endif]-->
        <!-- Bootstrap plugins -->
        <script src="<%= request.getContextPath()%>/assets/js/bootstrap/bootstrap.js"></script>
        <!-- Core plugins ( not remove ever) -->
        <!-- Handle responsive view functions -->
        <script src="<%= request.getContextPath()%>/assets/js/jRespond.min.js"></script>
        <!-- Custom scroll for sidebars,tables and etc. -->
        <script src="<%= request.getContextPath()%>/assets/plugins/core/slimscroll/jquery.slimscroll.min.js"></script>
        <script src="<%= request.getContextPath()%>/assets/plugins/core/slimscroll/jquery.slimscroll.horizontal.min.js"></script>
        <!-- Resize text area in most pages -->
        <script src="<%= request.getContextPath()%>/assets/plugins/forms/autosize/jquery.autosize.js"></script>
        <!-- Proivde quick search for many widgets -->
        <script src="<%= request.getContextPath()%>/assets/plugins/core/quicksearch/jquery.quicksearch.js"></script>
        <!-- Bootbox confirm dialog for reset postion on panels -->
        <script src="<%= request.getContextPath()%>/assets/plugins/ui/bootbox/bootbox.js"></script>
        <!-- Other plugins ( load only nessesary plugins for every page) -->
        <script src="<%= request.getContextPath()%>/assets/plugins//flot/jquery.flot.js"></script>
        <script src="<%= request.getContextPath()%>/assets/plugins/charts/flot/jquery.flot.pie.js"></script>
        <script src="<%= request.getContextPath()%>/assets/plugins/charts/flot/jquery.flot.resize.js"></script>
        <script src="<%= request.getContextPath()%>/assets/plugins/charts/flot/jquery.flot.time.js"></script>
        <script src="<%= request.getContextPath()%>/assets/plugins/charts/flot/jquery.flot.growraf.js"></script>
        <script src="<%= request.getContextPath()%>/assets/plugins/charts/flot/jquery.flot.categories.js"></script>
        <script src="<%= request.getContextPath()%>/assets/plugins/charts/flot/jquery.flot.stack.js"></script>
        <script src="<%= request.getContextPath()%>/assets/plugins/charts/flot/jquery.flot.tooltip.min.js"></script>
        <script src="<%= request.getContextPath()%>/assets/plugins/charts/flot/date.js"></script>
        <script src="<%= request.getContextPath()%>/assets/plugins/charts/sparklines/jquery.sparkline.js"></script>
        <script src="<%= request.getContextPath()%>/assets/plugins/charts/pie-chart/jquery.easy-pie-chart.js"></script>
        <script src="<%= request.getContextPath()%>/assets/plugins/forms/icheck/jquery.icheck.js"></script>
        <script src="<%= request.getContextPath()%>/assets/plugins/forms/tags/jquery.tagsinput.min.js"></script>
        <script src="<%= request.getContextPath()%>/assets/plugins/forms/tinymce/tinymce.min.js"></script>
        <script src="<%= request.getContextPath()%>/assets/plugins/misc/highlight/highlight.pack.js"></script>
        <script src="<%= request.getContextPath()%>/assets/plugins/misc/countTo/jquery.countTo.js"></script>
        <script src="<%= request.getContextPath()%>/assets/plugins/ui/weather/skyicons.js"></script>
        <script src="<%= request.getContextPath()%>/assets/plugins/ui/notify/jquery.gritter.js"></script>
        <script src="<%= request.getContextPath()%>/assets/plugins/ui/calendar/fullcalendar.js"></script>
        <script src="<%= request.getContextPath()%>/assets/js/jquery.sprFlat.js"></script>
        <script src="<%= request.getContextPath()%>/assets/js/app.js"></script>
        <script src="<%= request.getContextPath()%>/assets/js/pages/dashboard.js"></script>
    </body>
</html>