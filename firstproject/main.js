var question = "放手工活公检法评价";
var words = "小水皮大丹丽呵嘿哈";
var rightword = "小水皮大" ;
//打乱words
function upsetArr(arr){
    return arr.sort(function(){ return Math.random() - 0.5});
}
var newWords = upsetArr(words.split("")).join("");
//原理很简单，就是把字符串转成数组，打乱后，再转成字符串
$("#question").text(question);
//填入words
for (var i = 0;i< newWords.length; i++){
    $(".words").children().eq(i).text(newWords[i]);
}


//下面的字点击事件
$(".word").click(function () {
    if ($(".cell").text().length == $(".cells").children().length){
        return
    }
    else {
        for (var i = 0; i < $(".cell").length; i++) {
            var frame = $(".cells").children().eq(i);
            if (frame.text() == "") {
                frame.text($(this).text());
                break;
            }
        }
        $(this).text("");
        frame.attr("wordId",$(this).attr("id"));
    }

    while ($(".cell").text().length == $(".cells").children().length) {
        if ($(".cell").text() == rightword) {
            setTimeout(function () {
                layer.msg('正确');
            }, 400)
        }
        else {
            for(var j = 0;j < $(".cell").length; j++){
                var cellid = $(".cells").children().eq(j);
                for (var k = 0;k < $(".word").length; k++) {
                    var wordid = $(".words").children().eq(k);
                    if (cellid.attr("wordId") == wordid.attr("id")) {
                        wordid.text(cellid.text());
                        cellid.text("");
                    }
                }
            }
            setTimeout(function () {
                layer.msg('错误');
            }, 400)
        }
        return
    }
});
//框框点击事件
$(".cell").click(function () {
    if ($(this).text() == "")
        return
    else {
        for(var j = 0;j < $(".word").length; j++){
            var id = $(".words").children().eq(j).attr("id");
            if (id == $(this).attr("wordId")) {
                $(".words").children().eq(j).text($(this).text());
                $(this).text("");
            }
        }
    }
});