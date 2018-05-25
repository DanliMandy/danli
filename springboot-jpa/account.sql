-- create table `account`
# DROP TABLE `account` IF EXISTS
CREATE TABLE `account` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `money` double DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
INSERT INTO `account` VALUES ('1', 'aaa', '1000');
INSERT INTO `account` VALUES ('2', 'bbb', '1000');
INSERT INTO `account` VALUES ('3', 'ccc', '1000');



INSERT INTO `question`(question,words,rightword,score) VALUES ('披黄衣，不用剥，酸眯眼，泡泡水(打一水果)', '柠檬泡泡水水酸眯眼','柠檬',10);
INSERT INTO `question`(question,words,rightword,score) VALUES ('人和妖怪的混血儿穿越时空寻找碎片(打一动画片) ', '犬夜叉穿越时空寻找', '犬夜叉',10);
INSERT INTO `question`(question,words,rightword,score) VALUES ('老奶奶烫头发(打一食品)', '银丝卷儿穿越时空寻', '银丝卷老奶奶烫头发',10);
INSERT INTO `question`(question,words,rightword,score) VALUES ('汽油驱动两小轮，行驶迅速轰轰响(打一交通工具)', '摩托车汽油驱动两小', '摩托车',10);
INSERT INTO `question`(question,words,rightword,score) VALUES ('一大串，红通通，遇火点燃啪啪响(打一物品)', '鞭炮遇火点燃啪啪响', '鞭炮',10);
INSERT INTO `question`(question,words,rightword,score) VALUES ('无耻小孩最有名，调侃语言有魅力(打一卡通人物) ', '蜡笔小新侃语有魅力', '蜡笔小新',10);
INSERT INTO `question`(question,words,rightword,score) VALUES ('圆圆浆果色泽艳，草龙珠儿味道甜(打一水果) ', '葡萄草龙珠儿道甜甜', '葡萄',10);
INSERT INTO `question`(question,words,rightword,score) VALUES ('热带果王(打一水果)', '芒果写错字儿它擦擦', '芒果',10);
INSERT INTO `question`(question,words,rightword,score) VALUES ('四四方方像块糖，写错字儿用它擦(打一学习用品)', '橡皮擦写儿用它擦擦', '橡皮擦',10);