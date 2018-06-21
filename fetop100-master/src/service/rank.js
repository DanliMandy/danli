export default {
  getList(cb) {
    const retry = () => setTimeout(() => this.getList(cb), 3000)
    console.log(data);
    var data = [{
      id: 1,
      icon: "../../img/wenshuang.png",
      name: "文双小程序",
      detail: "人人都可以有的小程序"
    },{
      id: 2,
      icon: "../../img/1.png",
      name: "田娜律师",
      detail: "海南追根律师事务所"
    }]
    cb(data)
  },
}