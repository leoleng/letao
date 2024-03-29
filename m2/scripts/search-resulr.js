var keywodr = gatParamsByUrl(location.href, "keywodr")
var html = "";
var page = 1;
var priceSoct = 1;
var abc = null;
var volume = 1;
$(function() {
    mui.init({
        pullRefresh: {
            container: "#refreshContainer", //待刷新区域标识，querySelector能定位的css选择器均可，比如：id、.class等
            up: {
                height: 50, //可选.默认50.触发上拉加载拖动距离
                auto: true, //可选,默认false.自动上拉加载一次
                contentrefresh: "正在加载...", //可选，正在加载状态时，上拉加载控件上显示的标题内容
                contentnomore: '没有更多数据了', //可选，请求完毕若没有更多数据时显示的提醒内容；
                callback: getData //必选，刷新函数，根据具体业务来编写，比如通过ajax从服务器获取新数据；
            }
        }
    });
    $("#priceSoct").on("tap", function() {
        priceSoct = priceSoct == 1 ? 2 : 1;
        page = 1;
        html = "";
        mui('#refreshContainer').pullRefresh().refresh(true);
        getData()
    })
    $("#volume").on("tap", function() {
        volume = volume == 1 ? 2 : 1;
        page = 1;
        html = "";
        mui('#refreshContainer').pullRefresh().refresh(true);
        getData()
    })
})

function gatParamsByUrl(url, name) {
    var params = url.substr(url.indexOf("?") + 1)
    var param = params.split("&")
    for (var i = 0; i < param.length; i++) {
        var search_param = param[i].split("=")
            // console.log(param);
        if (search_param[0] == name) {
            return search_param[1]

        }
    }
}

function getData() {
    if (!abc) {
        abc = this
    }
    $.ajax({
        url: "/product/queryProduct",
        type: "get",
        data: {
            page: page++,
            pageSize: 3,
            proName: keywodr,
            price: priceSoct,
            num: volume,
        },
        success: function(res) {
            // console.log(res);
            if (res.data.length > 0) {
                html += template("search-keywodr", res)
                $("#keyword-show").html(html)
                abc.endPullupToRefresh(false)
            } else {
                abc.endPullupToRefresh(true);
            }
        }
    })
}