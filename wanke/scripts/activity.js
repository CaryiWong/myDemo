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
  var oStorage = window.localStorage;
  //var root = 'http://test.vcher.yi-gather.com/',
  var root = '',
      activityId = args['activity_id'],
      activityIds = oStorage.getItem('activityId')?oStorage.getItem('activityId').split(','):[],
      got_points = oStorage.getItem('got_points'),
      referrer = args['phoneNum'],
      phoneNum = oStorage.getItem('phoneNum');
  var $activity = $('.activity');
  for(var i = 0;i < activityIds.length; i++){
    if(activityIds[i] === activityId){
      $('.afterSignUp').show();
      $('.afterSignUp-btn-group').show();
      if(phoneNum && !referrer){
        location.href="activity.html?activity_id=" + activityId + "&phoneNum=" + phoneNum ;
      }
      $('.beforeSignUp-btn-group').hide();
      break;
    }
  }
  if(got_points){
    $('.score-message').show();
    $('.score').html(got_points);
  }
  $('.rule-link').on('touchstart',function(){
    location.href = 'scoreRules.html';
  });
function goToSignUp(){
  if(referrer !='' && referrer != undefined){
    location.href = "signUp.html?activity_id=" + activityId + "&referrer=" + referrer ;
  }else{
    location.href = "signUp.html?activity_id=" + activityId ;
  }
}
  $('.wtHelpSignUp').on('touchstart',function(){
    location.href = "signUp.html?activity_id=" + activityId ;
  });

  $('.wtSignUp').on('touchstart',function(){
    goToSignUp();
  });
  $.ajax({
    url: root + 'api/activity/get_activity_info',
    method:"post",
    dataType:"json",
    data:{
      activity_id : activityId
    }
  }).success(function(data){
    if (data.errcode==0) {
      var data = data.result;
      $activity.find('.name').html(data['name']);
      //$activity.find('.introduction').html(data['introduction']);

      var contextStr = data['introduction'].trim();
      var arr = contextStr.split(/\n/g);
      for (var j = 0; j < arr.length; j++) {
        $activity.find('.introduction').append("<p>" + arr[j] + "</p>");
      }

      $activity.find('.start_time').html(getTime(data['start_time']));
      $activity.find('.end_time').html(data['end_time']?getTime(data['end_time']):'未知');
      $activity.find('.location').html(data['location']);
      if(data['article_url']){
        $('.wtKnow').on('touchstart',function(){
          location.href = data['article_url']
        });
      }

      shareInit(
        'http://' + window.location.host + '/images/image.png',    //imageUrl
        data['name'],   //title
        data['introduction'],   //content
        1   //showOptionMenu

      );

    } else {
      //alert('获取活动信息失败，' + data.errcode + ', ' + data.errmsg);
    }
  }).fail(function(){
    //alert('获取活动信息失败！')
  });

  function addZero(data){
     if(data < 10){
       return "0"+ data ;
     }
     else {
       return data ;
     }
   }
   function getTime(timestamp){
     if(timestamp){
     var d = new Date(timestamp * 1000);

     //根据时间戳生成的时间对象
     var time = (d.getFullYear()) + "-" + (d.getMonth() + 1) + "-" +(d.getDate()) + " " +(addZero(d.getHours())) + ":" +(addZero(d.getMinutes())) + ":" +(addZero(d.getSeconds()));
     return time;
     }
   }
   $('html,body').css('min-height',window.screen.height);
});

