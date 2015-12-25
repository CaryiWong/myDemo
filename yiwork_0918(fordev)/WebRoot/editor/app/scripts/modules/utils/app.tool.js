angular.module('app.tool', [])
    .factory('setTextDefault', function () {
        return function (text, defaultT) {
            text = text || '';
            return $.trim(text.toString().replace(/<br>|<br\/>/g, '')).length === 0
                ? (defaultT || '双击进行编辑') : text;
        }
    })
    .directive('customRadio', function () {
        return {
            transclude: true,
            replace: true,
            template: '<div class="custom-radio" ng-transclude></div>'
        }
    })
    .directive('editableText', function (setTextDefault) {
        return {
            transclude: true,
            scope: {
                text: '=editableText'
            },
            template: '<div ng-hide="editing" ng-dblclick="editChange()">{{ text }}</div>' +
            '<input ng-show="editing" ng-blur="editChange()" type="text" ng-model="text" />',
            controller: function ($scope, $element, $attrs) {
                $scope.text = setTextDefault($scope.text);
                $scope.editing = false;
                $scope.editChange = function () {
                    $element.parents('.dragSwitch').attr('draggable', false);
                    $scope.editing = !$scope.editing;
                    if (!$scope.editing) {
                        $element.parents('.dragSwitch').attr('draggable', true);
                        $scope.text = setTextDefault($scope.text);
                        //sendOptions($attrs['optionId'], $attrs['templateId'] ,$scope.text);
                    }
                };
            }
        }
    })
    .directive('editableTextarea', function (setTextDefault, sendOptions) {
        return {
            transclude: true,
            scope: {
                text: '=editableTextarea'
            },
            replace: true,
            template: '<div ng-dblclick="editActive()" ng-bind-html="text" ng-blur="editBlur()" >{{ text }}</div>',
            controller: function ($scope, $element, $attrs) {
                $scope.text = setTextDefault($scope.text);
                $scope.editing = false;
                $scope.editActive = function () {
                    $element.attr('contenteditable', true);
                    $element.parents('.dragSwitch').attr('draggable', false);
                };

                $scope.editBlur = function () {
                    $element.parents('.dragSwitch').attr('draggable', true);
                    $element.attr('contenteditable', false);
                    $scope.text = $element.html();
                    $scope.text = setTextDefault($scope.text);
                    sendOptions($attrs['optionId'], $attrs['templateId']
                        , $scope.text);
                }
            }
        }
    })
    .directive('editableSelect', function (setTextDefault) {
        return {
            transclude: true,
            scope: {
                text: '=editableSelect',
                source: '=source'
            },
            template: '<div ng-hide="editing" ng-dblclick="editChange()">{{ text.name }}</div>' +
            '<select ng-show="editing" ng-blur="editChange()" ' +
            'ng-model="text" ' +
            'ng-init="text = source[0]" ' +
            'ng-options="item.name for item in source" ></select>',
            controller: function ($scope, $element, $attrs) {
                $scope.text.name = setTextDefault($scope.text.name);
                $scope.editing = false;
                $scope.editChange = function () {
                    $scope.editing = !$scope.editing;
                    if (!$scope.editing) {
                        $scope.text.name = setTextDefault($scope.text.name);
                    }
                };
            }
        }
    })
    .directive('editableDate', function (setTextDefault) {
        return {
            transclude: true,
            scope: {
                type: '@type',
                text: '=editableDate'
            },
            template: '<div ng-hide="editing" ng-dblclick="editChange()">{{ text }}</div>' +
            '<div ng-show="editing" class="detailForm-dateArea">' +
            '<input type="text" class="form-control {{type}}" ng-blur="editChange()" ' +
            'placeholder="开始时间" ' +
            'ng-model="text" ' +
            'date-picker/>' +
            '<input type="text" class="timePicker" time-picker/>' +
            '</div>',
            controller: function ($scope, $element, $attrs) {
                $scope.text = setTextDefault($scope.text);
                $scope.editing = false;
                $scope.editChange = function () {
                    $scope.editing = !$scope.editing;
                    if (!$scope.editing) {
                        $scope.text = setTextDefault($scope.text);
                    }
                };
            }
        }
    })
    .directive('editableImage', function ($http, $rootScope, server) {
        return {
            scope: {
                img: '=editableImage'
            },
            template: '<div class="page-image-tip">{{ tip }}</div>' +
            '<div class="progress hide">' +
            '<div class="progress-bar progress-bar-striped active" role="progressbar" style="width: 100%">' +
            '</div>' +
            '</div>' +
            '<input value="" name="pageImage" type="file" />' +
            '<img ng-src="{{ imgPath(img) }}" />',
            controller: function ($scope, $element, $attrs) {
                var fileName;
                var $progress = $element.find('.progress'),
                    $bar = $progress.find('.progress-bar');
                $scope.tip = $attrs['tip'] || '点击上传';
                $scope.imgPath = $rootScope.imgPath;
                if ($scope.img) {
                    $element.find('img').one('load', function () {
                        $element.addClass('active').height(this.height);
                    });
                }
                $element.find('input').on('change', function (event) {
                    var file = this.files[0];
                    var reader = new FileReader();
                    if (file) {
                        reader.readAsDataURL(file);
                        reader.onload = function (e) {
                            fileName = file.name;
                        };
                        $progress.removeClass('hide');
                        server.uploadImage(file)
                            .then(function (img) {
                                $element.find('img').one('load', function () {
                                    $progress.addClass('hide');
                                    $element.addClass('active').height(this.height);
                                });
                                $scope.img = img;
                            })
                    }
                })
            }
        }
    })
    .directive('editableMoney', function (setTextDefault) {
        return {
            transclude: true,
            scope: {
                text: '=editableMoney'
            },
            template: '<div ng-dblclick="editChange()">' +
            '<div ng-if="!text">{{ tip }}</div>' +
            '<div ng-transclude></div>' +
            '</div>',
            controller: function ($scope, $element, $attrs) {
                $scope.tip = setTextDefault($scope.tip);
                $scope.editChange = function () {
                    dialog.show(document.querySelector('.detailForm'));
                };
            }
        }
    })
    .directive('editableCheckbox', function ($compile) {
        return {
            scope: {
                text: '=editableCheckbox',
                name: '@'
            },
            template: '<input type="checkbox" class="yiqi-input-checkbox" name="{{ name }}" value="{{ text }}" >',
            link: function (scope, ele) {
                var $label = ele.find('.yiqi-input-label').attr('editable-text', 'text')
                    .css({position: 'relative', zIndex: 6})
                $compile(ele.children())(scope);
            }
        }
    })
    .directive('editableCheckboxes', function () {
        return {
            scope: {
                options: '=editableCheckboxes',
                name: '@'
            },
            template: '<div class="page-checkbox-area clearfix" ng-repeat="option in options track by $index">' +
            '<div class="page-checkbox pull-left" data-name="{{ name }}" editable-checkbox="option.text" ></div>' +
            '<button ng-show="!$first" ng-click="remove($index)" class="page-checkbox-remove btn btn-link btn-sm pull-left"><i class="iconfont-remove"></i></button>' +
            '</div>' +
            '<button ng-click="add()" class="page-checkbox-add custom-button custom-button-black">' +
            '<i class="iconfont-add"></i> 点击添加更多选项栏</button> ',
            controller: function ($scope) {
                if ($scope.options.length === 0) {
                    $scope.options.push({text: '双击编辑选择内容'});
                }
                $scope.add = function () {
                    $scope.options.push({text: '双击编辑选择内容'});
                };
                $scope.remove = function (index) {
                    $scope.options.splice(index, 1);
                };
            }
        }
    })
    .directive('editableRadio', function ($compile) {
        return {
            scope: {
                text: '=editableRadio',
                name: '@'
            },
            template: '<input type="radio" class="yiqi-input-radio" name="{{ name }}" value="{{ text }}" >',
            link: function (scope, ele) {
                var $label = ele.find('.yiqi-input-label').attr('editable-text', 'text')
                    .css({position: 'relative', zIndex: 6})
                $compile(ele.children())(scope);
            }
        }
    })
    .directive('editableRadios', function () {
        return {
            scope: {
                options: '=editableRadios',
                name: '@'
            },
            template: '<div class="page-radio-area clearfix" ng-repeat="option in options track by $index">' +
            '<div class="page-radio pull-left" editable-radio="option.text" data-name="{{ name }}" ></div>' +
            '<button ng-show="!$first" ng-click="remove($index)" class="page-radio-remove btn btn-link btn-sm pull-left">' +
            '<i class="iconfont-remove"></i></button>' +
            '</div>' +
            '<button ng-click="add()" class="page-radio-add custom-button custom-button-black">' +
            '<i class="iconfont-add"></i> 点击添加更多选项栏</button> ',
            controller: function ($scope) {
                if ($scope.options.length === 0) {
                    $scope.options.push({text: '双击编辑选择内容'});
                }
                $scope.add = function () {
                    $scope.options.push({text: '双击编辑选择内容'});
                };
                $scope.remove = function (index) {
                    $scope.options.splice(index, 1);
                };
            }
        }
    })
//.factory('switchAction', function (interactInfo, articleInfo, InteractPage, ArticlePage) {
//    return {
//        toInteract: function (articlePages, articleBasic, interactPages, interactBasic) {
//            // 图文转h5
//            function onlyGuest(pages) { // 嘉宾唯一板块过滤
//                var only = true;
//                pages = _.map(pages, function (page) {
//                    if (page.type === 'guest') {
//                        if (only) {
//                            only = false;
//                        } else {
//                            page = undefined;
//                        }
//                    }
//                    return page;
//                });
//                pages = _.compact(pages);
//                interactInfo.setPages(pages); // 把新的interactPage推回全局变量
//            }
//
//            angular.forEach(articlePages, function (page) {
//                var interactP = new InteractPage(),
//                    type = page.type && page.type.switchName;
//                if (type) {
//                    interactP.type = type;
//                    interactP.images = page.images;
//                    interactP.texts = page.texts;
//                    interactPages.push(interactP);
//                }
//            });
//            onlyGuest(interactPages);
//            interactInfo.setGuests(articleInfo.getGuests());
//            //_.extend(interactBasic, articleBasic);
//        },
//        toArticle: function (interactPages, interactBasic, articlePages, articleBasic) {
//            // h5转图文
//            angular.forEach(interactPages, function (page, index) {
//                var articleP = new ArticlePage(),
//                    type = page.type && page.type.switchName;
//                if (type) {
//                    articleP.images = page.images;
//                    articleP.texts = page.texts;
//                    articleP.type = type;
//                    articleP.index = index;
//                    articlePages.push(articleP);
//                }
//            });
//            articleInfo.setGuests(interactInfo.getGuests());
//            //_.extend(articleBasic, interactBasic);
//        }
//    }
//})
//.directive('switchType', function ($rootScope, initAllow, articleInfo, interactInfo, switchAction) {
//    return {
//        link: function (scope, ele, attr) {
//            ele.on('click', function () {
//                if (initAllow.get()) {
//                    var articlePages = articleInfo.getPages(),
//                        articleBasic = articleInfo.getBasic(),
//                        interactPages = interactInfo.getPages(),
//                        interactBasic = interactInfo.getBasic();
//                    initAllow.set(false);
//                    if (articlePages.length) {
//                        switchAction.toInteract(articlePages, articleBasic, interactPages, interactBasic)
//                    }
//                    else if (interactPages.length) {
//                        switchAction.toArticle(interactPages, interactBasic, articlePages, articleBasic)
//                    }
//                }
//            })
//        }
//    }
//})
//.directive('summernote', function () {
//    return {
//        link: function (scope, ele) {
//            ele.summernote({
//                height: 200,
//                lang: 'zh-CN',
//                toolbar: [
//                    ['style', ['style', 'fontsize', 'bold', 'italic', 'underline',
//                        'strikethrough'
//                    ]],
//                    ['style', ['color']],
//                    ['insert', ['picture', 'link', 'video', 'table']],
//                    ['layout', ['ul', 'ol', 'paragraph']],
//                    ['misc', ['codeview', 'undo', 'redo']]
//                ]
//            });
//        }
//    }
//});
