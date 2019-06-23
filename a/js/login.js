$.ajax({
    url: "/employee/checkRootLogin",
    type: "get",
    async: false,
    success: function(res) {
        if (res.success) {
            location.href = "user.html"
        }
    }
})

$(function() {
    $("#login-btn").on("click", function() {
        var username = $.trim($('[name="username"]').val())
        var password = $.trim($('[name="password"]').val())
            // console.log(username);
        if (!username) {
            alert("请输入用户名")
            return
        }
        if (!password) {
            alert("请输入密码")
            return
        }
        $.ajax({
            url: "/employee/employeeLogin",
            type: "post",
            data: {
                username: username,
                password: password
            },
            success: function(res) {
                // console.log(res);
                if (res.success) {
                    location.href = "user.html"
                }
            }
        })
    })
})