/**
 * Created by Administrator on 2015/9/16 0016.
 */
define(["avalon","./mkoaMsg/mkoaMsg","./mkoaAjax/mkoaAjax","mmRouter/mmRouter"], function (avalon,$msg,$a) {
//返回数组下标
    if(!Array.indexOf) {
        Array.prototype.indexOf = function (el) {
            for (var i = 0, n = this.length; i < n; i++) {
                if (this[i] === el) {
                    return i;
                }
            }
            return -1;
        }
    }
//判断对象是否为空
    function isEmpty(obj)
    {
        for (var name in obj)
        {
            return false;
        }
        return true;
    }
    var sys={};//系统函数
    /**
     * 功能 : 把url地址转换成js对象
     * 例子 : urlToObject("?a=1&b=2")
     * 结果 : { a="1", b="2"}
     * */
    sys.urlToObject=function (url) {
        var urlObject = {};
        if (/\?/.test(url)) {
            var urlString = url.substring(url.indexOf("?") + 1);
            var urlArray = urlString.split("&");
            for (var i = 0, len = urlArray.length; i < len; i++) {
                var urlItem = urlArray[i];
                var item = urlItem.split("=");
                urlObject[item[0]] = item[1];
            }
            return urlObject;
        }
    };
    sys.extend=function(obj,newobj,isReset){//替换存在属性
        avalon.each(obj,function(key){
            if(newobj[key]==0||newobj[key]){
                if(avalon.isPlainObject(obj[key])){
                    if(avalon.isPlainObject(newobj[key])&&!isEmpty(newobj[key])){
                        sys.extend(obj[key],newobj[key],isReset);
                    }else{
                        obj[key]['value'] = newobj[key];
                    }
                }else{
                    obj[key]=newobj[key];
                }
            }else{
                if(isReset){//重置值
                    obj[key]=isNaN(obj[key])?0:'';
                }
            }
        });
    };
    //页面路由
    sys.router=function(defaultTpl){
        var router = avalon.define({
            $id: 'router',
            defaultTpl:defaultTpl,//默认加载的模板
            GET:{},//模板参数
            curTpl: '',//当前模板
            curHref: ''//当前点击菜单
        });
        //定义模板路由
        avalon.router.get("/", function () {
            var tpl=window.location.href.split('#!/?')[1];
            var sign='?'+app.$v;//版本号
            var tplArr=[];
            if(tpl)tplArr=tpl.split('?');
            router.GET={};//传递参数
            if(tplArr[1]){
                router.GET=sys.urlToObject('?'+tplArr[1]);//url参数
                sign='&v='+app.$v;
            }
            var safe = ['app','router'];//页面切换时保护的VM对象
            avalon.each(avalon.vmodels, function (key) {//清理页面VM模型
                if (safe.indexOf(key) == -1) {
                    avalon.vmodels[key] = null;
                    delete avalon.vmodels[key];
                }
            });
            router.curHref = '#!/?' + tpl;//用于点亮左侧菜单
            router.curTpl = tpl ? app.$host + tpl+sign :router.defaultTpl; //设置加载页面及默认页面
        });
        avalon.history.start({
            basepath: "/"
        });
        avalon.scan();
    };
    //json返回预处理
    sys.preError=function(data,callback){
        var error=data.error;
        var msg='';
        if(!error){
            callback(data.data);
        }else{
            //这里对一些特殊错误信息进行预处理
           switch (error){
               case 404:msg='找不到页面';break;
               case 401:
                   msg='未登录...';
                   app.islogin=0;
                   break;
               default :
                   msg=error;
               break;
           }
         if(msg)$msg.error(msg);
        }
    };
    //lgout退出登录
    sys.lgout=function(){
        $msg.loading();
        $a.post(app.$host+'ucenter/auth/lgout',{},function(data){//获取列表数据
            $msg.closeLoading();
            sys.preError(data,function(data){
                $msg.success('正在跳转...');
                app.islogin=0;
            });
        });
    };
    //检测登录状态
    sys.checkLogin=function(callback){
        $a.post(app.$host+'ucenter/auth/checkLogin',{},function(data){//获取列表数据
            sys.preError(data,function(data){
                app.islogin=1;
                if(callback)callback();
            });
        });
    };

    return sys;
});