(function() {
  var onAfter;

  $(function() {
    $('.rotate').css('display', 'block');
    return $('.rotate').cycle({
      fx: 'fade',
      timeout: 1000,
      after: onAfter,
      speed: 3000
    });
  });

  onAfter = function(curr, next, opts, fwd) {
    var $ht;
    $ht = $(this).height();
    return $(this).parent().animate({
      height: $ht
    });
  };

}).call(this);
