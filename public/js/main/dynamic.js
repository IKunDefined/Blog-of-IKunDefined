$("button").click(function () {
  $.ajax({
    type: "post",
    url: "/dynamic/post",
    data: {
      content: $("textarea").val()
    },
    success: function(responseData) {
      if (!responseData.code) {
        alert(responseData.message);
        location.reload();
      }
      alert(responseData.message);
    }
  });
  $("textarea").val("");
});