/*jshint browser:true */
(function bookmarklet() {
  var html = document.querySelector('html');
  var property = '-webkit-filter';
  var value = 'grayscale(1)';
  if(getComputedStyle(html)[property] == value){
    html.style.webkitFilter = '';
  } else {
    html.style.webkitFilter = value;
  }
}());
