// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message:'hello kobe',
    nowDate:new Date().toLocaleString(),
    fontColor:'red'
  },
  onLoad() {
    setInterval(() => {
      this.setData({
        nowDate:new Date().toLocaleString()
      })
    },1000)
  },
  changeColor() {
    // let newColor = this.data.fontColor == 'red'? 'black':'red'
    this.setData({
      fontColor: this.data.fontColor == 'red' ? 'black' : 'red'
    })
  }
})