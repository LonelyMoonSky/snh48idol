// pages/weather/weather.js
Page({

	/**
	 * 页面的初始数据
	 */
	data: {
		region: ["北京市", "北京市", "东城区"],
		now: "",
		isChecked: true,
		flag: true
	},
	/**
	 * 生命周期函数--监听页面加载
	 */
	onLoad: function (options) {
		this.getUserLocation();
	},
	switchChange:function(){
		let that = this;
		that.setData({
			isChecked: !that.data.isChecked
		});
			if(that.data.isChecked) {
				that.getUserLocation();
			}
	},
	switchChangeTwo: function () {
		let that = this;
		if(that.data.isChecked) {
			that.setData({
				isChecked: !that.data.isChecked
			});
		}
	},
	// 获得用户定位的经纬度
	getUserLocation:function(){
		let me = this;
		wx.getLocation({
			type: 'wgs84',
			altitude: true,
			success:function(res) {
				if(res && res.latitude && res.longitude) {
					var longitude = res.longitude, latitude = res.latitude;
					me.loadCity(longitude, latitude)
				} else {
					me.setData({
						region: "获取失败"
					});
				};
			},
			fail:function(res) {
				me.setData({
					region: "获取经纬度失败"
				});
			},
		})
	},
	// 把经纬度转换为城市名称
	loadCity:function(longitude, latitude) {
		let me = this;
		wx.request({
			url: 'https://api.map.baidu.com/reverse_geocoding/v3/?',
			data: {
				location: latitude + ',' + longitude,
				output: "json",
				coordtype: "wgs84ll",
				ak: "6q3HQUGTVPExuRFizyP8RxEYgG8ufCxP"
			},
			success:function(res){
				var province = res.data.result.addressComponent.province;
				var city = res.data.result.addressComponent.city;
				var district = res.data.result.addressComponent.district;
				if(res && res.data) {
					me.setData({
						region: province + ',' + city + ',' + district
					})
					me.getWeather(city)
				} else {
					me.setData({
						region: "获取失败"
					});
				}
			}
		})
	},
	// 联网得到和风天气的天气详细信息
	getWeather: function (city) {
		let that = this;
		wx.request({
			url: 'https://free-api.heweather.net/s6/weather/now?',
			data: {
				location: city,
				key: "8da357dcc73b4c4594038279db9e33b8"
			},
			success: function (res) {
				that.setData({
					now: res.data.HeWeather6[0].now,
					})
			}
		})
	},

	// 用户自己修改位置
	changeRegion: function (e) {
		this.setData({
			region: e.detail.value
		})
		this.newGetWeather();
		this.switchChangeTwo();
	},
// 用户自己修改位置获得天气
newGetWeather: function () {
	let that = this;
	wx.request({
		url: 'https://free-api.heweather.net/s6/weather/now?',
		data: {
			location: that.data.region[1],
			key: "8da357dcc73b4c4594038279db9e33b8"
		},
		success: function (res) {
			that.setData({
				now: res.data.HeWeather6[0].now,
			})
		}
	})
}

})