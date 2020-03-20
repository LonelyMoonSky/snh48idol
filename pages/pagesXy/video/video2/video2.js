// pages/pagesXy/video/video1/video1.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        res: [
            { src: "//puui.qpic.cn/qqvideo_ori/0/e3033ueezt0_496_280/0", title: "【张昕】第四次生日公演", url: "e3033ueezt0", time: "2019-11-09" },
            { src: "//puui.qpic.cn/qqvideo_ori/0/z3033offefn_496_280/0", title: "【张昕】第四次生日会", url: "z3033offefn", time: "2019-11-09" },
            { src: "//puui.qpic.cn/qqvideo_ori/0/a3033sniyz3_496_280/0", title: "【许杨玉琢】第四次生日公演", url: "a3033sniyz3", time: "2019-11-03" },
            { src: "//puui.qpic.cn/qqvideo_ori/0/c3033sskrjc_496_280/0", title: "【许杨玉琢】第四次生日会", url: "c3033sskrjc", time: "2019-11-03" },
            { src: "//puui.qpic.cn/qqvideo_ori/0/j3033pqs8xm_496_280/0", title: "【张昕】第三次生日公演", url: "j3033pqs8xm", time: "2019-02-24" },
            { src: "//puui.qpic.cn/qqvideo_ori/0/n3033foifrj_496_280/0", title: "【张昕】第三次生日会", url: "n3033foifrj", time: "2019-02-24" },
            { src: "//puui.qpic.cn/qqvideo_ori/0/d3033bgfun9_496_280/0", title: "【许杨玉琢】第三次生日公演", url: "d3033bgfun9", time: "2018-10-20" },
            { src: "//puui.qpic.cn/qqvideo_ori/0/x3033lg0b0f_496_280/0", title: "【许杨玉琢】第三次生日会", url: "x3033lg0b0f", time: "2018-10-20" },
            { src: "//puui.qpic.cn/qqvideo_ori/0/a30332p4r0m_496_280/0", title: "【张昕】第二次生日公演", url: "a30332p4r0m", time: "2017-10-22" },
            { src: "//puui.qpic.cn/qqvideo_ori/0/z3033qepnh2_496_280/0", title: "【张昕】第二次生日会", url: "z3033qepnh2", time: "2017-10-22" },
            { src: "//puui.qpic.cn/qqvideo_ori/0/b3033x4oyz7_496_280/0", title: "【许杨玉琢】第二次生日公演", url: "b3033x4oyz7", time: "2017-09-24" },
            { src: "//puui.qpic.cn/qqvideo_ori/0/p3033ujx3jt_496_280/0", title: "【许杨玉琢】第二次生日会", url: "p3033ujx3jt", time: "2017-09-24" },
            { src: "//puui.qpic.cn/qqvideo_ori/0/o3033wcnjd1_496_280/0", title: "【张昕】第一次生日公演", url: "o3033wcnjd1", time: "2016-10-23" },
            { src: "//puui.qpic.cn/qqvideo_ori/0/e3033ho2msg_496_280/0", title: "【张昕】第一次生日会", url: "e3033ho2msg", time: "2016-10-23" },
            { src: "//puui.qpic.cn/qqvideo_ori/0/b3033117xia_496_280/0", title: "【许杨玉琢】第一次生日公演", url: "b3033117xia", time: "2016-10-15" },
            { src: "//puui.qpic.cn/qqvideo_ori/0/u3033cxi2h1_496_280/0", title: "【许杨玉琢】第一次生日会", url: "u3033cxi2h1", time: "2016-10-15" },
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