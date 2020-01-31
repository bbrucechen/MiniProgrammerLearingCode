// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  // 通过onload函数的参数就可以获取传过来的的数据
  onLoad: function (options) {
    console.log(options)
  },
  backPage() {
    wx.navigateBack({
      delta:1
    })
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
  // 由于返回时页面会销毁从而触发onUnloade函数，所以如果返回时想传递数据就应该在onUnload中2传递
  onUnload: function () {
    // 1.获取要传递的目标页面的对象
    // 通过全局函数getCurrentPages可以直接获取所有页面对象 数组形式
    const pages = getCurrentPages()
    // 2.修改数据
    pages[0].setData({
      title:'hehehe'
    })
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