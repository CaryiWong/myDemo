$(function(){
  var $groupList = $('.tableBody'),
      oStorage = window.sessionStorage,
      root = oStorage.getItem('root'),
      groupName = oStorage.getItem('groupname'),
      groupId = oStorage.getItem('groupinfoId');
  $('h3').prepend('<span>' + groupName + '里的话题</span>');
  $.ajax(
    'http://test.yi-gather.com:1717/v20/topic/findtopics', {
    //root + 'v20/group/findtopics', {
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
        for(var i=0; i < data.data.length; i++) {
            $groupList.append(
              "<tr><td class='detail' id=" + data.data[i]['id'] + ">" + data.data[i]['topicname'] + "</td>" + "<td class='editTd'><span class='delTopic'>删除</span></td></tr>"
            );

        }
        var $detail = $('.detail');
        $detail.on('click',function(){
          var $this = $(this);
          oStorage.setItem('topicId',$this.attr('id'));
          oStorage.setItem('topicName',$this.html());
          //location.href = root + "editor/app/Forms/topicDetail.html";
          location.href = "/topicDetail.html?id=" + $this.attr('id') + "&name=" + $this.html();
        });
      } else {
        alert('获取话题列表失败' + data.msg);
      }
    }).fail(function () {
      alert('获取话题列表失败');
    });

});


