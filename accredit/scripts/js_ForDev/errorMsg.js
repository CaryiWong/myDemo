/**
 * Created by Caryi on 2016/1/6.
 */
function getErrMsg(errorCode){
  var errorMsg =[
    {code: 0 , name :'ERRCODE_SUCC', msg : '' },
    {code: 1000 , name :'ERRCODE_INTERNAL_ERR', msg : '系统错误' },
    {code: 1001 , name :'ERRCODE_LACK_OF_PARAMETER', msg : '缺少参数' },
    {code: 2001 , name :'ERRCODE_INVALID_CLIENT_ID_OR_SECRET ', msg : '不合法的CLIENT_ID或者CLIENT_SECRET' },
    {code: 2002 , name :'ERRCODE_INVALID_DOMAIN', msg : '域名未经授权' },
    {code: 2003 , name :'ERRCODE_INVALID_LOGIN_NAME_OR_PASSWORD', msg : '用户名或者密码不正确' },
    {code: 2004 , name :'ERRCODE_INVALID_REDIRECT_URI', msg : '转发URI不正确' },
    {code: 2005 , name :'ERRCODE_NO_SUCH_USER', msg : '这个用户不存在' },
    {code: 2006 , name :'ERRCODE_INVALID_AUTHORIZATION_CODE', msg : '授权码不存在或已失效' },
    {code: 2007 , name :'ERRCODE_INVALID_ACCESS_TOKEN', msg : 'access token不存在或已失效' },
    {code: 2008 , name :'ERRCODE_INVALID_GLOBAL_ACCESS_TOKEN', msg : 'global access token不存在或已失效' },
    {code: 2009 , name :'ERRCODE_CANCEL_AUTHORIZATION', msg : '已中止授权' },
    {code: 2010 , name :'ERRCODE_NO_SUCH_USER_OR_NO_AUTHORIZATION', msg : '这个用户不存在或者未授权给当前站点' }
  ];
  var code = errorCode;
  for(var i = 0; i < errorMsg.length; i++){
    if(errorMsg[i].code === code){
      return errorMsg[i].msg;
      break;
    }
  }
}

module.exports = getErrMsg;
