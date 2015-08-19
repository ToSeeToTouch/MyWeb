
/******* AJAX *******/

  /**
  * JSON
  */

// jQuery
$.getJSON('/my/url', function(data) {

});                                
                            
//javascript(IE10+)
var request = new XMLHttpRequest();
request.open('GET', '/my/url', true);

request.onload = function() {
  if (this.status >= 200 && this.status < 400) {
    // Success!
    var data = JSON.parse(this.response);
  } else {
    // We reached our target server, but it returned an error

  }
};

request.onerror = function() {
  // There was a connection error of some sort
};

request.send();
                            
 /**
  * Post
  */

// jQuery
$.ajax({
  type: 'POST',
  url: '/my/url',
  data: data
});                                
                            
//javascript(IE8+)
var request = new XMLHttpRequest();
request.open('POST', '/my/url', true);
request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
request.send(data);                                
                            
 /**
  * Request
  */

// jQuery
$.ajax({
  type: 'GET',
  url: '/my/url',
  success: function(resp) {

  },
  error: function() {

  }
});                                
                            
//javascript(IE10+)
var request = new XMLHttpRequest();
request.open('GET', '/my/url', true);

request.onload = function() {
  if (this.status >= 200 && this.status < 400) {
    // Success!
    var resp = this.response;
  } else {
    // We reached our target server, but it returned an error

  }
};

request.onerror = function() {
  // There was a connection error of some sort
};

request.send();                                
                            
 /******* 动画效果 *******/

 /**
  * Fade In
  */
 

// jQuery
$(el).fadeIn();                                
                            
//javascript(IE10+)
el.classList.add('show');
el.classList.remove('hide');                                
                            
.show {
  transition: opacity 400ms;
}
.hide {
  opacity: 0;
}                                
                            
 /**
  * Hide
  */

// jQuery
$(el).hide();                                
                            
//javascript(IE8+)
el.style.display = 'none';                              
                            
 /**
  * Show
  */

// jQuery
$(el).show();                                
                            
//javascript(IE8+)
el.style.display = '';                              
                            
 /******* DOM元素 *******/

 /**
  * Add Class
  */

// jQuery
$(el).addClass(className);                                
                            
//javascript(IE10+)
el.classList.add(className);                             
                            
 /**
  * After
  */

// jQuery
$(el).after(htmlString);                                
                            
//javascript(IE8+)
el.insertAdjacentHTML('afterend', htmlString);                             
                            
 /**
  * Append
  */

// jQuery
$(parent).append(el);                                
                            
//javascript(IE8+)
parent.appendChild(el);                             
                            
 /**
  * Before
  */

// jQuery
$(el).before(htmlString);                               
                            
//javascript(IE8+)
el.insertAdjacentHTML('beforebegin', htmlString);                             
                            
 /**
  * Children
  */

// jQuery
$(el).children();                               
                            
//javascript(IE9+)
el.children                             
                            
 /**
  * Clone
  */

// jQuery
$(el).clone();                               
                            
//javascript(IE8+)
el.cloneNode(true);                            
                            
 /**
  * Contains
  */

// jQuery
$.contains(el, child);                               
                            
//javascript(IE8+)
el !== child && el.contains(child);                            
                            
 /**
  * Contains Selector
  */

// jQuery
$(el).find(selector).length;                               
                            
//javascript(IE8+)
el.querySelector(selector) !== null                            
                            
 Each

// jQuery
$(selector).each(function(i, el){

});                               
                            
// javascript(IE9+)
var elements = document.querySelectorAll(selector);
Array.prototype.forEach.call(elements, function(el, i){

});                           
                            
 /**
  * Empty
  */

// jQuery
$(el).empty();                               
                            
// javascript(IE9+)
el.innerHTML = '';                           
                            
 /**
  * 过滤
  */

// jQuery
$(selector).filter(filterFn);                               
                            
// javascript(IE9+)
Array.prototype.filter.call(document.querySelectorAll(selector), filterFn);                           
                            
 /**
  * 查找子元素
  */

// jQuery
$(el).find(selector);                               
                            
// javascript(IE9+)
el.querySelectorAll(selector);                           
                            
 /**
  * 获取属性
  */

// jQuery
$(el).attr('tabindex');                               
                            
// javascript(IE9+)
el.getAttribute('tabindex');                           
                            
 /**
  * 获取 Html元素
  */

// jQuery
$(el).html();                               
                            
// javascript(IE9+)
el.innerHTML                           
                            
 /**
  * Get Outer Html
  */

// jQuery
$('<div>').append($(el).clone()).html();                              
                            
// javascript(IE9+)
el.outerHTML                          
                            
 /**
  * 获取样式
  */

// jQuery
$(el).css(ruleName);                              
                            
// javascript(IE9+)
getComputedStyle(el)[ruleName];                          
                            
 /**
  * 获取文本
  */

// jQuery
$(el).text();                              
                            
// javascript(IE9+)
el.textContent                          
                            
 /**
  * 判断Class是否存在
  */

// jQuery
$(el).hasClass(className);                              
                            
// javascript(IE10+)
el.classList.contains(className);                         
                            
 /**
  * 匹配
  */

// jQuery
$(el).is($(otherEl));                              
                            
// javascript(IE10+)
el === otherEl                         
                            
 /**
  * 匹配选择器
  */

// jQuery
$(el).is('.my-class');                              
                            
// javascript(IE9+)
var matches = function(el, selector) {
  return (el.matches || el.matchesSelector || el.msMatchesSelector || el.mozMatchesSelector || el.webkitMatchesSelector || el.oMatchesSelector).call(el, selector);
};

matches(el, '.my-class');                         
                            
 /**
  * Next
  */

// jQuery
$(el).next();                              
                            
// javascript(IE9+)
el.nextElementSibling                         
                            
 /**
  * Offset
  */

// jQuery
$(el).offset();                              
                            
// javascript(IE9+)
var rect = el.getBoundingClientRect()

{
  top: rect.top + document.body.scrollTop,
  left: rect.left + document.body.scrollLeft
}                        
                            
 /**
  * Offset Parent
  */

// jQuery
$(el).offsetParent();                              
                            
// javascript(IE8+)
el.offsetParent || el                       
                            
 /**
  * 外部高度
  */

// jQuery
$(el).outerHeight();                              
                            
// javascript(IE8+)
el.offsetHeight                      
                            
 /**
  * 带Margin的外部高度
  */

// jQuery
$(el).outerHeight(true);                              
                            
// javascript(IE9+)
function outerHeight(el) {
  var height = el.offsetHeight;
  var style = getComputedStyle(el);

  height += parseInt(style.marginTop) + parseInt(style.marginBottom);
  return height;
}

outerHeight(el);                     
                            
 /**
  * 带Margin的外部宽度
  */

// jQuery
$(el).outerWidth(true);                              
                            
// javascript(IE9+)
function outerWidth(el) {
  var width = el.offsetWidth;
  var style = getComputedStyle(el);

  width += parseInt(style.marginLeft) + parseInt(style.marginRight);
  return width;
}

outerWidth(el);                    
                            
 /**
  * 外部宽度
  */

// jQuery
$(el).outerWidth();                              
                            
// javascript(IE8+)
el.offsetWidth                    
                            
 /**
  * 父元素
  */

// jQuery
$(el).parent();                              
                            
// javascript(IE8+)
el.parentNode                   
                            
 /**
  * 位置
  */

// jQuery
$(el).position();                              
                            
// javascript(IE8+)
{left: el.offsetLeft, top: el.offsetTop}                  
                            
 /**
  * 相对于Viewport的位置
  */

// jQuery
var offset = el.offset();

{
  top: offset.top - document.body.scrollTop,
  left: offset.left - document.body.scrollLeft
}                              
                            
// javascript(IE8+)
el.getBoundingClientRect()                  
                            
 /**
  * Prepend
  */

// jQuery
$(parent).prepend(el);                             
                            
// javascript(IE8+)
parent.insertBefore(el, parent.firstChild);                  
                            
 /**
  * 前一个兄弟节点
  */

// jQuery
$(el).prev();                             
                            
// javascript(IE9+)
el.previousElementSibling                 
                            
 /**
  * 移除节点
  */

// jQuery
$(el).remove();                             
                            
// javascript(IE8+)
el.parentNode.removeChild(el);                
                            
 /**
  * 移除class
  */

// jQuery
$(el).removeClass(className);                             
                            
// javascript(IE10+)
el.classList.remove(className);                
                            
 /**
  * 替换
  */

// jQuery
$(el).replaceWith(string);                             
                            
// javascript(IE8+)
el.outerHTML = string;                
                            
 /**
  * 设置属性
  */

// jQuery
$(el).attr('tabindex', 3);                             
                            
// javascript(IE8+)
el.setAttribute('tabindex', 3);                
                            
 /**
  * 设置HTML
  */

// jQuery
$(el).html(string);                             
                            
// javascript(IE8+)
el.innerHTML = string;               
                            
 /**
  * 设置样式
  */

// jQuery
$(el).css('border-width', '20px');                             
                            
// javascript(IE8+)
// Use a class if possible
el.style.borderWidth = '20px';               
                            
 /**
  * 设置文本
  */

// jQuery
$(el).text(string);                             
                            
// javascript(IE9+)
el.textContent = string;              
                            
 /**
  * 兄弟节点
  */

// jQuery
$(el).siblings();                             
                            
// javascript(IE9+)
Array.prototype.filter.call(el.parentNode.children, function(child){
  return child !== el;
});              
                            
 /**
  * 切换class
  */

// jQuery
$(el).toggleClass(className);                            
                            
// javascript(IE10+)
el.classList.toggle(className);            
                            
 /****** 事件 ******/
 /**
  * Off
  */

// jQuery
$(el).off(eventName, eventHandler);                            
                            
// javascript(IE9+)
el.removeEventListener(eventName, eventHandler);            
                            
 /**
  * On
  */

// jQuery
$(el).on(eventName, eventHandler);                           
                            
// javascript(IE9+)
el.addEventListener(eventName, eventHandler);           
                            
 /**
  * Ready
  */

// jQuery
$(document).ready(function(){

});                          
                            
// javascript(IE9+)
function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}           
                            
 /**
  * 自定义trigger函数
  */

// jQuery
$(el).trigger('my-event', {some: 'data'});                          
                            
// javascript(IE9+)
if (window.CustomEvent) {
  var event = new CustomEvent('my-event', {detail: {some: 'data'}});
} else {
  var event = document.createEvent('CustomEvent');
  event.initCustomEvent('my-event', true, true, {some: 'data'});
}

el.dispatchEvent(event);          
                            
 /**
  * 原生trigger函数
  */

// jQuery
$(el).trigger('change');                         
                            
// javascript(IE9+)
// 完整的事件类型请查看: https://developer.mozilla.org/en-US/docs/Web/API/document.createEvent
var event = document.createEvent('HTMLEvents');
event.initEvent('change', true, false);
el.dispatchEvent(event);          
                            
 /******* 工具类 *******/

 /**
  * Array Each
  */

// jQuery
$.each(array, function(i, item){

});                         
                            
// javascript(IE9+)
array.forEach(function(item, i){

});          
                            
 /**
  * Deep Extend
  */

// jQuery
$.extend(true, {}, objA, objB);                        
                            
// javascript(IE8+)
var deepExtend = function(out) {
  out = out || {};

  for (var i = 1; i < arguments.length; i++) {
    var obj = arguments[i];

    if (!obj)
      continue;

    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {
        if (typeof obj[key] === 'object')
          deepExtend(out[key], obj[key]);
        else
          out[key] = obj[key];
      }
    }
  }

  return out;
};

deepExtend({}, objA, objB);         
                            
 /**
  * Bind
  */

// jQuery
$.proxy(fn, context);                        
                            
// javascript(IE9+)
fn.bind(context);       
                            
 /**
  * Extend
  */

// jQuery
$.extend({}, objA, objB);                        
                            
// javascript(IE8+)
var extend = function(out) {
  out = out || {};

  for (var i = 1; i < arguments.length; i++) {
    if (!arguments[i])
      continue;

    for (var key in arguments[i]) {
      if (arguments[i].hasOwnProperty(key))
        out[key] = arguments[i][key];
    }
  }

  return out;
};

extend({}, objA, objB);       
                            
 /**
  * Index Of
  */

// jQuery
$.inArray(item, array);                       
                            
// javascript(IE9+)
array.indexOf(item);       
                            
 /**
  * Is Array
  */

// jQuery
$.isArray(arr);                       
                            
// javascript(IE9+)
Array.isArray(arr);       
                            
 /**
  * Map
  */

// jQuery
$.map(array, function(value, index){

});                       
                            
// javascript(IE9+)
array.map(function(value, index){

});       
                            
 /**
  * Now
  */

// jQuery
$.now();                       
                            
// javascript(IE9+)
Date.now();     
                            
 /**
  * Parse Html
  */

// jQuery
$.parseHTML(htmlString);                     
                            
// javascript(IE9+)
var parseHTML = function(str) {
  var tmp = document.implementation.createHTMLDocument();
  tmp.body.innerHTML = str;
  return tmp.body.children;
};

parseHTML(htmlString);    
                            
 /**
  * Parse Json
  */

// jQuery
$.parseJSON(string);                   
                            
// javascript(IE8+)
JSON.parse(string);   
                            
 /**
  * Trim
  */

// jQuery
$.trim(string);                   
                            
// javascript(IE9+)
string.trim();  
                            
 /**
  * Type
  */

// jQuery
$.type(obj);                   
                            
// javascript(IE9+)
Object.prototype.toString.call(obj).replace(/^\[object (.+)\]$/, "$1").toLowerCase(); 
                            