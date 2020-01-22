Page({
  data:{
    name:'brcuechen',
    age:23,
    students:[
      {id:110,name:'zhangsan'},
      {id:111,name:'lisi'},
      {id:112,name:'wangwu' },
    ],
    counter:0
  },
  handleBtnClick() {
    this.setData({
      counter:this.data.counter + 1
    })
  },
  handleSubtraction() {
    this.setData({
      counter:this.data.counter - 1
    })
  }
})