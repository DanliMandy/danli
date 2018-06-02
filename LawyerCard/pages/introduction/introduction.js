// pages/introduction/introduction.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    introList: {},
    introImg: '',
    introAvatar: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this
    // 获取律师个人简介
    app._http.http_post('/user/getpersonalinfo', {
      lawyerid: app.globalData.lawyerid
    }, res => {
      console.log(res.result)
      that.setData({
        introList: {
          "username": "田娜",
          "practicelaw": "海南追根律师事务所",
          "professionaltitle": "海南房产纠纷 专职律师",
          "province": "江西",
          "city": "鄱阳人",
          "area": "",
          "summary": "田娜，籍贯江西鄱阳人，现执业地海南省三亚市，曾任中国人民财产保险股份有限公司鄱阳支公司、鄱阳县供电局、鄱阳县工业园区等多家企业法律顾问，在为企业提供法律服务的过程中，充分了解了企业对外处理法律事务的工作流程，基于此，所谓知己知彼，百战不殆。现任北京凯莱物业管理有限公司三亚分公司，北京凯莱物业管理有限公司陵水分公司法律顾问。本人主要擅长房地产纠纷、企业法律顾问以及刑事辩护。本人对待当事人真诚、热情、负责，在业务中会尽职尽责维护当事人的合法权利，促成当事人利益的最大化。本人坚信，没有做不好的事，只有不努力的人。坚持委托人利益至上、优质诚信服务！",
          "tagthumbnum": 40,
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
          "curriculums": [{
            "currid": 1,
            "year": "2010年至今",
            "curriculumvitae": "四川省国资委专家顾问委员会委员"
          }, {
            "currid": 2,
            "year": "2010年至今",
            "curriculumvitae": "四川省律协城乡统筹专委会主任"
          }, {
            "currid": 3,
            "year": "2011年至今",
            "curriculumvitae": "成都仲裁委员会委员"
          }, {
            "currid": 4,
            "year": "2014年至今",
            "curriculumvitae": "四川省国资委外部董事库成员"
          }]
        }
      })
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    var that = this
    return {
      title: '个人简介',
      path: 'pages/introduction/introduction',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})