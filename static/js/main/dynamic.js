$('button').click(function () {
  $.ajax({
    type: 'post',
    url: '/dynamic/update',
    data: {
      content: $('textarea').val()
    },
    success: function (responseData) {
      if (!responseData.code) {
        window.alert(responseData.message)
        window.location.reload()
      } else {
        window.alert(responseData.message)
      }
    }
  })
  $('textarea').val('')
})
