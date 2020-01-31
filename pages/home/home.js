// pages/home/home.js
import requst from '../../network/network.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 原生发送网络请求：调用wx对象里的request方法
    // wx.request({
    //         url:'https://api.asilu.com/cloud-music/163',
    //         data:{
    //           type:'play',
    //           id:507681959
    //         },
    //   success:function(res) {
    //     console.log(res)
    //   }
    // })

    // 使用封装的方法发送网络请求
    requst({
      url:'https://api.asilu.com/cloud-music/163',
      data:{
        type: 'playlist',
        id: 3148813452
      }
    }).then((res) => {
      console.log(res)
    })
  }
})
