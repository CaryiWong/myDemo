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
  var root = 'http://test.vcher.yi-gather.com/',
      $formBtn = $('.formBtn'),
      $form = $('.signToForm'),
      activityId = args['activity_id'];

  $formBtn.on('touchstart',function(){
    submitForm();
  });


  function submitForm() {
    $form.valid(function (pass) {
      if (pass) {
        $.ajax({
          //url: root + "api/activity/sign_in",
          url: "api/activity/sign_in",
          method:"post",
          dataType:"json",
          data: {
            'phone_number': $("input[name='phone']").val(),
            'activity_id': activityId
          },
          success:function(data){
            if (data.errcode==0) {
             $('.signInBox').hide();
             $('.formBtn').hide();
             $('.succeed').show();
             var data = data.result.user_info;
              $('.hostName').html(data['nickname']);
            } else {
              alert('签到失败，' + data.errcode + ', ' + data.errmsg);
            }
          },
          error:function(){
            alert('签到失败！');
          }
        });

      }else{
        alert($form.find('.valid-error').first().html())
      }
    })
  }

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
      $('.activityName').html(data['name']);
    } else {
      //alert('获取活动信息失败，' + data.errcode + ', ' + data.errmsg);
    }
  }).fail(function(){
    //alert('获取活动信息失败！')
  });
});

