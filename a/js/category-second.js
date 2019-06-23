$(function() {
    var page = 1
    var pageSize = 10
    var totalPage = 0
    getData()

    $("#nextBtn").on("click", function() {
        page++
        if (page > totalPage) {
            page = totalPage
            alert("最后一页了")

            getData()
            return
        }
    })
    $("#prevBtn").on("click", function() {
        page--
        if (page < 1) {
            page = 1
            alert("第一页了")
            getData()
            return
        }
    })

    function getData() {
        $.ajax({
            url: "/category/querySecondCategoryPaging",
            type: "get",
            data: {
                page: page,
                pageSize: pageSize
            },
            success: function(res) {
                // console.log(res);
                totalPage = Math.ceil(res.total / pageSize)

                var html = template("second-show", res)
                $("#table-show").html(html)
                    // console.log(html);

            }
        })
    }
    $.ajax({
        url: "/category/queryTopCategoryPaging",
        type: "get",
        data: {
            page: 1,
            pageSize: 100
        },
        success: function(res) {
            var html = template("select-show", res)
            $("#form-show").html(html)
                // console.log(html)
        }
    })
    $('#fileupload').fileupload({
        dataType: 'json',
        done: function(e, data) {
            // console.log
            $("#images-show").attr("src", data.result.picAddr);
        }
    });
    $("#button-a").on("click", function() {
        var brandName = $.trim($('[name="brandName"]').val())
        var categoryId = $.trim($('[name="categoryId"]').val())
        var brandLogo = $("#images-show").attr('src')
        console.log(brandLogo);


        $.ajax({
            url: '/category/addSecondCategory',
            type: 'post',
            data: {
                brandName: brandName,
                categoryId: categoryId,
                brandLogo: brandLogo,
                hot: 0
            },
            success: function(res) {
                if (res.success) {
                    location.reload();
                }
            }
        })
    })
})