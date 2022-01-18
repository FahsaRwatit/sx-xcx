var a, t, n = require("../../api.js"), e = require("../../func.js"), i = require("../../httpfunc.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    finger1: "o",
    finger2: "o",
    finger3: "o",
    finger4: "o",
    finger5: "o",
    zhiwenRes: "",
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  radioChange1:function(e){
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    this.setData({
      finger1:e.detail.value
    });
  },
  radioChange2:function(e){
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    this.setData({
      finger2:e.detail.value
    });
  },
  radioChange3:function(e){
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    this.setData({
      finger3:e.detail.value
    });
  },
  radioChange4:function(e){
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    this.setData({
      finger4:e.detail.value
    });
  },
  radioChange5:function(e){
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    this.setData({
      finger5:e.detail.value
    });
  },
  starttest: function() {
    var parame = {
      finger1: this.data.finger1,
      finger2: this.data.finger2,
      finger3: this.data.finger3,
      finger4: this.data.finger4,
      finger5: this.data.finger5,
    };
    console.log(parame);
    i.httpPost(n.zhiwensm, parame, this.success, this.fail)

  },
  success: function(n) {
    var d = n.d;
    console.log(d);
    this.setData({
      zhiwenRes: d.jiexi,
    });


  },
  fail: function(a) {
    console.log("失败"), wx.hideLoading(), wx.showModal({
        title: "网络错误",
        content: "服务器出错，请稍后重试",
        showCancel: !1
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})