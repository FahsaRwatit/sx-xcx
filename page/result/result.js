var a, t, n = require("../../api.js"), e = require("../../func.js"), i = require("../../httpfunc.js");

a = 0, t = "白羊座", Page({
    data: {
        host: n.host,
        xzName: "",
        todayDate: "",
        xzID: "",
        imgUrl: "../../images/avatar.png",
        xzImgUrl: [ "../../images/baiyang.png", "../../images/jinniu.png", "../../images/shuangzi.png", "../../images/juxie.png", "../../images/shizi.png", "../../images/chunv.png", "../../images/tianping.png", "../../images/tianxie.png", "../../images/sheshou.png", "../../images/mojie.png", "../../images/shuiping.png", "../../images/shuangyu.png" ],
        ys_data: [],
        selectedtab: 0,
        showAd: !0
    },
    onLoad: function(n) {
        0 != Object.keys(n).length && (a = n.id, t = n.name);
    },
    onReady: function() {
        wx.getStorageSync("userInfo") || wx.switchTab({
            url: "/page/index/index"
        }), wx.showNavigationBarLoading();
        var s = {
            id: a
        };
        try {
            wx.getStorageSync(String(a)) && wx.getStorageSync(String(a));
        } catch (a) {
            "";
        }
        if (wx.getStorageSync(String(a)) && wx.getStorageSync(String(a))[0].todayData == e.todayData()) {
            var o = wx.getStorageSync(String(a));
            this.setData({
                ys_data: o,
                xzName: t,
                todayDate: o[0].todayData,
                imgUrl: this.data.xzImgUrl[a],
                xzID: a
            }), wx.hideNavigationBarLoading();
        } else i.httpPost(n.xzDataUrl, s, this.success, this.fail);
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {
        wx.stopPullDownRefresh(), wx.showNavigationBarLoading();
        var t = {
            id: a
        };
        i.httpPost(n.xzDataUrl, t, this.success, this.fail);
    },
    onReachBottom: function() {},
    onShareAppMessage: function(a) {
        return {
            path: "/page/index/index",
            success: function(a) {
                wx.showShareMenu({
                    withShareTicket: !0
                });
            },
            fail: function(a) {},
            complete: function() {}
        };
    },
    success: function(n) {
        var i = n;
        wx.setStorageSync(String(a), n), this.setData({
            ys_data: i,
            xzName: t,
            todayDate: e.todayData(),
            imgUrl: this.data.xzImgUrl[a],
            xzID: a
        }), wx.hideNavigationBarLoading();
    },
    fail: function(a) {
        console.log("失败"), wx.hideLoading(), wx.showModal({
            title: "网络错误",
            content: "服务器出错，请稍后重试",
            showCancel: !1
        });
    },
    select: function(a) {
        var t = a.target.dataset.index;
        a.target.dataset.type;
        this.setData({
            selectedtab: t
        });
    },
    adLoad: function() {
        console.log("Banner 广告加载成功"), this.setData({
            showAd: !0
        });
    },
    adError: function(a) {
        console.log("Banner 广告加载失败", a), this.setData({
            showAd: !1
        });
    },
    adClose: function() {
        console.log("Banner 广告关闭"), this.setData({
            showAd: !1
        });
    }
});