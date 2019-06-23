$(function() {
    $.ajax({
        url: "/cart/queryCart",
        type: "get",
        success: function(res) {
            console.log(res);
            var html = template("shopping-show", res)
            console.log(html);

        }
    })

})