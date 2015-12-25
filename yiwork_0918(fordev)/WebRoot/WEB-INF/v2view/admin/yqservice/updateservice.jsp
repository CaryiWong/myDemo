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
    <title>修改服务</title>
    <link rel="stylesheet" href="<%=basePath%>res/styles/bootstrap.css"/>
    <link rel="stylesheet" href="<%=basePath%>res/styles/public.css"/>
</head>

<body>
      <div class="row row-flow">
        <div class="form-group">
            <a href='<%=basePath%>v20/admin/yqservice/serverlist.html'  class="btn btn-default btn-back">返回列表</a>
        </div>
                <form class="form-horizontal col-xs-12" role="form" action="<%=basePath%>v20/admin/yqservice/saveyqservice"
				method="post" >


                    <div class="form-group">
                        <label class="col-xs-2 control-label">服务类型：</label>
                        <div class="col-xs-5">
                            <select class="form-control input-sm selectType" name="servicetype">
                            	<option value="individual" <c:if test="${server.servicetype eq 'individual'}">selected</c:if>>个人服务</option>
                            	<option value="team" <c:if test="${server.servicetype eq 'team'}">selected</c:if>>团队服务</option>
                            	<option value="company"<c:if test="${server.servicetype eq 'company'}">selected</c:if>>企业服务</option>
                            </select>
                        </div>
                    </div>
                   <%--
                     <div class="form-group">
                        <label class="col-xs-2 control-label">服务名：</label>
                        <div class="col-xs-5">
                            <input type="text" id="name" name="name" value="${server.name}" class="form-control">
                        </div>
                    </div> --%>

                     <div class="form-group">
                        <label class="col-xs-2 control-label">姓名/团队名/企业名：</label>
                        <div class="col-xs-5">
                            <input type="text" id="servicesupplier" name="servicesupplier" value="${server.servicesupplier}" class="form-control">
                        </div>
                    </div>

                     <div class="form-group">
                        <label class="col-xs-2 control-label">愿意分享或可以向会员提供的资源、技能和服务：</label>
                        <div class="col-xs-5">
                            <input type="text" id="name" name="name" value="${server.name}" class="form-control">
                        </div>
                    </div>
                    <input type="hidden" name="contexturl"  id="contexturl" value="<%=basePath %>">
                     <div class="form-group">
                        <label class="col-xs-2 control-label">手机号码：</label>
                        <div class="col-xs-5">
                            <input type="text" id="email" name="tel" value="${server.tel}" class="form-control">
                        </div>
                    </div>

                    <div class="form-group">
                        <label class="col-xs-2 control-label wechat-label">微信/QQ/邮箱：</label>
                        <div class="col-xs-5">
                            <input type="text" id="wechat" name="wechat" value="${server.wechat}" class="form-control">
                        </div>
                    </div>

                    <div class="form-group companyEmail">
                    <label class="col-xs-2 control-label">企业服务email邮箱：</label>
                    <div class="col-xs-5">
                    <input type="text" id="email" name="email" value="${server.email}" class="form-control">
                    </div>
                    </div>

                     <div class="form-group">
                        <label class="col-xs-2 control-label">服务地区：</label>
                        <div class="col-xs-5">
                            <input type="text" id="email" name="city" value="${server.city}" class="form-control">
                        </div>
                    </div>
                   <div class="form-group">
                        <label class="col-xs-2 control-label">资源/技能/服务详情：</label>
                        <div class="col-xs-5">
                           <textarea rows="4" class="form-control valid-input"name="context" data-valid-rule="required">${server.context}</textarea>
                        </div>
                    </div>


                    <div class="form-group">
                        <label class="col-xs-2 control-label">封面图：</label>
                        <div class="col-xs-5">
                        <input type="file" name="img" id="titleimg" onchange="sendFile()">
                         <input type="hidden" name="titleimg" id="titleimgv" value="${server.titleimg}">
                         <input type="hidden" name="id" value="${server.id}">
                         <img id="showimg" name="showimg" src="${server.titleimg}" width="400" height="300">
                        </div>
                    </div>

                    <c:if test="${tips ne null }">
				<tr align="center">
					<td colspan="6"><font color="red">${tips}</font></td>
				</tr>
			</c:if>
	               <button type="submit" class="col-xs-2 col-xs-offset-1 btn btn-primary">保存修改</button>

                </form>
    </div>
   <script type="text/javascript">
	var root="<%=basePath%>";
	</script>
    <script type="text/javascript" src="<%=basePath%>res/scripts/jquery-1.9.1.min.js"></script>
    <script type="text/javascript" src="<%=basePath%>res/js/ajaxfileupload.js"></script>
    <script type="text/javascript">
  $(function(){
  var $companyEmail = $('.companyEmail');
  var $type = $('.selectType');
  $companyEmail.hide();
  if($type.val() === 'company'){
  $companyEmail.show();
  $('.wechat-label').html('微信/QQ：');
  }
  $type.change(function(){
  if($type.val() === 'company'){
  $companyEmail.show();
  $('.wechat-label').html('微信/QQ：');
  }else{
  $companyEmail.hide();
  $('.wechat-label').html('微信/QQ/邮箱：');
  }
  })
  });
    function sendFile()
    {
      	$.ajaxFileUpload(
         {
        	url:root+"v20/upload/uploadimg",//用于文件上传的服务器端请求的Action地址
         	type:"post",//请求方法
         	secureuri:false,//一般设置为false
         	fileElementId:'titleimg',//文件id属性
         	dataType:"JSON",//返回值类型 一般设置为json,一定要大写,否则可能会出现一些bug
         	success:function(json)  {
      	 	 	   json=JSON.parse(json);  //手动转json
      	 	 	   if(json.cord==0){
      	 	 		   $("#titleimgv").val(root+"v20/download/img?path="+json.data);
      	 	 		   $("#showimg").attr("src",root+"v20/download/img?path="+json.data);
      	 	 	   }
    		 }
         });
    }

    </script>
</body>
</html>
