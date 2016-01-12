/**
 * Created by Caryi on 2015/12/31.
 */
require('../../../scripts_src/modules/device.js');
var isDev = require('isDev');
var localOriginal = isDev ? 'http://121.201.15.197:8040' : "http://" + window.location.host;
var $sureBtn = $('.sure');
var $cancelBtn = $('.cancel');
var $sureForm = $('.sure-form');
$sureForm.attr('action', localOriginal + '/oauth2/api/authorize');
var isPC = require('./browser');
if(isPC){
  $('html').addClass('PC-body');
}
$cancelBtn.on('touchstart click',function(){
  event.preventDefault();
  location.href = 'error.html?errcode=2009';
});

$.ajax(localOriginal + '/oauth2/api/get_basic_info',{
  type: 'POST',
  dataType: 'json'
}).success(function(data){
  if(data.errcode === 0){
    var result = data.result;
    var user_info = result.user_info;
    if(user_info.length != 0){
      $('.user-name').html(user_info['nickname']);
    }
    $('.client-name').html(result.client_info['name']);
  }else{
    location.href = 'error.html?errcode=' + data.errcode;
  }
}).fail(function(){
  alert('服务器错误！')
});

