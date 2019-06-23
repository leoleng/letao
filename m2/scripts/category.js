$(function() {
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
    $.ajax({
        url: "/category/queryTopCategory",
        type: "get",
        success: function(rel) {
            // console.log(rel);
            var html = template("category-frist", { result: rel.rows })
                // console.log(html);
            $("#links").html(html)
                // var id = $(this).attr("data-id")

            if (rel.rows.length) {
                let id = rel.rows[0].id
                gatSecontCategory(id)
                $("#links").children().eq(0).addClass("actice").siblings().removeClass("actice")
            }

        }
    })
    $("#links").on("click", "a", function() {
        var id = $(this).attr("data-id")
        $(this).addClass("actice").siblings().removeClass("actice")
        gatSecontCategory(id)
    })

    function gatSecontCategory(id) {
        $.ajax({
            url: "/category/querySecondCategory",
            type: "get",
            data: {
                id: id
            },
            success: function(rel) {
                var html = template("category-second", rel)
                    // console.log(html);
                $(".exhibition").html(html)

            }
        })
    }
})