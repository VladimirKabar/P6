$ ->
  $(".projects-filter li").click ->
    $(@).parent().find('li').removeClass('active')
    $(@).addClass('active')

    indoor_outdoor_filter = $(".indoor-outdoor li.active").attr('data-category')
    commercial_private_filter = $(".commercial-private li.active").attr('data-category')

    $(".project-item").addClass('hidden')
    $(".project-item.#{indoor_outdoor_filter}.#{commercial_private_filter}").removeClass('hidden')


  $(".resources-filter li").click ->
    $(@).parent().find('li').removeClass('active')
    $(@).addClass('active')

    description_filter = $(".with-without-description li.active").attr('data-category')

    if description_filter == 'without-description'
      $(".project-item .widget-header").hide()
      $(".project-item .widget-content p").hide()
    else
      $(".project-item .widget-header").show()
      $(".project-item .widget-content p").show()

