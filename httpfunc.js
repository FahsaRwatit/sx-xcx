module.exports = {
    httpGet: function(t, n, e) {
        wx.request({
            url: t,
            header: {
                "content-type": "application/json;charset=UTF-8"
            },
            method: "GET",
            success: function(t) {
                "function" == typeof n && n(t.data);
            },
            fail: function() {
                "function" == typeof e && e();
            }
        });
    },
    httpPost: function(t, n, e, o) {
        wx.request({
            url: t,
            header: {
                "content-type": "application/x-www-form-urlencoded"
            },
            data: n,
            method: "POST",
            success: function(t) {
                "function" == typeof e && e(t.data);
            },
            fail: function() {
                "function" == typeof o && o();
            }
        });
    }
};