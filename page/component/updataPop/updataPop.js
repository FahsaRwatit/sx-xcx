var t = getApp().globalData.version;

Component({
    properties: {},
    data: {
        isUpdataShow: !1
    },
    methods: {
        _closeUppdata: function() {
            this.setData({
                isUpdataShow: !1
            }), wx.setStorageSync("isUpdata", !0), wx.setStorageSync("version", t);
        }
    },
    lifetimes: {
        attached: function() {},
        detached: function() {}
    },
    pageLifetimes: {
        show: function() {
            wx.getStorageSync("version") == t ? this.setData({
                isUpdataShow: !1
            }) : wx.getStorageSync("userInfo") && this.setData({
                isUpdataShow: !0
            });
            var a = this;
            setTimeout(function() {
                a.setData({
                    isUpdataShow: !1
                }), wx.setStorageSync("isUpdata", !0), wx.setStorageSync("version", t);
            }, 15e3);
        }
    }
});