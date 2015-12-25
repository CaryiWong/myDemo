var dragObj; // 拖曳传输对象
angular.module('app.drag', [])
    .factory('sortPages', function () {
        return function (pages) {
            angular.forEach(pages, function (page, index) {
                page.index = index;
            })
        }
    })
    .factory('dragAction', function (InteractFormElement, sortPages) {
        return {
            createFormElement: function (scope, ele, obj) {
                var index = scope.index;
                var page = new InteractFormElement(obj.templateName, undefined, scope.index);
                page.html = '<div static-' + obj.templateName + '></div>';
                scope.$apply(function () {
                    scope.pages.splice(index, 0, page);
                    sortPages(scope.pages);
                });
            },
            changeIndex: function (scope, ele, obj) {
                var newIndex = scope.index,
                    oldIndex = obj.page.index;
                if (newIndex === oldIndex) return;
                scope.$apply(function () {
                    scope.pages.splice(oldIndex, 1);
                    scope.pages.splice(newIndex, 0, obj.page);
                    sortPages(scope.pages);
                });
            }
        }
    })
    .directive('dragTemplate', function () {
        return {
            scope: {
                url: '@templateUrl',
                type: '@templateType',
                name: '@templateName',
                dragType: '@dragAction'
            },
            link: function (scope, ele, attr) {
                ele.attr('draggable', true)
                    .on('dragstart', function (event) {
                        dragObj = {
                            type: scope.dragType,
                            templateName: scope.name,
                            templateType: scope.type,
                            url: scope.url
                        };
                    })
            }
        }
    })
    .directive('dragPage', function (sortPages) {
        return {
            scope: {
                page: '=dragPage',
                pages: '=pages'
            },
            link: function (scope, ele) {
                ele.on('mouseenter', function () {
                    ele.find('.dragPage-buttons').show().end()
                        .find('.dragSwitch').addClass('active');
                }).on('mouseleave', function () {
                    ele.find('.dragPage-buttons').hide().end()
                        .find('.dragSwitch').removeClass('active');
                })
                    .find('.dragPage-remove').on('click', function () {
                        var index = scope.page.index;
                        scope.$apply(function () {
                            scope.pages.splice(index, 1);
                            sortPages(scope.pages);
                        })
                    })
            }
        }
    })
    .directive('dragArea', function ($http, dragAction) {
        return {
            scope: {
                index: '@',
                pages: '='
            },
            link: function (scope, ele, attr) {
                ele.on('dragover', function (event) {
                    event.preventDefault();
                })
                    .on('dragenter', function () {
                        ele.addClass('enter');
                    })
                    .on('dragleave', function () {
                        ele.removeClass('enter');
                    })
                    .on('drop', function (event) {
                        var dragVar = dragObj;
                        ele.removeClass('enter');
                        event.preventDefault();
                        dragAction[dragVar.type](scope, ele, dragVar);
                    })
            }
        }
    })
    .directive('dragSwitch', function () {
        return {
            scope: {
                page: '=dragSwitch'
            },
            link: function (scope, ele, attrs) {
                ele.on('dragstart', function (event) {
                    dragObj = {
                        type: attrs['dragAction'],
                        page: scope.page
                    };
                })
            }
        }
    });
