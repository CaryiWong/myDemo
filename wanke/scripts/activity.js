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
  var root = 'http://121.201.15.197:8000/',
      activityId = args['activity_id'],
      referrer = args['phoneNum'];
  var $activity = $('.activity');
  $('.wtSignUp').on('touchstart',function(){
    if(referrer !='' && referrer != undefined){
      location.href = "signUp.html?activity_id=" + activityId + "&referrer=" + referrer ;
    }else{
      location.href = "signUp.html?activity_id=" + activityId ;
    }

  });
  $.ajax({
    //url: root + 'api/activity/get_activity_info',
    url: 'api/activity/get_activity_info',
    method:"post",
    dataType:"json",
    data:{
      activity_id : activityId
    }
  }).success(function(data){
    if (data.errcode==0) {
      var data = data.result;
      $activity.find('h3').html(data['name']);
      $activity.find('.introduction').html(data['introduction']);
      $activity.find('.start_time').html(getTime(data['start_time']));
      $activity.find('.end_time').html(data['end_time']?getTime(data['end_time']):'未知');
      $activity.find('.location').html(data['location']);

      shareInit(
        '',    //imageUrl
        data['name'],   //title
        data['introduction'],   //content
        1   //showOptionMenu

      );

    } else {
      alert('获取活动信息失败，' + data.errcode + ', ' + data.errmsg);
    }
  }).fail(function(){
    alert('获取活动信息失败！')
  });

   function getTime(timestamp){
     if(timestamp){
     var d = new Date(timestamp * 1000);
     //根据时间戳生成的时间对象
     var time = (d.getFullYear()) + "-" + (d.getMonth() + 1) + "-" +(d.getDate()) + " " +(d.getHours()) + ":" +(d.getMinutes()) + ":" +(d.getSeconds());
     return time;
     }
   }

});

