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
            name: "Aries",
            text: "白羊座 源码网:iyuanmas.com",
            date: "3.21-4.19",
            imgSrc: "../../images/baiyang.png"
        }, {
            id: 1,
            name: "Taurus",
            text: "金牛座",
            date: "4.20-5.20",
            imgSrc: "../../images/jinniu.png"
        }, {
            id: 2,
            name: "Gemini",
            text: "双子座",
            date: "5.21-6.21",
            imgSrc: "../../images/shuangzi.png"
        }, {
            id: 3,
            name: "Cancer",
            text: "巨蟹座",
            date: "6.22-7.22",
            imgSrc: "../../images/juxie.png"
        }, {
            id: 4,
            name: "Leo",
            text: "狮子座",
            date: "7.23-8.22",
            imgSrc: "../../images/shizi.png"
        }, {
            id: 5,
            name: "Virgo",
            text: "处女座",
            date: "8.23-9.22",
            imgSrc: "../../images/chunv.png"
        }, {
            id: 6,
            name: "Libra",
            text: "天秤座",
            date: "9.23-10.23",
            imgSrc: "../../images/tianping.png"
        }, {
            id: 7,
            name: "Scorpio",
            text: "天蝎座",
            date: "10.24-11.22",
            imgSrc: "../../images/tianxie.png"
        }, {
            id: 8,
            name: "Sagittarius",
            text: "射手座",
            date: "11.23-12.21",
            imgSrc: "../../images/sheshou.png"
        }, {
            id: 9,
            name: "Capricorn",
            text: "摩羯座",
            date: "12.22-1.19",
            imgSrc: "../../images/mojie.png"
        }, {
            id: 10,
            name: "Aquarius",
            text: "水瓶座",
            date: "1.20-2.18",
            imgSrc: "../../images/shuiping.png"
        }, {
            id: 11,
            name: "Pisces",
            text: "双鱼座",
            date: "2.19-3.20",
            imgSrc: "../../images/shuangyu.png"
        } ],
        title: "欧皇源码",
        desc: "描述"
    },
    selectItem: function(e) {
        var t = e.currentTarget.dataset.id, n = e.currentTarget.dataset.name;
        wx.getStorageSync("userInfo") ? wx.navigateTo({
            url: "/page/result/result?id=" + t + "&name=" + n
        }) : a.login(this.gotoResult(t, n));
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
            url: "/page/result/result?id=" + e + "&name=" + t
        });
    }
});