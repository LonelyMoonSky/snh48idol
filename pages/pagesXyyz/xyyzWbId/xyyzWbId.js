// pagesXyyz/xyyzWbId/xyyzWbId.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        src: [
            "https://wx3.sinaimg.cn/thumb150/005HOofily1g5et6m75kyj31o0280kjl.jpg",
            "https://wx2.sinaimg.cn/thumb150/005HOofily1g5et6n4oekj31o027uqv5.jpg",
            "https://wx3.sinaimg.cn/thumb150/005HOofily1g5et6nxbj0j31o027uhdt.jpg",
            "https://wx1.sinaimg.cn/thumb150/005HOofily1g5et6oq2exj32io1ogqv5.jpg",
            "https://wx3.sinaimg.cn/thumb150/005HOofily1g5eu86gup4j31o0280kjm.jpg",
            "https://wx3.sinaimg.cn/thumb150/005HOofily1g5eyi352dbj31o02801kx.jpg",
        ],
        newSrc: [
            "https://wx3.sinaimg.cn/large/005HOofily1g5et6m75kyj31o0280kjl.jpg",
            "https://wx2.sinaimg.cn/large/005HOofily1g5et6n4oekj31o027uqv5.jpg",
            "https://wx3.sinaimg.cn/large/005HOofily1g5et6nxbj0j31o027uhdt.jpg",
            "https://wx1.sinaimg.cn/large/005HOofily1g5et6oq2exj32io1ogqv5.jpg",
            "https://wx3.sinaimg.cn/large/005HOofily1g5eu86gup4j31o0280kjm.jpg",
            "https://wx3.sinaimg.cn/large/005HOofily1g5eyi352dbj31o02801kx.jpg",
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