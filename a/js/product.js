$(function() {
    $.ajax({
        url: "/product/queryProductDetailList",
        type: "get",
        data: {
            page: 1,
            pageSize: 10
        },
        success: function(res) {
            // console.log(res);

            var html = template("product-show", res)
            $("#table-show").html(html)
        }
    })

    $.ajax({
        url: "/category/querySecondCategoryPaging",
        type: "get",
        data: {
            page: 1,
            pageSize: 100
        },
        success: function(res) {
            console.log(res);
            var html = template("product-option", res)
            $("#select-show").html(html)
        }
    })
    var imagesArray = []
    $('#fileUpload').fileupload({
        dataType: 'json',
        done: function(e, data) {
            imagesArray.push(data.result);
            // console.log(imagesArray);

        }
    });

    $("#addProduct").on("click", function() {
        var proName = $.trim($('[name="proName"]').val())
        var oldPrice = $.trim($('[name="oldPrice"]').val())
        var price = $.trim($('[name="price"]').val())
        var proDesc = $.trim($('[name="proDesc"]').val())
        var size = $.trim($('[name="size"]').val())
        var num = $.trim($('[name="num"]').val())
        var brandId = $.trim($('[name="brandId"]').val())
        $.ajax({
            url: "/product/addProduct",
            type: "post",
            data: {
                proName: proName,
                oldPrice: oldPrice,
                price: price,
                proDesc: proDesc,
                size: size,
                num: num,
                brandId: brandId,
                statu: 1,
                pic: imagesArray
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