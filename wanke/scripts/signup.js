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
  var oStorage = window.localStorage;
  var args = getArgs();
  var root = 'http://test.vcher.yi-gather.com/',
      $formBtn = $('.signUpBtn'),
      $form = $('.signUpForm'),
      activityId = args['activity_id'],
      activityIds = oStorage.getItem('activityId')?oStorage.getItem('activityId').split(','):[],
      referrer = args['referrer'];
  var gender = 1,$radio = $('.radio');
  var oldMember = false;
  var phoneNum = '';
  var agePass = false;
  $radio.on('touchstart',function(){
    $radio.removeClass('on');
    $(this).addClass('on');
    gender = $(this).attr('data-gender');
  });
  $('.signUpCheckBtn').on('touchstart',function(){
    phoneNum =  $("input[name='phone_number']").val();
    //检测该手机号是否已有报名信息
    $.ajax({
      //url: 'http://test.vcher.yi-gather.com/api/user/get_user_info',
      url: 'api/user/get_user_info',
      method:"post",
      dataType:"json",
      data:{
        phone_number : phoneNum
      }
    }).success(function(data){
      if (data.errcode === 2004 || data.errcode === 1001) {
        var $optionsInput = $('.options-input');
        $optionsInput.show();
        $optionsInput.find('input').addClass('valid-input');
        $('.signUpCheckBtn').hide();
        $formBtn.show();
      }else{
        submitForm();
      }
    });

  });

  $formBtn.on('touchstart',function(){
    submitForm();
  });

  function submitForm() {
    phoneNum =  $("input[name='phone_number']").val();
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
            'gender': gender,
            'phone_number': $("input[name='phone_number']").val(),
            'activity_id': activityId,
            'referrer': referrer
          },
          success:function(data){
            if (data.errcode==0) {
              activityIds.push(activityId);

              oStorage.setItem('phoneNum',phoneNum);
              oStorage.setItem('activityId',activityIds.join(','));
                location.href="activity.html?activity_id=" + activityId + "&phoneNum=" + phoneNum ;
            } else {
              alert('报名失败, ' + data.errmsg);
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
      alert('获取活动信息失败，' + data.errcode + ', ' + data.errmsg);
    }
  }).fail(function(){
    alert('获取活动信息失败！')
  });

  //利用手机号码获取推荐者姓名
  $.ajax({
    //url: root + 'api/user/get_user_info',
    url: 'api/user/get_user_info',
    method:"post",
    dataType:"json",
    data:{
      phone_number : referrer
    }
  }).success(function(data){
    if (data.errcode==0) {
      var data = data.result;
      $('.invitation').html(data['nickname'] + "与我");
      oldMember = true;
    }
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

