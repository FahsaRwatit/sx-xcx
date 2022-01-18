var a, t, e = require("../../api.js"), i = (require("../../func.js"), 
require("../../httpfunc.js"));

a = 0, t = 0, Page({
    data: {
        loading: !1,
        color: "#000",
        background: "#fff",
        show: !0,
        animated: !1,
        back: !1,
        host: e.host,
        match_data: [],
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
        result: "",
        userInfo: "",
        gg_data: {
            xzID: 0,
            xzName: "白羊座",
            imgUrl: "../../images/baiyang.png"
        },
        mm_data: {
            xzID: 0,
            xzName: "白羊座",
            imgUrl: "../../images/baiyang.png"
        },
        showAd: !0
    },
    onLoad: function(n) {
        var s;
        0 != Object.keys(n).length ? (a = parseInt(n.M), t = parseInt(n.F), s = {
            M: a,
            F: t
        }, this.setData({
            gg_data: {
                xzID: a,
                xzName: this.data.objectArray[a].text,
                imgUrl: this.data.objectArray[a].imgSrc
            },
            mm_data: {
                xzID: t,
                xzName: this.data.objectArray[t].text,
                imgUrl: this.data.objectArray[t].imgSrc
            }
        })) : s = {
            M: 0,
            F: 0
        }, i.httpPost(e.xzMatchUrl, s, this.success, this.fail);
    },
    onReady: function() {
        wx.getStorageSync("userInfo") && this.setData({
            userInfo: wx.getStorageSync("userInfo")
        });
    },
    onShow: function() {
        wx.showNavigationBarLoading();
    },
    onHide: function() {},
    onUnload: function() {},
    onPullDownRefresh: function() {},
    onReachBottom: function() {},
    onShareAppMessage: function() {},
    success: function(e) {
        this.setData({
            result: this.data.objectArray[a].text + "配" + this.data.objectArray[t].text,
            match_data: e
        }), wx.hideNavigationBarLoading();
    },
    fail: function(a) {
        setTimeout(function() {
            wx.showToast({
                title: "数据出错，请稍后再试！",
                icon: "none",
                duration: 1e3
            });
        }, 1e3);
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