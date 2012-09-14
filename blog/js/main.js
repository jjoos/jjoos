(function ($) {

  $(function(){

    var $window = $(window)

    // Disable certain links in docs
    $('section [href^=#]').click(function (e) {
      e.preventDefault()
    })

    // side bar
    $('.inner-sidenav').affix({
      offset: {
        top: function () { return $window.width() <= 980 ? 180 : 130 }
      , bottom: 270
      }
    })

    hljs.initHighlightingOnLoad();

  })

})(window.jQuery)
