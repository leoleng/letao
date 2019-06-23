$(function() {
    $(".registar-bnt").on("click", function() {
        alert(1)
        var username = $('[name="username"]').val()
        var mobile = $('[name="mobile"]').val()
        var password = $('[name="password"]').val()
        var againWord = $('[name="againWord"]').val()
        var vCode = $('[name="vCode"]').val()
        var uPattern = /^[a-zA-Z0-9_-]{4,16}$/;
        if (!uPattern.test(username)) {
            mui.toast("请输入用户名")
            return
        }
        var mPattern = /^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$/;
        if (!mPattern.test(mobile)) {
            mui.toast("两个密码不一样")
            return
        }
        var pPattern = /^.*(?=.{6,})(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*? ]).*$/;
        if (!pPattern.test(password)) {
            mui.toast("请输入正确密码")
            return
        }
        if (password != againWord) {
            mui.toast("两个密码不一样")
            return
        }
        $.ajax({
            url: "/user/register",
            type: "post",
            data: {
                username: username,
                mobile: mobile,
                password: password,
                vCode: vCode
            },
            success: function(res) {
                // console.log(res);
                alert("注册成功")
                setTimeout(function() {
                    location.href = "login.html"
                }, 2000)

            }
        })
    })
    $("#getCode").on("click", function() {
        $.ajax({
            url: "/user/vCode",
            type: "get",
            success: function(res) {
                console.log(res.vCode);
            }
        })
    })
})