##  推送模块API
> [获取昭阳机器人消息列表(ok)](#获取昭阳机器人消息列表)    
> [推送type定义(doing)](#推送type定义)    

---
### 获取昭阳机器人消息列表
##### 接口地址：http://域名/api/pushMessage/messages
##### 请求方法：GET
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| page | int | 否 | 分页请求消息列表, 默认请求第一页消息 |
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/pushMessage/messages
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
            //doctor_name, doctor_avatar 和 patient_name, patinet_avatar 成对出现，若两对都为空，则表明用户未设置头像和姓名
            {
                "title": "hello roy",
                "created_at": "2015-09-10 10:55:35",
                "doctor_name": "医生3",
                "doctor_avatar": "http://p.3761.com/pic/71271413852950.jpg",
                "patient_name": null,
                "patient_avatar": null
            },
            {
                "title": "zhaoyang push notify",
                "created_at": "2015-09-10 10:48:35",
                "doctor_name": "医生3",
                "doctor_avatar": "http://p.3761.com/pic/71271413852950.jpg",
                "patient_name": null,
                "patient_avatar": null
            },
            ......
        ]
    }
}
```
---
### 推送type定义
| type | 描述 |
| :-: | :----: |
| 1 | 患者急诊已被接受 |
| 2 | 患者急诊超时 |
| 3 | 医生修改患者记录 |
| 4 | 缴费通知 |
| 5 | 答题通知 |
| 6 | 医生要求病人重填问卷 |
| 7 | 医生修改用药信息 |
| 8 | 预约成功(医生收到推送) |
| 9 | 后台审核通过患者修改个人资料(医生收到推送) |
| 10 | 医生完成就诊，通知病人 |
| 11 | 转诊时通知转诊医生 |
| 12 | 医生接受或拒绝转诊，通知原转诊医生 |
| 13 | 预约30分钟未付款 |
| 14 | 复诊30分钟未付款 |
| 15 | 转诊30分钟未响应 |
| 16 | 预约25分钟未付款 |
| 17 | 复诊25分钟未付款 |
| 18 | 医生未回应转诊 |
| 19 | 提醒用户答题 |
| 20 | 提醒用户付款 |
| 21 | 后台审核通过医生修改个人资料|
---