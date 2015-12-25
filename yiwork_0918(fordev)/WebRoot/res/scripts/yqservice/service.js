$(document).ready(function(e) {
	//$("a[name='setTuiJian']").click(function(){recommend(this.id,this)})
	//$("select[name='acttype']").change(function(){changeSpecialType()});
	//changeSpecialType();
	//$(".spaceChecked").change(function(){changeSpaceView(this)})
	//$(".vipChecked").change(function(){changeUserVier(this)})
});
 
var rootjs= root+"v20/";

/**
 * 审核服务
 * @param id
 * @param onsale
 * @param o
 */
function setonsale(id,onsale,o){
	var actid = id;
	var submitdata = {
		type:1,
		id:actid,
		onsale:onsale
	};
	$.ajax({
     type: "post",
     url: rootjs+"admin/yqservice/setonsale",
     data: submitdata,
     complete:function(data){
     	var result = JSON.parse(data.responseText);
     	alert(result.msg);
     	window.location.reload();
     	if(result.result=="s"){
     		if(onsale==1){
     			$(o).html("通过审核");
     			$(o).attr("onclick","setonsale('"+id+"',0,this);");
     		}else if(onsale==0){
     			$(o).html("取消审核");
     			$(o).attr("onclick","setonsale('"+id+"',1,this);");
     		}
     	}
     }
    });
}

