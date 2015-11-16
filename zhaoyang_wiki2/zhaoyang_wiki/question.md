## 用户问题模块API
> [获取问卷【前18包括18题是公共问题】](#获取问卷)      
> [保存问卷答案](#保存问卷答案)          
> [获取问卷列表量表部分](#获取问卷列表量表部分)      
> [获取问卷量表内容](#获取问卷量表内容)     

## 医生问题模块API
> [获取问题库列表](#获取问题库列表)   
> [获取医生自编问题列表](#获取医生自编问题列表)   
> [添加医生自编题](#添加医生自编题)   
> [获取医生模板列表](#获取医生模板列表)   
> [添加医生模板](#添加医生模板)   
> [修改医生模板](#修改医生模板)   
> [删除医生模板](#删除医生模板)   
> [设置默认模板](#设置默认模板)   
> [取消默认模板](#取消默认模板)   
> [获取模板详情](#获取模板详情)   
> [保存问卷需要重填的题目](#保存问卷需要重填的题目)    
> [追加模板问题到问卷](#追加模板问题到问卷)    
> [追加问题到问卷](#追加问题到问卷)     
> [追加量表到问卷](#追加量表到问卷)     
> [删除问卷里单个问题](#删除问卷里单个问题)  
> [获取量表列表](#获取量表列表)          
> [设置默认量表](#设置默认量表)          
> [取消默认量表](#取消默认量表)          

---

### 获取问卷
##### 接口地址：http://域名/api/question/questionnaires/{预约单ID}
##### 请求方法：GET
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/question/questionnaires/1
##### JSON返回示例:
```
{
  "status": 200,
  "data": [
    {
      "id": 50,
      "appointment_id": 1,
      "question_id": 1,
      "answer_type": null,
      "answer_content": null,
      "answer_mark": 0,
      "is_public": 1,
      "need_refill": 0,
      "created_at": "2015-08-10 17:56:51",
      "updated_at": "2015-08-10 17:56:51",
      "question": {
        "id": 1,
        "question_type": "radio",
        "question_content": "请问这是患者第一次找心理或精神科医生就诊吗？",
        "options": [
          {
            "option_type": "A",
            "option_content": "是",
            "option_mark": 0
          },
          {
            "option_type": "B",
            "option_content": "否",
            "option_mark": 0
          }
        ]
      }
    },
    {
      "id": 51,
      "appointment_id": 1,
      "question_id": 2,
      "answer_type": null,
      "answer_content": null,
      "answer_mark": 0,
      "is_public": 1,
      "need_refill": 0,
      "created_at": "2015-08-10 17:56:51",
      "updated_at": "2015-08-10 17:56:51",
      "question": {
        "id": 2,
        "question_type": "radio",
        "question_content": "其他医生曾给你的诊断是？",
        "options": [
          {
            "option_type": "A",
            "option_content": "fill",
            "option_mark": 0
          },
          {
            "option_type": "B",
            "option_content": "不详",
            "option_mark": 0
          }
        ]
      }
    }
  ]
}
```
---
### 保存问卷答案
##### 接口地址：http://域名/api/question/questionnaires/{预约单ID}
##### 请求方法：POST
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| answer   | string|是 |答案的json数据,需压缩后发送到服务端|
```json
{
    "1": {
        "type": [
            "A"
        ],
        "content": [
            "是"
        ],
        "mark": 0
    },
    "2": {
        "type": [
            "B"
        ],
        "content": [
            "不详"
        ],
        "mark": 0
    },
    "3": {
        "type": [
            "B"
        ],
        "content": [
            "不详"
        ],
        "mark": 0
    },
    "4": {
        "content": [
            {
                "mediaclName": "1米没信号",
                "productName": "还整个",
                "interval": "4",
                "numbers": [
                    {
                        "早": "1"
                    },
                    {
                        "午": "1"
                    },
                    {
                        "晚": "1"
                    },
                    {
                        "睡前": "1"
                    }
                ],
                "unit": "A",
                "remark": "mins尼米兹"
            },
            {
                "mediaclName": "药名",
                "productName": "商品名",
                "interval": "4",
                "numbers": [
                    {
                        "早": "1"
                    },
                    {
                        "午": "2"
                    },
                    {
                        "晚": "3"
                    },
                    {
                        "睡前": "4"
                    }
                ],
                "unit": "A",
                "remark": "备注"
            }
        ]
    },
    "5": {
        "type": [
            "A"
        ],
        "content": [
            "正常，完全没症状"
        ],
        "mark": 0
    },
    "6": {
        "type": [
            "B"
        ],
        "content": [
            "明显好转"
        ],
        "mark": 1
    },
    "7": {
        "type": [
            "B"
        ],
        "content": [
            "有点副反应但不影响生活"
        ],
        "mark": 0
    },
    "8": {
        "type": [
            "B"
        ],
        "content": [
            "有效"
        ],
        "mark": 0
    },
    "9": {
        "type": [
            "A"
        ],
        "content": [
            "无"
        ],
        "mark": 0
    },
    "10": {
        "type": [
            "B",
            "C"
        ],
        "content": [
            "抽烟",
            "喝酒"
        ],
        "mark": 0
    },
    "11": {
        "type": [
            "E"
        ],
        "content": [
            "曾尝试自杀"
        ],
        "mark": 0
    },
    "12": {
        "type": [
            "B",
            "D"
        ],
        "content": [
            "偶尔的想法",
            "有自杀的计划"
        ],
        "mark": 0
    },
    "13": {
        "type": [
            "B",
            "C",
            "D",
            "E",
            "A"
        ],
        "content": [
            "犯了很严重的过错",
            "自己是名人，拥有超乎常人的能力",
            "听到/看到旁人不知道的东西",
            "周围的人在留意、议论自己",
            "有人要加害(或跟踪/监视/控制)自己"
        ],
        "mark": 0
    },
    "15": {
        "type": [
            "A"
        ],
        "content": [
            "未婚"
        ],
        "mark": 0
    },
    "16": {
        "type": [
            "A"
        ],
        "content": [
            "正常"
        ],
        "mark": 0
    },
    "17": {
        "type": [
            "D"
        ],
        "content": [
            "早醒"
        ],
        "mark": 0
    }
}
```
注：

```json
    "1": {				//问题的ID  == question_id
        "type": [
        	"A"
        ],
        "content": [
        	"是"
        ]
    },
```
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/question/questionnaires/1
##### JSON返回示例:
```
{
  "status": 200,
  "data": [
    {
      "id": 50,
      "appointment_id": 1,
      "question_id": 1,
      "answer_type": null,
      "answer_content": null,
      "answer_mark": 0,
      "is_public": 1,
      "need_refill": 0,
      "created_at": "2015-08-10 17:56:51",
      "updated_at": "2015-08-10 17:56:51",
      "question": {
        "id": 1,
        "question_type": "radio",
        "question_content": "请问这是患者第一次找心理或精神科医生就诊吗？",
        "options": [
          {
            "option_type": "A",
            "option_content": "是",
            "option_mark": 0
          },
          {
            "option_type": "B",
            "option_content": "否",
            "option_mark": 0
          }
        ]
      }
    },
    {
      "id": 51,
      "appointment_id": 1,
      "question_id": 2,
      "answer_type": null,
      "answer_content": null,
      "answer_mark": 0,
      "is_public": 1,
      "need_refill": 0,
      "created_at": "2015-08-10 17:56:51",
      "updated_at": "2015-08-10 17:56:51",
      "question": {
        "id": 2,
        "question_type": "radio",
        "question_content": "其他医生曾给你的诊断是？",
        "options": [
          {
            "option_type": "A",
            "option_content": "fill",
            "option_mark": 0
          },
          {
            "option_type": "B",
            "option_content": "不详",
            "option_mark": 0
          }
        ]
      }
    }
  ]
}
```
---
### 获取问卷列表量表部分
##### 接口地址：http://域名/api/question/questionnaires-scale/{预约单ID}/
##### 请求方法：get
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/question/questionnaires-scale/1/
##### JSON返回示例:
```
{
  "status": 200,
  "data": [
    {
      "id": 7170,
      "question_category_id": 3,
      "category_name": "抑郁"
    },
    {
      "id": 7190,
      "question_category_id": 4,
      "category_name": "焦虑"
    }
  ]
}
```
### 获取问卷量表内容
##### 接口地址：http://域名/api/question/questionnaires-scale/{预约单ID}/{question_category_id}/show
##### 请求方法：get
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/question/questionnaires-scale/1/3/show
##### JSON返回示例:
```
{
  "status": 200,
  "data": [
    {
      "id": 7170,
      "appointment_id": 3,
      "question_id": 201,
      "answer_type": "",
      "answer_content": "",
      "answer_mark": 0,
      "is_public": 0,
      "need_refill": 0,
      "is_fill": 1,
      "template_id": 0,
      "created_at": "2015-10-27 18:50:03",
      "updated_at": "2015-10-27 18:50:03",
      "question_category_id": 3,
      "question": {
        "id": 201,
        "doctor_id": 0,
        "question_type": "radio",
        "question_content": "我觉得闷闷不乐，情绪低沉",
        "is_public": 0,
        "question_category_id": 3,
        "is_library": 0,
        "is_enable": 1,
        "options": [
          {
            "option_type": "A",
            "option_content": "不是/没",
            "option_mark": 1
          },
          {
            "option_type": "B",
            "option_content": "有时是",
            "option_mark": 2
          },
          {
            "option_type": "C",
            "option_content": "经常是",
            "option_mark": 3
          },
          {
            "option_type": "D",
            "option_content": "总是",
            "option_mark": 4
          }
        ]
      }
    }
  ]
}
```









---
### 获取问题库列表
##### 接口地址：http://域名/api/question/library/{预约单ID:可选，用来过滤问卷已存在的问题}
##### 请求方法：get
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/question/library/
##### JSON返回示例:
```
{
  "status": 200,
  "data": {
    "total": 3,
    "per_page": 20,
    "current_page": 1,
    "last_page": 1,
    "next_page_url": null,
    "prev_page_url": null,
    "from": 1,
    "to": 3,
    "data": [
      {
        "id": 18,
        "question_type": "radio",
        "question_content": "请问这是患者第一次找心理或者精神科医生就诊吗?",
        "options": [
          {
            "option_type": "A",
            "option_content": "是"
          },
          {
            "option_type": "B",
            "option_content": "否"
          }
        ]
      },
      {
        "id": 19,
        "question_type": "radio",
        "question_content": "其他医生曾给你的诊断是?",
        "options": [
          {
            "option_type": "A",
            "option_content": "fill"
          },
          {
            "option_type": "B",
            "option_content": "不详"
          }
        ]
      }
    ]
  }
}
```
---
### 获取医生自编问题列表
##### 接口地址：http://域名/api/question/customs/{预约单ID:可选，用来过滤问卷已存在的问题}
##### 请求方法：GET
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/question/customs/
##### JSON返回示例:
```
{
  "status": 200,
  "data": {
    "total": 3,
    "per_page": 20,
    "current_page": 1,
    "last_page": 1,
    "next_page_url": null,
    "prev_page_url": null,
    "from": 1,
    "to": 3,
    "data": [
      {
        "id": 18,
        "question_type": "radio",
        "question_content": "请问这是患者第一次找心理或者精神科医生就诊吗?",
        "options": [
          {
            "option_type": "A",
            "option_content": "是"
          },
          {
            "option_type": "B",
            "option_content": "否"
          }
        ]
      },
      {
        "id": 19,
        "question_type": "radio",
        "question_content": "其他医生曾给你的诊断是?",
        "options": [
          {
            "option_type": "A",
            "option_content": "fill"
          },
          {
            "option_type": "B",
            "option_content": "不详"
          }
        ]
      }
    ]
  }
}
```
---
### 添加医生自编题
##### 接口地址：http://域名/api/question/custom/
##### 请求方法：post
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| question_content   | string|是 |问题内容|
| question_type   | string|是 |问题类型:radio & checkbox|
| options   | array|是 |选项|
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/question/custom/
##### JSON返回示例:
```
{
  "status": 200,
  "data": {
    "id": 34,
    "question_type": "radio",
    "question_content": "hello！俺是问题？",
    "options": [
      {
        "option_type": "A",
        "option_content": "选项1",
        "option_mark":0
      },
      {
        "option_type": "A",
        "option_content": "选项1",
        "option_mark":0
      }
    ]
  }
}
```
---
### 获取医生模板列表
##### 接口地址：http://域名/api/question/templates/
##### 请求方法：get
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/question/templates/
##### JSON返回示例:
```json
{
  "status": 200,
  "data": {
    "total": 3,
    "per_page": 15,
    "current_page": 1,
    "last_page": 1,
    "next_page_url": null,
    "prev_page_url": null,
    "from": 1,
    "to": 3,
    "data": [
      {
        "id": 3,
        "doctor_id": 1,
        "template_name": "模板名称sadasd",
        "is_default": 0,
        "created_at": "2015-08-20 16:43:18",
        "updated_at": "2015-08-20 16:43:18"
      },
      {
        "id": 2,
        "doctor_id": 1,
        "template_name": "模板名称sadasd",
        "is_default": 0,
        "created_at": "2015-08-20 16:42:47",
        "updated_at": "2015-08-20 16:42:47"
      }
    ]
  }
}
```
---
### 添加医生模板
##### 接口地址：http://域名/api/question/template/
##### 请求方法：post
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| template_name | string|是 |模板名字|
| questions_id | array|是 |问题id[1,2,3,4]|
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/question/template/
##### JSON返回示例:
```
{
  "status": 200,
  "data": {
    "id": 2,
    "doctor_id": 1,
    "template_name": "模板名称sadasd",
    "is_default": 0,
    "created_at": "2015-08-06 14:22:02",
    "updated_at": "2015-08-06 14:22:02",
    "question": [
      {
        "id": 21,
        "question_type": "radio",
        "question_content": "请问这是患者第一次找心理或者精神科医生就诊吗?",
        "option": [
          {
            "option_type": "A",
            "option_content": "是",
            "option_mark": 0
          },
          {
            "option_type": "B",
            "option_content": "否",
            "option_mark": 0
          }
        ]
      },
      {
        "id": 22,
        "question_type": "radio",
        "question_content": "其他医生曾给你的诊断是?",
        "option": [
          {
            "option_type": "A",
            "option_content": "fill",
            "option_mark": 0
          },
          {
            "option_type": "B",
            "option_content": "不详",
            "option_mark": 0
          }
        ]
      }
    ]
  }
}
```
---
### 修改医生模板
##### 接口地址：http://域名/api/question/template/{template_id}
##### 请求方法：post
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| template_name | string|是 |模板名字|
| questions_id | array|是 |问题id[1,2,3,4]|
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/question/template/1
##### JSON返回示例:
```
{
  "status": 200,
  "data": {
    "id": 2,
    "doctor_id": 1,
    "template_name": "模板名称sadasd",
    "is_default": 0,
    "created_at": "2015-08-06 14:22:02",
    "updated_at": "2015-08-06 14:22:02",
    "question": [
      {
        "id": 21,
        "question_type": "radio",
        "question_content": "请问这是患者第一次找心理或者精神科医生就诊吗?",
        "option": [
          {
            "option_type": "A",
            "option_content": "是",
            "option_mark": 0
          },
          {
            "option_type": "B",
            "option_content": "否",
            "option_mark": 0
          }
        ]
      },
      {
        "id": 22,
        "question_type": "radio",
        "question_content": "其他医生曾给你的诊断是?",
        "option": [
          {
            "option_type": "A",
            "option_content": "fill",
            "option_mark": 0
          },
          {
            "option_type": "B",
            "option_content": "不详",
            "option_mark": 0
          }
        ]
      }
    ]
  }
}
```
---
### 设置默认模板
##### 接口地址：http://域名/api/question/template/{template_id}/default
##### 请求方法：get
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/question/template/8103cfda42d725cd38e8bdf9610ef9a6/1/default
##### JSON返回示例:
```
{
  "status": 200,
  "data": {
    "id": 2,
    "doctor_id": 1,
    "template_name": "模板名称sadasd",
    "is_default": 1,
    "created_at": "2015-08-06 14:22:02",
    "updated_at": "2015-08-06 14:22:02",
    "question": [
      {
        "id": 21,
        "question_type": "radio",
        "question_content": "请问这是患者第一次找心理或者精神科医生就诊吗?",
        "option": [
          {
            "option_type": "A",
            "option_content": "是",
            "option_mark": 0
          },
          {
            "option_type": "B",
            "option_content": "否",
            "option_mark": 0
          }
        ]
      },
      {
        "id": 22,
        "question_type": "radio",
        "question_content": "其他医生曾给你的诊断是?",
        "option": [
          {
            "option_type": "A",
            "option_content": "fill",
            "option_mark": 0
          },
          {
            "option_type": "B",
            "option_content": "不详",
            "option_mark": 0
          }
        ]
      }
    ]
  }
}
```
---
### 取消默认模板
##### 接口地址：http://域名/api/question/template/{template_id}/nodefault
##### 请求方法：get
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/question/template/1/nodefault
##### JSON返回示例:
```
{
  "status": 200,
  "data": {
    "id": 2,
    "doctor_id": 1,
    "template_name": "模板名称sadasd",
    "is_default": 0,
    "created_at": "2015-08-06 14:22:02",
    "updated_at": "2015-08-06 14:22:02",
    "question": [
      {
        "id": 21,
        "question_type": "radio",
        "question_content": "请问这是患者第一次找心理或者精神科医生就诊吗?",
        "option": [
          {
            "option_type": "A",
            "option_content": "是",
            "option_mark": 0
          },
          {
            "option_type": "B",
            "option_content": "否",
            "option_mark": 0
          }
        ]
      },
      {
        "id": 22,
        "question_type": "radio",
        "question_content": "其他医生曾给你的诊断是?",
        "option": [
          {
            "option_type": "A",
            "option_content": "fill",
            "option_mark": 0
          },
          {
            "option_type": "B",
            "option_content": "不详",
            "option_mark": 0
          }
        ]
      }
    ]
  }
}
```
---
### 获取模板详情
##### 接口地址：http://域名/api/question/template/{template_id}
##### 请求方法：get
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/question/template/1
##### JSON返回示例:
```
{
  "status": 200,
  "data": {
    "id": 2,
    "doctor_id": 1,
    "template_name": "模板名称sadasd",
    "is_default": 1,
    "created_at": "2015-08-06 14:22:02",
    "updated_at": "2015-08-06 14:22:02",
    "question": [
      {
        "id": 21,
        "question_type": "radio",
        "question_content": "请问这是患者第一次找心理或者精神科医生就诊吗?",
        "option": [
          {
            "option_type": "A",
            "option_content": "是",
            "option_mark": 0
          },
          {
            "option_type": "B",
            "option_content": "否",
            "option_mark": 0
          }
        ]
      },
      {
        "id": 22,
        "question_type": "radio",
        "question_content": "其他医生曾给你的诊断是?",
        "option": [
          {
            "option_type": "A",
            "option_content": "fill",
            "option_mark": 0
          },
          {
            "option_type": "B",
            "option_content": "不详",
            "option_mark": 0
          }
        ]
      }
    ]
  }
}
```
---
### 保存问卷需要重填的题目
##### 接口地址：http://域名/api/question/refill/{预约单ID}
##### 请求方法：POST
##### 请求参数:
| 参数名   | 类型  |必填|描述 |
| :------:|:-----:|:-:|:---:|
| need_refill   | array |是 |题目的id[1,2,3,4]|
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/question/refill/1
##### JSON返回示例:
```
{
  "status": 200,
  "data": [
    {
      "id": 50,
      "appointment_id": 1,
      "question_id": 1,
      "answer_type": null,
      "answer_content": null,
      "answer_mark": 0,
      "is_public": 1,
      "need_refill": 1,		//是否重填
      "created_at": "2015-08-10 17:56:51",
      "updated_at": "2015-08-10 17:56:51",
      "question": {
        "id": 1,
        "question_type": "radio",
        "question_content": "请问这是患者第一次找心理或精神科医生就诊吗？",
        "options": [
          {
            "option_type": "A",
            "option_content": "是",
            "option_mark": 0
          },
          {
            "option_type": "B",
            "option_content": "否",
            "option_mark": 0
          }
        ]
      }
    },
    {
      "id": 51,
      "appointment_id": 1,
      "question_id": 2,
      "answer_type": null,
      "answer_content": null,
      "answer_mark": 0,
      "is_public": 1,
      "need_refill": 1,		//是否重填
      "created_at": "2015-08-10 17:56:51",
      "updated_at": "2015-08-10 17:56:51",
      "question": {
        "id": 2,
        "question_type": "radio",
        "question_content": "其他医生曾给你的诊断是？",
        "options": [
          {
            "option_type": "A",
            "option_content": "fill",
            "option_mark": 0
          },
          {
            "option_type": "B",
            "option_content": "不详",
            "option_mark": 0
          }
        ]
      }
    }
  ]
}
```
---
### 删除医生模板
##### 接口地址：http://域名/api/question/template/{template_id}/delete
##### 请求方法：get
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/question/template/1/delete
##### JSON返回示例:
```
{
  "status": 200,
}
```
---
### 追加模板问题到问卷
##### 接口地址：http://域名/api/question/append/{预约单ID}/template/{模板ID}
##### 请求方法：get
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/question/append/1/template/1
##### JSON返回示例:
```
{
  "status": 200,
}
```
---
### 追加问题到问卷
##### 接口地址：http://域名/api/question/append/{预约单ID}/question/{问题ID}
##### 请求方法：get
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/question/append/1/question/1
##### JSON返回示例:
```
{
  "status": 200,
}
---
### 追加量表到问卷
##### 接口地址：http://域名/api/question/append/{预约单ID}/scale/{问题ID}
##### 请求方法：get
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/question/append/1/scale/1
##### JSON返回示例:
```
{
  "status": 200,
}
---
```
### 删除问卷里单个问题
##### 接口地址：http://域名/api/question/append/{问卷ID}/delete/{问题ID}
##### 请求方法：get
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/question/append/1/question/1
##### JSON返回示例:
```
{
  "status": 200,
}
```

### 获取量表列表
##### 接口地址：http://域名/api/question/scale/{预约单ID}
##### 请求方法：get
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/question/scale/1
##### JSON返回示例:
```
{
  "status": 200,
  "data": [
    {
      "id": 3,
      "category_name": "抑郁",
      "formula": "$total * 1.25",
      "questions_total": 20,
      "is_default": 1
    },
    {
      "id": 4,
      "category_name": "焦虑",
      "formula": "$total * 1.25",
      "questions_total": 20,
      "is_default": 0
    }
  ]
}
```
---
### 设置默认量表
##### 接口地址：http://域名/api/question/scale/{量表ID}/default
##### 请求方法：get
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/question/scale/1/default/
##### JSON返回示例:
```
{
  "status": 200,
}
```
### 取消默认量表
##### 接口地址：http://域名/api/question/scale/{量表ID}/nodefault
##### 请求方法：get
##### 请求示例:
http://zhaoyang.dev.ganguo.hk:8088/api/question/scale/1/nodefault/
##### JSON返回示例:
```
{
  "status": 200,
}
```


















