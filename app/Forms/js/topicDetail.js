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
  //var args = getArgs();
  var $detail = $('.tableBody'),
      oStorage = window.sessionStorage,
      root = oStorage.getItem('root'),
      topicId =  oStorage.getItem('topicId'),
      topicName = oStorage.getItem('topicName');
  $('h3').prepend('<span>' + topicName + '的详细信息</span>');
  $.ajax(
    'http://test.yi-gather.com:1717/v20/topic/findtopicdetail', {
    //root + 'v20/topic/findtopicdetail', {
      dataType: 'json',
      type: 'POST',
      data: {
        type : 'web',
        topicid : topicId ,
        page : 0,
        size : 20
      }
    }).success(function (data) {
      if (data.cord === 0) {
        var res = data.data,
            user = res.user;
        $detail.append(
          "<tr><td>话题名称</td><td>"+ res['topicname'] +"</td></tr>" +
          "<tr><td>话题封面图</td><td class='banners'></td></tr>" +
          "<tr><td>话题简介</td><td>"+ res['topicexplain'] +"</td></tr>"+
          "<tr><td>话题创建者</td><td>"+ user['nickname'] +"</td></tr>"+
          "<tr><td>话题创建时间</td><td>"+ res['createtime']  +"</td></tr>"
        );
        for(var i = 0; i < res.bannerlist.length ; i++ ){
          $('.banners').prepend("<img src="+ res.bannerlist[i] +"/>");
        }

      } else {
        alert('获取话题信息失败' + data.msg);
      }
    }).fail(function () {
      alert('获取话题信息失败');
    });

});


