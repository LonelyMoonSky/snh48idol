// pages/pagesXy/video/video1/video1.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        res: [
            { src: "https://i2.hdslb.com/bfs/archive/496a7a388441459dec8400489a12924771daff1a.jpg@380w_240h_100Q_1c.webp", title: "第二十一集：【韩国】LOCO的汉堡店", time: "2019-8-31", url: "g3033496p6l" },
            { src: "https://i1.hdslb.com/bfs/archive/d1a8eff04ef51dfd60eab3f4b8b9f499fa0ab425.jpg@380w_240h_100Q_1c.webp", title: "第二十集：【韩国】rapper鸡爪店", time: "2019-7-6", url: "z3033z0z0jt" },
            { src: "https://i2.hdslb.com/bfs/archive/6fe3ae4a95f6337c41822f16810562825139893e.jpg@380w_240h_100Q_1c.webp", title: "第十九集：【上海】正宗潮汕肠粉肠粉", time: "2019-6-12", url: "f3033vrj3vg" },
            { src: "https://i1.hdslb.com/bfs/archive/e3818bdbb10bba9c2138db306e1783e1228f09a1.jpg@380w_240h_100Q_1c.webp", title: "第十八集：【上海】晚上吃BRUNCH", time: "2019-4-5", url: "w3033rilyw7" },
            { src: "https://i1.hdslb.com/bfs/archive/0bd5435b4227a1f77039a417711c5ca5443a91a0.jpg@380w_240h_100Q_1c.webp", title: "第十七集：【上海】满来寿喜烧", time: "2019-2-18", url: "o30333e1115" },
            { src: "https://i0.hdslb.com/bfs/archive/afea743bd90898284fc3114d277bfb40e6853159.jpg@380w_240h_100Q_1c.webp", title: "第十六集：【上海】越南米粉火车头", time: "2018-12-19", url: "h3033kovz3u" },
            { src: "//i2.hdslb.com/bfs/archive/7e47dc3a8074aa00d8c2bda63147675d9a6911ba.jpg@380w_240h_100Q_1c.webp", title: "第十五集：【泰国】麦当劳丨 榴莲糯米雪糕丨青咖喱鸡肉派", time: "2018-10-16", url: "a3033u1rlsy" },
            { src: "//i0.hdslb.com/bfs/archive/41ac8b05677d443a20bd735b5cdcae398ea08c0f.jpg@380w_240h_100Q_1c.webp", title: "第十四集：【上海】韩国街烤鳗鱼海鞘饭团", time: "2018-9-4", url: "z303379i3nz" },
            { src: "//i1.hdslb.com/bfs/archive/ebadcc3677e3b950726e64e3ce1f219f3513880b.jpg@380w_240h_100Q_1c.webp", title: "第十三集：【韩国】牛排杯 丨首尔弘大", time: "2018-8-21", url: "d3033btt8xi" },
            { src: "//i1.hdslb.com/bfs/archive/122b07be17b36df5902f3ea3c6508d053fec9018.jpg@380w_240h_100Q_1c.webp", title: "第十二集：【韩国】土豆汤", time: "2018-7-25", url: "x3033v8muqp" },
            { src: "//i1.hdslb.com/bfs/archive/858731717afeff70667c487bd64f8873420cbe6f.jpg@380w_240h_100Q_1c.webp", title: "第十一集：【上海】烧肉饭丨大馥烧丼屋日料", time: "2018-6-24", url: "m30332ihq37" },
            { src: "https://i1.hdslb.com/bfs/archive/9af21f023db3818884cc9a091c9488a07bce9291.jpg@380w_240h_100Q_1c.webp", title: "第十集：【韩国】元祖奶奶包饭", time: "2018-6-5", url: "g3033er819c" },
            { src: "//i0.hdslb.com/bfs/archive/8ebb9ca2982a08309ae649394e7798beab6973de.jpg@380w_240h_100Q_1c.webp", title: "第九集：【上海】香港黑糖鹿丸鲜奶", time: "2018-4-2", url: "z30336rg8vu" },
            { src: "//i1.hdslb.com/bfs/archive/500da6d79b9c46740df9ac967cf9cfc97a4d995f.jpg@380w_240h_100Q_1c.webp", title: "第八集：【韩国】爆辣的猪脆骨饭团 丨火辣鸡爪", time: "2018-2-15", url: "x3033ho3pmp" },
            { src: "//i2.hdslb.com/bfs/archive/ded44c9abc58459711520dd46b686d3595b63035.jpg@380w_240h_100Q_1c.webp", title: "第七集：【超好吃猪蹄】", time: "2018-2-1", url: "g30338e1slr" },
            { src: "//i0.hdslb.com/bfs/archive/43e8900363ea250fdc752c633d414503f09d523b.jpg@380w_240h_100Q_1c.webp", title: "第六集：【悠唐越南米粉】", time: "2017-11-13", url: "z3033cqv0qj" },
            { src: "//i1.hdslb.com/bfs/archive/50d7f74034edd909befa64059834e6b20a33ef45.jpg@380w_240h_100Q_1c.webp", title: "第五集：【成都小吃特辑】", time: "2017-11-1", url: "c3033dbfei1" },
            { src: "//i1.hdslb.com/bfs/archive/76065d5a9884c06a77d85a0f8e3cd0b0b4b5fbef.jpg@380w_240h_100Q_1c.webp", title: "第四集：【王品牛排豪华特辑】", time: "2017-8-30", url: "g3033bgha2x" },
            { src: "//i0.hdslb.com/bfs/archive/02895e74de81a3c616eca0d55d806631eaa5f7c5.jpg@380w_240h_100Q_1c.webp", title: "第三集：【螺蛳粉】", time: "2017-6-5", url: "m3033at2fo9" },
            { src: "//i1.hdslb.com/bfs/archive/cd4307c8ed59d48daac116e14b11eb506536bee9.jpg@380w_240h_100Q_1c.webp", title: "第二集：【不插电火锅】", time: "2017-4-25", url: "e3033c571e4" },
            { src: "//i2.hdslb.com/bfs/archive/f5e6588c69ca862f498aed81bee433a524959fe5.jpg@380w_240h_100Q_1c.webp", title: "第一集：【抹茶泡面】", time: "2017-4-14", url: "a30330b6umr" },
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