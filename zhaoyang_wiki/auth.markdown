## 注册登录模块API
> [注册(ok)](#注册)   
> [发送验证码(ok)](#发送验证码)  
> [登录(ok)](#登录)   
> [重设密码(ok)](#重设密码)   
> [账户登出(ok)](#用户登出)       

---
### 注册
##### 接口地址：http://域名/api/auth/register   
##### 请求方法：POST   
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| type  | int|是 |1普通用户 2医生|
| phone  | string|是 |手机号|
| captcha| string|是 |验证码|
| password| string|是 |密码(md5加密后的密码)|
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/auth/register
##### JSON返回示例：
```
{
    "status": 200,
	 "data":{
	 	"type":1 (1普通用户 2医生),
	 	"token":"8103cfda42d725cd38e8bdf9610ef9a6",
	    "account": {(容联IM用)
	      "user_id": 1,
	      "subAccountSid": "26bb4099409f11e58b68ac853d9d52fd",
	      "subToken": "10e437e43dd311cf924d4e759ee9495b",
	      "voipAccount": "18797700000028",
	      "voipPwd": "1bExz6CE"
	    }	 	
	 }
}
```
---
### 发送验证码
##### 接口地址：http://域名/api/auth/sendCaptcha 
##### 请求方法：POST  
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| phone  | string|是 |手机号|
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/auth/sendCaptcha
##### JSON返回示例：
```
{
    "status": 200
}
```
---
### 登录
##### 接口地址：http://域名/api/auth/login   
##### 请求方法：POST   
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| phone   | string|是 |手机号|
| password| string|是 |md5加密后的密码|
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/auth/login
##### JSON返回示例：
```
{
    "status": 200,
    "data":{
	    "type":1 (1普通用户 2医生),
	    "token":"8103cfda42d725cd38e8bdf9610ef9a6",
	    "account": {(容联IM用)
	      "user_id": 1,
	      "subAccountSid": "26bb4099409f11e58b68ac853d9d52fd",
	      "subToken": "10e437e43dd311cf924d4e759ee9495b",
	      "voipAccount": "18797700000028",
	      "voipPwd": "1bExz6CE"
	    }		    
    }
}
```
###### 如果是医生，则还会返回level字段
---
### 重设密码
##### 接口地址：http://域名/api/auth/reset
##### 请求方法：POST   
##### 请求参数:	
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| email   | string|否 |邮箱|
| phone   | string|是 |手机号|
| password| string|是 |md5加密后的密码|
| captcha| string|是 |验证码|
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/auth/reset
##### JSON返回示例：
```
{
    "status": 200
}
```
---
### 账户登出
##### 接口地址：http://域名/api/auth/logout
##### 请求方法：POST
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| token   | string|否 |放在header传过来|
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/auth/logout
##### JSON返回示例:
```
{
  "status": 200
}
```