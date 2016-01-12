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
  <title>话题详情</title>
    <link rel="stylesheet" href="<%=basePath%>res/styles/bootstrap.css"/>
    <link rel="stylesheet" href="<%=basePath%>res/styles/public.css"/>
  <link rel="stylesheet" href="css/main.css"/>
</head>
<body>
<div  style="margin:0 20px">
  <div class="page-header">
    <h3><a class="pull-right btn btn-default" onclick="javascript:location.href = 'topicList.jsp'">< 返回话题列表</a></h3>
    <span class="divider"></span>
  </div>
  <table class="detailTable table table-bordered table-striped member-table">
    <thead><tr><th>名称</th><th>详情</th></tr></thead>
    <tbody class="tableBody"></tbody>
  </table>
</div>

<script type="text/javascript" src="js/jquery.js"></script>
<script type="text/javascript" src="js/topicDetail.js"></script>

</body>
</html>
