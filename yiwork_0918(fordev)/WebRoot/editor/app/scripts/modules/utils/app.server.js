function getCode($doms) {
    var result = '';
    $doms.each(function () {
        result += this.outerHTML;
    });
    return result;
}

function formatDom($origins) {
    var $loadDom = $('.loadDom');
    var $pages = $origins.clone().first().addClass('active').end();
    $pages.find('.page-image').addClass('active').find('.page-image-tip, .progress').remove();
    $pages.find('input').not('form input').remove();
    $pages.find('[editable-text] input').remove();
    $pages.find('.dragArea').remove();
    $pages.find('.dragPage-buttons').remove();
    $pages.find('.dragSwitch').removeAttr('draggable');
    $pages.find('.page-radio-add').remove();
    $pages.find('.page-radio-remove').remove();
    $pages.find('.page-checkbox-add').remove();
    $pages.find('.page-checkbox-remove').remove();
    $loadDom.append($pages);
    return $pages;
}

var serverName = window.location.origin + '/v20/' || 'http://test.yi-gather.com:1717/v20/';
angular.module('app.server', [])
    .value('serverName', serverName)
    .factory('server', function ($http, $q, serverName) {
        var server = serverName;
        return {
            getLabels: function () {
                var defer = $q.defer();
                $http.get(server + 'labels/lablelist', {
                    params: {
                        page: 0,
                        size: 999,
                        pid: 0
                    }
                }).success(function (data) {
                    if (data.cord === 0) {
                        var result = [];
                        $.each(data.data, function () {
                            result.push({
                                name: this.zname,
                                value: this.id
                            });
                        });
                        defer.resolve(result);
                    } else {
                        console.error('获领域失败');
                        defer.reject();
                    }
                }).error(function () {
                    console.error('获领域失败');
                    defer.reject();
                });
                return defer.promise();
            },
            getAddress: function () {
                var defer = $q.defer();
                $http.get(server + 'workspace/getallworkspace').success(function (data) {
                    if (data.cord === 0) {
                        var result = [];
                        $.each(data.data, function () {
                            result.push({
                                name: this.spacename,
                                value: this.id
                            });
                        });
                        defer.resolve(result);
                    } else {
                        console.error('获地址失败');
                        defer.reject();
                    }
                }).error(function () {
                    console.error('获地址失败');
                    defer.reject();
                });
                return defer.promise;
            },
            getTemplatesSync: function () {
                return [
                    {
                        name: 'label'
                    },
                    {
                        name: 'text'
                    },
                    {
                        name: 'checkbox'
                    },
                    {
                        name: 'radio'
                    }
                ]
            },
            uploadImage: function (imgFile) {
                var path = server + 'upload/uploadimg',
                    xhr = new XMLHttpRequest(),
                    defer = $q.defer(),
                    formdata = new FormData();
                formdata.append('img', imgFile);
                xhr.open('POST', path);
                xhr.send(formdata);
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4) {
                        var data = JSON.parse(xhr.responseText),
                            img = data.data;
                        if (data.cord === 0) {
                            defer.resolve(img);
                        } else {
                            defer.reject();
                        }
                    }
                };
                return defer.promise;
            },
            getActivityData: function (basic) {
                var defaults = {
                    "type": 0,
                    "title": basic.title,
                    "summary": basic.introduce || '',
                    "cover": basic.cover || '',
                    "open": basic.startTime || '',
                    "end": basic.endTime || '2015-01-23 12:00:00',
                    "isvip": basic.isVip,
                    "cost": basic.pay, // 0免费  1收费
                    "pricetype": 1, // 0是单一  1是多项收费 因为是非会员+会员价 所以必然是1
                    "price": basic.price || basic.moneyPair[0].value,
                    "vprice": basic.vprice || basic.moneyPair[1].value,
                    "pricekey": '非会员价,会员价', // 多收费键值
                    "pricevalue": basic.pricevalue || basic.moneyPair[0].value.toString() + ','
                    + basic.moneyPair[1].value.toString(), // 多收费钱值
                    "address": basic.address.name,
                    "spaceInfo.id": basic.address.value,
                    "tel": basic.phone || '',
                    "maxnum": basic.people || '50', // 最多人数
                    "labels": basic.domain.value,
                    "activityType": basic.activityType,
                    "imgtexturl": basic.imgtexturl || '',
                    "h5url": basic.h5url || '',
                    "huiguurl": basic.huiguurl || '',
                    "user.id": basic.userid,
                    "userid": basic.userid
                }
                return $.extend({}, basic, defaults);
            },
            cloneChildActivity: function (data, child, basic) {
                var activityClone = _.clone(data);
                activityClone.price = child.moneyPair[0].value;
                activityClone.vprice = child.moneyPair[1].value;
                activityClone.pricevalue = activityClone.price.toString() + ','
                    + activityClone.vprice.toString();
                activityClone.title = child.name;
                activityClone.maxnum = child.people;
                activityClone.activityType = child.activityType;
                activityClone.pid = basic.id;
                if (activityClone.price === '0' && activityClone.vprice === '0') {
                    activityClone.cost = '0';
                }
                return activityClone;
            },
            sendActivity: function (basic) {
                var path = server + 'activity/createactivity',
                    self = this,
                    defer = $q.defer(),
                    data = this.getActivityData(basic);
                if (data.cost.toString() === '0') {
                    data.price = 0;
                    data.vprice = 0;
                    data.pricevalue = '0,0';
                }
                $.ajax(path, {
                    type: 'post',
                    dataType: 'json',
                    data: data
                })
                    .success(function (serverRes) {
                        if (serverRes.cord === 0) {
                            var serverData = serverRes.data;
                            basic.id = serverData.id;
                            basic.objtype = 'activity';
                            basic.userid = serverData.user.id;
                            console.log('父内容保存成功');
                            if (basic.pay === '1' && basic.activityType === 'set') {
                                async.eachSeries(basic.childActivity, function (child, ecb) {
                                    var activityClone = self.cloneChildActivity(data, child, basic);
                                    self.sendActivity(activityClone)
                                        .then(function (childData) {
                                            console.log('子活动' + child.name + '创建成功');
                                            child.id = childData.id;
                                            ecb();
                                        }, function (e) {
                                            ecb('创建子活动集合失败 ' + e);
                                        });
                                }, function (err) {
                                    if (err) {
                                        console.error(err);
                                        defer.reject();
                                    } else {
                                        defer.resolve();
                                    }
                                });
                            } else {
                                defer.resolve(serverData);
                            }
                        } else {
                            console.error('父内容保存失败');
                            defer.reject();
                        }
                    })
                    .error(function () {
                        console.error('父内容保存失败');
                        defer.reject();
                    });
                return defer.promise;
            },
            sendHTML: function (basic) {
                var code,
                    defer = $q.defer(),
                    $forms = formatDom($('.editorCopy .editorArea-interact .page'));
                $forms.filter('.activityInfo').attr('data-activity-id', basic.id);
                if (basic.pay === '1' && basic.activityType === 'set') {
                    $forms.find('.price-checkbox').each(function () {
                        var $this = $(this);
                        this.value = _.find(basic.childActivity, function (c) {
                            return c.name === $this.attr('data-activity-name');
                        }).id;
                    });
                }
                code = getCode($forms);
                $.ajax(server + 'activity/saveandbdpage', {
                    dataType: 'json',
                    type: 'post',
                    data: {
                        htmltype: 'h5',
                        pagecode: code,
                        actid: basic.id,
                        userid: basic.userid
                    }
                }).success(function (data) {
                    if (data.cord === 0) {
                        console.log('代码发送成功');
                        basic.h5url = data.data;
                        defer.resolve(undefined, data);
                    } else {
                        console.error('代码发送失败');
                        defer.reject();
                    }
                }).fail(function () {
                    console.error('代码发送失败');
                    defer.reject();
                });
                return defer.promise;
            }
        }
    });
