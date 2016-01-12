$(function(){
  var $submit = $('.submit'),
    oStorage = window.sessionStorage,
    root = oStorage.getItem('root'),
    userid = oStorage.getItem('userid'),
    vipuserid = oStorage.getItem('vipuserid');
  $submit.on('click',function(event){
    event.preventDefault();
    submitForm();
  });
function submitForm (){
      if($('#groupname').val() !== ''){
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
              "user.id": userid,
              isdel : 0
            }
          }).success(function (data) {
            if (data.cord === 0) {
              alert('创建成功！');
              $('form')[0].reset();
              location.href = root + "editor/app/Forms/groupList.jsp";
            } else {
              alert('创建失败！' + data.msg);
            }
          }).fail(function () {
            alert('创建失败！');
          });
      }else{
        alert ('请输入小组名称！');
      }
}
});


