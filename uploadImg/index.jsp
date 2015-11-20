<%@ page language="java" import="java.util.*" pageEncoding="utf-8"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
%>

<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
<head>
<meta charset="UTF-8">
<title>通用图片上传页面</title>
    <link rel="stylesheet" href="<%=basePath%>res/styles/bootstrap.css"/>
<style>
.showPic {
	margin: 10px 0;
}

.showPic img {
	max-width: 300px;
}
</style>
</head>
<body>
	<div class="container">
		<div class="page-header">
			<h3>上传图片</h3>
			<span class="divider"></span>
		</div>
		<form>
			<input type="file" class="uploadImg" /> <a
				class="upload btn btn-primary" style="margin-top: 10px">提交</a>
		</form>
		<div class="showPic">
			<h4>图片预览：</h4>
		</div>
	</div>
	<script type="text/javascript">
	var root="<%=basePath%>";
	</script>
	<script src="<%=basePath%>res/scripts/util/scripts/jquery.js"></script>
	<script src="<%=basePath%>res/scripts/util/scripts//main.js"></script>
</body>
</html>

