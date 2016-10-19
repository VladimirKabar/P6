# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

$ ->
  $('.rotate').css('display', 'block')
  $('.rotate').cycle({fx: 'fade', timeout: 1000, after: onAfter, speed: 3000})

onAfter = (curr, next, opts, fwd) ->
  $ht = $(this).height();
$(this).parent().animate({height: $ht})