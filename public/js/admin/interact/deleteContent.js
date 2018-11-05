$(".delete").click(function(e) {
    $.ajax({
        type: "post",
        url: "/admin/content/delete",
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