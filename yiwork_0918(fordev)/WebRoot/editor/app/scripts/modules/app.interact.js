angular.module('app.interact', ['app.drag', 'app.static'])
    .factory('InteractPage', function () { // 页面
        return function () {
            this.type = undefined;
            this.html = undefined;
            this.images = []; // 页面元素下的图片
            this.texts = []; // 页面元素下的文字
            this.templateName = undefined;
            this.elements = []; // 表单页面中多少个元素
        };
    })
    .factory('InteractFormElement', function () { // 表单元素
        return function (templateName, type, index) {
            this.templateName = templateName;
            this.type = type;
            this.index = index;
            this.images = [];
            this.texts = [];
            this.options = [];
            this.html = undefined;
        }
    })
    .directive('rollStatic', function (){ // 随滚动工具栏
        return {
            link: function (scope, ele){
                $(window).scroll(function (){
                    var $area = $('.editorCustom .editorForm .editorArea');
                    if($area.length){
                        var top = $area.offset().top;
                        if(this.document.body.scrollTop > top && !ele.is('.rollStatic')){
                            ele.addClass('rollStatic');
                        } else
                        if(this.document.body.scrollTop < top && ele.is('.rollStatic')) {
                            ele.removeClass('rollStatic');
                        }
                    } else {
                        $(window).off('scroll');
                    }
                })
            }
        }
    })
    .controller('InteractController', function ($scope, InteractPage, server) {
        $scope.formTemplates = server.getTemplatesSync();
        $scope.applyForm = new InteractPage();
        $scope.feedbackForm = new InteractPage();
    });
