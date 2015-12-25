angular.module('app.article', ['app.form', 'app.interact', 'app.tool'])
    .directive('addChildActivity', function () {
        return {
            scope: {
                activity: '='
            },
            link: function (scope, ele) {
                ele.on('click', function () {
                    scope.$apply(function () {
                        scope.activity.push({
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
                        });
                    });
                })
            }
        }
    })
    .directive('removeChildActivity', function () {
        return {
            scope: {
                activity: '=',
                index: '@'
            },
            link: function (scope, ele) {
                ele.on('click', function () {
                    scope.$apply(function () {
                        scope.activity.splice(scope.index, 1);
                    })
                })
            }
        }
    })
    .directive('selectInput', function (server) {
        return {
            link: function (scope, ele, attrs) {
                var dataType = attrs['selectInput'];
                if (dataType === 'address') {
                    server.getAddress()
                        .then(function (data) {
                            scope.data = data;
                        })
                }
            }
        }
    })
    .controller('ArticleController', function ($scope, $rootScope, dataset) {
        $rootScope.label = 'article';
        $scope.basic = dataset.activity.get();
    });
