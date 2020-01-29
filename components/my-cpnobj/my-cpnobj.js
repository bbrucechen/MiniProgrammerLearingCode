// components/my-cpnobj/my-cpnobj.js
Component({
  properties:{
    // 使用者给组件传入数据
  },
  data:{
    // 组件初始化数据
  },
  methods:{
    // 组件内部方法
  },
  options:{
    // 组件选项
    // multipleSlots
    // styleIsolation
  },
  externalClasses:[
    // 类名延伸
  ],
  observers:{
    // 监听数据
    counter(newVal) {

    }
  },
  // 组件生命周期
  // 一共有两种：
  // 1.监听当前组件所在页面的生命周期
  pageLifetimes:{
    show() {
      console.log('监听组件所在页面显示出来时')
    },
    hide() {
      console.log('监听组件所在页面隐藏时')
    },
    resize() {
      console.log('监听页面尺寸改变')
    }
  },
  // 2.监听当前组件本身生命周期
  lifetimes:{
    created() {
      console.log('组件创建')
    },
    attached:function() {
      console.log('组件挂载')
    },
    ready() {
      console.log('组件加载完成')
    },
    moved() {
      console.log('组建移动')
    },
    dettached() {
      console.log('组件移除')
    }
  }
})
