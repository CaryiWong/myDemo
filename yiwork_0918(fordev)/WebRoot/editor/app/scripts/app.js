(function () {
    angular.module('app', ['ngSanitize', 'ngAnimate', 'ngRoute', 'ngHtmlCompile',
        'app.dataset', 'app.success', 'app.export', 'app.article'])
        .config(function ($routeProvider) {
            // 路由定义
            $routeProvider
                .when('/', {
                    templateUrl: 'views/start.html'
                })
                .when('/article', {
                    templateUrl: 'views/article.html',
                    controller: 'ArticleController'
                })
                .when('/export', {
                    templateUrl: 'views/export.html',
                    controller: 'ExportController'
                })
                .when('/connect/:type', {
                    templateUrl: 'views/connect.html',
                    controller: 'ConnectController'
                })
                .when('/success', {
                    templateUrl: 'views/success.html',
                    controller: 'SuccessController'
                })
                .otherwise({redirectTo: '/'});
        })
        //.value('pageName', pageName)
        //.value('codeName', codeName)
        //.value('bindReviewPath', serverName + '/activity/bdhuiguurl')
        //.value('labelsPath', serverName + '/labels/lablelist')
        //.value('updatepagePath', serverName + '/editor/updatehtmlpage')
        //.value('coursePath', serverName + '/activity/getcourselist')
        //.value('activityPath', serverName + '/activity/getactivitylist')
        //.value('uploadImgPath', serverName + '/upload/uploadimg')
        //.value('saveOptionPath', serverName + '/editor/saveobjectoptions')
        .run(function ($rootScope) {
            $rootScope.$on('$routeChangeSuccess', function (event, next, before) {
                $rootScope.showNav = /article|interact|export/.test(next.originalPath);
                switch (next.originalPath) {
                    case '/article':
                        $rootScope.navTitle = '编辑活动';
                        break;
                    case '/interact':
                        $rootScope.navTitle = '编辑HTML5';
                        break;
                    case '/export':
                        $rootScope.navTitle = '导出';
                        break;
                    default:
                        $rootScope.navTitle = '一起编辑器';
                        break;
                }
                if (before) {
                    if (/article/.test(before.loadedTemplateUrl)) {
                        $('.editorCopy').find('.editorArea-interact').remove().end()
                            .append($('.editorForm .editorArea-interact').clone());
                    }
                }
            })
        })
        //.factory('initAllow', function () {
        //    var allow = true;
        //    return {
        //        get: function () {
        //            return allow;
        //        },
        //        set: function (value) {
        //            if (allow) {
        //                allow = value;
        //            }
        //        }
        //    }
        //})
        .directive('preventLink', function () {
            return {
                link: function (scope, ele, attr) {
                    var $body = $('body');
                    $body.on('click', 'a', function (event) {
                        var href = this.getAttribute('href');
                        if (/tool/.test(href)) {
                            event.preventDefault();
                        }
                    })
                }

            }
        })
        .controller('AppController', function ($scope, $rootScope, serverName) {
            $rootScope.imgPath = function (path) {
                if (path) {
                    return serverName + '/download/img?path=' + path + '&type=web';
                } else {
                    return undefined;
                }
            };
        });
})();
