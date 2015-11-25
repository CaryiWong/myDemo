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
  //var root = 'http://test.vcher.yi-gather.com/',
  var root = '',
      $signToBtn = $('.signToBtn'),
      $checkSignToBtn = $('.checkSignToBtn'),
      $form = $('.signToForm'),
      activityId = args['activity_id'];

  var gender = 1,$radio = $('.real-radios');
  var phoneNum = '';
  $radio.on('touchstart',function(){
    $('.radio').removeClass('on');
    $(this).parent().prev('.radio').addClass('on');
  });

  $checkSignToBtn.on('touchstart',function(){
    phoneNum =  $("input[name='phone']").val();
    //检测该手机号是否已有签到信息
    $.ajax({
      url: root + "api/activity/sign_in",
      //url: 'api/activity/sign_in',
      method:"post",
      dataType:"json",
      data:{
        phone_number : phoneNum,
        'activity_id': activityId
      }
    }).success(function(data){
      if (data.errcode === 0){
        $('.signInBox').hide();
        $checkSignToBtn.hide();
        $('.succeed').show();
        $('.score').html(data.result["got_points"]);
      }else if (data.errcode === 2004){
        var $optionsInput = $('.options-input');
        $optionsInput.show();
        $optionsInput.find('input').addClass('valid-input');
        $checkSignToBtn.hide();
        $signToBtn.show();
      }else{
        alert('签到失败，' + data.errmsg)
      }
    });

  });

  $signToBtn.on('touchstart',function(){
    submitForm();
  });
  $('.rule-link2').on('touchstart',function(){
    location.href = 'scoreRules.html';
  });
  function submitForm() {
    gender = $("input[name='gender']:checked").val();
    $form.valid(function (pass) {
      if (pass) {
        $.ajax({
          url: root + "api/activity/sign_in",
          //url: "api/activity/sign_in",
          method:"post",
          dataType:"json",
          data: {
            'phone_number': phoneNum,
            'activity_id': activityId,
            'name': $("input[name='name']").val(),
            'age': $("input[name='age']").val(),
            'gender': gender
          },
          success:function(data){
            if (data.errcode === 0) {
             $('.signInBox').hide();
             $('.formBtn').hide();
             $('.succeed').show();
              $('.score').html(data.result["got_points"]);
            } else {
              alert('签到失败，' + data.errmsg);
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
    url: root + 'api/activity/get_activity_info',
    //url: 'api/activity/get_activity_info',
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

