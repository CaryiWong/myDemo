/**
 * Created by Caryi on 2016/1/8.
 */
function getArgs() {
  var args = {},
    query = location.search.substring(1),
    pairs = query.split("&");
  for (var i = 0; i < pairs.length; i++) {
    var pos = pairs[i].indexOf('=');
    if (pos == -1) continue;
    var argname = pairs[i].substring(0, pos),
      value = pairs[i].substring(pos + 1);
    value = decodeURIComponent(value);
    args[argname] = value;
  }
  return args;
}

var url = 'http://' + location.host + location.pathname;
var args = getArgs();
var activityid = args['activityid'];
var dataPage = args['page']; //pageNow = dataPage + 1
var pageNow = $('#pagenum').val();
var pageAll = $('#pagecount').val();
var totalNum = $('#total').val();
$('.pageTotal').html('共' + pageAll + '页,' + totalNum + '条');
//分页代码
var $pagination = $('.pagination');
for( var j = 1 ; j <= pageAll ; j++ ){
  $pagination.find('.next').before(
    '<li class="choosePage"><a id=\"page' + j + '\" href='+ url + '?page='+ (j-1) + '&size=25&activityid=' + activityid +'>' + j + '</a></li>'
  );
}
$('#page'+ pageNow).parent().addClass('active');
var $preLi = $('.previous');
var $pre = $preLi.find('a');
var $nextLi = $('.next');
var $next = $nextLi.find('a');
if( dataPage > 0){
  $pre.attr('href',url + '?page='+ (dataPage-1) + '&size=25&activityid=' + activityid);
}else{
  $pre.attr('disabled','disabled');
  $preLi.addClass('disabled');
}
if(dataPage < pageAll-1){
  $next.attr('href',url + '?page='+ (dataPage +1) + '&size=25&activityid=' + activityid);
}else{
  $next.attr('disabled','disabled');
  $nextLi.addClass('disabled');
}
