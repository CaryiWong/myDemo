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
  //$('h3 >a').attr('href',root+'editor/app/Forms/groupBuild.html');
  $('h3 >a').attr('href','/groupBuild.html');
  $.ajax(
    //root + 'v20/group/findgroups', {
    'http://test.yi-gather.com:1717/v20/group/findgroups', {
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
          if(data.data[i]['groupname'] !=''){
          $groupList.prepend(
            "<tr><td class='findTopic' id=" + data.data[i]['id'] +">" + data.data[i]['groupname'] + "</td>" +"<td class='editTd' id=" + data.data[i]['id'] +
            "><span class='editgroup'>修改</span><span class='delgroup'>删除</span></td></tr>"
          );
          }
        }
        var $edit = $('.editTd').find('.editgroup');
        var $find = $('.findTopic');
        $find.on('click',function(){
          var $this = $(this);
          oStorage.setItem('groupname',$this.html());
          oStorage.setItem('groupinfoId',$this.attr('id'));
          //location.href = root + "editor/app/Forms/topicList.html?id=" + $this.next().attr('id') + "&name=" + $this.html() ;
          location.href = "/topicList.html" ;
        });
        $edit.on('click',function(){
          var $this = $(this);
          oStorage.setItem('groupinfoId',$this.parent().attr('id'));
          //location.href = root + "editor/app/Forms/groupEdit.html?id=" + $this.parent().attr('id') ;
          location.href = "/groupEdit.html?id=" + $this.parent().attr('id') ;
        })
      } else {
        alert('获取小组列表失败' + data.msg);
      }
    }).fail(function () {
      alert('获取小组列表失败');
    });

});


