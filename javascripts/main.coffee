_.templateSettings.interpolate = /{{([\s\S]+?)}}/g

initMap = ->
  $(document).on 'click', '.map', ->
    $(this).find('iframe').css({"pointer-events": "auto"})

initBlog = ->

  blogDiv = $("[data-blog-posts]")
  if blogDiv.size() == 0
    return

  window.waculBlogCallback = (blog) ->
    blogDiv.each ->
      num = parseInt($(this).attr("data-blog-posts"), 10)
      num = 4 if not num?

      template = $(this).html().replace(/&lt;%=/g, '<%=').replace(/%&gt;/g, '%>')
      tfunc = _.template template
      $(this).empty()
      _(blog.posts[0...num]).each (post) =>
        $(this).append(tfunc(post))
      $(this).show()


  script = document.createElement('script')
  script.setAttribute('src','//blog.wacul.co.jp/posts.js')
  $('head').append(script)

handleRedirect = ->
  defs = [
    [/^\/member/, '/about/members/'],
    [/^\/services\/(resarchapplication|training)/, '/services/'],
  ]

  for def in defs
    pattern = def[0]
    to = def[1]
    path = location.pathname

    if path.match pattern
      location.replace to

initPagetopLink = ->
  $window = $(window)
  switchPagetopLink = ->
    target = $('.link-pagetop')
    if target.length > 0
      if $window.scrollTop() > 0
        target.show()
        target.css("opacity", Math.min($window.scrollTop(), 200) / 200.0);
      else
        target.hide()

  $window.on('scroll', switchPagetopLink);
  switchPagetopLink()

initForm = ->
  loading = $(".form-loading")
  if loading.size() == 0
    return

  timer = setInterval(()->
    iframe = $(".wufoo-form-container")
    if iframe.size() == 0
      return;
    clearInterval(timer)
    iframe.load(() ->
      loading.hide()
    )
  , 10)

handleRedirect()

$ ->
  initMap()
  initBlog()
  initForm()
  initPagetopLink()
