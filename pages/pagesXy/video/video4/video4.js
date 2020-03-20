// pages/pagesXy/video/video1/video1.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        res: [
            { src: "//i1.hdslb.com/bfs/archive/e45745e4f6b8a59b1aee5775ade6e727ac9242a8.jpg@380w_240h_100Q_1c.webp", title: "SNH48【绵羊+紫菜】 produce101-pick me", url: "o018448kvq1", time: "2016-2-17" }
        ]
    },
    openTenxun: function(e) {
        var value1 = e.currentTarget.dataset.value1;
        var value2 = e.currentTarget.dataset.value2;
        wx.navigateTo({
            url: "tenxun/tenxun?vid=" + value1 + "&name=" + value2 + "",
        });
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