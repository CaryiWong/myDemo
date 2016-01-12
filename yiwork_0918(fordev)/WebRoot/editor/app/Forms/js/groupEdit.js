$(function(){
  var $submit = $('.submit'),
      oStorage = window.sessionStorage,
      userid = oStorage.getItem('userid'),
      root = oStorage.getItem('root');
  var groupinfoId = oStorage.getItem('groupinfoId');
  $submit.on('click',function(event){
    event.preventDefault();
    submitForm();
  });

function submitForm (){
      if($('#groupname').val() !== '' ){
        $.ajax(
          root + 'v20/group/creategroupinfo', {
            dataType: 'json',
            type: 'POST',
            data: {
              type: 'web',
              groupname: $('#groupname').val(),
              groupcover: $('#groupcover').val(),
              groupexplain: $('#groupexplain').val(),
              grouplabel: $('#grouplabel').val(),
              "id": groupinfoId,
              "user.id": userid
            }
          }).success(function (data) {
            if (data.cord === 0) {
              alert('修改小组信息成功！');
              location.href = root + "editor/app/Forms/groupList.jsp";
            } else {
              alert('提交失败！ ' + data.msg);
            }
          }).fail(function () {
            alert('提交失败！');
          });
      }else{
        alert ('请输入小组名称！');
      }
}

  $.ajax(
    root + 'v20/group/findgroupinfo', {
      dataType: 'json',
      type: 'POST',
      data: {
        type : 'web',
        groupid : groupinfoId
      }
    }).success(function (data) {
      if (data.cord === 0) {
        $('#groupname').val(data.data['groupname']);
        $('#groupcover').val(data.data['groupcover'] + '_320X320');
        $('#groupexplain').val(data.data['groupexplain']);
        $('#grouplabel').val(data.data['grouplabel']);
        $('.coverImg').attr('src',$('#groupcover').val()).hide();
      } else {
        alert('获取小组信息失败' + data.msg);
      }
    }).fail(function () {
      alert('获取小组信息失败');
    });

     $('.cover').mouseover(function(){
       $('.coverImg').show();
     }).mouseleave(function(){
    $('.coverImg').hide();
  })

});


