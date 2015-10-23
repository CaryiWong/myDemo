//this 在不同调用方式时绑定的不同的值
//var stooge = {
//  value:6,
//  increatment:function(inc){
//    this.value += typeof(inc)=='number'?inc:1;
//this 绑定的是对象
//  }
//};
//stooge.increatment(5);
var add = function(a,b){
  if(typeof a !=='number' || typeof b !=='number'){
    throw {
      name : 'typeError',
      error : 'I need numbers'
    }
  }
  return a+b;
};
//stooge.double = function(){
//  var that = this;
//  var helper = function(){
//    that.value = add(that.value,that.value);
//  };
//  helper();
//};
//stooge.double();
//document.writeln(stooge.value);

//var Quo = function(string){
//  this.status = string;
//};
//
//Quo.prototype.get_Status = function(){
//  return this.status;
//};
//
//var array = [3,4];
//var sum = add.apply(null,array);
//document.writeln('sum =' + sum);
//
//var statusObject={
//  status : "abc-2"
//};
//
//var sta = Quo.prototype.get_Status.apply(statusObject);
//通过apply 把statusObject绑定给this，从而可以使用Quo的公共方法
// document.writeln('sta =' + sta);



//函数被调用时返回arguments数组，通过它函数可以访问它被调用时传递给它的参数列表
//var sum = function(){
//  var sum=0;
//  for(var i =0;i<arguments.length;i++){
//    sum += arguments[i];
//  }
//  return sum;
//};
//
//document.writeln(sum(2,3,4,5,6,7,8));


//var tryIt = function(){
//  try{
//   alert(add('aaaa'));
//  }
//  catch(e){
//    alert(e.name+':'+e.error);
//  }
//};
//tryIt();


//闭包
//var fade = function (node) {
//  var level = 1;
//  var step = function(){
//    var hex = level.toString(16);
//    //hex 1~f
//    node.style.backgroundColor = '#FFFF'+ hex + hex;
//    if(level <15){
//      level+=1;
//      setTimeout(step,100); //第2-15次
//    }
//  };
//  setTimeout(step,100); //第1次，变黄
//};
//fade(document.body);


//
//add_the_handlers = function(nodes){
//  var i;
//  for(i = 0; i < nodes.length; i++){
//    nodes[i].onclick = function (i){
//    return function (e) {
//      alert(e);
//    };
//  }(i);
//  }
//};
//var parentNode = document.getElementsByTagName('p');
//var pA = parentNode.childNodes;
//alert(pA);
//add_the_handlers( parentNode );


Funciton.method('inherits',function(Parent){
  this.prototype = new Parent();
  return this;
});

var Cat = function(name){
  this.name = name;
  this.saying = 'meow';
}.inherits(Mammal).method('purr',function(n){
    var i,s='';
    for (i = 0; i < n; i+=1) {
      if(s){
        s += '-';
      }
      s += 'r';
    }
    return s;
  }).method('get_name',function(){
    return this.saying() + '' +this.name ;
  });









//writeln( ) 方法与 write( ) 方法几乎一样，差别仅在于是前者将在所提供的任何字符串后添加一个换行符。
// 在 HTML 中，这通常只会在后面产生一个空格；
// 不过如果使用了 <PRE> 和 <XMP> 标识，这个换行符会被解释，且在浏览器中显示。
