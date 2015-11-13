# 昭阳医生API接口列表（更新ing）
**注意:**

##### 所有API返回的内容里都有`status`。 没问题时, `status`值为`200`,不返回`message`; 有问题时, `status`值为相应的[错误状态码](Error_Code), `message `为简单错误提示信息
#### 注册与登录成功时，会返回一个token.除登录注册的api外,都需将token放到header传过来
##### 内网访问接口的IP地址 192.168.199.155 
### 用户类型定义
```
1    普通用户
2    医生
```
### 性别定义：
```
1    男
2    女
```
### 医生认证级别定义：
```
0    未认证
1    基本认证
2    高级认证
```
### 职称定义：
```
1   主任医师
2   副主任医师
3   主治医师
4   心理咨询师三级
5   心理咨询师二级
```
### 诊断类型定义：
```
1    网诊
2    面诊
```
### 预约就诊列表里status的定义：
```
0    关闭／过时状态
1    预约状态
2    就诊状态
```
---
#### [基础模块API](tool)
#### [登录注册模块API](auth)
#### [个人模块API](profile)
#### [预约就诊模块API](appointment)
#### [时间模块API](time)
#### [问题问卷模块](question)
#### [聊天模块API](im)
#### [诊断模块API](diagnosis)
#### [推送模块API](push-message)
---

## 紧急咨询模块API
> [发布紧急咨询(ok)](#发布紧急咨询)   
> [用户紧急咨询信息列表(ok)](#用户紧急咨询信息列表)   
> [增加紧急咨询时间(ok)](#增加紧急咨询时间)   
> [医生紧急咨询信息列表(ok)](#医生紧急咨询信息列表)   
> [医生接受紧急咨询(ok)](#医生接受紧急咨询)   
> [用户取消紧急咨询(ok)](#用户取消紧急咨询)   
> [增加紧急咨询诊金(ok)](#增加紧急咨询诊金)    

## 模拟支付(不走支付宝)
> [支付紧急咨询(ok)](#支付紧急咨询)   
> [支付预约单(ok)](#支付预约单)   

## 支付前获取参数
> [支付前获取参数(ok)](#支付前获取参数)   

---
### 发布紧急咨询
##### 接口地址：http://域名/api/urgent/publish
##### 请求方法：POST
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| recordId| string|是 |病历id|
| title   | Array|否 |[1,2,3,4,5]的子集(职称对应的数字见本文档最上面的定义)不传该字段默认为不限|
| city    | string|否 |欲搜索医生所在医院城市(不限=='all')不传该字段默认为'all'|
| gender  | number|否 |性别（传0或不传该字段为不限 1男 2女）|
| money   | number|是 |愿意支付的费用|
| waitTime| string|是 |等待时间(秒)|
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/urgent/publish
##### JSON返回示例：
```
{
  "status": 200,
  "data": {
    "id": 39,(紧急咨询单id)
    "record_id": 1,
    "search_title": "不限",
    "search_city": "不限",
    "search_gender": "不限",
    "waiting_time": 36000,(愿意等待的时间)
    "money": 2000,(愿意给的诊金)
    "add_money": 0,(增加的诊金，这里肯定为0)
    "created_at": "2015-09-01 15:42:14",(发布紧急咨询的时间)
    "real_add_money": 0,
    "unpay_money": 2000(未付款金额)
  }
}
```
---
### 用户紧急咨询信息列表
##### 接口地址：http://域名/api/urgent/patient-list
##### 请求方法：GET
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| page| number|否 |页数|
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/urgent/patient-list?page=1
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
        "id": 21,
        "record_id": 1,
        "search_title": "不限",
        "search_city": "广州",
        "search_gender": "不限",
        "waiting_time": 3600,(愿意等待的时间)
        "money": 200,(诊金)
        "add_money": 0,(增加诊金)
        "is_pay": 1,(诊金是否付款 0未付 1已付)
        "is_pay_add": 0,(增加的诊金是否付款 0未付 1已付 PS.因为可以多次增加诊金,只要有未付款的增加诊金，该字段就为0.增加诊金为0时该字段也为0)
        "pay_time": 1439954860,(付款时间的时间戳)
        "is_appointment": 0,(0未被医生接受预约，这个接口这个字段都应该是0)
        "is_valid": 0,(为0该紧急咨询无效,过期、用户取消该紧急咨询都是这种情况 1有效)
        "expired_time": 0,(过期时间的时间戳.当该字段为0时,通常是该紧急咨询处于关闭状态)
        "created_at": "2015-08-19 11:09:57",
        "real_add_money": 0,(已经付过款的增加诊金金额)
        "unpay_money": 0, (未付款金额)
        "progress": "0/0"
      },
      {
        "id": 22,
        "record_id": 2,
        "search_title": "1",
        "search_city": "广州",
        "search_gender": "不限",
        "waiting_time": 13723,
        "money": 200,
        "add_money": 0,
        "is_pay": 1,
        "is_pay_add": 0,
        "pay_time": 1439965695,
        "is_appointment": 0,
        "is_valid": 0,
        "expired_time": 0,
        "created_at": "2015-08-19 11:22:55",
        "real_add_money": 0,
        "unpay_money": 0,
        "progress": "0/0"
      }
    ]
  }
}
```
---
### 增加紧急咨询时间
##### 接口地址：http://域名/api/urgent/add-time
##### 请求方法：POST
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| ucId| string|是 |紧急id|
| time| number|是 |增加等待时间(秒)|
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/urgent/add-time
##### JSON返回示例：
```
{
  "status": 200
}
```
---
### 用户取消紧急咨询
##### 接口地址：http://域名/api/urgent/cancel
##### 请求方法：POST
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| ucId| string|是 |紧急咨询id|
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/urgent/cancel
##### JSON返回示例：
```
{
  "status": 200,
  "data": {
    "returnMoney": 300
  }
}
```
---
### 医生紧急咨询信息列表
##### 接口地址：http://域名/api/urgent/doctor-list
##### 请求方法：GET
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| page| number|否 |页数|
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/urgent/doctor-list?page=1
##### JSON返回示例：
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
        "id": 38,
        "record_id": 1,
        "created_at": "2015-09-01 15:17:46",
        "pay_time": 1441092544,
        "money": 2000,(第一次给的金额)
        "is_pay": 1,
        "add_money": 500,(医生端不显示这个字段)
        "is_pay_add": 0,
        "is_valid": 1,
        "real_add_money": 0,(付了款的增加诊金，前端显示的要是这个)
        "unpay_money": 500,
        "progress": "0/0",
        "record": {
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
### 支付紧急咨询
##### 接口地址：http://域名/api/urgent/pay
##### 请求方法：POST
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| ucId| number|是 |紧急咨询单ID|
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/urgent/pay
##### JSON返回示例：
```
{
  "status": 200
}
```
---
### 支付预约单
##### 接口地址：http://域名/api/appointment/pay
##### 请求方法：POST
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| appointmentId| number|是 |预约单ID|
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/appointment/pay
##### JSON返回示例：
```
{
  "status": 200
}
```
### 医生接受紧急咨询
##### 接口地址：http://域名/api/urgent/receive
##### 请求方法：POST
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| ucId| number|是 |紧急咨询单ID|
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/urgent/receive
##### JSON返回示例：
```
{
  "status": 200
}
```
---
### 增加紧急咨询诊金
##### 接口地址：http://域名/api/urgent/add-money
##### 请求方法：POST
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| ucId| number|是 |紧急咨询单ID|
| money| number|是 |增加的诊金(上限是65535)|
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/urgent/add-money
##### JSON返回示例：
```
{
  "status": 200
}
```
---
### 支付前获取参数
##### 接口地址：http://域名/api/pay/info
##### 请求方法：POST
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| appointmentId| number|是 |预约单id或紧急咨询单id(也即是ucId)|
| type| string|否 |'alipay'或'wechat'。不传默认值为'alipay'|
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/pay/info
##### 支付宝支付JSON返回示例：
```
{
  "status": 200,
  "data": "_input_charset=\"utf-8\"&body=\"appointment pay\"&it_b_pay=\"30m\"&notify_url=\"http://localhost:8000/api/pay/notify\"&out_trade_no=\"000000000000678\"&partner=\"2088021343494369\"&payment_type=\"1\"&seller_id=\"2088021343494388\"&service=\"mobile.securitypay.pay\"&show_url=\"m.alipay.com\"&subject=\"appointment pay\"&total_fee=\"1\"&sign=\"Q%2Fnb3O71Sk1TCL4ApIQ9%2ByTQl2z2I9RVX%2B8aTDth%2B4I%2FEZtyfiUowZ82oFM%2FftLiMEn258tLVJqFR6w5tEXDdJoJsCz%2BBv%2BgWkoTvuOAUheHco%2Bdvxr0o2h9MaaagpuaTSUQ%2Bggl4Eo%2FseeWNKpM1Ae6vkVdyuCbu2XHw2NoVQmoIUTkBugQihb96Lgmi5TOe3k%2BefndPuI01dBd7N%2BUuzD%2FRongPnWWE4riqcsH%2FPJHmnZFAD2NsCc4FiXkt9cUtydoYN2sGHVd8AcBvmzzrUK7NcYAE40%2Fo1LT282vsn%2BicrYDoIENy7GpHKAAISRrBHPxt0J7w35aMc2E6OJG%2FA%3D%3D\"&sign_type=\"RSA\""
}
```
##### 微信支付则返回
```
{
  "status": 200,
  "data": {
    "appid": "wxe541efd34c189cf1",
    "noncestr": "BGZaN0IQrG9XbvWc",
    "package": "Sign=WXPay",
    "prepayid": "wx2015110413412332e5263c8c0297796090",
    "partnerid": "1282212201",
    "timestamp": "1446615683",
    "sign": "0FB48C26D018DF9475AB2FD3E580E1C5"
  }
}
```