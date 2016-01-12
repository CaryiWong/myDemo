$(function(){
  var $groupList = $('.tableBody'),
      oStorage = window.sessionStorage,
      root = oStorage.getItem('root'),
      userid = oStorage.getItem('userid'),
      groupName = oStorage.getItem('groupname'),
      groupId = oStorage.getItem('groupinfoId');
  $('h3').prepend('<span>' + groupName + '里的话题</span>');

  var pageNum = window.location.hash.slice(1) - 1 ;
  pageNum = pageNum>=0 ? pageNum : 0;
  getData(pageNum);

  function getData(page){
    $.ajax(
      root + 'v20/topic/findtopics', {
        dataType: 'json',
        type: 'POST',
        data: {
          type : 'web',
          groupid : groupId ,
          page : page,
          size : 20
        }
      }).success(function (data) {
        if (data.cord === 0) {
          if(data.data.length != 0){
            for(var i=0; i < data.data.length; i++) {
              $groupList.prepend(
                "<tr><td class='detail' id=" + data.data[i]['id'] + ">" + data.data[i]['topicname'] + "</td>" + "<td class='editTd'><span class='delTopic'>删除</span></td></tr>"
              );
            }
          }else{
            $groupList.prepend('小组中没有话题，请添加。');
          }

          //分页代码
          var $pagination = $('.pagination');
          for( var j = 1 ; j <= data.pagecount ; j++ ){
            $pagination.find('.next').before('<li><a id=\"page' + j + '\" href=\"#' + j + '\">' + j + '</a></li>');
          }
          $('#page'+(page+1)).parent().addClass('active');
          var $page = $('.pagination li a');
          $page.on('click',function(){
            location.reload();
            $pagination.find('li').removeClass('active');
          });
          var $preLi = $('.previous');
          var $pre = $preLi.find('a');
          var $nextLi = $('.next');
          var $next = $nextLi.find('a');
          if(page > 0){
            $pre.attr('href','#' + (page));
          }else{
            $pre.off('click').attr('disabled','disabled');
            $preLi.addClass('disabled');
          }
          if(page < data.pagecount-1){
            $next.attr('href','#' + (page + 2));
          }else{
            $next.off('click').attr('disabled','disabled');
            $nextLi.addClass('disabled');
          }
          var $detail = $('.detail');
          var $delTopic = $('.delTopic');
          $detail.on('click',function(){
            var $this = $(this);
            oStorage.setItem('topicId',$this.attr('id'));
            oStorage.setItem('topicName',$this.html());
            location.href = root + "editor/app/Forms/topicDetail.jsp";
          });
          $delTopic.on('click',function() {
            var $delBtn = $(this);
            var delId = $delBtn.parent().prev().attr('id');
            if (confirm('确定删除此话题？')) {
              $.ajax(
                root + 'v20/topic/deltopic', {
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

  }


});


