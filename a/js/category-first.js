$(function() {
    var totalPage = 0
    var page = 1
    var pageSize = 10
    getData()

    $(".down").on("click", function() {
        page++
        if (page > totalPage) {
            page = totalPage
            alert("最后一页了")
            return
        }
        getData()
    })
    $(".top").on("click", function() {
        page--
        if (page < 1) {
            page = 1
            alert("第一页了")
            return
        }
        getData()
    })


    function getData() {
        $.ajax({
            url: "/category/queryTopCategoryPaging",
            type: "get",
            data: {
                page: page,
                pageSize: pageSize
            },
            success: function(res) {
                var html = template("category-first-show", res)
                totalPage = Math.ceil(res.total / pageSize)
                $("#table-show").html(html)
                console.log(totalPage);

            }
        })
    }
    $(".preserve").on("click", function() {
        var categoryName = $.trim($('[name="categoryName"]').val())
        if (!categoryName) {
            alert("请输入内容")
            return
        }
        $.ajax({
            url: "/category/addTopCategory",
            type: "post",
            data: {
                categoryName: categoryName
            },
            success: function(res) {
                console.log(res);
                if (res.success) {
                    location.reload()
                }
            }
        })
    })
})