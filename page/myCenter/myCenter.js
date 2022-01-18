var e = getApp(), a = require("../../api.js"), n = require("../../login.js");

require("../../func.js");

Page({
    data: {
        userInfo: {},
        defUserInfo: {
            avatarUrl: "../../images/avatar.png",
            nickName: "点击头像登录",
            gender: 3
        },
        hasUserInfo: !1,
        canIUse: wx.canIUse("button.open-type.getUserInfo"),
        host: a.host,
        date: "2016-09-01",
        reFlash: !1
    },
    onLoad: function(e) {
        n.login();
    },
    onShow: function(a) {
        var n = this;
        if (e.globalData.userInfo) this.setData({
            defUserInfo: {
                avatarUrl: e.globalData.userInfo.avatarUrl,
                nickName: e.globalData.userInfo.nickName,
                gender: e.globalData.userInfo.gender
            }
        }); else if ("" != wx.getStorageSync("userInfo")) {
            var s = wx.getStorageSync("userInfo");
            this.setData({
                defUserInfo: {
                    avatarUrl: s.avatarUrl,
                    nickName: s.nickName,
                    gender: s.gender
                }
            });
        } else this.data.canIUse ? e.userInfoReadyCallback = function(e) {
            n.setData({
                userInfo: e.userInfo,
                hasUserInfo: !0
            });
        } : wx.getUserInfo({
            success: function(a) {
                e.globalData.userInfo = a.userInfo, n.setData({
                    userInfo: a.userInfo,
                    hasUserInfo: !0
                });
            }
        });
    },
    getUserInfo: function(a) {
        if (this.setData({
            reFlash: !0
        }), a.detail.userInfo) {
            wx.setStorageSync("userInfo", a.detail.userInfo), e.globalData.userInfo = a.detail.userInfo, 
            this.setData({
                userInfo: a.detail.userInfo,
                hasUserInfo: !0,
                reFlash: !1
            });
            n.login(this.onFlashSuccess());
        } else this.setData({
            hasUserInfo: !1,
            reFlash: !1
        }), wx.showToast({
            title: "头像昵称更新失败！",
            icon: "none",
            duration: 1e3
        });
    },
    onShareAppMessage: function(e) {
        return {
            path: "/page/index/index",
            success: function(e) {
                wx.showShareMenu({
                    withShareTicket: !0
                });
            },
            fail: function(e) {},
            complete: function() {}
        };
    },
    bindDateChange: function(e) {
        console.log("picker发送选择改变，携带值为", e.detail.value), this.setData({
            date: e.detail.value
        });
    },
    onFlashSuccess: function(e) {
        setTimeout(function() {
            wx.showToast({
                title: "头像昵称更新成功！",
                icon: "none",
                duration: 1e3
            });
        }, 1e3);
    }
});