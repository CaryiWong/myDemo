require('jquery');
require('cropit');
$(function() {
  var cWidth = window.screen.width;
  //$('#box').animate({ textIndent: 0 }, {
  //  step: function(now,fx) {
  //    $(this).css('-webkit-transform','rotate(+=10deg)');
  //  },
  //  duration:'slow'
  //},'linear');
  $('.image-editor').cropit({
  exportZoom: 1.25,
  imageBackground: true,
  imageBackgroundBorderWidth: 1
});

  $('.export').click(function() {
    var imageData = $('.image-editor').cropit('export');
    window.open(imageData);
  });
  $("cropit-image-background-container").css("overflow",'auto');
  $('form').submit(function() {
    // Move cropped image data to hidden input
    var imageData = $('.image-editor').cropit('export');
    $('.hidden-image-data').val(imageData);

    // Print HTTP request params
    var formValue = $(this).serialize();
    $('#result-data').text(formValue);

    // Prevent the form from actually submitting
    return false;
  });


});


