// pages/zx/zx.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        index: "",
        nav1_color: "",
        nav2_color: "",
    },

    nav_positionOne: function(e) {
        if (this.data.nav1_color == "") {
            let navOneOpen = wx.createAnimation({
                duration: 3000,
                timingFunction: 'ease',
                delay: 0
            });
            let navTwoOpen = wx.createAnimation({
                duration: 3000,
                timingFunction: 'ease',
                delay: 0
            });
            let bgOpen = wx.createAnimation({
                duration: 3000,
                timingFunction: 'ease',
                delay: 0
            });
            navOneOpen.opacity(0.6).scale(0.9, 0.9).step();
            navTwoOpen.opacity(0.6).scale(0.9, 0.9).step();
            bgOpen.scale(1.05, 1.05).step();
            this.setData({
                index: 1,
                nav1_color: "nav1_color",
                nav2_color: "",
                navOneAnimation: navOneOpen.export(),
                navTwoAnimation: navTwoOpen.export(),
                bgAnimation: bgOpen.export(),
            });
        } else {
            let navOneClose = wx.createAnimation({
                duration: 3000,
                timingFunction: 'ease',
                delay: 0
            });
            let navTwoClose = wx.createAnimation({
                duration: 3000,
                timingFunction: 'ease',
                delay: 0
            });
            let bgClose = wx.createAnimation({
                duration: 3000,
                timingFunction: 'ease',
                delay: 0
            });
            navOneClose.opacity(0).scale(1, 1).step();
            navTwoClose.opacity(0).scale(1, 1).step();
            bgClose.scale(1, 1).step();
            this.setData({
                index: 1,
                nav1_color: "",
                nav2_color: "",
                navOneAnimation: navOneClose.export(),
                navTwoAnimation: navTwoClose.export(),
                bgAnimation: bgClose.export(),
            })
        };

    },

    nav_positionTwo: function(e) {
        if (this.data.nav2_color == "") {
            let navOneOpen = wx.createAnimation({
                duration: 3000,
                timingFunction: 'ease',
                delay: 0
            });
            let navTwoOpen = wx.createAnimation({
                duration: 3000,
                timingFunction: 'ease',
                delay: 0
            });
            let bgOpen = wx.createAnimation({
                duration: 3000,
                timingFunction: 'ease',
                delay: 0
            });
            navOneOpen.opacity(0.6).scale(0.9, 0.9).step();
            navTwoOpen.opacity(0.6).scale(0.9, 0.9).step();
            bgOpen.scale(1.05, 1.05).step();
            this.setData({
                index: 2,
                nav1_color: "",
                nav2_color: "nav2_color",
                navOneAnimation: navOneOpen.export(),
                navTwoAnimation: navTwoOpen.export(),
                bgAnimation: bgOpen.export(),
            });
        } else {
            let navOneClose = wx.createAnimation({
                duration: 3000,
                timingFunction: 'ease',
                delay: 0
            });
            let navTwoClose = wx.createAnimation({
                duration: 3000,
                timingFunction: 'ease',
                delay: 0
            });
            let bgClose = wx.createAnimation({
                duration: 3000,
                timingFunction: 'ease',
                delay: 0
            });
            navOneClose.opacity(0).scale(1, 1).step();
            navTwoClose.opacity(0).scale(1, 1).step();
            bgClose.scale(1, 1).step();
            this.setData({
                index: 2,
                nav1_color: "",
                nav2_color: "",
                navOneAnimation: navOneClose.export(),
                navTwoAnimation: navTwoClose.export(),
                bgAnimation: bgClose.export(),
            })
        };
    },
    scroll_l: function() {
        if (this.data.nav1_color != "" || this.data.nav2_color != "") {
            this.setData({
                nav1_color: "nav1_color",
                nav2_color: "",
            })
        };

    },
    scroll_r: function() {
        if (this.data.nav1_color != "" || this.data.nav2_color != "") {
            this.setData({
                nav1_color: "",
                nav2_color: "nav2_color",
            })
        };

    },
    openWbId: function() {
        wx.navigateTo({
            url: '../pagesZx/zxWbId/zxWbId'
        })
    },
    openBzId: function() {
        wx.navigateTo({
            url: '../pagesZx/zxBzId/zxBzId'
        })
    },
    openWbCh: function() {
        wx.navigateTo({
            url: '../pagesZx/zxWbCh/zxWbCh'
        })
    },
    openQqqh: function() {
        wx.navigateTo({
            url: '../pagesZx/zxQqqh/zxQqqh'
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