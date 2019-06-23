$(function() {

    var isEdit = Number(gatParamsByUrl(location.href, "isEdit"))

    // console.log(isEdit);
    if (isEdit) {
        if (localStorage.getItem("keyid")) {
            var keyid = JSON.parse(localStorage.getItem("keyid"))
            console.log(keyid);
            var html = template("keyid-show", keyid)
            $("#fomr-a").html(html)
        }

    } else {
        var html = template("keyid-show", {})
        $("#fomr-a").html(html)
    }


    var picker = new mui.PopPicker({ layer: 3 });
    picker.setData(cityData);
    $("#selector").on("tap", function() {
        // console.log(1);
        picker.show(function(selectItems) {
            $("#selector").val(selectItems[0].text + selectItems[1].text + selectItems[2].text)
        })
    })
    $("#modification-bnt").on("tap", function() {
        var recipients = $.trim($('[name="recipients"]').val())
        var postcode = $.trim($('[name="postcode"]').val())
        var address = $.trim($('[name="address"]').val())
        var addressDetail = $.trim($('[name="addressDetail"]').val())
            // console.log(recipients);
        if (!recipients) {
            mui.toast("请输入正确")
            return
        }
        if (!postcode) {
            mui.toast("请输入正确")
            return
        }
        if (!address) {
            mui.toast("请输入正确")
            return
        }
        if (!addressDetail) {
            mui.toast("请输入正确")
            return
        }
        var data = {
            address: address,
            addressDetail: addressDetail,
            recipients: recipients,
            postcode: postcode
        }
        if (isEdit) {
            var url = "/address/updateAddress";
            data.id = keyid.id;
        } else {
            var url = "/address/addAddress"
        }
        $.ajax({
            url: url,
            type: "post",
            data: data,
            success: function(res) {
                // console.log(res)
                if (res.success) {
                    if (isEdit) {
                        mui.toast("修改成功")
                    } else {
                        mui.toast("添加成功")
                    }



                    setTimeout(() => {
                        location.href = "address.html"
                    }, 2000);
                }

            }

        })
    })



})