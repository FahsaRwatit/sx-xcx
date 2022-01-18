// page/sxpeidui/sxpeidui.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    sxlist:[
      {
        "id": "shu",
        "name": "鼠"
      },
      {
        "id": "niu",
        "name": "牛"
      },
      {
        "id": "hu",
        "name": "虎"
      },
      {
        "id": "tu",
        "name": "兔"
      },
      {
        "id": "long",
        "name": "龙"
      },
      {
        "id": "she",
        "name": "蛇"
      },
      {
        "id": "ma",
        "name": "马"
      },
      {
        "id": "yang",
        "name": "羊"
      },
      {
        "id": "hou",
        "name": "猴"
      },
      {
        "id": "ji",
        "name": "鸡"
      },
      {
        "id": "gou",
        "name": "狗"
      },
      {
        "id": "zhu",
        "name": "猪"
      },
    ],
    index1: 0,
    index2: 0,
    sxNan: "shu",
    sxNv: "shu",

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  bindPickerChangeNan: function (e) {
    var index =  e.detail.value;
    console.log('picker发送选择改变，携带值为', e.detail.value);
    this.setData({   //给变量赋值
      index1: index,  //每次选择了下拉列表的内容同时修改下标然后修改显示的内容，显示的内容和选择的内容一致
    })
    // console.log('自定义值:', e.target.dataset.selecthx);
    var sxname = this.data.sxlist[index].id;
    this.setData({
      sxNan: sxname
    });
    console.log("男:" + this.data.sxNan);
  },
  bindPickerChangeNv: function (e) {
    var index =  e.detail.value;
    this.setData({
      index2: index,
    })
    var sxname = this.data.sxlist[index].id;
    this.setData({
      sxNv: sxname
    });
    console.log("女:" + this.data.sxNv);
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