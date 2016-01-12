<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/res/common/taglib.jsp"%>

<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>小活动报名列表</title>
    <link rel="stylesheet" href="<%=basePath%>res/styles/bootstrap.css"/>
    <link rel="stylesheet" href="<%=basePath%>res/styles/public.css"/>
</head>

<body>
<div class="row row-flow">
            <div class="form-group col-xs-2">
                <button class="btn col-xs-12 btn-default btn-back">返回</button>
            </div>
            <div class="col-xs-12">
                <%-- <div id="search-condition" class="panel panel-primary search">
                <form id="mainForm" name="mainForm" action="<%=basePath %>v20/admin/activity/gathering_signlist" method="post">
                    <a class="panel-heading" data-toggle="collapse" data-parent="#search-condition" href="#collapseSearch">
                        查询条件
                        <i class="pull-right glyphicon glyphicon-list"></i>
                    </a>
                    <div class="panel-body collapse in" id="collapseSearch">
                        <div class="search-otherGroup form-inline col-xs-12">
                            <div class="form-group">
                            	<input type="hidden" value="${activityid}" name="activityid" id="activityid">
                            </div>
                            <div class="form-group">
                                    <input type="text" name="keyword" value="${keyword }" class="form-control input-sm" placeholder="关键字">
                            </div>
                            <button type="submit" class="btn btn-default btn-primary">查询</button>
                            <a href="<%=basePath %>v20/admin/activity/exportExcel?actid=${activityid}">导出EXCEL</a>
                        </div>
                    </div>
                </div> --%>
                <table class="table table-bordered table-striped member-table">
                    <thead>
                    <tr>
                        <th>姓名</th>
                        <th>昵称</th>
                        <th>电话</th>
                        <th>邮箱</th>
                        <th>性别</th>
                        <th>是否会员</th>
                        <th>会员号</th>
                    </tr>
                    </thead>
                    <tbody>
                    <c:forEach items="${users }" var="user" >
                    <tr>
                    <td>${user.realname } </td>
                    <td>${user.nickname }</td>
                    <td>${user.telnum }</td>
                    <td>${user.email }</td>
                    <td>
                     <c:choose>
                    	<c:when test="${user.sex eq 0 }"> 男 </c:when>
                    	<c:when test="${user.sex eq 1 }"> 女 </c:when>
                    	<c:otherwise> 保密 </c:otherwise>
                    </c:choose>
                    </td>
                    <td>
                    <c:choose>
                    	<c:when test="${user.root lt 3 }"> 是 </c:when>
                    	<c:otherwise> 否 </c:otherwise>
                    </c:choose>
                    </td>
                    <td>${user.unum }</td>
                    </tr>
                    </c:forEach>

                    </tbody>
                </table>
                <input type="hidden" value="${pagenum}" id="pagenum">  <!-- 当前页  -->
                <input type="hidden" value="${pagecount}" id="pagecount"> <!-- 总页数  -->
                <input type="hidden" value="${total}" id="total">  <!-- 总条数  -->
                <input type="hidden" value="${pagesum}" id="pagesum">  <!-- 每页条数 -->
                <div class="text-center">
                    <ul class="pagination" style="vertical-align: middle;">
                        <li class="previous"><a href="" aria-label="Previous"><span aria-hidden="true">&laquo;</span></a></li>
                        <li class='next'><a href="" aria-label="Next"><span aria-hidden="true">&raquo;</span></a></li>
                    </ul>
                    <p style="display:inline-block;margin-left:10px;" class='pageTotal'></p>
                </div>
            </div>
     <!--   modelMap.put("gathering", gathering);小活动
			modelMap.put("pagenum", page+1);当前页
			modelMap.put("users",users);用户列表
			modelMap.put("pagecount", list.getTotalPages());总页数
			modelMap.put("pagesum", list.getNumberOfElements());每页条数
			modelMap.put("total", list.getTotalElements());总条数
	 -->
</div>

   <script type="text/javascript">
	var root="<%=basePath%>";
	</script>
    <script type="text/javascript" src="<%=basePath%>res/scripts/jquery-1.9.1.min.js"></script>
    <script type="text/javascript" src="<%=basePath%>res/js/My97DatePicker/WdatePicker.js"></script>
    <script type="text/javascript" src="<%=basePath%>res/scripts/utilkcm/util.js"></script>
    <script type="text/javascript" src="<%=basePath%>res/scripts/activity/activity.js"></script>
    <script type="text/javascript" src="<%=basePath%>res/scripts/bootstrap.js"></script>
    <script type="text/javascript" src="<%=basePath%>res/scripts/public.js"></script>
    <script type="text/javascript" src="<%=basePath%>res/scripts/activity/signlist.js"></script>
    <%--<script type="text/javascript" src="<%=basePath%>res/js/page.js"></script>--%>
</body>
</html>
