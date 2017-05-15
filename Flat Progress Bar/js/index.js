$(function(){
  var $ppc = $('.circle-1'),
    percent = parseInt($ppc.data('percent')),
    deg = 360*percent/100;
  if (percent > 50) {
    $ppc.addClass('gt-50');
  }
  $('.progress-1').css('transform','rotate('+ deg +'deg)');
  $('.sp-1').html(percent+'%');
});
$(function(){
  var $ppc = $('.circle-2'),
    percent = parseInt($ppc.data('percent')),
    deg = 360*percent/500;
  if (percent > 50) {
    $ppc.addClass('gt-50');
  }
  $('.progress-2').css('transform','rotate('+ deg +'deg)');
  $('.sp-2').html(percent+'%');
});
$(function(){
  var $ppc = $('.circle-3'),
    percent = parseInt($ppc.data('percent')),
    deg = 360*percent/900;
  if (percent > 50) {
    $ppc.addClass('gt-50');
  }
  $('.progress-3').css('transform','rotate('+ deg +'deg)');
  $('.sp-3').html(percent+'%');
});
$(function(){
  var $ppc = $('.circle-4'),
    percent = parseInt($ppc.data('percent')),
    deg = 360*percent/900;
  if (percent > 50) {
    $ppc.addClass('gt-50');
  }
  $('.progress-4').css('transform','rotate('+ deg +'deg)');
  $('.sp-4').html(percent+'%');
});
