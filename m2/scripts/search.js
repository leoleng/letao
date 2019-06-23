$(function() {
    var arr = []

    $(".btn-search").on("click", function() {
        var keywodr = $(this).siblings().val()
        arr.push(keywodr)
            // console.log(keywodr);
        if (keywodr) {

            localStorage.setItem("keyArr", JSON.stringify(arr))
            location.href = "search-resulr.html?keywodr=" + keywodr;
        } else {
            alert("输入关键字")
        }
    })


    if (localStorage.getItem("keyArr")) {
        arr = JSON.parse(localStorage.getItem("keyArr"))
        var html = template("history-a", { key_arr: arr })
        $(".history-show").html(html)
    }
    $(".mui-icon-trash").on("click", function() {
        $(".history-show").html("")
        var arr = []
        localStorage.removeItem("keyArr")
    })

})