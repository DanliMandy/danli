// pages/articleDetails/articleDetails.js
var util = require('../../utils/util.js')
const app = getApp()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    dianzhan: {},
    article: '',
    art: '',
    num: 0,
    convasContent: '', //文本被截取的字符串
    articleContent: {}, // 文章详情内容
    supNum: 0,
    supAvatar: ['../../images/atu.png'],
    animationData: {}, // 动画
    ty: '1000px', // translateY
    oy: 0, // opacity
    qrCode: '', // 文章二维码
    publicImg: '', // 海报
    avatar: '', // 海报 头像
    // pixelRatio: '', // 设备比例
    zi: -1, // 层级
    lines: 0, // 行数
    text: '', // 文本字符串
    linechnum: '', // 切割字符串
    artid: '', // 文章id,
    contentHeight: 0, // canvas高,
    supImg: '../../images/nosup.png'
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.setData({
      artid: options.articleid
    })
  },
  renderCase() {
    var that = this
    wx.showLoading({
      title: '加载中...',
      mask: true
    })
    // 获取文章内容
    app._http.http_get('/article/getarticlecontent?lawyerid=' + app.globalData.lawyerid + '&articleid=' + that.data.artid, res => {
      // console.log(res)
      wx.hideLoading()
      var sum = res.result.summary.substr(0, 100).replace(/\s+/g, "")
      if (that.data.artid == 1) {
        res.result = {
          "num": 1,
          "name": "田娜",
          "tel": "13808064577",
          "codeurl": "https://weixin.lawyer-says.com/images/lawyer/20180211165353.jpg",
          "picurl": "",
          "personalheadurl": "../../images/introAvatar.png",
          "title": "周某涉嫌非法携带危险物品危及公共安全罪",
          "content": "<p class=\"ql-align-center\">公诉机关某县人民检察院</p><p class=\"ql-align-center\">被告人周某因涉嫌犯非法携带危险物品危及公共安全罪，于2016年某月某日被某县公安局刑事拘留，2017年某月某日被某县公安局逮捕。 辩护人田娜，海南追根律师事务所律师。 公诉机关指控:2016年某月某日零时许， 被告人周某与”老猫仔”、”老鹰”等人在xx酒吧喝酒，期间，周某等人与在隔壁桌喝酒的男子发生争执。 当日凌晨1时20分许，为了吓唬隔壁桌男子，周某将一枚爆炸物装在裤袋中，然后携带该爆炸物走到xx酒吧收银台旁，无意中使该爆炸物掉在地上并发生爆炸，将附近的王某，李某等人炸伤。 经鉴定，王某李某身体所受损伤均为轻微伤。 2016年某月某日，被告人周某到某县公安局投案。 公诉机关出示了相应的证据，认为 被告人周某犯非法携带危险物品危及公共安全罪。 被告人周某对公诉机关起诉指控的犯罪事实、罪名、证据均无异议。 辩护人田娜提出的辩护意见是:1. 被告人周某是自首，可从轻或者减轻处罚。 2.被告人周某是初犯、偶犯，本案的发生也属偶然且本人法律意识不够导致，望能给其一个改过自新的机会，从轻处罚。 本院经审理，对公诉机关指控的犯罪事实、证据、罪名予以确认。 依照《中华人民共和国刑法》第一百三十条 、第六十七条 第一款 的规定，判决如下: 被告人周某犯非法携带危险物品危及公共安全罪，判处有期徒刑一年。",
          "type": "成功案例",
          "totalnum": app.globalData.star.num1,
          "headurl": ["https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKt4yMdMdgBzQ32t14wibX64YXaSCFQ5NibQYk1q1O4kZbBepCcyEFNHSBsdMibwAT6h4nypRbybCzPg/132", "https://wx.qlogo.cn/mmopen/vi_32/WHz7KtH6iaWia9FMnJho6d0VvzbC8DEvEM4Nsxcypq1GaNIm4ZOibibfysFkEiczJVibpu1mrzyLNUaKwUpe8LYN2gBA/132", "https://wx.qlogo.cn/mmopen/vi_32/ecYs5RkD9VMtGHpUZkyichTVvLjxeBSliaweNk84sMic398D60OddAvD6HhiaEew9HG7GQwliap7btbHYTXlAuibGx3A/0"]
        }
      } else {
        res.result = {
          "num": 2,
          "name": "田娜",
          "tel": "13808064577",
          "codeurl": "https://weixin.lawyer-says.com/images/lawyer/20180211165353.jpg",
          "picurl": "",
          "personalheadurl": "../../images/introAvatar.png",
          "title": "方某诉李某民间借贷纠纷",
          "content": "<p class=\"ql-align-center\">李某找到本人，称方某起诉他要求他还款，并且提供了一张《欠条》作为证据，但实际上那张欠条是在被迫之下写的。本人了解相关案情，并结合相关证据，认为本案有被驳回的可能，因为对方仅仅有《欠条》但没有其他辅助证据予以证明我方欠款的事实。 庭审过程中，方某某主张本案不应为借贷关系案件，而是李某某侵吞货款，应为侵权纠纷。 我方认为，民事案件案由，根据《民事案件案由规定》的规定原则，应当根据法庭查明的当事人之间实际存在的法律关系的性质予以确定，方某桂主张侵权关系应提供证据证明李某有侵犯方某桂权利的事实，但方某并未提供充分证据证明，故本案中并不存在方某起诉所主张的侵权法律关系。 方某诉李某偿还所欠货款举证证据《欠条》一张，根据《欠条》的形式及载明的内容确定本案诉争的法律关系应为借款合同关系。 法院认为，根据案件事实作出的认定与方某主张的法律关系性质不一致，法院已根据《最高人民法院关于民事诉讼的若干规定》第三十五条的规定向方某作出释明，但方某拒绝变更法律关系，仍坚持以侵权关系主张，故法院最终驳回方某的诉讼请求。我方胜诉。</p>",
          "type": "成功案例",
          "totalnum": app.globalData.star.num2,
          "headurl": ["https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTKt4yMdMdgBzQ32t14wibX64YXaSCFQ5NibQYk1q1O4kZbBepCcyEFNHSBsdMibwAT6h4nypRbybCzPg/132", "https://wx.qlogo.cn/mmopen/vi_32/WHz7KtH6iaWia9FMnJho6d0VvzbC8DEvEM4Nsxcypq1GaNIm4ZOibibfysFkEiczJVibpu1mrzyLNUaKwUpe8LYN2gBA/132", "https://wx.qlogo.cn/mmopen/vi_32/ecYs5RkD9VMtGHpUZkyichTVvLjxeBSliaweNk84sMic398D60OddAvD6HhiaEew9HG7GQwliap7btbHYTXlAuibGx3A/0"]
        }
      }
      that.setData({
        articleContent: res.result,
        supNum: res.result.totalnum,
        supAvatar: res.result.headurl,
        art: res.result.content,
        type: res.result.type,
        num: res.result.num,
        convasContent: sum
      })
      // console.log(that.data.supAvatar)
      wx.setNavigationBarTitle({
        title: res.result.title,
      })
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    this.renderCase()
  },
  // 拨号
  gotolink(e) {
    wx.switchTab({
      url: '../linkme/linkme',
    })
  },
  // 创建动画
  createAnimations() {
    var animation = wx.createAnimation({
      transformOrigin: "50% 50%",
      duration: 500,
      timingFunction: "ease",
      delay: 0
    })
    this.animation = animation
    animation.opacity(1).translateY(0).step()
    this.setData({
      animationData: animation.export()
    })
  },
  // 隐藏动画
  hideAnimations() {
    this.animation.translateY(-1000).opacity(0).step({
      duration: 1000
    })
    this.setData({
      animationData: this.animation.export()
    })
  },
  // 点赞授权
  supportBtn() {
    var that = this
    var _openid = wx.getStorageSync('_openid')
    // console.log(app.globalData.userInfo.avatarUrl)
    console.log(_openid);
    wx.getUserInfo({
      success: function(res) {
        var nickName = res.userInfo.nickName;
        if (!that.data.dianzhan.nickName) {
          that.data.supAvatar.push(String(res.userInfo.avatarUrl))
          that.setData({
            supNum: Number(that.data.supNum) + 1,
            supAvatar: that.data.supAvatar,
            supImg: '../../images/dz.png'
          })
          wx.showToast({
            title: '点赞成功',
            icon: 'success',
            duration: 500
          })
          if(that.data.num == 1){
             ++app.globalData.star.num1;
          }else{
             ++app.globalData.star.num2;
          }
          that.data.dianzhan.nickName = true;
        } else {
          that.setData({
            supImg: '../../images/dz.png'
          })
          wx.showToast({
            title: '您已点赞',
            icon: 'loading',
            duration: 500
          })
        }
      },
      fail: function() {
        // fail
        console.log("获取失败！")
      },
      complete: function() {
        // complete
        console.log("获取用户信息完成！")
      }
    })
  },
  // 生成海报时 需要监听是否授权
  createPoster() {
    var that = this
    var _openid = wx.getStorageSync('_openid')
    // console.log(_openid == false)
    if (_openid) {
      that.hideAnimations()
      wx.showLoading({
        title: '正在生成海报...',
      })
      that.loadImg()
    } else {
      wx.login({
        success: res => {
          var code = res.code
          wx.getUserInfo({
            success: res => {
              app.globalData.userInfo = res.userInfo
              // console.log(app.globalData.userInfo)
              app.getOpenId(res.userInfo, app.globalData.lawyerid, code)
              that.hideAnimations()
              wx.showLoading({
                title: '正在生成海报...',
              })
              that.loadImg()
            }
          })
        }
      })
    }
  },
  hideCanvas() {
    wx.redirectTo({
      url: '../articleDetails/articleDetails?articleid=' + this.data.artid,
    })
  },
  // 加载并下载图片
  loadImg: function() {
    var that = this
    // console.log(that.data.articleContent.picurl)
    // 一张一张的生成 比较消耗性能
    wx.downloadFile({
      // publicImg
      url: that.data.articleContent.picurl,
      success: function(res) {
        that.setData({
          publicImg: res.tempFilePath
        })
      },
      complete: function(res) {
        // console.log(app.globalData.userInfo.avatarUrl)
        wx.downloadFile({
          // avatar 微信头像
          url: app.globalData.userInfo.avatarUrl,
          success: function(res) {
            // console.log(res.tempFilePath)
            that.setData({
              avatar: res.tempFilePath
            })
          },
          complete: function(res) {
            // console.log(that.data.articleContent.codeurl)
            wx.downloadFile({
              // qrCode
              url: that.data.articleContent.codeurl,
              success: function(res) {
                that.setData({
                  qrCode: res.tempFilePath
                })
              },
              complete: function(res) {
                that.drawCanvas()
              }
            })
          }
        })
      }
    })
  },
  // 创建canvas 并画图
  drawCanvas: function() {
    // 创建canvas
    var
      that = this,
      ctx = wx.createCanvasContext("myCanvas"),
      qrCode = that.data.qrCode,
      imgSrc = that.data.publicImg,
      avatar = that.data.avatar,
      content = that.data.convasContent,
      title = that.data.articleContent.title,
      lawyername = that.data.articleContent.name,
      username = app.globalData.userInfo.nickName;
    // console.log(username)
    // 获取设备比例 ，调整输出图片清晰度
    // 获取屏幕宽高
    var
      pixelRatio = wx.getSystemInfoSync().pixelRatio,
      windowHeight = wx.getSystemInfoSync().windowHeight,
      windowWidth = wx.getSystemInfoSync().windowWidth;
    // console.log(`应用窗口的原始宽高: ${windowWidth} -- ${windowHeight}`)
    // 获取图片宽高
    wx.getImageInfo({
      src: imgSrc,
      success: res => {
        var getImgHeight = res.height,
          getImgWidth = res.width;
        // console.log(`img的原始宽高: ${getImgWidth} -- ${getImgHeight}`)
        // 设置图片缩放
        var setImgHeight = (windowWidth - 6) / getImgWidth * getImgHeight
        // console.log(setImgHeight)
        ctx.setFillStyle('white')
        ctx.fillRect(0, 0, windowWidth, setImgHeight + 390)
        ctx.drawImage(imgSrc, 3, 3, windowWidth - 6, setImgHeight)
        ctx.drawImage(avatar, 15, setImgHeight + 15, 31, 31)
        ctx.setFontSize(14)
        ctx.setFillStyle('#666666')
        ctx.fillText(username, 51, setImgHeight + 27)
        ctx.setFontSize(14)
        ctx.fillText(util.formatTime(new Date()), 51, setImgHeight + 45)
        ctx.fillText('正在读这篇文章', 131, setImgHeight + 45)
        ctx.setFontSize(21)
        ctx.setFillStyle('#090909')
        that.strsplice(title, 32, function() {
          // console.log(11)
          for (let n = 0, off = 0; n < 2; n++) {
            let lnstr1 = that.getLineString(title, off, 32);
            off += lnstr1.length;
            ctx.fillText(lnstr1, 15, setImgHeight + 81 + n * 30);
          }
        })
        // ctx.fillText('别人的物业给业主发出去哈哈哈哈啊', 30, 290)
        ctx.setFontSize(16)
        ctx.setFillStyle('#999999')
        that.strsplice(content, 42, function() {
          for (let t = 0, off = 0; t < 4; t++) {
            // console.log(`t的执行：${t}`)
            let lnstr = that.getLineString(content, off, 42);
            off += lnstr.length;
            ctx.fillText(lnstr, 15, setImgHeight + 142 + t * 25);
          }
        })
        // ctx.fillText('为啥要发红包呢？待效率和大家解释解释阿达的a', 15, 341)
        // ctx.fillText('为啥要发红包呢？待效率和大家解释解释。。', 15, 366)
        // ctx.fillText('为啥要发红包呢？待效率和大家解释解释。。', 15, 391)
        // ctx.fillText('为啥要发红包呢？待效率和大家解释解释。。', 15, 416)
        ctx.beginPath()
        ctx.setLineWidth(0.5)
        ctx.setFillStyle('#8d8d8d')
        ctx.moveTo(15, setImgHeight + 247)
        ctx.lineTo(358, setImgHeight + 247)
        ctx.stroke()
        ctx.setFontSize(16)
        ctx.setFillStyle('#333333')
        ctx.fillText('发表者', 15, setImgHeight + 291)
        ctx.fillText(lawyername + '律师', 15, setImgHeight + 321)
        ctx.setFontSize(14)
        ctx.setFillStyle('#8d8d8d')
        ctx.fillText('长按小程序码', 191, setImgHeight + 291)
        ctx.fillText('进入律师小程序阅读全文', 122, setImgHeight + 320)
        ctx.drawImage(qrCode, 284, setImgHeight + 255, 80, 80)
        that.setData({
          contentHeight: setImgHeight + 390
        })
        ctx.draw(true, function() {
          that.setData({
            zi: 5
          })
        })
        // ctx.draw()兼容安卓保存本地图片解决方法 setTimeout(() => {}, 500)
        setTimeout(() => {
          wx.canvasToTempFilePath({
            x: 0,
            y: 0,
            width: windowWidth,
            height: setImgHeight + 390,
            destWidth: windowWidth * that.data.pixelRatio,
            destHeight: (setImgHeight + 390) * that.data.pixelRatio,
            fileType: 'jpg',
            canvasId: 'myCanvas',
            success: function(res) {
              wx.hideLoading()
              // 保存到系统相册
              // console.log(res.tempFilePath)
              wx.saveImageToPhotosAlbum({
                filePath: res.tempFilePath,
                success: function(res) {
                  wx.showToast({
                    title: '已保存到系统相册',
                    icon: 'success',
                    duration: 2000
                  })
                },
                fail: res => {
                  wx.showToast({
                    title: '保存失败',
                    icon: 'loading',
                    duration: 2000
                  })
                }
              })
            }
          })
        }, 500)
      },
      fail: res => {
        wx.hideLoading()
        wx.showToast({
          title: '图片获取失败',
          icon: 'loading',
          duration: 1500
        })
      },
      complete: res => {
        // console.log(res)
      }
    })

  },
  // str拆分
  strsplice: function(text, linechnum, callback) {
    if (typeof text != 'string' || text.trim().length === 0) {
      var err = new Error('text is not correct:<' + text + '>');
      return callback(err);
    }
    text = text.trim().replace(/\t/g, ' ');
    var linechnum = linechnum;
    var lines = Math.floor(this.getTrueLength(text) / linechnum) + 1;
    // lines = lines > 4 ? 4 : lines
    // this.setData({
    //   lines: lines,
    //   text: text,
    //   linechnum: linechnum
    // })
    return typeof callback == "function" && callback()
  },

  getTrueLength: function(str) {
    var len = str.length,
      truelen = 0;
    for (var x = 0; x < len; x++) {
      if (str.charCodeAt(x) > 128) {
        truelen += 2;
      } else {
        truelen += 1;
      }
    }
    return truelen;
  },

  getLineString: function(str, offset, linechnum) {
    var len = str.length,
      nlen = 0;
    var x = offset;
    for (; x < len; x++) {
      if (str.charCodeAt(x) > 128) {
        if (nlen + 2 <= linechnum) {
          nlen += 2;
        } else {
          break;
        }
      } else {
        if (nlen + 1 <= linechnum) {
          nlen++;
        } else {
          break;
        }
      }
    }
    // console.log(str.substring(offset, x))
    return str.substring(offset, x);
  },
  /**
    分享
   */
  onShareAppMessage: function(res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '自定义转发标题',
      path: '/pages/index/index',
      success: function(res) {
        // 转发成功
        console.log('转发成功')
      },
      fail: function(res) {
        // 转发失败
        console.log('转发失败')
      }
    }
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
  onShareAppMessage: function(res) {
    var that = this
    return {
      title: that.data.articleContent.title,
      path: 'pages/articleDetails/articleDetails?articleid=' + that.data.artid,
      success: function(res) {
        // 转发成功
      },
      fail: function(res) {
        // 转发失败
      }
    }
  }
})