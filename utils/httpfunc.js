var e, n = require("httpfunc.js"), s = require("./utils/func.js"), o = require("api.js"), r = wx.canIUse("button.open-type.getUserInfo");

var a = function(r) {
    var a = r.session_key;
    wx.getSetting({
        success: function(r) {
            r.authSetting["scope.userInfo"] ? wx.getUserInfo({
                success: function(r) {
                    var f = r.userInfo.avatarUrl, c = s.sha1(f), I = {
                        userInfo: 1,
                        rawData: r.rawData,
                        avatarUrl: r.userInfo.avatarUrl,
                        city: r.userInfo.city,
                        language: r.userInfo.language,
                        country: r.userInfo.country,
                        gender: r.userInfo.gender,
                        nickName: r.userInfo.nickName,
                        province: r.userInfo.province,
                        session_key: a,
                        encryptedData: r.encryptedData,
                        iv: r.iv,
                        signstr: c
                    };
                    n.httpPost(o.xzUserInfoUrl, I, t, u), e.globalData.userInfo = r.userInfo, wx.setStorageSync("userInfo", r.userInfo), 
                    e.userInfoReadyCallback && e.userInfoReadyCallback(r);
                }
            }) : wx.authorize({
                scope: "scope.userInfo",
                success: function() {}
            });
        }
    });
}, t = function(n) {
    e.globalData.status = 1, wx.setStorageSync("islogin", 1);
}, u = function(e) {
    console.log(e);
};

module.exports = {
    login: function(t) {
        e = getApp(), t, wx.getStorageSync("userInfo") && wx.login({
            success: function(e) {
                var r = e.code, t = s.sha1(r), f = {
                    loginCode: e.code,
                    signstr: t
                };
                n.httpPost(o.loginUrl, f, a, u);
            }
        }), e.globalData.userInfo ? (e.userInfo = e.globalData.userInfo, e.hasUserInfo = !0) : r ? e.userInfoReadyCallback = function(n) {
            e.userInfo = n.userInfo, e.hasUserInfo = !0;
        } : wx.getUserInfo({
            success: function(n) {
                e.globalData.userInfo = n.userInfo, e.userInfo = n.userInfo, e.hasUserInfo = !0;
            }
        });
    },
    userInfo: {},
    hasUserInfo: !1,
    canIUse: r,
    getUserInfo: function(n) {
        e.globalData.userInfo = n.detail.userInfo, e.userInfo = n.detail.userInfo, e.hasUserInfo = !0;
    }
};