// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  toastShow() {
    wx.showToast({
      title: 'i"am toast!',
      duration:500,
      icon:'loading',
      mask:true,
      success() {
        console.log('success')
      },
      fail() {
        console.log('fail')
      }
    })
  },
  showModal() {
    wx.showModal({
      title: 'modal',
      content: '傻逼',
      // 一旦用户点击了确认或取消就触发success
      success(res) {
        console.log(res)
        // 用户的应答信息都包含在success函数的参数中
        if(res.cancel) {
          console.log('用户取消')
        }
        if(res.confirm) {
          console.log('用户确认')
        }
      },
      cancelText:'退出'
    })
  },
  showLoading() {
    wx.showLoading({
      title: '稍等',
      mask:true
    })
    setTimeout(() =>{
      // wx的hideloading可以关闭loading弹窗
      wx.hideLoading()
    },3000)
  },
  showAction() {
    wx.showActionSheet({
      itemList: [
        '相册',
        '拍照'
      ],
      itemColor:'red',
      success:function(res) {
        console.log(res)
        // 通过res中的tapIndex可以得知用户选中哪个选项
      }
    })
  },
  // 必须配置onShareAppMessage函数才能使用分享功能
  onShareAppMessage(op) {
    // 返回一个对象
    return {
      title:'hello',
      path:'/pages/about/about',
      imageUrl:'https://res.wx.qq.com/wxdoc/dist/assets/img/0.4cb08bb4.jpg'
    }
  }
})