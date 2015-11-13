## 用户聊天模块API
> [用户通讯录列表(ok)](#用户通讯录列表)   
> [医生联系人详情(ok)](#医生联系人详情)   
> [设置医生联系人备注(ok)](#设置医生联系人备注)  
> [设置医生黑名单状态(ok)](#设置医生黑名单状态)     
> [设置是否接受医生电话(ok)](#设置是否接受医生电话)   
> [与医生聊天是否有感叹号(ok)](#与医生聊天是否有感叹号)   
> [用户能否打电话给医生(ok)](#用户能否打电话给医生)   
> [用户能否发信息给医生(ok)](#用户能否发信息给医生)  

## 医生聊天模块API
> [医生通讯录列表(ok)](#医生通讯录列表)   
> [查看用户联系人详情(ok)](#查看用户联系人详情)   
> [设置用户联系人备注(ok)](#设置用户联系人备注)   
> [设置用户黑名单状态(ok)](#设置用户黑名单状态)     
> [设置是否接受用户电话(ok)](#设置是否接受用户电话)   
> [医生能否打电话给用户(ok)](#医生能否打电话给用户)    
> [医生能否发信息给用户(ok)](#医生能否发信息给用户)    
> [与用户聊天是否有感叹号(ok)](#与用户聊天是否有感叹号)   

## 公共
> [更新聊天时间(废弃)](#更新聊天时间)   
> [获取聊天时病历选择列表(ok)](#获取聊天时病历选择列表)  
> [获取就诊是否完成的状态信息(ok)](#获取就诊是否完成的状态信息)   
> [获取头像(ok)](#获取头像)   

---
### 用户通讯录列表
##### 接口地址：http://域名/api/im/pContactList
##### 请求方法：GET
##### 请求参数:
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/im/pContactList
##### JSON返回示例:
```
{
  "status": 200,
  "data": [
    {
      "doctor_id": 1,
      "name": "医生1",
      "nickname": "",
      "avatar": "http://p.3761.com/pic/71271413852950.jpg",
      "voipAccount": "",
      "phone": "15917748280"
    },
    {
      "doctor_id": 2,
      "name": "医生2",
      "nickname": "",
      "avatar": "http://p.3761.com/pic/71271413852950.jpg",
      "voipAccount": "88797700000029",
      "phone": "15917748281"
    },
    {
      "doctor_id": 4,
      "name": "医生4",
      "nickname": "",
      "avatar": "http://p.3761.com/pic/71271413852950.jpg",
      "voipAccount": "",
      "phone": "15917748283"
    }
  ]
}
```
---
### 医生联系人详情
##### 接口地址：http://域名/api/im/doctor-contact
##### 请求方法：GET
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| doctorId| string|是 |医生id|
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/im/doctor-contact?doctorId=1
##### JSON返回示例:
```
{
  "status": 200,
  "data": {
    "doctor_id": 1,
    "name": "医生1",
    "level": "高级认证",
    "gender": 1,
    "avatar": "",
    "specialist": "精神科",
    "title": 1,
    "hospital_name": "医院1",
    "point": 4.8,
    "nickname": "神医",
    "is_ban": 0,
    "can_call": 1
  }
}
```
---
### 设置医生联系人备注
##### 接口地址：http://域名/api/im/doctor-nickname
##### 请求方法：POST
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| doctorId| string|是 |医生id|
| nickname| string|是 |备注名|
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/im/doctor-nickname
##### JSON返回示例:
```
{
  "status": 200,
  "data": {
    "nickname": "哈哈"
  }
}
```
---
### 设置医生黑名单状态
##### 接口地址：http://域名/api/im/doctor-ban-status
##### 请求方法：POST
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| doctorId| string|是 |医生id|
| status| string|是 |0取消黑名单 1加入黑名单|
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/im/doctor-ban-status
##### JSON返回示例:
```
{
  "status": 200,
  "data": {
    "is_ban": 1,
    "can_call": 0
  }
}
```
###### `is_ban`为1时,已将该医生加入黑名单 为0时未被加入黑名单;`can_call`为0时不允许对方打电话，为1时允许对方打电话
---
### 设置是否接受医生电话
##### 接口地址：http://域名/api/im/doctor-call-status
##### 请求方法：POST
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| doctorId| string|是 |医生id|
| status| string|是 |0不接受医生电话 1接受医生电话|
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/im/doctor-call-status
##### JSON返回示例:
```
{
  "status": 200,
  "data":{
  		"can_call":1
  }
}
```
###### `can_call `为0时不接受医生电话;为1时接受医生电话
---
### 医生通讯录列表
##### 接口地址：http://域名/api/im/doctor-contact-list
##### 请求方法：GET
##### 请求参数:
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/im/doctor-contact-list
##### JSON返回示例:
```
{
  "status": 200,
  "data": [
    {
      "patient_id": 11,
      "name": "大明",
      "nickname": "",
      "avatar": "https://trello-avatars.s3.amazonaws.com/eb8345770e0fd6183d370fc3e2b1f1d3/30.png",
      "voipAccount": "88797700000050",
      "phone": "13800138000",
      "medical_records": [
        {
          "medicalRecordId": 1,
          "name": "大明",
          "relation": "本人"
        },
        {
          "medicalRecordId": 2,
          "name": "明爸",
          "relation": "父亲"
        }
      ]
    }
  ]
}
```
### 查看用户联系人详情
##### 接口地址：http://域名/api/im/patient-contact
##### 请求方法：GET
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| patientId| string|是 |用户id|
| recordId| string|是 |病历id|
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/im/patient-contact?patientId=11&recordId=1
##### JSON返回示例:
```
{
  "status": 200,
  "data": {
    "patient_id": 11,
    "name": "大明",
    "avatar": "https://trello-avatars.s3.amazonaws.com/eb8345770e0fd6183d370fc3e2b1f1d3/30.png",
    "birthday": "1991-01",
    "gender": 1,
    "record_id": 1,
    "record_name": "大明",
    "relation": "本人",
    "record_gender": 1,
    "province": "广东",
    "city": "广州",    
    "nickname": "",
    "is_ban": 0,
    "can_call": 1
  }
}
```
---
### 设置用户联系人备注
##### 接口地址：http://域名/api/im/patient-nickname
##### 请求方法：POST
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| patientId| string|是 |用户id|
| nickname| string|是 |备注名|
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/im/patient-nickname
##### JSON返回示例:
```
{
  "status": 200,
  "data": {
    "nickname": "哈哈"
  }
}
```
---
### 设置用户黑名单状态
##### 接口地址：http://域名/api/im/patient-ban-status
##### 请求方法：POST
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| patientId| string|是 |用户id|
| status| string|是 |0取消黑名单 1加入黑名单|
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/im/patient-ban-status
##### JSON返回示例:
```
{
  "status": 200,
  "data":{
  		"is_ban":1,
  		"can_call":0
  }
}
```
###### `is_ban`为1时,已将该用户加入黑名单 为0时未被加入黑名单;`can_call`为0时不允许对方打电话，为1时允许对方打电话
---
### 设置是否接受用户电话
##### 接口地址：http://域名/api/im/patient-call-status
##### 请求方法：POST
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| patientId| string|是 |医生id|
| status| string|是 |0不接受用户电话 1接受用户电话|
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/im/patient-call-status
##### JSON返回示例:
```
{
  "status": 200,
  "data":{
  		"can_call":1
  }
}
```
###### `can_call `为0时不接受用户电话;为1时接受用户电话

---
### 与医生聊天是否有感叹号
##### 接口地址：http://域名/api/im/p-talk-status
##### 请求方法：GET
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| doctorId| number|是 |医生id|
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/im/p-talk-status?doctorId=1
##### JSON返回示例:
```
{
  "status": 200,
  "data": {
    "status": "true",(该字段为“true”时可与医生正常聊天，为"false"时会出现感叹号)
    "pay": "paid"(该字段为"unpay"时，有该医生未付款的预约；为"paid"时，付清了与该医生相关的预约单)
  }
}
```
---
### 与用户聊天是否有感叹号
##### 接口地址：http://域名/api/im/d-talk-status
##### 请求方法：GET
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| patientId| number|是 |用户id|
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/im/d-talk-status?patientId=1
##### JSON返回示例:
```
{
  "status": 200,
  "data": {
    "status": "true"(该字段为“true”时正常聊天，为"false"时会出现感叹号)
  }
}
```
---
### 用户能否打电话给医生
##### 接口地址：http://域名/api/im/patient-call-to
##### 请求方法：GET
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| doctorId| number|是 |医生id|
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/im/patient-call-to/?doctorId=1
##### JSON返回示例:
```
{
  "status": 200,
  "data": "true"
}
```
---
### 用户能否发信息给医生
##### 接口地址：http://域名/api/im/patient-send-to
##### 请求方法：GET
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| doctorId| number|是 |医生id|
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/im/patient-send-to/?doctorId=1
##### JSON返回示例:
```
{
  "status": 200,
  "data": "false"
}
```
---
### 医生能否打电话给用户
##### 接口地址：http://域名/api/im/doctor-call-to
##### 请求方法：GET
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| patientId| number|是 |用户id|
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/im/doctor-call-to/?patientId=1
##### JSON返回示例:
```
{
  "status": 200,
  "data": "true"
}
```
---
### 医生能否发信息给用户
##### 接口地址：http://域名/api/im/doctor-send-to
##### 请求方法：GET
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| patientId| number|是 |用户id|
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/im/doctor-send-to/?patientId=1
##### JSON返回示例:
```
{
  "status": 200,
  "data": "false"
}
```
---
### 更新聊天时间(废弃)
##### 接口地址：http://域名/api/im/last-time
##### 请求方法：POST
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| times| json|是 |关于预约单和最后聊天时间的json|
times参数示例（键是预约id，值是时间戳）
```
{"1":"1200000000","3":"1111111111","7":"1400000000"}
```
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/im/last-time
##### JSON返回示例:
```
{
  "status": 200
}
```
---
### 获取聊天时病历选择列表
##### 接口地址：http://域名/api/im/records
##### 请求方法：GET
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| patientId/doctorId| number|是 |公众端传doctorId，在医生端则传patientId|
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/im/records?patientId=1
##### JSON返回示例:
```
{
  "status": 200,
  "data": [
    {
      "patient_id": 11,
      "name": "大明",
      "relation": "本人",
      "gender": 1,
      "birthday": "1991-01",
      "province": "广东",
      "city": "广州",
      "address": "天河",
      "identity_number": "111111111111111111",
      "patient_name": "大明",
      "age": 24,
      "medicalRecordId": 1,
      "appointment_id": [
        1,
        25
      ]
    },
    {
      "patient_id": 11,
      "name": "明爸",
      "relation": "父亲",
      "gender": 2,
      "birthday": "1960-01",
      "province": "广东",
      "city": "惠州",
      "address": "dfdojejrid",
      "identity_number": "111111111111111111",
      "patient_name": "大明",
      "age": 55,
      "medicalRecordId": 2,
      "appointment_id": [
        27
      ]
    }
  ]
}
```
---
### 获取就诊是否完成的状态信息
##### 接口地址：http://域名/api/im/finish-stat
##### 请求方法：GET
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| appointmentId| number|是 |预约就诊的id|
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/im/finish-stat?appointmentId=1
##### JSON返回示例:
```
{
  "status": 200,
  "data": "doing"(doing表示就诊未结束，finish表示已结束)
}
```
---
### 获取头像
##### 接口地址：http://域名/api/im/avatar
##### 请求方法：GET
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| voipAccount | string|否 | voipAccount(两个参数只传其一即可) |
| phone | string|否 | 电话号码(两个参数只传其一即可)  |
##### 请求示例:
`http://zhaoyang.dev.ganguo.hk:8088/api/im/avatar?voipAccount=18797700000001`
`http://zhaoyang.dev.ganguo.hk:8088/api/im/avatar?phone=13800138000&voipAccount=18797700000001`
##### JSON返回示例:
```
{
  "status": 200,
  "data": {
    "avatar": "https://trello-avatars.s3.amazonaws.com/eb8345770e0fd6183d370fc3e2b1f1d3/30.png",
    "name": "大明"
  }
}
```