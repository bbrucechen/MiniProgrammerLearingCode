App({

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    // 1.先从缓存中去除token
    const token = wx.getStorageSync('token')
    if(token && token.length !== 0) {
        // 如果有了，则验证知否过期
        this.check_token(token)
    } else {
      this.login()
    }
  },
  // 验证token的函数
  check_token(token) {
    wx.request({
      url:'http://123.207.32.32:8000/api/hy/auth',
      method:'post',
      header:{
        token
      },
      success:(res) => {
        if(!res.data.errCode) {
          this.globalData.token = token
        }
      }
    })
  },
  login() {
    // 登录操作
    wx.login({
      success: (res) => {
        console.log(res)
        // code只有五分钟有效期
        // 1.获取code
        const code = res.code
        // 2.将code发送给开发者服务器
        wx.request({
          url: 'http://123.207.32.32:8000/api/hy/login',
          method: 'post',
          data: {
            code
          },
          success: (res) => {
            console.log(res)
            const token = res.data
            this.globalData.token = token
            // 3.进行本地存储（否则小程序一旦关闭就得重新登录
            wx.setStorageSync('token', token)
          }
        })
      }
    })
  },
  globalData:{
    token:''
  }
})
