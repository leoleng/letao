$(function() {
    // $("#getCode").on("tap", function() {
    //     $.ajax({
    //         url: "/user/vCode",
    //         type: "get",
    //         success: function(res) {
    //             console.log(res.vCode);
    //         }
    //     })
    // })
    $("#getCode").on("tap", function() {
        $.ajax({
            url: "/user/vCodeForUpdatePassword",
            type: "get",
            success: function(res) {
                console.log(res.vCode);
            }
        })
    })
    $("#modify-bnt").on("tap", function() {
        var oaiginPass = $.trim($('[name="oaiginPass"]').val())
        var newPass = $.trim($('[name="newPass"]').val())
        var confirmNewPass = $.trim($('[name="confirmNewPass"]').val())
        var vCode = $('[name="vCode"]').val()
            // console.log(vCode);

        if (!oaiginPass) {
            mui.toast("请输入正确")
            return
        }
        if (newPass != confirmNewPass) {
            mui.toast("两密码不一样")
            return
        }
        if (!vCode) {
            mui.toast("验证码错误")
            return
        }
        console.log(oaiginPass, newPass, vCode)
        $.ajax({
            url: "/user/updatePassword",
            type: "post",
            data: {
                oldPassword: oaiginPass,
                newPassword: newPass,
                vCode: vCode
            },
            success: function(res) {
                console.log(res);
                if (res.success) {
                    mui.toast("修改成功")
                    setTimeout(function() {
                        location.href = "login.html"
                    }, 2000)
                }

            },
            error() {
                console.log(222)
            }
        })

    })

})