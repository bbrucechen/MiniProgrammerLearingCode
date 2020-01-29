// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:'heihei',
    count:0,
    currentIndex:0
  },
  increment(data) {
    this.setData({
      count:this.data.count + 1
    })
  },
  btnClick(e) {
    console.log(e)
    this.setData({
      currentIndex:e.detail.currentIndex
    })
  },
  cpnChange() {
    // 可以通过selectComponent(选择器))获取组件对象
    const mysel = this.selectComponent('.targetCpn')
    // mysel.setData({
    //   counter:mysel.data.counter + 20
    // })
    // 不推荐在组件外部直接修改组件对象的数据，而是通过调用组件的方法来修改
    mysel.counterIncrement()
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