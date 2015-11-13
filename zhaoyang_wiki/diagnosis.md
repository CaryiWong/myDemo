##  医生诊断模块API
> [填写诊断信息(ok)](#填写诊断信息)    
> [医生会诊列表(ok)](#医生会诊列表)    
> [医生接受会诊(ok)](#医生接受会诊)    
> [医生拒绝会诊(ok)](#医生拒绝会诊)    
> [历史转诊医生列表(ok)](#历史转诊医生列表)    
> [转诊时搜索医生列表(ok)](#转诊时搜索医生结果列表)    
> [获取诊断信息(ok)](#获取诊断信息)    

---
### 填写诊断信息
##### 接口地址：http://域名/api/diagnosis/set-diagnosis
##### 请求方法：POST
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| appointmentId | int | 是 | 预约表ID |
| is_diagnosis | int | 是 | 是否已完成诊断(传值为1) |
| perception | json | 是 | 知觉 类似{"1":"1", "2":"1", "3":"0"} |
| thinking | json | 是 | 思维 同上 |
| pipedream | json | 是 | 妄想 同上 |
| emotion | json | 是 | 情感 同上 |
| memory | json | 是 | 记忆 同上 |
| insight | json | 是 | 自知力 同上 |
| description | string | 否 | 描述 |
| diagnosis_record | string | 否 | 医生对诊断记录 |
| current_status | int | 是 | 目前状况 |
| recovered | int | 是 | 康复情况 |
| treatment | int | 否 | 治疗情况 |
| effect | int | 否 | 副作用 |
| prescription | string | 否 | 建议用药 类似[{"1":"1", "2":"1", "3":"0"},{}] |
| doctor_advince | string | 否 | 医嘱(默认"坚持服药，定期复诊") |
| return | int | 是 | 是否需要复诊(传值0,1) |
| returnType | int | 复诊时必传 | 复诊类型(传值1,2,3)(1.复诊 2.面诊 3.转诊) |
| returnTime | int | 复诊时必传 | 复诊时间戳 |
| recordId | int | 复诊时必传 | 病例ID |
| money | int | 复诊时必传 | 复诊金额 |
| doctorRequire | int | 转诊时必传 | 转诊医生ID |
| comment | string | 否 | 面诊\转诊要求和描述 |
##### 部分参数定义:
```
参数名: perception
格式: {"otherContent":"","3":0,"4":0,"0":1,"5":0,"1":0,"2":0}
key对应关系
    0=>无            (value值含义: 0无勾选此项, 1此项勾选)
    1=>幻听           (value值含义: 0无勾选此项, 1此项勾选)
    2=>幻视           (value值含义: 0无勾选此项, 1此项勾选)
    3=>幻嗅           (value值含义: 0无勾选此项, 1此项勾选)
    4=>幻触           (value值含义: 0无勾选此项, 1此项勾选)
    5=>感知综合障碍    (value值含义: 0无勾选此项, 1此项勾选)
    otherContent=>其它(用户填写信息)
参数名: thinking
格式: {"otherContent":"","3":0,"4":0,"0":1,"5":0,"1":0,"2":0}
key对应关系
    0=>无          (value值含义: 0无勾选此项, 1此项勾选)
    1=>奔逸        (value值含义: 0无勾选此项, 1此项勾选)
    2=>迟缓        (value值含义: 0无勾选此项, 1此项勾选)
    3=>散漫        (value值含义: 0无勾选此项, 1此项勾选)
    4=>破裂        (value值含义: 0无勾选此项, 1此项勾选)
    5=>逻辑障碍     (value值含义: 0无勾选此项, 1此项勾选)
    otherContent=>其它(用户填写信息)
参数名: pipedream
格式: {"otherContent":"","3":0,"4":0,"0":1,"5":0,"1":0,"2":0}
key对应关系
    0=>无         (value值含义: 0无勾选此项, 1此项勾选)
    1=>被害       (value值含义: 0无勾选此项, 1此项勾选)
    2=>夸大       (value值含义: 0无勾选此项, 1此项勾选)
    3=>关系       (value值含义: 0无勾选此项, 1此项勾选)
    4=>嫉妒       (value值含义: 0无勾选此项, 1此项勾选)
    5=>思维被洞悉  (value值含义: 0无勾选此项, 1此项勾选)
    otherContent=>其它(用户填写信息)
参数名: emotion
格式: {"otherContent":"","3":0,"4":0,"0":1,"5":0,"1":0,"2":0}
key对应关系
    0=>正常       (value值含义: 0无勾选此项, 1此项勾选)
    1=>高涨       (value值含义: 0无勾选此项, 1此项勾选)
    2=>低落       (value值含义: 0无勾选此项, 1此项勾选)
    3=>易激惹     (value值含义: 0无勾选此项, 1此项勾选)
    4=>焦虑       (value值含义: 0无勾选此项, 1此项勾选)
    5=>淡漠       (value值含义: 0无勾选此项, 1此项勾选)
    otherContent=>其它(用户填写信息)
参数名: memory
格式: {"1":0,"otherContent":"","2":0,"0":1}
key对应关系
    0=>正常       (value值含义: 0无勾选此项, 1此项勾选)
    1=>增强       (value值含义: 0无勾选此项, 1此项勾选)
    2=>减退       (value值含义: 0无勾选此项, 1此项勾选)
    otherContent=>其它(用户填写信息)
参数名: insight
格式: {"1":0,"otherContent":"哈哈哈","2":0,"0":1}
key对应关系
    0=>存在       (value值含义: 0无勾选此项, 1此项勾选)
    1=>部分       (value值含义: 0无勾选此项, 1此项勾选)
    2=>无         (value值含义: 0无勾选此项, 1此项勾选)
    otherContent=>其它(用户填写信息)
```
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/diagnosis/set-diagnosis
##### JSON返回示例:
```
{
    "status": 200,
    "message": "add success"
}
```
---
### 医生会诊列表
##### 接口地址：http://域名/api/diagnosis/return-list
##### 请求方法：GET
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| page | int | 否 | 分页请求列表数据, 默认请求第一页数据 |
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/diagnosis/return-list
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
                "return_list_id": 1,
                "patient_name": "fim",
                "return_list_time": "2015-09-28 12:46:15",
                "appointment_id": 1,
                "money": 100,
                "record_id": 1,
                "name": "fim",
                "relation": "本人",
                "gender": 1,
                "birthday": "1990-07"
            },
            {
                "return_list_id": 3,
                "patient_name": "fim",
                "return_list_time": "2015-09-29 11:06:28",
                "appointment_id": 2,
                "money": 200,
                "record_id": 1,
                "name": "fim",
                "relation": "本人",
                "gender": 1,
                "birthday": "1990-07"
            },
            ......
        ]
    }
}
```
---
### 医生接受会诊
##### 接口地址：http://域名/api/diagnosis/accept-return
##### 请求方法：POST
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| id | int | 是 | 转诊ID |
| recordId | int | 是 | 病例ID |
| money | int | 是 | 转诊金额 |
| appointmentId | int | 是 | 转诊前的预约单id |
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/diagnosis/accept-return
##### JSON返回示例:
```
{
    "status": 200,
    "message": "success"
}
```
---
### 医生拒绝会诊
##### 接口地址：http://域名/api/diagnosis/refuse-return
##### 请求方法：POST
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| id | int | 是 | 会诊列表里的会诊ID |
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/diagnosis/refuse-return
##### JSON返回示例:
```
{
    "status": 200
}
```
---
### 历史转诊医生列表
##### 接口地址：http://域名/api/diagnosis/doctors
##### 请求方法：GET
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/diagnosis/doctors/?page=1
##### JSON返回示例:
```
{
    "status": 200,
    "message": "list",
    "data": [
        {
            "id": 4,
            "name": "医生4",
            "level": "基本认证",
            "hospital_id": 1,
            "avatar": "http://p.3761.com/pic/71271413852950.jpg",
            "detail": "",
            "money": 100,
            "title": "主任医师",
            "specialist": "精神科",
            "point": 5,
            "hospital_name": "广州市脑科医院",
            "voipAccount": "",
            "phone": "15917748283"
        },
        {
            "id": 7,
            "name": "医生7",
            "level": "基本认证",
            "hospital_id": 1,
            "avatar": "http://p.3761.com/pic/71271413852950.jpg",
            "detail": "",
            "money": 100,
            "title": "主任医师",
            "specialist": "精神科",
            "point": 5,
            "hospital_name": "广州市脑科医院",
            "voipAccount": "",
            "phone": "15917748286"
        },
        ......
    ]
}
or
//无历史转诊医生情况
{
    "status": 200,
    "message": "list",
    "data": []
}
```
---
### 转诊时搜索医生结果列表
##### 接口地址：http://域名/api/diagnosis/search-doctors
##### 请求方法：GET
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| page| number|否 |页数|
| search| string|是|搜索关键字|
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/diagnosis/search-doctors/?search=华佗
##### JSON返回示例:
```
{
  "status": 200,
  "data": {
    "total": 10,
    "per_page": 20,
    "current_page": 1,
    "last_page": 1,
    "next_page_url": null,
    "prev_page_url": null,
    "from": 1,
    "to": 10,
    "data": [
      {
        "id": 1,
        "name": "新医生",
        "level": "基本认证",
        "hospital_id": 8,
        "avatar": "http://p.3761.com/pic/71271413852950.jpg",
        "detail": "",
        "money": 100,
        "title": "主任医师",
        "specialist": "妇科",
        "point": 0,
        "hospital_name": "新私人诊所",
        "voipAccount": "88797700000028",
        "phone": "15917748280"
      },
      {
        "id": 2,
        "name": "医生2",
        "level": "基本认证",
        "hospital_id": 1,
        "avatar": "http://p.3761.com/pic/71271413852950.jpg",
        "detail": "",
        "money": 100,
        "title": "主任医师",
        "specialist": "精神科",
        "point": 5,
        "hospital_name": "广州市脑科医院",
        "voipAccount": "88797700000029",
        "phone": "15917748281"
      }
    ]
  }
}
```
---
### 获取诊断信息
##### 接口地址：http://域名/api/diagnosis/diagnosis-info
##### 请求方法：GET
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| appointmentId | int |是 | 预约单ID |
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/diagnosis/diagnosis-info/?appointmentId=1
##### JSON返回示例:
```
//没有诊断记录的情况
{
    "status": 200,
    "message": "no diagnosis"
}
or
//有诊断记录的情况
{
    "status": 200,
    "message": "diagnosis info",
    "data": {
        "id": 1,
        "doctor_id": 3,  //诊断医生ID
        "appointment_id": 1,  //预约单ID
        "is_diagnosis": 1,  //是否诊断
        "perception": {
            "1": "1",
            "2": "1",
            "3": "0"
        },
        "thinking": {
            "1": "1",
            "2": "1",
            "3": "0"
        },
        "pipedream": {
            "1": "1",
            "2": "1",
            "3": "0"
        },
        "emotion": {
            "1": "1",
            "2": "1",
            "3": "0"
        },
        "memory": {
            "1": "1",
            "2": "1",
            "3": "0"
        },
        "insight": {
            "1": "1",
            "2": "1",
            "3": "0"
        },
        "description": "哈哈哈哈哈哈哈",
        "diagnosis_record": "我是医生的描述",
        "current_status": 2,
        "recovered": 3,
        "treatment": 0,
        "effect": 0,
        "prescription": {
            "2": "1",
            "3": "0",
            "药量": "1"
        },
        "doctor_advince": "我是医嘱",
        "return": 1,
        "return_type": 1,
        "return_paid": 0,
        "is_accept": 1,
        "return_time": 1441253660,   //复诊时间戳
        "money": 231,
        "return_appointment_id": 2,
        "doctor_require": 3,
        "comment": "哈哈",
        "status": 1,          //复诊单有效状态
        "has_pay": 0,          //复诊单支付状态
        "date": "2015-09-03",    //复诊日期
        "time": "12:14-12:44",    //复诊时间区段 
        //若有转诊医生，则有doctor_info字段及值；否则没有
        "doctor_info": {
            "id": 1,
            "name": "医生1",
            "level": "基本认证",
            "hospital_id": 1,
            "avatar": "http://p.3761.com/pic/71271413852950.jpg",
            "detail": "",
            "money": 100,
            "title": "主任医师",
            "specialist": "精神科",
            "point": 5,
            "hospital_name": "广州市脑科医院",
            "voipAccount": "",
            "phone": "15917748280"
        }
    }
}
```
---