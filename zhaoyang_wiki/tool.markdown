## 基础API
> [上传图片(ok)](#上传图片)   
> [获取名医推荐列表(ok)](#获取名医推荐列表)  
> [某位医生详情(ok)](#某位医生详情)  
> [获取医院信息(ok)](#获取医院信息)   
> [获取问题库列表](#获取问题库列表)   

---
### 上传图片
##### 接口地址：http://域名/api/tool/upload  
##### 请求方法：POST   
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| photo  | file|是 |图片文件|
| token  | string|是 |放在header传过来|
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/tool/upload
##### JSON返回示例：
```
{
    "status": 200,
	 "data": {
	    "imgUrl": "upload\\/2015-07-11\\/xutjcCT3es5ACQY.jpg"
	 }
}
```

---
### 获取名医推荐列表
##### 接口地址：http://域名/api/tool/recommendDoctors
##### 请求方法：GET  
##### 请求参数:	
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|

##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/tool/recommendDoctors
##### JSON返回示例：
```
{
  "status": 200,
  "data": [
    {
      "id": 13,
      "level": "高级认证",
      "name": "刘医生",
      "specialist": "不告诉你",
      "title": "",
      "money": 1,
      "detail": "",
      "hospital_id": 1,
      "point": 3.7,
      "avatar": "http://7xkt51.com2.z0.glb.qiniucdn.com/FhUdC8WIrLhbFxO4vfM0eNOWNhvW",
      "hospital_name": "广州市脑科医院",
      "voipAccount": "88797700000054",
      "phone": "15917748281"
    },
    {
      "id": 16,
      "level": "基本认证",
      "name": "王医生",
      "specialist": "",
      "title": "主任医师",
      "money": 1,
      "detail": "",
      "hospital_id": 1,
      "point": 3.3,
      "avatar": "",
      "hospital_name": "广州市脑科医院",
      "voipAccount": "88797700000041",
      "phone": "15917748284"
    }
  ]
}
```

---
### 某位医生详情
##### 接口地址：http://域名/api/tool/doctorInfo/{doctorId}
##### 请求方法：GET   
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| doctorId   | string|是 |医生id|
| token  | string|是 |放在header传过来|
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/tool/doctorInfo/1
##### JSON返回示例：
```
{
  "status": 200,
  "data": {
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
    "phone": "15917748280",
    "is_fav": 1(0未收藏 1已收藏该医生)
  }
}
```
---
### 获取医院信息
##### 接口地址：http://域名/api/tool/hospital/{hospitalId}
##### 请求方法：GET
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| hospitalId| number|是 |医院id|
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/tool/hospital/1
##### JSON返回示例:
```
{
  "status": 200,
  "data": {
    "id": 1,
    "name": "广州市脑科医院",
    "detail": "广州市脑科医院（广州市精神病医院，俗称芳村精神病院）位于广州市，于1898年由美国人嘉约翰（John Kerr）在美国基督教长老会支持下以惠爱医癫院为名创办，是中国第一间精神病专科医院，曾用名广州市第十人民医院。设芳村、江村、荔湾三个门诊以及芳村、江村两个住院部。广州市脑科医院亦是三级甲等专科医院、广州市首批医保定点医疗机构。该医院为中国最早的一家西医精神病医院，对研究清代时期广州地区引入西医学术文化有较高的历史价值。",
    "location": "广东省广州市芳村区明心路36号",
    "image": "http:\\/\\/a1.att.hudong.com\\/86\\/67\\/01300542517414139856675747336_s.jpg",
    "longitude": 113.24548,
    "latitude": 23.104044
  }
}
```
