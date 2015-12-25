angular.module('app.success', [])
    //.factory('activityInfo', function () {
    //    var datas = [];
    //    return {
    //        get: function () {
    //            return datas;
    //        },
    //        set: function (v) {
    //            datas = v;
    //        }
    //    }
    //})
    //.factory('courseInfo', function () {
    //    var datas = [];
    //    return {
    //        get: function () {
    //            return datas;
    //        },
    //        set: function (v) {
    //            datas = v;
    //        }
    //    }
    //})
    //.directive('connectContent', function (interactInfo) {
    //    return {
    //        link: function (scope, ele, attrs) {
    //            ele.on('click', function () {
    //                $('.connect-content').removeClass('active');
    //                ele.addClass('active');
    //                interactInfo.getBasic().connect = attrs['id'];
    //            })
    //        }
    //    }
    //})
    //.directive('chooseButton', function () {
    //    return {
    //        link: function (scope, ele, attr) {
    //            ele.on('click', function () {
    //                $('.connect-choose button')
    //                    .toggleClass('custom-button-red')
    //                    .toggleClass('custom-button-transparent');
    //                scope.$apply(function () {
    //                    scope.choose = attr['chooseButton'];
    //                });
    //            })
    //        }
    //    }
    //})
    //.directive('connectCreate', function ($location, $rootScope, interactInfo, articleInfo, updateHTML, bindReview) {
    //    return {
    //        link: function (scope, ele, attrs) {
    //            var action = {
    //                blog: function (cb) {
    //                    var basic = articleInfo.getBasic();
    //                    bindReview(basic.connect, scope.choose, function (data) {
    //                        cb && cb();
    //                    });
    //                },
    //                form: function (cb) {
    //                    var basic = interactInfo.getBasic();
    //                    updateHTML(basic.connect, scope.choose, 'interact', function (data) {
    //                        basic.h5url = data.data;
    //                        cb && cb();
    //                    });
    //                }
    //            };
    //            ele.on('click', function () {
    //                ele.attr('disabled', true);
    //                scope.$apply(function () {
    //                    action[attrs['action']](function () {
    //                        ele.attr('disabled', false);
    //                        window.location.href = '#success';
    //                    });
    //                });
    //            })
    //        }
    //    }
    //})
    //.controller('ConnectController', function ($scope, $routeParams, editType, getConnectResource, activityInfo, courseInfo) {
    //    $scope.editType = editType.get();
    //    getConnectResource('activity', $routeParams.type, function (data) {
    //        $scope.$apply(function () {
    //            $scope.activity = data;
    //            activityInfo.set(data);
    //        })
    //    });
    //    getConnectResource('course', ' ' || $routeParams.type, function (data) {
    //        $scope.$apply(function () {
    //            $scope.course = data;
    //            courseInfo.set(data);
    //        })
    //    });
    //})
    .controller('SuccessController', function ($scope, $location) {
        $scope.success = function () {
            $location.path('/');
            window.location.reload();
        }
    });
