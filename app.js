var t, e = require("@babel/runtime/helpers/interopRequireDefault")(require("@babel/runtime/helpers/defineProperty"));

require("api.js"), require("func.js"), 
require("httpfunc.js"), require("login.js");

App({
    onLaunch: function(t) {
        var e = this;
        if (wx.setStorageSync("isUpdata", !0), wx.getSystemInfo({
            success: function(t) {
                e.globalData.screenWidth = t.screenWidth, e.globalData.screenHeight = t.screenHeight, 
                e.globalData.windowWidth = t.windowWidth, e.globalData.windowHeight = t.windowHeight;
            }
        }), "" != wx.getStorageSync("userInfo")) {
            var a = wx.getStorageSync("userInfo");
            this.globalData.userInfo = a;
        }
        var i = this;
        if (wx.getSystemInfo({
            success: function(t) {
                var e = wx.getMenuButtonBoundingClientRect();
                i.globalData.statusBarHeight = t.statusBarHeight, i.globalData.titleBarHeight = e.bottom + e.top - 2 * t.statusBarHeight;
            },
            failure: function() {
                i.globalData.statusBarHeight = 20, i.globalData.titleBarHeight = 44;
            }
        }), wx.canIUse("getUpdateManager")) {
            var n = wx.getUpdateManager();
            n.onCheckForUpdate(function(t) {
                t.hasUpdate && (n.onUpdateReady(function() {
                    wx.showModal({
                        title: "更新提示",
                        content: "新版本已经准备好，是否重启应用？",
                        success: function(t) {
                            wx.setStorageSync("isUpdata", !0), t.confirm && n.applyUpdate();
                        }
                    });
                }), n.onUpdateFailed(function() {
                    wx.showModal({
                        title: "新版本更新失败！",
                        content: "新版本已经上线啦~，请您删除当前小程序，重新搜索打开哟~"
                    });
                }));
            });
        }
    },
    onShow: function(t) {},
    globalData: (t = {
        userInfo: null,
        statusBarHeight: 22,
        titleBarHeight: 44,
        windowWidth: 0,
        windowHeight: 0
    }, (0, e.default)(t, "windowWidth", 0), (0, e.default)(t, "windowHeight", 0), (0, 
    e.default)(t, "status", 0), (0, e.default)(t, "version", "1.1.0"), t)
});