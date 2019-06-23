$(function() {
    var numKey = 0
    var size = 0
    var productId = 0
    var id = gatParamsByUrl(location.href, "id")
    $.ajax({
        url: "/product/queryProductDetail",
        type: "get",
        data: {
            id: id
        },
        success: function(res) {
            console.log(res);
            numKey = res.num
            productId = res.id
            var html = template("detail-show", res)
            $(".content").html(html)
                // console.log(html);
                //获得slider插件对象
            var gallery = mui('.mui-slider');
            gallery.slider();

        }
    });

    $(".content").on("tap", ".size span", function() {
        $(this).addClass("active").siblings("span").removeClass("active")
        size = $(this).text()
            // console.log(size);

    })
    $("#increase").on("tap", function() {
        var num = $("#inp").val()
        num++
        if (num > numKey) {
            num = numKey
        }
        $("#inp").val(num)

    })
    $("#reduce").on("tap", function() {
        var num = $("#inp").val()
        num--
        if (num < 1) {
            num = 1
        }
        $("#inp").val(num)
    });
    $("#addCart").on("tap", function() {
        if (!size) {
            alert("请选择尺码")
            return
        }
        $.ajax({
            url: "/cart/addCart",
            type: "post",
            data: {
                productId: productId,
                size: size,
                numKey: numKey
            },
            success: function(res) {
                // console.log(res);
                if (res.success) {
                    mui.confirm("已加入,需要去看看吗?", function(massage) {
                        location.href = "shopping.html"
                    })
                }

            }
        })
    })
})