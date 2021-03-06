## 状态码列表
### 通用部分
> `401` 用户或医生未登录   
> `404` url错误   
> `1100` 系统发生未知错误    
> `1101` sql语句错误   
> `80001` 图片未上传成功     
> `80002` 图片大小太大   
> `80003` 图片格式不正确成功   
> `90001` 有必填的输入项为空   
> `90004` 紧急咨询id不存在   
> `90005` 职称输入项只能为1 2 3 4 5    
> `90006` 用户id不正确   
> `90007` 医生id不正确   
> `90008` 性别输入项非法   
> `90009` 输入项必须为正整数  
> `90010` 金额不能为0且不能超过上限65535   
> `90011` 医生未通过认证   
> `90012` 医院id不正确(或者为空)   
> `90013` 输入项必须为数组  
> `90014` 预约(就诊)id不存在  
> `90015` 输入字段只能为0或1   

### 注册登录模块  
> `10001` 短信验证码验证码不正确   
> `10002` 手机号被注册过   
> `10003` 手机号与注册邮箱不匹配   
> `10004` 该手机号未注册   
> `10005` 登录密码不正确   
> `10006` 发送验证码过程中出错   
> `10007` 手机号码不合法  
> `10008` 邮箱不合法   
> `10009` 注册的用户类型不正确   
> `10010` 用户已经退出登录了   
> `10011` 医生已经退出登录了   
> `10012` 短信验证码已过时   

### 个人模块
> `20001` 不能重复新建本人病历  
> `20002` 不能重复新建同名病历  
> `20003` 出生年月格式不正确   
> `20004` 新密码确认不一致   
> `20005` 用户的姓名和出生年月还未设置，不能新建本人病历   
> `20006` 新密码与旧密码一样   
> `20007` 旧密码验证不通过   
> 

### 预约模块
> `30001` 用户已经收藏过该名医生  
> `30002` 该病历不存在   
> `30003` 用户不存在该病历   
> `30004` 紧急咨询等待时间不合法(应该为正整数)   
> `30005` 一个病历不能进行多个紧急咨询   
> `30006` 用户不存在该紧急咨询单   
> `30007` 该紧急咨询单已经付过款了   
> `30008` 非法的紧急咨询单id  
> `30009` 排序规则非法(只能为asc或desc)   
> `30010` 经度输入非法   
> `30011` 纬度输入非法   
> `30012` 排序字段非法      
> `30013` 该预约已经取消了   
> `30014` 该紧急咨询不能被取消(一般情况下是该紧急咨询已经是关闭状态)   
> `30015` 该预约单已经支付过了，不能付款   
> `30016` 该预约单处于关闭状态，不能付款   
> `30017` 该预约单不是正常预约单(一般是紧急咨询单)   
> `30018` 不能收藏该医生(一般是收藏的医生为非认证)   
> `30019` 该时间不能被预约(一般情况下是该时间不是医生的可预约时间或者该时间被别人约了)   
> `30020` 预约类型不正确(只能为1或2)   
> `30021` 已经是就诊状态了   
> `30022` 预约单不属于该登录医生  
> `30023` 付款未付款筛选字段不正确(只能为0 1)   
> `30024` 付款的预约不能被取消   
> `30025` 状态异常,不能取消预约   
> `30026` 紧急咨询还有追加的金额未付款   
> `30027` 病历与该医生的预约就诊还没结束，不能再进行预约    
> `30028` 提醒用户付款无效    
> `30029` 提醒用户答题无效   
> `30030` 该医生不在你的收藏列表里   
>    

### 时间设置
> `40001` 错误的week格式   
> `40002` 错误的type格式   
> `40003` 错误的时间格式    
> `40004` 起始时间比结束时间大    
> `40005` 系统错误的存储时间，请联系管理员    
> `40006` 设置的时间和已设的时间冲突    
> `40007` 要删除的时间已被删除    
> `40008` 传值不是int型    
> `40009` 年月日错误    
> `40010` 转诊医生日期列表错误的请求    

### 就诊模块
> `50001` 就诊未完成，不能评价该医生   
> `50002` 已经评价过该医生   
> `50003` 评分输入项不正确(应该大于0，小于等于5)   
> `50004` 开关传值错误    
> `50005` 日期格式错误    
> `50006` 时间格式错误    
> `50007` 传值不是json类型    
> `50008` 错误的预约    
> `50009` 已诊断    
> `50010` 无效的诊断信息请求    
> `50011` 复诊时间不可用    
> `50012` 错误的复诊类型    
> `50013` 不是自己的转诊    
> `50014` 已经操作过的会诊    
> `50015` 所拒绝的会诊不是医生本人    
> `50016` 不能转诊给自己    
> `50017` 无权开处方    

### 聊天模块
> `70001` 该医生不是当前用户的联系人   
> `70002` 该用户不是当前医生的联系人   
> `70003` 用户联系人与病历id不匹配   
> `70004` 更新时间字段的格式不正确   

### 支付部分
> `60001` 微信支付统一下单出错   
> 