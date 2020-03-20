// pages/pagesXy/photo/photo.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        src: [
            "https://wx2.sinaimg.cn/mw1024/005HOofigy1g9e6x65djqj31k92s04qs.jpg",
        ],
        newSrc: [
            "https://wx2.sinaimg.cn/large/005HOofigy1g9e6x65djqj31k92s04qs.jpg",
        ],
    },
    down: function(e) {
        var index = e.currentTarget.dataset.index;
        var newSrc = this.data.newSrc;
        wx.previewImage({
            current: newSrc[index],
            urls: newSrc,
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