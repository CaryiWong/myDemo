## 时间设置模块API
> [时间week计算方法(ok)](#时间week计算方法)   
> [时间type(ok)](#时间type)    
> [设置时间(ok)](#设置时间)    
> [获取时间列表(ok)](#获取时间列表)    
> [修改设置时间(ok)](#修改设置时间)    
> [删除设置时间(ok)](#删除设置时间)    
> [获取医生某天可预约列表(ok)](#获取医生某天可预约列表)    
> [获取医生预约月列表(ok)](#获取医生预约月列表)    
> [获取转诊医生医生预约日期列表](#获取转诊医生医生预约日期列表)    

---
### 时间week计算方法
|周一|周二|周三|周四|周五|周六|周日|
|:--:|:--:|:--:|:--:|:--:|:--:|:--:|
| 1 | 2 | 4 | 8 | 16 | 32 | 64 |
```
  示例 选择周二， 周四，周六
  week = 2 + 8 + 32 = 42;
```
---
### 时间type
|免打扰|面诊|网诊|
|:---:|:--:|:--:|
|  1  |  2  |  3  |
### 设置时间
##### 接口地址：http://域名/api/time/settime
##### 请求方法：POST
##### 请求参数：
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| week    | int   |是 |二进制的值|
| type    | int   |是 |int型参考时间type定义|
| from    | string|是 |类似21:03:52|
| to      | string|是 |类似23:17:00|
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/time/settime
##### JSON返回示例:
```
{
    "status": 200,
    "message": "set success",
    "data": {
        "doctor_id": 1,
        "week": "16",
        "type": "1",
        "from": "10:00:00",
        "to": "23:00:00",
        "updated_at": "2015-08-10 17:49:58",
        "created_at": "2015-08-10 17:49:58",
        "id": 9
    }
}
or
{
    "status": 40002,
    "message": "time conflict",
    "data": {
        "id": 8,
        "doctor_id": 1,
        "week": 9,
        "type": 2,
        "from": "10:00:00",
        "to": "23:00:00",
        "created_at": "2015-08-10 15:13:06",
        "updated_at": "2015-08-10 15:13:06"
    }
}
```
---
### 获取时间列表
##### 接口地址：http://域名/api/time/gettime
##### 请求方法：POST
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:--------:|
| type    | int   |否 |获取不同时间列表，不传值默认获取设置的所有时间, 传值为4的时候获取网诊时间和面诊时间列表|
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/time/gettime
##### JSON返回示例:
```
{
    "status": 200,
    "message": "time list",
    "date": [
        {
            "id": 7,
            "doctor_id": 1,
            "week": 1,
            "type": 2,
            "from": "5:00:00",
            "to": "6:00:00",
            "created_at": "2015-08-10 15:06:07",
            "updated_at": "2015-08-10 15:06:07"
        },
        {
            "id": 1,
            "doctor_id": 1,
            "week": 1,
            "type": 2,
            "from": "7:00:00",
            "to": "8:00:00",
            "created_at": "2015-08-10 14:14:54",
            "updated_at": "2015-08-10 14:14:54"
        },
        ......
    ]
}
or
type传值4
{
    "status": 200,
    "message": "time list",
    "date": {
        //面诊,取数据时要先判断此数据是否存在
        "2": [
            {
                "id": 3,
                "doctor_id": 1,
                "week": 4,
                "type": 2,
                "from": "7:00:00",
                "to": "8:00:00",
                "created_at": "2015-08-11 14:46:29",
                "updated_at": "2015-08-11 14:46:29"
            },
            ...
            {
                "id": 6,
                "doctor_id": 1,
                "week": 16,
                "type": 2,
                "from": "7:05:00",
                "to": "10:06:00",
                "created_at": "2015-08-11 14:47:44",
                "updated_at": "2015-08-11 14:47:44"
            }
        ],
        //网诊,取数据时要先判断此数据是否存在
        "3": [
            {
                "id": 1,
                "doctor_id": 1,
                "week": 1,
                "type": 3,
                "from": "7:00:00",
                "to": "8:00:00",
                "created_at": "2015-08-11 14:45:26",
                "updated_at": "2015-08-11 14:45:26"
            },
            ...
            {
                "id": 7,
                "doctor_id": 1,
                "week": 32,
                "type": 3,
                "from": "10:04:00",
                "to": "22:09:00",
                "created_at": "2015-08-11 14:49:29",
                "updated_at": "2015-08-11 14:49:29"
            }
        ]
    }
}
```
---
### 修改设置时间
##### 接口地址：http://域名/api/time/update-time
##### 请求方法：POST
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| id    | int   |是 |删除时间的id|
| week    | int   |是 |二进制的值|
| type    | int   |是 |int型参考时间type定义|
| from    | string|是 |类似21:03:52|
| to      | string|是 |类似23:17:00|
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/time/update-time
##### JSON返回示例:
```
{
    "status": 200,
    "data": {
        "id": 2,
        "doctor_id": 3,
        "week": 3,
        "type": 2,
        "from": "8:14:20",
        "to": "9:15:11",
        "created_at": "2015-09-10 10:39:29",
        "updated_at": "2015-09-24 13:57:41"
    }
}
```
---
### 删除设置时间
##### 接口地址：http://域名/api/time/deltime
##### 请求方法：POST
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| id    | int   |是 |删除时间的id|
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/time/deltime
##### JSON返回示例:
```
{
    "status": 200,
    "message": "del success"
}
or
{
    "status": 40007,
    "message": "time deleted"
}
```
---
### 获取医生某天可预约列表
##### 接口地址：http://域名/api/time/getdatalist
##### 请求方法：POST
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| doctorId| int   |是| 医生id |
| data    | string|是 |类似2015-08-10|
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/time/getdatalist
##### JSON返回示例:
```
{
    "status": 200,
    "message": "data list",
    "date": [
        {
            "from": "05:00:00",
            "to": "05:30:00",
            "type": 2,
            "reserva": 0,
            "optional": 0
        },
        {
            "from": "05:30:00",
            "to": "06:00:00",
            "type": 2,
            "reserva": 0,
            "optional": 0
        },
        ......
    ]
}
```
---
### 获取医生预约月列表
##### 接口地址：http://域名/api/time/getresrvedate
##### 请求方法：POST
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| doctorId| int  | 是 | 医生id|
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/time/getresrvedate
##### JSON返回示例:
```
{
    "status": 200,
    "message": "month list",
    "data": [
        {
            "optional": 1,
            "face": 1,
            "net": 0,
            "data": "2015-08-12",
            "week": 3
        },
        {
            "data": "2015-08-13",
            "week": 4,
            "optional": 0,
            "face": 0,
            "net": 0
        },
        ...
        {
            "optional": 1,
            "face": 1,
            "net": 0,
            "data": "2015-09-11",
            "week": 5
        }
    ]
}
```
### 获取转诊医生医生预约日期列表
##### 接口地址：http://域名/api/time/getresrvedate
##### 请求方法：POST
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| doctorId| int  | 是 | 转诊目标医生id|
| is_referral| int | 是 | 传值必须是1|
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/time/getresrvedate
##### JSON返回示例:
```
{
    "status": 200,
    "message": "month list",
    "data": [
        {
            "optional": 1,
            "face": 1,
            "net": 0,
            "data": "2015-08-12",
            "week": 3
        },
        {
            "data": "2015-08-13",
            "week": 4,
            "optional": 0,
            "face": 0,
            "net": 0
        },
        ...
        {
            "optional": 1,
            "face": 1,
            "net": 0,
            "data": "2015-09-11",
            "week": 5
        }
    ]
}
```