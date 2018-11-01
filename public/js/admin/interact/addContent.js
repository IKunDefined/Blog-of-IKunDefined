$("#add-box>button").click(function() {
    $.ajax({
        type: "post",
        url: "/admin/content/add",
        data: {
            title: $("#add-box>input:nth-of-type(1)").val(),
            summary: $("#add-box>input:nth-of-type(2)").val(),
            article: $("#add-box>textarea").val()
        },
        dataType: "json",
        success: function(responseData) {
            if (responseData.code) {
                alert(responseData.message);
            } else {
                alert(responseData.message);
                setTimeout(function() {
                    location.reload();
                }, 1000);
            }
        }
    });
});