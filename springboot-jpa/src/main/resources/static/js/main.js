



//打乱words
function upsetArr(arr){
    return arr.sort(function(){ return Math.random() - 0.5});
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

var user = "admin"
var psd = "123"
//登录按钮点击事件
$("#login").click(function () {
    var index2 =layer.open({
        type: 2,  //弹出框类型，分为0（信息框，默认）1（页面层）2（iframe层）3（加载层）4（tips层）
        title:'登录', //标题。默认显示为‘信息’
        skin: 'demo-class',  //为弹出框添加自定义类名，以便对弹出框进行样式修改  如果要全部弹出框添加相同类名的话，layer.config({skin: 'demo-class'})
        area: ['400px', '360px'], //弹出框大小
        shadeClose: true, //点击遮罩关闭
        content: 'login.html'
    });

})