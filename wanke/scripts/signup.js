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
      $formBtn = $('.formBtn'),
      $form = $('.signUpForm'),
      activityId = args['activity_id'],
      referrer = args['referrer'];

  $formBtn.on('touchstart',function(){
    submitForm();
  });

  if(referrer !='' && referrer != undefined){
  $("input[name='referrer']").val(referrer);
  }

  function submitForm() {
    var phoneNum = $("input[name='phone_number']").val();
    $form.valid(function (pass) {
      if (pass) {
        $.ajax({
          //url: root + "api/activity/sign_up",
          url: "api/activity/sign_up",
          method:"post",
          dataType:"json",
          data: {
            'name': $("input[name='name']").val(),
            'age': $("input[name='age']").val(),
            'gender': $("input[name='gender']:checked").val(),
            'phone_number': phoneNum,
            'activity_id': activityId,
            'referrer': $("input[name='referrer']").val()
          },
          success:function(data){
            if (data.errcode==0) {
              alert('恭喜您，报名成功！把活动分享给朋友，可以获得更多积分哦~');
              location.href="activity.html?activity_id=" + activityId + "&phoneNum=" + phoneNum ;
            } else {
              alert('报名失败，' + data.errcode + ', ' + data.errmsg);
            }
          },
          error:function(){
            alert('报名失败！');
          }
        });

      }else{
        alert($form.find('.valid-error').first().html())
      }
    })
  }
  var $news = $('.news');
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
      $news.find('h4').html(data['name']);
      $news.find('.time').html(getTime(data['start_time']));
      $news.find('.location').html(data['location']);
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

