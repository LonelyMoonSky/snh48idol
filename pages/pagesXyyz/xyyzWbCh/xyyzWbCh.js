// pagesXyyz/xyyzWbCh/xyyzWbCh.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        res: [
            "https://wx3.sinaimg.cn/mw1024/007Y1YXdly1g96j9p5qf5j31jh2bcx6s.jpg",
            "https://wx1.sinaimg.cn/mw1024/007Y1YXdly1g96j9z1wpij323434ux6t.jpg",
            "https://wx1.sinaimg.cn/mw1024/007Y1YXdgy1g91h7xe5cbj31jg2bcb29.jpg",
            "https://wx3.sinaimg.cn/mw1024/007Y1YXdgy1g91h7yhcnjj31jg2bc4qp.jpg",
        ],
        newRes: [
            "https://wx3.sinaimg.cn/large/007Y1YXdly1g96j9p5qf5j31jh2bcx6s.jpg",
            "https://wx1.sinaimg.cn/large/007Y1YXdly1g96j9z1wpij323434ux6t.jpg",
            "https://wx1.sinaimg.cn/large/007Y1YXdgy1g91h7xe5cbj31jg2bcb29.jpg",
            "https://wx3.sinaimg.cn/large/007Y1YXdgy1g91h7yhcnjj31jg2bc4qp.jpg",
        ],
    },
    down: function(e) {
        var index = e.currentTarget.dataset.index;
        var newRes = this.data.newRes;
        wx.previewImage({
            current: newRes[index],
            urls: newRes,
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