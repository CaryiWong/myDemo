$(function(){
  var $submit = $('.submit'),
      locationOriginalURL = 'http://test.yi-gather.com:1717';
  $submit.on('click',function(event){
    event.preventDefault();
    submitForm();
  });
function submitForm (){
      if($('#groupname').val() !== ''){
        $.ajax(
          locationOriginalURL + '/v20/group/creategroupinfo', {
            dataType: 'json',
            type: 'POST',
            data: {
              type: 'web',
              groupname: $('#groupname').val(),
              groupcover: $('#groupcover').val(),
              groupexplain: $('#groupexplain').val(),
              grouplabel: $('#grouplabel').val(),
              user: $('#user').val()
            }
          }).success(function (data) {
            if (data.cord === 0) {
              alert('创建成功！');
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


