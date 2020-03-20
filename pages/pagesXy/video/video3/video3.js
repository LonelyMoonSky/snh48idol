// pages/pagesXy/video/video1/video1.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        res: [
            { src: "//i1.hdslb.com/bfs/archive/ea65f2e8ec124ae49437428e30f8eade2280a8e9.jpg@380w_240h_100Q_1c.webp", title: "【第十四集】阿昕回家了|小别胜新婚的干柴烈火|成年人的爱情|互相喂食", time: "2019-12-1", url: "x3033m8flc2" },
            { src: "//i0.hdslb.com/bfs/archive/14edbdd0dc2fdf1181e9ebf4a03cf509bda6eef4.jpg@380w_240h_100Q_1c.webp", title: "【第十三集】羊：好担心啊！她去哪了？我该怎么办丨昕：别担心，我来了！", time: "2019-11-20", url: "r3033uv38xs" },
            { src: "//i0.hdslb.com/bfs/archive/a7c28e6b7134e3ef2eaff83aefdd63f211064fa0.jpg@380w_240h_100Q_1c.webp", title: "【第十二集】姐姐妹妹丨要不咱两个谈谈吧丨绝美", time: "2019-11-10", url: "r30333x3hf7" },
            { src: "//i2.hdslb.com/bfs/archive/93551552d40049f20745c41e631d9c6d21f5f635.jpg@380w_240h_100Q_1c.webp", title: "【第十一集】我们真的是姐妹丨你信吗？丨自古红蓝出CP", time: "2019-11-7", url: "t30330w82t4" },
            { src: "//i2.hdslb.com/bfs/archive/a02e6c014d573fe1cf71002aafc8305c79f0f033.jpg@380w_240h_100Q_1c.webp", title: "【第十集】梦中的我们丨看见对方就想笑丨甜蜜", time: "2019-10-23", url: "o30332aemhg" },
            { src: "//i0.hdslb.com/bfs/archive/70591cd92c149896480870ce78a994345f368563.jpg@380w_240h_100Q_1c.webp", title: "【第九集】分手了？|甩开你的手|和别人睡过后你就别回来了", time: "2019-10-3", url: "t3033j2dpgd" },
            { src: "//i0.hdslb.com/bfs/archive/6c1282d5dcfcedcde300d0b634637b12bd9d0771.jpg@380w_240h_100Q_1c.webp", title: "【第八集】女生要穿的保守一点丨来，让大爷抱一下", time: "2019-7-19", url: "x3033q28p5g" },
            { src: "//i2.hdslb.com/bfs/archive/9a5de65949bc17cc49ab3f7b774cdfc6f751a501.jpg@380w_240h_100Q_1c.webp", title: "【第七集】初恋的感觉让人心动丨想要抓住你的手永远不分开", time: "2019-7-7", url: "o3033x4y82n" },
            { src: "//i0.hdslb.com/bfs/archive/d19c011b4a76147c8371f12b9b9f1897326a122d.jpg@380w_240h_100Q_1c.webp", title: "【第六集】阿拉丁神灯的爱情丨绝美对视", time: "2019-6-30", url: "g3033pqsmzj" },
            { src: "//i1.hdslb.com/bfs/archive/099b1cb1d25dd2083edda1de7b4726c26c2fb478.jpg@380w_240h_100Q_1c.webp", title: "【第五集】单马尾性感小绵羊和帅气白衣小张总|静静地靠着你的肩膀", time: "2019-6-28", url: "u30336gjuah" },
            { src: "//i2.hdslb.com/bfs/archive/28fdabe1718683acada1257d94f6fbce56d3363e.jpg@380w_240h_100Q_1c.webp", title: "【第四集】点击观看旗袍美女在线恋爱|民国爱情故事", time: "2019-6-21", url: "k3033d1xacz" },
            { src: "//i1.hdslb.com/bfs/archive/34f2595c43eeb46ed0b4cceb3c3c31d41c0cd597.jpg@380w_240h_100Q_1c.webp", title: "【第三集】可爱的绵羊公主和帅气张总|结尾反转剧情", time: "2019-6-16", url: "z30334k0myo" },
            { src: "//i0.hdslb.com/bfs/archive/7fb1be72734bb45fe9f94a624af813e2fe30aafe.jpg@380w_240h_100Q_1c.webp", title: "【第二集】靠在阿昕胸口的小绵羊|暗场后的偷笑是我们的浪漫秘密", time: "2019-6-15", url: "g30338vm3q4" },
            { src: "//i1.hdslb.com/bfs/archive/f9786b4c1ba78f79892d399e6934dbde57ab2a5b.jpg@380w_240h_100Q_1c.webp", title: "【第一集】当我的手触碰到你|寒夜里不会仅此而已|绝对的默契和完美的舞蹈", time: "2019-6-14", url: "u303369mry0" },
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