var a, t, n = require("../../api.js"), e = require("../../func.js"), i = require("../../httpfunc.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {

    sxlist:[
      {
        "id": "shu",
        "name": "鼠",
        "img": "https://qnres.fahsa.cn/xcx/shengxiao/pic/shu.png",
      },
      {
        "id": "niu",
        "name": "牛",
        "img": "https://qnres.fahsa.cn/xcx/shengxiao/pic/niu.png",
      },
      {
        "id": "hu",
        "name": "虎",
        "img": "https://qnres.fahsa.cn/xcx/shengxiao/pic/hu.png",
      },
      {
        "id": "tu",
        "name": "兔",
        "img": "https://qnres.fahsa.cn/xcx/shengxiao/pic/tu.png",
      },
      {
        "id": "long",
        "name": "龙",
        "img": "https://qnres.fahsa.cn/xcx/shengxiao/pic/long.png",
      },
      {
        "id": "she",
        "name": "蛇",
        "img": "https://qnres.fahsa.cn/xcx/shengxiao/pic/she.png",
      },
      {
        "id": "ma",
        "name": "马",
        "img": "https://qnres.fahsa.cn/xcx/shengxiao/pic/ma.png",
      },
      {
        "id": "yang",
        "name": "羊",
        "img": "https://qnres.fahsa.cn/xcx/shengxiao/pic/yang.png",
      },
      {
        "id": "hou",
        "name": "猴",
        "img": "https://qnres.fahsa.cn/xcx/shengxiao/pic/hou.png",
      },
      {
        "id": "ji",
        "name": "鸡",
        "img": "https://qnres.fahsa.cn/xcx/shengxiao/pic/ji.png",
      },
      {
        "id": "gou",
        "name": "狗",
        "img": "https://qnres.fahsa.cn/xcx/shengxiao/pic/gou.png",
      },
      {
        "id": "zhu",
        "name": "猪",
        "img": "https://qnres.fahsa.cn/xcx/shengxiao/pic/zhu.png",
      },
    ],
    index1: 0,
    index2: 0,
    sxNan: "shu",
    sxNv: "shu",
    nanImg: "https://qnres.fahsa.cn/xcx/shengxiao/pic/shu.png",
    nvImg: "https://qnres.fahsa.cn/xcx/shengxiao/pic/shu.png",

    content: "",
    score: "",
    advise: "",
    showRes: 0,
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
    var nanImg = this.data.sxlist[index].img;
    this.setData({
      sxNan: sxname,
      nanImg: nanImg,
    });
    console.log("男:" + this.data.sxNan);
  },
  bindPickerChangeNv: function (e) {
    var index =  e.detail.value;
    this.setData({
      index2: index,
    })
    var sxname = this.data.sxlist[index].id;
    var nvImg = this.data.sxlist[index].img;
    this.setData({
      sxNv: sxname,
      nvImg: nvImg,
    });
    console.log("女:" + this.data.sxNv);
  },
  toRes:function(){
    var parame = {
      sx1: this.data.sxNan,
      sx2: this.data.sxNv,
    };
    console.log(parame);

    i.httpPost(n.pdshengxiao, parame, this.success, this.fail)

    // getSxPeiDui(parame).then(res => {
    //   // console.log('详情', res)
    //   console.log(res.data);
    //   console.log(res.data.code);

    //   if(res.data.code == 200){
    //     var result = res.data.data;
    //     console.log(res.data.data);

    //     this.setData({
    //       content: result.content,
    //       score: result.score,
    //       advise: result.advise,
    //       showRes: 1,
    //     })
    //   }
    // })

  },
  success: function(n) {
    var d = n.d;
    console.log(d);
    this.setData({
      content: d.content,
      advise: d.advise,
      showRes: 1,
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