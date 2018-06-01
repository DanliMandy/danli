//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    userInfo: {
      username: '',
      practicelaw: '',
      licensenumber: '',
      professionaltitle: "",
      tag1: "",
      tag2: "",
      tag3: "",
      tag4: "",
      tag5: "",
      tel: "",
      tagthumbnum: "",
      totalnum: "",
      bckcolor: '#f5f5f5',
      color: 'rgb(51, 51, 51)'
    },
    headurl: [],
    licensenumber: '',
    homeAvatar: '',
    hasUserInfo: false,
    // canIUse: wx.canIUse('button.open-type.getUserInfo')
    articleList: [],
    rippleStyle: ''
  },
  // 拨号
  calltap(e) {
    wx.makePhoneCall({
      phoneNumber: this.data.userInfo.tel,
      success: function(e) {
        console.log(e)
      },
      fail: function(e) {
        console.log(e)
      },
      complete: function(e) {
        console.log(e)
      }
    })
  },
  // 上门拜访
  gototap: function() {
    wx.switchTab({
      url: '../linkme/linkme',
    })
  },
  // 去申请
  gotoapply() {
    wx.navigateTo({
      url: '../apply/apply',
    })
  },
  // 点击效果
  containerTap: function(res) {
    var that = this
    var x = res.touches[0].pageX;
    var y = res.touches[0].pageY + 85;
    this.setData({
      rippleStyle: ''
    });
    setTimeout(function() {
      that.setData({
        rippleStyle: 'top:' + y + 'px;left:' + x + 'px;animation: ripple 0.2s linear;animation:ripple 0.2s linear;'
      });
    }, 200)
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  // 跳转案例
  entryCase: function() {
    wx.switchTab({
      url: '../cases/cases'
    })
  },
  // 跳转文章详情
  entryCaseDetails: function(e) {
    // console.log(e.currentTarget.id)
    var id = e.currentTarget.id
    wx.navigateTo({
      url: '../articleDetails/articleDetails?articleid=' + id
    })
  },
  // 认可
  approveBtn: function(e) {
    var tag = e.currentTarget.dataset.tag,
      that = this,
      _openid = wx.getStorageSync('_openid')
    if (_openid) {
      // console.log(1)
      app._http.http_post('/visitor/thumbtag', {
        tag: tag,
        lawyerid: app.globalData.lawyerid,
        openid: _openid,
        headurl: app.globalData.userInfo.avatarUrl
      }, res => {
        if (res.state == 0) {
          wx.showToast({
            title: '认可成功',
            icon: 'success',
            duration: 500
          })
        } else {
          wx.showToast({
            title: '您已认可',
            icon: 'loading',
            duration: 500
          })
        }
      })
      // return
    } else {
      wx.login({
        success: res => {
          var code = res.code
          wx.getUserInfo({
            success: res => {
              app.globalData.userInfo = res.userInfo
              app.getOpenId(res.userInfo, app.globalData.lawyerid, code)
              setTimeout(() => {
                that.approveBtn()
              }, 500)
            }
          })
        }
      })
    }
  },
  // 存储电话到通讯录
  savephonetap(e) {
    var that = this
    // console.log(d.userInfo)
    // var ai = app.globalData.userInfo
    // 向下兼容
    if (wx.addPhoneContact) {
      wx.addPhoneContact({
        firstName: that.data.userInfo.username, // 姓
        remark: '律师', // 备注
        mobilePhoneNumber: that.data.userInfo.tel, // 个人电话
        organization: that.data.userInfo.practicelaw, // 组织，单位
        title: that.data.userInfo.professionaltitle, // 职位名称
        success: function(res) {
          console.log(res)
        },
        fail: function(res) {
          console.log(res)
        }
      })
    } else {
      // 如果希望用户在最新版本的客户端上体验您的小程序，可以这样子提示
      wx.showModal({
        title: '提示',
        content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
      })
    }
  },
  onShow: function() {
    var that = this
    // 获取律师信息
    app._http.http_get('/user/getinfobyuserid?lawyerid=' + app.globalData.lawyerid, res => {
      // console.log(res)
      res.result = {
        "username": "田娜",
        "practicelaw": "海南追根律师事务所",
        "licensenumber": "146022015116131446",
        "professionaltitle": "专职律师",
        "personalheadurl": "http://osuvkkeqf.bkt.clouddn.com/lawyer/head/chen.png",
        "tags": [{
          "tagid": 1,
          "tags": "建筑工程纠纷",
          "tagnum": 0
        }, {
          "tagid": 2,
          "tags": "国有资产改制",
          "tagnum": 0
        }, {
          "tagid": 3,
          "tags": "证券投资法律",
          "tagnum": 0
        }],
        "tel": "15289702480",
        "tagthumbnum": 40,
        "totalnum": app.globalData.star.num,
        "headurl": [
          "https://wx.qlogo.cn/mmopen/vi_32/PiajxSqBRaEIcUSiblGHF60sgKia6ickHmaYoxhANYibR66FR6DiciaUhLhLKiaHI0aD5X0icm1dkibbkiciakicxXgkEFVOPrA/132",
          "https://wx.qlogo.cn/mmopen/vi_32/sdF70WZpibcYgrCQPBib25a5zAKOBSA0C4jgB7ibrt6naAEcib2DYXhibWpMW78ZU0bLWjXCZWoyWjSMqgj2icicLglhA/132",
          "https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTIicez3N1pb83tNq5ImfBicgJVNVl3QKODEG4ibGSF5YAWs2Ie7TSPibjHPI0CkF9eZIeIlDibOfQA7Y7Q/132",
          "https://wx.qlogo.cn/mmopen/vi_32/DYAIOgq83er4OcsRPrClwyvq1Y58tCRQOiahKmNtiabibddzUgicMibjL7102e4PibSOmu3QticyWnA9KdZ2PBwugWFDA/132",
          "https://wx.qlogo.cn/mmopen/vi_32/6kSeb9gCfQO9s6SQPlVcZ8PX76NtdO89CcQCzx1lacpictlNI5S2XYnWXJtogjSHAyNX8SuDA2F0Gia1x4yHHIZQ/132"
        ]
      };

      ++app.globalData.star.num;
      if(app.globalData.userInfo.avatarUrl && res.result.headurl.length == 5){
        res.result.headurl.pop();
        res.result.headurl.push(String(app.globalData.userInfo.avatarUrl));
      }
      
      
      var newHeadUrl = res.result.headurl.map(x => {
        if (!x) {
          x = '../../images/atu.png'
        }
        return x
      })
      that.setData({
        userInfo: res.result,
        headurl: newHeadUrl,
        licensenumber: res.result.licensenumber.substr(0, 8) + '*****' + res.result.licensenumber.substr(12, 4)
      })

    
      // 设置小程序title
      wx.setNavigationBarTitle({
        title: res.result.username + '律师的小程序',
      })
    })
    // 获取首页文章列表
    app._http.http_get('/article/getarticles?lawyerid=' + app.globalData.lawyerid + '&limit=6', res => {
      // console.log(res)
      res.result = [{
        "articleid": 1,
        "title": "周某涉嫌非法携带危险物品危及公共安全罪",
        "picurl": "",
        "type": "成功案例",
        "thumbnum": app.globalData.star.num1
      }, {
        "articleid": 2,
        "title": "方某诉李某民间借贷纠纷",
        "picurl": "https://weixin.lawyer-says.com/images/pic/26ef00029f729539c78f.jpg",
        "type": "成功案例",
        "thumbnum": app.globalData.star.num2
      }]
      that.setData({
        articleList: res.result
      })
    })
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function(res) {
    return {
      title: this.data.userInfo.username + '律师的小程序',
      path: 'pages/index/index',
      success: function(res) {
        // 转发成功
      },
      fail: function(res) {
        // 转发失败
      }
    }
  }

})