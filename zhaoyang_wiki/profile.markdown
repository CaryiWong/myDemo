## 用户个人模块
> [查询用户基础信息(ok)](#查询用户基础信息)   
> [设置用户基础信息(ok)](#设置用户基础信息)  
> [用户填写意见反馈(ok)](#用户填写意见反馈)   
> [建立本人病历(ok)](#建立本人病历)   
> [建立亲友病历(ok)](#建立亲友病历)   
> [用户病历列表(ok)](#用户病历列表)    
> [用户问诊历史记录(ok)](#用户问诊历史记录)   
> [用户病历详情(ok)](#用户病历详情)   
> 

## 医生个人模块
> [医生登录首页信息(ok)](#医生登录首页信息)               
> [查询医生个人资料(ok)](#查询医生个人资料)   
> [设置医生个人资料(ok)](#设置医生个人资料)       
> [医生填写意见反馈(ok)](#医生填写意见反馈)   
> [医生查询诊金(ok)](#医生查询诊金)   
> [医生设置诊金(ok)](#医生设置诊金)   

## 公用
> [修改密码(ok)](#修改密码)   

---
### 查询用户基础信息
##### 接口地址：http://域名/api/profile/patient-base
##### 请求方法：GET 
##### 请求参数:
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/profile/patient-base
##### JSON返回示例：
```
{
  "status": 200,
  "data": {
    "info": {
      "id": 11,
      "name": "大明",
      "email": "waymen@ganguo.hk",
      "gender": 1,
      "birthday": "1991-01",
      "avatar": "https://trello-avatars.s3.amazonaws.com/eb8345770e0fd6183d370fc3e2b1f1d3/30.png",
      "point": 1,
      "voipAccount": "88797700000050",
      "phone": "11118748284"
    },
    "recent_appointment": {
      "id": 25,
      "doctor_name": "新医生",
      "book_time": "2015-08-21 18:02－18:32",
      "progress": "0/0",
      "return_info": []
    }
  }
}
```
---
### 设置用户基础信息
##### 接口地址：http://域名/api/profile/patient-base
##### 请求方法：POST   
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| name   | string|是 |姓名|
| email   | string|是 |邮箱|
| birthday   | string|是 |出生年月(e.g.:1990-01)|
| gender| int|是 |性别(1男 2女)|
| avatar| string|否 |头像图片url|
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/profile/patient-base
##### JSON返回示例：
```
{
    "status": 200
}
```
---
### 建立本人病历
##### 接口地址：http://域名/api/profile/setSelfMedicalRecord
##### 请求方法：POST   
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| province| string|是 |省|
| city| string|是 |市|
| address | string|否 |详细地址|
| identityNumber| string|否 |身份证号|
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/profile/setSelfMedicalRecord
##### JSON返回示例：
```
{
    "status": 200
}
```
---
### 建立亲友病历
##### 接口地址：http://域名/api/profile/setOtherMedicalRecord
##### 请求方法：POST   
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| relation| string|是 |关系|
| name | string|是 |姓名|
| birthday | string|是 |出生年月|
| gender | int|是 |1男 2女|
| province| string|是 |省|
| city| string|是 |市|
| address | string|否 |详细地址|
| identityNumber| string|否 |身份证号|
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/profile/setOtherMedicalRecord
##### JSON返回示例：
```
{
    "status": 200
}
```
---
### 用户病历列表
##### 接口地址：http://域名/api/profile/medicalRecordList
##### 请求方法：GET  
##### 请求参数:
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/profile/medicalRecordList
##### JSON返回示例：
```
{
    "status": 200,
    "errMsg": "",
	 "data": [
	    {
	      "medicalRecordId": 1,
	      "name": "大明",
	      "relation": "本人",
	      "age":24,
	      "gender":1
	    },
	    {
	      "medicalRecordId": 2,
	      "name": "大明爸",
	      "relation": "父亲",
	      "age":45,
	      "gender":1
	    }
	 ]
}
```
---
### 用户填写意见反馈
##### 接口地址：http://域名/api/profile/setPatientFeedback
##### 请求方法：POST   
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| feedback   | string|是 |意见反馈|
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/profile/setPatientFeedback
##### JSON返回示例：
```
{
    "status": 200
}
```
---
### 医生填写意见反馈
##### 接口地址：http://域名/api/profile/setDoctorFeedback
##### 请求方法：POST   
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| feedback   | string|是 |意见反馈|
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/profile/setDoctorFeedback
##### JSON返回示例：
```
{
    "status": 200
}
```
---
### 医生查询诊金
##### 接口地址：http://域名/api/profile/money
##### 请求方法：GET   
##### 请求参数:
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/profile/money
```
{
  "status": 200,
  "data": {
    "money": 100,
    "second_money": 0
  }
}
```
---
### 医生设置诊金
##### 接口地址：http://域名/api/profile/money
##### 请求方法：POST   
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| money | number |是 |初诊诊金(元／次／半小时)|
| secondMoney| number|是 |复诊诊金(元／次／半小时)|
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/profile/money
##### JSON返回示例：
```
{
    status: "200"
}
```
---
### 查询医生个人资料
##### 接口地址：http://域名/api/profile/doctor-base
##### 请求方法：GET
##### 请求参数:
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/profile/doctor-base
##### JSON返回示例：
```
{
  "status": 200,
  "data": {
    "id": 1,
    "avatar": "http://p.3761.com/pic/71271413852950.jpg",
    "name": "新医生",
    "email": "waymen@ganguo.hk",
    "gender": 1,
    "hospital_id": 8,
    "specialist": "妇科",
    "hospital_phone": "",
    "title": "主任医师",
    "title_img": "http://pic.baike.soso.com/p/20140401/20140401145749-1321596626.jpg",
    "practitioner_img": "http://pic.baike.soso.com/p/20140401/20140401145749-1321596626.jpg",
    "certified_img": "http://pic.baike.soso.com/p/20140401/20140401145749-1321596626.jpg",
    "detail": "",
    "hospital_name": "新私人诊所",
    "voipAccount": "88797700000028",
    "phone": "15917748280",
    "status":"pending" (pending审核中 pass审核通过 reject审核不通过 空字符串的话就代表是还未提交过审核)
  }
}
```
---
### 医生登录首页信息
##### 接口地址：http://域名/api/profile/doctor-index
##### 请求方法：GET
##### 请求参数:
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/profile/doctor-index
##### JSON返回示例:
```
{
  "status": 200,
  "data": {
    "login_num": 4,
    "last_login": "2015-08-03 15:39",
    "appointment_num": 1,(预约数量)
    "consult_num": 0,(紧急咨询数量)
    "transfer_num": 0,(转诊待接受的数量)
    "name": "钟医生"
  }
}
```
---
### 用户问诊历史记录
##### 接口地址：http://域名/api/profile/histories
##### 请求方法：GET
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
|page | number|否 |页数|
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/profile/histories?page=1
##### JSON返回示例:
```
{
  "status": 200,
  "data": {
    "total": 2,
    "per_page": 20,
    "current_page": 1,
    "last_page": 1,
    "next_page_url": null,
    "prev_page_url": null,
    "from": 1,
    "to": 2,
    "data": [
      {
        "id": 6,
        "record_name": "大明",
        "relation": "本人",
        "type": "网诊",
        "book_time": "2015-11-09 21:00－21:30",
        "money": 100,
        "record_id": 1,
        "progress": "0/0",
        "return_info": [],
        "doctor": {
          "id": 4,
          "name": "医生4",
          "email": "",
          "level": "基本认证",
          "gender": 1,
          "birthday": "",
          "city": "",
          "hospital_id": 1,
          "specialist": "精神科",
          "title": "主任医师",
          "money": 100,
          "second_money": 0,
          "hospital_phone": "",
          "detail": "",
          "avatar": "http://p.3761.com/pic/71271413852950.jpg",
          "need_review": 0,
          "title_img": "",
          "practitioner_img": "",
          "certified_img": "",
          "point": 5,
          "hospital_name": "广州市脑科医院",
          "voipAccount": "",
          "phone": "15917748283"
        }
      },
      {
        "id": 1,
        "record_name": "大明",
        "relation": "本人",
        "type": "网诊",
        "book_time": "2015-11-09 20:00－20:30",
        "money": 100,
        "record_id": 1,
        "progress": "0/0",
        "return_info": {
          "need_return": 1,
          "return_paid": 0,
          "return_appointment_id": 0
        },
        "doctor": {
          "id": 1,
          "name": "新医生",
          "email": "waymen@ganguo.hk",
          "level": "基本认证",
          "gender": 1,
          "birthday": "",
          "city": "广州",
          "hospital_id": 1,
          "specialist": "妇科",
          "title": "主任医师",
          "money": 100,
          "second_money": 0,
          "hospital_phone": "",
          "detail": "",
          "avatar": "http://p.3761.com/pic/71271413852950.jpg",
          "need_review": 0,
          "title_img": "http://pic.baike.soso.com/p/20140401/20140401145749-1321596626.jpg",
          "practitioner_img": "http://pic.baike.soso.com/p/20140401/20140401145749-1321596626.jpg",
          "certified_img": "http://pic.baike.soso.com/p/20140401/20140401145749-1321596626.jpg",
          "point": 0,
          "hospital_name": "广州市脑科医院",
          "voipAccount": "88797700000028",
          "phone": "15917748280"
        }
      }
    ]
  }
}
```
---
### 用户病历详情
##### 接口地址：http://域名/api/profile/record-detail
##### 请求方法：GET
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| recordId| string|是 |病历id|
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/profile/record-detail/?recordId=1
##### JSON返回示例:
```
{
  "status": 200,
  "data": {
    "id": 1,
    "patient_id": 1,
    "name": "小明",
    "relation": "本人",
    "gender": 1,
    "birthday": "1991-01",
    "province": "广东省",
   	 "city":"广州市"，
    "address": "xxxxxxx",
    "identity_number": "111111111111111111"
  }
}
```
---
### 设置医生个人资料
##### 接口地址：http://域名/api/profile/doctor-base
##### 请求方法：POST   
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| name   | string|是 |姓名|
| email   | string|是 |邮箱|
| gender| int|是 |性别(1男 2女)|
| avatar| string|是 |头像图片url|
| specialist| string|是 |专科|
| title| number|是 |职称(1 2 3 4 5)|
| hospital| string|是 |医院名称|
| titleImg| string|否 |职称证件图片url|
| practitionerImg| string|否|注册证件图片url|
| certifiedImg| string|否 |执业资格图片url|
| hospitalPhone| string|否 |医院电话|
| detail| string|否 |医生介绍|

##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/profile/doctor-base
##### JSON返回示例：
```
{
    "status": 200
}
```
---
### 修改密码
##### 接口地址：http://域名/api/profile/new-password
##### 请求方法：POST   
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| password   | string|是 |旧密码(客户端加密后传过来)|
| newPassword  | string|是 |新密码(客户端加密后传过来)|
| confirmPassword| string|是 |确认新密码(客户端加密后传过来)|

##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/profile/new-password
##### JSON返回示例：
```
{
    "status": 200
}
```