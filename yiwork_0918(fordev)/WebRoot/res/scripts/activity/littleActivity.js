$(document).ready(function(e) {
	//$("a[name='setTuiJian']").click(function(){recommend(this.id,this)})
	//$("select[name='acttype']").change(function(){changeSpecialType()});
	//changeSpecialType();
	//$(".spaceChecked").change(function(){changeSpaceView(this)})
	//$(".vipChecked").change(function(){changeUserVier(this)})
});

var rootjs= root+"v20/";
/**
 * 保存活动
 * @param obj
 * @returns {Boolean}
 */
function validateformActivity(obj){
	var address= $("input[name='address']").val(); //地址
	var summary= $("textarea[name='summary']").val(); //简介
	var open= $("input[name='open']").val(); //开始时间
	var title= $("input[name='title']").val(); //标题

	if(address=="" && address!=null)
	{
		alert("地点不能为空")
		return false;
	}
	if(summary=="" && summary!=null)
	{
		alert("简介不能为空")
		return false;
	}
	if(open==""  && open!=null)
	{
		alert("开启时间不能为空")
		return false;
	}
	if(title==""  && title!=null)
	{
		alert("标题不能为空")
		return false;
	}

	return true;
}



/**
 * 审核小活动
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
     url: rootjs+"admin/littleactivity/setonsale",
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



function delActivity(id){
  if(confirm('确认删除？')){
    $.ajax(rootjs + "group/delgathering",{
      dataType: 'json',
      type: 'POST',
      data: {
        type: 'web',
        id:id
      }
    }).success(function (respond) {
      if (respond.cord === 0) {
        alert('删除成功！');
        location.reload();
      }else{
        alert("删除失败！" + respond.msg)
      }
    }).fail(function () {
      alert("删除失败！")
    })
  }

}
