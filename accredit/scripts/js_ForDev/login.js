/**
 * Created by Caryi on 2015/12/31.
 */
require('../../../scripts_src/modules/device.js');
var isDev = require('isDev');
var localOriginal = isDev ? 'http://121.201.15.197:8040' : "http://" + window.location.host;
var $loginBtn = $('.login-btn');
var $loginBox = $('.login-box');
var $successBox = $('.success-box');
var isPC = require('./browser');
if(isPC){
  $('html').addClass('PC-body');
}
$('button').on('touchstart click',function(event){
  event.preventDefault();
});
$loginBtn.on('touchstart click',function(){
  var username = $('.username').val();
  var pwd = $('.password').val();
  if(username && pwd){
    login(username,pwd);
  }else{
    alert('用户名和密码不能为空！')
  }
});

function login(user,pwd){
  $.ajax( localOriginal + '/oauth2/api/login',{
    dataType: 'json',
    type: 'POST',
    data: {
      login_name: user,
      password: pwd
    }
  }).success(function(data){
    if(data.errcode === 0){
      location.href = 'accredit.html';
    }else{
      location.href = 'error.html?errcode=' + data.errcode;
    }
  }).fail(
    function(){
    }
  );
}

//$.ajax(localOriginal + '/oauth2/api/get_basic_info',{
//  type: 'POST',
//  dataType: 'json'
//}).success(function(data){
//  if(data.errcode === 0){
//    var result = data.result;
//    $('.client-name').html( result.client_info['name']);
//  }else{
//    location.href = 'error.html?errcode=' + data.errcode;
//  }
//}).fail(function(){
//  alert('服务器错误！')
//});



