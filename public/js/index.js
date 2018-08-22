$(function(){
    var $loginBox = $("#login-box");
    var $signupBox = $("#signup-box");

    //切换面板
    $loginBox.find("a").on("click", function(){
        $signupBox.show();
        $loginBox.hide();
    });
    $signupBox.find("a").on("click", function(){
        $loginBox.show();
        $signupBox.hide();
    });

    // 通过Ajax提交请求
    $signupBox.find("input[type=button]").on("click",function(){
        $.ajax({
            type: "post",
            url: "/api/user/register",
            data: {
                username: $signupBox.find("[name='username']").val(),
                password: $signupBox.find("[name='password']").val(),
                repassword: $signupBox.find("[name='repassword']").val()
            },
            dataType: "json",
            success: function(result) {
                $signupBox.find(".warning").html(result.message);
                if(!result.code){
                    setTimeout(function(){
                        $loginBox.show();
                        $signupBox.hide();
                    }, 1000);
                }
            }
        });
    })
})