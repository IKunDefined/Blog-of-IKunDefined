$("button").click(function () {
  $.ajax({
    type: "post",
    url: "/message/post",
    data: {
      content: $("textarea").val()
    },
    success: function(responseData) {
      if (!responseData.code) {
        alert(responseData.message);
        location.reload();
      } else {
        alert(responseData.message);
      }
    }
  });
  $("textarea").val("");
});