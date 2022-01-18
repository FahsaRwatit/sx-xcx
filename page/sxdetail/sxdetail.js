var a, t, n = require("../../api.js"), e = require("../../func.js"), i = require("../../httpfunc.js");
console.log("开始：")
console.log(t)

a = 0, t = ""
Page({
    data: {
        host: n.host,
        sxNametxt: "",
        todayDate: "",
        xzID: "",
        imgUrl: "../../images/avatar.png",
        xzImgUrl: [ "../../images/baiyang.png", "../../images/jinniu.png", "../../images/shuangzi.png", "../../images/juxie.png", "../../images/shizi.png", "../../images/chunv.png", "../../images/tianping.png", "../../images/tianxie.png", "../../images/sheshou.png", "../../images/mojie.png", "../../images/shuiping.png", "../../images/shuangyu.png" ],
        ys_data: [],
        selectedtab: 0,
        showAd: !0,
        sxname: '',
        todayData:[],
    },
    onLoad: function(n) {
        var sxnametxt;
        0 != Object.keys(n).length && (a = n.id, sxnametxt = n.sxnametxt, sxname = n.sxname);
        console.log("详情:");

        console.log(n);

        var sxname = n.sxname;
        var sxnametxt = n.sxnametxt;

        console.log(sxname);
        console.log(sxnametxt);
        this.setData({
            sxname: sxname,
            sxNametxt: sxnametxt
        });
    },
    onReady: function() {
        console.log("sxname:");
        console.log(a);
        console.log(this.data.sxname);

        // wx.getStorageSync("userInfo") || wx.switchTab({
        //     url: "/page/index/index"
        // }), wx.showNavigationBarLoading();
        var parame = {
            sxname: this.data.sxname,
        };
        // try {
        //     wx.getStorageSync(String(a)) && wx.getStorageSync(String(a));
        // } catch (a) {
        //     "";
        // }



        // if (wx.getStorageSync(String(a)) && wx.getStorageSync(String(a))[0].todayData == e.todayData()) {
        //     var o = wx.getStorageSync(String(a));
        //     console.log("数据：");
        //     console.log(o);
        //     this.setData({
        //         ys_data: o,
        //         xzName: t,
        //         // todayDate: o[0].todayData,
        //         todayDate: o[0],
        //         imgUrl: this.data.xzImgUrl[a],
        //         xzID: a
        //     }), wx.hideNavigationBarLoading();
        // } else i.httpPost(n.sxGetData, parame, this.success, this.fail);


        i.httpPost(n.sxGetData, parame, this.success, this.fail)


        // if (wx.getStorageSync(String(a)) && wx.getStorageSync(String(a))[0].todayData == e.todayData()) {
        //     var o = wx.getStorageSync(String(a));
        //     console.log("数据：");
        //     console.log(o);
        //     this.setData({
        //         ys_data: o,
        //         xzName: t,
        //         // todayDate: o[0].todayData,
        //         todayDate: o[0],
        //         imgUrl: this.data.xzImgUrl[a],
        //         xzID: a
        //     }), wx.hideNavigationBarLoading();
        // } else i.httpPost(n.sxGetData, s, this.success, this.fail);
    },
    // onShow: function() {},
    // onHide: function() {},
    // onUnload: function() {},
    // onPullDownRefresh: function() {
    //     wx.stopPullDownRefresh(), wx.showNavigationBarLoading();
    //     var t = {
    //         id: a,
    //         sxname: this.data.sxname
    //     };
    //     i.httpPost(n.sxGetData, t, this.success, this.fail);
    // },
    // onReachBottom: function() {},
    // onShareAppMessage: function(a) {
    //     return {
    //         path: "/page/index/index",
    //         success: function(a) {
    //             wx.showShareMenu({
    //                 withShareTicket: !0
    //             });
    //         },
    //         fail: function(a) {},
    //         complete: function() {}
    //     };
    // },
    success: function(n) {
        console.log("成功：");
        console.log(n);
        console.log(e);

        var d = n.d;
        console.log(d);
        var ys_data = d;
        console.log(a);
        // wx.setStorageSync(String(a), n)
        this.setData({
            ys_data: ys_data,
            sxNametxt: this.data.sxNametxt,
            // todayDate: e.todayData(),
            // imgUrl: this.data.xzImgUrl[a],
            // xzID: a
        }),
        wx.hideNavigationBarLoading();
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
    // adLoad: function() {
    //     console.log("Banner 广告加载成功"), this.setData({
    //         showAd: !0
    //     });
    // },
    // adError: function(a) {
    //     console.log("Banner 广告加载失败", a), this.setData({
    //         showAd: !1
    //     });
    // },
    // adClose: function() {
    //     console.log("Banner 广告关闭"), this.setData({
    //         showAd: !1
    //     });
    // }
});