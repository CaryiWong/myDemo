angular.module('app.export', ['app.server'])
    .directive('urlBack', function () {
        return {
            link: function (scope, ele) {
                ele.on('click', function () {
                    window.history.back();
                })
            }
        }
    })
    .directive('exportCreate', function (server, dataset) {
        return {
            link: function (scope, ele) {
                function create(cb, errorcb) {
                    var basic = dataset.activity.get();
                    async.series([
                        function (pcb) {
                            server.sendActivity(basic)
                                .then(function (data) {
                                  pcb(null);
                                }, function () {
                                    pcb('创建活动失败');
                                });
                        }
                    ], function (err, results) {
                        if (err) {
                            alert(err);
                            errorcb && errorcb();
                        } else {
                            server.sendHTML(basic)
                                .then(cb);
                        }
                    });
                }
                ele.attr('disabled', false)
                    .on('click', function () {
                        ele.attr('disabled', true);
                        create(function () {
                            ele.attr('disabled', false);
                            window.location.href = '#success';
                        }, function () {
                            ele.attr('disabled', false);
                        });
                    })
            }
        }
    })
    .controller('ExportController', function () {

    })
