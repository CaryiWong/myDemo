$(function(){
  var $groupList = $('.tableBody'),
      oStorage = window.sessionStorage,
      root = oStorage.getItem('root'),
      userid = oStorage.getItem('userid'),
      groupName = oStorage.getItem('groupname'),
      groupId = oStorage.getItem('groupinfoId');
  $('h3').prepend('<span>' + groupName + '里的话题</span>');
  $.ajax(
    //'http://test.yi-gather.com:1717/v20/topic/findtopics', {
    root + 'v20/topic/findtopics', {
      dataType: 'json',
      type: 'POST',
      data: {
        type : 'web',
        groupid : groupId ,
        page : 0,
        size : 20
      }
    }).success(function (data) {
      if (data.cord === 0) {
        if(data.data.length != 0){
        for(var i=0; i < data.data.length; i++) {
            $groupList.append(
              "<tr><td class='detail' id=" + data.data[i]['id'] + ">" + data.data[i]['topicname'] + "</td>" + "<td class='editTd'><span class='delTopic'>删除</span></td></tr>"
            );
        }
        }else{
          $groupList.prepend('小组中没有话题，请添加。');
        }
        var $detail = $('.detail');
        var $delTopic = $('.delTopic');
        $detail.on('click',function(){
          var $this = $(this);
          oStorage.setItem('topicId',$this.attr('id'));
          oStorage.setItem('topicName',$this.html());
          location.href = root + "editor/app/Forms/topicDetail.html";
          //location.href = "/topicDetail.html";
        });
        $delTopic.on('click',function() {
          var $delBtn = $(this);
          var delId = $delBtn.parent().prev().attr('id');
          if (confirm('确定删除此话题？')) {
            $.ajax(
              root + 'v20/topic/deltopic', {
              //'http://test.yi-gather.com:1717/v20/topic/deltopic', {
                dataType: 'json',
                type: 'POST',
                data: {
                  type: 'web',
                  id: delId,
                  uid: userid
                }
              }).success(function (data) {
                if (data.cord === 0) {
                  alert(data.msg);
                  self.location.reload();
                }else {
                  alert('删除失败' + data.msg)
                }
              }).fail(function () {alert('删除失败！')});
          }
        });

      } else {
        alert('获取话题列表失败' + data.msg);
      }
    }).fail(function () {
      alert('获取话题列表失败');
    });

});


