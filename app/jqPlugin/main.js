$(function(){
  var locationOriginalURL = 'http://test.yi-gather.com:1717';
  $('.upload').on('click', function () {
    if ($('.uploadImg').val()) {
      if (typeof FormData === "undefined")
        throw new Error("FormData is not implemented");
      var request = new XMLHttpRequest();
      request.open('POST', locationOriginalURL + '/v20/upload/uploadimg');
      request.onreadystatechange = function () {
        if (request.readyState === 4) {
          if (request.status === 200) {
            var data = JSON.parse(request.responseText);
            if (data.cord === 0) {
         $('.container').append('<p>'+  locationOriginalURL + '/v20/download/img?path=' + data.data + '&type=web' +'</p>')
            } else {
              alert('图片上传失败,请重新上传' + data.msg);
            }
          } else {
            alert("上传出错 " + request.status);
          }
        }

      };
      var formdata = new FormData();
      formdata.append('img', $('.uploadImg')[0].files[0]);
      request.send(formdata);
    }
  });

});
