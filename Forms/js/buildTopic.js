$(function(){
  var $submit = $('.submit'),
      $groupList = $('.group-list'),
      oStorage = window.sessionStorage,
    groupinfoId = oStorage.getItem('groupinfoId'),
      root = oStorage.getItem('root'),
      userid = oStorage.getItem('userid'),
      vipuserid = oStorage.getItem('vipuserid');
  $submit.on('click',function(event){
    event.preventDefault();
    submitForm();
  });

function submitForm (){
      if($('#topicname').val() !== '' && groupinfoId !== ''){
        $.ajax(
          //'http://test.yi-gather.com:1717/v20/topic/createtopic', {
          root + 'v20/topic/createtopic', {
            dataType: 'json',
            type: 'POST',
            data: {
              type: 'web',
              topicname: $('#topicname').val(),
              "user.id": vipuserid,
              topicexplain: $('#topicexplain').val(),
              "groupinfo.id": groupinfoId,
              banners: $('#banners').val()
            }
          }).success(function (data) {
            if (data.cord === 0) {
              alert('创建成功！');
              $('form')[0].reset();
              location.href = root + "editor/app/Forms/topicList.html";
              //location.href = "/topicList.html" ;
              groupinfoId = oStorage.getItem('groupinfoId');
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
    //'http://test.yi-gather.com:1717/v20/group/findgroups', {
    root + 'v20/group/findgroups', {
      dataType: 'json',
      type: 'POST',
      data: {
        type : 'web',
        page : 0,
        size : 20
      }
    }).success(function (data) {
      if (data.cord === 0) {
        if(data.data.length != 0){
        for(var i=0; i < data.data.length; i++){
          $groupList.prepend("<span class='groupBtn btn btn-default' id=" + data.data[i]['id'] + ">" + data.data[i]['groupname']  + "</span>");
        }
        }else{
          $('.groups').prepend('没有小组，请先创建小组！')
        }
        var  $groupBtn = $('.groupBtn');
        $groupList.find('#' + groupinfoId).addClass('on');
        $groupBtn.on('click',function(){
          $groupBtn.removeClass('on');
          var $this = $(this);
          $this.addClass('on');
          oStorage.setItem('groupinfoId',$this.attr('id'));
        });
      } else {
        alert('获取小组列表失败' + data.msg);
      }
    }).fail(function () {
      alert('获取小组列表失败');
    });


});


