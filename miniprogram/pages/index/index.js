const db=wx.cloud.database()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataObj:""
  },

//查询数据
getData(){
    db.collection("user").get().then(res=>{
      this.setData({
        dataObj:res.data
      })
    })
},

//添加数据
addData(){
  wx.showLoading({
    title: '数据加载中...',
    mask:"true"
  })
  db.collection("user").add({
    data:{
      user_name:"测试用户2",
      role:"买家"
    }
  }).then(res=>{
console.log(res)
wx.hideLoading()
  })
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