// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message:'hello kobe',
    nowDate:new Date().toLocaleString(),
    fontColor:'red',
    isShow:false,
    score:97
  },
  inputDone(e) {
    console.log(e)
    let value = Number.parseInt(e.detail.value)
    this.setData({
      score:value
    })
  },
  switch() {
    this.setData({
      isShow:!this.data.isShow
    })
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