function getArgs() {
  var args = {},
    query = location.search.substring(1),
    pairs = query.split("&");
  for (var i = 0; i < pairs.length; i++) {
    var pos = pairs[i].indexOf('=');
    if (pos == -1) continue;
    var argname = pairs[i].substring(0, pos),
      value = pairs[i].substring(pos + 1);
    value = decodeURIComponent(value);
    args[argname] = value;
  }
  return args;
}
$(function(){
  var args = getArgs();
  var $groupList = $('.tableBody'),
      oStorage = window.sessionStorage;

  if(args['root'] && args['vipuserid'] && args['userid']){
    oStorage.setItem('userid',args['userid']);
    oStorage.setItem('root',args['root']);
    oStorage.setItem('vipuserid',args['vipuserid']);
  }
  var root = oStorage.getItem('root');
  var pageNum = window.location.hash.slice(1) - 1 ;
  pageNum = pageNum>=0 ? pageNum : 0;
  getData(pageNum);




  function getData(page){
    $.ajax(
      root + 'v20/group/findgroups', {
        dataType: 'json',
        type: 'POST',
        data: {
          type : 'web',
          page : page,
          size : 20
        }
      }).success(function (data) {
        if (data.cord === 0) {
          if(data.data.length != 0){
            for(var i=0; i < data.data.length; i++){
              $groupList.prepend(
                "<tr><td class='findTopic' id=" + data.data[i]['id'] +">" + data.data[i]['groupname'] + "</td>" +"<td class='editTd' id=" + data.data[i]['id'] +
                "><span class='editgroup'>修改</span><span class='delgroup'>删除</span></td></tr>"
              );
            }
          }else{
            $groupList.prepend('没有小组，请添加。');
          }

          //分页代码
          var $pagination = $('.pagination');
          for( var j = 1 ; j <= data.pagecount ; j++ ){
            $pagination.find('.next').before('<li class="choosePage"><a id=\"page' + j + '\" href=\"#' + j + '\">' + j + '</a></li>');
          }
          $('#page'+(page+1)).parent().addClass('active');
          var $page = $pagination.find('a');
          $page.on('click', function(){
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
          var $edit = $('.editTd').find('.editgroup');
          var $find = $('.findTopic');
          var $delgroup = $('.delgroup');
          $find.on('click',function(){
            var $this = $(this);
            oStorage.setItem('groupname',$this.html());
            oStorage.setItem('groupinfoId',$this.attr('id'));
            location.href = root + "editor/app/Forms/topicList.jsp";
            //location.href = "/topicList.html" ;
          });
          $edit.on('click',function(){
            var $this = $(this);
            oStorage.setItem('groupinfoId',$this.parent().attr('id'));
            location.href = root + "editor/app/Forms/groupEdit.html";
            //location.href = "/groupEdit.html" ;
          });
          $delgroup.on('click',function() {
            var $delBtn = $(this);
            var delId = $delBtn.parent().attr('id');
            if (confirm('确定删除此小组？')) {
              $.ajax(
                root + 'v20/group/delgroupinfo ', {
                  dataType: 'json',
                  type: 'POST',
                  data: {
                    type: 'web',
                    id: delId
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
          alert('获取小组列表失败' + data.msg);
        }
      }).fail(function () {
        alert('获取小组列表失败');
      });
  }
});


