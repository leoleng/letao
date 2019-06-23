var userInfo = null
$.ajax({
    url: "/user/queryUserMessage",
    type: "get",
    async: false,
    success: function(res) {
        // console.log(res);
        if (res.error && res.error == 400) {
            location.href = "login.html"
            console.log(res);
        }
        userInfo = res
    }
})


$(function() {
    $("#user-out").on("click", function() {
            // alert(1)
            $.ajax({
                url: "/user/logout",
                type: "get",
                success: function(res) {
                    // console.log(ers);
                    if (res.success) {
                        mui.toast("退出成功")
                        setTimeout(function() {
                            location.href = "index.html"
                        }, 2000)
                    }
                }
            })
        })
        // console.log(userInfo);

    var html = template("user-show", userInfo)
    $("#userInfo").html(html)

})