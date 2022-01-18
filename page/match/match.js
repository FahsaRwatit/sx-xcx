var e, t, a, i = getApp(), n = require("../../api.js"), s = require("../../login.js");

require("../../httpfunc.js"), require("../../func.js");

e = 12, t = 12, a = 2, Page({
    data: {
        host: n.host,
        userInfo: "",
        hasUserInfo: !1,
        showTip: !1,
        canIUse: wx.canIUse("button.open-type.getUserInfo"),
        xzType: 0,
        gg_data: {
            xzID: 12,
            xzName: "",
            imgUrl: "../../images/m_def.png"
        },
        mm_data: {
            xzID: 12,
            xzName: "",
            imgUrl: "../../images/m_def.png"
        },
        objectArray: [ {
            id: 0,
            name: "Aries",
            text: "白羊座",
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
        showSelBox: !1
    },
    onLoad: function(e) {
        wx.getStorageSync("userInfo") && this.setData({
            hasUserInfo: !0
        });
    },
    onReady: function() {
        wx.getStorageSync("userInfo") && this.setData({
            userInfo: wx.getStorageSync("userInfo"),
            hasUserInfo: !0
        }), e < 12 && t < 12 && this.setData({
            gg_data: {
                xzID: gg_imaled,
                xzName: this.data.objectArray[e].text,
                imgUrl: this.data.objectArray[e].imgSrc
            },
            mm_data: {
                xzID: t,
                xzName: this.data.objectArray[t].text,
                imgUrl: this.data.objectArray[t].imgSrc
            }
        });
    },
    onShow: function() {},
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    getUserInfo: function(e) {
        console.log(e), wx.getStorageSync("userInfo") ? this.gotoResult() : console.log(e), 
        e.detail.userInfo ? (wx.setStorageSync("userInfo", e.detail.userInfo), i.globalData.userInfo = e.detail.userInfo, 
        this.setData({
            userInfo: e.detail.userInfo,
            hasUserInfo: !0,
            showTip: !1
        }), s.login(this.gotoResult())) : this.setData({
            hasUserInfo: !1,
            showTip: !0
        });
    },
    openSetting: function(e) {
        e.detail.authSetting["scope.userInfo"] ? (s.login(), wx.setStorageSync("userInfo", e.detail.userInfo), 
        this.setData({
            hasUserInfo: !0,
            showTip: !1
        })) : (this.setData({
            hasUserInfo: !1,
            showTip: !0
        }), wx.clearStorage());
    },
    showSelBox: function(e) {
        a = e.currentTarget.dataset.type, this.setData({
            showSelBox: !0,
            xzType: a
        });
    },
    hideSelBox: function(e) {
        this.setData({
            showSelBox: !1
        });
    },
    selectItem: function(i) {
        var n = i.currentTarget.dataset.id;
        1 == a ? (e = n, this.setData({
            gg_data: {
                xzID: n,
                xzName: i.currentTarget.dataset.name,
                imgUrl: this.data.objectArray[n].imgSrc
            }
        })) : (t = n, this.setData({
            mm_data: {
                xzID: n,
                xzName: i.currentTarget.dataset.name,
                imgUrl: this.data.objectArray[n].imgSrc
            }
        })), this.hideSelBox();
    },
    gotoResult: function() {
        e >= 0 && e < 12 && t >= 0 && t < 12 ? wx.getStorageSync("userInfo") && wx.navigateTo({
            url: "/page/matchData/matchData?M=" + e + "&F=" + t
        }) : wx.showToast({
            title: "请选择星座",
            icon: "none",
            duration: 2e3
        });
    }
});