$(".delete").click(function(e) {
    $.ajax({
        type: "post",
        url: "/admin/user/delete",
        data: {
            id: e.currentTarget.parentElement.parentElement.firstElementChild.textContent
        },
        dataType: "json",
        success: function(responseData) {
            alert(responseData.message);
            location.reload();
        }
    });
});