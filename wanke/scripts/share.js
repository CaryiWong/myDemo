function shareInit(image_url, title, content, showOptionMenu,link) {
  $.ajax({
    url:"/api/util/jssdk/get_config_data",
    method:"GET",
    data: { "url": location.href},
    dataType:"json",
    success:function(recv_data){
      if (recv_data.errcode==0) {
        result=recv_data.result;
        doShareInit(result.appid, result.timestamp, result.noncestr, result.signature, location.href, image_url, title, content, showOptionMenu);
      } else {
      }
    },
    error:function() {
    }
  });
}

function doShareInit(appid, timestamp, nonceStr, signature, url, image_url, title, content, showOptionMenu) {
  wx.config({
    debug: false,
    appId: appid,
    timestamp: timestamp,
    nonceStr: nonceStr,
    signature: signature,
    jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage', 'onMenuShareQQ', 'hideOptionMenu', 'showOptionMenu']
  });


  wx.ready(function(){
    // 分享到朋友圈
    wx.onMenuShareTimeline({
      title: title, // 分享标题
      link: url, // 分享链接
      imgUrl: image_url, // 分享图标
      success: function () {
        // 用户确认分享后执行的回调函数
      },
      cancel: function () {
        // 用户取消分享后执行的回调函数
      }
    });

    // 分享给微信好友
    wx.onMenuShareAppMessage({
      title: title, // 分享标题
      desc: content, // 分享描述
      link: url, // 分享链接
      imgUrl: image_url, // 分享图标
      type: 'link', // 分享类型,music、video或link，不填默认为link
      dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
      success: function () {
        // 用户确认分享后执行的回调函数
      },
      cancel: function () {
        // 用户取消分享后执行的回调函数
      }
    });

    // 分享给QQ好友
    wx.onMenuShareQQ({
      title: title, // 分享标题
      desc: content, // 分享描述
      link: url, // 分享链接
      imgUrl: image_url, // 分享图标
      success: function () {
        // 用户确认分享后执行的回调函数
      },
      cancel: function () {
        // 用户取消分享后执行的回调函数
      }
    });

    if (showOptionMenu) {
      // 显示右上角按钮
      wx.showOptionMenu();
    } else {
      // 隐藏右上角按钮
      wx.hideOptionMenu();
    }
  });
}
