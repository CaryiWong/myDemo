<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/res/common/taglib.jsp"%>

<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
Date date = new Date();
%>
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>小组列表</title>
  <%--<link rel="stylesheet" href="css/bootstrap.min.css"/>--%>
  <link rel="stylesheet" href="<%=basePath%>res/styles/bootstrap.css"/>
  <link rel="stylesheet" href="<%=basePath%>res/styles/public.css"/>
  <link rel="stylesheet" href="css/main.css"/>
</head>
<body>
<div style="margin:0 20px">
  <div class="page-header">
    <h3>小组列表  <a class="pull-right btn btn-primary" href="groupBuild.html">+ 创建小组</a>
      <!--<a class="pull-right btn btn-primary" style="margin-right:10px" href="topicBuild.html">+ 创建话题</a>-->
    </h3>
    <span class="divider"></span>
  </div>
  <table class="groupTable  table table-bordered table-striped member-table">
    <thead>
       <tr><th>小组名称</th><th>选项</th></tr>
    </thead>
    <tbody class="tableBody"></tbody>
  </table>
  <div class="text-center">
  <ul class="pagination">
  <li class="previous">
  <a href="" aria-label="Previous">
  <span aria-hidden="true">&laquo;</span>
  </a>
  </li>
  <li class='next'>
  <a href="" aria-label="Next">
  <span aria-hidden="true">&raquo;</span>
  </a>
  </li>
  </ul>
  </div>
</div>

  <script type="text/javascript" src="js/jquery.js"></script>
  <script type="text/javascript" src="<%=basePath%>res/scripts/bootstrap.js"></script>
  <script type="text/javascript" src="js/groupList.js"></script>

</body>
</html>
