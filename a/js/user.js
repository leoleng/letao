$(function() {
    $.ajax({
        url: "/user/queryUser",
        type: "get",
        data: {
            page: 1,
            pageSize: 10
        },
        success: function(res) {
            console.log(res);

            var html = template("user-show", res)
                // console.log(html);
            $("#user-id").html(html)

        }
    })

    $("#user-id").on("click", ".btn", function() {
        var id = $(this).attr("data-id")
        var isDelete = Number($(this).attr("data-isDelete"))
        $.ajax({
            url: "/user/updateUser",
            type: "post",
            data: {
                id: id,
                isDelete: isDelete ? 0 : 1
            },
            success: function(res) {
                // console.log(res);
                if (res.success) {
                    location.reload()
                }

            }
        })

    })
})