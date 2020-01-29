// components/my-prop/my-prop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      // 值的类型（必需项）
      type:String,
      // 默认值
      value:'defaultheihei',
      // 观察数值变化
      observer(newval,oldval) {
        console.log(newval,oldval)
      }
    }
  },
  externalClasses:['titleclass'],

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
