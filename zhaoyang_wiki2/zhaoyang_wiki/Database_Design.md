## 昭阳医生数据库设计文档
> 1. [users(账号信息表)](#users)   
> 2. [patients(公众基础信息表)](#patients)   
> 3. [doctors(医生基础信息表)](#doctors)   
> 4. [medical_records(病历信息表)](#medical_records)   
> 5. [hospitals(医院信息表)](#hospitals)   
> 6. [appointments(预约订单表)](#appointments)   
> 7. [urgent_consults(紧急咨询信息表)](#urgent_consults)   
> 8. [questionnaires(病历问卷表)](#questionnaires)   
> 9. [questions(问题列表)](#questions)   
> 10. [options(问题对应选项表)](#options)   
> 11. [templates(医生问题模版表)](#templates)       
> 12. [feedbacks(意见反馈表)](#feedbacks)   
> 13. [login_logs(登录记录表)](#login_logs)    
> 14. [collections(用户收藏医生关系表)](#collections)
> 15. [payments(支付宝订单信息表)](#payments)   
> 16. [patient_contacts(公众联系人表)](#patient_contacts)
> 17. [doctor_contacts(医生联系人表)](#doctor_contacts)   
> 18. [doctor_reviews(医生资料记录表)](#doctor_reviews)    
> 19. [doctor_diagnosis(医生诊断表)](#doctor_diagnosis)    
> 20. [time(时间设置表)](#time)    
> 21. [push_message(推送消息表)](#push_message)    
> 22. [drugs(药品收集表)](#drugs)    
> 23. [question_category(问题分类量表)](#question_category)    
> 24. [failed_jobs(队列任务失败表)](#failed_jobs)    
> 25. [change_logs(修改记录表)](#change_logs)    
> 26. [relations(远程关系对应表)](#relations)    
> 27. [admin(管理员表)](#admin)    

---

### users
###### (账号信息表)
| 字段名 | 类型 |  空  |默认|注释|索引|
| :---:|:----:|:----:|:--:|:--:|:--:|
| id    | int(10)| 否 |无|自增|primary|
| phone | varchar(255)| 否 ||注册手机号码(登录账号)|unique|
| password| varchar(1000)| 否 |无|密码(md5加密后再哈希)|
| type  | tinyint(4)| 否 ||1普通用户 2医生|
| status  | tinyint(4)| 否|0|0未成功注册 1成功注册|
| captcha  | varchar(255)| 否 |''|最新的短信验证码|
| captcha_time  | int(10)| 否 |''|短信验证码生成时间|
| token| varchar(255)| 是 |''| token|
| subAccountSid | varchar(255)| 是 |''| 容联subAccountSid|
| subToken| varchar(255)| 是 |''| 容联subToken|
| voipAccount| varchar(255)| 是 |''| 容联voipAccount|
| voipPwd| varchar(255)| 是 |''| 容联voipPwd|
| created_at| timestamp| 否 |0000-00-00 00:00:00 |记录创建时间|
| updated_at| timestamp| 否 |0000-00-00 00:00:00 |记录修改时间|

### patients
###### (用户基础信息表)
| 字段名 | 类型 |  空  |默认|注释|索引|
| :---:|:----:|:----:|:--:|:--:|:--:|
| id    | int(10)| 否 |无|自增(与users表的ID一致)|primary|
| name  | varchar(255)| 否 |''|用户姓名|
| new_name  | varchar(255)| 否 |''|用户姓名|
| email | varchar(255)| 否 |''|注册邮箱|
| new_email | varchar(255)| 否 |''|注册邮箱|
| gender| tinyint| 否 |1|性别（1男 2女）|
| new_gender| tinyint| 否 |0|性别（1男 2女）|
| birthday| varchar(50)| 否 |''|出生年月|
| new_birthday| varchar(50)| 否 |''|出生年月|
| avatar| varchar(500)| 否 |''|头像url|
| new_avatar| varchar(500)| 否 |''|头像url|
| point|double(8,2) | 否 |5.00|评分|
| created_at| timestamp| 否 |0000-00-00 00:00:00 |记录创建时间|
| updated_at| timestamp| 否 |0000-00-00 00:00:00 |记录修改时间|

### doctors
###### (医生基础信息表)
| 字段名 | 类型 |  空  |默认|注释|索引|
| :---:|:----:|:----:|:--:|:--:|:--:|
| id    | int(10)| 否 |无|自增(与users表的ID一致)|primary|
| name  | varchar(255)| 否 |''|医生姓名|
| email | varchar(255)| 否 |''|注册邮箱|
| level  | tinyint| 否 |0|医生等级(0未认证 1已验证 2高级认证)|
| gender| tinyint| 否 |1|性别（1男 2女）|
| city  | varchar(255)| 否 |''|所在城市|
| hospital_id | int(10)| 否 |0|医院id|
| specialist |varchar(255) | 否 |''|专科|
| title | smallint(6)|否| 0 |职称|
| money | smallint(6)| 否 |100|诊金|
| second_money | smallint(6)| 否 |100|复诊诊金|
| hospital_phone | varchar(255)|否|''|医院／专科电话|
| detail | varchar(1000)| 否 |''|简介|
| avatar| varchar(500)| 否 |''|头像url|
| is_recommend| tinyint| 否 |0|是否推荐（0不推荐 1名医推荐）|
| need_review | tinyint()| 否 |0|0不需重新审核 1需重新审核|
| title_img | varchar(500)| 否 |''|职称证件照片|
| practitioner_img | varchar(500)| 否 |''|执业资格照片|
| certified_img | varchar(500)| 否 |''|注册证件照片|
| auth_time | int(11))| 否 |''|认证时间(时间戳)|
| point | double(8,2)| 否 |5.0|评分|
| created_at| timestamp| 否 |0000-00-00 00:00:00 |记录创建时间|
| updated_at| timestamp| 否 |0000-00-00 00:00:00 |记录修改时间|

### medical_records
###### (病历信息表)
| 字段名 | 类型 |  空  |默认|注释|索引|
| :---:|:----:|:----:|:--:|:--:|:--:|
| id    | int(10)| 否 |无|病历id|primary|
| patient_id| int(10)| 否 |''|普通用户表id|index foreign_key|
| name | varchar(255) | 否 | '' | 病历名 |
| relation|varchar(255)| 否 |''|关系(取值为"本人"或其他)|
| birthday| varchar(255)| 否 |''|患者出生年月|
| gender  | tinyint| 否 |1|患者性别（1男 2女）|
| province| varchar(255)| 否 |''|所在省份|
| city    | varchar(255)| 否 |''|所在市|
| address|varchar(1000)|否 |''|详细地址|
| identity_number |varchar(255)|否 |''|身份证号码|
| is_first_doctor |tingint|否 |''|是否第一次看医生 0否 1是|
| once_diagnose |varchar(1000)|否 |''|其他医生曾经给的诊断|
| used_drug |varchar(1000)|否 |''|曾经使用过的精神类药物名称|
| created_at| timestamp| 否 |0000-00-00 00:00:00 |记录创建时间|
| updated_at| timestamp| 否 |0000-00-00 00:00:00 |记录修改时间|

### hospitals
###### (医院信息表)
| 字段名 | 类型 |  空  |默认|注释|索引|
| :---:|:----:|:----:|:--:|:--:|:--:|
| id    | int(10)| 否 |无|自增|primary|
| name  | varchar(255)| 否 |''|医院名称|
| detail| varchar(2000)| 否 |''|医院简介|
| location|varchar(1000)| 否 |''|医院地址|
| image | varchar(500)| 否 |''|医院图片|
| longitude | varchar(255)| 否 |''|医院经度|
| latitude | varchar(255)| 否 |''|医院纬度|

### appointments
###### (预约订单表)
| 字段名 | 类型 |  空  |默认|注释|索引|
| :---:|:----:|:----:|:--:|:--:|:--:|
| id    | int(10)| 否 |无|自增|primary|
| record_id| int(10)| 否 |0|病历id|foreign_key index|
| doctor_id| int(10)| 否 |0|医生id|foreign_key index|
| book_time| int(10)| 否 |0|预约时间|
| money| smallint| 否 |0|诊金|
| type| tinyint| 否 |0|诊断类型(1面诊 2网诊)|
| status| tinyint| 否 |0|状态(0已取消 1预约状态 2就诊状态)|
| has_pay| tinyint| 否 |0|付款状态(0未支付 1已支付)|
| need_refund | tinyint| 否 |0|是否需要退款(0不需要 1需要退款)|
| last_appoint_id| tinyint| 否 |0|如果这个预约是转诊的话，这个字段记录上次的预约id|
| is_finish| tinyint| 否 |0|该预约是否已结束(0未结束 1已结束)|
| cancel_reason| string(500)| 否 |""|取消原因|
| last_time | int(10) | 否 ｜ 0 | 最后一次通话时间 |
| doctor_point | double(8,2)| 否 |0.00|对该医生的评分|
| doctor_point_freeze | tinyint(4) | 否 | '' | 医生评分时否冻结 |
| doctor_point_detail | varchar(1000) | 否 | '' | 医生评分细则 |
| doctor_point_time | int(10) | 否 | 0 | 医生评分时间戳 |
| patient_point | double(8,2)| 否 |0.00|医生对该用户的评分|
| patient_point_freeze | tinyint(4) | 否 | '' | 病人评分时否冻结 |
| patient_point_detail | varchar(1000) | 否 | '' | 病人评分细则 |
| patient_point_time | int(10) | 否 | 0 | 病人评分时间戳 |
| created_at| timestamp| 否 |0000-00-00 00:00:00 |记录创建时间|
| updated_at| timestamp| 否 |0000-00-00 00:00:00 |记录修改时间|

### urgent_consults
###### (紧急咨询信息表)
| 字段名 | 类型 |  空  |默认|注释|索引|
| :---:|:----:|:----:|:--:|:--:|:--:|
| id    | int(10)| 否 |无|自增|primary|
| record_id| int(10)| 否 ||病历id|foreign_key index|
| search_title| varchar(255)| 否 |0|欲搜索医生的职称(保存序列化后的数组)|
| search_city| varchar(255)| 否 |'all'|欲搜索医生所在城市('all'不限)|index|
| search_gender| tinyint| 否 |0|欲搜索医生的性别(0不限 1男 2女)|
| waiting_time| int(10)| 否 |0|等待时间(秒)|
| money| smallint| 否 |0|诊金|index|
| add_money| smallint| 否 |0|追加诊金|
| total_money | smallint | 否 | 0 | 实际付款总额 |
| is_pay| tinyint| 否 |0|是否付款(0未付 1已付)|
| add_num | int(10) | 否 | 0 | 追加金额次数 |
| is_pay_add| tinyint| 否 |0|是否付追加诊金(0未付 1已付)|
| pay_time | int(10) | 否 | 0 | 第一次付款时间 |
| is_appointment| tinyint| 否 |0|是否被预约(0未被预约 1被预约)|
| is_valid| tinyint| 否 |0|是否有效(0无效 1有效)|
| expired_time| int(11)| 否 |0|过期时间|
| created_at| timestamp| 否 |0000-00-00 00:00:00 |记录创建时间|
| updated_at| timestamp| 否 |0000-00-00 00:00:00 |记录修改时间|

### questionnaires
###### (病历问卷表)
| 字段名 | 类型 |  空  |默认|注释|索引|
| :---:|:----:|:----:|:--:|:--:|:--:|
| id    | int(10)| 否 |无|自增|primary|
| appointment_id|int(10)| 否 |0|预约单id|foreign_key index|
| question_id| int(10)| 否 |0|问题id|foreign_key|
| answer_type| varchar(255)| 是 |null|回答选项||
| answer_content| varchar(2000)| 否 |0|回答内容||
| answer_mark|int(11)|是|0|回答分数||
| is_public| tinyint | 否 |0|是否公共题||
| need_refill| tinyint| 否 |0|是否需要重填|0不需重填 1需重填|
| is_fill | tinyint | 否 ｜ 1 ｜ 控制完成度 |
| question_category_id | 否 | 0 | 问题分类id |
| created_at| timestamp| 否 |0000-00-00 00:00:00 |记录创建时间|
| updated_at| timestamp| 否 |0000-00-00 00:00:00 |记录修改时间|

### questions
###### (问题列表)
| 字段名 | 类型 |  空  |默认|注释|索引|
| :---:|:----:|:----:|:--:|:--:|:--:|
| id    | int(10)| 否 |无|自增|primary|
| doctor_id| int(10)| 否 |0|doctors表id;为0时是公共题|index|
| qusetion_type| varchar(255)| 否 |0|问题类型||
| question_content| varchar(1000)| 否 |0|问题内容|
| question_category_id | int(10) | 否 | 0 | 问题分类id |
| is_public| tinyint(4)| 否 |0|0不是公共题 1是公共题|
| is_library | tinyint(4) | 否 | 0 | 是否问题库 |
| is_enable | tinyint(4) | 否 | 1 | 是否启用 |

### options
###### (问题选项表)
| 字段名 | 类型 |  空  |默认|注释|索引|
| :---:|:----:|:----:|:--:|:--:|:--:|
| id    | int(10)| 否 |无|自增|primary|
| question_id| int(10)| 否 |0|问题id|foreign_key index|
| option_type| varchar(255)| 否 |0|选项类别(可能的值为 "A","B","C","D"...)||
| option_content| varchar(1000)| 否 |0|选项内容||
| option_mark| int| 是 |0|分数||

### templates
###### (问题模板表)
| 字段名 | 类型 |  空  |默认|注释|索引|
| :---:|:----:|:----:|:--:|:--:|:--:|
| id    | int(10)| 否 |无|自增|primary|
| doctor_id| int(10)| 否 |无|医生id|foreign_key index|
| template_name| varchar(255)| 否 |0|模版名称|
| is_default | tinyint(4) | 否 | 0 | 是否默认 |
| created_at| timestamp| 否 |0000-00-00 00:00:00 |记录创建时间|
| updated_at| timestamp| 否 |0000-00-00 00:00:00 |记录修改时间|

### feedbacks
###### (意见反馈表)
| 字段名 | 类型 |  空  |默认|注释|索引|
| :---:|:----:|:----:|:--:|:--:|:--:|
| id    | int(10)| 否 |无|自增|primary|
| user_id| int(10)| 否 |0|users表id|
| feedback|varchar(2000)| 否 |''|用户反馈|
| created_at| timestamp| 否 |0000-00-00 00:00:00 |记录创建时间|
| updated_at| timestamp| 否 |0000-00-00 00:00:00 |记录修改时间|

### login_logs
###### (医生登录记录表)
| 字段名 | 类型 |  空  |默认|注释|索引|
| :---:|:----:|:----:|:--:|:--:|:--:|
| id    | int(10)| 否 |无|自增|primary|
| user_id| int(10)| 否 |0|users表id|index foreign_key|
| login_time| int(11)| 否 ||最新一次登录的时间戳|
| login_num | int(11) | 否 | 0 | 历史登录次数 |

### collections
| 字段名 | 类型 |  空  |默认|注释|索引|
| :---:|:----:|:----:|:--:|:--:|:--:|
| id    | int(10)| 否 |无|自增|primary|
| patient_id| int(10)| 否 |0|patients表id|index foreign_key|
| doctor_id| int(10)| 否 |0|doctors表id|index foreign_key|
| created_at| timestamp| 否 |0000-00-00 00:00:00 |记录创建时间|
| updated_at| timestamp| 否 |0000-00-00 00:00:00 |记录修改时间|

### payments 
| 字段名 | 类型 |  空  |默认|注释|索引|
| :---:|:----:|:----:|:--:|:--:|:--:|
| id    | int(10)| 否 |无|自增|primary|
| appointment_id | int(10) | 否 || appointments表id |
| out_trade_no | string(255) | 否 | '' | 内部订单号 |
| trade_no | string(255) | 否 | '' | 支付宝交易订单号 |
| total_fee | string(255) | 否 | '' | 付款金额 |
| subject | string(255) | 否 | '' | 商品名称 |
| notify_id | string(255) | 否 | '' | 通知校验id |
| payment_type | string(255) | 否 | '' | 支付类型 |
| trade_status | string(255) | 否 | '' | 交易状态 |
| seller_id | string(255) | 否 | '' | 卖家支付宝用户号 |
| seller_email | string(255) | 否 | '' | 卖家支付宝帐号 |
| buyer_id | string(255) | 否 | '' | 买家支付宝用户号 |
| buyer_email | string(255) | 否 | '' | 买家支付宝帐号 |
| gmt_create | string(255) | 否 | '' | 交易创建时间 |
| gmt_payment | string(255) | 否 | '' | 交易付款时间 |
| refund_status | string(255) | 否 | '' | 退款状态 |
| gmt_refund | string(255) | 否 | '' | 退款时间 |
| notify_time | string(255) | 否 | '' | 通知时间 |
| created_at| timestamp| 否 |0000-00-00 00:00:00 |记录创建时间|
| updated_at| timestamp| 否 |0000-00-00 00:00:00 |记录修改时间|

### patient_contacts
| 字段名 | 类型 |  空  |默认|注释|索引|
| :---:|:----:|:----:|:--:|:--:|:--:|
| id    | int(10)| 否 |无|自增|primary|
| patient_id| int(10)| 否 |0|patients表id|index foreign_key|
| doctor_id| int(10)| 否 |0|doctors表id|index foreign_key|
| nickname| varchar(255)|否|''|昵称||
| is_ban| timestamp| 否 |0 |0未将医生加入黑名单 1将医生加入黑名单|
| can_call| timestamp| 否 |1 |0不能给该医生打电话 1能给该医生打电话|
| status | string(255) | 否 | 未申请 |

### doctor_contacts
| 字段名 | 类型 |  空  |默认|注释|索引|
| :---:|:----:|:----:|:--:|:--:|:--:|
| id    | int(10)| 否 |无|自增|primary|
| doctor_id| int(10)| 否 |0|doctors表id|index foreign_key|
| patient_id| int(10)| 否 |0|patients表id|index foreign_key|
| nickname| varchar(255)|否|''|昵称||
| is_ban| timestamp| 否 |0 |0未将用户加入黑名单 1将用户加入黑名单|
| can_call| timestamp| 否 |1 |0不能给该用户打电话 1能给该用户打电话|
| status | string(255) | 否 | 未申请 |

### doctor_reviews
###### (医生资料记录表)
| 字段名 | 类型 |  空  |默认|注释|索引|
| :---:|:----:|:----:|:--:|:--:|:--:|
| id    | int(10)| 否 |无|自增(与users表的ID一致)|primary|
| avatar| varchar(500)| 否 |''|头像url|
| name  | varchar(255)| 否 |''|医生姓名|
| email | varchar(255)| 否 |''|注册邮箱|
| gender| tinyint| 否 |1|性别（1男 2女）|
| hospital_name | int(10)| 否 |0|医院名称|
| specialist |varchar(255) | 否 |''|专科|
| title | smallint(6)|否| 0 |职称|
| hospital_phone | varchar(255)|否|''|医院／专科电话|
| detail | varchar(1000)| 否 |''|简介|
| title_img | varchar(500)| 否 |''|职称证件照片|
| practitioner_img | varchar(500)| 否 |''|执业资格照片|
| certified_img | varchar(500)| 否 |''|注册证件照片|
| need_auth | tinyint(4) | 否 | 1 | 是否需要认证审核(0不需要1需要) |
| result | tinyint(4) | 否 | 1 | 审核结果(0不通过1通过) |
| created_at| timestamp| 否 |0000-00-00 00:00:00 |记录创建时间|
| updated_at| timestamp| 否 |0000-00-00 00:00:00 |记录修改时间|

### doctor_diagnosis
###### (医生诊断表)
| 字段名 | 类型 |  空  |默认|注释|索引|
| :---:|:----:|:----:|:--:|:--:|:--:|
| id    | int(10)| 否 |无|自增|primary|
| doctor_id | int(10) | 否 | 无| 与doctor表的ID一致 ||
| appointment_id | int(10) | 否 | 无 | 与appointment表的ID一致 ||
| is_diagnosis |int(4)|否|0|是否面诊字段||
| perception |varchar(1000)|是|''|知觉||
| thinking |varchar(1000)|是|''|思维||
| pipedream |varchar(1000)|是|''|妄想||
| emotion |varchar(1000)|是|''|情感||
| memory |varchar(1000)|是|''|记忆||
| description |varchar(1000)|是|''|描述||
| current_status | tinyint(4) |是|0|现状||
| recovered | tinyint(4) |是|0|恢复状况||
| treatment | tinyint(4) |是|0|现状||
| effect | tinyint(4) | 是 | 0 | 副作用 |
| prescription | text | 是 | 无 | 建议用药 |
| return | tinyint(4) | 是 |0|是否需要复诊||
| return_type | tinyint(4) | 是 |0|复诊类型||
| return_paid | tinyint(4) | 是 | 0 | 复诊时否付款(0未付款1已付款) |
| is_accept | tinyint(4) | 是 | 0 | 转诊时否接受(0未操作1接受2拒绝) |
| return_time | int(10) | 是 | 0 | 复诊时间戳 |
| money |int(11)| 是 |0|价钱||
| return_appointment_id | 是 | 0 | 转诊预约单id |
| doctor_require |int(11)| 是 |0|转诊医生ID||
| comment |varchar(255)|是|''|转诊描述||
| created_at| timestamp| 否 |0000-00-00 00:00:00 |记录创建时间|
| updated_at| timestamp| 否 |0000-00-00 00:00:00 |记录修改时间|

### time
##### (时间设置表)
| 字段名 | 类型 |  空  |默认|注释|索引|
| :---:|:----:|:----:|:--:|:--:|:--:|
| id    | int(10) | 否 | 无 | 自增 |primary|
| doctor_id | int(10) | 否 | 0 | doctors表id |
| week | int(10) | 否 || 星期二进制和 |
| type | tinyint(4) | 否 || 设置时间类型(1免打扰2面诊3网诊) |
| from | varchar(20) | 否 || 起始时间 |
| to | varchar(20) | 否 || 结束时间 |
| created_at| timestamp| 否 |0000-00-00 00:00:00 |记录创建时间|
| updated_at| timestamp| 否 |0000-00-00 00:00:00 |记录修改时间|

### push_message
##### (推送消息表)
| 字段名 | 类型 |  空  |默认|注释|索引|
| :---:|:----:|:----:|:--:|:--:|:--:|
| id    | int(10) | 否 | 无 | 自增 |primary|
| sender | int(10) | 否 | 0 | users表id |
| to_user | int(10) | 否 || users表id |
| type | int(10) | 否 || 推送消息类型 |
| title | varchar(255) | 是 | '' | 推送消息标题 |
| extras | text | 是 | '' | 推送消息扩展 |
| is_push | varchar(20) | 否 || 时否成功推送 |
| created_at| timestamp| 否 |0000-00-00 00:00:00 |记录创建时间|
| updated_at| timestamp| 否 |0000-00-00 00:00:00 |记录修改时间|

### drugs
##### (药品收集表)
| 字段名 | 类型 |  空  |默认|注释|索引|
| :---:|:----:|:----:|:--:|:--:|:--:|
| id    | int(10) | 否 | 无 | 自增 |primary|
| drug_name | varchar(255) | 否 | '' | 药品名 |
| product_name | varchar(255) | 否 | '' | 商品名 |

### question_category
##### (问题分类量表)
| 字段名 | 类型 |  空  |默认|注释|索引|
| :---:|:----:|:----:|:--:|:--:|:--:|
| id    | int(10) | 否 | 无 | 自增 |primary|
| category_name | varchar(255) | 否 || 量表名称 |
| formula | varchar(255) | 否 || 计算公式 |

### failed_jobs
##### (队列任务失败表)
| 字段名 | 类型 |  空  |默认|注释|索引|
| :---:|:----:|:----:|:--:|:--:|:--:|
| id    | int(10) | 否 | 无 | 自增 |primary|
| connection | text | 否 || 失败任务连接 |
| queue | text | 否 || 失败任务队列 |
| payload | longtext | 否 || 失败任务信息 |
| failed_at | timestamp | 否 || 失败任务时间戳 |

### change_logs
##### (修改记录表)
| 字段名 | 类型 |  空  |默认|注释|索引|
| :---:|:----:|:----:|:--:|:--:|:--:|
| id    | int(10) | 否 | 无 | 自增 |primary|
| user_id | int(10) | 否 || users表id |
| content | text | 否 || 修改内容 |
| type | varchar(255) | 否 || 修改方式(后台修改/本人提交) |
| created_at| timestamp| 否 |0000-00-00 00:00:00 |记录创建时间|
| updated_at| timestamp| 否 |0000-00-00 00:00:00 |记录修改时间|

### relations
##### (远程关系对应表)
| 字段名 | 类型 |  空  |默认|注释|索引|
| :---:|:----:|:----:|:--:|:--:|:--:|
| id    | int(10) | 否 | 无 | 自增 |primary|
| relations_id | int(10) | 否 || 主属性 |
| relations_type | varchar(255) | 否 || 对应关系 |
| questions_id | text | 否 || 副属性 |

### admin
##### (管理员表)
| 字段名 | 类型 |  空  |默认|注释|索引|
| :---:|:----:|:----:|:--:|:--:|:--:|
| id    | int(10) | 否 | 无 | 自增 |primary|
| name | varchar(255) | 否 || 名称 |
| email | varchar(255) | 否 || 邮箱名 |
| password | varchar(60) | 否 || 密码 |
| remember_token | varchar(100) | 是 || token |
| created_at| timestamp| 否 |0000-00-00 00:00:00 |记录创建时间|
| updated_at| timestamp| 否 |0000-00-00 00:00:00 |记录修改时间|