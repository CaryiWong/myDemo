$(function(){
  var locationOriginalURL = root;
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
              alert('上传成功！');
         $('.container').append('<p>图片链接：<strong>'+  locationOriginalURL + '/v20/download/img?type=web&path=' + data.data + '</strong></p>');
         $('.showPic').append('<img src='+  locationOriginalURL + '/v20/download/img?path=' + data.data + '&type=web' +'>').show();
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
