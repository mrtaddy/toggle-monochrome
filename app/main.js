/*jshint browser:true */
(function bookmarklet($) {
  var $html = $('html');
  var property = '-webkit-filter';
  var value = 'grayscale(1)';
  if($html.css(property) == value){
    $html.css(property, '');
  } else {
    $html.css(property, value);
  }
}(jQuery));
