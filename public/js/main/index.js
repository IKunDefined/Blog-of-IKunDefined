$(function(){
    var $loginBox = $("#login-box");
    var $signupBox = $("#signup-box");
    var $welcomeBox = $("#welcome-box");
    var $logoutButton = $("#logout");

    $loginBox.find("a").on("click", function(){
        $signupBox.show();
        $loginBox.hide();
    });
    $signupBox.find("a").on("click", function(){
        $loginBox.show();
        $signupBox.hide();
    });

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
    });

    $loginBox.find("input[type=button]").on("click",function(){
        $.ajax({
            type: "post",
            url: "/api/user/login",
            data: {
                username: $loginBox.find("input[name='username']").val(),
                password: $loginBox.find("input[name='password']").val()
            },
            dataType: "json",
            success: function(result) {
                $loginBox.find(".warning").html(result.message);
                if(!result.code){
                    setTimeout(function(){
                        location.reload();
                    }, 1000);
                }
            }
        });
    });

    $logoutButton.on("click", function() {
        $.ajax({
            url: "/api/user/logout",
            success: function(responseData) {
                if (!responseData.code) {
                    setTimeout(function() {
                        location.reload();
                    }, 1000);
                }
            }
        });
    });
});