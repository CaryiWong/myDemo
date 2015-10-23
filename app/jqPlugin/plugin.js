/**
 * Created by Caryi on 2015/10/19.
 */
(function($){
  $.fn.userCp = function(options){
    var dft ={
      name:'hoster',
      url:'http://www.aaaaa.com',
      size:'12px',
      align:'left'
    };
    var opts = $.extend(dft,options);
    var style = "style=\'font-size:"+opts.size+";text-align:"+opts.align+";\'";
    var cpText = "<p " + style + ">版权归<a href=" + opts.url + ">" + opts.name + "</a>所有";
    $(this).append(cpText);
  }
})(jQuery);
