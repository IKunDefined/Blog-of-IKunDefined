$(".delete").click(function() {
    console.log(this);
    $.ajax({
        type: "post",
        url: "/admin/user/delete",
        data: {
            id: $("#user-id")
        },
        dataType: "json"
    });
});