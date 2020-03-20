// pages/pagesZx/zxQqqh/zxQqqh.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        src: ["http://b338.photo.store.qq.com/psb?/V12aMNdl3T0WQr/RzO079wgpIJSb2lMHzpIEauz4YbVu6zoBtUtO6VAirw!/c/dFIBAAAAAAAA&bo=HALkAhwC5AIRADc!&rf=mood_app&t=5"],
        newsrc: ["http://b338.photo.store.qq.com/psb?/V12aMNdl3T0WQr/RzO079wgpIJSb2lMHzpIEauz4YbVu6zoBtUtO6VAirw!/b/dFIBAAAAAAAA&amp;bo=HALkAhwC5AIRADc!&rf=viewer_311&t=5"],
    },
    img: function() {
        wx.previewImage({
            current: this.data.src,
            urls: this.data.newsrc,
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