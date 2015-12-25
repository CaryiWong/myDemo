angular.module('app.dataset', [])
    .factory('Activity', function () { // 活动/课程基本信息类（唯一属性）
        var args = getArgs();
        if(!args.userid){
            alert('请先登录');
        }
        return function () {
            this.title = '';
            this.isVip = '0';
            this.pay = '1'; // 收费分免费和收费
            this.payType = '1'; // 单一收费还是多收费 肯定是多收费（会员、非会员）
            this.activityType = 'single'; // 单一收费还是分摊位收费
            this["user.id"] = (args.userid && args.userid.replace(/\//, '')) || '';
            this.userid = this["user.id"];
            this.moneyPair = [ // 非会员价100 和 会员价50
                {
                    name: "非会员价",
                    value: 100
                },
                {
                    name: "会员价",
                    value: 50
                }
            ];
            this.domain = {value: '1417406722975'};
            this.childActivity = [
                {
                    name: "摊位名称",
                    people: '10',
                    activityType: 'sub',
                    moneyPair: [
                        {
                            name: "非会员价",
                            value: 100
                        },
                        {
                            name: "会员价",
                            value: 50
                        }
                    ]
                }
            ];
            //this.cover = 'http://test.yi-gather.com:1717/v20//download/img?path=f_img5aebcf6407494f769e891442550026617&type=web';
            //this.imgtexturl = 'http://test.yi-gather.com:1717/v20//download/img?path=f_img5aebcf6407494f769e891442550026617&type=web';
            //this.h5url = '11111';
            //this.huiguurl = '11111';
            //this.startTime = undefined;
            //this.endTime = undefined;
            //this.people = 10;
            //this.phone = '1343333333';
            //this.address = undefined;
            //this.activityType = undefined; // 活动类型 分常规和个性化
            //this.buttonName = undefined; // 个性化下可填写按钮名称
            //this.url = undefined; // 个性化下可填写跳转连接
            //this.introduce = undefined;
            //this.connect = undefined; // 需要进行绑定的活动的opjID
        }
    })
    .factory('dataset', function (Activity) {
        var activity = new Activity();
        return {
            activity: {
                get: function () {
                    return activity;
                }
            }
        }
    })
