$ ->
# ============= CLICK ON RESOURCE AND OPEN PHOTOSWIPE GALLERY
  $(".resource-item").click (e) ->
    e.preventDefault()
    project_id = $(@).data('project_id')

    # FETCH IMAGES:
    items = $.map $("li[data-project_id=#{project_id}] img"), (e, i) ->
      {
        src: $(e).data('resource-url'),
        w: 1920,
        h: 1080
      }

    # OPTIONS OF PHOTOSWIPE
    options = {
      index: $("li[data-project_id=#{project_id}]").index($(@)) #on which resource we should open gallery at first
    }

    # INIT AND DISPLAY GALLERY:
    pswpElement = $(".pswp")[0]
    gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
