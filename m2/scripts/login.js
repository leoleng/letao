$(function() {
    $(".registar-bnt").on("click", function() {
        var username = $.trim($('[name="username"]').val())
        var password = $.trim($('[name="password"]').val())

        if (!username) {
            mui.toast("请输入用户名")
            return
        }
        if (!password) {
            mui.toast("请输入密码")
            return
        }
        $.ajax({
            url: "/user/login",
            type: "post",
            data: {
                username: username,
                password: password
            },
            beforeSend: function() {
                $(".registar-bnt").html("登录中...")
            },
            success: function(res) {
                console.log(res);
                mui.toast("登陆成功")
                $(".registar-bnt").html("登录")
                setTimeout(function() {
                    location.href = "user.html"
                }, 2000)

            }
        })
    })

})