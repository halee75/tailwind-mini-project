$(document).ready(function () {
  var toggleTopMenuIcon = $('.menu-mob')
  var topMenu = $('.menu-header')

  $(toggleTopMenuIcon).click(function () {
    topMenu.toggleClass('menu-mob')
    $('.icon-clear').addClass('clear')
  })

  function isValidURL (str) {
    if (/^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/g.test(str)) {
      console.log('YES')
    }else {
      $('.message-error-url').show()
      setTimeout(function () {
        $('.message-error-url').fadeOut('fast')
      }, 3000)
    }
  }

  $('.btn-shorten').click(function () {
    var url = $('.input-link').val()
    console.log(url)
    if (url == '') {
      $('.message-error').show()
      setTimeout(function () {
        $('.message-error').fadeOut('fast')
      }, 1000)
    } else {
      isValidURL(url)
    }
  })
})
