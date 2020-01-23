// pages/home/home.js

// getApp方法用于获取appjs中的app对象
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:app.globalData.name,
    age: app.globalData.age
  },
  // 监听wxml中的点击事件
  viewClick() {
    console.log('click!!')
  },
  // 监听一些window事件
  onPageScroll(obj) {
    console.log(obj)
  },
  onPullDownRefresh() {
    console.log('hahaha')
  },
  onReachBottom() {
    console.log('bottom')
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    console.log('loading')
    wx.request({
      url: 'https://api.asilu.com/geo/',
      success(res) {
        console.log(res)
      }
    })
  }, 

  /**
   * 生命周期函数--监听页面初次渲染完成(只触发一次，发生于onshow之后)
   */
  onReady: function () {
    console.log('ready')
  },
  onShow: function () {
    console.log('show')
  },
  onHide: function () {
    console.log('hide')
  },
  onUnload: function () {

  },
  onPullDownRefresh: function () {

  },
  onReachBottom: function () {

  },
  onShareAppMessage: function () {

  }
})