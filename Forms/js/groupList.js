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
  $.ajax(
    root + 'v20/group/findgroups', {
    //'http://test.yi-gather.com:1717/v20/group/findgroups', {
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
          $groupList.prepend(
            "<tr><td class='findTopic' id=" + data.data[i]['id'] +">" + data.data[i]['groupname'] + "</td>" +"<td class='editTd' id=" + data.data[i]['id'] +
            "><span class='editgroup'>修改</span><span class='delgroup'>删除</span></td></tr>"
          );
          }
        }else{
            $groupList.prepend('没有小组，请添加。');
        }

        var $edit = $('.editTd').find('.editgroup');
        var $find = $('.findTopic');
        var $delgroup = $('.delgroup');
        $find.on('click',function(){
          var $this = $(this);
          oStorage.setItem('groupname',$this.html());
          oStorage.setItem('groupinfoId',$this.attr('id'));
          location.href = root + "editor/app/Forms/topicList.html";
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
                //'http://test.yi-gather.com:1717/v20/group/delgroupinfo ', {
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

});




device.call = function (method, params) {
  if (device.weixin || !device.yiqi) {
    return false;
  }
  var action = {
    ios: function () {
      window.iosWebParams = function () {
        return params;
      }
      window.location.href = method;
    },
    android: function () {
      if (window.yiqi && window.yiqi[method]) {
        window.yiqi[method](params);
        //yi.xxx(params)
      }
    }
  };
  action[device.name] && action[device.name]();
}
