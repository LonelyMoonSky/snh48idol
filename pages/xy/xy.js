// pages/xy/xy.js
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },
    openWeather: function() {
        wx.navigateTo({
            url: '../pagesXy/weather/weather'
        })
    },
    openUserInfo: function() {
        wx.navigateTo({
            url: '../pagesXy/setInfo/setInfo'
        })
    },
    openPhoto: function() {
        wx.navigateTo({
            url: '../pagesXy/photo/photo'
        })
    },
    openVideo: function() {
        wx.navigateTo({
            url: '../pagesXy/video/video'
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})