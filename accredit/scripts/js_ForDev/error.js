/**
 * Created by Caryi on 2015/12/31.
 */
var getArgs = require('../../../scripts_src/components/getArgs.js');
var getErrMsg = require('./errorMsg');
require('../../../scripts_src/modules/device.js');
var isDev = require('isDev');
var isPC = require('./browser');
if(isPC){
  $('html').addClass('PC-body');
}
var localOriginal = isDev ? 'http://121.201.15.197:8040' : "http://" + window.location.host;
args = getArgs();
var code = args['errcode'];
var msg = getErrMsg(code - 0);
if(code !== 0 && msg){
  $('.error-text').html(msg);
}else{
  $('.error-text').html('未知错误！');
}

