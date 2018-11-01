$("#add-box>button").click(function() {
    $.ajax({
        type: "post",
        url: "/admin/category/add",
        data: {
            name: $("#add-box>input").val()
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