var e = getApp(), t = require("../../api.js"), a = require("../../login.js");

require("../../func.js");

Page({
    data: {
        userInfo: {},
        hasUserInfo: !1,
        showTip: !1,
        canIUse: wx.canIUse("button.open-type.getUserInfo"),
        host: t.host,
        objectArray: [ {
            id: 0,
            name: "shu",
            text: "子鼠",
            date: "3.21-4.19",
            imgSrc: "https://qnres.fahsa.cn/xcx/shengxiao/pic/shu.png"
        }, {
            id: 1,
            name: "niu",
            text: "丑牛",
            date: "4.20-5.20",
            imgSrc: "https://qnres.fahsa.cn/xcx/shengxiao/pic/niu.png"
        }, {
            id: 2,
            name: "hu",
            text: "寅虎",
            date: "5.21-6.21",
            imgSrc: "https://qnres.fahsa.cn/xcx/shengxiao/pic/hu.png"
        }, {
            id: 3,
            name: "tu",
            text: "卯兔",
            date: "6.22-7.22",
            imgSrc: "https://qnres.fahsa.cn/xcx/shengxiao/pic/tu.png"
        }, {
            id: 4,
            name: "long",
            text: "辰龍",
            date: "7.23-8.22",
            imgSrc: "https://qnres.fahsa.cn/xcx/shengxiao/pic/long.png"
        }, {
            id: 5,
            name: "she",
            text: "巳蛇",
            date: "8.23-9.22",
            imgSrc: "https://qnres.fahsa.cn/xcx/shengxiao/pic/she.png"
        }, {
            id: 6,
            name: "ma",
            text: "午馬",
            date: "9.23-10.23",
            imgSrc: "https://qnres.fahsa.cn/xcx/shengxiao/pic/ma.png"
        }, {
            id: 7,
            name: "yang",
            text: "未羊",
            date: "10.24-11.22",
            imgSrc: "https://qnres.fahsa.cn/xcx/shengxiao/pic/yang.png"
        }, {
            id: 8,
            name: "hou",
            text: "申猴",
            date: "11.23-12.21",
            imgSrc: "https://qnres.fahsa.cn/xcx/shengxiao/pic/hou.png"
        }, {
            id: 9,
            name: "ji",
            text: "酉雞",
            date: "12.22-1.19",
            imgSrc: "https://qnres.fahsa.cn/xcx/shengxiao/pic/ji.png"
        }, {
            id: 10,
            name: "gou",
            text: "戌狗",
            date: "1.20-2.18",
            imgSrc: "https://qnres.fahsa.cn/xcx/shengxiao/pic/gou.png"
        }, {
            id: 11,
            name: "zhu",
            text: "亥豬",
            date: "2.19-3.20",
            imgSrc: "https://qnres.fahsa.cn/xcx/shengxiao/pic/zhu.png"
        } ],
        title: "欧皇源码",
        desc: "描述"
    },
    selectItem: function(e) {
        var t = e.currentTarget.dataset.id;
        var n = e.currentTarget.dataset.name;
        var sxnametxt = e.currentTarget.dataset.text;



        wx.getStorageSync("userInfo") ? wx.navigateTo({
            url: "/page/sxdetail/sxdetail?id=" + t + "&sxname=" + n + "&sxnametxt=" + sxnametxt
        }) : a.login(this.gotoResult(t, n));

        // wx.getStorageSync("userInfo") ? wx.navigateTo({
        //     url: "/page/result/result?id=" + t + "&name=" + n
        // }) : a.login(this.gotoResult(t, n));
    },
    onLoad: function(e) {
        wx.getStorageSync("userInfo") && this.setData({
            hasUserInfo: !0
        });
    },
    onReady: function() {},
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    getUserInfo: function(t) {
        var n = t.currentTarget.dataset.id, i = t.currentTarget.dataset.name;
        t.detail.userInfo ? (wx.setStorageSync("userInfo", t.detail.userInfo), e.globalData.userInfo = t.detail.userInfo, 
        this.setData({
            userInfo: t.detail.userInfo,
            hasUserInfo: !0,
            showTip: !1
        }), a.login(this.gotoResult(n, i))) : this.setData({
            hasUserInfo: !1,
            showTip: !0
        });
    },
    openSetting: function(e) {
        e.detail.authSetting["scope.userInfo"] ? (a.login(), wx.setStorageSync("userInfo", e.detail.userInfo), 
        this.setData({
            hasUserInfo: !0,
            showTip: !1
        })) : (this.setData({
            hasUserInfo: !1,
            showTip: !0
        }), wx.clearStorage());
    },
    gotoResult: function(e, t) {
        wx.getStorageSync("userInfo") && wx.navigateTo({
            url: "/page/result/result?id=" + e + "&sxname=" + t
        });
    },
    toSxPeidui: function(){
        wx.navigateTo({
          url: '/page/sxpeidui/sxpeidui',
        })
    }
});