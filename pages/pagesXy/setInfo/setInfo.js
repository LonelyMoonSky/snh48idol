//index.js
//获取应用实例

var util = require('../../../utils/util.js');
const app = getApp();

Page({
    data: {
        src: ["http://b321.photo.store.qq.com/psb?/V12aMNdl3T0WQr/xx0cFBUS2DhEua6rPR9oznnxEVcT4KUXJejpcLiwKkc!/c/dEEBAAAAAAAA&bo=OAQ4BDgEOAQRADc!&rf=mood_app&t=5"],
        srcBig: ["https://wx1.sinaimg.cn/large/005HOofigy1fj6r6v3fyej32c02c0kjl.jpg"],
        days: 1314,
        H: 5,
        M: 2,
        S: 0,
      imageItem: ["http://a1.qpic.cn/psc?/V12aMNdl3T0WQr/0PrhSz*Kk2tvG8E8u*h5wlWGZlPPOqEH6i88qPor2OmeWfKtE3Nco7HzbKVFSBIwjOvmh4teN3vDnckAcakkhw!!/c&ek=1&kp=1&pt=0&bo=9QEMAvUBDAIRADc!&tl=3&vuin=1370344136&tm=1584694800&sce=60-2-2&rf=0-0"],
        year: 2015,
        num: 154,
        run: [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        ping: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
        setInter: '',
    },
    money: function(e) {
        wx.previewImage({
            current: this.data.imageItem,
            urls: this.data.imageItem,
        })
    },
    src: function(e) {
        wx.previewImage({
            current: this.data.src,
            urls: this.data.srcBig,
        })
    },
    onShow: function() {
        var that = this;
        that.data.setInter = setInterval(function() {
            //获取当前时间戳
            var timestamp = Date.parse(new Date());
            timestamp = timestamp / 1000;
            //获取当前时间
            var n = timestamp * 1000;
            var date = new Date(n);
            //年
            var Y = date.getFullYear();
            //月
            var M = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1);
            //日
            var D = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
            D = Number(D);
            //时
            var h = date.getHours();
            //分
            var m = date.getMinutes();
            //秒
            var s = date.getSeconds();

            var days = that.data.num;
            var year = that.data.year;
            while (year < Y) {
                if ((Y % 400) == 0 || (Y % 4 == 0) && (Y % 100) != 0) {
                    days += 366;
                } else {
                    days += 365;
                };
                year++;
            };
            if ((Y % 400) == 0 || (Y % 4 == 0) && (Y % 100) != 0) {
                for (var i = 0; i < M - 1; i++) {
                    days += that.data.run[i];
                };
                days += D;
            } else {
                for (var i = 0; i < M - 1; i++) {
                    days += that.data.ping[i];
                };
                days += D;
            };
            that.setData({
                days: days,
                H: h,
                M: m,
                S: s,
            });
        }, 1000);
    },
    //事件处理函数
    onLoad: function() {

    },
    endSetInter: function() {
        var that = this;
        clearInterval(that.data.setInter)
    },
    onHide: function() {
        var that = this;
        clearInterval(that.data.setInter);
    },
    onUnload: function() {
        var that = this;
        clearInterval(that.data.setInter);
    },
    onShareAppMessage: function() {
        return {
            title: '快来跟我一起嗑糖&(昕羊太甜了)',
            path: '/pages/index/index'
        }
    },
})