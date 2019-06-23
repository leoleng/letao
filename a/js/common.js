$.ajax({
    url: "/employee/checkRootLogin",
    type: "get",
    async: false,
    success: function(res) {
        if (res.error && res.error == 400) {
            location.href = "login.html"
        }
    }
})

$(function() {
    $(".login_out_bot").on("click", function() {
        if (confirm("你确定要退出吗")) {
            $.ajax({
                url: "/employee/employeeLogout",
                type: "get",
                success: function(res) {
                    // console.log(res);
                    if (res.success) {
                        location.href = "login.html"
                    } else {
                        confirm(message)
                    }

                }
            })
        }
        // console.log(confirm("你确定要退出吗"));

    })





    var navLi = $('.navs li')

    navLi.on('click', function() {

        $(this).find('ul').slideToggle();

    });

});