$(function() {
    var address = null
    $.ajax({
        url: "/address/queryAddress",
        type: "get",
        success: function(res) {
            address = res
            var html = template("address-a", { result: res })

            // console.log(html);
            $("#address-ul").html(html)



        }
    })
    $("#address-ul").on("tap", ".remove-address", function() {
        // console.log(li);
        var id = $(this).attr("data-id")
        var li = this.parentNode.parentNode
        mui.confirm("你确定删除吗?", function(massage) {
            // console.log(massage);
            if (massage.index == 1) {
                // console.log(id);
                $.ajax({
                    url: "/address/deleteAddress",
                    type: "post",
                    data: {
                        id: id
                    },
                    success: function(res) {
                        // console.log(res);
                        if (res.success) {
                            location.reload()
                        }
                    }
                })
            } else {
                mui.swipeoutClose(li)
            }
        })
    })

    $("#address-ul").on("tap", ".compile-address", function() {
        var id = $(this).attr("data-id")
            // console.log(address);
        for (var i = 0; i < address.length; i++) {
            if (address[i].id == id) {
                // alert(1)
                localStorage.setItem("keyid", JSON.stringify(address[i]))

                break
            }

        }
        location.href = "modification.html?isEdit=1"

    })

})