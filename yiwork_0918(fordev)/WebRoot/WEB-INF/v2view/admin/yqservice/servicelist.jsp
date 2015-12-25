<%@ page language="java" import="java.util.*" pageEncoding="UTF-8"%>
<%@include file="/res/common/taglib.jsp"%>

<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";
Date date = new Date();
String webBasePath=basePath+"v20/";
%>
<!doctype html>
<html>
<head>
    <meta charset="utf-8">
    <title>服务列表</title>
    <link rel="stylesheet" href="<%=basePath%>res/styles/bootstrap.css"/>
    <link rel="stylesheet" href="<%=basePath%>res/styles/public.css"/>
</head>

<body>
<input type="hidden" id="kcm" value="<%=basePath%>">
       <div class="row row-flow">
            <div class="col-xs-12 member-list">
                <div id="search-condition" class="panel panel-primary search">
             	<form id="mainForm" name="mainForm" action="<%=basePath %>v20/admin/yqservice/serverlist" method="post">
                   <a class="panel-heading" data-toggle="collapse" data-parent="#search-condition" href="#collapseSearch">
                        	查询条件
                        <i class="pull-right glyphicon glyphicon-list"></i>
                    </a>
                    <div class="panel-body collapse in" id="collapseSearch">
                    	 <div id="checkBoxLables" class="search-checkboxGroup  form-inline">
                   		 </div>
                    </div>
                </div>

                <table class="table table-bordered table-striped member-table">
                    <thead>
                    <tr>
                    	<th>序号</th>
                    	<th>服务名</th>
                    	<th>图片</th>
                        <th>姓名/团队名/企业名</th>
                        <th>服务类型</th>
                        <th>城市</th>
                        <th>手机</th>
                        
                        <td>服务简介</td>
                        <th>创建时间</th>
                        <th>是否审核</th>
                        <th>手动审核</th>
                    </tr>
                    </thead>
                    <tbody>
                     <c:if test="${page.totalPage le 0 }">
						<tr align="center">
							<td colspan="10"><span>无记录</span></td>
						</tr>
					</c:if>
					<c:if test="${page.totalPage gt 0 }">
							<c:forEach items="${page.result }" var="server" varStatus="vs">
								<tr>
											<td >${(page.currentPage-1)*page.pageSize+vs.index+1}</td>
											<td ><a href="<%=basePath %>v20/admin/yqservice/getservice?serverid=${server.id}">${server.name}</a></td>
											<td ><img style="width:40px;height: 30px" src="${server.titleimg}_160X160"/></td>
											<td >${server.servicesupplier}</td>
											<td >
												<c:if test="${server.servicetype eq 'individual'}">个人</c:if>
												<c:if test="${server.servicetype eq 'team'}">团队</c:if>
												<c:if test="${server.servicetype eq 'company'}"><font style="color: red">企业</font></c:if>
											</td>
											<td >${server.city}</td>
											<td >${server.tel}</td>
											<td title="${server.context}">${fn:substring(server.context,0,10)}</td>
											<td><fmt:formatDate value="${server.createtime}" pattern="yyyy-MM-dd HH:mm:ss"/></td>
											<td>
												<c:if test="${server.ischeck eq 0 }">未审核</c:if>
												<c:if test="${server.ischeck eq 1 }">审核通过</c:if>
											</td>
											<td>
												<c:if test="${server.ischeck eq 1 }"><a class="btn-link btn-sm" href="javascript:void(0);" onclick="setonsale('${server.id}',0,this);">取消审核</a></c:if>
												<c:if test="${server.ischeck eq 0 }"><a class="btn-link btn-sm" href="javascript:void(0);" onclick="setonsale('${server.id}',1,this);">通过审核</a></c:if>
											</td>						
										</tr>
						   </c:forEach>
					</c:if>
                    
                    </tbody>
                </table>
                <div class="text-center">
                	 <ul class="pagination">
                     <%@ include file="/res/common/pages.jsp"%>
                    </ul>
                </div>
         </form>
            
        </div>
   <script type="text/javascript">
	var root="<%=basePath%>";
	</script>
    <script type="text/javascript" src="<%=basePath%>res/scripts/jquery-1.9.1.min.js"></script>
    <script type="text/javascript" src="<%=basePath%>res/js/My97DatePicker/WdatePicker.js"></script>
    <script type="text/javascript" src="<%=basePath%>res/scripts/utilkcm/util.js"></script>
    <script type="text/javascript" src="<%=basePath%>res/scripts/bootstrap.js"></script>
    <script type="text/javascript" src="<%=basePath%>res/scripts/public.js"></script>
    <script type="text/javascript" src="<%=basePath%>res/scripts/yqservice/service.js"></script>
    <script type="text/javascript" src="<%=basePath%>res/js/page.js"></script>
</body>
</html>
