$(function(){
    var $loginBox = $("#login-box");
    var $signupBox = $("#signup-box");
    var $welcomeBox = $("#welcome-box");

    //切换面板
    $loginBox.find("a").on("click", function(){
        $signupBox.show();                                         // 显示注册框
        $loginBox.hide();                                          // 隐藏登录框
        
    });
    $signupBox.find("a").on("click", function(){
        $loginBox.show();                                          // 显示登录框
        $signupBox.hide();                                         // 隐藏注册框
    });

    // Ajax注册模块
    $signupBox.find("input[type=button]").on("click",function(){
        $.ajax({
            type: "post",                                          // 使用方法
            url: "/api/user/register",                             // 传入文件
            data: {                                                // 传入数据
                username: $signupBox.find("[name='username']").val(),
                password: $signupBox.find("[name='password']").val(),
                repassword: $signupBox.find("[name='repassword']").val()
            },
            dataType: "json",                                      // 数据类型
            success: function(result) {                            // 返回数据
                $signupBox.find(".warning").html(result.message);  // 将返回数据提示信息写入信息框
                if(!result.code){                                  // 判断注册是否成功
                    setTimeout(function(){
                        $loginBox.show();                          // 显示登录框
                        $signupBox.hide();                         // 隐藏注册框
                    }, 1000);                                      // 1秒后执行
                }
            }
        });
    });

    // Ajax登录模块
    $loginBox.find("input[type=button]").on("click",function(){
        $.ajax({
            type: "post",
            url: "/api/user/login",
            data: {
                username: $loginBox.find("input[name='username']"),
                password: $loginBox.find("input[name='password']")
            },
            dataType: "json",
            success: function(result){
                if(!result){
                    $loginBox.find(".warning").html(result.message);
                }else{
                    setTimeout(function(){
                        $loginBox.hide();
                        $welcomeBox.show();
                    },1000);
                }
            }
        });
    });
});