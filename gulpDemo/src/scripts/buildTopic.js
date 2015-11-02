$(function(){


  var $submit = $('.submit'),
      $teamList = $('.team-list'),
      groupinfoId = '',
      locationOriginalURL = 'http://test.yi-gather.com:1717';
  //$('button').on('click',function(event){
  //  event.preventDefault();
  //});
  $submit.on('click',function(event){
    event.preventDefault();
    submitForm();
  });
function submitForm (){
      if($('#topicname').val() !== '' && groupinfoId !== ''){
        $.ajax(
          locationOriginalURL + '/v20/topic/createtopic', {
            dataType: 'json',
            type: 'POST',
            data: {
              type: 'web',
              topicname: $('#topicname').val(),
              user: $('#user_id').val(),
              topicexplain: $('#topicexplain').val(),
              groupinfo: groupinfoId,
              banners: $('#banners').val()
            }
          }).success(function (data) {
            if (data.cord === 0) {
              alert('创建成功！');
            } else {
              alert('创建失败！ ' + data.msg);
            }
          }).fail(function () {
            alert('创建失败！');
          });
      }else {
        groupinfoId === ''? alert ('请选择所属小组！') : alert ('请输入话题名称！');
      }
}

  $.ajax(
    locationOriginalURL + '/v20/group/findgroups', {
      dataType: 'json',
      type: 'POST',
      data: {
        type : 'web',
        page : 0,
        size : 20
      }
    }).success(function (data) {
      if (data.cord === 0) {
        for(var i=0; i < data.data.length; i++){
          $teamList.append("<span class='teamBtn btn btn-default' id=" + data.data[i]['id'] + ">" + data.data[i]['groupname']  + "</span>");
        }
        var  $teamBtn = $('.teamBtn');
        $teamBtn.on('click',function(){
          $teamBtn.removeClass('on');
          var $this = $(this);
          $this.addClass('on');
          groupinfoId = $this.attr('id');
          //alert(groupinfoId);
        });
      } else {
        alert('获取小组列表失败' + data.msg);
      }
    }).fail(function () {
      alert('获取小组列表失败');
    });


});


