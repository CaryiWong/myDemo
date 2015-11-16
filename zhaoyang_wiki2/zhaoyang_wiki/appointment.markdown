## 用户预约模块API   
> [获取所有医生列表(ok)](#获取所有医生列表)   
> [收藏某位医生(ok)](#收藏某位医生)  
> [取消收藏某位医生(ok)](#取消收藏某位医生)  
> [用户收藏列表(ok)](#用户收藏列表)   
> [发布紧急咨询](#发布紧急咨询)    
> [预约某位医生(ok)](#预约某位医生)   
> [用户预约列表(ok)](#用户预约列表)   
> [用户取消预约(ok)](#用户取消预约)   

## 医生预约模块API
> [医生预约列表(ok)](#医生预约列表)   
> [医生取消预约(ok)](#医生取消预约)   
> [医生把预约变为就诊(ok)](#医生把预约变为就诊)    
> [医生提醒病人答题(ok)](#医生提醒病人答题)    

## 用户就诊模块API
> [用户进行中就诊列表(ok)](#用户进行中就诊列表)   
> [用户已完成就诊列表(ok)](#用户已完成就诊列表)      
> [就诊完评价医生(ok)](#就诊完评价医生)   

## 医生就诊模块API
> [医生进行中就诊列表(ok)](#医生进行中就诊列表)   
> [医生已完成就诊列表(ok)](#医生已完成就诊列表)         
> [就诊完评价用户(ok)](#就诊完评价用户)   
> [查看病历历史记录(ok)](#查看病历历史记录)   
>  

---
### 收藏某位医生
##### 接口地址：http://域名/api/appointment/collect
##### 请求方法：POST   
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| doctorId   | string|是 |欲收藏的医生id|
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/appointment/collect
##### JSON返回示例：
```
{
    status: 200
}
```
---
### 取消收藏某位医生
##### 接口地址：http://域名/api/appointment/un-collect
##### 请求方法：POST   
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| doctorId   | string|是 |取消收藏的医生id|
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/appointment/un-collect
##### JSON返回示例：
```
{
    status: 200
}
```
---
### 用户收藏列表
##### 接口地址：http://域名/api/appointment/collectionList
##### 请求方法：GET   
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| page   | number|否 |页数|
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/appointment/collectionList?page=1
##### JSON返回示例：
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
        "doctor": {
          "id": 5,
          "name": "医生5",
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
          "phone": "15917748284"
        }
      },
      {
        "doctor": {
          "id": 3,
          "name": "医生3",
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
          "phone": "15917748282"
        }
      }
    ]
  }
}
```
---
### 获取所有医生列表
##### 接口地址：http://域名/api/appointment/allDoctor/
##### 请求方法：GET
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| sortBy  | string|否 |排序的字段(只能为point或者distance,默认是point)|
| sort    | string|否 |排序方法(只能为asc或desc,默认是desc)|
| province| string|否 |用户所在省份/筛选的省份(客户端拿不到定位数据则可以不传)|
| page    | string|否 |页数(默认是1)|
| lng     | string|否 |用户所在位置的经度(客户端拿不到定位数据则可以不传)|
| lat     | string|否 |用户所在位置的纬度(客户端拿不到定位数据则可以不传)|
| search  | string|否 |搜索关键字|
| gender  | number|否 |性别(不限的话,传0或不传也行.正常传1或2)|
| title   | array |否 |[1,2,3,4,5]的子集(职称对应的数字见本文档最上面的定义)|
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/appointment/allDoctor/?sortBy=point&sort=desc&province=广东&page=1&lng=113.365165&lat=23.089279
##### JSON返回示例:
```
{
	"status": 200,
	"data": {
	"list": [
		{
			"doctor_id": 10,
			"doctor_name": "医生10",
			"level": "高级认证",
			"hospital_id": 2,
			"avatar": "http://p.3761.com/pic/71271413852950.jpg",
			"detail": "",
			"money": 100,
			"title": "",
			"specialist": "精神科",
			"point": 5,
			"hospital_name": "民航广州医院"
		},
		{
			"doctor_id": 8,
			"doctor_name": "医生8",
			"level": "高级认证",
			"hospital_id": 1,
			"avatar": "http://p.3761.com/pic/71271413852950.jpg",
			"detail": "",
			"money": 100,
			"title": "",
			"specialist": "精神科",
			"point": 5,
			"hospital_name": "广州市脑科医院"
		}
	],
	"total": 9,
	"totalPage": 2
	}
}
```
---
### 预约某位医生
##### 接口地址：http://域名/api/appointment/appointment
##### 请求方法：POST
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| doctorId| string|是 |预约的医生id|
| bookTime| string|是 |预约时间(时间戳)|
| type   | string|是 |诊断类型(1网诊 2面诊)|
| recordId| string|是 |病历id|
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/appointment/appointment
##### JSON返回示例:
```
{
  "status": 200,
  "data": {
    "id": 33,
    "type": "网诊",
    "book_time": "2015-11-09 20:00－20:30",
    "money": 100,
    "status": 1,
    "cancel_reason": "",
    "has_pay": 0,
    "progress": "0/0",
    "doctor": {
      "id": 1,
      "name": "新医生",
      "email": "waymen@ganguo.hk",
      "level": "基本认证",
      "gender": 1,
      "birthday": "",
      "city": "广州",
      "hospital_id": 8,
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
      "hospital_name": "新私人诊所",
      "voipAccount": "88797700000028",
      "phone": "15917748280"
    }
  }
}
```
---
### 用户预约列表
##### 接口地址：http://域名/api/appointment/pAppointList
##### 请求方法：GET
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
|page | number|否 |页数|
##### 请求参数:
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/appointment/pAppointList?page=1
##### JSON返回示例:
```
{
  "status": 200,
  "data": {
    "total": 4,
    "per_page": 20,
    "current_page": 1,
    "last_page": 1,
    "next_page_url": null,
    "prev_page_url": null,
    "from": 1,
    "to": 4,
    "data": [
      {
        "id": 3,
        "type": "网诊",
        "book_time": "2015-11-09 21:00－21:30",
        "money": 100,
        "status": 1,
        "cancel_reason": "",
        "has_pay": 0,
        "progress": "0/0",
        "doctor": {
          "id": 2,
          "name": "医生2",
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
          "point": 5,
          "hospital_name": "广州市脑科医院",
          "voipAccount": "88797700000029",
          "phone": "15917748281"
        }
      }
    ]
  }
}
```
---
### 用户进行中就诊列表
##### 接口地址：http://域名/api/appointment/pDoingList/
##### 请求方法：GET
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
|page | number|否 |页数|
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/appointment/pDoingList?page=1
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
        "id": 1,
        "record_id": 1,
        "type": "网诊",
        "book_time": "2015-11-09 20:00－20:30",
        "status": 2,
        "progress": "0/18",
        "doctor": {
          "id": 1,
          "name": "医生1",
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
          "point": 5,
          "hospital_name": "广州市脑科医院",
          "voipAccount": "",
          "phone": "15917748280"
        },
        "medical_record": {
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
          "medicalRecordId": 1
        }
      }
    ]
  }
}
```
---
### 用户已完成就诊列表
##### 接口地址：http://域名/api/appointment/pFinishList
##### 请求方法：GET
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
|page | number|否 |页数|
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/appointment/pFinishList?page=1
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
        "id": 1,
        "record_id": 1,
        "type": "网诊",
        "money": 100,
        "book_time": "2015-11-09 20:00－20:30",
        "status": 2,
        "doctor_point": 0,(该字段为0时说明未评价医生)
        "progress": "0/0",
        "return_info": {
          "need_return": 1,(需要复诊时为1)
          "return_paid": 0,(复诊未支付该字段为0 已支付为1)
          "return_appointment_id": 0(复诊的那个预约的id)
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
        },
        "medical_record": {
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
          "medicalRecordId": 1
        }
      },
      {
        "id": 6,
        "record_id": 1,
        "type": "网诊",
        "money": 100,
        "book_time": "2015-11-09 21:00－21:30",
        "status": 2,
        "doctor_point": 0,
        "progress": "0/0",
        "return_info": null,（这里没信息代表不需要复诊）
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
        },
        "medical_record": {
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
          "medicalRecordId": 1
        }
      }
    ]
  }
}
```
---
### 就诊完评价医生
##### 接口地址：http://域名/api/appointment/evaluate-doctor
##### 请求方法：POST
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| point| string|是 |对医生的评分(评分项算好的平均数传过来)|
| appoinementId| string|是 |预约单id|
| detail| json|是 |评分详细,类似 {"\u5b88\u65f6":5,"\u4e13\u4e1a":5,"\u6001\u5ea6":5}|
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/appointment/evaluate-doctor
##### JSON返回示例:
```
{
  "status": 200
}
```
---
### 医生预约列表
##### 接口地址：http://域名/api/appointment/dAppointList
##### 请求方法：GET
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| page   | number|否 |页数|
| paid   | number|否 |0未付款 1已付款(不传该字段默认是1)|
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/appointment/dAppointList?paid=1&page=1
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
        "id": 25,
        "record_id": 1,
        "patient_name": "大明",
        "type": "网诊",
        "book_time": "2015-08-21 18:02－18:32",
        "status": 1,
        "has_pay": 1,
        "progress": "0/0",
        "medical_record": {
          "patient_id": 11,
          "name": "大明",
          "relation": "本人",
          "gender": 1,
          "birthday": "1991-01",
          "city": "广州",
          "province": "广东",
          "address": "天河",
          "identity_number": "111111111111111111",
          "patient_name": "大明",
          "age": 24,
          "medicalRecordId": 1
        }
      },
      {
        "id": 29,
        "record_id": 1,
        "patient_name": "大明",
        "type": "网诊",
        "book_time": "2015-08-21 18:08－18:38",
        "status": 1,
        "has_pay": 1,
        "progress": "0/18",
        "medical_record": {
          "patient_id": 11,
          "name": "大明",
          "relation": "本人",
          "gender": 1,
          "birthday": "1991-01",
          "city": "广州",
          "province": "广东",
          "address": "天河",
          "identity_number": "111111111111111111",
          "patient_name": "大明",
          "age": 24,
          "medicalRecordId": 1
        }
      }
    ]
  }
}
```
---
### 医生取消预约
##### 接口地址：http://域名/api/appointment/doctor-cancel
##### 请求方法：POST
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| appointmentId| string|是 |预约单id|
| reason  | string|是 |取消原因|
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/appointment/doctor-cancel/
##### JSON返回示例:
```
{
  "status": 200
}
```
---
### 医生提醒病人答题
##### 接口地址：http://域名/api/appointment/remind-answer
##### 请求方法：POST
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| appointmentId | int | 是 |预约单id|
| patientId  | int | 是 |病人ID|
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/appointment/remind-answer
##### JSON返回示例:
```
{
  "status": 200
}
```

---
### 医生进行中就诊列表
##### 接口地址：http://域名/api/appointment/dDoingList
##### 请求方法：GET
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| page   | number|否 |页数|
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/appointment/dDoingList?page=1
##### JSON返回示例:
```
{
  "status": 200,
  "data": {
    "total": 1,
    "per_page": 20,
    "current_page": 1,
    "last_page": 1,
    "next_page_url": null,
    "prev_page_url": null,
    "from": 1,
    "to": 1,
    "data": [
      {
        "id": 27,
        "record_id": 1,
        "patient_name": "大明",
        "voipAccount": "88797700000050",
        "phone": "15918748284",
        "avatar": "https://trello-avatars.s3.amazonaws.com/eb8345770e0fd6183d370fc3e2b1f1d3/30.png",
        "type": "网诊",
        "book_time": "2015-11-12 03:33－04:03",
        "status": 2,
        "progress": "0/18",
        "medical_record": {
          "patient_id": 11,
          "name": "大明",
          "relation": "本人",
          "gender": 1,
          "birthday": "1991-01",
          "city": "广州",
          "province": "广东",
          "address": "天河",
          "identity_number": "111111111111111111",
          "patient_name": "大明",
          "age": 24,
          "medicalRecordId": 1
        }
      }
    ]
  }
}
```
--
### 医生已完成就诊列表
##### 接口地址：http://域名/api/appointment/dFinishList
##### 请求方法：GET
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| page   | number|否 |页数|
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/appointment/dFinishList?page=1
##### JSON返回示例:
```
{
  "status": 200,
  "data": {
    "total": 1,
    "per_page": 20,
    "current_page": 1,
    "last_page": 1,
    "next_page_url": null,
    "prev_page_url": null,
    "from": 1,
    "to": 1,
    "data": [
      {
        "id": 1,
        "record_id": 1,
        "patient_name": "大明",
        "voipAccount": "88797700000050",
        "phone": "15918748284",
        "avatar": "https://trello-avatars.s3.amazonaws.com/eb8345770e0fd6183d370fc3e2b1f1d3/30.png",
        "type": "网诊",
        "money": 100,
        "book_time": "2015-11-09 20:00－20:30",
        "status": 2,
        "is_finish": 1,
        "patient_point": 1,
        "progress": "0/0",
        "medical_record": {
          "patient_id": 11,
          "name": "大明",
          "relation": "本人",
          "gender": 1,
          "birthday": "1991-01",
          "city": "广州",
          "province": "广东",
          "address": "天河",
          "identity_number": "111111111111111111",
          "patient_name": "大明",
          "age": 24,
          "medicalRecordId": 1
        }
      }
    ]
  }
}
```
---
### 就诊完评价用户
##### 接口地址：http://域名/api/appointment/evaluate-patient
##### 请求方法：POST
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| point| string|是 |对用户的评分(评分项算好的平均数传过来)|
| appointmentId | number|是 |预约单id|
| detail | json|是 |评分详细,类似 {"\u5b88\u65f6":5,"\u4e13\u4e1a":5,"\u6001\u5ea6":5}|
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/appointment/evaluate-patient
##### JSON返回示例:
```
{
  "status": 200
}
```
---
### 医生把预约变为就诊
##### 接口地址：http://域名/api/appointment/doing
##### 请求方法：POST
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| appointmentId| number|是 |预约单id|
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/appointment/doing
##### JSON返回示例:
```
{
  "status": 200
}
```
---
### 用户取消预约
##### 接口地址：http://域名/api/appointment/patient-cancel
##### 请求方法：POST
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| appointmentId| number|是 |预约单id|
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/appointment/patient-cancel
##### JSON返回示例:
```
{
  "status": 200
}
```
### 查看病历历史记录
##### 接口地址：http://域名/api/appointment/record-histories
##### 请求方法：GET
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| recordId| number|是 |病历Id|
| page   | number|否 |页数|
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/appointment/record-histories?recordId=1&page=1
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
        "progress": "0/0",
        "return_info": [],
        "doctor": {
          "id": 1,
          "name": "新医生",
          "email": "waymen@ganguo.hk",
          "level": "基本认证",
          "gender": 1,
          "birthday": "",
          "city": "广州",
          "hospital_id": 8,
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
          "hospital_name": "",
          "voipAccount": "88797700000028",
          "phone": "15917748280"
        }
      }
    ]
  }
}
```