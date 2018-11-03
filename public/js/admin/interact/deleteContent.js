$(".delete").click(function() {
    $.ajax({
        type: "post",
        url: "/admin/content/delete",
        data: {
            id: $("table>th:nth-of-type(1)").content()
        },
        dataType: "json",
        success: function(responseData) {
        }
    });
});