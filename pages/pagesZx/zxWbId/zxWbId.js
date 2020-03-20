// pages/pagesZx/zxWbId/zxWbId.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        src: [
            "https://wx4.sinaimg.cn/thumb150/005HP8IYgy1g5etdqgrlrj31o0280npd.jpg",
            "https://wx4.sinaimg.cn/thumb150/005HP8IYgy1g5etdx42qtj32801o0e81.jpg",
            "https://wx4.sinaimg.cn/thumb150/005HP8IYgy1g5etdp8jt1j327u1o0kjl.jpg",
            "https://wx2.sinaimg.cn/thumb150/005HP8IYgy1g5etdvwqrhj31201rh1kx.jpg",
            "https://wx2.sinaimg.cn/thumb150/005HP8IYgy1g5eteoregxj31o01o07wh.jpg",
            "https://wx2.sinaimg.cn/thumb150/005HP8IYgy1g5etdxm4rpj315y1al1bm.jpg",
            "https://wx3.sinaimg.cn/thumb150/005HP8IYgy1g5iywyvyltj30rf0rf4el.jpg",
            "https://wx1.sinaimg.cn/thumb150/005HP8IYgy1g5etfpyux4j33402c0b2d.jpg",
            "https://wx4.sinaimg.cn/thumb150/005HP8IYgy1g5iyxetq8nj30xx0u0nmn.jpg",
        ],
        newSrc: [
            "https://wx4.sinaimg.cn/large/005HP8IYgy1g5etdqgrlrj31o0280npd.jpg",
            "https://wx4.sinaimg.cn/large/005HP8IYgy1g5etdx42qtj32801o0e81.jpg",
            "https://wx4.sinaimg.cn/large/005HP8IYgy1g5etdp8jt1j327u1o0kjl.jpg",
            "https://wx2.sinaimg.cn/large/005HP8IYgy1g5etdvwqrhj31201rh1kx.jpg",
            "https://wx2.sinaimg.cn/large/005HP8IYgy1g5eteoregxj31o01o07wh.jpg",
            "https://wx2.sinaimg.cn/large/005HP8IYgy1g5etdxm4rpj315y1al1bm.jpg",
            "https://wx3.sinaimg.cn/large/005HP8IYgy1g5iywyvyltj30rf0rf4el.jpg",
            "https://wx1.sinaimg.cn/large/005HP8IYgy1g5etfpyux4j33402c0b2d.jpg",
            "https://wx4.sinaimg.cn/large/005HP8IYgy1g5iyxetq8nj30xx0u0nmn.jpg",
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