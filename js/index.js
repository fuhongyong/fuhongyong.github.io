/**
 * Created by apple on 15/9/18.
 */

// == 值比较  === 类型比较  $(id) ---> document.getElementById(id)
function $(id){
    return typeof id === 'string' ? document.getElementById(id):id;
}

// 当网页加载完毕
window.onload = function(){
  // 拿到所有的标题标签 和 对应内容标签
  var titles = $('tab-header').getElementsByTagName('li');
  var divs = $('tab-body').getElementsByClassName('dom');
  // 判断
   if(titles.length != divs.length) return;
  // 遍历
    for(var i=0; i<titles.length; i++){
      var li = titles[i];
      li.id = i;
      // 监听鼠标的移动事件
      li.onmousemove = function(){
         for(var j=0; j<titles.length; j++){
            titles[j].className = '';
            divs[j].style.display = 'none';
         }
         this.className = 'selected';
         divs[this.id].style.display = 'block';
      }
    }
}
