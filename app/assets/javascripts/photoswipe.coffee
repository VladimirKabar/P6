$ ->
# ============= CLICK ON RESOURCE AND OPEN PHOTOSWIPE GALLERY
  $(".resource-item").click (e) ->
    e.preventDefault()

    # FETCH IMAGES:
    items = $.map $(".project-item:not(.hidden) li.resource-item img"), (e, i) ->
      {
        src: $(e).data('resource-url'),
        w: 1920,
        h: 1080
      }

    # OPTIONS OF PHOTOSWIPE
    options = {
      index: $(".project-item:not(.hidden) li.resource-item").index($(@)) #on which resource we should open gallery at first
    }

    # INIT AND DISPLAY GALLERY:
    pswpElement = $(".pswp")[0]
    gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
